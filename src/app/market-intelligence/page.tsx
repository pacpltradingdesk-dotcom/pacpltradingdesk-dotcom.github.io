import type { Metadata } from "next";
import { Leaf } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { CTASection } from "@/components/page/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LineChart, Candlestick } from "@/components/visual/Charts";
import { FAQ } from "@/components/page/FAQ";
import { NoiseOverlay } from "@/components/visual/Backdrop";
import { marketOpportunity, impact, statesCovered, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Market Intelligence",
  description:
    "Bio-bitumen market opportunity for 2026 - India's import gap, NHAI mandates, MNRE subsidies, environmental impact and the pan-India network behind YUGA.",
};

export default function MarketIntelligencePage() {
  return (
    <>
      <NoiseOverlay />
      <PageHero
        eyebrow="Market Intelligence"
        title="The Bio-Bitumen Opportunity, Quantified"
        intro="India became the first country to commercially produce bio-bitumen in January 2026. The market it created is one of the largest sustainable-infrastructure opportunities of the decade."
        accent="cyan"
        image="miHero"
      />

      {/* Opportunity grid */}
      <section className="py-[var(--space-section)]">
        <div className="maxw container-x">
          <SectionHeading eyebrow="The Numbers" title="Why the timing is now." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marketOpportunity.map((m, i) => (
              <Reveal key={m.label} index={i % 3}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-[var(--color-line)] p-8 transition-colors hover:bg-[var(--color-surface)]">
                  <div className="font-display text-[clamp(2.4rem,4vw,3.4rem)] font-bold leading-none tracking-tight text-gradient">
                    {m.stat}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Charts band */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-surface)] py-[var(--space-section)]">
        <div className="maxw container-x grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-faint)]">Import substitution</span>
                <span className="text-xs text-[var(--color-amber)]">₹25,000 Cr/yr</span>
              </div>
              <LineChart seed={31} accent="amber" height={200} className="h-52 w-full" />
            </div>
          </Reveal>
          <Reveal index={1}>
            <div className="glass rounded-3xl p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-faint)]">Bitumen price action</span>
                <span className="text-xs text-[var(--color-cyan)]">VG-30 · live model</span>
              </div>
              <Candlestick seed={44} height={200} className="h-52 w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact */}
      <section className="py-[var(--space-section)]">
        <div className="maxw container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow="Environmental & Social Impact" title="Every plant pays a dividend to the land." />
          <div className="grid gap-3">
            {impact.map((it, i) => (
              <Reveal key={it} index={Math.min(i, 3)}>
                <div className="flex items-start gap-3 rounded-2xl border border-[var(--color-line)] p-5">
                  <Leaf size={17} className="mt-0.5 shrink-0 text-[var(--color-amber)]" />
                  <span className="text-sm text-[var(--color-muted)]">{it}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* States covered */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-[var(--space-section)]">
        <div className="maxw container-x">
          <SectionHeading
            eyebrow="Network"
            title="18 states. 150,000 contacts. Market access from day one."
            align="center"
          />
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {statesCovered.map((s, i) => (
              <Reveal key={s} index={Math.min(i % 6, 3)}>
                <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-amber)] hover:text-[var(--color-ink)]">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[var(--space-section)]">
        <div className="maxw container-x">
          <SectionHeading eyebrow="FAQ" title="Questions investors actually ask." />
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Move before the other 200 plants do."
        sub="130-216 bio-bitumen plants are needed in 5-7 years. Position early."
      />
    </>
  );
}
