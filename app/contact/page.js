import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

export default function Contact() {
  return (
    <main>
      <Header />

      <section className="page-hero">
        <div className="eyebrow">Contacts ----· Start a conversation</div>
        <h1>Tell us what you're trying to <em>build</em>.</h1>
        <p className="lede">A short note is enough. Tell us roughly what you have in mind, what's already in place, and when you'd like it live. We'll come back inside one working day.</p>
      </section>

      <section className="contact-grid">
        <div className="contact-left">
          <h2>Send a <em>note</em>.</h2>
          <form className="contact-form" action="/api/contact" method="post">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.co.uk" autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="org">Company</label>
              <input id="org" name="company" type="text" placeholder="Optional" autoComplete="organization" />
            </div>
            <div className="field">
              <label htmlFor="message">What are you trying to build?</label>
              <textarea id="message" name="message" rows={5} placeholder="A line or two is enough. Rough budget &amp; timeline if you have them." />
            </div>
            <button type="submit" className="form-submit">Send →</button>
          </form>
          <div className="contact-direct">
            Or write directly to <strong>hello@salaro.com</strong>.
          </div>
        </div>

        <div className="contact-right">
          <h2>How this <em>goes</em>.</h2>
          <div className="how-steps">
            <div className="how-step">
              <span className="how-step-num">01</span>
              <div>
                <h3>You <em>write</em>.</h3>
                <p>A short note via this form or by email. No NDA needed yet.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-num">02</span>
              <div>
                <h3>We <em>talk</em>.</h3>
                <p>A 30-minute video call inside the next few days, so we both know if this is a fit.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-num">03</span>
              <div>
                <h3>We <em>propose</em>.</h3>
                <p>A fixed-price proposal, usually back inside 48 hours of the call.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-num">04</span>
              <div>
                <h3>We <em>build</em>.</h3>
                <p>Two to six weeks of work, daily progress visible in your own repo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-honest">
        We work with UK SMEs. We <em>don't</em> take on enterprise projects that need procurement, security reviews and a project manager — that work goes to firms set up for it, and we're happy to refer you.
      </div>

      <SiteFooter />
    </main>
  );
}
