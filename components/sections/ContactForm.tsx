"use client";

import { useState } from "react";

const projectTypes = [
  "AI Development",
  "Web Development",
  "WordPress & GeoDirectory",
  "Migrations",
  "Consulting",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up server action (Resend + Google Sheet)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-8">
        <p className="text-lg font-semibold mb-2">Message received.</p>
        <p className="text-sm text-fg-mute">We'll be in touch within one working day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium block mb-2" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required className="w-full px-4 py-2.5 text-sm border border-white/20 rounded-lg bg-transparent focus:outline-none focus:border-accent" />
        </div>
        <div>
          <label className="text-sm font-medium block mb-2" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="w-full px-4 py-2.5 text-sm border border-white/20 rounded-lg bg-transparent focus:outline-none focus:border-accent" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium block mb-2" htmlFor="company">Company <span className="text-fg-mute">(optional)</span></label>
        <input id="company" name="company" type="text" className="w-full px-4 py-2.5 text-sm border border-white/20 rounded-lg bg-transparent focus:outline-none focus:border-accent" />
      </div>

      <div>
        <label className="text-sm font-medium block mb-2" htmlFor="projectType">Project type</label>
        <select id="projectType" name="projectType" className="w-full px-4 py-2.5 text-sm border border-white/20 rounded-lg bg-bg-2 text-fg focus:outline-none focus:border-accent">
          <option value="">Select...</option>
          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium block mb-2" htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={5} className="w-full px-4 py-2.5 text-sm border border-white/20 rounded-lg bg-transparent focus:outline-none focus:border-accent resize-none" />
      </div>

      <button type="submit" className="px-6 py-3 text-sm font-medium bg-fg text-bg rounded-lg hover:opacity-80 transition-opacity">
        Send message
      </button>
    </form>
  );
}
