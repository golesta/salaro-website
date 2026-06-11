'use client'

import { useState } from 'react'
import { pricingPlans } from '../lib/siteContent'
import PricingCard from './PricingCard'

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand/80">Pricing</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Choose a plan that fits your creative business.</h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Monthly or annual billing for creators who want clarity, automation and a polished launch system.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded-full bg-white/5 px-2 py-2 text-sm text-slate-300 sm:flex-row">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`rounded-full px-5 py-3 transition ${!isAnnual ? 'bg-brand text-white' : 'bg-transparent text-slate-300 hover:bg-white/10'}`}
          >
            Monthly billing
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`rounded-full px-5 py-3 transition ${isAnnual ? 'bg-brand text-white' : 'bg-transparent text-slate-300 hover:bg-white/10'}`}
          >
            Annual billing <span className="ml-2 rounded-full bg-brand/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand">20% off</span>
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} highlighted={plan.highlighted} />
          ))}
        </div>
      </div>
    </section>
  )
}
