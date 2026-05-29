"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  mode?: "slide" | "clip";
  split?: "word" | "char";
};

const EASE = [0.16, 1, 0.3, 1] as const; // matches --ease-expo

/**
 * Masked, staggered heading reveal. `slide` rides each token up from
 * behind an overflow clip; `clip` adds a clip-path wipe on top for a
 * directed, curtain-like entrance. Honors prefers-reduced-motion by
 * rendering static text (Rule 2). Animates transform/clip-path only (Rule 3).
 */
export function AnimatedText({ text, className, delay = 0, as: Tag = "h2", mode = "slide", split = "word" }: Props) {
  const reduce = useReducedMotion();
  const tokens = split === "char" ? Array.from(text) : text.split(" ");

  if (reduce) {
    return <Tag className={cn("flex flex-wrap", className)}>{text}</Tag>;
  }

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: split === "char" ? 0.025 : 0.06, delayChildren: delay } },
  };
  const token: Variants = {
    hidden: { y: "115%", ...(mode === "clip" ? { clipPath: "inset(0 0 100% 0)" } : {}) },
    show: {
      y: 0,
      ...(mode === "clip" ? { clipPath: "inset(0 0 -12% 0)" } : {}),
      transition: { duration: 0.85, ease: EASE },
    },
  };

  return (
    <Tag className={cn("flex flex-wrap", className)}>
      <motion.span
        className="inline-flex flex-wrap"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        aria-label={text}
      >
        {tokens.map((t, i) => (
          <span
            key={i}
            aria-hidden
            className={cn("overflow-hidden pb-[0.12em]", split === "char" ? "pr-[0.01em]" : "pr-[0.28em]")}
          >
            <motion.span variants={token} className="inline-block">
              {t === " " ? " " : t}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
