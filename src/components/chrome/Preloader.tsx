"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company } from "@/lib/site";
import { YugaMark } from "@/components/ui/YugaMark";

/**
 * Cinematic loading sequence: a counter that races to 100 while the
 * wordmark resolves, then the curtain lifts. Shows once per page load.
 */
export function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(true);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const DURATION = 1400;
    const loop = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(loop);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--color-void)]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <YugaMark className="mb-3 h-[clamp(3rem,9vw,5.5rem)] w-auto" />
            <span className="font-display text-[clamp(3rem,12vw,9rem)] font-bold leading-none tracking-tight text-gradient">
              {company.brand}
            </span>
          </motion.div>
          <div className="mt-6 flex w-[min(80vw,28rem)] items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--color-faint)]">
            <span>{company.promise}</span>
            <span className="font-display tabular-nums text-[var(--color-amber)]">{count}%</span>
          </div>
          <div className="mt-3 h-px w-[min(80vw,28rem)] overflow-hidden bg-[var(--color-line)]">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-amber)] to-[var(--color-cyan)]"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
