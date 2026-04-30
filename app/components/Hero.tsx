"use client";

import { motion } from "framer-motion";
import { heroTextVariants, fadeIn } from "@/lib/animations";
import styles from "./Hero.module.css";

interface HeroProps {
  totalCount: number;
}

export default function Hero({ totalCount }: HeroProps) {
  return (
    <section className={styles.hero}>
      {/* Background glow */}
      <div className={styles.glow} aria-hidden />

      <motion.div
        className={styles.eyebrow}
        variants={heroTextVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <span className={styles.line} />
        Your personal anime collection
        <span className={styles.line} />
      </motion.div>

      <div className={styles.titleWrap}>
        <motion.h1
          className={styles.title}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          ANIME
          <span className={styles.titleAccent}>GRID</span>
        </motion.h1>
      </div>

      <motion.p
        className={styles.subtitle}
        variants={heroTextVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        Discover, track, and explore {totalCount}+ legendary series.
        <br />
        Powered by Next.js Server Actions with infinite scroll.
      </motion.p>

      <motion.div
        className={styles.chips}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {["Server Actions", "Infinite Scroll", "Framer Motion", "Next.js 14"].map(
          (tag) => (
            <span key={tag} className={styles.chip}>
              {tag}
            </span>
          )
        )}
      </motion.div>
    </section>
  );
}