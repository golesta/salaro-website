import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Salaro — Contact",
  description: "Start a conversation with Salaro. A short note is enough.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Contact · Start a conversation"
        title={<>Tell us what you&apos;re trying to <em>build</em>.</>}
        lede="A short note is enough. Tell us roughly what you have in mind, what's already in place, and when you'd like it live. We'll come back inside one working day."
      />

      <Reveal>
        <section className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.h2}>Send a <em>note</em>.</h2>
            <ContactForm />
            <div className={styles.direct}>
              Or write directly to{" "}
              <a href="mailto:hello@salaro.com" className={styles.directEmail}>
                hello@salaro.com
              </a>.
            </div>
          </div>

          <div className={styles.right}>
            <h2 className={styles.h2}>How this <em>goes</em>.</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>01</span>
                <div>
                  <h3 className={styles.stepTitle}>You <em>write</em>.</h3>
                  <p className={styles.stepBody}>A short note via this form or by email. No NDA needed yet.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>02</span>
                <div>
                  <h3 className={styles.stepTitle}>We <em>talk</em>.</h3>
                  <p className={styles.stepBody}>A 30-minute video call inside the next few days, so we both know if this is a fit.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>03</span>
                <div>
                  <h3 className={styles.stepTitle}>We <em>propose</em>.</h3>
                  <p className={styles.stepBody}>A fixed-price proposal, usually back inside 48 hours of the call.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>04</span>
                <div>
                  <h3 className={styles.stepTitle}>We <em>build</em>.</h3>
                  <p className={styles.stepBody}>Two to six weeks of work, daily progress visible in your own repo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section className={styles.honest}>
        We work with UK SMEs. We <em>don&apos;t</em> take on enterprise projects that need
        procurement, security reviews and a project manager — that work goes to firms set up
        for it, and we&apos;re happy to refer you.
      </section>

      <Footer />
    </>
  );
}
