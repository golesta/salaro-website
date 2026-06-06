"use client";

import { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

/* palette key — one warm-tint per card */
const PALETTES = ['p1','p2','p3','p4','p5','p6','p7','p8','p9'];

/* ──────────────────────────────────────────────
   TIER 1 — Recent client work (confidential)
─────────────────────────────────────────────── */
const recent = [
  { lead: '2026', subject: 'A UK manufacturer', detail: 'Public site & product configurator', meta: 'Industrial · SME', action: 'Build' },
  { lead: '2026', subject: 'A regional law firm', detail: 'DNN to Next.js migration', meta: 'Legal · 40 staff', action: 'Migrate' },
  { lead: '2026', subject: 'A professional services firm', detail: 'AI adoption pilot & team training', meta: 'Owner-led', action: 'Advise' },
];

/* ──────────────────────────────────────────────
   TIER 2 — Properties & owned work
─────────────────────────────────────────────── */
const properties = [
  { lead: 'Active', subject: 'Clever Botanics', detail: 'cleverbotanics.com', meta: 'E-Commerce', action: 'Build' },
  { lead: 'Active', subject: 'HBM Partners', detail: 'hbm.salaro.com', meta: 'Finance & Advisory', action: 'Build' },
  { lead: '2026', subject: 'AskDroid', detail: 'askdroid.com', meta: 'AI & Robotics', action: 'In Development' },
  { lead: 'Active', subject: 'Properties.co.uk', detail: 'properties.co.uk', meta: 'Property', action: 'Redevelopment' },
  { lead: 'Active', subject: 'Quantime', detail: 'quantime.uk', meta: 'Research & Publishing', action: 'Writing' },
  { lead: '2000', subject: 'Salaro Legacy', detail: 'salaro.com · 25 years of client delivery', meta: 'Consulting', action: 'Archive' },
];

/* ──────────────────────────────────────────────
   TIER 3 — Client archive (anonymised, for shape only)
─────────────────────────────────────────────── */
const archive = [
  { lead: '2014', subject: 'UK engineering group', detail: 'Multi-brand DNN platform', meta: 'Industrial', action: 'Build & CMS' },
  { lead: '2012', subject: 'London publisher', detail: 'Subscription portal', meta: 'Publishing', action: 'Build' },
  { lead: '2010', subject: 'National charity', detail: 'DNN content platform & intranet', meta: 'Third sector', action: 'Build & CMS' },
  { lead: '2008', subject: 'Specialist insurer', detail: 'Broker extranet', meta: 'Financial services', action: 'Build' },
  { lead: '2006', subject: 'London law firm', detail: 'Public site relaunch', meta: 'Legal', action: 'Build' },
  { lead: '2003', subject: 'Regional retailer', detail: 'First e-commerce site', meta: 'Retail', action: 'Build' },
];

/* Scroll-reveal: adds .reveal-ready to the root and reveals each
   .reveal element as it scrolls in. Falls back to fully visible
   when JS/IO is unavailable or motion is reduced. */
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

function ProjectCard({ lead, subject, detail, meta, action, paletteClass }) {
  return (
    <div className="wk-card reveal">
      {/* image / placeholder */}
      <div className="wk-img-wrap">
        <div className={`wk-placeholder ${paletteClass}`}>
          <span>{subject}</span>
        </div>
        <div className="wk-overlay">
          <span className="wk-overlay-action">{action}</span>
        </div>
      </div>

      {/* meta row */}
      <div className="wk-meta-row">
        <span className="wk-category">{meta}</span>
        <span className="wk-year">{lead}</span>
      </div>
      <p className="wk-title">{detail}</p>
    </div>
  );
}

export default function Work() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main className="works-main" ref={rootRef}>
      <Header />

      {/* ── HERO ── */}
      <section className="wk-hero-split">
        {/* Left — text */}
        <div className="wk-hero-text">
          <p className="eyebrow reveal d1">Selected work · 2000 — Now</p>
          <h1 className="wk-hero-h1 reveal d2">
            Thirty years of <em>shipped</em> work.
          </h1>
          <p className="wk-hero-lede reveal d3">
            Most recent client work is under confidentiality and not listed here.
            The archive below is a sample of the kind of work we have done — and,
            increasingly, the kind we now do faster.
          </p>
        </div>

        {/* Right — animated SVG constellation */}
        <div className="wk-hero-svg-wrap reveal d2" aria-hidden="true">
          <svg className="wk-hero-svg" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* large orbit ring */}
            <circle cx="210" cy="190" r="158" stroke="var(--line-soft)" strokeWidth="0.8" className="svg-ring svg-ring-1" />
            {/* medium orbit ring */}
            <circle cx="210" cy="190" r="108" stroke="var(--line)" strokeWidth="0.6" className="svg-ring svg-ring-2" />
            {/* inner dashed ring */}
            <circle cx="210" cy="190" r="58" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="3 6" className="svg-ring svg-ring-3" />

            {/* centre — the practice */}
            <circle cx="210" cy="190" r="10" stroke="var(--accent)" strokeWidth="0.8" opacity="0.35" className="svg-node svg-node-0" />
            <circle cx="210" cy="190" r="5" fill="var(--accent)" className="svg-node svg-node-0" />

            {/* spoke lines from centre to tier nodes */}
            <line x1="210" y1="180" x2="210" y2="38" stroke="var(--line-soft)" strokeWidth="0.5" strokeDasharray="3 4" className="svg-spoke svg-spoke-1" />
            <line x1="217" y1="196" x2="343" y2="268" stroke="var(--line-soft)" strokeWidth="0.5" strokeDasharray="3 4" className="svg-spoke svg-spoke-2" />
            <line x1="203" y1="196" x2="77" y2="268" stroke="var(--line-soft)" strokeWidth="0.5" strokeDasharray="3 4" className="svg-spoke svg-spoke-3" />

            {/* tier node — top: Recent */}
            <circle cx="210" cy="32" r="5" fill="var(--accent)" opacity="0.85" className="svg-node svg-node-1" />
            <text x="210" y="20" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.18em" fill="var(--ink-faint)" className="svg-node svg-node-1" style={{textTransform:'uppercase'}}>Recent</text>

            {/* tier node — bottom-right: Properties */}
            <circle cx="347" cy="270" r="5" fill="var(--accent-ink)" opacity="0.7" className="svg-node svg-node-2" />
            <text x="356" y="274" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.18em" fill="var(--ink-faint)" className="svg-node svg-node-2" style={{textTransform:'uppercase'}}>Properties</text>

            {/* tier node — bottom-left: Archive */}
            <circle cx="73" cy="270" r="5" fill="var(--ink-soft)" opacity="0.6" className="svg-node svg-node-3" />
            <text x="65" y="274" textAnchor="end" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.18em" fill="var(--ink-faint)" className="svg-node svg-node-3" style={{textTransform:'uppercase'}}>Archive</text>

            {/* medium-ring tick dots + year labels */}
            <circle cx="210" cy="82" r="3" fill="var(--ink-faint)" opacity="0.45" className="svg-tick svg-tick-1" />
            <text x="220" y="86" fontFamily="var(--font-mono)" fontSize="8" fill="var(--ink-faint)" opacity="0.55" className="svg-tick svg-tick-1">2026</text>

            <circle cx="318" cy="190" r="3" fill="var(--ink-faint)" opacity="0.45" className="svg-tick svg-tick-2" />
            <text x="324" y="194" fontFamily="var(--font-mono)" fontSize="8" fill="var(--ink-faint)" opacity="0.55" className="svg-tick svg-tick-2">Active</text>

            <circle cx="102" cy="190" r="3" fill="var(--ink-faint)" opacity="0.45" className="svg-tick svg-tick-3" />
            <text x="96" y="194" textAnchor="end" fontFamily="var(--font-mono)" fontSize="8" fill="var(--ink-faint)" opacity="0.55" className="svg-tick svg-tick-3">2000</text>

            {/* centre stat badge — 25 years */}
            <rect x="162" y="158" width="96" height="64" rx="2" fill="var(--bg-warm)" stroke="var(--line)" strokeWidth="0.7" className="svg-badge" />
            <text x="210" y="183" textAnchor="middle" fontFamily="var(--font-display)" fontSize="28" fontWeight="400" fill="var(--ink-strong)" className="svg-badge">25</text>
            <text x="210" y="201" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.16em" fill="var(--ink-faint)" className="svg-badge" style={{textTransform:'uppercase'}}>years</text>

          </svg>
        </div>
      </section>

      {/* ── TIER 1 — RECENT ── */}
      <section className="wk-section">
        <div className="wk-layout">
          <div className="wk-left reveal">
            <span className="eyebrow">Recent · 2026</span>
            <h2 className="wk-heading">Recent <em>client</em> work</h2>
            <p className="wk-lede">
              Recent client work is described on a call rather than listed publicly.
              We are happy to walk through two or three relevant examples in conversation.
            </p>
            <span className="wk-note">Confidential · On Request</span>
          </div>
          <div className="wk-grid">
            {recent.map((e, i) => (
              <ProjectCard key={e.subject} {...e} paletteClass={PALETTES[i % PALETTES.length]} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TIER 2 — PROPERTIES & OWNED ── */}
      <section className="wk-section">
        <div className="wk-layout">
          <div className="wk-left reveal">
            <span className="eyebrow">Properties &amp; owned work</span>
            <h2 className="wk-heading">Properties &amp; <em>owned</em> work</h2>
            <p className="wk-lede">
              Projects we own or operate, distinct from client work — live ventures,
              in-development products, and our own legacy platform.
            </p>
            <span className="wk-note">Salar practising since 1995 · Salaro Ltd founded 2000 · 25 years of client delivery</span>
          </div>
          <div className="wk-grid">
            {properties.map((e, i) => (
              <ProjectCard key={e.subject} {...e} paletteClass={PALETTES[(i + 3) % PALETTES.length]} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TIER 3 — CLIENT ARCHIVE ── */}
      <section className="wk-section">
        <div className="wk-layout">
          <div className="wk-left reveal">
            <span className="eyebrow">Client archive · 2000 — 2015</span>
            <h2 className="wk-heading">Client <em>archive</em></h2>
            <p className="wk-lede">
              Earlier engagements, anonymised. These entries are pattern-evidence —
              the shape of the work — rather than current portfolio.
            </p>
            <span className="wk-note">Anonymised · For shape only</span>
          </div>
          <div className="wk-grid">
            {archive.map((e, i) => (
              <ProjectCard key={e.subject} {...e} paletteClass={PALETTES[(i + 6) % PALETTES.length]} />
            ))}
            {/* Closing founding entry */}
            <div className="wk-card reveal">
              <div className="wk-img-wrap">
                <div className="wk-placeholder p9">
                  <span>Salaro</span>
                </div>
              </div>
              <div className="wk-meta-row">
                <span className="wk-category">Consulting</span>
                <span className="wk-year">2000</span>
              </div>
              <p className="wk-title">Salaro <em>founded</em> — the practice begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div className="reveal">
            <span className="eyebrow">Let&rsquo;s talk</span>
            <h2>If you want to create meaningful <em>change</em>, we&rsquo;ll have common ground.</h2>
          </div>
          <div className="cta-band-actions reveal d1">
            <a className="btn-light" href="/contact">Start a conversation</a>
            <a className="cta-phone" href="/contact">Or walk through two or three relevant examples on a call &rarr;</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
