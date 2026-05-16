export default function Practice() {
  return (
    <main>
      <header className="header"><div className="logo">Salaro<span className="dot">.</span></div></header>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">01 · Practice</div>
            <h1>How we deliver work <em>that matters</em></h1>
          </div>
          <div>
            <p style={{fontStyle:'italic', color:'var(--ink-soft)'}}>Three practice lines: Build · Migrate · Advise. Each is designed for measurable outcomes.</p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="service-grid">
          <div className="service"><span className="service-num">01 · Build</span><h4><em>Build</em></h4><p>Product engineering, front-to-back.</p></div>
          <div className="service"><span className="service-num">02 · Migrate</span><h4><em>Migrate</em></h4><p>Legacy lifts and DNN-focused migrations.</p></div>
          <div className="service"><span className="service-num">03 · Advise</span><h4><em>Advise</em></h4><p>Short, high-signal engagements.</p></div>
        </div>
      </section>

      <footer className="footer"><div>© Salaro</div><div><a href="/contact">Contact</a></div></footer>
    </main>
  )
}
