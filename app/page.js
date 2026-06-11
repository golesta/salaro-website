import Image from 'next/image'
import ThemeToggle from '../components/ThemeToggle'
import HeroMockup from '../components/HeroMockup'
import MarqueeStrip from '../components/MarqueeStrip'
import MetricsBand from '../components/MetricsBand'
import WorkShowcase from '../components/WorkShowcase'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import ContactSection from '../components/ContactSection'
import FinalCta from '../components/FinalCta'
import Footer from '../components/Footer'
import { navLinks, hero, services, faqs } from '../lib/siteContent'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F5F3] text-[#1A1A1A] transition-colors duration-300 dark:bg-[#080808] dark:text-white">
      <header className="sticky top-0 z-50 border-b border-brand/10 bg-[#F9F5F3]/80 backdrop-blur-md transition-colors duration-300 dark:border-brand/15 dark:bg-[#080808]/80">
        <div className="mx-auto grid max-w-7xl items-center gap-4 px-6 py-4 md:grid-cols-[auto_1fr_auto]">
          <a href="#" className="text-lg font-semibold tracking-[0.35em] text-[#1A1A1A] dark:text-white md:text-xl" style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}>
            SALARO
          </a>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#6B6B6B] transition hover:text-[#1A1A1A] dark:text-slate-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-brand/20 transition duration-200 hover:bg-brand-light md:inline-flex"
            >
              Get a quote
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-16 sm:pt-20 lg:pb-32">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/20 blur-[120px] opacity-20 dark:opacity-20" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand">
              {hero.eyebrow}
            </span>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#1A1A1A] sm:text-6xl dark:text-white">
              {hero.title}
            </h1>
            <p className="max-w-xl text-base leading-8 text-[#6B6B6B] sm:text-lg dark:text-slate-300">
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="rounded-3xl bg-brand px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-light">
                {hero.ctaPrimary}
              </a>
              <a href="#contact" className="rounded-3xl border border-brand/20 bg-brand/5 px-6 py-4 text-sm font-semibold text-[#1A1A1A] transition hover:bg-brand/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                {hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#6B6B6B] dark:text-slate-400">
              <div className="flex -space-x-3">
                {hero.avatars.map((avatar) => (
                  <div key={avatar.name} className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#F9F5F3] bg-brand/10 dark:border-[#080808] dark:bg-white/10">
                    <Image src={avatar.src} alt={avatar.name} fill sizes="48px" className="object-cover" />
                  </div>
                ))}
              </div>
              <p>{hero.trustText}</p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {hero.stats.map((item) => (
                <div key={item.label} className="rounded-[1.75rem] border border-brand/10 bg-brand/5 px-5 py-4 text-center shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                  <p className="text-2xl font-semibold text-[#1A1A1A] dark:text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-[#6B6B6B] dark:text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroMockup />
        </div>
      </section>

      <MarqueeStrip />

      <section id="services" className="px-6 py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-brand/80">What We Do</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#1A1A1A] sm:text-5xl dark:text-white">
              Comprehensive Digital Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-[#6B6B6B] dark:text-slate-300">
              From web development to AI, we craft digital experiences that drive results
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-brand/15 bg-brand/5 p-6 backdrop-blur transition hover:border-brand/50 hover:bg-brand/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand/50 dark:hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent opacity-0 transition group-hover:opacity-100 dark:from-brand/10" />
                <div className="relative space-y-3">
                  <div className="text-4xl font-bold text-brand/40 transition group-hover:text-brand/60">●</div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white">{service.title}</h3>
                  <p className="text-sm text-[#6B6B6B] dark:text-slate-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MetricsBand />
      <WorkShowcase />
      <Testimonials />
      <FAQ faqs={faqs} />
      <ContactSection />
      <FinalCta />
      <Footer />
    </main>
  )
}