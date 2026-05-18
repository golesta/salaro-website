import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

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
            <p style={{fontStyle:'italic', color:'var(--ink-soft)', fontFamily:'var(--font-display)', fontSize:20, lineHeight:1.5}}>Considered pieces on web platforms, DNN modernisation, and AI in practice.</p>
          </div>
        </div>
      </section>

      <div className="writing-list">
        <article className="writing-entry">
          <div className="eyebrow">Coming soon</div>
          <h3>Why a ten-year-old with a template will eat most agency work.</h3>
          <p>First essays in preparation — notes on DNN modernisation, on-premise AI deployments, and the economics of agent-assisted delivery. Subscribe below to be notified when they publish.</p>
        </article>

        <div className="newsletter-block">
          <p>Occasional essays — we won't email you about anything else.</p>
          <form className="newsletter-form" action="#">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              aria-label="Email address"
              autoComplete="email"
            />
            <button className="btn-primary" type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
