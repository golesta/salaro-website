'use client';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
        document.querySelectorAll('.rv').forEach(el=>io.observe(el));

        const pipe=document.getElementById('pipe');
        const stages=[...document.querySelectorAll('.stage')];
        let started=false;
        function runPipe(){stages.forEach(s=>s.classList.remove('lit'));stages.forEach((s,i)=>setTimeout(()=>s.classList.add('lit'),i*1150));}
        const po=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!started){started=true;runPipe();setInterval(runPipe,6000);}}),{threshold:.4});
        if(pipe)po.observe(pipe);
  }, []);

  return (
    <div className="p-home">
        <div className="topbar">
          <div className="wrap">
            <a href="/" className="brand">Sala<span>ro</span></a>
            <nav className="nav"><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/writing">Writing</a><a href="/contact">Contact</a></nav>
            <a href="/contact" className="top-cta">Start a project</a>
          </div>
        </div>


        <header className="hero drifting-field">
          <div className="wrap"><div className="grid">
            <div className="hero-left">
              <span className="lab a">A UK-led digital consultancy</span>
              <span className="lab">Practising since 1995</span>
              <div className="hero-graphic">
                <svg viewBox="0 0 150 130" aria-hidden="true">
                  <line className="edge hot" x1="20" y1="26" x2="72" y2="52"/>
                  <line className="edge hot" x1="72" y1="52" x2="126" y2="34"/>
                  <line className="edge hot" x1="72" y1="52" x2="100" y2="98"/>
                  <line className="edge" x1="20" y1="26" x2="34" y2="88"/>
                  <line className="edge" x1="34" y1="88" x2="100" y2="98"/>
                  <line className="edge" x1="126" y1="34" x2="100" y2="98"/>
                  <circle className="node" cx="20" cy="26" r="3.5"/>
                  <circle className="node hot" cx="72" cy="52" r="5"/>
                  <circle className="node" cx="126" cy="34" r="3.5"/>
                  <circle className="node" cx="34" cy="88" r="3.5"/>
                  <circle className="node hot" cx="100" cy="98" r="3.5"/>
                </svg>
              </div>
              <div className="ops">
                <span className="lab">Pipeline live · queue clear</span>
                <span className="lab">Human review · engaged</span>
                <span className="lab">Repo access · on request</span>
              </div>
            </div>

            <div className="hero-right">
              <h1 className="serif">
                <span className="reveal-line"><span>Custom digital</span></span>
                <span className="reveal-line"><span>solutions for <span className="it">businesses</span></span></span>
                <span className="reveal-line"><span>ready to scale.</span></span>
              </h1>
              <p className="sub">We work with growing businesses to shape bespoke digital products, practical transformation, and long-term support with calm, senior delivery.</p>
              <div className="actions">
                <a href="/contact" className="btn-line">Take your business online <span className="arw">→</span></a>
                <span className="phone">Phone <b>07485 222490</b></span>
              </div>
              <div className="built">Built on code, not templates.</div>
            </div>

            <div className="hero-viz">
              <div className="viz-head"><span className="lab a">Pipeline</span><span className="live"><i></i>Live</span></div>
              <svg className="spark" viewBox="0 0 240 84" aria-hidden="true">
                <path className="s-area" d="M10,56 L50,47 L90,53 L130,38 L170,43 L210,29 L230,23 L230,80 L10,80 Z"/>
                <path className="s-line" d="M10,56 L50,47 L90,53 L130,38 L170,43 L210,29 L230,23"/>
                <circle className="s-end" cx="230" cy="23" r="3.5"/>
              </svg>
              <div className="hstat"><b className="serif">1.8×</b><span>faster delivery</span></div>
              <div className="hstat"><b className="serif">24h</b><span>max response</span></div>
            </div>
          </div></div>
        </header>


        <div className="signal-line"></div>
        <section className="pipeline band contour-drift">
          <div className="wrap">
            <div className="head-row rv">
              <h2 className="serif">How We Build<span className="it">Better Technology</span>.</h2>
              <p className="desc">Every project follows a proven delivery pipeline—strategy, research, development, and review. Each stage builds on the last, with expert human oversight throughout, ensuring every solution is thoughtful, reliable, and ready to perform.</p>
            </div>
            <div className="pipe-markers">
              <span className="lab a">Human judgment · lead</span>
              <span className="lab">Build pipeline · live</span>
            </div>
            <div className="pipe rv" id="pipe">
              <div className="track"><span className="pulse"></span></div>
              <div className="stages">
<div className="stage"><div className="dot"></div><div className="n">i</div><h4>Discover</h4></div>
<div className="stage"><div className="dot"></div><div className="n">ii</div><h4>Strategy</h4></div>
<div className="stage"><div className="dot"></div><div className="n">iii</div><h4>Design</h4></div>
<div className="stage"><div className="dot"></div><div className="n">iv</div><h4>Develop</h4></div>
<div className="stage"><div className="dot"></div><div className="n">v</div><h4>Launch</h4></div>
              </div>
            </div>
            <div className="pipe-foot">
              <span className="lab">Every stage · human reviewed</span>
              <span className="lab a">i → v · thirty years of practice</span>
            </div>
          </div>
        </section>


        <div className="signal-line"></div>

<section className="services band contour-drift">
  <div className="wrap">
    <div className="eyebrow lab a rv">Capabilities</div>

    <h2
      className="serif rv"
      style={{ fontSize: "clamp(32px,4.4vw,54px)", marginBottom: "64px" }}
    >
      Digital solutions <span className="it">built to scale</span>.
    </h2>

    <div className="svc-grid rv">

      <div className="svc">
        <div className="idx serif">01</div>
        <div className="kind lab a">Development</div>
        <h3 className="serif"><span className="it">Web</span> Experiences.</h3>
        <p>
          High-performance websites and custom web applications designed for
          speed, accessibility, and long-term growth.
        </p>
        <a href="/studio" className="arwlink">
          Learn More <span className="arw">→</span>
        </a>
      </div>

      <div className="svc">
        <div className="idx serif">02</div>
        <div className="kind lab a">Commerce</div>
        <h3 className="serif"><span className="it">E-commerce</span> Platforms.</h3>
        <p>
          Custom online stores that simplify purchasing, improve conversions,
          and grow alongside your business.
        </p>
        <a href="/studio" className="arwlink">
          Learn More <span className="arw">→</span>
        </a>
      </div>

      <div className="svc">
        <div className="idx serif">03</div>
        <div className="kind lab a">Mobile</div>
        <h3 className="serif"><span className="it">Apps</span> & Platforms.</h3>
        <p>
          Native and cross-platform mobile applications built with exceptional
          performance, usability, and scalability.
        </p>
        <a href="/studio" className="arwlink">
          Learn More <span className="arw">→</span>
        </a>
      </div>

      <div className="svc">
        <div className="idx serif">04</div>
        <div className="kind lab a">Intelligence</div>
        <h3 className="serif"><span className="it">AI</span> Solutions.</h3>
        <p>
          AI-powered automation, intelligent workflows, chatbots, and data
          solutions that deliver measurable business value.
        </p>
        <a href="/studio" className="arwlink">
          Learn More <span className="arw">→</span>
        </a>
      </div>

    </div>

    <div className="svc-markers rv">
      <div className="mk">
        <div className="k lab a">Projects</div>
        <div className="v">Web, Mobile & AI</div>
      </div>

      <div className="mk">
        <div className="k lab a">Solutions</div>
        <div className="v">Custom Built</div>
      </div>

      <div className="mk">
        <div className="k lab a">Technology</div>
        <div className="v">Modern & Scalable</div>
      </div>

      <div className="mk">
        <div className="k lab a">Approach</div>
        <div className="v">Strategy First</div>
      </div>
    </div>

  </div>
</section>

        <section className="feature band">
          <div className="wrap"><div className="grid">
            <div className="rv">
              <div className="eyebrow lab a">Cross-Platform Development</div>
              <h2 className="serif">Built for every<span className="it"> device</span>.</h2>
              <p>We design and develop high-performance applications that deliver a seamless experience across web, iOS, Android, tablets, and desktop—engineered to scale with your business.</p>
              <div className="marker lab">Bespoke digital products · practical delivery</div>
            </div>
            <div className="device rv">
              <div className="mobile-signal">
           
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    
    <radialGradient id="bgGlow" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#F6EAE2" stop-opacity="0.9"/>
      <stop offset="40%" stop-color="#F6EAE2" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#F6EAE2" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="haloSoft" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F6EAE2" stop-opacity="0.9"/>
      <stop offset="40%" stop-color="#E7D3C7" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#E7D3C7" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="centerCore" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#B8846B" stop-opacity="1"/>
      <stop offset="60%" stop-color="#C8A18A" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#C8A18A" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="deviceFill" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.85"/>
      <stop offset="70%" stop-color="#F6EAE2" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#F6EAE2" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="strokeGrad1" x1="0%" x2="100%">
      <stop offset="0%" stop-color="#C8A18A" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#E7D3C7" stop-opacity="0.85"/>
    </linearGradient>

    <linearGradient id="strokeGrad2" x1="0%" x2="100%">
      <stop offset="0%" stop-color="#B8846B" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#C8A18A" stop-opacity="0.7"/>
    </linearGradient>

    <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="18" result="blur"/>
      <feGaussianBlur stdDeviation="6" result="blur2"/>
    </filter>

    <filter id="microBlur" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>

    
    <filter id="innerSoft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="g"/>
      <feComponentTransfer in="g">
        <feFuncA type="linear" slope="0.6"/>
      </feComponentTransfer>
    </filter>
  </defs>

 
  <ellipse cx="600" cy="300" rx="560" ry="260" fill="url(#bgGlow)" filter="url(#softBlur)"/>

 
  <g id="illustration" transform="translate(0,0)">

   
    <g transform="translate(600,300)">
    
      <g transform="rotate(0 0 0)">
        <circle cx="0" cy="0" r="220" fill="none" stroke="url(#strokeGrad1)" stroke-width="1.2" stroke-opacity="0.12" stroke-linecap="round"/>
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 0 0" to="360 0 0" dur="38s" repeatCount="indefinite"/>
      </g>

  
      <g transform="rotate(0 0 0)">
        <circle cx="0" cy="0" r="160" fill="none" stroke="url(#strokeGrad2)" stroke-width="1.2" stroke-opacity="0.10" stroke-linecap="round"/>
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 0 0" to="-360 0 0" dur="26s" repeatCount="indefinite"/>
      </g>

    
      <g transform="rotate(0 0 0)">
        <circle cx="0" cy="0" r="100" fill="none" stroke="#E7D3C7" stroke-width="1.0" stroke-opacity="0.14" stroke-linecap="round"/>
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 0 0" to="360 0 0" dur="16s" repeatCount="indefinite"/>
      </g>
    </g>


    <g transform="translate(600,300)">
    
      <circle cx="0" cy="0" r="78" fill="url(#haloSoft)" filter="url(#softBlur)" opacity="0.9"/>
      
      <circle cx="0" cy="0" r="12" fill="url(#centerCore)"/>
     
      <circle cx="0" cy="0" r="12" fill="none" stroke="#C8A18A" stroke-width="1.2" stroke-opacity="0.6">
        <animateTransform attributeName="transform" attributeType="XML" type="scale" values="1;1.14;1" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="stroke-opacity" values="0.6;0.35;0.6" dur="3s" repeatCount="indefinite"/>
      </circle>

      
      <circle cx="0" cy="0" r="12" fill="none" stroke="#E7D3C7" stroke-width="1" stroke-opacity="0.5">
        <animate attributeName="r" from="12" to="220" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;0.2;0" dur="3s" repeatCount="indefinite"/>
      </circle>
    </g>

    
    <g transform="translate(600,300)">
      <circle cx="0" cy="0" r="38" fill="url(#haloSoft)" opacity="0.7" filter="url(#microBlur)"/>
      <circle cx="0" cy="0" r="18" fill="url(#centerCore)" opacity="0.9"/>
    </g>

   
    <path d="M600 300 C520 290, 360 270, 220 260"
          fill="none" stroke="url(#strokeGrad1)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
          stroke-dasharray="8 14" stroke-dashoffset="0" opacity="0.95">
      <animate attributeName="stroke-dashoffset" from="0" to="-900" dur="6s" repeatCount="indefinite"/>
      <animate attributeName="stroke-opacity" values="0.95;0.6;0.95" dur="6s" repeatCount="indefinite"/>
    </path>

    
    <path d="M600 300 C560 340, 420 380, 320 420"
          fill="none" stroke="url(#strokeGrad2)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
          stroke-dasharray="6 12" stroke-dashoffset="0" opacity="0.92">
      <animate attributeName="stroke-dashoffset" from="0" to="-900" dur="5.2s" repeatCount="indefinite"/>
      <animate attributeName="stroke-opacity" values="0.92;0.6;0.92" dur="5.2s" repeatCount="indefinite"/>
    </path>

    
    <path d="M600 300 C660 260, 780 250, 920 240"
          fill="none" stroke="url(#strokeGrad1)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
          stroke-dasharray="7 13" stroke-dashoffset="0" opacity="0.95">
      <animate attributeName="stroke-dashoffset" from="0" to="-900" dur="7s" repeatCount="indefinite"/>
      <animate attributeName="stroke-opacity" values="0.95;0.6;0.95" dur="7s" repeatCount="indefinite"/>
    </path>

    <path d="M600 300 C700 300, 760 330, 820 360"
          fill="none" stroke="url(#strokeGrad2)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
          stroke-dasharray="5 11" stroke-dashoffset="0" opacity="0.9">
      <animate attributeName="stroke-dashoffset" from="0" to="-900" dur="4.5s" repeatCount="indefinite"/>
      <animate attributeName="stroke-opacity" values="0.9;0.5;0.9" dur="4.5s" repeatCount="indefinite"/>
    </path>

    
    <path d="M600 300 C600 220, 600 180, 600 120"
          fill="none" stroke="url(#strokeGrad1)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
          stroke-dasharray="4 10" stroke-dashoffset="0" opacity="0.9">
      <animate attributeName="stroke-dashoffset" from="0" to="-900" dur="6.5s" repeatCount="indefinite"/>
      <animate attributeName="stroke-opacity" values="0.9;0.5;0.9" dur="6.5s" repeatCount="indefinite"/>
    </path>

   
    <g transform="translate(220,260)" filter="url(#microBlur)">
      <rect x="-78" y="-52" width="156" height="104" rx="8" ry="8" fill="url(#deviceFill)" stroke="#C8A18A" stroke-width="1.4" stroke-linejoin="round" />
      <rect x="-44" y="46" width="88" height="8" rx="3" ry="3" fill="#F6EAE2" opacity="0.6"/>
      <g transform="translate(0,0)">
        <animateTransform attributeName="transform" type="translate"
                          values="0 -6;0 6;0 -6" dur="6s" repeatCount="indefinite"/>
      </g>
    </g>

    
    <g transform="translate(320,420)">
      <rect x="-84" y="-40" width="168" height="96" rx="10" ry="10" fill="url(#deviceFill)" stroke="#C8A18A" stroke-width="1.4"/>
      <rect x="-84" y="46" width="168" height="8" rx="4" ry="4" fill="#F6EAE2" opacity="0.5"/>
      <g transform="translate(0,0)">
        <animateTransform attributeName="transform" type="translate"
                          values="0 -7;0 7;0 -7" dur="5s" repeatCount="indefinite"/>
      </g>
    </g>

   
    <g transform="translate(920,240)">
      <rect x="-48" y="-72" width="96" height="144" rx="14" ry="14" fill="url(#deviceFill)" stroke="#C8A18A" stroke-width="1.4"/>
      <g transform="translate(0,0)">
        <animateTransform attributeName="transform" type="translate"
                          values="0 -8;0 8;0 -8" dur="7s" repeatCount="indefinite"/>
      </g>
    </g>

  
    <g transform="translate(820,360)">
      <rect x="-26" y="-54" width="52" height="108" rx="12" ry="12" fill="url(#deviceFill)" stroke="#C8A18A" stroke-width="1.4"/>
      <g transform="translate(0,0)">
        <animateTransform attributeName="transform" type="translate"
                          values="0 -5;0 5;0 -5" dur="4.5s" repeatCount="indefinite"/>
      </g>
    </g>

 
    <g transform="translate(600,120)">
      <rect x="-18" y="-22" width="36" height="44" rx="10" ry="10" fill="url(#deviceFill)" stroke="#C8A18A" stroke-width="1.4"/>
      <g transform="translate(0,0)">
        <animateTransform attributeName="transform" type="translate"
                          values="0 -6;0 6;0 -6" dur="6.5s" repeatCount="indefinite"/>
      </g>
    </g>

   
    <g filter="url(#softBlur)" opacity="0.9">
      <circle cx="220" cy="260" r="36" fill="url(#haloSoft)" opacity="0.9"/>
      <circle cx="320" cy="420" r="40" fill="url(#haloSoft)" opacity="0.85"/>
      <circle cx="920" cy="240" r="34" fill="url(#haloSoft)" opacity="0.85"/>
      <circle cx="820" cy="360" r="30" fill="url(#haloSoft)" opacity="0.85"/>
      <circle cx="600" cy="120" r="22" fill="url(#haloSoft)" opacity="0.85"/>
    </g>

    
    <g stroke="#E7D3C7" stroke-width="0.9" stroke-opacity="0.5" fill="none">
      <circle cx="220" cy="260" r="56"/>
      <circle cx="820" cy="360" r="46"/>
    </g>

   
    <g fill="#FFFFFF" stroke="#F6EAE2" stroke-opacity="0.85" stroke-width="0.6">
   
      <circle cx="250" cy="220" r="2.2" opacity="0.0">
        <animate attributeName="opacity" values="0;0.9;0" dur="2.1s" begin="0.2s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.5;1.6;0.5" dur="2.1s" begin="0.2s" repeatCount="indefinite"/>
      </circle>

      <circle cx="180" cy="300" r="1.8" opacity="0.0">
        <animate attributeName="opacity" values="0;0.85;0" dur="2.8s" begin="0.8s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.6;1.4;0.6" dur="2.8s" begin="0.8s" repeatCount="indefinite"/>
      </circle>

      <circle cx="350" cy="380" r="1.6" opacity="0.0">
        <animate attributeName="opacity" values="0;0.9;0" dur="2.3s" begin="1.4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.5;1.5;0.5" dur="2.3s" begin="1.4s" repeatCount="indefinite"/>
      </circle>

      <circle cx="760" cy="270" r="1.9" opacity="0.0">
        <animate attributeName="opacity" values="0;0.95;0" dur="2.5s" begin="0.5s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.5;1.7;0.5" dur="2.5s" begin="0.5s" repeatCount="indefinite"/>
      </circle>

      <circle cx="900" cy="220" r="1.6" opacity="0.0">
        <animate attributeName="opacity" values="0;0.9;0" dur="3.1s" begin="1.1s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.6;1.3;0.6" dur="3.1s" begin="1.1s" repeatCount="indefinite"/>
      </circle>

      <circle cx="680" cy="360" r="1.4" opacity="0.0">
        <animate attributeName="opacity" values="0;0.85;0" dur="2.4s" begin="0.7s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.4;1.5;0.4" dur="2.4s" begin="0.7s" repeatCount="indefinite"/>
      </circle>

      <circle cx="610" cy="420" r="1.6" opacity="0.0">
        <animate attributeName="opacity" values="0;0.9;0" dur="2.0s" begin="1.9s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.5;1.6;0.5" dur="2.0s" begin="1.9s" repeatCount="indefinite"/>
      </circle>

      <circle cx="540" cy="240" r="1.7" opacity="0.0">
        <animate attributeName="opacity" values="0;0.9;0" dur="2.6s" begin="0.3s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.5;1.7;0.5" dur="2.6s" begin="0.3s" repeatCount="indefinite"/>
      </circle>

      <circle cx="480" cy="320" r="1.3" opacity="0.0">
        <animate attributeName="opacity" values="0;0.8;0" dur="2.85s" begin="1.2s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.5;1.4;0.5" dur="2.85s" begin="1.2s" repeatCount="indefinite"/>
      </circle>

      <circle cx="720" cy="200" r="1.5" opacity="0.0">
        <animate attributeName="opacity" values="0;0.9;0" dur="2.2s" begin="0.9s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.6;1.5;0.6" dur="2.2s" begin="0.9s" repeatCount="indefinite"/>
      </circle>

      <circle cx="980" cy="320" r="1.2" opacity="0.0">
        <animate attributeName="opacity" values="0;0.85;0" dur="3.0s" begin="1.6s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.5;1.5;0.5" dur="3.0s" begin="1.6s" repeatCount="indefinite"/>
      </circle>

      <circle cx="640" cy="170" r="1.6" opacity="0.0">
        <animate attributeName="opacity" values="0;0.95;0" dur="2.7s" begin="0.4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="scale" values="0.5;1.6;0.5" dur="2.7s" begin="0.4s" repeatCount="indefinite"/>
      </circle>
    </g>

  </g>
</svg>
              </div>
            </div>
          </div></div>
        </section>


        <section className="shop band">
          <div className="wrap"><div className="grid">
            <div className="rv">
             <div className="eyebrow lab a">E-commerce Solutions</div>

<h2 className="serif">
  Online stores built to <span className="it">grow your business</span>.
</h2>

<p>
  We design and develop high-performance e-commerce platforms that deliver
  seamless shopping experiences, simplify management, and turn visitors into
  loyal customers.
</p>

<div className="actions">
  <a href="/contact" className="btn-line">
    Start a Project <span className="arw">→</span>
  </a>

  <a href="/work" className="arwlink">
    View Our Work <span className="arw">→</span>
  </a>
</div>
            </div>
            <div className="rv">
            <ul className="checklist">
  <li>Fast, intuitive shopping experiences</li>
  <li>Secure payment gateway integration</li>
  <li>Responsive across desktop, tablet & mobile</li>
  <li>Advanced inventory & order management</li>
  <li>SEO-optimized architecture for better visibility</li>
  <li>Scalable platform built for business growth</li>
</ul>

            </div>
          </div>
<div className="mini-table">
  <div>
    <div className="mt-k">Platform</div>
    <div className="mt-v lab">Shopify · WooCommerce · Custom</div>
  </div>

  <div>
    <div className="mt-k">Payments</div>
    <div className="mt-v lab">Stripe · PayPal · Razorpay</div>
  </div>

  <div>
    <div className="mt-k">Performance</div>
    <div className="mt-v lab">Fast · Secure · Scalable</div>
  </div>
</div></div>
        </section>


        <section className="clients band">
          <div className="wrap rv">
            <div className="eyebrow lab a">Selected work</div>
            <h2 className="serif">A few of the <span className="it">clients</span> we've worked with.</h2>
            <div className="client-row">
              <a href="https://cleverbotanics.com/" className="c">
                <img src="/images/portfolio/CB.png" alt="Clever Botanics" />
               
              </a>
              <a href="https://hbm.salaro.com/" className="c">
                <img src="/images/portfolio/HBM.png" alt="HBM Partners" />
               
              </a>
              <a href="https://properties.co.uk/" className="c">
                <img src="/images/portfolio/Properties.png" alt="Properties.co.uk" />
               
              </a>
              <a href="https://askdroid.com/" className="c">
                <img src="/images/portfolio/Askroid.png" alt="Askdroid" />
              
              </a>
            </div>
          </div>
        </section>


        <section className="sector band">
          <div className="wrap rv">
            <div className="eyebrow lab a">Sector focus · growing businesses</div>
            <div className="two">
              <div className="top-row" style={{alignItems:'center'}}>
                <div className="text">
                  <div className="sec-markers">
                    <span className="lab">SMEs</span><span className="lab">Professional services</span><span className="lab">Retail &amp; hospitality</span>
                  </div>
                  <h2 className="serif">Practical digital work for <span className="it">teams</span> ready to grow.</h2>
                  <p className="lead">We help ambitious businesses shape clear digital products, modernise legacy systems, and create a calmer path to growth.</p>
                  <div className="sec-markers">
                    <span className="lab a">Web platforms</span><span className="lab a">Product design</span><span className="lab a">Digital strategy</span><span className="lab a">Long-term support</span>
                  </div>
                </div>
                <div className="image" style={{display:'flex', justifyContent:'center'}}>
                  <div style={{width:'100%', minHeight:'220px', display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'1fr 1fr', alignItems:'center', maxWidth:720}}>
                    <div style={{padding:'45px 48px', textAlign:'center', borderRight:'1px solid var(--line-fine)'}}>
                      <b className="serif" style={{fontSize:'48px', lineHeight:1, color:'var(--accent)'}}>98<em style={{fontStyle:'normal', fontSize:'20px', marginLeft:'6px', color:'var(--accent)'}}>%</em></b>
                      <div className="tag" style={{marginTop:'12px', color:'var(--ink-soft)'}}>CLIENT RETENTION</div>
                    </div>
                    <div style={{padding:'34px 48px', textAlign:'center', borderLeft:'1px solid var(--line-fine)'}}>
                      <b className="serif" style={{fontSize:'44px', lineHeight:1, color:'var(--accent)'}}>40<em style={{fontStyle:'normal', fontSize:'18px', marginLeft:'6px', color:'var(--accent)'}}>+</em></b>
                      <div className="tag" style={{marginTop:'12px', color:'var(--ink-soft)'}}>PROJECTS DELIVERED</div>
                    </div>

                    <div style={{padding:'34px 48px', textAlign:'center', borderTop:'1px solid var(--line-fine)', borderRight:'1px solid var(--line-fine)'}}>
                      <b className="serif" style={{fontSize:'40px', lineHeight:1, color:'var(--accent)'}}>12</b>
                      <div className="tag" style={{marginTop:'12px', color:'var(--ink-soft)'}}>YEARS COMBINED EXPERIENCE</div>
                    </div>
                    <div style={{padding:'48px 48px', textAlign:'center', borderTop:'1px solid var(--line-fine)', borderLeft:'1px solid var(--line-fine)'}}>
                      <b className="serif" style={{fontSize:'40px', lineHeight:1, color:'var(--accent)'}}>24/7</b>
                      <div className="tag" style={{marginTop:'12px', color:'var(--ink-soft)'}}>SUPPORT</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rows">
                <div className="card highlight-card">
                  <div className="lab">Featured · Website</div>
                  <h4 className="serif">HBM Partners</h4>
                  <p>A considered digital presence for a professional services firm, built around clarity, trust, and thoughtful product storytelling.</p>
                  <a href="https://hbm.salaro.com/" className="arwlink">View the site <span className="arw">→</span></a>
                </div>
                <div className="card highlight-card">
                  <div className="lab">More work</div>
                  <h4 className="serif">Your project next.</h4>
                  <p>Digital strategy, bespoke builds, and practical support for teams that need a reliable partner without the usual agency noise.</p>
                  <a href="/contact" className="arwlink">Start a conversation <span className="arw">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="ethos">
          <div className="wrap"><div className="grid">
            <div className="rv">
              <div className="eyebrow lab a">Ethos</div>
              <div className="small serif">Intelligent design over noise.</div>
            </div>
            <div className="big serif rv">We solve problems to produce intelligent designs, deliver engaging experiences and build <em>meaningful connections</em>. Whether it's website design or app development, we take your business online <em>the right way</em>.</div>
          </div></div>
        </section>


        <footer className="dark-lattice">
          <div className="cols">
            <div className="foot-top">
              <div>
                <div className="fbrand">Salaro</div>
                <p>A UK-led digital consultancy. Practising since 1995.</p>
              </div>
              <div className="fcol"><h5>Practice</h5><a href="#">Build</a><a href="#">Migrate</a><a href="#">Advise</a></div>
              <div className="fcol"><h5>Work</h5><a href="#">Recent projects</a><a href="#">Archive</a></div>
              <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><a href="#">UK-based</a><a href="#">LinkedIn</a></div>
            </div>
            <div className="foot-bot">
              <span className="lab">© 2026 Salaro Ltd · Registered in England &amp; Wales</span>
              <span className="lab">Practising since 1995</span>
            </div>
          </div>
        </footer>
    </div>
  );
}
