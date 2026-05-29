import type { Metadata } from "next";
import { MapPin, FileText } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { CTASection } from "@/components/page/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { StatCounter } from "@/components/ui/StatCounter";
import { NoiseOverlay } from "@/components/visual/Backdrop";
import { caseStudies, reportLibrary } from "@/lib/site";
import { Media } from "@/components/visual/Media";
import type { ImgKey } from "@/lib/media";

const csImg: ImgKey[] = ["cs0", "cs1", "cs2", "cs3"];

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Live YUGA PMC engagements - bio-bitumen plants in Haryana and Odisha - plus a ready library of bankable project reports. Client identities kept confidential.",
};

const metrics = [
  { v: 9, s: "", l: "Plants commissioned" },
  { v: 5, s: "+", l: "Live PMC engagements" },
  { v: 1250, s: " MT", l: "Annual output (lead plant)" },
  { v: 12, s: " mo", l: "Post-COD hand-holding" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <NoiseOverlay />
      <PageHero
        eyebrow="Projects · Track Record"
        title="Plants on the ground, reports in the bank."
        intro="A snapshot of live engagements, a ready library of bankable project reports, and a 25-year commissioning record. Client identities are kept confidential."
        accent="cyan"
        image="csHero"
      />

      {/* Metrics */}
      <section className="border-b border-[var(--color-line)] py-16">
        <div className="maxw container-x grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.l} index={i} className="text-center lg:text-left">
              <div className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold tracking-tight text-gradient">
                <StatCounter value={m.v} suffix={m.s} />
              </div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">{m.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Live projects */}
      <section className="py-[var(--space-section)]">
        <div className="maxw container-x">
          <SectionHeading eyebrow="Live PMC Projects" title="YUGA on site." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} index={i % 2}>
                <GlowCard accent={i % 2 ? "amber" : "cyan"} className="h-full">
                  <div className="flex h-full flex-col">
                    <div className="relative">
                      <Media
                        name={csImg[i]}
                        overlay="bottom"
                        sizes="(max-width:768px) 100vw, 50vw"
                        className="h-48 w-full rounded-t-[calc(1.5rem-1px)]"
                      />
                      <div className="absolute left-6 top-6">
                        <Badge accent={i % 2 ? "amber" : "cyan"}>{c.tag}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-8 pt-6">
                      <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight">
                        {c.title}
                      </h3>
                      <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-[var(--color-amber)]">
                        <MapPin size={14} /> {c.place}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{c.scope}</p>
                      <p className="mt-auto border-t border-[var(--color-line)] pt-5 text-xs text-[var(--color-faint)]">
                        {c.detail}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Report library */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-base)] py-[var(--space-section)]">
        <div className="maxw container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow="Bankable Report Library"
            title="Ready capabilities, off the shelf."
            intro="DPRs and feasibility studies prepared and ready to adapt to your location and capacity."
          />
          <div className="grid gap-3">
            {reportLibrary.map((r, i) => (
              <Reveal key={r} index={Math.min(i, 3)}>
                <div className="flex items-start gap-3 rounded-2xl border border-[var(--color-line)] p-5 transition-colors hover:bg-[var(--color-raised)]/40">
                  <FileText size={17} className="mt-0.5 shrink-0 text-[var(--color-cyan)]" />
                  <span className="text-sm text-[var(--color-muted)]">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Your project could be next." />
    </>
  );
}
