import { cn } from "@/lib/utils";

/** Animated perspective grid floor. Pure CSS, no JS. */
export function GridBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div
        className="absolute inset-x-0 bottom-0 h-[60%] opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          transform: "perspective(420px) rotateX(62deg)",
          transformOrigin: "bottom",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />
    </div>
  );
}

/** Drifting gradient-mesh atmosphere (two blurred orbs). */
export function GradientMesh({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute -left-[10%] top-[10%] h-[40rem] w-[40rem] rounded-full bg-[var(--color-amber-deep)] opacity-[0.13] blur-[120px] animate-[float1_18s_ease-in-out_infinite]" />
      <div className="absolute -right-[10%] top-[30%] h-[36rem] w-[36rem] rounded-full bg-[var(--color-cyan-deep)] opacity-[0.12] blur-[120px] animate-[float2_22s_ease-in-out_infinite]" />
      <style>{`
        @keyframes float1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(8%,6%)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-6%,-8%)} }
      `}</style>
    </div>
  );
}

/** Fixed fine-grain noise overlay for cinematic texture. */
export function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.035] mix-blend-overlay"
      aria-hidden
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
