"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Tv2, Clock, Calendar } from "lucide-react";
import { Anime } from "@/types";
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
  const score = parseFloat(anime.score);
  
  // Using your CSS variables for colors
  const scoreColor =
    score >= 9 ? "var(--gold)" : score >= 8.5 ? "var(--blue)" : "var(--accent2)";

  return (
    <motion.article
      className={`${styles.card} ${isFavourite ? styles.favCard : ""}`}
      variants={cardVariants}
      layout
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={() => onSelect(anime)}
    >
      {/* Image Wrap: This works with your 2/3 aspect ratio CSS */}
      <div className={styles.imgWrap}>
        <Image
          src={anime.image.original}
          alt={anime.displayName}
          fill
          // Optimized for exactly 4 cards per row (25vw) on desktop
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={styles.img}
          priority={rank <= 4}
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = "0.2";
          }}
        />
        <div className={styles.imgOverlay} />

        {/* Rank badge */}
        <div className={`${styles.rank} ${rank <= 3 ? styles.topRank : ""}`}>
          #{rank}
        </div>

        {/* Score pill */}
        <div className={styles.scorePill} style={{ color: scoreColor }}>
          {anime.score}
        </div>

        {/* Fav button */}
        <motion.button
          className={`${styles.favBtn} ${isFavourite ? styles.favActive : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFav(anime.id);
          }}
          whileTap={{ scale: 0.85 }}
          title={isFavourite ? "Remove from favourites" : "Add to favourites"}
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
        >
          <Star
            size={13}
            fill={isFavourite ? "currentColor" : "none"}
            strokeWidth={2}
          />
        </motion.button>

        {/* Status indicator */}
        <div
          className={styles.statusDot}
          style={{ 
            backgroundColor: statusColors[anime.status],
            color: statusColors[anime.status] 
          }}
          title={statusLabels[anime.status]}
        />
      </div>

      {/* Body Section */}
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
          {anime.genre.slice(0, 2).map((g) => (
            <span key={g} className={styles.genre}>
              {g}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}