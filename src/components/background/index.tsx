"use client";
import styles from "./styles.module.css";

export function Background() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const starsPositions = Array.from({ length: 100 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
  }));

  return (
    <div className={styles.container}>
      {starsPositions.map((star, index) => (
        <div
          key={index}
          className={styles.star}
          style={{
            left: star.x,
            top: star.y,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
