import { StatCounter } from "@/components/ui/StatCounter";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="relative border-y border-[var(--color-line)] bg-[var(--color-surface)] py-20">
      <div className="maxw container-x grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} index={i} className="text-center lg:text-left">
            <div className="font-display text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-none tracking-tight text-gradient-warm">
              <StatCounter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-sm font-medium text-[var(--color-ink)]">{s.label}</div>
            <div className="text-xs text-[var(--color-faint)]">{s.sub}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
