export type BannerCopy = {
  eyebrow: string;
  h1: string;
  subhead: string;
  cta?: { label: string; href: string };
};

export const BANNER_COPY: Record<string, BannerCopy> = {
  home: {
    eyebrow: "A web consultancy · Est. 2008",
    h1: "The complex builds, delivered by agent factories and human judgement.",
    subhead:
      "Salaro pairs a multi-agent build system — architect, researcher, developer, reviewer — with a small team of senior engineers, for the work bigger agencies turn down.",
    cta: { label: "Start a conversation", href: "/contact" },
  },
  "services-index": {
    eyebrow: "02 / Services",
    h1: "What we build.",
    subhead: "Five practices, all delivered by the same agent-and-engineer pairing.",
  },
  "ai-development": {
    eyebrow: "03 / Services — AI Development",
    h1: "Practical AI for businesses. From integration to bespoke builds.",
    subhead:
      "Whether the right answer is composing existing tools, integrating AI features into your product, or building something bespoke — we scope to fit, not to a methodology.",
    cta: { label: "Scope a project", href: "/contact" },
  },
  "web-development": {
    eyebrow: "04 / Services — Web Development",
    h1: "Legacy sites, modern stacks.",
    subhead:
      "DNN, EP, and older WordPress builds, replatformed onto Next.js and Vercel — without losing the content, the SEO, or the customers.",
    cta: { label: "Scope a migration", href: "/contact" },
  },
  "wordpress-geo": {
    eyebrow: "05 / Services — WordPress & GeoDirectory",
    h1: "We build directories. Including our own.",
    subhead:
      "We've built and operate Properties.co.uk and AskDroid on GeoDirectory. We bring that operational knowledge — what breaks at 50,000 listings, what the moderation queue actually needs — to client builds.",
    cta: { label: "Scope a directory", href: "/contact" },
  },
  migrations: {
    eyebrow: "06 / Services — Migrations",
    h1: "Off DNN. Off legacy. Onto something modern.",
    subhead:
      "DNN, EP, ageing WordPress, and custom CMSs the original developer walked away from — replatformed onto WordPress or Next.js, without losing the content, the SEO, or the customers.",
    cta: { label: "Scope a migration", href: "/contact" },
  },
  consulting: {
    eyebrow: "07 / Services — Consulting",
    h1: "Two weeks. A written brief. A clear next step.",
    subhead:
      "A fixed-fee scoping sprint that ends in a technical brief and a recommended approach — including legacy stacks like DNN that most agencies won't touch. If we go on to build it, the fee credits against the project.",
    cta: { label: "Book a scoping sprint", href: "/contact" },
  },
  "projects-index": {
    eyebrow: "08 / Projects",
    h1: "Selected work.",
    subhead: "Complex problems, shipped solutions.",
  },
  about: {
    eyebrow: "09 / About",
    h1: "Seventeen years. One small team. A different shape now.",
    subhead:
      "Started in 2008 as a UK web shop with a senior engineering team in India. Run today by a physicist-turned-developer who's seen four web stacks come and go, and rebuilt the agency around the one that's coming next.",
    cta: { label: "Meet the team", href: "/team" },
  },
  team: {
    eyebrow: "10 / Team",
    h1: "The humans behind the agents.",
    subhead:
      "Salar in the UK leading the work. A senior engineering team in India delivering it. An agent factory underneath, doing the volume that used to need ten more pairs of hands.",
    cta: { label: "Start a project", href: "/contact" },
  },
  contact: {
    eyebrow: "11 / Contact",
    h1: "Let's talk.",
    subhead: "We reply within one working day.",
  },
  blog: {
    eyebrow: "12 / Writings",
    h1: "Notes from the workshop.",
    subhead:
      "Posts on agent architectures, modernisation patterns, and what we're learning building Salaro and our directory portfolio. Subscribe below — the first ones land in early summer.",
  },
};
