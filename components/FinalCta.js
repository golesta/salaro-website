'use client'

import { ArrowRight, Sparkles, MessageSquare, Phone } from 'lucide-react'

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden px-6 py-32 transition-colors duration-300">
      {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-brand to-purple-900" aria-hidden="true" />
      
      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Heading with highlighted final word */}
        <h2 className="text-5xl sm:text-6xl font-bold leading-tight text-white">
          Ready to start your digital{' '}
          <span className="text-amber-300">transformation?</span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg leading-7 text-white/80 max-w-2xl mx-auto">
          Let's work together to craft digital experiences that engage, convert, and grow your business.
        </p>

        {/* Button Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button - Solid White */}
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1A1A1A] shadow-lg shadow-black/10 transition hover:bg-slate-100"
          >
            <Sparkles className="h-4 w-4" />
            Get Started Now
          </a>

          {/* Secondary Button - Subtle Light */}
          <a
            href="tel:+441483870170"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"
          >
            Schedule a Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Trust Row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Dedicated Support</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Custom Solutions</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>24/7 Response</span>
          </div>
        </div>
      </div>

      {/* Avatar Placeholder - Lower Left */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-0 pointer-events-none"
        aria-hidden="true"
        data-avatar="left"
      />

      {/* Avatar Placeholder - Lower Right */}
      <div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-0 pointer-events-none"
        aria-hidden="true"
        data-avatar="right"
      />
    </section>
  )
}
