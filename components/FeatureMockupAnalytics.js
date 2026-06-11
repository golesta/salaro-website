export default function FeatureMockupAnalytics() {
  return (
    <div className="space-y-6">
      <div className="rounded-[1.75rem] bg-[#121212] p-6 text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-3xl bg-brand/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand">Analytics</span>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Live</span>
        </div>
        <div className="grid gap-3">
          <div className="rounded-3xl bg-white/5 p-4">
            <p className="text-sm text-slate-300">Traffic trend</p>
            <p className="mt-2 text-2xl font-semibold text-white">+32%</p>
          </div>
          <div className="rounded-3xl bg-white/5 p-4">
            <p className="text-sm text-slate-300">Booked calls</p>
            <p className="mt-2 text-2xl font-semibold text-white">45</p>
          </div>
        </div>
      </div>
      <div className="rounded-[1.75rem] bg-[#111111] p-6 text-slate-200 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        <p className="text-sm uppercase tracking-[0.2em] text-brand">Engagement map</p>
        <div className="mt-5 grid gap-3">
          {['Video watch time +21%', 'Email click rate +14%', 'Social traffic +29%'].map((item) => (
            <div key={item} className="rounded-3xl bg-white/5 p-4 text-sm text-slate-300">{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
