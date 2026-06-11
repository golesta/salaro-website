'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import SocialOrbitMockup from './SocialOrbitMockup'

export default function FAQ({ faqs }) {
  const [open, setOpen] = useState(null)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const svgColor = isDark ? '#993c25' : '#7A2E1C'
  const svgOpacity = isDark ? 0.12 : 0.06

  return (
    <section className="px-6 py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Left: SocialOrbitMockup */}
          <div className="flex items-center justify-center md:pr-8">
            <SocialOrbitMockup size={320} />
          </div>

          {/* Right: Question highlight + FAQ accordion */}
          <div className="space-y-6 md:pl-8">
            <div className="space-y-3 rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:bg-slate-950 dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white">What services does Salaro offer?</h3>
              <p className="text-sm text-[#6B6B6B] dark:text-slate-300">
                We provide a wide range of digital services — web & app development, e-commerce, design, AI solutions, WordPress & Shopify, and digital marketing including SEO & PPC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-brand/10 bg-brand/5 p-4 transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between"
                  >
                    <span className="text-left text-sm font-semibold text-[#1A1A1A] dark:text-white">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#1A1A1A] transition-transform dark:text-slate-300 ${open === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {open === i && <p className="mt-3 text-sm text-[#6B6B6B] dark:text-slate-300">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
