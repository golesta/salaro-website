'use client'

import { ArrowRight } from 'lucide-react'

export default function WorkShowcase({
  kicker = 'SECTOR FOCUS · NATURAL RESOURCES',
  subLinks = ['Oil & gas', 'Mining & minerals', 'Energy transition'],
  heading = 'Marketing collateral for *natural resources* companies.',
  subheadBody = 'We craft highly polished digital experiences that resonate with capital partners, project owners and corporate boards. From narrative-driven campaigns to premium investor materials, our work is designed to feel authoritative and precise.',
  pillButtons = ['WEB DESIGN', 'BRANDING', 'CONTENT', 'STRATEGY'],
  featured = {
    kicker: 'FEATURED · WEBSITE',
    title: 'HBM Partners',
    description: 'A comprehensive digital overhaul for a leading natural resources advisory firm.',
    cta: 'VIEW THE SITE'
  },
  secondary = {
    kicker: 'MORE WORK',
    title: 'Your project *next*.',
    description: 'We partner with forward-thinking brands to create digital experiences that drive engagement and revenue growth.',
    cta: 'START A CONVERSATION'
  }
}) {
  const parseHeading = (text) => {
    const parts = text.split(/(\*[^*]+\*)/g)
    return parts.map((part, i) =>
      part.startsWith('*') && part.endsWith('*')
        ? <em key={i} className="not-italic text-brand">{part.slice(1, -1)}</em>
        : <span key={i}>{part}</span>
    )
  }

  const parseTitle = (text) => {
    const parts = text.split(/(\*[^*]+\*)/g)
    return parts.map((part, i) =>
      part.startsWith('*') && part.endsWith('*')
        ? <em key={i} className="not-italic italic">{part.slice(1, -1)}</em>
        : <span key={i}>{part}</span>
    )
  }

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-none">
          <div className="rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,216,186,0.35),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(153,60,37,0.1),_transparent_40%)] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(220px,280px)_1fr] lg:gap-14">
              <aside className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-slate-950/95 p-8 shadow-2xl shadow-slate-900/10 ring-1 ring-white/10 dark:border-slate-800 dark:bg-slate-900/95">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),_transparent_35%)]" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-12 rounded-full bg-brand/80" aria-hidden="true" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.32em] font-semibold text-brand/80">{kicker}</div>
                      <h4 className="mt-2 text-lg font-serif font-semibold text-white">Sector focus</h4>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-lg shadow-black/10">
                    <p className="text-sm leading-7 text-slate-300">
                      Natural resources brands need polished digital collateral that feels purposeful, credible and ready for investor review.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {subLinks.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/95 px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-x-0.5 hover:bg-slate-900/95"
                      >
                        <span>{link}</span>
                        <span className="text-brand">→</span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10">
                      View case study
                    </a>
                    <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-light">
                      Contact team
                    </a>
                  </div>
                </div>
              </aside>

              <div className="space-y-8">
                <div className="space-y-6 max-w-3xl">
                  <h1 className="text-5xl sm:text-6xl font-serif font-bold leading-tight text-slate-950 dark:text-white">
                    {parseHeading(heading)}
                  </h1>
                  <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                    {subheadBody}
                  </p>
                </div>

                <div className="mt-10 space-y-6 rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] font-semibold text-brand/70">
                        {secondary.kicker}
                      </div>
                      <h3 className="mt-3 text-4xl font-serif font-bold text-slate-950 dark:text-white">
                        {parseTitle(secondary.title)}
                      </h3>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-light"
                    >
                      {secondary.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {secondary.description}
                  </p>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
                      <p className="font-semibold">Investor-ready messaging</p>
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        Crisp positioning that earns trust with financial and executive stakeholders.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
                      <p className="font-semibold">Premium presentation</p>
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        Elegant layouts and polished visuals that reflect the quality of your business.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {pillButtons.map((btn) => (
                    <button
                      key={btn}
                      className="rounded-full border border-brand/30 bg-brand/5 px-4 py-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand transition hover:border-brand/60 hover:bg-brand/15"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-[1.55fr_minmax(320px,360px)]">
              <div className="space-y-6">
                <div className="relative overflow-hidden flex flex-col rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 ring-1 ring-white/10">
<div className="pointer-events-none absolute right-0 bottom-0 h-full w-3/5 max-w-[420px] opacity-35">
                  <svg viewBox="0 0 360 420" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
                    <defs>
                      <linearGradient id="fade-right" x1="1" y1="0" x2="0" y2="0">
                        <stop offset="0%" stopColor="white" stopOpacity="0.35" />
                        <stop offset="60%" stopColor="white" stopOpacity="0.10" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <mask id="fade-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#fade-right)" />
                      </mask>
                    </defs>

                    <g mask="url(#fade-mask)" stroke="#f6c17e" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.42">
                      <path d="M22 328 L88 296 L130 316 L188 278 L236 298 L288 268" />
                      <path d="M14 344 L76 312 L122 334 L180 290 L228 312 L286 278" />
                      <path d="M40 286 L92 256 L142 278 L192 244 L242 266" />

                      <path d="M104 212 L104 348" />
                      <path d="M104 242 L86 212 L118 192 L150 212" />
                      <path d="M118 192 L118 168" />

                      <path d="M196 118 L204 84 L238 84 L246 118" />
                      <path d="M204 84 L238 84" />
                      <path d="M204 102 L238 102" />
                      <path d="M196 118 L180 150" />
                      <path d="M246 118 L260 150" />
                      <path d="M180 150 L260 150" />

                      <path d="M196 118 L190 168 L240 168 L234 118" />
                      <path d="M202 168 L202 198" />
                      <path d="M228 168 L228 198" />
                      <path d="M202 198 L228 198" />

                      <path d="M270 244 L312 244" />
                      <path d="M270 256 L312 256" />
                      <path d="M270 268 L312 268" />
                    </g>
                    </svg>
                  </div>

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] font-semibold text-brand/80">
                        {featured.kicker}
                      </div>
                      <h2 className="mt-1 text-3xl sm:text-4xl font-serif font-bold leading-tight text-white">
                        {featured.title}
                      </h2>
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.20em] text-white/80">
                      Natural resources
                    </span>
                  </div>

                  <p className="max-w-2xl text-sm leading-7 text-slate-300">
                    {featured.description}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Services</div>
                      <p className="mt-3 text-sm leading-6 text-slate-200">
                        Brand narrative, investor materials, campaign strategy and digital storytelling.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Outcome</div>
                      <p className="mt-3 text-sm leading-6 text-slate-200">
                        Elevated decks, polished case studies and commercial-ready digital assets.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-light"
                >
                  {featured.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

            </div>

            <div className="mt-16 space-y-6">
              <div className="rounded-[2rem] border border-slate-200/80 bg-slate-50 p-6 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
                <div className="font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Built for natural resources
                </div>
                <ul className="mt-5 space-y-4">
                  <li className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/70">
                    <div className="font-semibold text-slate-900 dark:text-white">Story-led positioning</div>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Clear narratives for investors, partners and internal teams.
                    </p>
                  </li>
                  <li className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/70">
                    <div className="font-semibold text-slate-900 dark:text-white">Visual clarity</div>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Balanced layouts and refined typography for a premium brand experience.
                    </p>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
