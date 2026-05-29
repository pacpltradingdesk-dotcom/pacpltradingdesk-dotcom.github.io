"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Factory, Cpu, LineChart as LineIcon, Leaf } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Media } from "@/components/visual/Media";
import type { ImgKey } from "@/lib/media";

const panels: { icon: typeof Factory; kicker: string; title: string; body: string; img: ImgKey }[] = [
  {
    icon: Factory,
    kicker: "01 / Engineering",
    title: "We build the plant.",
    body: "DPR to commissioning for bio-bitumen, pyrolysis, PMB, CRMB and emulsion lines - under the YUGA PMC brand.",
    img: "pEng",
  },
  {
    icon: Cpu,
    kicker: "02 / Intelligence",
    title: "We run it on AI.",
    body: "An in-house software stack - pricing forecasts, CRM, market signals and automation - that we use ourselves and license to you.",
    img: "pIntel",
  },
  {
    icon: LineIcon,
    kicker: "03 / Capital",
    title: "We fund the growth.",
    body: "Seed to IPO advisory, bank DPRs, subsidies and valuation - backed by a real, first-hand BSE listing.",
    img: "pCap",
  },
  {
    icon: Leaf,
    kicker: "04 / Impact",
    title: "We make it sustainable.",
    body: "Agro-waste becomes road. Less stubble burning, lower imports, carbon credits and rural jobs per plant.",
    img: "pImpact",
  },
];

/**
 * Sticky horizontal scroll: the panel track translates on X as the user
 * scrolls through a tall pinned container. Falls back to vertical stack
 * on small screens (where horizontal pinning is awkward on touch).
 */
export function HorizontalStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-76%"]);

  return (
    <section className="relative bg-[var(--color-surface)]">
      <div className="maxw container-x py-[var(--space-section)] pb-12">
        <AnimatedText
          text="One company. Four moves. From feedstock to public markets."
          as="h2"
          className="max-w-4xl font-display text-[length:var(--text-h2)] font-semibold leading-[1.02] tracking-tight"
        />
      </div>

      {/* Desktop: pinned horizontal scroll */}
      <div ref={ref} className="relative hidden h-[320vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 pl-[max(5vw,2rem)]">
            {panels.map((p, i) => (
              <article
                key={i}
                className="glass relative isolate flex h-[58vh] w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] p-12 md:w-[42vw]"
              >
                <Media
                  name={p.img}
                  overlay="full"
                  sizes="(max-width:768px) 78vw, 42vw"
                  className="absolute inset-0 -z-10 h-full w-full opacity-30"
                />
                <div
                  className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full opacity-20 blur-3xl"
                  style={{ background: i % 2 ? "var(--color-cyan-deep)" : "var(--color-amber-deep)" }}
                />
                <p.icon size={40} className="text-[var(--color-amber)]" strokeWidth={1.4} />
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-faint)]">{p.kicker}</div>
                  <h3 className="mt-4 font-display text-[clamp(2rem,3vw,3.4rem)] font-semibold leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-[var(--color-muted)]">{p.body}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: vertical stack */}
      <div className="maxw container-x grid gap-6 pb-[var(--space-section)] lg:hidden">
        {panels.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass relative isolate overflow-hidden rounded-3xl p-8"
          >
            <Media name={p.img} overlay="full" sizes="100vw" className="absolute inset-0 -z-10 h-full w-full opacity-25" />
            <p.icon size={32} className="text-[var(--color-amber)]" strokeWidth={1.4} />
            <div className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--color-faint)]">{p.kicker}</div>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-3 text-[var(--color-muted)]">{p.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
