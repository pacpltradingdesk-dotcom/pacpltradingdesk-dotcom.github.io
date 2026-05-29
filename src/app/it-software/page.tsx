import type { Metadata } from "next";
import { Check, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { CTASection } from "@/components/page/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { LineChart } from "@/components/visual/Charts";
import { NoiseOverlay } from "@/components/visual/Backdrop";
import { software } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Software Services",
  description:
    "AI software for the bitumen and sales industry - sales dashboard, CRM, Excel automation, WhatsApp bulk, call analytics and automated market reports.",
};

export default function ITSoftwarePage() {
  return (
    <>
      <NoiseOverlay />
      <PageHero
        eyebrow="Vertical B · Technology"
        title="AI Software That Runs the Business"
        intro="The same in-house stack that powers our own bitumen operations - pricing intelligence, CRM, automation and market signals - now available to clients."
        accent="cyan"
        image="softHero"
      />

      {/* Dashboard mock */}
      <section className="py-[var(--space-section)]">
        <div className="maxw container-x">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-[2rem] p-6 ring-glow-cool sm:p-10">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[var(--color-amber)]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--color-line)]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--color-line)]" />
                </div>
                <Badge accent="cyan">Live · AI Sales Dashboard</Badge>
              </div>
              <div className="grid gap-5 lg:grid-cols-3">
                <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-faint)]">VG-30 Landed</div>
                  <div className="mt-2 font-display text-3xl font-bold">₹48,250</div>
                  <div className="text-xs text-[var(--color-cyan)]">▲ 2.4% · 24-mo AI forecast</div>
                  <LineChart seed={5} accent="cyan" height={90} className="mt-4 h-20 w-full" />
                </div>
                <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-faint)]">Market Signal</div>
                  <div className="mt-2 font-display text-3xl font-bold text-gradient">7.8/10</div>
                  <div className="text-xs text-[var(--color-muted)]">10-signal composite · Brent · USD-INR</div>
                  <LineChart seed={9} accent="amber" height={90} className="mt-4 h-20 w-full" />
                </div>
                <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-faint)]">Pipeline</div>
                  <div className="mt-4 space-y-3">
                    {[["HOT", 64], ["WARM", 38], ["COLD", 22]].map(([k, v]) => (
                      <div key={k as string}>
                        <div className="flex justify-between text-xs text-[var(--color-muted)]">
                          <span>{k}</span>
                          <span>{v}</span>
                        </div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[var(--color-raised)]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[var(--color-amber)] to-[var(--color-cyan)]"
                            style={{ width: `${(v as number)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product grid */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-[var(--space-section)]">
        <div className="maxw container-x">
          <SectionHeading
            eyebrow="The Product Suite"
            title="Six tools. Built for bitumen, sales and intelligence."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {software.map((s, i) => (
              <Reveal key={s.name} index={i % 2}>
                <GlowCard accent={i % 2 ? "amber" : "cyan"} className="h-full">
                  <div className="flex h-full flex-col p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl font-semibold tracking-tight">{s.name}</h3>
                      <span className="shrink-0 text-xs text-[var(--color-cyan)]">{s.tag}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{s.desc}</p>
                    <ul className="mt-6 grid grid-cols-2 gap-2.5 border-t border-[var(--color-line)] pt-6">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-1.5 text-xs text-[var(--color-muted)]">
                          <Check size={13} className="mt-0.5 shrink-0 text-[var(--color-amber)]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 text-xs uppercase tracking-wider text-[var(--color-faint)]">{s.metric}</div>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <a
              href="https://crm.ppsanatams.online"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-cyan)]"
            >
              Visit the live CRM <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Put AI to work in your sales floor."
        sub="License the platform, or have us tailor a stack to your operation."
      />
    </>
  );
}
