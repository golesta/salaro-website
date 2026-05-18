import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

export default function Work() {
  return (
    <main>
      <Header />

      <section className="page-hero">
        <div className="eyebrow">Selected work · 2000 – now</div>
        <h1><em>Thirty years</em> of shipped work.</h1>
        <p className="lede">Most recent client work is under confidentiality and not listed here. The archive below is a sample of the kind of work we have done — and, increasingly, the kind we now do faster.</p>
      </section>

      <section className="work-block" id="recent">
        <div className="work-block-head">
          <h2><em>Recent</em> · 2026 –</h2>
          <span className="eyebrow">Confidential · on request</span>
        </div>
        <p className="work-note">Recent client work is described on a call rather than listed publicly. We are happy to walk through two or three relevant examples in conversation.</p>
        <ul className="work-list">
          <li className="work-row">
            <span className="work-year">2026</span>
            <span className="work-title">A <em>UK manufacturer</em> · public site &amp; product configurator</span>
            <span className="work-sector">Industrial · SME</span>
            <span className="work-kind">Build</span>
          </li>
          <li className="work-row">
            <span className="work-year">2026</span>
            <span className="work-title">A <em>regional law firm</em> · DNN to Next.js migration</span>
            <span className="work-sector">Legal · 40 staff</span>
            <span className="work-kind">Migrate</span>
          </li>
          <li className="work-row">
            <span className="work-year">2026</span>
            <span className="work-title">An <em>SME owner</em> · AI adoption pilot &amp; team training</span>
            <span className="work-sector">Professional services</span>
            <span className="work-kind">Advise</span>
          </li>
        </ul>
      </section>

      <section className="work-block" id="archive">
        <div className="work-block-head">
          <h2><em>Properties</em> &amp; owned work</h2>
          <span className="eyebrow">Salaro · active &amp; ongoing</span>
        </div>
        <ul className="work-list">
          <li className="work-row">
            <span className="work-year">Active</span>
            <span className="work-title"><em>Clever Botanics</em> · cleverbotanics.com</span>
            <span className="work-sector">E-Commerce</span>
            <span className="work-kind">Build</span>
          </li>
          <li className="work-row">
            <span className="work-year">Active</span>
            <span className="work-title"><em>HBM Partners</em> · hbm.salaro.com</span>
            <span className="work-sector">Finance &amp; Advisory</span>
            <span className="work-kind">Build</span>
          </li>
          <li className="work-row">
            <span className="work-year">2026</span>
            <span className="work-title"><em>AskDroid</em> · askdroid.com</span>
            <span className="work-sector">AI &amp; Robotics</span>
            <span className="work-kind">In Development</span>
          </li>
          <li className="work-row">
            <span className="work-year">Active</span>
            <span className="work-title"><em>Properties.co.uk</em> · properties.co.uk</span>
            <span className="work-sector">Property</span>
            <span className="work-kind">Redevelopment</span>
          </li>
          <li className="work-row">
            <span className="work-year">Active</span>
            <span className="work-title"><em>Quantime</em> · quantime.uk</span>
            <span className="work-sector">Research &amp; Publishing</span>
            <span className="work-kind">Writing</span>
          </li>
          <li className="work-row">
            <span className="work-year">2000</span>
            <span className="work-title"><em>Salaro Legacy</em> · 25 years of client delivery</span>
            <span className="work-sector">Consulting</span>
            <span className="work-kind">Archive</span>
          </li>
        </ul>
      </section>

      <section className="work-block">
        <div className="work-block-head">
          <h2><em>Client archive</em> · 2000 – 2015</h2>
          <span className="eyebrow">Anonymised · for shape only</span>
        </div>
        <ul className="work-list">
          <li className="work-row"><span className="work-year">2014</span><span className="work-title">UK engineering group · multi-brand DNN platform</span><span className="work-sector">Industrial</span><span className="work-kind">Build &amp; CMS</span></li>
          <li className="work-row"><span className="work-year">2012</span><span className="work-title">London publisher · subscription portal</span><span className="work-sector">Publishing</span><span className="work-kind">Build</span></li>
          <li className="work-row"><span className="work-year">2010</span><span className="work-title">National charity · DNN content platform &amp; intranet</span><span className="work-sector">Third sector</span><span className="work-kind">Build &amp; CMS</span></li>
          <li className="work-row"><span className="work-year">2008</span><span className="work-title">Specialist insurer · broker extranet</span><span className="work-sector">Financial services</span><span className="work-kind">Build</span></li>
          <li className="work-row"><span className="work-year">2006</span><span className="work-title">London law firm · public site relaunch</span><span className="work-sector">Legal</span><span className="work-kind">Build</span></li>
          <li className="work-row"><span className="work-year">2003</span><span className="work-title">Regional retailer · first e-commerce site</span><span className="work-sector">Retail</span><span className="work-kind">Build</span></li>
          <li className="work-row"><span className="work-year">2000</span><span className="work-title">Salaro · founded</span><span className="work-sector">—</span><span className="work-kind">—</span></li>
        </ul>
      </section>

      <SiteFooter />
    </main>
  );
}
