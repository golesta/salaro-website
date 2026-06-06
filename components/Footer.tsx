import Link from "next/link";
import LogoMark from "./LogoMark";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoLink} aria-label="Salaro home">
            <LogoMark size={24} darkBackground />
            <span className={styles.logoWord}>Salaro</span>
          </Link>
          <p className={styles.tagline}>
            A UK web consultancy. Practising since 2000, AI-native since 2026.
          </p>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Practice</div>
          <ul>
            <li><Link href="/practice#build">Build</Link></li>
            <li><Link href="/practice#migrate">Migrate</Link></li>
            <li><Link href="/practice#advise">Advise</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Studio</div>
          <ul>
            <li><Link href="/studio#founder">Founder</Link></li>
            <li><Link href="/studio#team">Team</Link></li>
            <li><Link href="/studio#values">Values</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Work</div>
          <ul>
            <li><Link href="/work#recent">Recent projects</Link></li>
            <li><Link href="/work#archive">Archive</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Contact</div>
          <ul>
            <li><a href="mailto:hello@salaro.com">hello@salaro.com</a></li>
            <li><Link href="/studio">Guildford, Surrey</Link></li>
            <li><a href="https://www.linkedin.com/company/salaro" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.meta}>
        <div>© 2026 Salaro Ltd · Registered in England &amp; Wales · Guildford, Surrey</div>
        <div>Practising since 2000</div>
      </div>
    </footer>
  );
}
