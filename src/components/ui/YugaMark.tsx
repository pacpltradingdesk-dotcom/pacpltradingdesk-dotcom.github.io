"use client";

import { useId } from "react";

/**
 * YUGA brand mark - gold upward arrow crowned by a star (the official logo).
 * SVG so it stays crisp at any size and reads cleanly on the dark theme.
 * Gradient id is per-instance (useId) so multiple marks never collide.
 */
export function YugaMark({ className, title = "YUGA" }: { className?: string; title?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 60 72" fill="none" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f8ecc6" />
          <stop offset=".5" stopColor="#e2bd63" />
          <stop offset="1" stopColor="#8a661c" />
        </linearGradient>
      </defs>
      <path d="M30 18 L46 40 L37 40 L37 64 L23 64 L23 40 L14 40 Z" fill={`url(#${id})`} />
      <path
        d="M30 0 l3.4 7 7.6 1.1 -5.5 5.4 1.3 7.6 -6.8 -3.6 -6.8 3.6 1.3 -7.6 -5.5 -5.4 7.6 -1.1 z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}
