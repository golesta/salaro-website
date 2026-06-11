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
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
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

      {/* ── HERO ── */}
      <section className="pg-hero">
        <div className="pg-hero-inner">
          <div className="pg-hero-left">
            <div className="pg-eyebrow reveal d1">Practice · 2026</div>
            <h1 className="pg-h1 reveal d2">
              Three lines<br />of work.<br /><em>Done properly.</em>
            </h1>
          </div>
          <div className="pg-hero-right">
            <p className="pg-lede reveal d3">
              We are small on purpose. Three things we do well, three we leave to others.
              Each can be scoped tightly and shipped through your own GitHub and Vercel.
            </p>
            <nav className="pg-jumpnav reveal d4" aria-label="Jump to practice area">
              <a href="#build"><span className="pg-dot" aria-hidden="true"></span>Build</a>
              <a href="#migrate"><span className="pg-dot" aria-hidden="true"></span>Migrate</a>
              <a href="#advise"><span className="pg-dot" aria-hidden="true"></span>Advise</a>
            </nav>
          </div>
        </div>
      </section>

      {/* ── 01 BUILD ── */}
      <article className="ps" id="build">
        <div className="ps-inner">
          <div className="ps-topbar reveal">
            <div className="ps-label"><span className="ps-labelnum">01</span>Build</div>
            <div className="ps-pills" aria-label="Quick facts">
              <span className="ps-pill">For SMEs</span>
              <span className="ps-pill">Fixed scope</span>
              <span className="ps-pill">2–6 weeks</span>
              <span className="ps-pill">You own the repo</span>
            </div>
          </div>
          <div className="ps-body">
            <div className="ps-left">
              <div className="ps-ghostnum reveal" aria-hidden="true">01</div>
              <h2 className="ps-h2 reveal">AI-native <em>web builds.</em></h2>
            </div>
            <div className="ps-right">
              <p className="ps-lede reveal">
                From a one-page brief to a production site. Our agent factory designs the
                surface, our senior engineers refine and instrument it, and we ship through
                your GitHub to Vercel — usually inside a fortnight.
              </p>
              <div className="ps-grid">
                <div className="ps-card reveal" style={{ '--d': '0s' }}>
                  <span className="ps-cardnum">Step 01</span>
                  <h3 className="ps-cardtitle">Brief</h3>
                  <p className="ps-cardbody">Half-day call, fixed proposal back inside 48 hours.</p>
                  <span className="ps-cardline" aria-hidden="true"></span>
                </div>
                <div className="ps-card reveal" style={{ '--d': '0.07s' }}>
                  <span className="ps-cardnum">Step 02</span>
                  <h3 className="ps-cardtitle">AI draft</h3>
                  <p className="ps-cardbody">Our agents build the visual + structural draft, reviewed live.</p>
                  <span className="ps-cardline" aria-hidden="true"></span>
                </div>
                <div className="ps-card reveal" style={{ '--d': '0.14s' }}>
                  <span className="ps-cardnum">Step 03</span>
                  <h3 className="ps-cardtitle">Engineer</h3>
                  <p className="ps-cardbody">Our team ports to Next.js / your stack, hardens, and makes accessible.</p>
                  <span className="ps-cardline" aria-hidden="true"></span>
                </div>
                <div className="ps-card reveal" style={{ '--d': '0.21s' }}>
                  <span className="ps-cardnum">Step 04</span>
                  <h3 className="ps-cardtitle">Ship</h3>
                  <p className="ps-cardbody">Pushed to your GitHub, deployed to Vercel. Keys are yours.</p>
                  <span className="ps-cardline" aria-hidden="true"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ── 02 MIGRATE ── */}
      <article className="ps ps--warm" id="migrate">
        <div className="ps-inner">
          <div className="ps-topbar reveal">
            <div className="ps-label"><span className="ps-labelnum">02</span>Migrate</div>
            <div className="ps-pills" aria-label="Quick facts">
              <span className="ps-pill">Niche expertise</span>
              <span className="ps-pill">DNN since 2003</span>
              <span className="ps-pill">UK &amp; EU</span>
              <span className="ps-pill">Zero-downtime cutover</span>
            </div>
          </div>
          <div className="ps-body">
            <div className="ps-left">
              <div className="ps-ghostnum reveal" aria-hidden="true">02</div>
              <h2 className="ps-h2 reveal">DNN <em>legacy migrations.</em></h2>
            </div>
            <div className="ps-right">
              <p className="ps-lede reveal">
                Almost nobody still understands DNN. We do — fifteen years of it. If your
                site is trapped on an old DNN install, orphaned by a vanished agency, or
                recovering from a ransomware event, we can move it onto something modern
                without losing the content, the URLs, or the search rankings.
              </p>
              <ul className="ps-bullets">
                <li className="reveal" style={{ '--d': '0s' }}>Audit of the existing DNN install, modules and skinning</li>
                <li className="reveal" style={{ '--d': '0.07s' }}>Content extraction with structure preserved</li>
                <li className="reveal" style={{ '--d': '0.14s' }}>URL mapping so SEO survives the move</li>
                <li className="reveal" style={{ '--d': '0.21s' }}>Re-platform to Next.js, WordPress, or modern DNN</li>
                <li className="reveal" style={{ '--d': '0.28s' }}>Asset and media migration</li>
                <li className="reveal" style={{ '--d': '0.35s' }}>Ransomware-recovered installs welcome</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* ── 03 ADVISE ── */}
      <article className="ps" id="advise">
        <div className="ps-inner">
          <div className="ps-topbar reveal">
            <div className="ps-label"><span className="ps-labelnum">03</span>Advise</div>
            <div className="ps-pills" aria-label="Quick facts">
              <span className="ps-pill">Advisory</span>
              <span className="ps-pill">Half-day workshops</span>
              <span className="ps-pill">30-day pilots</span>
              <span className="ps-pill">Ongoing retainer</span>
            </div>
          </div>
          <div className="ps-body">
            <div className="ps-left">
              <div className="ps-ghostnum reveal" aria-hidden="true">03</div>
              <h2 className="ps-h2 reveal">AI <em>pilots &amp; advisory.</em></h2>
            </div>
            <div className="ps-right">
              <p className="ps-lede reveal">
                Most SMEs know AI matters and don&apos;t know where to begin. We help you pick
                the few tools that actually pay back for your business, train your team to use
                them, and ship a pilot — without the enterprise overhead or the consultant theatre.
              </p>
              <div className="ps-grid">
                <div className="ps-card reveal" style={{ '--d': '0s' }}>
                  <span className="ps-cardnum">Format 01</span>
                  <h3 className="ps-cardtitle">Half-day</h3>
                  <p className="ps-cardbody">A working session, your team and ours. Leave with three things to try on Monday.</p>
                  <span className="ps-cardline" aria-hidden="true"></span>
                </div>
                <div className="ps-card reveal" style={{ '--d': '0.07s' }}>
                  <span className="ps-cardnum">Format 02</span>
                  <h3 className="ps-cardtitle">30-day pilot</h3>
                  <p className="ps-cardbody">One process picked, one tool deployed, one outcome measured.</p>
                  <span className="ps-cardline" aria-hidden="true"></span>
                </div>
                <div className="ps-card reveal" style={{ '--d': '0.14s' }}>
                  <span className="ps-cardnum">Format 03</span>
                  <h3 className="ps-cardtitle">Retainer</h3>
                  <p className="ps-cardbody">A monthly call and async support. For owners who want a sparring partner.</p>
                  <span className="ps-cardline" aria-hidden="true"></span>
                </div>
                <div className="ps-card reveal" style={{ '--d': '0.21s' }}>
                  <span className="ps-cardnum">Format 04</span>
                  <h3 className="ps-cardtitle">Build &amp; advise</h3>
                  <p className="ps-cardbody">Pair our build line with the advisory work, on one engagement.</p>
                  <span className="ps-cardline" aria-hidden="true"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
