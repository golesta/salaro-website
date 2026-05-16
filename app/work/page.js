export default function Work() {
  return (
    <main>
      <header className="header"><div className="logo">Salaro<span className="dot">.</span></div></header>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Work · Archive</div>
            <h1>Recent &amp; archived projects</h1>
          </div>
          <div>
            <p style={{fontStyle:'italic', color:'var(--ink-soft)'}}>Recent work is anonymised — placeholders represent confidential client engagements.</p>
          </div>
        </div>
      </section>

      <section className="services" style={{paddingTop:24}}>
        <div style={{maxWidth:1320, margin:'0 auto'}}>
          <div style={{borderTop:'1px solid var(--line-soft)'}}>
            <div style={{padding:'16px 0'}}>2026 — Recent · (confidential)</div>
            <div style={{padding:'16px 0'}}>2015 — Archive item · sector · brief</div>
            <div style={{padding:'16px 0'}}>2008 — Archive item · sector · brief</div>
          </div>
        </div>
      </section>

      <footer className="footer"><div>© Salaro</div><div><a href="/contact">Contact</a></div></footer>
    </main>
  )
}
