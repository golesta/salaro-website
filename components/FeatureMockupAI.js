export default function FeatureMockupAI() {
  return (
    <div className="space-y-6">
      <div className="rounded-[1.75rem] bg-[#121212] p-6 text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-3xl bg-brand/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand">AI builder</span>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Instant</span>
        </div>
        <div className="rounded-3xl bg-white/5 p-5 text-sm text-slate-300">
          <p>Generate polished launch copy, email flows, and page text from your brand prompts in seconds.</p>
        </div>
      </div>
      <div className="rounded-[1.75rem] bg-[#111111] p-6 text-slate-200 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        <p className="text-sm uppercase tracking-[0.2em] text-brand">Recent output</p>
        <div className="mt-5 space-y-3 rounded-3xl bg-white/5 p-4 text-sm text-slate-300">
          <p>Landing page teaser copy written in your voice.</p>
          <p>Sequence subject lines optimised for higher opens.</p>
          <p>Appointment confirmation messages with brand warmth.</p>
        </div>
      </div>
    </div>
  )
}
