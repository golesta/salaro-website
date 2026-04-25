import type { Metadata } from "next";
import Banner from "@/components/Banner/Banner";

export const metadata: Metadata = {
  title: "Team",
  description: "The humans and agents behind Salaro — a founder with a physics background, an India-based implementation team, and a multi-agent delivery factory.",
};

const agents = [
  { name: "Architect", role: "System design, technical decisions, spec writing" },
  { name: "Researcher", role: "Context gathering, competitive analysis, documentation" },
  { name: "Developer", role: "Implementation, testing, code review" },
  { name: "Reviewer", role: "Quality assurance, edge-case analysis, output validation" },
];

export default function TeamPage() {
  return (
    <>
      <Banner page="team" />

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Founder */}
        <div className="max-w-2xl mb-24">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-8">Founder</h2>
          <h3 className="text-2xl font-semibold mb-4">Salar Arjomand</h3>
          <div className="space-y-4 text-base leading-relaxed text-fg-mute">
            <p>
              Salar has a background in semiconductor physics and has been building for the web since the mid-nineties.
              He founded Salaro to take on the technically complex work that larger agencies route around, and has rebuilt
              the practice around AI-native delivery without losing the boutique focus that makes complex builds possible.
            </p>
            <p>
              Based in Woking, Surrey. Also works across Berlin and Pondicherry.
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">LinkedIn</a>
            <a href="https://quantime.uk" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">Quantime</a>
          </div>
        </div>

        {/* India team */}
        <div className="max-w-2xl mb-24">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-8">Implementation team</h2>
          <p className="text-base leading-relaxed text-fg-mute">
            Salaro's implementation team is based primarily in Pondicherry, India, working across web development,
            content management, and ongoing project maintenance. The team handles execution and content updates — giving
            Salaro the capacity to run multiple complex projects in parallel without compromising quality.
          </p>
        </div>

        {/* Agent stack */}
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-8">The agent stack</h2>
          <p className="text-sm text-fg-mute mb-8 leading-relaxed">
            We work transparently: our delivery pipeline includes four specialised AI agents. They handle volume work
            under human direction — we don't hide this, because it's what makes our throughput possible.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {agents.map((a) => (
              <div key={a.name} className="border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{a.name}</h3>
                <p className="text-sm text-fg-mute">{a.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
