// Salaro logo mark — a tiny pictogram of the agent-factory diagram.
// A terracotta dot (the Human Judgment node) sitting above a horizontal line
// (the build conveyor). Conceptually rhymes with the live diagram on the
// homepage hero without restating it.
//
// Renders crisply at 16px (favicon) through 96px (oversize hero use).
//
// Props:
//   size           — pixel height, default 22
//   darkBackground — when true, switches the conveyor stroke to a light
//                    cream so the mark reads on the dark footer.

function LogoMark({ size = 22, darkBackground = false }) {
  const stroke = darkBackground ? 'oklch(0.92 0.02 60)' : 'var(--ink-strong)';
  const dot = 'var(--accent)';
  // viewBox is 22x22; scales freely from there.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Human-judgment dot */}
      <circle cx="11" cy="6" r="2.6" fill={dot} />
      {/* Conveyor */}
      <line
        x1="2" y1="16"
        x2="20" y2="16"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

window.LogoMark = LogoMark;
