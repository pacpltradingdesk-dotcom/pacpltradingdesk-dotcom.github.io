"use client";

import { useId } from "react";
import { motion } from "framer-motion";

/** Deterministic pseudo-random so SSR and client match (no hydration drift). */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

/** Animated area line chart drawn with SVG path stroke + fill. */
export function LineChart({
  seed = 7,
  points = 40,
  accent = "amber",
  className,
  height = 220,
}: {
  seed?: number;
  points?: number;
  accent?: "amber" | "cyan";
  className?: string;
  height?: number;
}) {
  const id = useId();
  const rand = seeded(seed);
  const W = 600;
  const H = height;
  let y = H * 0.55;
  const coords: [number, number][] = [];
  for (let i = 0; i < points; i++) {
    y += (rand() - 0.46) * (H * 0.12);
    y = Math.max(H * 0.12, Math.min(H * 0.85, y));
    coords.push([(i / (points - 1)) * W, y]);
  }
  const line = coords.map(([x, yy], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${yy.toFixed(1)}`).join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;
  const stroke = accent === "amber" ? "var(--color-amber)" : "var(--color-cyan)";

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={`fill-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.28" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1="0" y1={H * g} x2={W} y2={H * g} stroke="var(--color-line)" strokeWidth="1" />
      ))}
      <motion.path
        d={area}
        fill={`url(#fill-${id})`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

/** Animated candlestick chart - Bloomberg-terminal flavour. */
export function Candlestick({
  seed = 12,
  bars = 26,
  className,
  height = 240,
}: {
  seed?: number;
  bars?: number;
  className?: string;
  height?: number;
}) {
  const rand = seeded(seed);
  const W = 600;
  const H = height;
  const gap = W / bars;
  const bw = gap * 0.45;
  let price = H * 0.5;

  const candles = Array.from({ length: bars }, (_, i) => {
    const open = price;
    price += (rand() - 0.5) * H * 0.16;
    price = Math.max(H * 0.15, Math.min(H * 0.85, price));
    const close = price;
    const hi = Math.min(open, close) - rand() * H * 0.06;
    const lo = Math.max(open, close) + rand() * H * 0.06;
    return { x: i * gap + gap / 2, open, close, hi, lo, up: close < open };
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} preserveAspectRatio="none" aria-hidden>
      {candles.map((c, i) => {
        const col = c.up ? "var(--color-cyan)" : "var(--color-amber-deep)";
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.025 }}
          >
            <line x1={c.x} y1={c.hi} x2={c.x} y2={c.lo} stroke={col} strokeWidth="1" />
            <rect
              x={c.x - bw / 2}
              y={Math.min(c.open, c.close)}
              width={bw}
              height={Math.max(2, Math.abs(c.close - c.open))}
              fill={col}
              rx="1"
            />
          </motion.g>
        );
      })}
    </svg>
  );
}
