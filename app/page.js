import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';
import AgentFactoryDiagram from '../components/AgentFactoryDiagram';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">UK web consultancy · Practising since 1995 · AI-native since 2026</div>
            <h1>For UK businesses that have <em>outgrown</em> a template.</h1>
          </div>
          <div className="hero-right">
            <p>A boutique technical consultancy. We deploy an architect, a researcher, a developer, and a reviewer — working in sequence, under human judgment — to ship work that a generalist agency can't.</p>
            <div className="ctas">
              <a className="btn-primary" href="tel:+441483870170">Phone +44 1483 870170</a>
              <a className="btn-secondary" href="/contact">Take your business online →</a>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="diagram-block">
          <div className="diagram-inner">
            <div className="diagram-head">
              <h2>Technology architecture — <em>how we ship</em>.</h2>
              <span className="eyebrow">Live · auto-running</span>
            </div>
            <AgentFactoryDiagram width={1200} height={400} />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="services">
          <div className="services-head">
            <h2>Our <em>services</em>.</h2>
            <span className="eyebrow">Services</span>
          </div>
          <div className="service-grid-4">
            <div className="service" id="web-development">
              <span className="service-num">01 · Build</span>
              <h4><em>Web</em> development.</h4>
              <p>Millions of online websites — what's going to set yours apart? We design and build platforms made to stand out.</p>
              <div className="service-meta">Read more</div>
            </div>
            <div className="service" id="ecommerce">
              <span className="service-num">02 · Migrate</span>
              <h4><em>E-commerce</em> solution.</h4>
              <p>Whether you're selling products, services or just running a catalogue — we build the right webshop for it.</p>
              <div className="service-meta">Read more</div>
            </div>
            <div className="service" id="apps">
              <span className="service-num">03 · Build</span>
              <h4><em>Apps</em> development.</h4>
              <p>Mobile, iOS and Android — rich native and cross-platform apps built to production quality.</p>
              <div className="service-meta">Read more</div>
            </div>
            <div className="service" id="ai-development">
              <span className="service-num">04 · Advise</span>
              <h4><em>AI</em> development.</h4>
              <p>Key techniques include machine learning, deep learning, natural language and computer vision.</p>
              <div className="service-meta">Read more</div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="proof">
          <div className="proof-item">
            <span className="proof-num">01 · Founded</span>
            Practising since 1995.
          </div>
          <div className="proof-item">
            <span className="proof-num">02 · Location</span>
            Surrey &amp; London, UK.
          </div>
          <div className="proof-item">
            <span className="proof-num">03 · Approach</span>
            AI-native since 2026.
          </div>
          <div className="proof-item">
            <span className="proof-num">04 · Focus</span>
            Boutique technical consultancy.
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mobile-env">
          <div className="mobile-env-head">
            <span className="eyebrow">Mobile development environment</span>
            <h2>Rich native apps, <em>any device</em>.</h2>
            <p>We handle device and OS compatibility to build rich native apps — across iOS and Android, at scale.</p>
            <div className="store-badges">
              <a className="store-badge" href="#" aria-label="Download on the App Store">App Store</a>
              <a className="store-badge" href="#" aria-label="Get it on Google Play">Google Play</a>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="webshop">
          <div className="webshop-bg"></div>
             <div className="webshop-inner">
          <div className="webshop-grid">
            <div className="webshop-intro">
              <span className="eyebrow">Online shops for all devices</span>
              <h2>A proven content-managed webshop with a <em>responsive design</em>.</h2>
              <p>Increasing sales is the primary goal. Online sales are at record levels and eCommerce is critical to business growth. By understanding the customer journey and the user experience, we build strategies that drive quality traffic and increase conversion.</p>
              <div className="webshop-actions">
                <a className="btn btn-fill" href="/contact">Start a project</a>
                <a className="btn btn-link" href="/contact">Read more &rarr;</a>
              </div>
            </div>
            <div className="webshop-card">
              <div className="card-top">
                <span className="live-dot"></span>
                <span>Enterprise commerce stack</span>
              </div>
              <ul className="bullets webshop-bullets">
                <li>Comprehensive product search capabilities</li>
                <li>Multi-language &amp; multi-currency support</li>
                <li>Fully customisable responsive design</li>
                <li>Customer subscription management</li>
                <li>Real-time shipping rates &amp; package tracking</li>
                <li>Shared database across multiple stores</li>
              </ul>
              <div className="mini-panel">
                <div className="mini-row"><span>Checkout</span><span>Optimised</span></div>
                <div className="mini-row"><span>Performance</span><span>Core Web Vitals ready</span></div>
                <div className="mini-row"><span>CMS</span><span>Composable architecture</span></div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="clients">
          <div className="clients-head">
            <span className="eyebrow">Selected work</span>
            <h2>A few of the <em>clients</em> we've worked with.</h2>
          </div>
          <ul className="client-logos">
          
