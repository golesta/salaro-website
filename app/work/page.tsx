import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Salaro — Work",
  description: "Selected work from 2000 to now. Recent projects confidential; archive anonymised.",
};

const recentWork = [
  { year: "2026", title: <>A <em>UK manufacturer</em> · public site &amp; product configurator</>, sector: "Industrial · SME", kind: "Build" },
  { year: "2026", title: <>A <em>regional law firm</em> · DNN to Next.js migration</>, sector: "Legal · 40 staff", kind: "Migrate" },
  { year: "2026", title: <>An <em>SME owner</em> · AI adoption pilot &amp; team training</>, sector: "Professional services", kind: "Advise" },
];

const archiveWork = [
  { year: "2014", title: "UK engineering group · multi-brand DNN platform", sector: "Industrial", kind: "Build & CMS" },
  { year: "2012", title: "London publisher · subscription portal", sector: "Publishing", kind: "Build" },
  { year: "2010", title: "National charity · DNN content platform & intranet", sector: "Third sector", kind: "Build & CMS" },
  { year: "2008", title: "Specialist insurer · broker extranet", sector: "Financial services", kind: "Build" },
  { year: "2006", title: "London law firm · public site relaunch", sector: "Legal", kind: "Build" },
  { year: "2003", title: "Regional retailer · first e-commerce site", sector: "Retail", kind: "Build" },
  { year: "2000", title: "Salaro · founded", sector: "—", kind: "—" },
];

export default function WorkPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Selected work · 2000 — now"
        title={<><em>Twenty-five years</em> of shipped work.</>}
        lede="Most recent work is under client confidentiality and not listed here. The archive below is a small, anonymised sample of the kind of work we have done — and, increasingly, the kind we now do faster."
      />

      <Reveal>
        <section className={styles.block} id="recent">
          <div className={styles.blockHead}>
            <h2 className={styles.blockH2}><em>Recent</em> · 2026 →</h2>
            <span className="eyebrow">Confidential · on request</span>
          </div>
          <p className={styles.workNote}>
            Recent client work is described on a call rather than listed publicly. We are happy
            to walk through two or three relevant examples in conversation.
          </p>
          <ul className={styles.list}>
            {recentWork.map((row, i) => (
              <li key={i} className={styles.row}>
                <span className={styles.year}>{row.year}</span>
                <span className={styles.title}>{row.title}</span>
                <span className={styles.sector}>{row.sector}</span>
                <span className={styles.kind}>{row.kind}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section className={`${styles.block} ${styles.blockLast}`} id="archive">
          <div className={styles.blockHead}>
            <h2 className={styles.blockH2}><em>Archive</em> · 2000 — 2015</h2>
            <span className="eyebrow">Anonymised · for shape only</span>
          </div>
          <ul className={styles.list}>
            {archiveWork.map((row, i) => (
              <li key={i} className={styles.row}>
                <span className={styles.year}>{row.year}</span>
                <span className={styles.title}>{row.title}</span>
                <span className={styles.sector}>{row.sector}</span>
                <span className={styles.kind}>{row.kind}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Footer />
    </>
  );
}
