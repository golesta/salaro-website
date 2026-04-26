"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { WARP_SEEDS, type PageSlug } from "./warpSeeds";
import { WEFT_PARAMS } from "./weftParams";
import { BANNER_COPY } from "./bannerCopy";

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
        return `M ${x0} ${y0Frac * vbH} Q ${xc} ${ycFrac * vbH} ${x1} ${y1Frac * vbH}`;
      })()
    : null;

  const knotY = params.weft ? params.weft.y0Frac * vbH + 6 : 0;

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
        <g stroke="var(--accent-d)" strokeWidth="1" fill="none">
          {warps.map((line, i) => (
            <line key={i} x1={line.x} x2={line.x} y1={0} y2={vbH} opacity={line.opacity} />
          ))}
        </g>

        {weftPath && (
          <motion.g
            initial={{ y: 0 }}
            animate={reduceMotion ? { y: 0 } : { y: [-4, 4, -4] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 16, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
            }
          >
            <path d={weftPath} stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.7" />
            {params.knots.map((x) => (
              <circle key={x} cx={x} cy={knotY} r="2.5" fill="var(--accent)" />
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

      {/*
        Flex column layout:
          [pt-8]  eyebrow
          [flex-1, max-h-20]  top spacer — capped so eyebrow never drifts far from content
          content (H1, subhead, CTA)
          [flex-1]  bottom spacer — absorbs remaining height
          [pb-12]
      */}
      <motion.div
        className="relative z-10 h-full flex flex-col px-10 md:px-20 pb-12"
        variants={containerVariants}
        initial={reduceMotion ? "show" : "hidden"}
        animate="show"
      >
        {/* Eyebrow — proportional top padding scales with viewport height */}
        <div style={{ paddingTop: "clamp(32px, 6vh, 80px)" }}>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-wide-mono text-fg-mute flex-none"
          >
            <span className="block h-px w-6 bg-accent" aria-hidden="true" />
            {copy.eyebrow}
          </motion.div>
        </div>

        {/* Capped top spacer — keeps eyebrow close to content */}
        <div className="flex-1 max-h-20" aria-hidden="true" />

        {/* Content */}
        <div className="max-w-[860px] flex-none">
          <motion.h1
            variants={itemVariants}
            className="font-display font-medium text-fg leading-[0.98] tracking-tight-display"
            style={{ fontSize: "clamp(32px, 4.4vw, 68px)" }}
          >
            {copy.h1}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-[52ch] font-body text-[16px] leading-[1.55] tracking-tight-body text-fg-mute"
          >
            {copy.subhead}
          </motion.p>

          {copy.cta && (
            <motion.div variants={itemVariants} className="mt-7">
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

        {/* Bottom spacer — takes remaining height (weft line breathes here) */}
        <div className="flex-1 min-h-[24px]" aria-hidden="true" />
      </motion.div>

      {/* Meta strip */}
      <div className="absolute bottom-4 right-10 z-10 font-mono text-[11px] uppercase tracking-wide-mono text-fg-faint md:right-20">
        Quiet Loom · V1
      </div>
    </section>
  );
}
