import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

export default function Practice() {
  return (
    <main>
      <Header />

      <section className="page-hero">
        <div className="eyebrow">Practice · 2026</div>
        <h1>Three lines of work. <em>Done properly.</em></h1>
        <p className="lede">We are small on purpose. Three things we do well, three we leave to others. Each can be scoped tightly and shipped through your own GitHub and Vercel.</p>
      </section>

      <section className="practice-section" id="build">
        <div>
          <div className="side-line"><span className="side-num">01 · Build</span></div>
          <div className="side-meta">For SMEs<br />Fixed scope<br />2–6 weeks<br />You own the repo</div>
        </div>
        <div>
          <h2>AI-native <em>web builds</em>.</h2>
          <p className="practice-body">From a one-page brief to a production site. Claude designs the surface, our senior engineers refine and instrument it, and we ship through your GitHub to Vercel — usually inside a fortnight.</p>
          <div className="steps">
            <div className="step">
              <span className="step-num">Step 01</span>
              <h3 className="step-title">Brief</h3>
              <div className="step-body">Half-day call, fixed proposal back inside 48 hours.</div>
            </div>
            <div className="step">
              <span className="step-num">Step 02</span>
              <h3 className="step-title">AI draft</h3>
              <div className="step-body">Claude builds the visual + structural draft, reviewed live.</div>
            </div>
            <div className="step">
              <span className="step-num">Step 03</span>
              <h3 className="step-title">Engineer</h3>
              <div className="step-body">Our team ports to Next.js / your stack, hardens, accessibilises.</div>
            </div>
            <div className="step">
              <span className="step-num">Step 04</span>
              <h3 className="step-title">Ship</h3>
              <div className="step-body">Pushed to your GitHub, deployed to Vercel. Keys are yours.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="practice-section" id="migrate">
        <div>
          <div className="side-line"><span className="side-num">02 · Migrate</span></div>
          <div className="side-meta">Niche expertise<br />DNN since 2003<br />UK &amp; EU<br />Zero-downtime cutover</div>
        </div>
        <div>
          <h2>DNN <em>legacy migrations</em>.</h2>
          <p className="practice-body">Almost nobody still understands DNN. We do — fifteen years of it. If your site is trapped on an old DNN install, orphaned by a vanished agency, or recovering from a ransomware event, we can move it onto something modern without losing the content, the URLs, or the search rankings.</p>
          <ul className="bullets">
            <li>Audit of the existing DNN install, modules and skinning</li>
            <li>Content extraction with structure preserved</li>
            <li>URL mapping so SEO survives the move</li>
            <li>Re-platform to Next.js, WordPress, or modern DNN</li>
            <li>Asset and media migration</li>
            <li>Ransomware-recovered installs welcome</li>
          </ul>
        </div>
      </section>

      <section className="practice-section" id="advise">
        <div>
          <div className="side-line"><span className="side-num">03 · Advise</span></div>
          <div className="side-meta">Advisory<br />Half-day workshops<br />30-day pilots<br />Ongoing retainer</div>
        </div>
        <div>
          <h2>AI for <em>small businesses</em>.</h2>
          <p className="practice-body">Most SMEs know AI matters and don't know where to begin. We help you pick the few tools that actually pay back for your business, train your team to use them, and ship a pilot — without the enterprise overhead or the consultant theatre.</p>
          <div className="steps">
            <div className="step">
              <span className="step-num">Format 01</span>
              <h3 className="step-title">Half-day</h3>
              <div className="step-body">A working session, your team and ours. Leave with three things to try on Monday.</div>
            </div>
            <div className="step">
              <span className="step-num">Format 02</span>
              <h3 className="step-title">30-day pilot</h3>
              <div className="step-body">One process picked, one tool deployed, one outcome measured.</div>
            </div>
            <div className="step">
              <span className="step-num">Format 03</span>
              <h3 className="step-title">Retainer</h3>
              <div className="step-body">A monthly call and async support. For owners who want a sparring partner.</div>
            </div>
            <div className="step">
              <span className="step-num">Format 04</span>
              <h3 className="step-title">Build &amp; advise</h3>
              <div className="step-body">Pair our build line with the advisory work, on one engagement.</div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
