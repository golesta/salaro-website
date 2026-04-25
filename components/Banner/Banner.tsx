"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { WARP_SEEDS, type PageSlug } from "./warpSeeds";
import { WEFT_PARAMS } from "./weftParams";
import { BANNER_COPY } from "./bannerCopy";

const containerVariants: Variants = {
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

type Props = { page: PageSlug };

export default function Banner({ page }: Props) {
  const reduceMotion = useReducedMotion();
  const warps = WARP_SEEDS[page];
  const params = WEFT_PARAMS[page];
  const copy = BANNER_COPY[page];

  const vbH = params.viewBoxHeight;

  const weftPath = params.weft
    ? (() => {
        const { x0, y0Frac, xc, ycFrac, x1, y1Frac } = params.weft;
        const y0 = y0Frac * vbH;
        const yc = ycFrac * vbH;
        const y1 = y1Frac * vbH;
        return `M ${x0} ${y0} Q ${xc} ${yc} ${x1} ${y1}`;
      })()
    : null;

  const knotY = params.weft
    ? params.weft.y0Frac * vbH + 6
    : 0;

  return (
    <section
      aria-label={`${copy.eyebrow} banner`}
      className="relative w-full overflow-hidden bg-bg"
      style={{ height: params.bannerHeight }}
    >
      {/* Loom SVG */}
      <svg
        viewBox={`0 0 1440 ${vbH}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* Warp */}
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

        {/* Weft */}
        {weftPath && (
          <motion.g
            initial={{ y: 0 }}
            animate={reduceMotion ? { y: 0 } : { y: [-4, 4, -4] }}
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
              d={weftPath}
              stroke="var(--accent)"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
            {params.knots.map((x) => (
              <circle
                key={x}
                cx={x}
                cy={knotY}
                r="2.5"
                fill="var(--accent)"
              />
            ))}
          </motion.g>
        )}
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
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-3 font-mono text-[12px] uppercase tracking-wide-mono text-fg-mute"
          >
            <span className="block h-px w-6 bg-accent" aria-hidden="true" />
            {copy.eyebrow}
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-medium text-fg leading-[0.98] tracking-tight-display"
            style={{ fontSize: "clamp(36px, 4.8vw, 72px)" }}
          >
            {copy.h1}
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-[52ch] font-body text-[17px] leading-[1.5] tracking-tight-body text-fg-mute"
          >
            {copy.subhead}
          </motion.p>

          {/* CTA */}
          {copy.cta && (
            <motion.div variants={itemVariants} className="mt-8">
              <Link
                href={copy.cta.href}
                className="inline-flex items-center gap-2 border border-fg px-6 py-3 font-body text-[14px] font-medium tracking-tight-body text-fg transition-colors duration-200 hover:bg-fg hover:text-bg"
              >
                {copy.cta.label}
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Meta strip */}
      <div className="absolute bottom-5 left-10 right-10 z-10 flex justify-between font-mono text-[11px] uppercase tracking-wide-mono text-fg-faint md:left-20 md:right-20">
        <span>{copy.eyebrow}</span>
        <span>Quiet Loom · V1</span>
      </div>
    </section>
  );
}
