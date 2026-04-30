"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Star, Tv2, Clock, Calendar, Users } from "lucide-react";
import { Anime } from "@/types";
import { modalBackdropVariants, modalVariants } from "@/lib/animations";
import styles from "./AnimeModal.module.css";

interface AnimeModalProps {
  anime: Anime | null;
  isFavourite: boolean;
  onClose: () => void;
  onToggleFav: (id: string) => void;
}

function starsFor(score: string) {
  const s = Math.round(parseFloat(score) / 2);
  return "★".repeat(s) + "☆".repeat(5 - s);
}

const statusLabels: Record<Anime["status"], { label: string; color: string }> =
  {
    completed: { label: "Completed", color: "#2dd4bf" },
    airing: { label: "Airing", color: "#4ade80" },
    upcoming: { label: "Upcoming", color: "#f4a628" },
  };

export default function AnimeModal({
  anime,
  isFavourite,
  onClose,
  onToggleFav,
}: AnimeModalProps) {
  const status = anime ? statusLabels[anime.status] : null;

  return (
    <AnimatePresence>
      {anime && (
        <motion.div
          className={styles.backdrop}
          variants={modalBackdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${anime.displayName} details`}
        >
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero image */}
            <div className={styles.heroImg}>
              <Image
                src={anime.image.original}
                alt={anime.displayName}
                fill
                sizes="480px"
                className={styles.img}
                style={{ objectPosition: "top" }}
              />
              <div className={styles.imgGrad} />

              {/* Close */}
              <motion.button
                className={styles.closeBtn}
                onClick={onClose}
                whileTap={{ scale: 0.9 }}
                aria-label="Close modal"
              >
                <X size={16} />
              </motion.button>

              {/* Fav */}
              <motion.button
                className={`${styles.favBtn} ${isFavourite ? styles.favActive : ""}`}
                onClick={() => onToggleFav(anime.id)}
                whileTap={{ scale: 0.88 }}
                aria-label={
                  isFavourite ? "Remove from favourites" : "Add to favourites"
                }
              >
                <Star
                  size={15}
                  fill={isFavourite ? "currentColor" : "none"}
                  strokeWidth={2}
                />
              </motion.button>
            </div>

            {/* Content */}
            <div className={styles.body}>
              {/* Title + status */}
              <div className={styles.titleRow}>
                <h2 className={styles.title}>{anime.displayName}</h2>
                {status && (
                  <span
                    className={styles.statusBadge}
                    style={{
                      color: status.color,
                      borderColor: status.color + "33",
                      background: status.color + "18",
                    }}
                  >
                    {status.label}
                  </span>
                )}
              </div>

              <div className={styles.studio}>by {anime.studio}</div>

              {/* Score row */}
              <div className={styles.scoreRow}>
                <div className={styles.bigScore}>{anime.score}</div>
                <div className={styles.scoreSide}>
                  <div className={styles.stars}>{starsFor(anime.score)}</div>
                  <div className={styles.scoreLabel}>out of 10</div>
                </div>
              </div>

              {/* Stat grid */}
              <div className={styles.statGrid}>
                {[
                  { icon: Tv2, label: "Type", value: anime.kind },
                  {
                    icon: Clock,
                    label: "Episodes",
                    value: anime.episodes.toLocaleString(),
                  },
                  {
                    icon: Clock,
                    label: "Aired",
                    value: anime.episodes_aired.toLocaleString(),
                  },
                  { icon: Calendar, label: "Year", value: anime.year },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className={styles.statItem}>
                    <Icon size={13} className={styles.statIcon} />
                    <div className={styles.statVal}>{value}</div>
                    <div className={styles.statLabel}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className={styles.progressWrap}>
                <div className={styles.progressLabel}>
                  <span>Episodes aired</span>
                  <span>
                    {anime.episodes_aired} / {anime.episodes}
                  </span>
                </div>
                <div className={styles.progressTrack}>
                  <motion.div
                    className={styles.progressFill}
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${(anime.episodes_aired / anime.episodes) * 100}%`,
                    }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className={styles.desc}>{anime.description}</p>

              {/* Genres */}
              <div className={styles.genres}>
                {anime.genre.map((g) => (
                  <span key={g} className={styles.genre}>
                    {g}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className={styles.actions}>
                <motion.button
                  className={`${styles.actionBtn} ${styles.favActionBtn} ${isFavourite ? styles.favActionActive : ""}`}
                  onClick={() => onToggleFav(anime.id)}
                  whileTap={{ scale: 0.97 }}
                >
                  <Star
                    size={14}
                    fill={isFavourite ? "currentColor" : "none"}
                  />
                  {isFavourite ? "Remove Favourite" : "Add to Favourites"}
                </motion.button>
                <motion.button
                  className={`${styles.actionBtn} ${styles.closeActionBtn}`}
                  onClick={onClose}
                  whileTap={{ scale: 0.97 }}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}