"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoMark from "./LogoMark";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/practice", label: "Practice" },
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Salaro home">
        <LogoMark size={22} />
        <span className={styles.logoWord}>Salaro</span>
      </Link>

      {/* Desktop nav */}
      <nav className={`${styles.nav} nav-desktop`} aria-label="Primary">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={isActive(href) ? styles.active : ""}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile toggle */}
      <button
        className={`${styles.mobileToggle} nav-mobile-toggle`}
        onClick={() => setDrawerOpen((v) => !v)}
        aria-expanded={drawerOpen}
        aria-label="Menu"
      >
        Menu
      </button>

      {/* Mobile drawer */}
      {drawerOpen && (
        <nav className={`${styles.drawer} nav-mobile-drawer`} aria-label="Mobile">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={isActive(href) ? styles.drawerActive : styles.drawerLink}
              onClick={() => setDrawerOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
