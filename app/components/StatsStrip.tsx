import { ANIME_DATABASE } from "@/lib/data";
import styles from "./StatsStrip.module.css";

export default function StatsStrip() {
  const total = ANIME_DATABASE.length;
  const avgScore = (
    ANIME_DATABASE.reduce((s, a) => s + parseFloat(a.score), 0) / total
  ).toFixed(2);
  const topScore = Math.max(...ANIME_DATABASE.map((a) => parseFloat(a.score)));
  const totalEps = ANIME_DATABASE.reduce((s, a) => s + a.episodes, 0);

  const stats = [
    { label: "Anime Series", value: total.toString(), color: "red" },
    { label: "Top Score", value: topScore.toFixed(2), color: "gold" },
    { label: "Average Score", value: avgScore, color: "" },
    {
      label: "Total Episodes",
      value: totalEps.toLocaleString(),
      color: "blue",
    },
    {
      label: "Studios",
      value: new Set(ANIME_DATABASE.map((a) => a.studio)).size.toString(),
      color: "teal",
    },
  ];

  return (
    <div className={styles.strip}>
      {stats.map((s, i) => (
        <div key={i} className={styles.item}>
          <div className={`${styles.value} ${s.color ? styles[s.color] : ""}`}>
            {s.value}
          </div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}