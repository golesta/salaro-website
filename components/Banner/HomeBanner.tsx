"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";

// Deterministic warp positions — seeded so server and client agree.
// 20 hairlines across a 1440 viewBox, irregular but stable.
const WARP_LINES: { x: number; opacity: number }[] = [
  { x: 92,   opacity: 0.18 },
  { x: 148,  opacity: 0.08 },
  { x: 218,  opacity: 0.42 },
  { x: 276,  opacity: 0.18 },
  { x: 334,  opacity: 0.08 },
  { x: 408,  opacity: 0.18 },
  { x: 472,  opacity: 0.08 },
  { x: 540,  opacity: 0.42 },
  { x: 612,  opacity: 0.18 },
  { x: 686,  opacity: 0.08 },
  { x: 762,  opacity: 0.18 },
  { x: 838,  opacity: 0.08 },
  { x: 914,  opacity: 0.42 },
  { x: 988,  opacity: 0.18 },
  { x: 1062, opacity: 0.08 },
  { x: 1138, opacity: 0.18 },
  { x: 1208, opacity: 0.42 },
  { x: 1276, opacity: 0.08 },
  { x: 1342, opacity: 0.18 },
  { x: 1396, opacity: 0.08 },
];

// Knots sit on the brighter warp strands (opacity 0.42).
const KNOTS = [218, 540, 914, 1208];

// Weft curve: a slack quadratic Bezier with a slight downward sag mid-span.
const WEFT_PATH = "M 80 514 Q 720 528 1360 516";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function HomeBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Salaro home banner"
      className="relative w-full overflow-hidden bg-bg"
      style={{ height: "calc(100vh - 64px)", minHeight: 720, maxHeight: 900 }}
    >
      {/* Loom SVG */}
      <svg
        viewBox="0 0 1440 812"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* Warp — 20 static vertical hairlines */}
        <g stroke="var(--accent-d)" strokeWidth="1" fill="none">
          {WARP_LINES.map((line, i) => (
            <line
              key={i}
              x1={line.x}
              x2={line.x}
              y1={0}
              y2={812}
              opacity={line.opacity}
            />
          ))}
        </g>

        {/* Weft — the only animated element */}
        <motion.g
          initial={{ y: 0 }}
          animate={reduceMotion ? { y: 0 } : { y: [-6, 6, -6] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 16,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }
          }
        >
          <path
            d={WEFT_PATH}
            stroke="var(--accent)"
            strokeWidth="1"
            fill="none"
            opacity="0.7"
          />
          {/* PATCH: flat cy={520} for all knots — no per-knot offset formula */}
          {KNOTS.map((x) => (
            <circle
              key={x}
              cx={x}
              cy={520}
              r="2.5"
              fill="var(--accent)"
            />
          ))}
        </motion.g>
      </svg>

      {/* PATCH: grain as a CSS overlay div, not an SVG filter.
          mix-blend-overlay against the dark bg reads as warm texture, not a wash. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' fill='white'/></svg>")`,
        }}
      />

      {/* Type stack — bottom-left aligned */}
      <motion.div
        className="relative z-10 flex h-full flex-col justify-end pb-20 pl-10 pr-10 md:pl-20 md:pr-20 md:pb-32"
        variants={containerVariants}
        initial={reduceMotion ? "show" : "hidden"}
        animate="show"
      >
        <div className="max-w-[920px]">
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center gap-3 font-mono text-[12px] uppercase tracking-wide-mono text-fg-mute"
          >
            <span className="block h-px w-6 bg-accent" aria-hidden="true" />
            A web consultancy · Est. 2008
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-medium text-fg leading-[0.98] tracking-tight-display"
            style={{ fontSize: "clamp(48px, 6.4vw, 96px)" }}
          >
            The complex builds, delivered by{" "}
            <span className="relative whitespace-nowrap">
              agent factories
              {/* Copper accent rule — confirmed by Salar */}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
              />
            </span>{" "}
            and human judgement.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-[54ch] font-body text-[19px] leading-[1.5] tracking-tight-body text-fg-mute"
          >
            Salaro pairs a multi-agent build system — architect, researcher, developer, reviewer — with a small team of senior engineers, for the work bigger agencies turn down.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-fg px-6 py-4 font-body text-[14px] font-medium tracking-tight-body text-fg transition-colors duration-200 hover:bg-fg hover:text-bg"
            >
              Start a conversation
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/about"
              className="font-body text-[14px] text-fg-mute underline-offset-4 hover:text-fg hover:underline"
            >
              See how we build
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Meta strip — bottom edge */}
      <div className="absolute bottom-6 left-10 right-10 z-10 flex justify-between font-mono text-[11px] uppercase tracking-wide-mono text-fg-faint md:left-20 md:right-20">
        <span>01 / Home</span>
        <span>Quiet Loom · V1</span>
        <span>Scroll ↓</span>
      </div>
    </section>
  );
}
