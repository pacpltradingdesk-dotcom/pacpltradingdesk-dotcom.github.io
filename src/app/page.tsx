import { Hero } from "@/components/home/Hero";
import { HorizontalStory } from "@/components/home/HorizontalStory";
import { Verticals } from "@/components/home/Verticals";
import { Stats } from "@/components/home/Stats";
import { Founder } from "@/components/home/Founder";
import { CTASection } from "@/components/page/CTASection";
import { NoiseOverlay } from "@/components/visual/Backdrop";

export default function HomePage() {
  return (
    <>
      <NoiseOverlay />
      <div id="ch-intro" data-chapter="Intro">
        <Hero />
      </div>
      <Stats />
      <div id="ch-approach" data-chapter="Approach">
        <HorizontalStory />
      </div>
      <div id="ch-verticals" data-chapter="Verticals">
        <Verticals />
      </div>
      <div id="ch-founder" data-chapter="Founder">
        <Founder />
      </div>
      <div id="ch-contact" data-chapter="Contact">
        <CTASection
          title="Industrial intelligence, end to end."
          sub="Bio-bitumen plants, AI software and capital - under one accountable partner."
        />
      </div>
    </>
  );
}
