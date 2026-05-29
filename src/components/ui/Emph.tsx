import { cn } from "@/lib/utils";

/**
 * Inline editorial-italic emphasis (text effect from the design bundle).
 * Use sparingly to lift one phrase inside a sans headline or paragraph.
 * `tone`: warm gold gradient (default) or plain ink italic.
 */
export function Emph({
  children,
  tone = "warm",
  className,
}: {
  children: React.ReactNode;
  tone?: "warm" | "cool" | "ink";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-editorial",
        tone === "warm" && "text-gradient-warm",
        tone === "cool" && "text-gradient-cool",
        tone === "ink" && "text-[var(--color-ink)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
