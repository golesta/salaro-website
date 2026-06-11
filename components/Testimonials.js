import Image from 'next/image'
import { testimonials } from '../lib/siteContent'

export default function Testimonials() {
  return (
    <section className="px-6 py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand/80">Testimonials</p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#1A1A1A] sm:text-5xl dark:text-white">
            Creators who feel the difference in every launch.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[2rem] border border-brand/10 bg-brand/5 p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-[#0F0F0F]/95 dark:shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
              <div className="mb-6 text-7xl leading-none text-brand/20">"</div>
              <p className="text-base leading-8 text-[#6B6B6B] dark:text-slate-300">{item.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                <Image src={item.avatar} alt={item.name} width={48} height={48} className="rounded-full bg-brand/10 dark:bg-white/5" />
                <div>
                  <p className="font-semibold text-[#1A1A1A] dark:text-white">{item.name}</p>
                  <p className="text-sm text-[#6B6B6B] dark:text-slate-400">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
