"use client";

import { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.classList.add('reveal-ready');
    const els = root.querySelectorAll('.reveal');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootRef]);
}

export default function Practice() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main ref={rootRef}>
      <Header />

      <section className="page-hero">
        <div className="eyebrow reveal d1">Practice · 2026</div>
        <h1 className="reveal d2">Three lines of work. <em>Done properly.</em></h1>
        <p className="lede reveal d3">We are small on purpose. Three things we do well, three we leave to others. Each can be scoped tightly and shipped through your own GitHub and Vercel.</p>
      </section>

      <section className="practice-section" id="build">
        <div className="reveal">
          <div className="side-line"><span className="side-num">01 · Build</span></div>
          <div className="side-meta">For SMEs<br />Fixed scope<br />2–6 weeks<br />You own the repo</div>
        </div>
        <div>
          <h2 className="reveal">AI-native <em>web builds</em>.</h2>
          <p className="practice-body reveal">From a one-page brief to a production site. Our agent factory designs the surface, our senior engineers refine and instrument it, and we ship through your GitHub to Vercel — usually inside a fortnight.</p>
          <div className="steps">
            <div className="step reveal">
              <span className="step-num">Step 01</span>
              <h3 className="step-title">Brief</h3>
              <div className="step-body">Half-day call, fixed proposal back inside 48 hours.</div>
            </div>
            <div className="step reveal">
              <span className="step-num">Step 02</span>
              <h3 className="step-title">AI draft</h3>
              <div className="step-body">Our agents build the visual + structural draft, reviewed live.</div>
            </div>
            <div className="step reveal">
              <span className="step-num">Step 03</span>
              <h3 className="step-title">Engineer</h3>
              <div className="step-body">Our team ports to Next.js / your stack, hardens, and makes accessible.</div>
            </div>
            <div className="step reveal">
              <span className="step-num">Step 04</span>
              <h3 className="step-title">Ship</h3>
              <div className="step-body">Pushed to your GitHub, deployed to Vercel. Keys are yours.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="practice-section" id="migrate">
        <div className="reveal">
          <div className="side-line"><span className="side-num">02 · Migrate</span></div>
          <div className="side-meta">Niche expertise<br />DNN since 2003<br />UK &amp; EU<br />Zero-downtime cutover</div>
        </div>
        <div>
          <h2 className="reveal">DNN <em>legacy migrations</em>.</h2>
          <p className="practice-body reveal">Almost nobody still understands DNN. We do — fifteen years of it. If your site is trapped on an old DNN install, orphaned by a vanished agency, or recovering from a ransomware event, we can move it onto something modern without losing the content, the URLs, or the search rankings.</p>
          <ul className="bullets reveal">
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
        <div className="reveal">
          <div className="side-line"><span className="side-num">03 · Advise</span></div>
          <div className="side-meta">Advisory<br />Half-day workshops<br />30-day pilots<br />Ongoing retainer</div>
        </div>
        <div>
          <h2 className="reveal">AI <em>pilots &amp; advisory</em>.</h2>
          <p className="practice-body reveal">Most SMEs know AI matters and don't know where to begin. We help you pick the few tools that actually pay back for your business, train your team to use them, and ship a pilot — without the enterprise overhead or the consultant theatre.</p>
          <div className="steps">
            <div className="step reveal">
              <span className="step-num">Format 01</span>
              <h3 className="step-title">Half-day</h3>
              <div className="step-body">A working session, your team and ours. Leave with three things to try on Monday.</div>
            </div>
            <div className="step reveal">
              <span className="step-num">Format 02</span>
              <h3 className="step-title">30-day pilot</h3>
              <div className="step-body">One process picked, one tool deployed, one outcome measured.</div>
            </div>
            <div className="step reveal">
              <span className="step-num">Format 03</span>
              <h3 className="step-title">Retainer</h3>
              <div className="step-body">A monthly call and async support. For owners who want a sparring partner.</div>
            </div>
            <div className="step reveal">
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
