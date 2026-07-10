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
            <a href="/contact" className="top-cta">Start a project</a>
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
            <div className="panel" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', padding:'32px 36px'}}>
              <div className="lab a">Service focus</div>
              <p style={{marginTop:'14px', lineHeight:'1.7', color:'var(--ink-soft)'}}>Practical publishing systems that can adapt as your business grows.</p>
              <ul style={{marginTop:'14px', listStyle:'none', padding:0}}>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Clear editorial structure</li>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Flexible content models</li>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Reliable long-term support</li>
              </ul>
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
            <div className="panel" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', padding:'32px 36px'}}>
              <div className="lab a">Service focus</div>
              <p style={{marginTop:'14px', lineHeight:'1.7', color:'var(--ink-soft)'}}>Product teams need software that feels considered, not over-engineered.</p>
              <ul style={{marginTop:'14px', listStyle:'none', padding:0}}>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Focused product thinking</li>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Robust implementation</li>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Calm iteration</li>
              </ul>
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
            <div className="panel" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', padding:'32px 36px'}}>
              <div className="lab a">Service focus</div>
              <p style={{marginTop:'14px', lineHeight:'1.7', color:'var(--ink-soft)'}}>A steadier way to grow, with attention on what actually moves the work forward.</p>
              <ul style={{marginTop:'14px', listStyle:'none', padding:0}}>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Clear priorities</li>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Better signalling</li>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Less wasted effort</li>
              </ul>
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
            <div className="panel" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', padding:'32px 36px'}}>
              <div className="lab a">Service focus</div>
              <p style={{marginTop:'14px', lineHeight:'1.7', color:'var(--ink-soft)'}}>A steadier technical foundation for products that need to last.</p>
              <ul style={{marginTop:'14px', listStyle:'none', padding:0}}>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Thoughtful planning</li>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Resilient architecture</li>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Measured delivery</li>
              </ul>
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
            <div className="panel" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', padding:'32px 36px'}}>
              <div className="lab a">Service focus</div>
              <p style={{marginTop:'14px', lineHeight:'1.7', color:'var(--ink-soft)'}}>A practical route from idea to launch, with the confidence to keep going after release.</p>
              <ul style={{marginTop:'14px', listStyle:'none', padding:0}}>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Clear technical direction</li>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Reliable deployment</li>
                <li style={{padding:'5px 0', color:'var(--ink-soft)'}}>Continued support</li>
              </ul>
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
              <a href="#" className="b1">Request a consultation</a>
              <a href="mailto:team@salaro.com" className="b2">team@salaro.com</a>
            </div>
          </div>
          <div className="clients-strip">
            <span className="lab">Our clients</span>
            <div className="row"><span>SMEs</span><span>Retail</span><span>Professional Services</span><span>Hospitality</span></div>
          </div>
        </div>


        <footer className="dark-lattice">
          <div className="cols">
            <div className="foot-top">
              <div>
                <div className="fbrand">Salaro</div>
                <p>A UK-led digital consultancy. Practising since 1995.</p>
              </div>
              <div className="fcol"><h5>Practice</h5><a href="#">Build</a><a href="#">Migrate</a><a href="#">Advise</a></div>
              <div className="fcol"><h5>Work</h5><a href="#">Recent projects</a><a href="#">Archive</a></div>
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
