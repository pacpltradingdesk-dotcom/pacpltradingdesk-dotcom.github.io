"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Step = { step?: string; n?: string; title?: string; t?: string; desc?: string; d?: string };

/**
 * Vertical glowing timeline whose progress line fills as you scroll.
 * Accepts the bio-process / 7-phase shapes from the data module.
 */
export function ProcessTimeline({ steps }: { steps: readonly Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative pl-10 sm:pl-16">
      {/* track */}
      <div className="absolute left-[14px] top-2 h-[calc(100%-1rem)] w-px bg-[var(--color-line)] sm:left-[22px]" />
      <motion.div
        style={{ height: fill }}
        className="absolute left-[14px] top-2 w-px bg-gradient-to-b from-[var(--color-amber)] to-[var(--color-cyan)] sm:left-[22px]"
      />

      <div className="space-y-12">
        {steps.map((s, i) => {
          const num = s.step ?? s.n ?? String(i + 1).padStart(2, "0");
          const title = s.title ?? s.t ?? "";
          const desc = s.desc ?? s.d ?? "";
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="absolute -left-10 top-0 grid h-7 w-7 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-base)] text-[10px] font-display text-[var(--color-amber)] sm:-left-16 sm:h-11 sm:w-11 sm:text-xs ring-glow">
                {num}
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">{desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
