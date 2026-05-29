import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/site";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Preloader } from "@/components/chrome/Preloader";
import { Cursor } from "@/components/chrome/Cursor";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";
import { Navbar } from "@/components/chrome/Navbar";
import { Footer } from "@/components/chrome/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Editorial italic accent — scoped to taglines/emphasis only (text effect
// borrowed from the design bundle's `.edit` face). Not Fraunces/Instrument.
const editorial = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.princeshah.com"),
  title: {
    default: `${company.brand} - ${company.tagline}`,
    template: `%s · ${company.brand}`,
  },
  description: company.oneLiner,
  keywords: [
    "Bio-Bitumen", "Bitumen PMC", "CSIR-CRRI KrishiBind", "PMB", "CRMB",
    "Plastic to Fuel", "Pyrolysis", "Bitumen plant consultant India",
    "Capital markets", "IPO advisory", "PPS Anantams", "YUGA",
  ],
  authors: [{ name: company.founder }],
  openGraph: {
    title: `${company.brand} - ${company.tagline}`,
    description: company.oneLiner,
    type: "website",
    siteName: company.brand,
    images: ["/yuga-logo.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${editorial.variable}`}>
      <body className="cursor-none-fine antialiased">
        <Preloader />
        <Cursor />
        <ScrollProgress />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
