// Placeholder banner — visual design tokens slot in here once the banner spec arrives.
// Height variants: "hero" (60vh), "page" (40vh), "slim" (30vh)

import Link from "next/link";

type BannerProps = {
  h1: string;
  subhead: string;
  cta?: { label: string; href: string };
  height?: "hero" | "page" | "slim";
};

const heightClass = {
  hero: "min-h-[60vh]",
  page: "min-h-[40vh]",
  slim: "min-h-[30vh]",
};

export default function Banner({ h1, subhead, cta, height = "page" }: BannerProps) {
  return (
    <section
      className={`${heightClass[height]} flex items-end pb-16 pt-32 px-6 bg-fg text-bg`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-4 max-w-3xl">
          {h1}
        </h1>
        <p className="text-base md:text-lg text-bg/60 mb-8 max-w-xl">
          {subhead}
        </p>
        {cta && (
          <Link
            href={cta.href}
            className="inline-block px-6 py-3 text-sm font-medium bg-[var(--color-accent)] text-bg rounded-lg hover:opacity-80 transition-opacity"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
