"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Glass card with two pointer-tracked layers (CSS vars on mousemove, no
 * re-render): a bright rim-glow that peeks through the 1px border gap, and
 * a soft in-card spotlight on top (mix-blend-screen, low opacity so text
 * contrast stays WCAG-safe). Animates opacity only (Rule 3).
 */
export function GlowCard({
  children,
  className,
  accent = "amber",
}: {
  children: ReactNode;
  className?: string;
  accent?: "amber" | "cyan";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const base = accent === "amber" ? "var(--color-amber)" : "var(--color-cyan)";
  const rim = `color-mix(in oklch, ${base} 55%, transparent)`;
  const spot = `color-mix(in oklch, ${base} 14%, transparent)`;

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-px transition-colors hover:border-[color-mix(in_oklch,var(--color-ink)_18%,transparent)]",
        className,
      )}
    >
      {/* rim glow — behind the panel, shows through the 1px border gap */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(240px circle at var(--mx) var(--my), ${rim}, transparent 62%)` }}
      />
      <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-[var(--color-surface)]">{children}</div>
      {/* in-card spotlight — on top, additive, subtle */}
      <div
        className="pointer-events-none absolute inset-px rounded-[calc(1.5rem-1px)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen"
        style={{ background: `radial-gradient(380px circle at var(--mx) var(--my), ${spot}, transparent 60%)` }}
      />
    </div>
  );
}
