import Header from '../components/Header';

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">A UK web consultancy · Practising since 2000</div>
            <h1>For UK businesses that have outgrown a <em>template</em></h1>
          </div>
          <div className="hero-right">
            <p>We combine 25 years of engineering judgement with pragmatic AI-enabled delivery — building, migrating and advising for ambitious SMEs.</p>
            <div className="ctas">
              <a className="btn-primary" href="/contact">Start a conversation</a>
              <a className="btn-secondary" href="/practice">See how we build →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="diagram-block">
        <div className="diagram-inner">
          <div className="diagram-head">
            <h2>Agent factory — how we ship</h2>
            <div className="eyebrow">Live diagram</div>
          </div>
          <div style={{height:120, display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{opacity:0.6}}>Diagram placeholder — agent-factory animation</div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-head">
          <h2>What we do <em>for</em> clients</h2>
          <div className="eyebrow">Services</div>
        </div>
        <div className="service-grid">
          <div className="service">
            <span className="service-num">01 · Build</span>
            <h4><em>Build</em> — practical product engineering</h4>
            <p>We ship composable, testable web systems backed by private deployments and sustainable ops.</p>
            <div className="service-meta">Build · Projects</div>
          </div>
          <div className="service">
            <span className="service-num">02 · Migrate</span>
            <h4><em>Migrate</em> — DNN and legacy lifts</h4>
            <p>We move old platforms to modern stacks with minimal downtime and sensible budgets.</p>
            <div className="service-meta">Migrate · Modernisation</div>
          </div>
          <div className="service">
            <span className="service-num">03 · Advise</span>
            <h4><em>Advise</em> — strategy, audits, pilots</h4>
            <p>Short, decisive engagements to reduce risk and show value fast.</p>
            <div className="service-meta">Advise · Workshops</div>
          </div>
        </div>
      </section>

      <section className="proof">
        <div>
          <span className="proof-num">01 · Tenure</span>
          <div className="proof-item">25 years working on practical web platforms</div>
        </div>
        <div>
          <span className="proof-num">02 · Clients</span>
          <div className="proof-item">Trusted by small organisations and teams</div>
        </div>
        <div>
          <span className="proof-num">03 · Ships</span>
          <div className="proof-item">We ship within weeks, not quarters</div>
        </div>
        <div>
          <span className="proof-num">04 · Honest</span>
          <div className="proof-item">We are opinionated and selective</div>
        </div>
      </section>

      <section className="manifesto">
        <aside>
          <div className="manifesto-num">A note · 01</div>
          <div className="manifesto-line" style={{marginTop:12}}>Practical judgement over throughput.</div>
        </aside>
        <div>
          <h3>We place human <em>judgment</em> where it matters</h3>
        </div>
      </section>

      <footer className="footer">
        <div>© Salaro</div>
        <div>hello@salaro.com</div>
      </footer>
    </main>
  )
}
