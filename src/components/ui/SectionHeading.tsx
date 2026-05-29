import { AnimatedText } from "./AnimatedText";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/** Eyebrow label + animated heading + optional intro paragraph. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              "mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--color-amber)]",
              align === "center" && "justify-center",
            )}
          >
            <span className="h-px w-8 bg-[var(--color-amber)]" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <AnimatedText
        text={title}
        as="h2"
        mode="clip"
        className={cn(
          "font-display text-[length:var(--text-h2)] font-semibold leading-[1.02] tracking-tight",
          align === "center" && "justify-center",
        )}
      />
      {intro && (
        <Reveal index={1}>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
