"use client"

import { Mail, Phone, ArrowRight, Calendar } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-amber-50 to-rose-50 shadow-2xl dark:from-[#070707] dark:via-[#07131a] dark:to-[#0b0710]">
          <div className="absolute -left-20 -top-20 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-[#FFE9D6] to-[#FFD6CC] opacity-40 blur-3xl mix-blend-multiply pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#DDEAFF] to-[#EFD7FF] opacity-30 blur-3xl mix-blend-overlay pointer-events-none" />

          <div className="px-8 py-16">
            <div className="mb-12 max-w-4xl">
              <div className="text-xs uppercase tracking-[0.35em] font-semibold text-rose-600">
                CONNECT · GLOBAL OFFICES
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(280px,320px)_minmax(320px,1fr)_minmax(320px,420px)] items-stretch">
              <div className="flex flex-col rounded-3xl bg-white/90 p-8 shadow-xl dark:bg-slate-950/80">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500">
                    Office locations
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">
                    Premium global hubs.
                  </h3>

                  <div className="mt-8 space-y-6 text-sm text-slate-700 dark:text-slate-300">
                    <div className="rounded-3xl border border-slate-200/75 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/80">
                      <div className="font-medium text-slate-500">Head Office</div>
                      <div className="mt-2 text-base font-semibold text-slate-950 dark:text-white">
                        Woking, UK
                      </div>
                      <div className="mt-2 text-sm leading-snug text-slate-500">
                        A sophisticated, client-facing headquarters for strategic collaboration.
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200/75 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/80">
                      <div className="font-medium text-slate-500">Development Studio</div>
                      <div className="mt-2 text-base font-semibold text-slate-950 dark:text-white">
                        Pondicherry, India
                      </div>
                      <div className="mt-2 text-sm leading-snug text-slate-500">
                        A high-performance engineering location for product delivery and growth.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex-1 overflow-hidden rounded-3xl border border-slate-200 shadow-sm dark:border-slate-800">
                  <iframe
                    src="https://www.google.com/maps?q=Woking,UK&output=embed"
                    className="h-full w-full min-h-[240px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Woking office map"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl dark:bg-[#071018]">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7A2E1C]">
                    How to reach us
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">
                    Reach our team with confidence.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                    We help senior product and engineering teams navigate complex technology decisions with clarity and precision.
                  </p>

                  <div className="mt-8 space-y-4 text-sm text-slate-700 dark:text-slate-300">
                    <div className="flex items-start gap-3 rounded-3xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                      <div className="mt-1 h-10 w-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">Phone</div>
                        <div className="mt-1 text-sm text-slate-500">+44 (0) 1483 870170</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-3xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                      <div className="mt-1 h-10 w-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">Email</div>
                        <div className="mt-1 text-sm text-slate-500">hello@salaro.com</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-3xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                      <div className="mt-1 h-10 w-10 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">Schedule</div>
                        <div className="mt-1 text-sm text-slate-500">Book a call with our leads</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="mailto:hello@salaro.com"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand/30 transition hover:bg-brand-light"
                  >
                    Send an email
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-xl dark:bg-[#071018] dark:border-white/5">
                <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium text-[#6B6B6B]">Name</label>
                      <input name="name" aria-label="Name" className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none" />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#6B6B6B]">Corporate Email</label>
                      <input name="email" type="email" aria-label="Corporate Email" className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#6B6B6B]">Subject</label>
                    <input name="subject" className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none" />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#6B6B6B]">Message</label>
                    <textarea name="message" rows={4} className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none" />
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:items-stretch">
                    <button type="submit" className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-light">
                      SUBMIT ENQUIRY
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button type="button" className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-[#6B6B6B] transition hover:bg-slate-100">
                      Clear
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
