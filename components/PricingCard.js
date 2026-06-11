export default function PricingCard({ plan, isAnnual, highlighted = false }) {
  const price = isAnnual ? plan.annual : plan.monthly
  const label = isAnnual ? 'billed annually' : 'per month'
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border p-8 shadow-xl transition duration-300 ${
        highlighted
          ? 'border-brand/30 bg-[#151212] text-white shadow-[0_20px_80px_rgba(153,60,37,0.18)] pulse-glow'
          : 'border-white/10 bg-white/5 text-slate-100'
      }`}
    >
      {highlighted && (
        <span className="mb-6 inline-flex rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
          Most popular
        </span>
      )}
      <h4 className="text-lg font-semibold uppercase tracking-[0.22em] text-white/80">{plan.name}</h4>
      <p className="mt-3 max-w-[20ch] text-sm leading-6 text-slate-300">{plan.description}</p>
      <div className="mt-8 flex items-end gap-3">
        <span className="text-5xl font-semibold text-white">{price}</span>
        <span className="text-sm text-slate-400">{label}</span>
      </div>
      <div className="mt-8 space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm text-slate-300">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand/10 text-brand">✓</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className={`mt-10 inline-flex w-full items-center justify-center rounded-2xl px-5 py-4 text-sm font-semibold transition ${
          highlighted
            ? 'bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-light'
            : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
        }`}
      >
        Choose plan
      </button>
    </div>
  )
}
