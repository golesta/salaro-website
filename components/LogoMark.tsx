interface LogoMarkProps {
  size?: number;
  darkBackground?: boolean;
}

export default function LogoMark({ size = 22, darkBackground = false }: LogoMarkProps) {
  const stroke = darkBackground ? "oklch(0.92 0.02 60)" : "var(--ink-strong)";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0 }}
      aria-hidden="true"
    >
      <circle cx="11" cy="6" r="2.6" fill="var(--accent)" />
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
