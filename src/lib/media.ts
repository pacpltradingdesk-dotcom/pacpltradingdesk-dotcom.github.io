/**
 * Image map - ONE unique image per slot across the whole site.
 *
 * Files live in /public/assets/img (real topic-related stock as base).
 * To swap any slot for your own plant photo or an AI render, drop the
 * file at the same path and keep the filename - nothing else changes.
 * See /public/assets/AI-PROMPTS.md for per-slot render prompts.
 */
export const img = {
  // Home
  homeHero: { src: "/assets/img/home-hero.jpg", alt: "Industrial refinery at dusk - distillation towers and tanks" },
  vPmc: { src: "/assets/img/v-pmc.jpg", alt: "Oil & bitumen processing facility" },
  vSoft: { src: "/assets/img/v-soft.jpg", alt: "Server infrastructure powering AI software" },
  vCap: { src: "/assets/img/v-cap.jpg", alt: "Stock exchange and capital markets" },
  pEng: { src: "/assets/img/p-eng.jpg", alt: "Plant construction and engineering" },
  pIntel: { src: "/assets/img/p-intel.jpg", alt: "AI technology and data intelligence" },
  pCap: { src: "/assets/img/p-cap.jpg", alt: "Trading screens and market data" },
  pImpact: { src: "/assets/img/p-impact.jpg", alt: "Solar energy and sustainable infrastructure" },

  // Bio-Bitumen
  bioHero: { src: "/assets/img/bio-hero.jpg", alt: "Baled agricultural straw - bio-bitumen feedstock" },
  bio0: { src: "/assets/img/bio-0.jpg", alt: "Petroleum and bitumen product plant" },
  bio1: { src: "/assets/img/bio-1.jpg", alt: "Farm fields supplying agro-waste biomass" },
  bio2: { src: "/assets/img/bio-2.jpg", alt: "Plastic waste for plastic-to-fuel conversion" },
  bio3: { src: "/assets/img/bio-3.jpg", alt: "End-of-life tyres for rubber-to-oil pyrolysis" },

  // Industrial Consulting
  indHero: { src: "/assets/img/ind-hero.jpg", alt: "Bitumen plant interior and machinery" },
  prod0: { src: "/assets/img/prod-0.jpg", alt: "Asphalt surfacing - emulsion application" },
  prod1: { src: "/assets/img/prod-1.jpg", alt: "Highway built with polymer modified bitumen" },
  prod2: { src: "/assets/img/prod-2.jpg", alt: "Road pavement - crumb rubber modified bitumen" },
  prod3: { src: "/assets/img/prod-3.jpg", alt: "Bitumen drums - blown / oxidised grades" },
  prod4: { src: "/assets/img/prod-4.jpg", alt: "Process piping and decanter systems" },

  // Other page heroes
  softHero: { src: "/assets/img/soft-hero.jpg", alt: "Data centre - AI software platform" },
  capHero: { src: "/assets/img/cap-hero.jpg", alt: "Financial markets and fundraising" },
  aboutHero: { src: "/assets/img/about-hero.jpg", alt: "Industrial skyline and infrastructure" },
  miHero: { src: "/assets/img/mi-hero.jpg", alt: "Market economy and analytics" },
  contactHero: { src: "/assets/img/contact-hero.jpg", alt: "Port and logistics - bitumen import" },

  // Case Studies
  csHero: { src: "/assets/img/cs-hero.jpg", alt: "Operational bio-bitumen power plant" },
  cs0: { src: "/assets/img/cs-0.jpg", alt: "Industrial plant - Bahadurgarh PMB project" },
  cs1: { src: "/assets/img/cs-1.jpg", alt: "Agriculture region - Malkangiri Odisha project" },
  cs2: { src: "/assets/img/cs-2.jpg", alt: "Recycling plant - plastic-to-fuel project" },
  cs3: { src: "/assets/img/cs-3.jpg", alt: "Forest / green - carbon-credit structuring" },

  // Founder portrait slot (no file yet → graceful gradient fallback)
  founder: { src: "/assets/img/founder.jpg", alt: "Prince Pratap Shah - Founder & Managing Director" },
} as const;

export type ImgKey = keyof typeof img;
