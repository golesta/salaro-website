import type { Metadata } from "next";
import Banner from "@/components/layout/Banner";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "AI development, web development, WordPress, migrations, and consulting — built with an AI agent factory.",
};

const services = [
  { title: "AI Development", href: "/services/ai-development", desc: "Agent factories, private model deployments, AI strategy, and custom integrations. We build AI into your business, not just your marketing copy." },
  { title: "Web Development", href: "/services/web-development", desc: "Complex web builds that generic agencies turn down. Multi-site portfolios, headless WordPress, custom APIs, and integrations." },
  { title: "WordPress & GeoDirectory", href: "/services/wordpress-geodirectory", desc: "Deep GeoDirectory expertise — custom listings, map integrations, multi-region directories, performance tuning." },
  { title: "Migrations", href: "/services/migrations", desc: "Platform migrations done properly, with zero data loss and minimal downtime. Legacy to modern, or one CMS to another." },
  { title: "Consulting", href: "/services/consulting", desc: "Technical strategy for decision-makers. AI readiness, stack audits, build-vs-buy analysis, team capability reviews." },
];

export default function ServicesPage() {
  return (
    <>
      <Banner h1="What we build." subhead="Five service lines, one team, one shared standard." height="page" />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block border border-black/10 rounded-xl p-10 hover:border-[var(--color-accent)] transition-colors"
            >
              <h2 className="font-semibold text-xl mb-3">{s.title}</h2>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">{s.desc}</p>
              <span className="text-sm flex items-center gap-1 text-[var(--color-accent)] group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-24 border-t border-black/10 pt-16 max-w-xl">
          <p className="text-lg font-medium mb-4">Not sure which fits?</p>
          <p className="text-sm text-[var(--color-muted)] mb-6">Book a 20-minute scoping call and we'll work it out together.</p>
          <Link href="/contact" className="inline-block px-6 py-3 text-sm font-medium bg-[var(--color-ink)] text-[var(--color-paper)] rounded-lg hover:opacity-80 transition-opacity">
            Book a call
          </Link>
        </div>
      </div>
    </>
  );
}
