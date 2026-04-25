"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="font-body text-[15px] text-fg-mute">
        You&apos;re on the list. First issue lands in early summer.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 border border-fg-faint bg-transparent px-4 py-3 font-body text-[14px] text-fg placeholder:text-fg-faint focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="border border-fg px-6 py-3 font-body text-[14px] font-medium text-fg transition-colors duration-200 hover:bg-fg hover:text-bg disabled:opacity-50"
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
