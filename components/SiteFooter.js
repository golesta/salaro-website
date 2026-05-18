import Link from 'next/link';

export default function SiteFooter() {
  return (
    <div className="site-footer-wrap">
      <footer className="site-footer">
        <div className="site-footer-grid">
          <div>
            <div className="site-footer-col-head">Practice</div>
            <div className="site-footer-col-links">
              <Link href="/practice#build">Build</Link>
              <Link href="/practice#migrate">Migrate</Link>
              <Link href="/practice#advise">Advise</Link>
            </div>
          </div>
          <div>
            <div className="site-footer-col-head">Studio</div>
            <div className="site-footer-col-links">
              <Link href="/studio#founder">Founder</Link>
              <Link href="/studio#team">Team</Link>
              <Link href="/studio#values">Values</Link>
            </div>
          </div>
          <div>
            <div className="site-footer-col-head">Work</div>
            <div className="site-footer-col-links">
              <Link href="/work">Recent projects</Link>
              <Link href="/work#archive">Archive</Link>
            </div>
          </div>
          <div>
            <div className="site-footer-col-head">Contact</div>
            <div className="site-footer-col-links">
              <a href="mailto:hello@salaro.com">hello@salaro.com</a>
              <span style={{fontFamily:'var(--font-body)', fontSize:14, color:'var(--ink-soft)'}}>Guildford, Surrey</span>
              <a href="https://www.linkedin.com/in/salargolestanian/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="site-footer-strip">
          © 2026 Salaro Ltd · Registered in England &amp; Wales · Guildford, Surrey
        </div>
      </footer>
    </div>
  );
}
