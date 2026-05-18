import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

const projects = [
  {
    title: 'Clever Botanics',
    url: 'cleverbotanics.com',
    tag: 'E-Commerce',
    desc: 'UK hemp and CBD wellness e-commerce. Six years of operation, 2,400+ five-star Trustpilot reviews, peak turnover £500k. Still trading.',
  },
  {
    title: 'HBM Partners',
    url: 'hbm.salaro.com',
    tag: 'Finance & Advisory',
    desc: 'Natural resources capital advisory. $300M+ in structured transactions for oil, gas, mining and renewables across Europe, Africa and the Middle East.',
  },
  {
    title: 'AskDroid',
    url: 'askdroid.com',
    tag: 'In Development',
    desc: 'Global directory of AI tools, robotics companies, developers and solutions. Comprehensive industry resource, currently in active build.',
  },
  {
    title: 'Properties.co.uk',
    url: 'properties.co.uk',
    tag: 'Property',
    desc: 'UK directory of property-related businesses, agents and services. Long-standing domain asset, currently in redevelopment.',
  },
  {
    title: 'Quantime',
    url: 'quantime.uk',
    tag: 'Research & Publishing',
    desc: 'Book bridging quantum mechanics and general relativity, with time as the central unifying concept. An MPhil in physics, decades of thinking, nearly complete.',
  },
  {
    title: 'Salaro Legacy',
    url: 'salaro.com',
    tag: 'Consulting',
    desc: 'Two decades of client delivery across web, mobile, DNN, WordPress, e-commerce and digital marketing. The foundation Salaro is built on.',
  },
];

export default function Work() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Work · Archive</div>
            <h1>Recent &amp; archived projects</h1>
          </div>
          <div>
            <p style={{fontStyle:'italic', color:'var(--ink-soft)', fontFamily:'var(--font-display)', fontSize:20, lineHeight:1.5}}>Six properties and engagements — built, advised, and still active.</p>
          </div>
        </div>
      </section>

      <div className="project-list" id="archive">
        {projects.map((p) => (
          <div className="project-entry" key={p.title}>
            <div className="project-head">
              <span className="project-title">{p.title}</span>
              <span className="project-meta">{p.tag}</span>
            </div>
            <span className="project-url">{p.url}</span>
            <p className="project-desc">{p.desc}</p>
          </div>
        ))}
      </div>

      <SiteFooter />
    </main>
  )
}
