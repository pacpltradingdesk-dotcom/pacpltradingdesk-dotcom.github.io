/**
 * YUGA / PPS Anantams Corporation Pvt Ltd (PACPL)
 * Single source of truth for all site content.
 * Edit real facts here - components stay layout-only.
 */

export const company = {
  brand: "YUGA",
  legal: "PPS Anantams Corporation Private Limited",
  short: "PACPL",
  promise: "Vision · Strategy · Execution",
  founder: "Prince Pratap Shah",
  founderTitle: "Founder & Managing Director",
  tagline: "Industrial Intelligence for the Future",
  oneLiner:
    "India's full-service Project Management Consultancy for Bio-Modified Bitumen - engineered with AI software and funded by real capital-markets expertise.",
  cin: "U46632GJ2019PTC110676",
  gst: "24AAHCV1611L2ZD",
  din: "06680837",
  web: "www.princeshah.com",
  linkedin: "linkedin.com/in/prince-shah-b781921b/",
  phones: ["+91 77952 42424", "+91 94482 81224", "+91 75069 41655"],
  emails: ["sales@princeshah.com", "sales.ppsanantams@gmail.com"],
  offices: [
    {
      label: "Registered Office",
      lines: ["04, Signet Plaza Tower-B, 3rd Floor", "Kunal Cross Road, Gotri", "Vadodara 390021, Gujarat"],
    },
    {
      label: "Mumbai Operations",
      lines: ["1/13 Damji Nenshi Estate", "Station Road, Bhandup (West)", "Mumbai 400078"],
    },
  ],
  apps: {
    crm: "crm.ppsanatams.online",
    whatsapp: "whatsapp.ppsanatams.cloud",
  },
} as const;

