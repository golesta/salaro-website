"use client";

import { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

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

function EntryRow({ lead, subject, detail, meta, action }) {
  return (
    <div className="essay reveal">
      <span className="essay-date">{lead}</span>
      <div>
        <h2>{subject}</h2>
        {detail && <p className="essay-preview">{detail}</p>}
        {action && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
            <span className="sector-type">{action}</span>
          </div>
        )}
      </div>
      {meta && <span className="essay-meta">{meta}</span>}
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
      <section className="page-hero">
        <p className="eyebrow reveal d1">Selected work · 2000 — Now</p>
        <h1 className="reveal d2">
          Thirty years of <em>shipped</em> work.
        </h1>
        <p className="lede reveal d3">
          Most recent client work is under confidentiality and not listed here.
          The archive below is a sample of the kind of work we have done — and,
          increasingly, the kind we now do faster.
        </p>
      </section>

      {/* ── TIER 1 — RECENT ── */}
      <section className="clients">
        <div className="clients-head reveal">
          <span className="eyebrow">Recent · 2026</span>
          <h2>Recent <em>client</em> work</h2>
          <p className="practice-body" style={{ marginTop: '18px', marginBottom: '14px' }}>
            Recent client work is described on a call rather than listed publicly.
            We are happy to walk through two or three relevant examples in conversation.
          </p>
          <span className="side-meta" style={{ display: 'block' }}>Confidential · On Request</span>
        </div>
        <div>
          {recent.map((e) => <EntryRow key={e.subject} {...e} />)}
        </div>
      </section>

      {/* ── TIER 2 — PROPERTIES & OWNED ── */}
      <section className="clients">
        <div className="clients-head reveal">
          <span className="eyebrow">Properties &amp; owned work</span>
          <h2>Properties &amp; <em>owned</em> work</h2>
          <p className="practice-body" style={{ marginTop: '18px', marginBottom: '14px' }}>
            Projects we own or operate, distinct from client work — live ventures,
            in-development products, and our own legacy platform.
          </p>
          <span className="side-meta" style={{ display: 'block' }}>
            Salar practising since 1995 · Salaro Ltd founded 2000 · 25 years of client delivery
          </span>
        </div>
        <div>
          {properties.map((e) => <EntryRow key={e.subject} {...e} />)}
        </div>
      </section>

      {/* ── TIER 3 — CLIENT ARCHIVE ── */}
      <section className="clients">
        <div className="clients-head reveal">
          <span className="eyebrow">Client archive · 2000 — 2015</span>
          <h2>Client <em>archive</em></h2>
          <p className="practice-body" style={{ marginTop: '18px', marginBottom: '14px' }}>
            Earlier engagements, anonymised. These entries are pattern-evidence —
            the shape of the work — rather than current portfolio.
          </p>
          <span className="side-meta" style={{ display: 'block' }}>Anonymised · For shape only</span>
        </div>
        <div>
          {archive.map((e) => <EntryRow key={e.subject} {...e} />)}

          {/* Closing founding line */}
          <div className="essay reveal">
            <span className="essay-date">2000</span>
            <div>
              <h2>Salaro <em>founded</em></h2>
              <p className="essay-preview">The practice begins.</p>
            </div>
            <span className="essay-meta" />
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
