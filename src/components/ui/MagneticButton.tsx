"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "glow";
  className?: string;
  type?: "button" | "submit";
};

/**
 * Button that "pulls" toward the cursor (magnetic) using spring physics.
 * Strength is capped so it stays tasteful. Renders as Link or button.
 */
export function MagneticButton({ children, href, onClick, variant = "solid", className, type = "button" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.3);
    y.set(my * 0.4);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const styles = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors",
    variant === "solid" && "bg-[var(--color-ink)] text-[var(--color-void)] hover:bg-white",
    variant === "ghost" && "border border-[var(--color-line)] text-[var(--color-ink)] hover:bg-[var(--color-raised)]",
    variant === "glow" &&
      "bg-gradient-to-r from-[var(--color-amber)] to-[var(--color-amber-deep)] text-[var(--color-void)] ring-glow hover:brightness-110",
    className,
  );

  const inner = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="inline-block"
      data-cursor="hover"
    >
      {href ? (
        <Link href={href} className={styles}>
          {inner}
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={styles}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
