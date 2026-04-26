"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { WARP_SEEDS } from "./warpSeeds";
import { WEFT_PARAMS } from "./weftParams";

const WARPS = WARP_SEEDS.home;
const PARAMS = WEFT_PARAMS.home;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
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
  const vbH = PARAMS.viewBoxHeight;

  const { x0, y0Frac, xc, ycFrac, x1, y1Frac } = PARAMS.weft!;
  const weftPath = `M ${x0} ${y0Frac * vbH} Q ${xc} ${ycFrac * vbH} ${x1} ${y1Frac * vbH}`;
  const knotY = y0Frac * vbH + 6;

  return (
    <section
      aria-label="Salaro home banner"
      className="relative w-full overflow-hidden bg-bg"
      style={{ height: "clamp(640px, 82vh, 860px)" }}
    >
      {/* Loom SVG */}
      <svg
        viewBox={`0 0 1440 ${vbH}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g stroke="var(--accent-d)" strokeWidth="1" fill="none">
          {WARPS.map((line, i) => (
            <line key={i} x1={line.x} x2={line.x} y1={0} y2={vbH} opacity={line.opacity} />
          ))}
        </g>

        <motion.g
          initial={{ y: 0 }}
          animate={reduceMotion ? { y: 0 } : { y: [-6, 6, -6] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 16, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
          }
        >
          <path d={weftPath} stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.7" />
          {PARAMS.knots.map((x) => (
            <circle key={x} cx={x} cy={knotY} r="2.5" fill="var(--accent)" />
          ))}
        </motion.g>
      </svg>

      {/* Grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' fill='white'/></svg>")`,
        }}
      />

      {/* Flex column: proportional top zone → capped spacer → content with proportional bottom */}
      <motion.div
        className="relative z-10 flex h-full flex-col px-10 md:px-20"
        variants={containerVariants}
        initial={reduceMotion ? "show" : "hidden"}
        animate="show"
      >
        {/* Top zone — eyebrow with proportional padding */}
        <div style={{ paddingTop: "clamp(18px, 4.5vh, 60px)" }}>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-wide-mono text-fg-mute"
          >
            <span className="block h-px w-6 bg-accent" aria-hidden="true" />
            A web consultancy · Est. 2008
          </motion.div>
        </div>

        {/* Capped spacer — lets content breathe without floating into space */}
        <div className="flex-1 min-h-[24px] max-h-[18vh]" aria-hidden="true" />

        {/* Content block — proportional bottom padding keeps it above meta strip */}
        <div className="max-w-[920px]" style={{ paddingBottom: "clamp(60px, 12vh, 140px)" }}>
          <motion.h1
            variants={itemVariants}
            className="font-display font-medium text-fg leading-[0.98] tracking-tight-display"
            style={{ fontSize: "clamp(40px, 5.6vw, 96px)" }}
          >
            The complex builds, delivered by{" "}
            <span className="relative whitespace-nowrap">
              agent factories
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
              />
            </span>{" "}
            and human judgement.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-[54ch] font-body text-[18px] leading-[1.5] tracking-tight-body text-fg-mute"
          >
            Salaro pairs a multi-agent build system — architect, researcher, developer, reviewer — with a small team of senior engineers, for the work bigger agencies turn down.
          </motion.p>

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

      {/* Meta strip */}
      <div className="absolute bottom-5 left-10 right-10 z-10 flex justify-between font-mono text-[11px] uppercase tracking-wide-mono text-fg-faint md:left-20 md:right-20">
        <span>01 / Home</span>
        <span>Quiet Loom · V1</span>
        <span>Scroll ↓</span>
      </div>
    </section>
  );
}
