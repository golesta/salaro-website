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

export default function Writing() {
  return (
    <main>
      <Header />

      <section className="page-hero">
        <div className="eyebrow">Writing · Notes from the studio</div>
        <h1><em>Essays</em> on what we're learning.</h1>
        <p className="lede">Short pieces on AI-native delivery, legacy migration, and what thirty years in the trade looks like in 2026. Mostly for ourselves, occasionally for clients.</p>
      </section>

      <div className="writing-list">
        {essays.map((e) => (
          <article className="essay" key={e.date}>
            <span className="essay-date">{e.date}</span>
            <div className="essay-body">
              <h2><a href="#">{e.italicStart ? <><em>{e.italicStart}</em>{e.title.slice(e.italicStart.length)}</> : e.title}</a></h2>
              <p className="essay-preview">{e.preview}</p>
            </div>
            <span className="essay-meta">{e.meta}</span>
          </article>
        ))}
      </div>

      <div className="writing-aside">
        More notes as the studio writes them. No subscription, no newsletter — yet.
      </div>

      <SiteFooter />
    </main>
  );
}
