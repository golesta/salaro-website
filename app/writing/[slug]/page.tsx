import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Salaro — Writing",
};

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  await params;
  return (
    <>
      <Header />
      <article className={styles.article}>
        <div className={styles.back}>
          <Link href="/writing" className={styles.backLink}>← Writing</Link>
        </div>
        <div className={styles.placeholder}>
          <div className="eyebrow" style={{ marginBottom: "24px" }}>Coming soon</div>
          <p className={styles.msg}>
            <em>This essay is being written.</em> Check back soon — or{" "}
            <a href="mailto:hello@salaro.com">write to us</a> if you&apos;d like to be notified when it publishes.
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
