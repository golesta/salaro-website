import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

export default function Studio() {
  return (
    <main>
      <Header />

      <section className="page-hero">
        <div className="eyebrow">Studio · About</div>
        <h1>A <em>small UK practice</em>, deliberately.</h1>
        <p className="lede">Salaro is a working studio, not an agency. One founder, a small senior team, and the tools that make 2026 possible.</p>
      </section>

      <section className="studio-section" id="founder">
        <div>
          <div className="side-line"><span className="side-num">01 · Founder</span></div>
          <div className="side-meta">Woking, Surrey<br />MPhil Physics<br />30+ years in tech<br />Available for calls</div>
        </div>
        <div>
          <h2>One pair of hands <em>at the helm</em>.</h2>
          <p className="studio-body">Salaro was founded by Salar Golestanian, a physicist turned software developer turned AI consultant — based in Woking, Surrey.</p>
          <p className="studio-body">With an MPhil in Physics from Brunel University and over 30 years building technology solutions across the UK, Europe and beyond, Salar brings an unusual combination of scientific rigour, commercial experience and hands-on technical delivery.</p>
          <p className="studio-body">From semiconductor research to DNN and WordPress platforms, from iOS and Android apps to natural resources finance — and now to AI agent systems and on-premise LLM deployments — the thread has always been the same: understand the problem deeply, then build the right solution.</p>
          <p className="studio-body">Salaro works with a trusted network of designers, developers and consultants across Guildford, Berlin and Pondicherry — bringing the right people to each engagement without the overhead of a large agency.</p>
        </div>
      </section>

      <section className="studio-section" id="team">
        <div>
          <div className="side-line"><span className="side-num">02 · Team</span></div>
          <div className="side-meta">UK · Berlin · India<br />Senior team only<br />Async-first<br />Three locations</div>
        </div>
        <div>
          <h2>A <em>UK lead</em>, a <em>senior team</em> across three cities.</h2>
          <p className="studio-body"><strong style={{ fontFamily: 'var(--font-display)', fontStyle: 'normal', fontWeight: 500, color: 'var(--ink-strong)' }}>Salar Golestanian</strong> — Founder &amp; Lead Consultant · Guildford, Surrey<br />MPhil Physics, Brunel University. 30+ years in technology, software, e-commerce and AI. Specialist in on-premise AI deployments and technology strategy.</p>
          <p className="studio-body"><strong style={{ fontFamily: 'var(--font-display)', fontStyle: 'normal', fontWeight: 500, color: 'var(--ink-strong)' }}>Abi Golestanian</strong> — Design Lead &amp; Strategy Consultant · Berlin, Germany<br />14 years experience in product design, brand strategy and UX. Former Accenture management consultant. Works in English, German and French. <a href="https://abigolestanian.com" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1px solid var(--line)' }}>abigolestanian.com</a></p>
          <p className="studio-body"><strong style={{ fontFamily: 'var(--font-display)', fontStyle: 'normal', fontWeight: 500, color: 'var(--ink-strong)' }}>Delivery &amp; Development Team</strong> — Pondicherry, India<br />India-based delivery team handles graphics, video production, front-end development and mobile applications — providing high-quality output at scale.</p>
        </div>
      </section>

      <section className="studio-section" id="values">
        <div>
          <div className="side-line"><span className="side-num">03 · Values</span></div>
          <div className="side-meta">How we operate<br />Plain language<br />Fixed price<br />No project managers</div>
        </div>
        <div>
          <h2>Four things we hold to.</h2>
          <div className="values">
            <div className="value">
              <span className="value-num">01</span>
              <h3 className="value-title">Small on <em>purpose</em>.</h3>
              <div className="value-body">We do not want to be a 40-person agency. We want to do the work, well, and go home.</div>
            </div>
            <div className="value">
              <span className="value-num">02</span>
              <h3 className="value-title">You own <em>everything</em>.</h3>
              <div className="value-body">The code lives in your GitHub. The deployment lives in your Vercel. We do not hold your business hostage.</div>
            </div>
            <div className="value">
              <span className="value-num">03</span>
              <h3 className="value-title">Plain <em>numbers</em>.</h3>
              <div className="value-body">Fixed proposals, fixed prices. If a project is risky we say so, and price it accordingly.</div>
            </div>
            <div className="value">
              <span className="value-num">04</span>
              <h3 className="value-title">Judgment, not <em>throughput</em>.</h3>
              <div className="value-body">Agents draft. Humans decide. That is the entire method.</div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
