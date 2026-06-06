"use client";

import { useEffect, useState } from "react";
import styles from "./HeroRotator.module.css";

const ROTATIONS = [
  "template",
  "Wix site",
  "WordPress install",
  "Squarespace",
  "starter kit",
];

export default function HeroRotator() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"in" | "leaving" | "entering">("in");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout>;
    const cycle = () => {
      setPhase("leaving");
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROTATIONS.length);
        setPhase("entering");
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setPhase("in"))
        );
      }, 500);
      timer = setTimeout(cycle, 5000);
    };
    timer = setTimeout(cycle, 5000);
    return () => clearTimeout(timer);
  }, []);

  const slotClass = [
    styles.slot,
    phase === "leaving" ? styles.leaving : "",
    phase === "entering" ? styles.entering : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={styles.rotator}>
      <span className={slotClass}>{ROTATIONS[idx]}</span>
    </span>
  );
}
