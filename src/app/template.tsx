"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Route-enter curtain. Next re-renders template.tsx on every navigation,
 * so this clip-path wipe fires as each page mounts, making navigation feel
 * like one continuous film. Curtain-only (content is NOT wrapped in a
 * transform) so it never creates a containing block that would break the
 * sticky pin in HorizontalStory. Reduced motion -> no curtain (Rule 2).
 * Animates clip-path only (Rule 3).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <>
      {!reduce && (
        <motion.div
          aria-hidden
          initial={{ clipPath: "inset(0 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="pointer-events-none fixed inset-0 z-[125] bg-gradient-to-b from-[var(--color-amber-deep)] via-[var(--color-amber)] to-[var(--color-void)]"
        />
      )}
      {children}
    </>
  );
}
