"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export function Background() {
  const [{ width, height }, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window.innerWidth - 10,
        height: window.innerHeight - 10,
      });

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
