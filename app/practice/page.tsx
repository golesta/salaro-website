import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Salaro — Practice",
  description:
    "Three lines of work done properly: AI-native web builds, DNN legacy migrations, and AI advisory for SMEs.",
};

export default function PracticePage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Practice · 2026"
        title={<>Three lines of work. <em>Done properly.</em></>}
        lede="We are small on purpose. Three things we do well, three we leave to others. Each can be scoped tightly and shipped through your own GitHub and Vercel."
      />

      {/* 01 Build */}
      <Reveal>
        <section className={styles.section} id="build">
          <div className={styles.side}>
            <div className={styles.sideLine}><span className={styles.sideNum}>01 · Build</span></div>
            <div className={styles.sideMeta}>For SMEs<br />Fixed scope<br />2–6 weeks<br />You own the repo</div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.h2}>AI-native <em>web builds</em>.</h2>
            <p className={styles.lede}>
              From a one-page brief to a production site. Claude designs the surface, our senior
              engineers refine and instrument it, and we ship through your GitHub to Vercel —
              usually inside a fortnight.
            </p>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>Step 01</span>
                <h3 className={styles.stepTitle}>Brief</h3>
                <p className={styles.stepBody}>Half-day call, fixed proposal back inside 48 hours.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>Step 02</span>
                <h3 className={styles.stepTitle}>AI draft</h3>
                <p className={styles.stepBody}>Claude builds the visual + structural draft, reviewed live.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>Step 03</span>
                <h3 className={styles.stepTitle}>Engineer</h3>
                <p className={styles.stepBody}>Our team ports to Next.js / your stack, hardens, accessibilises.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>Step 04</span>
                <h3 className={styles.stepTitle}>Ship</h3>
                <p className={styles.stepBody}>Pushed to your GitHub, deployed to Vercel. Keys are yours.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 02 Migrate */}
      <Reveal>
        <section className={styles.section} id="migrate">
          <div className={styles.side}>
            <div className={styles.sideLine}><span className={styles.sideNum}>02 · Migrate</span></div>
            <div className={styles.sideMeta}>Niche expertise<br />DNN since 2003<br />UK &amp; EU<br />Zero-downtime cutover</div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.h2}>DNN <em>legacy migrations</em>.</h2>
            <p className={styles.lede}>
              Almost nobody still understands DNN. We do — fifteen years of it. If your site is
              trapped on an old DNN install, orphaned by a vanished agency, or recovering from a
              ransomware event, we can move it onto something modern without losing the content,
              the URLs, or the search rankings.
            </p>
            <ul className={styles.bullets}>
              <li>Audit of the existing DNN install, modules and skinning</li>
              <li>Content extraction with structure preserved</li>
              <li>URL mapping so SEO survives the move</li>
              <li>Re-platform to Next.js, WordPress, or modern DNN</li>
              <li>Asset and media migration</li>
              <li>Ransomware-recovered installs welcome</li>
            </ul>
          </div>
        </section>
      </Reveal>

      {/* 03 Advise */}
      <Reveal>
        <section className={`${styles.section} ${styles.sectionLast}`} id="advise">
          <div className={styles.side}>
            <div className={styles.sideLine}><span className={styles.sideNum}>03 · Advise</span></div>
            <div className={styles.sideMeta}>Advisory<br />Half-day workshops<br />30-day pilots<br />Ongoing retainer</div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.h2}>AI for <em>small businesses</em>.</h2>
            <p className={styles.lede}>
              Most SMEs know AI matters and don&apos;t know where to begin. We help you pick the few
              tools that actually pay back for your business, train your team to use them, and ship
              a pilot — without the enterprise overhead or the consultant theatre.
            </p>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>Format 01</span>
                <h3 className={styles.stepTitle}>Half-day</h3>
                <p className={styles.stepBody}>A working session, your team and ours. Leave with three things to try on Monday.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>Format 02</span>
                <h3 className={styles.stepTitle}>30-day pilot</h3>
                <p className={styles.stepBody}>One process picked, one tool deployed, one outcome measured.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>Format 03</span>
                <h3 className={styles.stepTitle}>Retainer</h3>
                <p className={styles.stepBody}>A monthly call and async support. For owners who want a sparring partner.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>Format 04</span>
                <h3 className={styles.stepTitle}>Build &amp; advise</h3>
                <p className={styles.stepBody}>Pair our build line with the advisory work, on one engagement.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </>
  );
}
