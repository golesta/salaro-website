import { builtForChips } from '../lib/siteContent'

export default function BuiltForChips() {
  return (
    <section className="bg-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand/80">Built for</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Designed for creators and boutique brands.</h2>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {builtForChips.map((label) => (
            <span
              key={label}
              className="inline-flex whitespace-nowrap rounded-full border border-brand/30 bg-brand/5 px-5 py-3 text-sm font-semibold text-brand"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
