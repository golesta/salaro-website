import AnimatedCounter from './AnimatedCounter'
import { metrics } from '../lib/siteContent'

export default function MetricsBand() {
  return (
    <section className="bg-white px-6 py-20 text-[#1A1A1A] transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[2rem] border border-brand/10 bg-brand/5 p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} className="inline-flex" />
              <p className="mt-4 text-sm leading-6 text-[#6B6B6B] dark:text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
