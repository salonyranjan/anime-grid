"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Anime } from "@/types";
import { Star, Tv2, Clock, Calendar } from "lucide-react";
import { cardVariants } from "@/lib/animations";
import styles from "./AnimeCard.module.css";

interface AnimeCardProps {
  anime: Anime;
  rank: number;
  onSelect: (anime: Anime) => void;
  isFavourite: boolean;
  onToggleFav: (id: string) => void;
}

const statusColors: Record<Anime["status"], string> = {
  completed: "var(--teal)",
  airing: "#4ade80",
  upcoming: "var(--gold)",
};

const statusLabels: Record<Anime["status"], string> = {
  completed: "Completed",
  airing: "Airing",
  upcoming: "Upcoming",
};

export default function AnimeCard({
  anime,
  rank,
  onSelect,
  isFavourite,
  onToggleFav,
}: AnimeCardProps) {
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading');
  const [imgSrc, setImgSrc] = useState(anime.image.original);
  const [retryAttempted, setRetryAttempted] = useState(false);
  
  const FALLBACK_SRC = "/placeholder.svg";
  const score = parseFloat(anime.score);
  const scoreColor = score >= 9 ? "var(--gold)" : score >= 8.5 ? "var(--blue)" : "var(--accent2)";

  /**
   * Handles 404 errors by fetching a fresh URL from the Jikan API 
   * before showing the [ SIGNAL_LOST ] state.
   */
  const handleError = async () => {
    if (retryAttempted) {
      setStatus("error");
      setImgSrc(FALLBACK_SRC);
      return;
    }

    setRetryAttempted(true);

    try {
      // Dynamic fetch using Jikan API to find a working image URL
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(anime.displayName)}&limit=1`
      );
      
      if (!res.ok) throw new Error("API Fetch Failed");
      
      const data = await res.json();
      const freshUrl = data.data[0]?.images?.jpg?.large_image_url;

      if (freshUrl) {
        setImgSrc(freshUrl);
      } else {
        throw new Error("No URL found");
      }
    } catch (err) {
      setStatus("error");
      setImgSrc(FALLBACK_SRC);
    }
  };

  return (
    <motion.article
      className={`${styles.card} ${isFavourite ? styles.favCard : ""}`}
      variants={cardVariants}
      layout
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={() => onSelect(anime)}
    >
      <div className={styles.imgWrap}>
        <Image
          src={imgSrc}
          alt={anime.displayName}
          fill
          unoptimized={true} // Bypasses local DNS issues and strict hostname checks
          priority={rank <= 6}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`${styles.img} ${status === "success" ? "opacity-100" : "opacity-0"}`}
          onLoadingComplete={() => setStatus("success")}
          onError={handleError}
        />
        <div className={styles.imgOverlay} />

        {/* Dynamic Error UI */}
        {status === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-10">
            <div className="text-cyan-500 animate-pulse font-mono text-[10px] tracking-tighter uppercase">
              [ SIGNAL_LOST ]
            </div>
            <div className="mt-2 h-[1px] w-12 bg-cyan-500/50" />
          </div>
        )}

        <div className={`${styles.rank} ${rank <= 3 ? styles.topRank : ""}`}>
          #{rank}
        </div>

        <div className={styles.scorePill} style={{ color: scoreColor }}>
          {score}
        </div>

        <motion.button
          className={`${styles.favBtn} ${isFavourite ? styles.favActive : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFav(anime.id);
          }}
          whileTap={{ scale: 0.85 }}
        >
          <Star size={13} fill={isFavourite ? "currentColor" : "none"} strokeWidth={2} />
        </motion.button>

        <div
          className={styles.statusDot}
          style={{ backgroundColor: statusColors[anime.status] }}
          title={statusLabels[anime.status]}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{anime.displayName}</h3>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <Tv2 size={10} />
            {anime.kind}
          </span>
          <span className={styles.metaItem}>
            <Clock size={10} />
            {anime.episodes.toLocaleString()} eps
          </span>
          <span className={styles.metaItem}>
            <Calendar size={10} />
            {anime.year}
          </span>
        </div>

        <div className={styles.genres}>
          {anime.genre.slice(0, 2).map((g: string) => (
            <span key={g} className={styles.genre}>
              {g}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}