import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/visual/Media";
import { Parallax } from "@/components/ui/Parallax";
import type { ImgKey } from "@/lib/media";
import { verticals } from "@/lib/site";

const vImg: Record<string, ImgKey> = {
  "plant-pmc": "vPmc",
  software: "vSoft",
  capital: "vCap",
};

export function Verticals() {
  return (
    <section className="relative py-[var(--space-section)]">
      <div className="maxw container-x">
        <SectionHeading
          eyebrow="Three Verticals"
          title="A vertically integrated industrial intelligence company."
          intro="Most consultants stop at the report. YUGA designs the plant, builds the software that grows it, and raises the capital that funds it - one accountable partner across the whole lifecycle."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {verticals.map((v, i) => (
            <Reveal key={v.id} index={i}>
              <GlowCard accent={v.accent as "amber" | "cyan"} className="h-full">
                <Link href={v.href} className="flex h-full flex-col" data-cursor="hover">
                  <div className="relative h-44 overflow-hidden rounded-t-[calc(1.5rem-1px)]">
                    <Parallax speed={24} className="absolute inset-x-0 -inset-y-[14%]">
                      <Media
                        name={vImg[v.key]}
                        overlay="bottom"
                        sizes="(max-width:1024px) 100vw, 33vw"
                        className="h-full w-full"
                      />
                    </Parallax>
                    <span className="absolute bottom-3 left-7 font-display text-6xl font-bold leading-none text-[var(--color-ink)] drop-shadow-lg">
                      {v.id}
                    </span>
                    <div className="absolute right-6 top-6">
                      <Badge accent={v.accent as "amber" | "cyan"}>{v.sub}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8 pt-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{v.summary}</p>
                  <ul className="mt-6 space-y-2 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-faint)]">
                    {v.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-amber)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-ink)]">
                    Explore vertical
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  </div>
                </Link>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
