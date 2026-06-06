"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    /*
     * To wire up Formspree:
     * 1. Create a free account at formspree.io
     * 2. Create a new form and copy the form ID
     * 3. Replace YOUR_FORM_ID below with your actual form ID
     */
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.success}>
        <p className={styles.successMsg}>
          <em>Thank you.</em> We&apos;ll come back to you inside one working day.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@company.co.uk" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="org">Company</label>
        <input id="org" name="org" type="text" placeholder="Optional" />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">What are you trying to build?</label>
        <textarea
          id="message"
          name="message"
          placeholder="A line or two is enough. Rough budget &amp; timeline if you have them."
          required
        />
      </div>
      {status === "error" && (
        <p className={styles.errorMsg}>Something went wrong. Please email us directly at hello@salaro.com.</p>
      )}
      <button type="submit" className={styles.submit} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send →"}
      </button>
    </form>
  );
}
