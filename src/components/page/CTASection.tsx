import { ArrowRight, PhoneCall } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Reveal } from "@/components/ui/Reveal";
import { GradientMesh } from "@/components/visual/Backdrop";
import { company } from "@/lib/site";

/** Reusable closing call-to-action band. */
export function CTASection({
  title = "Let's engineer your next plant.",
  sub = "From feasibility to first commercial production - and the capital to fund it.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden py-[var(--space-section)] grain">
      <GradientMesh />
      <div className="maxw container-x relative">
        <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16 sm:py-24 ring-glow">
          <AnimatedText
            text={title}
            as="h2"
            className="justify-center font-display text-[length:var(--text-h2)] font-semibold leading-tight tracking-tight"
          />
          <Reveal index={1}>
            <p className="mx-auto mt-5 max-w-xl text-[var(--color-muted)]">{sub}</p>
          </Reveal>
          <Reveal index={2}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="/contact" variant="glow">
                Book a Consultation <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton href={`tel:${company.phones[0].replace(/\s/g, "")}`} variant="ghost">
                <PhoneCall size={15} /> {company.phones[0]}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
