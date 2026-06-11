export default function FeatureMockupCalendar() {
  return (
    <div className="space-y-6">
      <div className="rounded-[1.75rem] bg-[#121212] p-6 text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-3xl bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">Agenda</span>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">Today</span>
        </div>
        <div className="space-y-4">
          {['9:00 AM Strategy call', '11:30 AM Content review', '2:00 PM Launch sync'].map((item) => (
            <div key={item} className="rounded-3xl bg-white/5 p-4 text-sm leading-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[1.75rem] bg-[#111111] p-6 text-slate-200 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        <div className="mb-3 text-sm uppercase tracking-[0.2em] text-brand">Campaign health</div>
        <div className="grid gap-3">
          {['Landing conversion +18%', 'Open rate 62%', 'Bookings +32%'].map((item) => (
            <div key={item} className="rounded-3xl bg-white/5 p-4 text-sm text-slate-300">{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
