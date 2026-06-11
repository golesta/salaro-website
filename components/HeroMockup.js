'use client'

import { motion } from 'framer-motion'
import { CalendarDays, Sparkles, ArrowRight, Cpu } from 'lucide-react'

const float = { y: [0, -8, 0] }
const transition = { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }

export default function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand/20 blur-[120px] opacity-20 dark:opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F0F0F]/95 p-6 shadow-[0_40px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl"
      >
        <motion.div
          animate={float}
          transition={{ ...transition, delay: 0.1 }}
          className="rounded-[1.75rem] border border-white/10 bg-[#121212]/95 p-5 shadow-[0_14px_50px_rgba(0,0,0,0.22)]"
        >
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-slate-400">
            <span className="flex items-center gap-2 text-brand text-sm font-semibold">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand" /> Today
            </span>
            <span>3:34 pm</span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-200 shadow-inner shadow-white/5">
              <p className="font-semibold text-white">Client kickoff call</p>
              <p className="mt-2 text-slate-400">Finalize messaging and campaign flow for launch.</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-200 shadow-inner shadow-white/5">
              <p className="font-semibold text-white">Launch checklist</p>
              <p className="mt-2 text-slate-400">Review landing page, emails, and appointment flows.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={float}
          transition={{ ...transition, delay: 0.2 }}
          className="mt-6 grid gap-3 sm:grid-cols-3"
        >
          {[
            { label: '+22%', value: 'Revenue' },
            { label: '32 RDV', value: 'Appointments' },
            { label: '+12%', value: 'Clients' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl bg-white/5 p-4 text-center text-sm text-slate-100 shadow-inner shadow-white/5">
              <p className="text-xl font-semibold text-white">{item.label}</p>
              <p className="mt-2 text-slate-400">{item.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={float}
          transition={{ ...transition, delay: 0.35 }}
          className="mt-6 rounded-[1.75rem] bg-[#161616]/95 p-5 shadow-[0_28px_60px_rgba(0,0,0,0.2)]"
        >
          <div className="flex items-center justify-between text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-brand" />
              <span>AI marketing module</span>
            </div>
            <span className="rounded-full bg-brand/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-brand">
              Live
            </span>
          </div>
          <div className="mt-5 rounded-3xl bg-white/5 p-4">
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Campaign score</p>
                <p className="mt-2 text-2xl font-semibold">84%</p>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-brand/10 text-brand">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between text-sm text-slate-300">
              <span>Next message ready</span>
              <div className="inline-flex items-center gap-1 text-brand font-semibold">
                <ArrowRight className="h-4 w-4" />
                Send
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
