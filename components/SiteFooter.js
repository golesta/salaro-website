import Link from 'next/link';
import LogoMark from './LogoMark';

export default function SiteFooter() {
  return (
    <footer className="footer-dark">
  <div className="footer-grid">
    
    {/* BRAND */}
    <div className="footer-brand">
      <Link href="/" className="logo">
        <LogoMark size={26} darkBackground />
        <span className="logo-word">Salaro</span>
      </Link>

      <p className="footer-brand-tag">
        A UK web consultancy specialising in digital build, migration and advisory work.
        <br />
        Practising since 1995 · AI-native since 2026
      </p>
    </div>

    {/* PRACTICE */}
    <div className="footer-col">
      <div className="footer-col-title">Practice</div>
      <div className="footer-links">
        <Link href="/practice#build">Build</Link>
        <Link href="/practice#migrate">Migrate</Link>
        <Link href="/practice#advise">Advise</Link>
      </div>
    </div>

    {/* WORK */}
    <div className="footer-col">
      <div className="footer-col-title">Work</div>
      <div className="footer-links">
        <Link href="/work#recent">Recent projects</Link>
        <Link href="/work#archive">Project archive</Link>
      </div>
    </div>

    {/* CONTACT */}
    <div className="footer-col">
      <div className="footer-col-title">Contact</div>
      <div className="footer-links">
        <a href="mailto:team@salaro.com">team@salaro.com</a>
        <Link href="/studio#founder">Guildford, Surrey</Link>
        <a
          href="https://www.linkedin.com/in/salargolestanian/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>

  </div>

  {/* META BAR */}
  <div className="footer-meta">
    <div>
      © 2026 Salaro Ltd · Registered in England & Wales · Guildford, Surrey
    </div>
    <div className="footer-meta-right">
      Independent consultancy · Private practice
    </div>
  </div>
</footer>
  );
}
