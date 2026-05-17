import Header from '../../components/Header';

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
            <p style={{fontStyle:'italic', color:'var(--ink-soft)'}}>Name · Email · Company (optional) · Message — we respond within a few working days.</p>
          </div>
        </div>
      </section>

      <section style={{maxWidth:720, margin:'0 auto', padding:'48px 24px'}}>
        <form action="/api/contact" method="post">
          <div style={{marginBottom:12}}><label className="eyebrow">Name</label><input name="name" style={{width:'100%', border:'none', borderBottom:'1px solid var(--ink-strong)', padding:'8px 4px'}} /></div>
          <div style={{marginBottom:12}}><label className="eyebrow">Email</label><input name="email" style={{width:'100%', border:'none', borderBottom:'1px solid var(--ink-strong)', padding:'8px 4px'}} /></div>
          <div style={{marginBottom:12}}><label className="eyebrow">Company</label><input name="company" style={{width:'100%', border:'none', borderBottom:'1px solid var(--ink-strong)', padding:'8px 4px'}} /></div>
          <div style={{marginBottom:12}}><label className="eyebrow">Message</label><textarea name="message" rows={6} style={{width:'100%', border:'none', borderBottom:'1px solid var(--ink-strong)', padding:'8px 4px'}} /></div>
          <div style={{marginTop:16}}><button className="btn-primary" type="submit">Send the note</button></div>
        </form>
      </section>

      <footer className="footer"><div>© Salaro</div><div>hello@salaro.com</div></footer>
    </main>
  )
}
