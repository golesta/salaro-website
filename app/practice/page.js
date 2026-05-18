import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

export default function Practice() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">01 · Practice</div>
            <h1>How we deliver work <em>that matters</em></h1>
          </div>
          <div>
            <p style={{fontStyle:'italic', color:'var(--ink-soft)', fontFamily:'var(--font-display)', fontSize:20, lineHeight:1.5}}>Three practice lines: Build · Migrate · Advise. Each is designed for measurable outcomes.</p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="service-grid">
          <div className="service" id="build">
            <span className="service-num">01 · Build</span>
            <h4><em>Build</em> — product engineering, front-to-back</h4>
            <p>Multi-site web platforms. Headless CMS architectures. Custom API integrations. Performance-critical applications. We don't do template installs.</p>
            <p style={{fontSize:13, color:'var(--ink-faint)', lineHeight:1.6}}>Recent: AskDroid (in development), HBM Partners financial advisory site, Quantime book companion site.</p>
          </div>
          <div className="service" id="migrate">
            <span className="service-num">02 · Migrate</span>
            <h4><em>Migrate</em> — legacy lifts and DNN-focused migrations</h4>
            <p>DNN, EP, ageing WordPress and custom CMSs the original developer walked away from. Replatformed onto WordPress or Next.js, without losing content, SEO or customers. Salar has 15+ years of DNN expertise — most agencies won't touch it.</p>
            <p style={{fontSize:13, color:'var(--ink-faint)', lineHeight:1.6}}>Recent: Salaro Legacy (DNN → modern), Properties.co.uk (redevelopment in progress).</p>
          </div>
          <div className="service" id="advise">
            <span className="service-num">03 · Advise</span>
            <h4><em>Advise</em> — short, high-signal engagements</h4>
            <p>Two-week scoping sprints. You walk away with a written technical brief and a recommended approach. If you go on to build it with us, the fee credits against the project.</p>
            <p style={{fontSize:13, color:'var(--ink-faint)', lineHeight:1.6}}>For: organisations weighing build-vs-buy, choosing between platforms, or sitting on a legacy stack and not sure how to move forward.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
