import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Salaro — Writing",
  description: "Essays on AI-native delivery, legacy migration, and what twenty-five years in the trade looks like in 2026.",
};

const essays = [
  {
    date: "04 May 2026",
    title: <>Why a ten-year-old with a <em>template</em> will eat most agency work.</>,
    preview: "Wix is good now. WordPress is good now. The bottom of the agency market is already gone. So what is left for the rest of us, and how do we work on it?",
    meta: "Essay · 8 min",
    slug: "template-will-eat-agency-work",
  },
  {
    date: "18 Apr 2026",
    title: <><em>DNN in 2026</em>: it&apos;s still out there, and it still needs help.</>,
    preview: "A field note on the surprising number of organisations still running DNN — and how to move them off it without losing the search rankings, the historical content, or the institutional memory.",
    meta: "Field note · 12 min",
    slug: "dnn-in-2026",
  },
  {
    date: "02 Apr 2026",
    title: <><em>AI for SMEs</em>: a fortnight&apos;s primer.</>,
    preview: "If you run a small business and you want to be more honest about AI than the LinkedIn discourse allows, here is a two-week reading list and a small set of tools to try on Monday.",
    meta: "Primer · 14 min",
    slug: "ai-for-smes-primer",
  },
  {
    date: "15 Mar 2026",
    title: <><em>Days, not months</em>: a build diary.</>,
    preview: "An unusually detailed account of an AI-native build, from the first call on Monday to a live Vercel deployment on the following Friday. What worked, what didn't, where the human had to step in.",
    meta: "Diary · 18 min",
    slug: "days-not-months-build-diary",
  },
];

export default function WritingPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Writing · Notes from the studio"
        title={<><em>Essays</em> on what we&apos;re learning.</>}
        lede="Short pieces on AI-native delivery, legacy migration, and what twenty-five years in the trade looks like in 2026. Mostly for ourselves, occasionally for clients."
      />

      <Reveal>
        <section className={styles.list}>
          {essays.map((essay) => (
            <article key={essay.slug} className={styles.essay}>
              <span className={styles.date}>{essay.date}</span>
              <div className={styles.body}>
                <h2 className={styles.h2}>
                  <a href={`/writing/${essay.slug}`}>{essay.title}</a>
                </h2>
                <p className={styles.preview}>{essay.preview}</p>
              </div>
              <span className={styles.meta}>{essay.meta}</span>
            </article>
          ))}
          <div className={styles.aside}>
            More notes as the studio writes them. No subscription, no newsletter — yet.
          </div>
        </section>
      </Reveal>

      <Footer />
    </>
  );
}
