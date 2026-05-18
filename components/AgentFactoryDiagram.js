'use client';

import { useState, useEffect, useRef } from 'react';

const ROLES = [
  { id: 'architect',  label: 'Architect',  x: 0.10 },
  { id: 'researcher', label: 'Researcher', x: 0.30 },
  { id: 'developer',  label: 'Developer',  x: 0.52 },
  { id: 'reviewer',   label: 'Reviewer',   x: 0.74 },
  { id: 'shipped',    label: 'Shipped',    x: 0.94 },
];

export default function AgentFactoryDiagram({ width = 1200, height = 400 }) {
  const [tokens, setTokens] = useState([]);
  const [pulse, setPulse] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf;
    let last = performance.now();
    let lastSpawn = 0;
    let lastPulse = 0;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      setTokens(prev => {
        const next = prev
          .map(t => ({ ...t, x: t.x + t.speed * dt }))
          .filter(t => t.x < 1.02);
        if (now - lastSpawn > 1100) {
          lastSpawn = now;
          next.push({
            id: idRef.current++,
            x: 0.04,
            y: 0.5 + (Math.random() - 0.5) * 0.05,
            speed: 0.07 + Math.random() * 0.03,
            kind: Math.random() < 0.18 ? 'flagged' : 'normal',
          });
        }
        return next;
      });

      if (now - lastPulse > 4200) {
        lastPulse = now;
        setPulse(true);
        setTimeout(() => setPulse(false), 900);
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const yMid = height * 0.62;
  const yHuman = height * 0.18;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <line x1={width * 0.04} y1={yMid} x2={width * 0.96} y2={yMid} stroke="var(--line)" strokeWidth="0.8" />

      {Array.from({ length: 60 }).map((_, i) => {
        const x = width * 0.04 + (i / 59) * width * 0.92;
        return <line key={i} x1={x} y1={yMid - 4} x2={x} y2={yMid + 4} stroke="var(--line-soft)" strokeWidth="0.5" />;
      })}

      {ROLES.map((r, i) => {
        const x = r.x * width;
        const isShipped = r.id === 'shipped';
        return (
          <g key={r.id}>
            <circle cx={x} cy={yMid} r={isShipped ? 9 : 6} fill={isShipped ? 'var(--accent)' : 'var(--bg)'} stroke={isShipped ? 'var(--accent)' : 'var(--ink-strong)'} strokeWidth="1.2" />
            {isShipped && <circle cx={x} cy={yMid} r={18} fill="var(--accent)" opacity="0.12" />}
            <text x={x} y={yMid + 32} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2" fill="var(--ink-faint)" style={{ textTransform: 'uppercase' }}>
              {String(i + 1).padStart(2, '0')}
            </text>
            <text x={x} y={yMid + 50} textAnchor="middle" fontFamily="var(--font-body)" fontSize="13" fill="var(--ink-strong)" fontWeight="500">
              {r.label}
            </text>
          </g>
        );
      })}

      <g>
        <line
          x1={width * 0.5} y1={yHuman + 14}
          x2={width * 0.5} y2={yMid - 8}
          stroke="var(--ink-strong)" strokeWidth="0.6" strokeDasharray="3 4"
          opacity={pulse ? 0.9 : 0.35}
          style={{ transition: 'opacity 0.4s' }}
        />
        <circle cx={width * 0.5} cy={yHuman} r="10" fill="var(--bg)" stroke="var(--ink-strong)" strokeWidth="1.4" />
        {pulse && <circle cx={width * 0.5} cy={yHuman} r="22" fill="var(--ink-strong)" opacity="0.08" />}
        <text x={width * 0.5} y={yHuman - 22} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2" fill="var(--ink-faint)" style={{ textTransform: 'uppercase' }}>
          Human Judgment
        </text>
      </g>

      {tokens.map(t => {
        const x = (0.04 + t.x * 0.92) * width;
        const y = yMid + (t.y - 0.5) * 12;
        const isFlagged = t.kind === 'flagged';
        return (
          <g key={t.id}>
            <circle cx={x} cy={y} r="3" fill={isFlagged ? 'var(--accent)' : 'var(--ink-strong)'} />
            {isFlagged && <circle cx={x} cy={y} r="9" fill="var(--accent)" opacity="0.18" />}
          </g>
        );
      })}

      <text x={width * 0.04} y={height - 12} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2.4" fill="var(--ink-faint)" style={{ textTransform: 'uppercase' }}>
        Build pipeline · live
      </text>
      <text x={width * 0.96} y={height - 12} textAnchor="end" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2.4" fill="var(--ink-faint)" style={{ textTransform: 'uppercase' }}>
        v1 · 30 yrs of practice
      </text>
    </svg>
  );
}
