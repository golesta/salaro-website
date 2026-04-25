import type { Metadata } from "next";
import Banner from "@/components/Banner/Banner";
import NewsletterForm from "@/components/sections/NewsletterForm";

export const metadata: Metadata = {
  title: "Writings",
  description: "Posts on agent architectures, modernisation patterns, and what we're learning building Salaro and our directory portfolio.",
};

export default function BlogPage() {
  return (
    <>
      <Banner page="blog" />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          {/* Placeholder state — no posts yet */}
          <p className="font-body text-[17px] leading-[1.6] text-fg-mute mb-16">
            The first posts are in progress. Topics: how the Salaro agent factory is structured,
            what DNN migrations actually involve, and what we&apos;ve learned operating Properties.co.uk
            at scale. Subscribe below and you&apos;ll get them when they land.
          </p>

          <div className="border-t border-white/10 pt-12">
            <p className="font-mono text-[12px] uppercase tracking-wide-mono text-fg-mute mb-6">
              Subscribe
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </>
  );
}
