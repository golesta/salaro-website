'use client'

import { motion } from 'framer-motion'
import { afterCards, beforeCards } from '../lib/siteContent'

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export default function BeforeAfterSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand/20 via-transparent to-brand/05" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand/80">Before</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Pain points that cost time, focus and clarity.</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Every mismatch in your workflow adds friction. These are the areas creators lose momentum and miss the moments that make launches feel premium.
          </p>
          <div className="space-y-4">
            {beforeCards.map((card) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                className="rounded-[2rem] border border-red-500/15 bg-red-500/5 p-6 text-slate-100 shadow-[0_20px_50px_rgba(153,60,37,0.1)]"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
                <p className="mt-4 text-sm font-semibold text-red-200">{card.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand/80">After</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">The brand-ready outcomes every creator needs.</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Smooth workflows, more conversion and less manual busywork create space for the creative work that actually grows your business.
          </p>
          <div className="space-y-4">
            {afterCards.map((card) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-[2rem] border border-brand/20 bg-brand/5 p-6 text-white shadow-[0_20px_50px_rgba(153,60,37,0.1)]"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{card.stat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
