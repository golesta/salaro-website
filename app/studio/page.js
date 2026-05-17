import Header from '../../components/Header';

export default function Studio() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Studio</div>
            <h1>Who we are <em>and how</em> we work</h1>
          </div>
          <div>
            <p style={{fontStyle:'italic', color:'var(--ink-soft)'}}>Founder-led UK studio with distributed engineering partner teams.</p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="service-grid">
          <div className="service"><span className="service-num">01 · Founder</span><h4><em>Founder</em></h4><p>Bio placeholder — to be supplied.</p></div>
          <div className="service"><span className="service-num">02 · Team</span><h4><em>Team</em></h4><p>UK-led, distributed engineering.</p></div>
          <div className="service"><span className="service-num">03 · Values</span><h4><em>Values</em></h4><p>Small on purpose — transparent work.</p></div>
        </div>
      </section>

      <footer className="footer"><div>© Salaro</div><div><a href="/contact">Contact</a></div></footer>
    </main>
  )
}
