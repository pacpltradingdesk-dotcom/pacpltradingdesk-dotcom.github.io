"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

type Field = "name" | "email" | "phone" | "interest" | "message";

const interests = ["Bio-Bitumen Plant", "Industrial Consulting", "AI Software", "Capital / Fundraising", "Other"];

/**
 * Front-end-only contact form with light validation. Wire `onSubmit`
 * to a real endpoint (Formspree / API route) when backend is ready.
 */
export function ContactForm() {
  const [form, setForm] = useState<Record<Field, string>>({
    name: "",
    email: "",
    phone: "",
    interest: interests[0],
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k: Field, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError("Please share your name and a short message.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    // TODO: POST to API route / Formspree
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass flex flex-col items-center justify-center rounded-3xl p-12 text-center ring-glow"
      >
        <div className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-amber)] text-[var(--color-void)]">
          <Check size={26} />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold">Thank you, {form.name.split(" ")[0]}.</h3>
        <p className="mt-2 max-w-sm text-sm text-[var(--color-muted)]">
          Your enquiry has been captured. Our team will reach out within one business day.
        </p>
      </motion.div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-faint)] focus:border-[var(--color-amber)]";

  return (
    <form onSubmit={submit} className="glass rounded-3xl p-7 sm:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--color-faint)]">Name</label>
          <input className={inputCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your full name" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--color-faint)]">Phone</label>
          <input className={inputCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 ..." />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--color-faint)]">Email</label>
          <input className={inputCls} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@company.com" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--color-faint)]">Interested in</label>
          <select className={inputCls} value={form.interest} onChange={(e) => set("interest", e.target.value)}>
            {interests.map((i) => (
              <option key={i} value={i} className="bg-[var(--color-surface)]">
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--color-faint)]">Message</label>
          <textarea
            className={`${inputCls} min-h-28 resize-none`}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Tell us about your plant, capacity or funding need…"
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-[var(--color-amber)]">{error}</p>}

      <button
        type="submit"
        data-cursor="hover"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-amber)] to-[var(--color-amber-deep)] px-7 py-3.5 text-sm font-medium text-[var(--color-void)] ring-glow transition-transform hover:scale-[1.01]"
      >
        Send Enquiry <ArrowRight size={16} />
      </button>
    </form>
  );
}
