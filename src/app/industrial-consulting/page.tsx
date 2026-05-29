import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { CTASection } from "@/components/page/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ProcessTimeline } from "@/components/visual/ProcessTimeline";
import { NoiseOverlay } from "@/components/visual/Backdrop";
import { sevenPhases, products, clientTypes, fees } from "@/lib/site";
import { Media } from "@/components/visual/Media";
import type { ImgKey } from "@/lib/media";

const prodImg: ImgKey[] = ["prod0", "prod1", "prod2", "prod3", "prod4"];

export const metadata: Metadata = {
  title: "Industrial Consulting",
  description:
    "End-to-end bitumen plant consultancy - PMB, CRMB, Emulsion, Decanter and Blown bitumen - across a 7-phase A-to-Z delivery model.",
};

export default function IndustrialConsultingPage() {
  return (
    <>
      <NoiseOverlay />
      <PageHero
        eyebrow="Vertical A · PMC / EPC"
        title="Industrial Bitumen Consulting, A to Z"
        intro="A 7-phase delivery model that takes a PMB, CRMB, Emulsion, Decanter or Blown bitumen plant from feasibility to commercial production - and your first buyers."
        accent="amber"
        image="indHero"
      />

      {/* 7 phases */}
      <section className="py-[var(--space-section)]">
        <div className="maxw container-x">
          <SectionHeading
            eyebrow="Our A-to-Z Services"
            title="Seven phases. One accountable partner."
            intro="We don't hand you a report and disappear - we stay through commissioning and six months of sales hand-holding."
          />
          <div className="mt-16">
            <ProcessTimeline steps={sevenPhases} />
          </div>
        </div>
      </section>

      {/* Product plants */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-surface)] py-[var(--space-section)]">
        <div className="maxw container-x">
          <SectionHeading eyebrow="Bitumen Product Plants" title="Five proven product lines." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.name} index={i % 3}>
                <GlowCard accent={i % 2 ? "cyan" : "amber"} className="h-full">
                  <div className="flex h-full flex-col">
                    <Media
                      name={prodImg[i]}
                      overlay="bottom"
                      sizes="(max-width:1024px) 100vw, 33vw"
                      className="h-36 w-full rounded-t-[calc(1.5rem-1px)]"
                    />
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-xl font-semibold tracking-tight">{p.name}</h3>
                      <p className="mt-2 text-sm text-[var(--color-amber)]">{p.spec}</p>
                      <p className="mt-auto pt-6 text-sm text-[var(--color-muted)]">
                        <span className="text-[var(--color-faint)]">Industries · </span>
                        {p.industries}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-[var(--space-section)]">
        <div className="maxw container-x">
          <SectionHeading eyebrow="Who We Serve" title="Five client journeys, one outcome." />
          <div className="mt-12 grid gap-4">
            {clientTypes.map((c, i) => (
              <Reveal key={c.t} index={Math.min(i, 3)}>
                <div className="group flex flex-col gap-2 rounded-2xl border border-[var(--color-line)] p-6 transition-colors hover:bg-[var(--color-surface)] sm:flex-row sm:items-center sm:justify-between">
                  <div className="sm:max-w-2xl">
                    <h3 className="font-display text-lg font-semibold">{c.t}</h3>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{c.d}</p>
                  </div>
                  <Badge accent="amber" className="w-fit shrink-0">
                    {c.inv}
                  </Badge>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-[var(--space-section)]">
        <div className="maxw container-x grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading eyebrow="Consulting Fees" title="Transparent, scope-based pricing." />
          <div className="overflow-hidden rounded-3xl border border-[var(--color-line)]">
            {fees.map((f) => (
              <div
                key={f.service}
                className="flex items-center justify-between border-b border-[var(--color-line)] px-6 py-5 text-sm last:border-0 transition-colors hover:bg-[var(--color-raised)]/50"
              >
                <span className="text-[var(--color-muted)]">{f.service}</span>
                <span className="font-display font-medium text-gradient-warm">{f.fee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Build your plant the right way." />
    </>
  );
}
