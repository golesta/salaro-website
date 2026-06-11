import { marqueePhrases } from '../lib/siteContent'

export default function MarqueeStrip() {
  const repeat = [...marqueePhrases, ...marqueePhrases]
  return (
    <div className="overflow-hidden border-t border-b border-brand/10 bg-brand/5 py-8 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6">
        <div className="flex w-[200%] animate-marquee items-center gap-8 whitespace-nowrap text-sm uppercase tracking-[0.24em] text-[#6B6B6B] transition-colors duration-300 dark:text-slate-400">
          {repeat.map((phrase, index) => (
            <span key={`${phrase}-${index}`} className="inline-flex items-center gap-3">
              {phrase}
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
          ))}
        </div>
        <div className="flex w-[200%] animate-marquee2 items-center gap-8 whitespace-nowrap text-sm uppercase tracking-[0.24em] text-[#6B6B6B] transition-colors duration-300 dark:text-slate-400">
          {repeat.map((phrase, index) => (
            <span key={`${phrase}-alt-${index}`} className="inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
