import type { Metadata } from "next";
import HomeBanner from "@/components/Banner/HomeBanner";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Salaro — AI-Native Web Consultancy",
  description:
    "30 years of technology, now applied to AI. We build like a 50-person agency with the focus of a 5-person shop.",
};

const services = [
  { title: "AI Development", href: "/services/ai-development", desc: "Agent factories, private deployments, AI strategy for businesses ready to move beyond the hype." },
  { title: "Web Development", href: "/services/web-development", desc: "Complex builds others turn down — multi-site portfolios, headless stacks, custom integrations." },
  { title: "WordPress & GeoDirectory", href: "/services/wordpress-geodirectory", desc: "Deep expertise in GeoDirectory, custom post types, and high-volume WordPress architecture." },
];

const steps = [
  { step: "01", title: "Discover", desc: "We scope the problem properly. No generic proposals — a real technical assessment of what you need." },
  { step: "02", title: "Build (with agents)", desc: "Our agent factory handles volume work at speed. Humans drive strategy and the complex decisions." },
  { step: "03", title: "Ship & support", desc: "We deploy, monitor, and stay on. You're not handed off to a junior account manager." },
];

export default function Home() {
  return (
    <>
      <HomeBanner />

      <div className="max-w-7xl mx-auto px-6">
        {/* Service cards */}
        <section className="py-24">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-10">What we build</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group block border border-black/10 rounded-xl p-8 hover:border-[var(--color-accent)] transition-colors">
                <h3 className="font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">{s.desc}</p>
                <span className="text-sm flex items-center gap-1 text-[var(--color-accent)] group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="py-24 border-t border-black/10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-10">How we work</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((s) => (
              <div key={s.step}>
                <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">{s.step}</span>
                <h3 className="font-semibold text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="py-24 border-t border-black/10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
              Got a complex build others have turned down?
            </h2>
            <Link href="/contact" className="inline-block px-6 py-3 text-sm font-medium bg-[var(--color-ink)] text-[var(--color-paper)] rounded-lg hover:opacity-80 transition-opacity">
              Talk to us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
