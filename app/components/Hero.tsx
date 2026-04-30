"use client";

import { motion } from "framer-motion";
import { heroTextVariants, fadeIn } from "@/lib/animations";
import styles from "./Hero.module.css";

interface HeroProps {
  totalCount: number;
}

export default function Hero({ totalCount }: HeroProps) {
  // Unique labels mapping your tech stack to system-level terminology
  const techChips = [
    "V14 Protocol",      // Next.js 14
    "Instant Execution", // Server Actions
    "Eternal Stream",    // Infinite Scroll
    "Kinetic Interface"  // Framer Motion
  ];

  return (
    <section className={styles.hero}>
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
        aria-hidden
      />
      
      {/* Background glow and gradient blend */}
      <div className={styles.glow} aria-hidden />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" aria-hidden />

      <div className="relative z-10 w-full flex flex-col items-center">
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
          Your anime journey, archived in high definition.
        </motion.p>

        <motion.div
          className={styles.chips}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          {techChips.map((tag) => (
            <motion.span 
              key={tag} 
              className={styles.chip}
              whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}