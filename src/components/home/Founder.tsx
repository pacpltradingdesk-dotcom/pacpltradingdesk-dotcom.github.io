import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Emph } from "@/components/ui/Emph";
import { LineChart } from "@/components/visual/Charts";
import { company, keyFacts } from "@/lib/site";

export function Founder() {
  return (
    <section className="relative overflow-hidden py-[var(--space-section)]">
      <div className="maxw container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <Badge accent="amber">The Founder</Badge>
          </Reveal>
          <Reveal index={1}>
            <h2 className="mt-6 font-display text-[length:var(--text-h2)] font-semibold leading-[1.04] tracking-tight">
              {company.founder}
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--color-amber)]">
              {company.founderTitle}
            </p>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-6 max-w-xl leading-relaxed text-[var(--color-muted)]">
              A 25-year bitumen-industry veteran and 17+ year company director. Founder of Omnipotent Industries
              Limited - India&apos;s <Emph>BSE-listed</Emph> bitumen company (IPO 2020) - which operated 3 plants,
              11 joint ventures and reached 1.2 Lakh MT annual trading. Rare first-hand listing and fundraising
              experience.
            </p>
          </Reveal>
          <Reveal index={3}>
            <Link
              href="/about"
              data-cursor="hover"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-amber)]"
            >
              Read the full story <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>

        <Reveal index={1}>
          <div className="glass relative overflow-hidden rounded-[2rem] p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-faint)]">Track Record</span>
              <span className="text-xs text-[var(--color-cyan)]">25 years</span>
            </div>
            <LineChart seed={21} accent="cyan" height={140} className="h-32 w-full" />
            <ul className="mt-6 grid gap-3">
              {keyFacts.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                  <BadgeCheck size={16} className="mt-0.5 shrink-0 text-[var(--color-amber)]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
