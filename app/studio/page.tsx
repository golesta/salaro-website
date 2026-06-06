import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Salaro — Studio",
  description: "About Salaro: one founder, a small senior team, and the tools that make 2026 possible.",
};

export default function StudioPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Studio · About"
        title={<>A <em>small UK practice</em>, deliberately.</>}
        lede="Salaro is a working studio, not an agency. One founder, a small senior team, and the tools that make 2026 possible."
      />

      {/* 01 Founder */}
      <Reveal>
        <section className={styles.section} id="founder">
          <div className={styles.side}>
            <div className={styles.sideLine}><span className={styles.sideNum}>01 · Founder</span></div>
            <div className={styles.sideMeta}>UK based<br />Practising since 2000<br />Available for calls<br />By appointment</div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.h2}>One pair of hands at the helm.</h2>
            <p className={styles.body}>
              <em>A physicist turned software developer turned AI consultant.</em>
            </p>
            <p className={styles.body}>
              Salaro was founded in 2000 and ran as a web consultancy through to 2015 — public sites,
              DNN platforms, intranets, the work of the day. After a decade away from agency life, the
              founder returned in 2026 with a question: what does a one-person consultancy look like
              when the tools have moved this far?
            </p>
            <p className={styles.body}>This site is part of the answer. The work is the rest.</p>
            <p className={styles.placeholder}>
              <span className={styles.placeholderLabel}>Note:</span> replace this placeholder with the founder bio &amp; photo when ready.
            </p>
          </div>
        </section>
      </Reveal>

      {/* 02 Team */}
      <Reveal>
        <section className={styles.section} id="team">
          <div className={styles.side}>
            <div className={styles.sideLine}><span className={styles.sideNum}>02 · Team</span></div>
            <div className={styles.sideMeta}>UK lead<br />Senior team in India<br />Async-first<br />No juniors on client work</div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.h2}>A <em>UK lead</em>, a <em>senior team</em> abroad, and AI doing the boring middle.</h2>
            <p className={styles.body}>
              The lead and the client conversations sit in the UK. The engineering bench sits in
              India — a small group of people we have worked with for years. AI tools sit between
              them, drafting and reviewing so the humans can spend time on decisions, not boilerplate.
            </p>
          </div>
        </section>
      </Reveal>

      {/* 03 Values */}
      <Reveal>
        <section className={`${styles.section} ${styles.sectionLast}`} id="values">
          <div className={styles.side}>
            <div className={styles.sideLine}><span className={styles.sideNum}>03 · Values</span></div>
            <div className={styles.sideMeta}>How we operate<br />Plain language<br />Fixed price<br />No project managers</div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.h2}>Four things we hold to.</h2>
            <div className={styles.values}>
              <div className={styles.value}>
                <span className={styles.valueNum}>01</span>
                <h3 className={styles.valueTitle}>Small on <em>purpose</em>.</h3>
                <p className={styles.valueBody}>We do not want to be a 40-person agency. We want to do the work, well, and go home.</p>
              </div>
              <div className={styles.value}>
                <span className={styles.valueNum}>02</span>
                <h3 className={styles.valueTitle}>You own <em>everything</em>.</h3>
                <p className={styles.valueBody}>The code lives in your GitHub. The deployment lives in your Vercel. We do not hold your business hostage.</p>
              </div>
              <div className={styles.value}>
                <span className={styles.valueNum}>03</span>
                <h3 className={styles.valueTitle}>Plain <em>numbers</em>.</h3>
                <p className={styles.valueBody}>Fixed proposals, fixed prices. If a project is risky we say so, and price it accordingly.</p>
              </div>
              <div className={styles.value}>
                <span className={styles.valueNum}>04</span>
                <h3 className={styles.valueTitle}>Judgment, not <em>throughput</em>.</h3>
                <p className={styles.valueBody}>Agents draft. Humans decide. That is the entire method.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </>
  );
}
