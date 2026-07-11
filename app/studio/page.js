'use client';
import { useEffect } from 'react';

export default function StudioPage() {
  useEffect(() => {
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});
        document.querySelectorAll('.rv').forEach(el=>io.observe(el));

        // testimonial carousel
        const track=document.getElementById('track');
        const dotsWrap=document.getElementById('dots');
        const cards=[...track.children];
        let idx=0,pages=1;
        function perView(){return window.innerWidth>=920?3:(window.innerWidth>=600?2:1);}
        function build(){
          const pv=perView();
          pages=Math.max(1,cards.length-pv+1);
          cards.forEach(c=>c.style.flexBasis=(100/pv)+'%');
          dotsWrap.innerHTML='';
          for(let i=0;i<pages;i++){
            const b=document.createElement('button');
            b.className='dot'+(i===0?' on':'');
            b.setAttribute('aria-label','Go to slide '+(i+1));
            b.onclick=()=>go(i);
            dotsWrap.appendChild(b);
          }
          if(idx>=pages)idx=0;
          go(idx);
        }
        function go(i){
          idx=i;const pv=perView();
          track.style.transform='translateX(-'+(i*(100/pv))+'%)';
          [...dotsWrap.children].forEach((d,j)=>d.classList.toggle('on',j===i));
        }
        build();
        window.addEventListener('resize',build);
        let auto=setInterval(()=>go((idx+1)%pages),6000);
  }, []);

  return (
    <div className="p-studio">
        <div className="topbar">
          <div className="wrap">
            <a href="/" className="brand">Sala<span>ro</span></a>
            <nav className="nav"><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio" className="active">Studio</a><a href="/writing">Writing</a><a href="/contact">Contact</a></nav>
            <a href="tel:+447485222490" className="top-cta">Start a project</a>
          </div>
        </div>


        <header className="hero drifting-field">
          <div className="wrap">
            <div className="hero-inner">
              <div className="hero-copy">
                <div className="eyebrow lab a">Studio / Services &amp; approach</div>
                <h1 className="serif">
                  <span className="reveal-line"><span>A <span className="it">studio</span> for speed,</span></span>
                  <span className="reveal-line"><span>clarity, and scale.</span></span>
                </h1>
                <p className="sub">Salaro brings UK-led strategy, thoughtful delivery and practical systems to ambitious teams that need more than a template.</p>
              </div>
              <div className="hero-viz">
                <div className="viz-cap"><span className="lab a">Delivery profile</span><span className="lab">Live studio</span></div>
                <div className="rings">
                  <svg viewBox="0 0 200 200" aria-hidden="true">
                    <g transform="rotate(-90 100 100)">
                      <circle className="ring-t" cx="100" cy="100" r="80"/>
                      <circle className="ring-v v1" cx="100" cy="100" r="80" style={{'--dash': '502.66', '--off': '40.2'}}/>
                      <circle className="ring-t" cx="100" cy="100" r="62"/>
                      <circle className="ring-v v2" cx="100" cy="100" r="62" style={{'--dash': '389.56', '--off': '46.7'}}/>
                      <circle className="ring-t" cx="100" cy="100" r="44"/>
                      <circle className="ring-v v3" cx="100" cy="100" r="44" style={{'--dash': '276.46', '--off': '55.3'}}/>
                    </g>
                  </svg>
                  <div className="legend">
                    <div><span className="dot d1"></span>Speed<b>92</b></div>
                    <div><span className="dot d2"></span>Clarity<b>88</b></div>
                    <div><span className="dot d3"></span>Scale<b>80</b></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="signal-line"></div>

        <section className="svc contour-drift">
          <div className="wrap"><div className="grid">
            <div className="rv">
              <div className="num lab">01 / 05</div>
              <h3 className="serif">Intelligent content management</h3>
              <p className="desc">Bespoke content systems, thoughtful editorial workflows and flexible publishing foundations that keep teams moving without unnecessary complexity.</p>
              <a href="#" className="arwlink">See details <span className="arw">→</span></a>
              <div className="incl">
                <div className="lab">What's included</div>
                <ul><li>Bespoke CMS delivery</li><li>Flexible content architecture</li><li>Thoughtful integrations</li><li>Modern editorial workflows</li><li>Clear team enablement</li></ul>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
              <svg width="100%" viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#3d3d3a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
</defs>

<g transform="translate(70,90) rotate(-12)">
<rect width="70" height="90" rx="4" fill="#FAECE7" stroke="#D85A30" stroke-width="1"/>
<line x1="12" y1="24" x2="58" y2="24" stroke="#993C1D" stroke-width="1.5" opacity="0.5"/>
<line x1="12" y1="38" x2="58" y2="38" stroke="#993C1D" stroke-width="1.5" opacity="0.5"/>
<line x1="12" y1="52" x2="42" y2="52" stroke="#993C1D" stroke-width="1.5" opacity="0.5"/>
</g>

<g transform="translate(110,150) rotate(8)">
<rect width="70" height="90" rx="4" fill="#FAECE7" stroke="#D85A30" stroke-width="1"/>
<line x1="12" y1="24" x2="58" y2="24" stroke="#993C1D" stroke-width="1.5" opacity="0.5"/>
<line x1="12" y1="38" x2="58" y2="38" stroke="#993C1D" stroke-width="1.5" opacity="0.5"/>
<line x1="12" y1="52" x2="42" y2="52" stroke="#993C1D" stroke-width="1.5" opacity="0.5"/>
</g>

<g transform="translate(40,190) rotate(-5)">
<rect width="70" height="90" rx="4" fill="#FAECE7" stroke="#D85A30" stroke-width="1"/>
<line x1="12" y1="24" x2="58" y2="24" stroke="#993C1D" stroke-width="1.5" opacity="0.5"/>
<line x1="12" y1="38" x2="58" y2="38" stroke="#993C1D" stroke-width="1.5" opacity="0.5"/>
<line x1="12" y1="52" x2="42" y2="52" stroke="#993C1D" stroke-width="1.5" opacity="0.5"/>
</g>

<path d="M230 100 L400 165 L400 215 L230 280 L280 190 Z" fill="#f5f4f0" stroke="#b4b2a9" stroke-width="1"/>

<line x1="400" y1="190" x2="460" y2="190" stroke="#3d3d3a" stroke-width="1.5" marker-end="url(#arrow)"/>

<g transform="translate(480,70)">
<rect width="140" height="46" rx="6" fill="#E1F5EE" stroke="#0F6E56" stroke-width="1"/>
<text x="70" y="28" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="#085041">Article</text>
</g>
<g transform="translate(480,126)">
<rect width="140" height="46" rx="6" fill="#E1F5EE" stroke="#0F6E56" stroke-width="1"/>
<text x="70" y="28" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="#085041">Media asset</text>
</g>
<g transform="translate(480,182)">
<rect width="140" height="46" rx="6" fill="#E1F5EE" stroke="#0F6E56" stroke-width="1"/>
<text x="70" y="28" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="#085041">Page template</text>
</g>
<g transform="translate(480,238)">
<rect width="140" height="46" rx="6" fill="#E1F5EE" stroke="#0F6E56" stroke-width="1"/>
<text x="70" y="28" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="#085041">Metadata</text>
</g>

<text x="150" y="330" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#3d3d3a">Scattered content</text>
<text x="550" y="330" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#3d3d3a">Structured system</text>
</svg>
            </div>
          </div></div>
        </section>

        <section className="svc">
          <div className="wrap"><div className="grid">
            <div className="rv">
              <div className="num lab">02 / 05</div>
              <h3 className="serif">Next-gen cross-platform engineering</h3>
              <p className="desc">High-performance web and mobile experiences built with thoughtful product decisions, clear architecture, and a calm delivery process.</p>
              <a href="#" className="arwlink">See details <span className="arw">→</span></a>
              <div className="incl">
                <div className="lab">What's included</div>
                <ul><li>Web and mobile delivery</li><li>Thoughtful product architecture</li><li>Clear component systems</li><li>Scalable product foundations</li><li>Design-to-development alignment</li></ul>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
            <svg width="100%" viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#3d3d3a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
</defs>

<g transform="translate(90,150)">
<rect x="0" y="0" width="160" height="100" rx="6" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/>
<rect x="10" y="10" width="140" height="80" rx="2" fill="#B5D4F4" opacity="0.5"/>
<line x1="20" y1="24" x2="120" y2="24" stroke="#0C447C" stroke-width="2" opacity="0.6"/>
<line x1="20" y1="40" x2="100" y2="40" stroke="#0C447C" stroke-width="2" opacity="0.4"/>
<line x1="20" y1="56" x2="110" y2="56" stroke="#0C447C" stroke-width="2" opacity="0.4"/>
<rect x="-10" y="100" width="180" height="8" rx="3" fill="#185FA5"/>
</g>

<g transform="translate(300,110)">
<rect x="0" y="0" width="70" height="140" rx="12" fill="#E1F5EE" stroke="#0F6E56" stroke-width="1"/>
<rect x="8" y="16" width="54" height="100" rx="2" fill="#9FE1CB" opacity="0.5"/>
<line x1="16" y1="30" x2="54" y2="30" stroke="#085041" stroke-width="2" opacity="0.6"/>
<line x1="16" y1="46" x2="46" y2="46" stroke="#085041" stroke-width="2" opacity="0.4"/>
<line x1="16" y1="62" x2="50" y2="62" stroke="#085041" stroke-width="2" opacity="0.4"/>
<circle cx="35" cy="128" r="4" fill="#0F6E56"/>
</g>

<line x1="250" y1="200" x2="300" y2="180" stroke="#7f77dd" stroke-width="1.5"/>
<circle cx="270" cy="240" r="46" fill="#EEEDFE" stroke="#534AB7" stroke-width="1"/>
<text x="270" y="234" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="#3C3489">Shared</text>
<text x="270" y="250" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="#3C3489">core</text>

<line x1="250" y1="220" x2="200" y2="200" stroke="#7f77dd" stroke-width="1.5"/>

<line x1="330" y1="220" x2="410" y2="220" stroke="#3d3d3a" stroke-width="1.5" marker-end="url(#arrow)"/>

<g transform="translate(430,120)">
<rect width="180" height="46" rx="6" fill="#FAECE7" stroke="#D85A30" stroke-width="1"/>
<text x="90" y="28" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="#712B13">Web app</text>
</g>
<g transform="translate(430,176)">
<rect width="180" height="46" rx="6" fill="#FAECE7" stroke="#D85A30" stroke-width="1"/>
<text x="90" y="28" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="#712B13">iOS app</text>
</g>
<g transform="translate(430,232)">
<rect width="180" height="46" rx="6" fill="#FAECE7" stroke="#D85A30" stroke-width="1"/>
<text x="90" y="28" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="#712B13">Android app</text>
</g>
<g transform="translate(430,288)">
<rect width="180" height="46" rx="6" fill="#FAECE7" stroke="#D85A30" stroke-width="1"/>
<text x="90" y="28" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="#712B13">Design system</text>
</g>

<text x="200" y="340" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#3d3d3a">Web and mobile</text>
<text x="520" y="370" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#3d3d3a">Cross-platform delivery</text>
</svg>
            </div>
          </div></div>
        </section>

        <section className="svc">
          <div className="wrap"><div className="grid">
            <div className="rv">
              <div className="num lab">03 / 05</div>
              <h3 className="serif">Algorithmic PPC &amp; growth systems</h3>
              <p className="desc">Practical growth support and clear performance reviews that help teams make better decisions without unnecessary noise.</p>
              <a href="#" className="arwlink">See details <span className="arw">→</span></a>
              <div className="incl">
                <div className="lab">What's included</div>
                <ul><li>Performance reviews</li><li>Channel strategy guidance</li><li>Conversion focus</li><li>Measurement planning</li><li>Clear next steps</li></ul>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
           <svg width="100%" viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#3d3d3a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
</defs>

<circle cx="70" cy="120" r="7" fill="#F0997B" stroke="#D85A30" stroke-width="1"/>
<circle cx="110" cy="90" r="5" fill="#F0997B" stroke="#D85A30" stroke-width="1"/>
<circle cx="60" cy="180" r="6" fill="#F0997B" stroke="#D85A30" stroke-width="1"/>
<circle cx="130" cy="160" r="8" fill="#F0997B" stroke="#D85A30" stroke-width="1"/>
<circle cx="90" cy="230" r="5" fill="#F0997B" stroke="#D85A30" stroke-width="1"/>
<circle cx="140" cy="260" r="6" fill="#F0997B" stroke="#D85A30" stroke-width="1"/>
<circle cx="50" cy="270" r="7" fill="#F0997B" stroke="#D85A30" stroke-width="1"/>

<path d="M190 100 L360 165 L360 215 L190 280 L240 190 Z" fill="#f5f4f0" stroke="#b4b2a9" stroke-width="1"/>
<circle cx="275" cy="190" r="22" fill="#EEEDFE" stroke="#534AB7" stroke-width="1"/>
<path d="M275 178v24M263 190h24" stroke="#3C3489" stroke-width="2" stroke-linecap="round"/>

<line x1="360" y1="190" x2="420" y2="190" stroke="#3d3d3a" stroke-width="1.5" marker-end="url(#arrow)"/>

<g transform="translate(440,90)">
<line x1="0" y1="220" x2="0" y2="0" stroke="#b4b2a9" stroke-width="1"/>
<line x1="0" y1="220" x2="200" y2="220" stroke="#b4b2a9" stroke-width="1"/>
<path d="M0 200 L40 180 L80 150 L120 100 L160 60 L200 20" fill="none" stroke="#0F6E56" stroke-width="2.5" stroke-linecap="round"/>
<circle cx="200" cy="20" r="5" fill="#1D9E75"/>
</g>

<text x="130" y="330" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#3d3d3a">Scattered signals</text>
<text x="540" y="330" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#3d3d3a">Compounding growth</text>
</svg>
            </div>
          </div></div>
        </section>

        <section className="svc">
          <div className="wrap"><div className="grid">
            <div className="rv">
              <div className="num lab">04 / 05</div>
              <h3 className="serif">Reliable digital foundations</h3>
              <p className="desc">Practical platform upgrades, resilient foundations and thoughtful extensions that support speed, clarity and steady growth.</p>
              <a href="#" className="arwlink">See details <span className="arw">→</span></a>
              <div className="incl">
                <div className="lab">What's included</div>
                <ul><li>Platform upgrade planning</li><li>System review and refinement</li><li>Security alignment</li><li>Reliable foundations</li><li>Budget-conscious delivery</li></ul>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
             <svg width="100%" viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#3d3d3a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
</defs>

<rect x="230" y="70" width="220" height="90" rx="6" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/>
<text x="340" y="110" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="#0C447C">Product</text>
<text x="340" y="130" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="#0C447C">and services</text>

<line x1="340" y1="160" x2="340" y2="185" stroke="#b4b2a9" stroke-width="1.5"/>

<rect x="180" y="185" width="320" height="46" rx="6" fill="#E1F5EE" stroke="#1D9E75" stroke-width="1"/>
<text x="340" y="213" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="#085041">System review and security</text>

<rect x="150" y="241" width="380" height="46" rx="6" fill="#9FE1CB" stroke="#0F6E56" stroke-width="1"/>
<text x="340" y="269" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="#04342C">Platform upgrades</text>

<rect x="120" y="297" width="440" height="50" rx="6" fill="#5DCAA5" stroke="#085041" stroke-width="1.5"/>
<text x="340" y="327" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="#04342C">Reliable infrastructure base</text>

<line x1="150" y1="297" x2="150" y2="347" stroke="#04342C" stroke-width="1" opacity="0.3"/>
<line x1="230" y1="297" x2="230" y2="347" stroke="#04342C" stroke-width="1" opacity="0.3"/>
<line x1="450" y1="297" x2="450" y2="347" stroke="#04342C" stroke-width="1" opacity="0.3"/>
<line x1="530" y1="297" x2="530" y2="347" stroke="#04342C" stroke-width="1" opacity="0.3"/>
</svg>
            </div>
          </div></div>
        </section>

        <section className="svc">
          <div className="wrap"><div className="grid">
            <div className="rv">
              <div className="num lab">05 / 05</div>
              <h3 className="serif">Cloud architecture &amp; application delivery</h3>
              <p className="desc">Reliable delivery pipelines and modular application architecture that scale thoughtfully without friction.</p>
              <a href="#" className="arwlink">See details <span className="arw">→</span></a>
              <div className="incl">
                <div className="lab">What's included</div>
                <ul><li>Delivery pipeline setup</li><li>Thoughtful infrastructure planning</li><li>Modular environments</li><li>Scalable technical foundations</li><li>Reliable launch support</li></ul>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
             <svg width="100%" viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#3d3d3a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
</defs>

<rect x="50" y="90" width="60" height="60" rx="6" fill="#FBEAF0" stroke="#993556" stroke-width="1"/>
<rect x="50" y="170" width="60" height="60" rx="6" fill="#FBEAF0" stroke="#993556" stroke-width="1"/>
<rect x="50" y="250" width="60" height="60" rx="6" fill="#FBEAF0" stroke="#993556" stroke-width="1"/>

<line x1="110" y1="120" x2="170" y2="190" stroke="#b4b2a9" stroke-width="1.5"/>
<line x1="110" y1="200" x2="170" y2="190" stroke="#b4b2a9" stroke-width="1.5"/>
<line x1="110" y1="280" x2="170" y2="190" stroke="#b4b2a9" stroke-width="1.5"/>

<rect x="170" y="165" width="120" height="50" rx="8" fill="#EEEDFE" stroke="#534AB7" stroke-width="1"/>
<text x="230" y="185" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="#3C3489">Delivery</text>
<text x="230" y="202" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="#3C3489">pipeline</text>

<line x1="290" y1="190" x2="350" y2="190" stroke="#3d3d3a" stroke-width="1.5" marker-end="url(#arrow)"/>

<path d="M420 220
  a34 34 0 0 1 0-68
  a44 44 0 0 1 84 -14
  a30 30 0 0 1 10 82
  h-94
  a30 30 0 0 1 0 -60
  Z" fill="#E6F1FB" stroke="#185FA5" stroke-width="1.5"/>

<rect x="400" y="185" width="46" height="30" rx="4" fill="#B5D4F4" stroke="#0C447C" stroke-width="1"/>
<rect x="452" y="185" width="46" height="30" rx="4" fill="#B5D4F4" stroke="#0C447C" stroke-width="1"/>
<rect x="426" y="150" width="46" height="30" rx="4" fill="#B5D4F4" stroke="#0C447C" stroke-width="1"/>

<text x="80" y="335" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#3d3d3a">Modular components</text>
<text x="470" y="290" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#3d3d3a">Scalable cloud environment</text>
</svg>
            </div>
          </div></div>
        </section>


        <section className="approach">
          <div className="wrap">
            <div className="head rv">
              <div className="eyebrow lab a" style={{marginBottom: '22px'}}>How we work</div>
              <h2 className="serif">A method built to make quality repeatable.</h2>
            </div>
            <div className="app-grid rv">
              <div className="app"><div className="k lab a">Phase / Strategy</div><h4 className="serif">Strategy alignment &amp; goal definition</h4><p>We clarify product goals, success metrics and constraints so every decision has purpose and every phase stays grounded in the brief.</p></div>
              <div className="app"><div className="k lab a">Phase / Architecture</div><h4 className="serif">Research-driven architecture</h4><p>We shape systems around real user needs, commercial priorities and implementation constraints so the solution is durable.</p></div>
              <div className="app"><div className="k lab a">Phase / Systems</div><h4 className="serif">Design execution &amp; systemisation</h4><p>We build coherent interfaces and thoughtful design systems that make quality repeatable as complexity grows.</p></div>
              <div className="app"><div className="k lab a">Phase / Refinement</div><h4 className="serif">Validation, optimisation &amp; refinement</h4><p>We refine with evidence, feedback and careful iteration so the final experience is clear, resilient and effective.</p></div>
            </div>
          </div>
        </section>


        <section className="tests">
          <div className="wrap">
            <div className="head rv">
              <div className="eyebrow lab a" style={{justifyContent: 'center', marginBottom: '22px'}}>In their words</div>
              <h2 className="serif">Work that earns trust.</h2>
            </div>
            <div className="carousel rv">
              <div className="track" id="track">
                <div className="tcard"><div className="inner"><div className="qm">&ldquo;</div><blockquote>Salaro treated the platform like a commercial system, not a decorative shell. The result was faster execution, clearer messaging and a product experience that earned trust immediately.</blockquote><div className="by"><span className="av">OG</span><div><div className="who">Omar George</div><div className="role">Founder &amp; CEO</div></div></div></div></div>
                <div className="tcard"><div className="inner"><div className="qm">&ldquo;</div><blockquote>Our website stopped being a brochure and started functioning as a growth asset. Engagement increased and the product now supports real conversations, not vanity impressions.</blockquote><div className="by"><span className="av">CL</span><div><div className="who">Cristofer Lubin</div><div className="role">Founder &amp; CEO</div></div></div></div></div>
                <div className="tcard"><div className="inner"><div className="qm">&ldquo;</div><blockquote>They translated complex requirements into clear, usable experiences. Communication was direct, execution disciplined and delivery matched the level of ambition we had.</blockquote><div className="by"><span className="av">AR</span><div><div className="who">Alex Rulben</div><div className="role">Founder &amp; CEO</div></div></div></div></div>
                <div className="tcard"><div className="inner"><div className="qm">&ldquo;</div><blockquote>We came in with an ambitious scope and left with a product that felt inevitable. Their judgement on where to push and where to simplify was the real value.</blockquote><div className="by"><span className="av">PN</span><div><div className="who">Priya Nair</div><div className="role">Founder &amp; CEO</div></div></div></div></div>
              </div>
              <div className="dots" id="dots"></div>
            </div>
          </div>
        </section>


        <div className="dark-block">
          <div className="cta rv">
            <h2 className="serif">Let's start something deliberate.</h2>
            <p>If you need a thoughtful build, a design system or a practical path to better digital delivery, we should talk.</p>
            <div className="btns">
              <a href="tel:+447485222490" className="b1">Request a consultation</a>
              <a href="mailto:team@salaro.com" className="b2">team@salaro.com</a>
            </div>
          </div>
         
        </div>


        <footer className="dark-lattice">
          <div className="cols">
            <div className="foot-top">
              <div>
                <div className="fbrand">Salaro</div>
                <p>A UK-led digital consultancy. Practising since 1995.</p>
              </div>
              <div className="fcol"><h5>Practice</h5><a href="/build">Build</a><a href="/migrate">Migrate</a><a href="/advise">Advise</a></div>
              <div className="fcol"><h5>Work</h5><a href="/work">Recent projects</a><a href="/archive">Archive</a></div>
              <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><a href="#">Guildford, Surrey</a><a href="#">LinkedIn</a></div>
            </div>
            <div className="foot-bot">
              <span className="lab">© 2026 Salaro Ltd · Registered in England &amp; Wales · Guildford, Surrey</span>
              <span className="lab">Practising since 1995</span>
            </div>
          </div>
        </footer>
    </div>
  );
}
