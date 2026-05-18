import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

export default function Contact() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Contact</div>
            <h1>Send a note</h1>
          </div>
          <div>
            <p style={{fontStyle:'italic', color:'var(--ink-soft)', fontFamily:'var(--font-display)', fontSize:20, lineHeight:1.5}}>Name · Email · Company (optional) · Message.</p>
          </div>
        </div>
      </section>

      <div className="contact-layout">
        <div className="contact-form-col">
          <form action="/api/contact" method="post">
            <div className="form-field">
              <label className="eyebrow">Name</label>
              <input name="name" type="text" autoComplete="name" />
            </div>
            <div className="form-field">
              <label className="eyebrow">Email</label>
              <input name="email" type="email" autoComplete="email" />
            </div>
            <div className="form-field">
              <label className="eyebrow">Company</label>
              <input name="company" type="text" autoComplete="organization" />
            </div>
            <div className="form-field">
              <label className="eyebrow">Message</label>
              <textarea name="message" rows={6} />
            </div>
            <div style={{marginTop:8}}>
              <button className="btn-primary" type="submit">Send the note</button>
            </div>
          </form>
        </div>

        <div className="offices-col">
          <h3>Our offices</h3>

          <div className="office">
            <span className="office-city">Guildford, Surrey</span>
            <p className="office-detail">GU3 3BY, United Kingdom<br />Tel: +44 7485 222490</p>
          </div>

          <div className="office">
            <span className="office-city">Berlin, Germany</span>
            <p className="office-detail">EU enquiries — contact via <a href="https://abigolestanian.com" target="_blank" rel="noopener noreferrer">abigolestanian.com</a></p>
          </div>

          <div className="office">
            <span className="office-city">Pondicherry, India</span>
            <p className="office-detail">Development &amp; Delivery</p>
          </div>

          <p className="response-note">We typically respond within one business day.</p>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
