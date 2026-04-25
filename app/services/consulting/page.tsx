import type { Metadata } from "next";
import Banner from "@/components/layout/Banner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Technical strategy for decision-makers — AI readiness, stack audits, build-vs-buy analysis, team capability reviews.",
};

const faqs = [
  { q: "What does a consulting engagement look like?", a: "Usually 2–4 weeks: a kick-off call to scope the question, research and analysis (we use our own agents to accelerate this), a written assessment, and a review session. You get a document you can act on, not a deck you'll never open again." },
  { q: "Can you help us decide whether to build or buy?", a: "Yes — this is one of the most common engagements. We assess the real cost of each path including maintenance, vendor lock-in, and opportunity cost." },
  { q: "Do you work with non-technical founders?", a: "Yes. We translate technical complexity into business terms. You don't need to know what a REST API is to get value from the assessment." },
  { q: "Can consulting lead into a build engagement?", a: "It can, but it doesn't have to. We give honest assessments — sometimes the answer is 'hire internally' or 'use an off-the-shelf product'. We'd rather give you the right answer than win the build." },
];

export default function ConsultingPage() {
  return (
    <>
      <Banner h1="Consulting." subhead="Technical clarity for people making decisions." height="page" />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-6">What this is</h2>
          <div className="space-y-4 text-base leading-relaxed text-fg-mute">
            <p>Technical consulting from Salaro is for decision-makers who need a clear, honest view of a technical question — without the sales agenda that comes from asking a vendor. We assess AI readiness, audit existing stacks, analyse build-vs-buy decisions, and review team capability.</p>
            <p>Output is always a written document you can act on. We don't do PowerPoint strategy that evaporates after the meeting.</p>
          </div>
        </section>

        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-6">Who it's for</h2>
          <ul className="space-y-3 text-base text-fg-mute">
            <li className="flex gap-3"><span className="text-accent">—</span>Founders and executives facing a technical fork in the road</li>
            <li className="flex gap-3"><span className="text-accent">—</span>Businesses evaluating AI adoption and needing an honest assessment</li>
            <li className="flex gap-3"><span className="text-accent">—</span>Teams with inherited technical debt that needs an external audit</li>
            <li className="flex gap-3"><span className="text-accent">—</span>Investors needing technical due diligence on a prospective acquisition</li>
          </ul>
        </section>

        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-6">How we deliver it</h2>
          <p className="text-base leading-relaxed text-fg-mute">We use our Researcher and Architect agents to gather context and draft the analysis at speed. The senior team reviews, challenges, and finalises. You get a faster turnaround than a traditional consultancy without losing the depth — typically 2–4 weeks from kick-off to final document.</p>
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
