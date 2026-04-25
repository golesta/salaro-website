"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "AI Development", href: "/services/ai-development" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "WordPress & GeoDirectory", href: "/services/wordpress-geodirectory" },
  { label: "Migrations", href: "/services/migrations" },
  { label: "Consulting", href: "/services/consulting" },
];

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-fg" : "text-fg";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-bg/90 shadow-sm shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`font-semibold text-lg tracking-tight ${textColor} transition-colors duration-300`}>
          Salaro
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div key="services" className="relative">
                <button
                  className={`flex items-center gap-1 text-sm hover:text-[var(--color-accent)] transition-colors ${textColor}`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  Services <ChevronDown size={14} />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="bg-bg-2 border border-white/10 rounded-lg shadow-lg shadow-black/40 py-2 w-56">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2 text-sm text-fg hover:bg-white/5 transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm hover:text-accent transition-colors ${textColor}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 ${textColor} transition-colors duration-300`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-2 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fg"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pl-4 flex flex-col gap-3 border-l border-white/10">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm text-fg-mute"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
