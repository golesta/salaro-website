import type { Metadata } from "next";
import Banner from "@/components/Banner/Banner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Development",
  description: "Custom AI agent factories, private model deployments, and AI strategy for businesses ready to move beyond the hype.",
};

const faqs = [
  { q: "Do you build with open-source or proprietary models?", a: "Both. We assess the use case and recommend accordingly — often a mix. Private deployments typically run local models; high-throughput tasks may use API-based models with strict data handling." },
  { q: "We're not sure AI is right for us. Can you help us decide?", a: "Yes — that's often the most valuable engagement. We run scoping calls and deliver a plain-English readiness assessment before any build starts." },
  { q: "How do your agent factories work?", a: "We use a multi-agent pipeline: an Architect designs the approach, a Researcher gathers context, Developers implement, and a Reviewer validates. Each role is a specialised model instance with defined scope." },
  { q: "Can you integrate AI into our existing systems?", a: "Yes. We've built AI layers on top of WordPress, bespoke CRMs, and proprietary data pipelines. We don't require a greenfield build." },
];

export default function AIDevelopmentPage() {
  return (
    <>
      <Banner page="ai-development" />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-6">What this is</h2>
          <div className="space-y-4 text-base leading-relaxed text-fg-mute">
            <p>AI development at Salaro means building systems that actually work in production — not proof-of-concept demos that collapse under real data. We design and deploy multi-agent pipelines, integrate language models into existing workflows, and run private model deployments for clients who can't send their data to third-party APIs.</p>
            <p>We also run AI readiness engagements for businesses that aren't sure what they need yet. The output is a concrete assessment, not a sales pitch.</p>
          </div>
        </section>

        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-6">Who it's for</h2>
          <ul className="space-y-3 text-base text-fg-mute">
            <li className="flex gap-3"><span className="text-accent">—</span>Businesses with repetitive knowledge work that could be automated or augmented</li>
            <li className="flex gap-3"><span className="text-accent">—</span>Teams that have tried generic AI tools and found them too shallow for their domain</li>
            <li className="flex gap-3"><span className="text-accent">—</span>Organisations with data privacy requirements that rule out consumer AI products</li>
            <li className="flex gap-3"><span className="text-accent">—</span>Decision-makers who want an honest assessment before committing to a build</li>
          </ul>
        </section>

        <section className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-6">How we deliver it</h2>
          <p className="text-base leading-relaxed text-fg-mute">We use our own agent factory to build yours. The Architect designs the system, the Developer implements it, the Reviewer stress-tests it. Humans validate every output before it ships. This means faster builds without lower standards — the agents handle volume, the humans handle judgement.</p>
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
          <p className="text-sm text-fg-mute mb-6">Tell us what you're building. We'll tell you if we're the right fit.</p>
          <Link href="/contact" className="inline-block px-6 py-3 text-sm font-medium bg-fg text-bg rounded-lg hover:opacity-80 transition-opacity">
            Get in touch
          </Link>
        </section>
      </div>
    </>
  );
}
