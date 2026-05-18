import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';
import HeroRotator from '../components/HeroRotator';
import AgentFactoryDiagram from '../components/AgentFactoryDiagram';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">A UK web consultancy · Practising since 1995</div>
            <h1>For UK businesses that have outgrown a <HeroRotator />.</h1>
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

      <Reveal>
        <section className="diagram-block">
          <div className="diagram-inner">
            <div className="diagram-head">
              <h2>Agent factory — <em>how we ship</em>.</h2>
              <span className="eyebrow">Live · auto-running</span>
            </div>
            <AgentFactoryDiagram width={1200} height={400} />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="services">
          <div className="services-head">
            <h2>What we do <em>for clients</em>.</h2>
            <span className="eyebrow">Services</span>
          </div>
          <div className="service-grid">
            <div className="service" id="build">
              <span className="service-num">01 · Build</span>
              <h4><em>Build</em> — practical product engineering.</h4>
              <p>We design and build new web platforms, agent systems and on-premise AI deployments. Composable, testable, sustainable.</p>
              <div className="service-meta">Build · Projects</div>
            </div>
            <div className="service" id="migrate">
              <span className="service-num">02 · Migrate</span>
              <h4><em>Migrate</em> — DNN and legacy lifts.</h4>
              <p>We move organisations off DNN, EP, and ageing WordPress onto modern stacks — Next.js, Vercel, headless WordPress — without losing content, SEO or customers.</p>
              <div className="service-meta">Migrate · Modernisation</div>
            </div>
            <div className="service" id="advise">
              <span className="service-num">03 · Advise</span>
              <h4><em>Advise</em> — strategy, audits, pilots.</h4>
              <p>Short, decisive scoping engagements that produce a written brief and a clear next step. If we go on to build it, the fee credits the project.</p>
              <div className="service-meta">Advise · Workshops</div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="proof">
          <div className="proof-item">
            <span className="proof-num">01 · Tenure</span>
            30+ years building for the web.
          </div>
          <div className="proof-item">
            <span className="proof-num">02 · Clients</span>
            Active across four countries.
          </div>
          <div className="proof-item">
            <span className="proof-num">03 · Ships</span>
            We ship in weeks, not quarters.
          </div>
          <div className="proof-item">
            <span className="proof-num">04 · Honest</span>
            We're opinionated and selective.
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="manifesto">
          <div>
            <div className="manifesto-line"><span className="manifesto-num">A note · 01</span></div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-faint)', margin: 0 }}>
              Practical judgement<br />over throughput.
            </p>
          </div>
          <div>
            <h3>
              We place human <em>judgment</em> where it matters — on architecture, trade-offs, and what to build at all. The boring middle is automated. <em>The decisions stay human.</em>
            </h3>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </main>
  );
}
