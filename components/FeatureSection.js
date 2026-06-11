import { Check } from 'lucide-react'

export default function FeatureSection({ reverse = false, number, eyebrow, title, description, bullets, mockupComponent: MockupComponent }) {
  return (
    <section
      className={`grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] ${reverse ? 'lg:grid-flow-dense' : ''}`}
    >
      <div className={`${reverse ? 'lg:col-start-2 lg:pl-10' : ''} relative flex flex-col justify-center gap-6`}
      >
        <span className="text-sm uppercase tracking-[0.28em] text-brand/80">{eyebrow}</span>
        <div className="relative overflow-hidden rounded-[2rem] bg-white/5 p-7 shadow-[0_28px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl border border-white/10 dark:border-white/10">
          <span className="pointer-events-none absolute -top-8 left-0 text-[6rem] font-bold uppercase tracking-[0.2em] text-brand/10 opacity-90 sm:text-[8rem]">
            {number}
          </span>
          <div className="relative space-y-6">
            <h3 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h3>
            <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
            <div className="grid gap-3">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${reverse ? 'lg:col-start-1 lg:pr-10' : ''} flex items-center justify-center`}
      >
        <div className="relative w-full rounded-[2rem] border border-white/10 bg-[#111111]/90 p-6 shadow-[0_35px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <MockupComponent />
        </div>
      </div>
    </section>
  )
}
