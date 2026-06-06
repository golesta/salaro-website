import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroRotator from "@/components/HeroRotator";
import AgentFactory from "@/components/AgentFactory";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Salaro — A UK web consultancy, AI-native delivery",
  description:
    "For UK businesses that have outgrown a template. AI-native builds, DNN migrations, and AI advisory for SMEs.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <div className="eyebrow">A UK web consultancy · Practising since 2000</div>
            <h1 className={styles.h1}>
              For UK businesses that have outgrown a <HeroRotator />.
            </h1>
          </div>
          <div className={styles.heroRight}>
            <p className={styles.heroLede}>
              We combine three decades of engineering judgement with
              pragmatic AI-enabled delivery — building, migrating and
              advising for ambitious SMEs.
            </p>
            <div className={styles.ctas}>
              <Link href="/contact" className={styles.btnPrimary}>Start a conversation</Link>
              <Link href="/practice" className={styles.btnSecondary}>See how we build →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live diagram */}
      <Reveal>
        <section className={styles.diagramBlock}>
          <div className={styles.diagramInner}>
            <div className={styles.diagramHead}>
              <h2 className={styles.diagramH2}>
                Agent factory — <em>how we ship</em>.
              </h2>
              <span className="eyebrow">Live · auto-running</span>
            </div>
            <AgentFactory width={1200} height={420} />
          </div>
        </section>
      </Reveal>

      {/* Services */}
      <Reveal>
        <section className={styles.services}>
          <div className={styles.servicesHead}>
            <h2 className={styles.servicesH2}>What we do <em>for clients</em>.</h2>
            <span className="eyebrow">Services</span>
          </div>
          <div className={styles.serviceGrid}>
            <div className={styles.service}>
              <span className={styles.serviceNum}>01 · Build</span>
              <h4 className={styles.serviceH4}><em>Build</em> — practical product engineering.</h4>
              <p className={styles.serviceBody}>
                We design and build new web platforms, agent systems and
                on-premise AI deployments. Composable, testable, sustainable.
              </p>
              <div className={styles.serviceMeta}>Build · Projects</div>
            </div>
            <div className={styles.service}>
              <span className={styles.serviceNum}>02 · Migrate</span>
              <h4 className={styles.serviceH4}><em>Migrate</em> — DNN and legacy lifts.</h4>
              <p className={styles.serviceBody}>
                We move organisations off DNN, EP, and ageing WordPress onto
                modern stacks — Next.js, Vercel, headless WordPress — without
                losing content, SEO or customers.
              </p>
              <div className={styles.serviceMeta}>Migrate · Modernisation</div>
            </div>
            <div className={styles.service}>
              <span className={styles.serviceNum}>03 · Advise</span>
              <h4 className={styles.serviceH4}><em>Advise</em> — strategy, audits, pilots.</h4>
              <p className={styles.serviceBody}>
                Short, decisive scoping engagements that produce a written brief
                and a clear next step. If we go on to build it, the fee credits
                the project.
              </p>
              <div className={styles.serviceMeta}>Advise · Workshops</div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Proof bar */}
      <Reveal>
        <section className={styles.proof}>
          <div className={styles.proofItem}>
            <span className={styles.proofNum}>01 · Tenure</span>
            25+ years building for the web.
          </div>
          <div className={styles.proofItem}>
            <span className={styles.proofNum}>02 · Focus</span>
            UK SMEs, not enterprises.
          </div>
          <div className={styles.proofItem}>
            <span className={styles.proofNum}>03 · Ships</span>
            We ship in weeks, not quarters.
          </div>
          <div className={styles.proofItem}>
            <span className={styles.proofNum}>04 · Honest</span>
            We&apos;re opinionated and selective.
          </div>
        </section>
      </Reveal>

      {/* Manifesto */}
      <Reveal>
        <section className={styles.manifesto}>
          <div>
            <div className={styles.manifestoLine}>
              <span className={styles.manifestoNum}>A note · 01</span>
            </div>
            <p className={styles.manifestoMeta}>
              Practical judgement<br />over throughput.
            </p>
          </div>
          <div>
            <h3 className={styles.manifestoH3}>
              We place human <em>judgment</em> where it matters — on
              architecture, trade-offs, and what to build at all. The
              boring middle is automated. <em>The decisions stay human.</em>
            </h3>
          </div>
        </section>
      </Reveal>

      {/* CTA band */}
      <Reveal>
        <section className={styles.ctaBand}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaH2}>Let&apos;s take your business online.</h2>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtn}>Start a conversation →</Link>
              <a href="mailto:hello@salaro.com" className={styles.ctaEmail}>hello@salaro.com</a>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </>
  );
}
