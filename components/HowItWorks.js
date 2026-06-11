import { ArrowRight } from 'lucide-react'
import { howItWorksSteps } from '../lib/siteContent'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand/80">How it works</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            A simple, repeatable flow for launch-ready campaigns.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Build once, automate the follow-up, and keep every launch aligned with your brand and revenue goals.
          </p>
        </div>
        <div className="relative grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 lg:grid-cols-3 lg:p-8">
          <div className="absolute inset-x-12 top-1/2 h-px bg-dashed bg-white/10" />
          {howItWorksSteps.map((step, index) => (
            <div key={step.label} className="relative rounded-[1.75rem] border border-white/10 bg-[#0F0F0F]/70 p-8 text-slate-200 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-brand/10 text-brand font-semibold">
                {step.label}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{step.detail}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                <ArrowRight className="h-4 w-4" />
                Continue
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
