import type { Metadata } from "next";
import Banner from "@/components/layout/Banner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Why Salaro exists — the story behind an AI-native boutique consultancy built on three decades of technology experience.",
};

export default function AboutPage() {
  return (
    <>
      <Banner h1="Why Salaro exists." subhead="Thirty years in. Still building." height="page" />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">The story</h2>
          <div className="prose prose-neutral text-[var(--color-ink)] space-y-4 text-base leading-relaxed">
            <p>
              Salaro was founded by Salar, a physicist-turned-developer who has spent three decades at the intersection
              of technology and business. The agency has been through every major platform cycle — from early web through
              mobile, cloud, and now AI — and rebuilt itself each time rather than coasting on what worked before.
            </p>
            <p>
              The current rebuild is the most significant. Salaro is now AI-native: most volume work runs through a
              multi-agent factory (architect, researcher, developer, reviewer), with the human team driving strategy
              and the complex decisions that still require judgement. The result is the delivery speed of a large agency
              with the focus and accountability of a small one.
            </p>
            <p>
              The agency operates across Surrey, Berlin, and Pondicherry. It takes on complex builds that generic agencies
              turn down, and it stays on after launch — no handoffs to junior account managers.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">How we work</h2>
            <div className="space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
              <p>We scope properly before we propose. We build with agents where agents are right, and with humans where they're not. We ship, we monitor, and we stay.</p>
              <p>Quiet confidence. Modern infrastructure. Human judgement.</p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/team" className="inline-block px-6 py-3 text-sm font-medium border border-black/20 rounded-lg hover:border-[var(--color-accent)] transition-colors">
              Meet the team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
