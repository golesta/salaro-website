import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">A UK web consultancy · Practising since 1995</div>
            <h1>For UK businesses that have outgrown a <em>template</em></h1>
          </div>
          <div className="hero-right">
            <p>We combine three decades of engineering judgement with pragmatic AI-enabled delivery — building, migrating and advising for ambitious SMEs.</p>
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
            <div className="eyebrow">Delivery model</div>
          </div>
          <p style={{fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.7, color:'var(--ink-soft)', maxWidth:'64ch', margin:'0 0 20px'}}>
            Salaro's delivery system pairs a small senior engineering team with an in-house multi-agent factory — an architect, researcher, developer and reviewer working together on volume work. People drive the judgement calls. Agents handle the throughput.
          </p>
          <p style={{fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.7, color:'var(--ink-soft)', maxWidth:'64ch', margin:0}}>
            The result: we ship complex builds in weeks, not quarters, without sacrificing the engineering depth that complex builds need.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="services-head">
          <h2>What we do <em>for</em> clients</h2>
          <div className="eyebrow">Services</div>
        </div>
        <div className="service-grid">
          <div className="service" id="build">
            <span className="service-num">01 · Build</span>
            <h4><em>Build</em> — practical product engineering</h4>
            <p>We design and build new web platforms, agent systems and on-premise AI deployments. Composable, testable, sustainable.</p>
            <div className="service-meta">Build · Projects</div>
          </div>
          <div className="service" id="migrate">
            <span className="service-num">02 · Migrate</span>
            <h4><em>Migrate</em> — DNN and legacy lifts</h4>
            <p>We move organisations off DNN, EP, and ageing WordPress onto modern stacks — Next.js, Vercel, headless WordPress — without losing content, SEO or customers.</p>
            <div className="service-meta">Migrate · Modernisation</div>
          </div>
          <div className="service" id="advise">
            <span className="service-num">03 · Advise</span>
            <h4><em>Advise</em> — strategy, audits, pilots</h4>
            <p>Short, decisive scoping engagements that produce a written brief and a clear next step. If we go on to build it, the fee credits the project.</p>
            <div className="service-meta">Advise · Workshops</div>
          </div>
        </div>
      </section>

      <section className="proof">
        <div>
          <span className="proof-num">01 · Tenure</span>
          <div className="proof-item">30+ years building for the web</div>
        </div>
        <div>
          <span className="proof-num">02 · Clients</span>
          <div className="proof-item">Active across four countries</div>
        </div>
        <div>
          <span className="proof-num">03 · Ships</span>
          <div className="proof-item">We ship in weeks, not quarters</div>
        </div>
        <div>
          <span className="proof-num">04 · Honest</span>
          <div className="proof-item">We're opinionated and selective</div>
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

      <SiteFooter />
    </main>
  )
}
