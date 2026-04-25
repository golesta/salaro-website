import type { Metadata } from "next";
import Banner from "@/components/layout/Banner";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work from Salaro — AI development, complex web builds, WordPress, and more.",
};

// Placeholder projects — replace with MDX/CMS data
const projects = [
  { slug: "example-project-1", title: "Example Project One", sector: "AI Development", outcome: "Reduced processing time by 60% using a custom agent pipeline." },
  { slug: "example-project-2", title: "Example Project Two", sector: "Web Development", outcome: "Multi-site portfolio with shared component library across 12 properties." },
  { slug: "example-project-3", title: "Example Project Three", sector: "WordPress & GeoDirectory", outcome: "UK-wide directory with 50,000+ listings, migrated from legacy platform." },
];

export default function ProjectsPage() {
  return (
    <>
      <Banner h1="Selected work." subhead="Complex problems, shipped solutions." height="slim" />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block border border-black/10 rounded-xl p-8 hover:border-[var(--color-accent)] transition-colors"
            >
              <div className="aspect-video bg-[var(--color-ink)]/5 rounded-lg mb-6" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2 block">{p.sector}</span>
              <h2 className="font-semibold text-lg mb-2">{p.title}</h2>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">{p.outcome}</p>
              <span className="text-sm flex items-center gap-1 text-[var(--color-accent)] group-hover:gap-2 transition-all">
                View project <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
