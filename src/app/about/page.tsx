import type { Metadata } from "next";
import { BadgeCheck, Globe } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { CTASection } from "@/components/page/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { ProcessTimeline } from "@/components/visual/ProcessTimeline";
import { NoiseOverlay } from "@/components/visual/Backdrop";
import { company, career, partnerships, keyFacts } from "@/lib/site";

export const metadata: Metadata = {
  title: "About YUGA",
  description:
    "PPS Anantams Corporation (PACPL) - India's full-service bio-bitumen PMC, founded by 25-year industry veteran and BSE-listed entrepreneur Prince Pratap Shah.",
};

export default function AboutPage() {
  return (
    <>
      <NoiseOverlay />
      <PageHero
        eyebrow="About · PACPL"
        title="Vision · Strategy · Execution"
        intro={`${company.legal} is India's leading full-service PMC for bio-modified bitumen - and a builder of AI software for the bitumen industry. One-point solution from feasibility to post-commissioning hand-holding.`}
        accent="amber"
        image="aboutHero"
      />

      {/* Key facts */}
      <section className="py-[var(--space-section)]">
        <div className="maxw container-x">
          <SectionHeading eyebrow="At a Glance" title="A track record you can underwrite." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyFacts.map((f, i) => (
              <Reveal key={f} index={i % 3}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-[var(--color-line)] p-6">
                  <BadgeCheck size={18} className="mt-0.5 shrink-0 text-[var(--color-amber)]" />
                  <span className="text-sm text-[var(--color-muted)]">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder + career */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-surface)] py-[var(--space-section)]">
        <div className="maxw container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <div className="mb-8 flex items-center gap-5">
                <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-raised)] font-display text-2xl font-bold text-gradient-warm ring-glow">
                  PPS
                </div>
                <span className="text-xs leading-relaxed text-[var(--color-faint)]">
                  Portrait slot - drop a real photo of
                  <br />
                  {company.founder} at <code className="text-[var(--color-muted)]">/assets/img/founder.jpg</code>
                </span>
              </div>
              <Badge accent="amber">The Founder</Badge>
              <h2 className="mt-5 font-display text-[length:var(--text-h2)] font-semibold leading-tight tracking-tight">
                {company.founder}
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--color-amber)]">
                {company.founderTitle}
              </p>
              <p className="mt-6 leading-relaxed text-[var(--color-muted)]">
                Founder of Omnipotent Industries Limited - India&apos;s BSE-listed bitumen company (IPO 2020) - which
                operated 3 plants, 11 joint ventures and reached 1.2 Lakh MT annual trading. MBA (Marketing &amp;
                Finance); Pride of India Icon 2021.
              </p>
            </div>
            <div className="lg:pt-10">
              <ProcessTimeline steps={career.map((c) => ({ n: c.yr.slice(2, 4), t: c.t, d: `${c.yr} · ${c.d}` }))} />
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-[var(--space-section)]">
        <div className="maxw container-x">
          <SectionHeading eyebrow="International Partnerships" title="Trusted across borders." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {partnerships.map((p, i) => (
              <Reveal key={p.p} index={i}>
                <GlowCard accent={i % 2 ? "cyan" : "amber"} className="h-full">
                  <div className="flex h-full flex-col p-7">
                    <Globe size={22} className="text-[var(--color-faint)]" />
                    <h3 className="mt-6 font-display text-lg font-semibold leading-snug">{p.p}</h3>
                    <p className="mt-auto pt-4 text-sm text-[var(--color-muted)]">{p.d}</p>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Partner with proven operators." />
    </>
  );
}
