export default function FeatureMockupReferral() {
  return (
    <div className="space-y-6">
      <div className="rounded-[1.75rem] bg-[#121212] p-6 text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-3xl bg-brand/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand">Referral hub</span>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Active</span>
        </div>
        <div className="grid gap-3">
          {['35% conversion from referrals', '4 new partners added', 'Brand loyalty boost'].map((item) => (
            <div key={item} className="rounded-3xl bg-white/5 p-4 text-sm text-slate-300">{item}</div>
          ))}
        </div>
      </div>
      <div className="rounded-[1.75rem] bg-[#111111] p-6 text-slate-200 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        <p className="text-sm uppercase tracking-[0.2em] text-brand">Referral status</p>
        <p className="mt-4 text-sm leading-7 text-slate-300">Connections, rewards, and conversion performance kept on-brand in one place.</p>
      </div>
    </div>
  )
}
