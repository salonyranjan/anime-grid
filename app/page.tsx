"use client";

import { useState, useEffect, useCallback, useRef, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Star, LayoutGrid, List, ChevronDown, Loader2, X } from "lucide-react";
import Image from "next/image";
import { fetchAnimeAction, searchAnimeAction } from "@/lib/action";
import { Anime, FilterState, PaginatedResponse } from "@/types";
import AnimeCard from "./components/AnimeCard";
import AnimeModal from "./components/AnimeModal";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import Navbar from "./components/Navbar";
import { staggerContainer, fadeInUp, slideInLeft } from "@/lib/animations";
import { getAllGenres, ANIME_DATABASE } from "@/lib/data";
import styles from "./page.module.css";

const GENRES = getAllGenres();
const SORT_OPTIONS: { value: FilterState["sort"]; label: string }[] = [
  { value: "score", label: "Top Score" },
  { value: "name", label: "Name A–Z" },
  { value: "episodes", label: "Most Episodes" },
  { value: "year", label: "Newest First" },
];

export default function HomePage() {
  // ─── State ───
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [cursor, setCursor] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isPending, startTransition] = useTransition();

  const [filters, setFilters] = useState<FilterState>({
    search: "",
    sort: "score",
    genre: "all",
    minScore: 0,
  });

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [favourites, setFavourites] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  // ─── Refs ───
  const sentinelRef = useRef<HTMLDivElement>(null);
  const searchTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const isLoadingRef = useRef(false);

  // ─── Load favourites from localStorage ───
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ag_favs");
      if (saved) setFavourites(new Set(JSON.parse(saved)));
    } catch {}
  }, []);

  const saveFavourites = useCallback((favs: Set<string>) => {
    try {
      localStorage.setItem("ag_favs", JSON.stringify([...favs]));
    } catch {}
  }, []);

  // ─── Toggle favourite ───
  const toggleFavourite = useCallback(
    (id: string) => {
      setFavourites((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        saveFavourites(next);
        return next;
      });
    },
    [saveFavourites]
  );

  // ─── Fetch page (server action) ───
  const fetchPage = useCallback(
    async (nextCursor: number, currentFilters: FilterState, replace = false) => {
      if (isLoadingRef.current) return;
      isLoadingRef.current = true;
      setIsLoading(true);

      try {
        const result: PaginatedResponse = await fetchAnimeAction(
          nextCursor,
          currentFilters
        );

        setAnimeList((prev) =>
          replace ? result.data : [...prev, ...result.data]
        );
        setCursor(result.nextCursor ?? nextCursor + result.data.length);
        setHasMore(result.hasMore);
        setTotal(result.total);
      } catch (err) {
        console.error("Failed to fetch:", err);
      } finally {
        setIsLoading(false);
        setIsInitialLoad(false);
        isLoadingRef.current = false;
      }
    },
    []
  );

  // ─── Initial load ───
  useEffect(() => {
    fetchPage(0, filters, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── Filter change → reset + reload ───
  const applyFilters = useCallback(
    (newFilters: FilterState) => {
      setFilters(newFilters);
      setAnimeList([]);
      setCursor(0);
      setHasMore(true);
      setIsInitialLoad(true);
      startTransition(() => {
        fetchPage(0, newFilters, true);
      });
    },
    [fetchPage]
  );

  // ─── Search debounce ───
  useEffect(() => {
    clearTimeout(searchTimerRef.current);
    searchTimerRef.current = setTimeout(() => {
      applyFilters({ ...filters, search: searchInput });
    }, 380);
    return () => clearTimeout(searchTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  // ─── IntersectionObserver for infinite scroll ───
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasMore && !isLoadingRef.current) {
          fetchPage(cursor, filters, false);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [cursor, hasMore, filters, fetchPage]);

  // ─── Keyboard: close modal on Escape ───
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedAnime(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // ─── Filter helpers ───
  const updateSort = (sort: FilterState["sort"]) =>
    applyFilters({ ...filters, search: searchInput, sort });

  const updateGenre = (genre: string) =>
    applyFilters({ ...filters, search: searchInput, genre });

  const updateMinScore = (minScore: number) =>
    applyFilters({ ...filters, search: searchInput, minScore });

  const clearSearch = () => {
    setSearchInput("");
    applyFilters({ ...filters, search: "" });
  };

  // ─── Skeleton cards ───
  const SkeletonCard = () => (
    <div className={styles.skeleton}>
      <div className={styles.skeletonImg} />
      <div className={styles.skeletonBody}>
        <div className={styles.skeletonLine} style={{ width: "70%" }} />
        <div className={styles.skeletonLine} style={{ width: "45%" }} />
      </div>
    </div>
  );

  // ─── Render ───
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Hero — server-rendered data passed as prop */}
        <Hero totalCount={ANIME_DATABASE.length} />

        {/* Stats strip — pure server component */}
        <StatsStrip />

        {/* ── Toolbar ── */}
        <motion.div
          className={styles.toolbar}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {/* Search */}
          <div className={styles.searchWrap}>
            <Search size={15} className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search anime, genre, studio…"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              aria-label="Search anime"
            />
            {searchInput && (
              <motion.button
                className={styles.clearBtn}
                onClick={clearSearch}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                aria-label="Clear search"
              >
                <X size={13} />
              </motion.button>
            )}
          </div>

          {/* Sort chips */}
          <div className={styles.sortChips}>
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                className={`${styles.chip} ${
                  filters.sort === opt.value ? styles.chipActive : ""
                }`}
                onClick={() => updateSort(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Filter toggle */}
          <button
            className={`${styles.filterToggle} ${
              showFilters ? styles.filterToggleActive : ""
            }`}
            onClick={() => setShowFilters((v) => !v)}
            aria-expanded={showFilters}
          >
            <SlidersHorizontal size={14} />
            Filters
            <ChevronDown
              size={13}
              style={{
                transform: showFilters ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
          </button>

          <div className={styles.toolbarRight}>
            {/* Favourites toggle */}
            <button
              className={`${styles.favToggle} ${
                filters.genre === "__fav__" ? styles.favToggleActive : ""
              }`}
              onClick={() =>
                updateGenre(filters.genre === "__fav__" ? "all" : "__fav__")
              }
              title="Show favourites only"
            >
              <Star
                size={14}
                fill={filters.genre === "__fav__" ? "currentColor" : "none"}
              />
              <span className={styles.favCount}>{favourites.size}</span>
            </button>

            {/* View toggle */}
            <div className={styles.viewToggle}>
              <button
                className={`${styles.viewBtn} ${
                  viewMode === "grid" ? styles.viewBtnActive : ""
                }`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <LayoutGrid size={15} />
              </button>
              <button
                className={`${styles.viewBtn} ${
                  viewMode === "list" ? styles.viewBtnActive : ""
                }`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <List size={15} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Expandable filters panel ── */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              className={styles.filtersPanel}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className={styles.filtersPanelInner}>
                {/* Genre filter */}
                <div className={styles.filterGroup}>
                  <span className={styles.filterLabel}>Genre</span>
                  <div className={styles.genreChips}>
                    {GENRES.map((g) => (
                      <button
                        key={g}
                        className={`${styles.chip} ${styles.chipSm} ${
                          filters.genre === g ? styles.chipActive : ""
                        }`}
                        onClick={() => updateGenre(g)}
                      >
                        {g === "all" ? "All Genres" : g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Min score slider */}
                <div className={styles.filterGroup}>
                  <span className={styles.filterLabel}>
                    Min Score:{" "}
                    <strong style={{ color: "var(--accent)" }}>
                      {filters.minScore > 0
                        ? `${filters.minScore.toFixed(1)}+`
                        : "Any"}
                    </strong>
                  </span>
                  <input
                    type="range"
                    min={0}
                    max={9}
                    step={0.5}
                    value={filters.minScore}
                    onChange={(e) => updateMinScore(parseFloat(e.target.value))}
                    className={styles.slider}
                    aria-label="Minimum score filter"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Results info bar ── */}
        <motion.div
          className={styles.resultsBar}
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
        >
          {!isInitialLoad && (
            <>
              <span className={styles.resultsCount}>
                <strong>{animeList.length}</strong>
                {total > animeList.length && ` of ${total}`} series
                {filters.search && (
                  <span className={styles.resultsQuery}>
                    {" "}
                    for &ldquo;{filters.search}&rdquo;
                  </span>
                )}
              </span>
              {(isPending || isLoading) && (
                <Loader2 size={13} className={styles.inlineSpinner} />
              )}
            </>
          )}
        </motion.div>

        {/* ── Grid / List ── */}
        <AnimatePresence mode="wait">
          {isInitialLoad ? (
            // Skeleton grid
            <motion.div
              key="skeleton"
              className={
                viewMode === "grid" ? styles.grid : styles.list
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </motion.div>
          ) : animeList.length === 0 ? (
            // Empty state
            <motion.div
              key="empty"
              className={styles.empty}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className={styles.emptyIcon}>( ╥ω╥ )</div>
              <h3 className={styles.emptyTitle}>No Results Found</h3>
              <p className={styles.emptyText}>
                Try adjusting your search or filters.
              </p>
              <button
                className={styles.resetBtn}
                onClick={() => {
                  setSearchInput("");
                  applyFilters({
                    search: "",
                    sort: "score",
                    genre: "all",
                    minScore: 0,
                  });
                }}
              >
                Reset all filters
              </button>
            </motion.div>
          ) : viewMode === "grid" ? (
            // Grid view
            <motion.div
              key="grid"
              className={styles.grid}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {animeList.map((anime, i) => (
                <AnimeCard
                  key={`${anime.id}-${i}`}
                  anime={anime}
                  rank={i + 1}
                  onSelect={setSelectedAnime}
                  isFavourite={favourites.has(anime.id)}
                  onToggleFav={toggleFavourite}
                />
              ))}
            </motion.div>
          ) : (
            // List view
            <motion.div
              key="list"
              className={styles.list}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {animeList.map((anime, i) => (
                <ListRow
                  key={`${anime.id}-${i}`}
                  anime={anime}
                  rank={i + 1}
                  onSelect={setSelectedAnime}
                  isFavourite={favourites.has(anime.id)}
                  onToggleFav={toggleFavourite}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Infinite scroll sentinel ── */}
        <div ref={sentinelRef} className={styles.sentinel} aria-hidden />

        {/* ── Load more indicator ── */}
        <AnimatePresence>
          {isLoading && !isInitialLoad && (
            <motion.div
              className={styles.loadingMore}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Loader2 size={20} className={styles.spinner} />
              <span>Loading more…</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── End of results ── */}
        {!hasMore && animeList.length > 0 && !isLoading && (
          <motion.div
            className={styles.endMessage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className={styles.endLine} />
            <span>All {total} series loaded</span>
            <span className={styles.endLine} />
          </motion.div>
        )}
      </main>

      {/* ── Detail Modal ── */}
      <AnimeModal
        anime={selectedAnime}
        isFavourite={selectedAnime ? favourites.has(selectedAnime.id) : false}
        onClose={() => setSelectedAnime(null)}
        onToggleFav={toggleFavourite}
      />
    </>
  );
}

// ── List Row sub-component ──────────────────────────────────────────────────
interface ListRowProps {
  anime: Anime;
  rank: number;
  onSelect: (a: Anime) => void;
  isFavourite: boolean;
  onToggleFav: (id: string) => void;
}

function ListRow({ anime, rank, onSelect, isFavourite, onToggleFav }: ListRowProps) {
  const pct = ((anime.episodes_aired / anime.episodes) * 100).toFixed(0);

  return (
    <motion.div
      className={`${styles.listRow} ${isFavourite ? styles.listRowFav : ""}`}
      variants={fadeInUp}
      layout
      whileHover={{ x: 4, transition: { duration: 0.15 } }}
      onClick={() => onSelect(anime)}
    >
      <div className={`${styles.listRank} ${rank <= 3 ? styles.listRankTop : ""}`}>
        {rank}
      </div>

      <div className={styles.listThumbWrap}>
        <Image
          src={anime.image.original}
          alt={anime.displayName}
          fill
          sizes="48px"
          className={styles.listThumb}
        />
      </div>

      <div className={styles.listInfo}>
        <div className={styles.listName}>{anime.displayName}</div>
        <div className={styles.listMeta}>
          {anime.kind} &bull; {anime.episodes.toLocaleString()} eps &bull;{" "}
          {anime.year} &bull; {anime.studio}
        </div>
      </div>

      <div className={styles.listBarWrap}>
        <motion.div
          className={styles.listBar}
          initial={{ width: "0%" }}
          animate={{ width: `${(parseFloat(anime.score) / 9.24) * 100}%` }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      <div className={styles.listScore}>{anime.score}</div>

      <motion.button
        className={`${styles.listFavBtn} ${isFavourite ? styles.listFavActive : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFav(anime.id);
        }}
        whileTap={{ scale: 0.85 }}
        aria-label="Toggle favourite"
      >
        <Star size={13} fill={isFavourite ? "currentColor" : "none"} />
      </motion.button>
    </motion.div>
  );
}