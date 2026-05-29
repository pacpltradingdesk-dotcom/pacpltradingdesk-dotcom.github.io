import { cn } from "@/lib/utils";

/** Small pill label. */
export function Badge({
  children,
  accent = "neutral",
  className,
}: {
  children: React.ReactNode;
  accent?: "amber" | "cyan" | "neutral";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
        accent === "amber" && "border-[color-mix(in_oklch,var(--color-amber)_30%,transparent)] text-[var(--color-amber)]",
        accent === "cyan" && "border-[color-mix(in_oklch,var(--color-cyan)_30%,transparent)] text-[var(--color-cyan)]",
        accent === "neutral" && "border-[var(--color-line)] text-[var(--color-muted)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
