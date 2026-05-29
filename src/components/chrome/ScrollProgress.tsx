"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/** Side chapter index — reflects the active `[data-chapter]` section. */
function ChapterIndex() {
  const [chapters, setChapters] = useState<{ id: string; label: string }[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    if (els.length < 2) return;
    setChapters(els.map((el, i) => ({ id: el.id || `ch-${i}`, label: el.dataset.chapter ?? "" })));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = els.indexOf(e.target as HTMLElement);
            if (idx >= 0) setActive(idx);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  if (chapters.length < 2) return null;

  return (
    <nav className="fixed right-5 top-1/2 z-[120] hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex" aria-label="Section index">
      {chapters.map((c, i) => (
        <div key={c.id} className="flex items-center gap-2">
          <span
            className={cn(
              "text-[10px] uppercase tracking-[0.2em] transition-all duration-300",
              i === active ? "translate-x-0 text-[var(--color-amber)] opacity-100" : "translate-x-1 text-[var(--color-faint)] opacity-0",
            )}
          >
            {c.label}
          </span>
          <span
            className={cn(
              "h-px w-8 origin-right transition-all duration-300",
              i === active ? "scale-x-100 bg-[var(--color-amber)]" : "scale-x-50 bg-[var(--color-line)]",
            )}
          />
        </div>
      ))}
    </nav>
  );
}

/** Thin gradient progress bar + cinematic chapter index. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[140] h-[2px] origin-left bg-gradient-to-r from-[var(--color-amber)] via-[var(--color-amber-deep)] to-[var(--color-cyan)]"
      />
      <ChapterIndex />
    </>
  );
}