export const nav = [
  { label: "Bio-Bitumen", href: "/bio-bitumen" },
  { label: "Industrial Consulting", href: "/industrial-consulting" },
  { label: "Software", href: "/it-software" },
  { label: "Capital Markets", href: "/capital-market" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Market Intel", href: "/market-intelligence" },
  { label: "Contact", href: "/contact" },
] as const;

/** Headline metrics used across hero / stats. */
export const stats = [
  { value: 25, suffix: "+", label: "Years in bitumen", sub: "Since 2001" },
  { value: 9, suffix: "", label: "Plants commissioned", sub: "Across India" },
  { value: 150, suffix: "K", label: "Contact database", sub: "Verified, pan-India" },
  { value: 18, suffix: "", label: "States covered", sub: "Active network" },
] as const;

export const keyFacts = [
  "25+ years in the bitumen industry (since 2001)",
  "9 bitumen plants commissioned across India",
  "17 years as MCA-registered Company Director",
  "Founder - Omnipotent Industries Ltd (BSE-Listed, IPO 2020)",
  "150,000-contact pan-India industry database, 18 states",
  "Pride of India Icon 2021 - Best Fast-Growing Business",
] as const;

/** The three business verticals. */
export const verticals = [
  {
    id: "A",
    key: "plant-pmc",
    title: "Plant PMC / EPC",
    sub: "YUGA",
    href: "/bio-bitumen",
    accent: "amber",
    summary:
      "End-to-end consultancy that takes a bitumen, bio-bitumen, plastic-to-fuel or tyre-to-oil plant from feasibility to commercial production.",
    points: ["Bio-Bitumen · Plastic-to-Fuel · RPO", "Emulsion · PMB · CRMB · Decanter · Blown", "DPR → licenses → commissioning → market support"],
  },
  {
    id: "B",
    key: "software",
    title: "Technology & Software",
    sub: "AI Products",
    href: "/it-software",
    accent: "cyan",
    summary:
      "In-house AI software that runs our own operations - now offered to clients to sharpen market intelligence and grow sales.",
    points: ["AI Bitumen Sales Dashboard", "Bitumen CRM · Excel Maker AI · DialSync", "WhatsApp Bulk · Automated Market Reports"],
  },
  {
    id: "C",
    key: "capital",
    title: "Capital Markets & Fundraising",
    sub: "Seed → IPO",
    href: "/capital-market",
    accent: "amber",
    summary:
      "Full-spectrum fundraising - from the first seed cheque to a public listing - backed by real, first-hand BSE IPO experience.",
    points: ["Seed · Series A/B/C · IPO / Listing", "Bank loans · Govt subsidy & grants", "Valuation · DPR/CMA · Data room & PIM"],
  },
] as const;

/* ----------------------------- Bio-Bitumen ----------------------------- */
export const plantTypes = [
  {
    name: "Bitumen Product Plants",
    code: "A1",
    desc: "Emulsion, PMB, CRMB, Decanter and Blown / Oxidised Bitumen production lines.",
    items: ["Bitumen Emulsion", "PMB - Polymer Modified", "CRMB - Crumb Rubber Modified", "Bitumen Decanter", "Blown / Oxidised"],
  },
  {
    name: "Pyrolysis Bio-Bitumen Plant",
    code: "A2",
    desc: "Agro-waste → pyrolysis → bio-oil blended 15-30% with VG-30 to CSIR-CRRI (KrishiBind) spec. NHAI/MoRTH compliant.",
    items: ["CSIR-CRRI KrishiBind aligned", "15-30% bio-replacement", "NHAI / MoRTH certified"],
  },
  {
    name: "Plastic-to-Fuel Plant",
    code: "A3",
    desc: "Waste plastic converted via pyrolysis to usable fuel/oil - aligned with India's plastic-waste (EPR) push.",
    items: ["EPR aligned", "Waste-to-energy", "Usable fuel / oil output"],
  },
  {
    name: "RPO - Tyre / Rubber-to-Oil",
    code: "A4",
    desc: "End-of-life tyres and rubber converted via pyrolysis to Recovered Pyrolysis Oil, carbon black and steel.",
    items: ["Recovered Pyrolysis Oil", "Carbon black + steel", "Circular economy"],
  },
] as const;

export const bioProcess = [
  {
    step: "01",
    title: "Raw Material & Pelletization",
    desc: "Agro-waste - rice straw, groundnut shells, cotton stalk, bagasse - sourced within 50-100 km and pelletized.",
  },
  {
    step: "02",
    title: "Pyrolysis & Bio-Oil Extraction",
    desc: "Biomass heated to 450-550°C in oxygen-free reactors; bio-oil yield of 20-25%.",
  },
  {
    step: "03",
    title: "Refining & Blending",
    desc: "Oxidation at 230-250°C, then blended 15-30% with VG-30 per CSIR-CRRI specification.",
  },
  {
    step: "04",
    title: "Testing, Certification & Market",
    desc: "Penetration, softening, ductility and rutting tests; NHAI/MoRTH certification; supply to contractors, PWD & NHAI.",
  },
] as const;

export const capacities = [
  { cap: "5 MT/Day", inv: "₹1.5 Cr", best: "Trial / Entry-level" },
  { cap: "10 MT/Day", inv: "₹3.0 Cr", best: "Small MSME / Individual" },
  { cap: "15 MT/Day", inv: "₹4.5 Cr", best: "MSME Scale" },
  { cap: "20 MT/Day", inv: "₹8.0 Cr", best: "Medium Scale" },
  { cap: "25 MT/Day", inv: "₹10.0 Cr", best: "Medium-Large Scale" },
  { cap: "30-50 MT/Day", inv: "₹12-16 Cr", best: "Commercial / Industrial" },
  { cap: "75 / 100 MT/Day", inv: "Custom", best: "Large industrial" },
] as const;

/* ----------------------------- Industrial Consulting ----------------------------- */
export const sevenPhases = [
  { n: "01", t: "Project Preparation", d: "Feasibility, DPR, financial modelling (ROI/IRR/break-even), Bank DPR + CMA, subsidy identification." },
  { n: "02", t: "Land & Civil", d: "Site selection, location scoring (biomass + logistics + power + subsidy), layout design, civil supervision." },
  { n: "03", t: "Regulatory & Compliance", d: "Factory/Fire/PESO, PCB CTE/CTO, EIA, GST/Udyam, NHAI/MoRTH empanelment - 25+ licence types." },
  { n: "04", t: "Machinery & Plant Setup", d: "Verified OEM vendor network, best-price negotiation, installation, commissioning, quality lab." },
  { n: "05", t: "Technology & Production", d: "4-stage bio-bitumen process; product mix Emulsion / CRMB / PMB / VG-30 / Bio-Modified VG-30." },
  { n: "06", t: "HR & Training", d: "Recruitment, operator training (pyrolysis, blending, QC), safety & environmental compliance." },
  { n: "07", t: "Market & Sales Support", d: "Buyer network (2,758 contractors + 994 traders + 360 importers), tender tracking, 6-month hand-holding." },
] as const;

export const products = [
  { name: "Bitumen Emulsion", spec: "Cold-mix & tack coat", industries: "Road maintenance · PWD" },
  { name: "PMB", spec: "Polymer Modified Bitumen - IS 15462:2019", industries: "Highways · heavy traffic" },
  { name: "CRMB", spec: "Crumb Rubber Modified", industries: "NHAI · durable surfacing" },
  { name: "Blown Bitumen", spec: "Oxidised grades", industries: "Roofing · industrial" },
  { name: "Decanter Systems", spec: "Recovery & separation", industries: "Refinery · reprocessing" },
] as const;

export const clientTypes = [
  { t: "New Investor", d: "No prior experience - full A-to-Z setup.", inv: "₹2-6 Cr" },
  { t: "Existing Bitumen Co.", d: "Add a bio-bitumen line to current operations.", inv: "₹80 L-2 Cr" },
  { t: "Pyrolysis Operator", d: "Convert existing bio-oil into bio-bitumen.", inv: "₹40-80 L" },
  { t: "Biomass Pellet Maker", d: "Add pyrolysis + blending downstream.", inv: "₹1-2 Cr" },
  { t: "Agro / CSIR Licensee", d: "Lowest raw-material cost, highest margins.", inv: "₹1.5-4 Cr" },
] as const;

export const fees = [
  { service: "Detailed Project Report (DPR)", fee: "₹2-5 Lakh" },
  { service: "Plant Setup Consulting", fee: "₹8-25 Lakh" },
  { service: "Monthly Retainer (post-setup)", fee: "₹1-2 Lakh / mo" },
  { service: "Bank DPR + Financial Model", fee: "₹1-2 Lakh" },
] as const;

/* ----------------------------- Software ----------------------------- */
export const software = [
  {
    name: "AI Bitumen Sales Dashboard",
    tag: "PMC / Enterprise",
    desc: "Enterprise bitumen trading & intelligence platform - pricing, CRM, market signals and logistics in one interface.",
    features: ["24-month AI price forecast", "10-signal market composite", "Vessel & port tracking", "Instant PDF quotes"],
    metric: "80+ pages · 60+ engines · 25 APIs",
  },
  {
    name: "PPS Bitumen CRM",
    tag: "crm.ppsanatams.online",
    desc: "WhatsApp-integrated CRM built for bitumen: two-way chat, AI lead scoring, Kanban pipeline and bulk campaigns.",
    features: ["AI HOT/WARM/COLD scoring", "6-stage Kanban pipeline", "English/Hindi AI assistant", "Live price board"],
    metric: "Tested to 4,000+ contacts",
  },
  {
    name: "Master Excel Maker AI",
    tag: "Data Engine",
    desc: "Turns messy Excel/CSV into clean, deduplicated, AI-scored contact lists with natural-language filtering.",
    features: ["E.164 phone standardisation", "3-pass dedup", "AI lead scoring 0-100", "11-sheet pro output"],
    metric: "Batch folder processing",
  },
  {
    name: "WhatsApp Bulk Messaging",
    tag: "whatsapp.ppsanatams.cloud",
    desc: "Multi-account bulk messaging to thousands of groups with media, anti-ban protection and resume/dedup.",
    features: ["Multi-account management", "Anti-ban delays", "Stop / resume / dedup", "AI group categorisation"],
    metric: "Tested 1,000+ groups",
  },
  {
    name: "DialSync",
    tag: "Call Analytics",
    desc: "Auto-captures agent calls, runs AI transcripts & insight extraction, and surfaces a live manager dashboard.",
    features: ["Auto call capture", "AI transcripts & objections", "Agent health alerts", "OTA app updates"],
    metric: "n8n + Gemini pipeline",
  },
  {
    name: "PACPL Market Report",
    tag: "Automated Research",
    desc: "Automated daily Nifty/BankNifty pre-market & closing PDF + image reports delivered to WhatsApp groups.",
    features: ["8:45 AM pre-market", "4:00 PM closing", "FII/DII + sector flows", "NSE-holiday aware"],
    metric: "Self-monitoring",
  },
] as const;

/* ----------------------------- Capital Markets ----------------------------- */
export const fundStages = [
  { t: "Seed Funding", d: "Early capital to start and prove the venture; founder/angel structuring." },
  { t: "Series A / B / C", d: "Scaling capital from angels, VCs and PE; cap-table design and dilution planning." },
  { t: "Strategic / JV", d: "Corporate and joint-venture funding structures." },
  { t: "IPO & Listing", d: "SME & Main-Board readiness - done before (Omnipotent, BSE 2020, fully subscribed)." },
] as const;

export const loans = [
  { scheme: "CGTMSE (collateral-free)", rate: "~12%", max: "₹5 Cr", collateral: "None" },
  { scheme: "SBI MSME Term Loan", rate: "~11.5%", max: "₹10 Cr", collateral: "Plant & Machinery" },
  { scheme: "Bank of Baroda MSME", rate: "~11%", max: "₹25 Cr", collateral: "Fixed Assets" },
  { scheme: "SIDBI Direct Lending", rate: "~10.5%", max: "₹15 Cr", collateral: "Plant & Machinery" },
  { scheme: "State Subsidy + Loan", rate: "~9%", max: "₹20 Cr", collateral: "Land + Building" },
] as const;

export const finPrep = [
  "5-year financial models - P&L, Balance Sheet, Cash Flow, ROI, IRR, break-even, sensitivity",
  "Business / equity valuation - DCF, comparable-company and asset-based methods",
  "Detailed Project Report (DPR) + CMA data in bank format",
  "Pitch deck (14-slide), Project Information Memorandum & investor data room",
  "Term sheet & Shareholder Agreement templates, cap table",
  "Due-diligence preparation - financial, legal and technical",
] as const;

/* ----------------------------- About / Founder ----------------------------- */
export const career = [
  { yr: "2001-06", t: "Southern Asphalt, Mangalore", d: "Production Manager → General Manager" },
  { yr: "2006-12", t: "Tiki Tar Industries, Baroda", d: "GM, South India Regional Head" },
  { yr: "2013-14", t: "Krush Tar Industries", d: "CEO; 1st fully-automatic Emulsion plant in Karnataka" },
  { yr: "2016", t: "Omnipotent - Panvel", d: "1st Decanter plant in Panvel, Maharashtra" },
  { yr: "2018-19", t: "Omnipotent - Kandla & Karjan", d: "Gujarat & Vadodara plants" },
  { yr: "2020", t: "Omnipotent Industries - BSE IPO", d: "Fully subscribed; 11 JVs; 1.2 Lakh MT/yr" },
  { yr: "2024", t: "PPS Anantams operational", d: "CSIR-CRRI bio-bitumen consulting launched" },
  { yr: "2025-26", t: "Teknobit - Mathura & Hubli", d: "Decanter + Emulsion · PMB plant (ongoing)" },
] as const;

export const partnerships = [
  { p: "Getka Energy Trading LLC (USA)", d: "VG-30 supply up to 2.4 Lakh MT/year (2024)" },
  { p: "UK Bitumen Supply Contract", d: "1.2 Lakh MT (2023, via PS Enterprises)" },
  { p: "Petromina / Bepco / Hyundai Korea", d: "20,000 MT bulk purchase (2020)" },
] as const;

/* ----------------------------- Case Studies ----------------------------- */
export const caseStudies = [
  {
    title: "5 TPD PMB-40 Bio-Bitumen Plant",
    place: "Bahadurgarh, Haryana (Delhi-NCR)",
    scope: "Full PMC lifecycle - DPR → engineering → procurement → commissioning → 12-month hand-holding.",
    detail: "PMB-40 (IS 15462:2019), 1,250 MT/yr; CGTMSE-backed with Haryana PADMA / CLCSS subsidies.",
    tag: "Live · YUGA PMC",
  },
  {
    title: "5 TPD Bio-Bitumen Plant",
    place: "Malkangiri, Odisha",
    scope: "Second plant in the same client's planned pan-India rollout.",
    detail: "Structured under Odisha IPR 2022 Zone-A incentives.",
    tag: "Live · YUGA PMC",
  },
  {
    title: "Bio-Bitumen + Plastic-to-Fuel",
    place: "Odisha",
    scope: "Combined bio-modified bitumen and plastic-to-fuel project.",
    detail: "Dual-grade output design.",
    tag: "Live · Dual-grade",
  },
  {
    title: "Carbon-Credit Structuring",
    place: "Pan-India client",
    scope: "Puro.earth MRV carbon-credit pathway and full project business research.",
    detail: "Additional revenue stream design.",
    tag: "Research",
  },
] as const;

export const reportLibrary = [
  "Bio-Modified Bitumen DPRs - 20 MT and 20 TPD (agro-waste pyrolysis)",
  "Tyre / Rubber Pyrolysis (RPO) Plant DPR - 20 TPD",
  "Feasibility & financial reports across all capacities (5-100 MT/day)",
  "PAN-India location analysis & biomass feedstock deep-dives",
  "Investor presentations, founder business cases & payback models",
] as const;

/* ----------------------------- Market Intelligence ----------------------------- */
export const marketOpportunity = [
  { stat: "1st", label: "India = first country to commercially produce Bio-Bitumen (Jan 2026)" },
  { stat: "49%", label: "of India's bitumen is imported - ~₹25,000 Cr / year" },
  { stat: "₹4,500 Cr+", label: "potential annual saving from 15-30% bio-replacement" },
  { stat: "130-216", label: "new bio-bitumen plants needed in 5-7 years" },
  { stat: "15%", label: "NHAI mandate: bio-bitumen in all NH projects by 2030" },
  { stat: "25%", label: "capital subsidy under MNRE Waste-to-Wealth Mission" },
] as const;

export const impact = [
  "Reduces stubble burning - ~2.5 MT crop residue used per MT of bio-bitumen",
  "Carbon credits - ~0.35 t CO₂ saved per MT (≈ ₹2,500+/MT extra revenue)",
  "Cuts import dependency - saves ~₹38,000+ per MT in bitumen imports",
  "Creates 30-50+ rural jobs per plant; direct farmer income for agro-waste",
] as const;

export const statesCovered = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Gujarat", "Haryana",
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha",
  "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "West Bengal",
] as const;

