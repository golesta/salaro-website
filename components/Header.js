'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <Link href="/" className="logo">
          Salaro<span className="dot">.</span>
        </Link>
        
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/practice" onClick={() => setMenuOpen(false)}>Practice</Link>
          <Link href="/work" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link href="/studio" onClick={() => setMenuOpen(false)}>Studio</Link>
          <Link href="/writing" onClick={() => setMenuOpen(false)}>Writing</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </header>

      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
}