<li className="client-logo">
  <img
    src="/images/cleverbotanics-logo.webp"
    alt="Clever Botanics"
    style={{ height: "60px", width: "auto", maxWidth: "220px", objectFit: "contain" }}
  />
</li>

<li className="client-logo">
  <img
    src="/images/hbm.webp"
    alt="HBM Partners"
    style={{ height: "60px", width: "auto", maxWidth: "220px", objectFit: "contain" }}
  />
</li>

<li className="client-logo">
  <img
    src="/images/properties.webp"
    alt="Properties.co.uk"
    style={{ height: "60px", width: "auto", maxWidth: "220px", objectFit: "contain" }}
  />
</li>

<li className="client-logo">
  <img
    src="/images/askdroid.webp"
    alt="Askdroid"
    style={{ height: "60px", width: "auto", maxWidth: "220px", objectFit: "contain" }}
  />
</li>

          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section className="sector" id="natural-resources">
     <div className="sector-head"> <div className="sector-left"> <span className="eyebrow"> Sector focus · Natural resources </span> <div className="sector-list"> <span>Oil &amp; gas</span> <span>Mining &amp; minerals</span> <span>Energy &amp; infrastructure</span> </div> </div> <div className="sector-right"> <h2> Marketing collateral for{" "} <em>natural resources</em> companies. </h2> <p> We help oil, gas and mining companies translate technical projects into clear, credible collateral for investors, partners and regulators. </p> <div className="sector-tags"> <span>Brochures</span> <span>Investor decks</span> <span>Websites</span> <span>Reports</span> </div> </div> </div>
          <div className="work-cards">
            <article className="work-card work-card-featured">
              <span className="work-tag">Featured · Website</span>
              <h3>HBM Partners</h3>
              <p>A corporate website built for a natural resources advisory firm — positioning their expertise across oil, gas and mining with a clean, investor-ready presence.</p>
              <a className="work-card-link" href="#">View the site →</a>
            </article>
            <article className="work-card">
              <span className="work-tag">More work</span>
              <h3>Your project <em>next</em>.</h3>
              <p>Capability statements, investor decks, project brochures and reporting suites for resource companies that need to communicate with precision.</p>
              <a className="work-card-link" href="/contact">Start a conversation →</a>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="cta-band">
          <div className="cta-band-inner">
            <div>
              <span className="eyebrow">Ready when you are</span>
              <h2>Let's take your business <em>online</em> — the right way.</h2>
              <p>Tell us what you're building. We'll turn it into intelligent design, engaging experiences and real results.</p>
            </div>
            <div className="cta-band-actions">
              <a className="btn-light" href="/contact">Start a conversation</a>
              <a className="cta-phone" href="tel:+441483870170">Phone +44 1483 870170</a>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="manifesto">
          <div>
            <div className="manifesto-line"><span className="manifesto-num">A note · 01</span></div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-faint)', margin: 0 }}>
              Intelligent design<br />over noise.
            </p>
          </div>
          <div>
            <h3>
              We solve problems to produce intelligent designs, deliver engaging experiences and build <em>meaningful connections</em>. Whether it's website design or app development, we take your business online <em>the right way</em>.
            </h3>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </main>
  );
}