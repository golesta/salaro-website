import type { Metadata } from "next";
import Banner from "@/components/layout/Banner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Migrations",
  description: "Platform migrations done properly — zero data loss, minimal downtime, from legacy to modern.",
};

const faqs = [
  { q: "How do you handle data integrity during a migration?", a: "We build and run validation scripts that compare source and destination record counts, field values, and relationships before any cutover. Nothing goes live until the counts match." },
  { q: "Can you migrate a live site with minimal downtime?", a: "Yes. We use a parallel-run approach where possible — the old site stays live while we validate the new one, then cut over with a short maintenance window (often under 30 minutes)." },
  { q: "What platforms have you migrated from?", a: "WordPress (various versions), Drupal, Joomla, Magento, legacy custom PHP, and several proprietary CMS platforms. If it has an export format or an API, we can work with it." },
  { q: "Do you migrate databases or just content?", a: "Both. We handle full database migrations including schema transformations, user data, media files, and URL redirects." },
];

export default function MigrationsPage() {
  return (
    <>
      <Banner h1="Migrations." subhead="From legacy to modern. Zero data loss." height="page" />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-6">What this is</h2>
          <div className="space-y-4 text-base leading-relaxed text-fg-mute">
            <p>Platform migrations are unglamorous and often handled badly. We treat them as engineering problems: schema analysis, data mapping, validation pipelines, cutover planning, and rollback procedures if something goes wrong.</p>
            <p>We've migrated content, databases, user accounts, media libraries, and URL structures — often all at once, for sites that couldn't afford downtime.</p>
          </div>
        </section>

        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-6">Who it's for</h2>
          <ul className="space-y-3 text-base text-fg-mute">
            <li className="flex gap-3"><span className="text-accent">—</span>Businesses on an end-of-life platform that needs replacing</li>
            <li className="flex gap-3"><span className="text-accent">—</span>Teams moving to a new CMS, framework, or hosting environment</li>
            <li className="flex gap-3"><span className="text-accent">—</span>Sites with large datasets where data integrity is non-negotiable</li>
            <li className="flex gap-3"><span className="text-accent">—</span>Organisations that have had a migration fail before and need it done properly this time</li>
          </ul>
        </section>

        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-6">How we deliver it</h2>
          <p className="text-base leading-relaxed text-fg-mute">We start with a source audit — what data exists, how it's structured, what dependencies it has. Then we build a migration script, run it against a staging environment, validate the output, fix discrepancies, and repeat until the validation passes. Cutover is the last step, not the first.</p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-8">FAQ</h2>
          <div className="max-w-2xl space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-fg-mute leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 pt-16 max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">Ready to start?</h2>
          <Link href="/contact" className="inline-block px-6 py-3 text-sm font-medium bg-fg text-bg rounded-lg hover:opacity-80 transition-opacity">
            Get in touch
          </Link>
        </section>
      </div>
    </>
  );
}
