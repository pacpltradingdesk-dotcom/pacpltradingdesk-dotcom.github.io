"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
  reactive?: boolean;
};

const wrap = (min: number, max: number, v: number): number => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/** Pure-CSS infinite marquee. GPU-friendly, no JS loop. */
function CssMarquee({ children, className, duration = 28, reverse = false }: Props) {
  return (
    <div className={cn("group flex w-full overflow-hidden whitespace-nowrap", className)}>
      <div
        className="flex shrink-0 animate-[marquee_linear_infinite] items-center"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
        {children}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

/** Scroll-velocity reactive marquee: faster + slightly skewed as you scroll. */
function VelocityMarquee({ children, className, duration = 28, reverse = false }: Props) {
  const baseX = useMotionValue(0);
  const dir = useRef(reverse ? -1 : 1);
  const { scrollY } = useScroll();
  const scrollV = useVelocity(scrollY);
  const smoothV = useSpring(scrollV, { damping: 50, stiffness: 400 });
  const factor = useTransform(smoothV, [-2000, 0, 2000], [-4, 0, 4], { clamp: false });
  const skewX = useTransform(smoothV, [-2000, 0, 2000], [4, 0, -4], { clamp: true });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const baseSpeed = 100 / duration; // %/sec for one copy

  useAnimationFrame((_, delta) => {
    let moveBy = dir.current * baseSpeed * (delta / 1000);
    moveBy += moveBy * factor.get();
    baseX.set(baseX.get() - moveBy);
  });

  return (
    <div className={cn("flex w-full overflow-hidden whitespace-nowrap", className)}>
      <motion.div style={{ x, skewX }} className="flex shrink-0 items-center will-change-transform">
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export function Marquee(props: Props) {
  const reduce = useReducedMotion();
  if (props.reactive && !reduce) return <VelocityMarquee {...props} />;
  if (reduce) {
    return (
      <div className={cn("flex w-full overflow-hidden whitespace-nowrap", props.className)}>
        <div className="flex shrink-0 items-center">{props.children}</div>
      </div>
    );
  }
  return <CssMarquee {...props} />;
}
