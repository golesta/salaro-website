import type { Metadata } from "next";
import Banner from "@/components/layout/Banner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WordPress & GeoDirectory",
  description: "Deep GeoDirectory expertise — custom listings, map integrations, multi-region directories, performance tuning at scale.",
};

const faqs = [
  { q: "What scale of GeoDirectory site have you built?", a: "From small local directories to national listings with 50,000+ entries, custom taxonomies, and integrated map layers. We've also done performance tuning on existing GeoDirectory installs that were struggling under load." },
  { q: "Can you integrate GeoDirectory with external data sources?", a: "Yes. We've pulled in data from APIs, CSV imports, and custom scrapers, with mapping to GeoDirectory's schema. We can automate ongoing syncs too." },
  { q: "Do you work on WooCommerce alongside GeoDirectory?", a: "Yes — paid listings, membership tiers, and booking extensions are common requirements we handle." },
  { q: "Can you migrate an existing directory to GeoDirectory?", a: "Yes — see our Migrations service. We've migrated from legacy custom directories, Brilliant Directories, and other platforms." },
];

export default function WordPressGeoDirectoryPage() {
  return (
    <>
      <Banner h1="WordPress & GeoDirectory." subhead="Directory expertise. At any scale." height="page" />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-6">What this is</h2>
          <div className="space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
            <p>We have deeper GeoDirectory experience than most agencies will ever accumulate — custom listing types, complex taxonomy structures, map integrations, performance tuning, and the kind of edge cases that only show up at scale.</p>
            <p>We also do high-end WordPress work more broadly: custom Gutenberg blocks, headless setups, WooCommerce extensions, and bespoke theme development. No off-the-shelf templates.</p>
          </div>
        </section>

        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-6">Who it's for</h2>
          <ul className="space-y-3 text-base text-[var(--color-muted)]">
            <li className="flex gap-3"><span className="text-[var(--color-accent)]">—</span>Businesses running or building a listings or directory site</li>
            <li className="flex gap-3"><span className="text-[var(--color-accent)]">—</span>Existing GeoDirectory users hitting performance or feature walls</li>
            <li className="flex gap-3"><span className="text-[var(--color-accent)]">—</span>WordPress sites that need genuinely custom development, not plugin stacking</li>
            <li className="flex gap-3"><span className="text-[var(--color-accent)]">—</span>Teams migrating from another directory platform to GeoDirectory</li>
          </ul>
        </section>

        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-6">How we deliver it</h2>
          <p className="text-base leading-relaxed text-[var(--color-muted)]">Our India team maintains deep WordPress and GeoDirectory expertise built across many live projects. Agent-assisted development speeds up repetitive work (custom post type registration, field mapping, query optimisation scaffolding) while senior review keeps quality consistent.</p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-8">FAQ</h2>
          <div className="max-w-2xl space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-black/10 pt-16 max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">Ready to start?</h2>
          <Link href="/contact" className="inline-block px-6 py-3 text-sm font-medium bg-[var(--color-ink)] text-[var(--color-paper)] rounded-lg hover:opacity-80 transition-opacity">
            Get in touch
          </Link>
        </section>
      </div>
    </>
  );
}
