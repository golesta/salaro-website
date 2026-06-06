import styles from "./PageHero.module.css";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
}

export default function PageHero({ eyebrow, title, lede }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</div>
      <h1 className={styles.h1}>{title}</h1>
      <p className={styles.lede}>{lede}</p>
    </section>
  );
}
