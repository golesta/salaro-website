import type { Metadata } from "next";
import ProjectDetailBanner from "@/components/Banner/ProjectDetailBanner";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Placeholder — replace with MDX/CMS lookup by slug
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Project",
    description: "A Salaro project case study.",
  };
}

export default function ProjectDetailPage() {
  return (
    <>
      <ProjectDetailBanner eyebrow="08 / Projects" title="Project title." tags={["Sector", "Year"]} />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl space-y-16">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-4">Brief</h2>
            <p className="text-base leading-relaxed text-fg-mute">Placeholder — project brief goes here.</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-4">Approach</h2>
            <p className="text-base leading-relaxed text-fg-mute">Placeholder — approach description goes here.</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-4">What we built</h2>
            <p className="text-base leading-relaxed text-fg-mute">Placeholder — build description goes here.</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-mute mb-4">Outcome</h2>
            <p className="text-base leading-relaxed text-fg-mute">Placeholder — outcome goes here.</p>
          </section>
        </div>

        <div className="mt-24 border-t border-white/10 pt-10">
          <Link href="/projects" className="text-sm flex items-center gap-1 text-accent hover:gap-2 transition-all">
            <ArrowRight size={14} className="rotate-180" /> All projects
          </Link>
        </div>
      </div>
    </>
  );
}