export const faqs = [
  {
    q: "What is Bio-Bitumen?",
    a: "Road-grade bitumen where 15-30% of conventional VG-30 is replaced with bio-oil from agro-waste via pyrolysis (450-550°C). Meets NHAI/MoRTH specs with equal or better road performance.",
  },
  {
    q: "Is the technology proven?",
    a: "Yes. CSIR-CRRI completed 3-year field trials on NH-44 showing ~22% less rutting and ~18% better fatigue life vs conventional VG-30. India commercially launched bio-bitumen in January 2026.",
  },
  {
    q: "How much investment is needed?",
    a: "A 10 MT/Day plant ≈ ₹3 Crore; 25 MT/Day ≈ ₹10 Crore. Varies with capacity, land and stages. 25% capital subsidy available under MNRE.",
  },
  {
    q: "Can I get a bank loan?",
    a: "Yes - CGTMSE collateral-free up to ₹5 Cr (~12%); MSME term loans up to ₹25 Cr. We prepare bankable DPR + CMA data to maximise approval.",
  },
  {
    q: "Do you help find buyers?",
    a: "Yes - a live database of 2,758 contractors, 994 traders and direct NHAI/PWD contacts across 18 states; active sales support for 6 months post-commissioning.",
  },
  {
    q: "What makes PPS Anantams different?",
    a: "The founder has personally commissioned 9 plants - not a desk consultant - backed by a live 150,000-contact buyer network and CSIR-CRRI aligned technology.",
  },
] as const;
