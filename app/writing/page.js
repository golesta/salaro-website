import Header from '../../components/Header';

export default function Writing() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Writing</div>
            <h1>Notes and essays</h1>
          </div>
          <div>
            <p style={{fontStyle:'italic', color:'var(--ink-soft)'}}>Thoughtful pieces about web platforms, DNN, and AI for SMEs.</p>
          </div>
        </div>
      </section>

      <section style={{maxWidth:1320, margin:'0 auto', padding:'48px 64px'}}>
        <article style={{marginBottom:24}}>
          <div className="eyebrow">08 May 2026</div>
          <h3 style={{fontFamily:'var(--font-display)'}}>Why a ten-year-old with a template will eat most agency work.</h3>
          <p style={{color:'var(--ink-soft)'}}>Placeholder preview — essays will be authored as MDX in /content/writing.</p>
        </article>
      </section>

      <footer className="footer"><div>© Salaro</div><div><a href="/contact">Contact</a></div></footer>
    </main>
  )
}
