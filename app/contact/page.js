"use client";

import { useEffect, useRef, useState } from 'react';
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

export default function Contact() {
  const rootRef = useRef(null);
  useReveal(rootRef);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: new FormData(e.target),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <main ref={rootRef}>
      <Header />

      <section className="page-hero">
        <div className="eyebrow reveal d1">Contact · Start a conversation</div>
        <h1 className="reveal d2">Tell us what you're trying to <em>build</em>.</h1>
        <p className="lede reveal d3">A short note is enough. Tell us roughly what you have in mind, what's already in place, and when you'd like it live. We'll come back inside one working day.</p>
      </section>

      <section className="contact-grid">
        <div className="contact-left reveal">
          <h2>Send a <em>note</em>.</h2>
          {status === 'success' ? (
            <div className="contact-sent">
              <p>Thank you — we'll come back to you inside one working day.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@company.co.uk" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="org">Company</label>
                <input id="org" name="company" type="text" placeholder="Optional" autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="message">What are you trying to build?</label>
                <textarea id="message" name="message" rows={5} placeholder="A line or two is enough. Rough budget &amp; timeline if you have them." required />
              </div>
              {status === 'error' && (
                <p className="form-error">Something went wrong — please try again or email hello@salaro.com directly.</p>
              )}
              <button type="submit" className="form-submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send →'}
              </button>
            </form>
          )}
          <div className="contact-direct">
            Or write directly to <strong>hello@salaro.com</strong>.
          </div>
        </div>

        <div className="contact-right reveal d1">
          <h2>How this <em>goes</em>.</h2>
          <div className="how-steps">
            <div className="how-step reveal">
              <span className="how-step-num">01</span>
              <div>
                <h3>You <em>write</em>.</h3>
                <p>A short note via this form or by email. No NDA needed yet.</p>
              </div>
            </div>
            <div className="how-step reveal">
              <span className="how-step-num">02</span>
              <div>
                <h3>We <em>talk</em>.</h3>
                <p>A 30-minute video call inside the next few days, so we both know if this is a fit.</p>
              </div>
            </div>
            <div className="how-step reveal">
              <span className="how-step-num">03</span>
              <div>
                <h3>We <em>propose</em>.</h3>
                <p>A fixed-price proposal, usually back inside 48 hours of the call.</p>
              </div>
            </div>
            <div className="how-step reveal">
              <span className="how-step-num">04</span>
              <div>
                <h3>We <em>build</em>.</h3>
                <p>Two to six weeks of work, depending on scope. Daily progress visible in your own repo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-honest reveal">
        We work with UK SMEs. We <em>don't</em> take on enterprise projects that need procurement, security reviews and a project manager — that work goes to firms set up for it, and we're happy to refer you.
      </div>

      <SiteFooter />
    </main>
  );
}
