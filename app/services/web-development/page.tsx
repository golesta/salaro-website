import type { Metadata } from "next";
import Banner from "@/components/layout/Banner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development",
  description: "Complex web builds — multi-site portfolios, headless WordPress, custom integrations — that generic agencies turn down.",
};

const faqs = [
  { q: "What makes a project 'complex' enough for Salaro?", a: "Multiple interconnected systems, non-standard data flows, performance requirements that conflict with the obvious solution, or a build that's failed once already. If you've been told it can't be done cleanly, talk to us." },
  { q: "Do you work on fixed-price or time-and-materials?", a: "Both, depending on scope clarity. Well-defined builds go fixed-price. Exploratory or iterative work runs on a retainer or T&M basis." },
  { q: "Can you take over a project that's already in progress?", a: "Yes, though we do a codebase audit first. We won't inherit and ship something we don't understand." },
  { q: "Do you handle hosting and infrastructure?", a: "We recommend and configure, but we don't resell hosting. We'll set you up on Vercel, Cloudflare, or a VPS depending on what the build needs." },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Banner h1="Web Development." subhead="Complex builds. Delivered properly." height="page" />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-6">What this is</h2>
          <div className="space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
            <p>Web development at Salaro is for the builds that require actual engineering — multi-site architectures, headless CMS setups, custom API integrations, performance-critical applications. We don't do template installs.</p>
            <p>Our agent factory handles the volume: boilerplate, documentation, test coverage. The senior team handles the hard parts. You get the output of a large team with the decision-making of a small one.</p>
          </div>
        </section>

        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-6">Who it's for</h2>
          <ul className="space-y-3 text-base text-[var(--color-muted)]">
            <li className="flex gap-3"><span className="text-[var(--color-accent)]">—</span>Businesses with technically demanding web requirements</li>
            <li className="flex gap-3"><span className="text-[var(--color-accent)]">—</span>Teams who've outgrown their current platform and need a migration path</li>
            <li className="flex gap-3"><span className="text-[var(--color-accent)]">—</span>Organisations managing multiple web properties that need a shared architecture</li>
            <li className="flex gap-3"><span className="text-[var(--color-accent)]">—</span>Anyone who's been turned down by a cheaper agency and needs it done right</li>
          </ul>
        </section>

        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-6">How we deliver it</h2>
          <p className="text-base leading-relaxed text-[var(--color-muted)]">Discovery first, always. We scope the build before we quote it. Then we run a structured delivery cycle: architecture, implementation, review, ship. The India team handles execution; the senior team handles architecture and client decisions.</p>
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
