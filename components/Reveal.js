'use client';

import { useState, useEffect, useRef } from 'react';

export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={'reveal' + (shown ? ' in' : '')} style={{ transitionDelay: delay + 'ms' }}>
      {children}
    </div>
  );
}
