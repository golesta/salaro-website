import Link from 'next/link';
import LogoMark from './LogoMark';

export default function SiteFooter() {
  return (
    <footer className="footer-dark">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
            <LogoMark size={24} darkBackground />
            <span className="logo-word">Salaro</span>
          </Link>
          <p className="footer-brand-tag">A UK web consultancy. Practising since 1995, AI-native since 2026.</p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Practice</div>
          <ul>
            <li><Link href="/practice#build">Build</Link></li>
            <li><Link href="/practice#migrate">Migrate</Link></li>
            <li><Link href="/practice#advise">Advise</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Work</div>
          <ul>
            <li><Link href="/work#recent">Recent projects</Link></li>
            <li><Link href="/work#archive">Archive</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Contact</div>
          <ul>
            <li><a href="mailto:hello@salaro.com">team@salaro.com</a></li>
            <li><Link href="/studio#founder">Guildford, Surrey</Link></li>
            <li><a href="https://www.linkedin.com/in/salargolestanian/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-meta">
        <div>© 2026 Salaro Ltd · Registered in England &amp; Wales · Guildford, Surrey</div>
        <div>Practising since 1995</div>
      </div>
    </footer>
  );
}
