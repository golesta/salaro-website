import Link from "next/link";

const cols = [
  {
    heading: "Services",
    links: [
      { label: "AI Development", href: "/services/ai-development" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "WordPress & GeoDirectory", href: "/services/wordpress-geodirectory" },
      { label: "Migrations", href: "/services/migrations" },
      { label: "Consulting", href: "/services/consulting" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Quantime", href: "https://quantime.uk", external: true },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter */}
        <div className="mb-16 max-w-md">
          <p className="text-sm font-medium mb-3">Stay in the loop</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 text-sm border border-black/20 rounded-lg bg-transparent focus:outline-none focus:border-[var(--color-accent)]"
            />
            <button className="px-4 py-2 text-sm bg-[var(--color-ink)] text-[var(--color-paper)] rounded-lg hover:opacity-80 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-[var(--color-muted)]">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-[var(--color-muted)] border-t border-black/10 pt-6">
          <p>© {new Date().getFullYear()} Salaro Ltd. Registered in England & Wales. Woking, Surrey.</p>
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-ink)] transition-colors">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-ink)] transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
