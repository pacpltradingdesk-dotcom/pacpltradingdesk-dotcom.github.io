import { AnimatedText } from "@/components/ui/AnimatedText";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { GradientMesh, GridBackground } from "@/components/visual/Backdrop";
import { Media } from "@/components/visual/Media";
import type { ImgKey } from "@/lib/media";
import { cn } from "@/lib/utils";

/** Shared inner-page hero - consistent rhythm across all 8 sub-pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  accent = "amber",
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  accent?: "amber" | "cyan";
  image?: ImgKey;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44 grain">
      {image && (
        <Media
          name={image}
          overlay="full"
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
      )}
      <GradientMesh />
      <GridBackground />
      <div className="maxw container-x relative">
        <Reveal>
          <Badge accent={accent}>{eyebrow}</Badge>
        </Reveal>
        <AnimatedText
          text={title}
          as="h1"
          delay={0.1}
          mode="clip"
          className={cn(
            "mt-6 max-w-5xl font-display text-[length:var(--text-display)] font-semibold leading-[0.98] tracking-tight",
          )}
        />
        {intro && (
          <Reveal index={2}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">{intro}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
