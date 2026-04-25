"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { WARP_SEEDS } from "./warpSeeds";
import { WEFT_PARAMS } from "./weftParams";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

type Props = {
  eyebrow: string;
  title: string;
  tags?: string[];
};

export default function ProjectDetailBanner({ eyebrow, title, tags }: Props) {
  const reduceMotion = useReducedMotion();
  const warps = WARP_SEEDS["project-detail"];
  const params = WEFT_PARAMS["project-detail"];
  const vbH = params.viewBoxHeight;

  return (
    <section
      aria-label="Project banner"
      className="relative w-full overflow-hidden bg-bg"
      style={{ height: params.bannerHeight }}
    >
      {/* Loom SVG — warps only, no weft for project detail */}
      <svg
        viewBox={`0 0 1440 ${vbH}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g stroke="var(--accent-d)" strokeWidth="1" fill="none">
          {warps.map((line, i) => (
            <line
              key={i}
              x1={line.x}
              x2={line.x}
              y1={0}
              y2={vbH}
              opacity={line.opacity}
            />
          ))}
        </g>
      </svg>

      {/* Grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' fill='white'/></svg>")`,
        }}
      />

      {/* Type stack */}
      <motion.div
        className="relative z-10 flex h-full flex-col justify-end pb-16 pl-10 pr-10 md:pl-20 md:pr-20 md:pb-24"
        variants={containerVariants}
        initial={reduceMotion ? "show" : "hidden"}
        animate="show"
      >
        <div className="max-w-[860px]">
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-3 font-mono text-[12px] uppercase tracking-wide-mono text-fg-mute"
          >
            <span className="block h-px w-6 bg-accent" aria-hidden="true" />
            {eyebrow}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-medium text-fg leading-[0.98] tracking-tight-display"
            style={{ fontSize: "clamp(32px, 4vw, 64px)" }}
          >
            {title}
          </motion.h1>

          {tags && tags.length > 0 && (
            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-fg-faint px-3 py-1 font-mono text-[11px] uppercase tracking-wide-mono text-fg-mute"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Meta strip */}
      <div className="absolute bottom-5 left-10 right-10 z-10 flex justify-between font-mono text-[11px] uppercase tracking-wide-mono text-fg-faint md:left-20 md:right-20">
        <span>08 / Projects</span>
        <span>Quiet Loom · V1</span>
      </div>
    </section>
  );
}
