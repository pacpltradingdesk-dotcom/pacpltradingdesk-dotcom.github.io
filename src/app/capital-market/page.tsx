import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { CTASection } from "@/components/page/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Marquee } from "@/components/ui/Marquee";
import { Candlestick } from "@/components/visual/Charts";
import { NoiseOverlay } from "@/components/visual/Backdrop";
import { fundStages, loans, finPrep } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capital Markets & Fundraising",
  description:
    "From seed to IPO - fundraising, valuation, bank DPRs, subsidies and financial preparation, backed by first-hand BSE listing experience.",
};

const ticker = [
  "NIFTY 22,478 ▲0.6%", "BANKNIFTY 48,120 ▲0.8%", "BRENT $82.4 ▼0.3%",
  "USD-INR 83.2", "VG-30 ₹48,250", "FII +1,240 Cr", "DII +890 Cr",
];

export default function CapitalMarketPage() {
  return (
    <>
      <NoiseOverlay />
      <PageHero
        eyebrow="Vertical C · Capital Markets"
        title="From First Seed Cheque to Public Listing"
        intro="Full-spectrum fundraising and finance advisory - backed by a real, first-hand BSE IPO (Omnipotent Industries, 2020, fully subscribed)."
        accent="amber"
        image="capHero"
      />

      {/* Ticker */}
      <div className="border-y border-[var(--color-line)] bg-[var(--color-surface)] py-3">
        <Marquee duration={26} className="text-sm font-display tracking-wide text-[var(--color-muted)]">
          {ticker.map((t) => (
            <span key={t} className="px-6">
              {t}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Terminal + stages */}
      <section className="py-[var(--space-section)]">
        <div className="maxw container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="glass overflow-hidden rounded-[2rem] p-8 ring-glow">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-faint)]">
                  Market Research Terminal
                </span>
                <Badge accent="cyan">Live</Badge>
              </div>
              <Candlestick seed={14} height={220} className="h-56 w-full" />
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[var(--color-line)] pt-6 text-center">
                {[["Pre-market", "8:45 AM"], ["Closing", "4:00 PM"], ["Coverage", "FII/DII"]].map(([a, b]) => (
                  <div key={a}>
                    <div className="font-display text-lg font-semibold text-gradient-warm">{b}</div>
                    <div className="text-xs text-[var(--color-faint)]">{a}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow="Fundraising · Every Stage" title="Capital, matched to your moment." />
            <div className="mt-8 grid gap-4">
              {fundStages.map((s, i) => (
                <Reveal key={s.t} index={i}>
                  <div className="rounded-2xl border border-[var(--color-line)] p-5 transition-colors hover:bg-[var(--color-surface)]">
                    <h3 className="font-display text-lg font-semibold">{s.t}</h3>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loans table */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-surface)] py-[var(--space-section)]">
        <div className="maxw container-x">
          <SectionHeading
            eyebrow="Debt & Government Funding"
            title="Bankable from day one."
            intro="We prepare DPR + CMA data in bank format to maximise approval across these schemes."
          />
          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[640px] overflow-hidden rounded-3xl border border-[var(--color-line)]">
              <div className="grid grid-cols-4 bg-[var(--color-raised)] px-6 py-4 text-xs uppercase tracking-wider text-[var(--color-faint)]">
                <span>Scheme</span>
                <span>Interest</span>
                <span>Max Loan</span>
                <span>Collateral</span>
              </div>
              {loans.map((l) => (
                <div
                  key={l.scheme}
                  className="grid grid-cols-4 items-center border-t border-[var(--color-line)] px-6 py-4 text-sm transition-colors hover:bg-[var(--color-raised)]/50"
                >
                  <span className="font-medium">{l.scheme}</span>
                  <span className="text-[var(--color-cyan)]">{l.rate}</span>
                  <span className="text-gradient-warm font-display font-medium">{l.max}</span>
                  <span className="text-[var(--color-muted)]">{l.collateral}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial prep */}
      <section className="py-[var(--space-section)]">
        <div className="maxw container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow="Valuation & Financial Prep"
            title="Investor & bank-ready, end to end."
          />
          <GlowCard className="h-full">
            <ul className="grid gap-4 p-8 sm:grid-cols-2">
              {finPrep.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                  <Check size={15} className="mt-0.5 shrink-0 text-[var(--color-amber)]" />
                  {f}
                </li>
              ))}
            </ul>
          </GlowCard>
        </div>
        <div className="maxw container-x mt-8">
          <p className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 text-xs leading-relaxed text-[var(--color-faint)]">
            Compliance note: paid trading advice/signals in India require SEBI (Research Analyst / Investment
            Adviser) registration. Until registered, these are presented as research &amp; tools, not advisory.
          </p>
        </div>
      </section>

      <CTASection
        title="Raise capital with someone who's done it."
        sub="Seed to IPO - valuation, documents and the room to pitch in."
      />
    </>
  );
}
