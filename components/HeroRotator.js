'use client';

import { useState, useEffect } from 'react';

const ROTATIONS = ['template', 'Wix site', 'WordPress install', 'Squarespace', 'starter kit'];

export default function HeroRotator() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState('in');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer;
    const cycle = () => {
      setPhase('leaving');
      setTimeout(() => {
        setIdx(i => (i + 1) % ROTATIONS.length);
        setPhase('entering');
        requestAnimationFrame(() => requestAnimationFrame(() => setPhase('in')));
      }, 500);
      timer = setTimeout(cycle, 5000);
    };
    timer = setTimeout(cycle, 5000);
    return () => clearTimeout(timer);
  }, []);

  const cls = 'rotator-slot' + (phase === 'in' ? '' : ' ' + phase);
  return (
    <span className="rotator">
      <span className={cls}>{ROTATIONS[idx]}</span>
    </span>
  );
}
