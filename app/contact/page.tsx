import type { Metadata } from "next";
import Banner from "@/components/layout/Banner";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Salaro. We reply within one working day.",
};

export default function ContactPage() {
  return (
    <>
      <Banner h1="Let's talk." subhead="We reply within one working day." height="slim" />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <ContactForm />

          <div className="pt-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-6">Get in touch</p>
            <a href="mailto:hello@salaro.com" className="text-lg font-medium hover:text-[var(--color-accent)] transition-colors block mb-4">
              hello@salaro.com
            </a>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-8">
              We reply within one working day. For urgent work, mention it in the message field.
            </p>
            <p className="text-sm text-[var(--color-muted)]">Woking, Surrey, UK</p>
          </div>
        </div>
      </div>
    </>
  );
}
