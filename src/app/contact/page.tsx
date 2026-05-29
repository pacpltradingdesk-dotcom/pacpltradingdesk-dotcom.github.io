import type { Metadata } from "next";
import { Phone, Mail, MapPin, Globe, MonitorSmartphone } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/page/ContactForm";
import { NoiseOverlay } from "@/components/visual/Backdrop";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to YUGA / PPS Anantams about bio-bitumen plants, AI software or capital. Offices in Vadodara and Mumbai.",
};

export default function ContactPage() {
  return (
    <>
      <NoiseOverlay />
      <PageHero
        eyebrow="Contact"
        title="Let's build the future of infrastructure."
        intro="Whether you're planning a plant, evaluating software, or raising capital - start the conversation. We respond within one business day."
        accent="amber"
        image="contactHero"
      />

      <section className="pb-[var(--space-section)] pt-4">
        <div className="maxw container-x grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <div className="grid content-start gap-5">
            <Reveal>
              <div className="rounded-3xl border border-[var(--color-line)] p-7">
                <h3 className="font-display text-lg font-semibold">{company.founder}</h3>
                <p className="text-sm text-[var(--color-amber)]">{company.founderTitle}</p>
                <div className="mt-6 space-y-3 text-sm">
                  {company.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      data-cursor="hover"
                      className="flex items-center gap-3 text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    >
                      <Phone size={15} className="text-[var(--color-amber)]" /> {p}
                    </a>
                  ))}
                  {company.emails.map((e) => (
                    <a
                      key={e}
                      href={`mailto:${e}`}
                      data-cursor="hover"
                      className="flex items-center gap-3 text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    >
                      <Mail size={15} className="text-[var(--color-amber)]" /> {e}
                    </a>
                  ))}
                  <a
                    href={`https://${company.web}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="flex items-center gap-3 text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  >
                    <Globe size={15} className="text-[var(--color-amber)]" /> {company.web}
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {company.offices.map((o, i) => (
                <Reveal key={o.label} index={i}>
                  <div className="h-full rounded-3xl border border-[var(--color-line)] p-7">
                    <MapPin size={18} className="text-[var(--color-cyan)]" />
                    <h4 className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-faint)]">{o.label}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                      {o.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal index={2}>
              <div className="rounded-3xl border border-[var(--color-line)] p-7">
                <MonitorSmartphone size={18} className="text-[var(--color-cyan)]" />
                <h4 className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-faint)]">Software Access</h4>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  <a href={`https://${company.apps.crm}`} target="_blank" rel="noopener noreferrer" data-cursor="hover" className="text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                    CRM · {company.apps.crm}
                  </a>
                  <a href={`https://${company.apps.whatsapp}`} target="_blank" rel="noopener noreferrer" data-cursor="hover" className="text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                    WhatsApp · {company.apps.whatsapp}
                  </a>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--color-line)] pt-5 text-[11px] uppercase tracking-wider text-[var(--color-faint)]">
                  <span>CIN {company.cin}</span>
                  <span>·</span>
                  <span>GST {company.gst}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal index={1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
