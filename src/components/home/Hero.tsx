"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, PhoneCall } from "lucide-react";
import { ParticleField } from "@/components/visual/ParticleField";
import { GradientMesh, GridBackground } from "@/components/visual/Backdrop";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Marquee } from "@/components/ui/Marquee";
import { Emph } from "@/components/ui/Emph";
import { company } from "@/lib/site";

const taglineWords = company.tagline.split(" ");
const taglineLast = taglineWords.pop() ?? "";
const taglineHead = taglineWords.join(" ");

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.9 + i * 0.12 },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 grain">
      {/* layered cinematic background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <GradientMesh />
        <ParticleField className="absolute inset-0 h-full w-full" />
        <GridBackground />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-void)_92%)]" />

      <motion.div style={{ y, opacity }} className="maxw container-x relative">
        <motion.div
          custom={0}
          variants={reveal}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-base)]/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[var(--color-muted)] backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-amber)]" />
          {company.legal} · {company.short}
        </motion.div>

        {/* Wordmark with one-shot light-sweep */}
        <h1 className="mt-8 font-display font-bold leading-[0.82] tracking-[-0.03em]">
          <span className="relative block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="block text-[length:var(--text-hero)] text-gradient"
            >
              YUGA
            </motion.span>
            <span className="wordmark-sweep pointer-events-none absolute inset-0" aria-hidden />
          </span>
        </h1>

        <motion.p
          custom={1}
          variants={reveal}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-2xl font-display text-[length:var(--text-h3)] font-medium leading-snug text-[var(--color-ink)]"
        >
          {taglineHead} <Emph>{taglineLast}</Emph>
        </motion.p>
        <motion.p
          custom={2}
          variants={reveal}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-ink)]/80 sm:text-lg"
        >
          Bio-Bitumen PMC · AI Software · Capital Markets · Sustainable Infrastructure.
        </motion.p>

        <motion.div
          custom={3}
          variants={reveal}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/bio-bitumen" variant="glow">
            Explore Services <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton href="/contact" variant="ghost">
            <PhoneCall size={15} /> Book Consultation
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-faint)]"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* base credibility marquee */}
      <div className="absolute inset-x-0 bottom-0 border-t border-[var(--color-line)] bg-[var(--color-void)]/70 py-3 backdrop-blur">
        <Marquee duration={32} reactive className="text-xs uppercase tracking-[0.25em] text-[var(--color-faint)]">
          <span className="px-6">CSIR-CRRI KrishiBind aligned</span>·
          <span className="px-6">BSE-listed founder (IPO 2020)</span>·
          <span className="px-6">9 plants commissioned</span>·
          <span className="px-6">NHAI / MoRTH compliant</span>·
          <span className="px-6">150,000-contact network</span>·
          <span className="px-6">18 states</span>·
        </Marquee>
      </div>
    </section>
  );
}
