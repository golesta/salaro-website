"use client";

import { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import SiteFooter from '../../components/SiteFooter';

const essays = [
  {
    date: '04 May 2026',
    title: 'Why a ten-year-old with a template will eat most agency work.',
    italicWord: 'template',
    preview: 'Wix is good now. WordPress is good now. The bottom of the agency market is already gone. So what is left for the rest of us, and how do we work on it?',
    meta: 'Essay · 8 min',
  },
  {
    date: '18 Apr 2026',
    title: 'DNN in 2026: it\'s still out there, and it still needs help.',
    italicStart: 'DNN in 2026',
    preview: 'A field note on the surprising number of organisations still running DNN — and how to move them off it without losing the search rankings, the historical content, or the institutional memory.',
    meta: 'Field note · 12 min',
  },
  {
    date: '02 Apr 2026',
    title: 'AI for SMEs: a fortnight\'s primer.',
    italicStart: 'AI for SMEs',
    preview: 'If you run a small business and you want to be more honest about AI than the LinkedIn discourse allows, here is a two-week reading list and a small set of tools to try on Monday.',
    meta: 'Primer · 14 min',
  },
  {
    date: '15 Mar 2026',
    title: 'Days, not months: a build diary.',
    italicStart: 'Days, not months',
    preview: 'An unusually detailed account of an AI-native build, from the first call on Monday to a live Vercel deployment on the following Friday. What worked, what didn\'t, where the human had to step in.',
    meta: 'Diary · 18 min',
  },
];

/* Renders a title with its italic accent.
   - italicStart: italicises the opening phrase
   - italicWord:  italicises a single word wherever it appears
   - neither:     plain title */
function renderTitle(e) {
  if (e.italicStart && e.title.startsWith(e.italicStart)) {
    return (
      <>
        <em>{e.italicStart}</em>
        {e.title.slice(e.italicStart.length)}
      </>
    );
  }
  if (e.italicWord) {
    const idx = e.title.indexOf(e.italicWord);
    if (idx !== -1) {
      return (
        <>
          {e.title.slice(0, idx)}
          <em>{e.italicWord}</em>
          {e.title.slice(idx + e.italicWord.length)}
        </>
      );
    }
  }
  return e.title;
}

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

export default function Writing() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main ref={rootRef}>
      <Header />

      <section className="page-hero">
        <div className="eyebrow reveal d1">Writing · Notes from the studio</div>
        <h1 className="reveal d2"><em>Essays</em> on what we're learning.</h1>
        <p className="lede reveal d3">Short pieces on AI-native delivery, legacy migration, and what thirty years in the trade looks like in 2026. Mostly for ourselves, occasionally for clients.</p>
      </section>

      <div className="writing-list">
        {essays.map((e) => (
          <article className="essay reveal" key={e.date}>
            <span className="essay-date">{e.date}</span>
            <div className="essay-body">
              <h2><a href="#">{renderTitle(e)}</a></h2>
              <p className="essay-preview">{e.preview}</p>
            </div>
            <span className="essay-meta">{e.meta}</span>
          </article>
        ))}
      </div>

      <div className="writing-aside reveal">
        More notes as the studio writes them. No subscription, no newsletter — yet.
      </div>

      <SiteFooter />
    </main>
  );
}
