import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

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
            <p style={{fontStyle:'italic', color:'var(--ink-soft)', fontFamily:'var(--font-display)', fontSize:20, lineHeight:1.5}}>Founder-led UK consultancy with distributed partners across three locations.</p>
          </div>
        </div>
      </section>

      <div className="bio-section" id="founder">
        <div className="bio-label">Founder</div>
        <div className="bio-text">
          <p>Salaro was founded by Salar Golestanian, a physicist turned software developer turned AI consultant — based in Woking, Surrey.</p>
          <p>With an MPhil in Physics from Brunel University and over 30 years building technology solutions across the UK, Europe and beyond, Salar brings an unusual combination of scientific rigour, commercial experience and hands-on technical delivery.</p>
          <p>From semiconductor research to DNN and WordPress platforms, from iOS and Android apps to natural resources finance — and now to AI agent systems and on-premise LLM deployments — the thread has always been the same: understand the problem deeply, then build the right solution.</p>
          <p>Salaro works with a trusted network of designers, developers and consultants across Guildford, Berlin and Pondicherry — bringing the right people to each engagement without the overhead of a large agency.</p>
        </div>
      </div>

      <div className="team-section" id="team">
        <div className="section-head">
          <h2>Team</h2>
          <div className="eyebrow">Three locations</div>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <p className="team-member-name">Salar Golestanian</p>
            <span className="team-member-role">Founder &amp; Lead Consultant</span>
            <span className="team-member-location">Guildford, Surrey, UK</span>
            <p className="team-member-desc">MPhil Physics, Brunel University. 30+ years in technology, software, e-commerce and AI. Specialist in on-premise AI deployments and technology strategy.</p>
            <a className="team-member-link" href="https://www.linkedin.com/in/salargolestanian/" target="_blank" rel="noopener noreferrer">LinkedIn Profile →</a>
          </div>
          <div className="team-member">
            <p className="team-member-name">Abi Golestanian</p>
            <span className="team-member-role">Design Lead &amp; Strategy Consultant</span>
            <span className="team-member-location">Berlin, Germany</span>
            <p className="team-member-desc">14 years experience in product design, brand strategy and UX. Former Accenture management consultant. Works in English, German and French.</p>
            <a className="team-member-link" href="https://abigolestanian.com" target="_blank" rel="noopener noreferrer">abigolestanian.com →</a>
          </div>
          <div className="team-member">
            <p className="team-member-name">Delivery &amp; Development Team</p>
            <span className="team-member-role">Graphics, Video &amp; Development</span>
            <span className="team-member-location">Pondicherry, India</span>
            <p className="team-member-desc">India-based delivery team handles graphics, video production, front-end development and mobile applications — providing high-quality output at scale.</p>
          </div>
        </div>
      </div>

      <div className="values-section" id="values">
        <div className="section-head">
          <h2>How we work</h2>
          <div className="eyebrow">Values</div>
        </div>
        <div className="values-grid">
          <div className="value">
            <p className="value-name">Small on purpose</p>
            <p className="value-desc">Three locations, a senior team, an agent factory underneath. Not a forty-person agency pretending to be focused.</p>
          </div>
          <div className="value">
            <p className="value-name">Engineering first</p>
            <p className="value-desc">We build with people who actually ship code. Strategy and design serve the engineering, not the other way around.</p>
          </div>
          <div className="value">
            <p className="value-name">Honest scoping</p>
            <p className="value-desc">We tell you what we can and can't do, in writing, before any build. If we're not the right shop, we'll say so.</p>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
