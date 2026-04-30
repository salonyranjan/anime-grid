import Link from "next/link";
import { Tv2 } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Tv2 size={20} className={styles.logoIcon} />
          <span>
            ANIME<span className={styles.logoAccent}>GRID</span>
          </span>
        </Link>
        <div className={styles.tagline}>Your personal collection tracker</div>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Live
        </div>
      </div>
    </nav>
  );
}