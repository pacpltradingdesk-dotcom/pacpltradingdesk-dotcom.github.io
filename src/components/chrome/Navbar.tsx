"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { company, nav } from "@/lib/site";
import { YugaMark } from "@/components/ui/YugaMark";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[130] transition-all duration-500",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div
          className={cn(
            "maxw container-x flex items-center justify-between rounded-2xl transition-all duration-500",
            scrolled && "glass mx-3 px-5 py-3 md:mx-auto",
          )}
        >
          <Link href="/" className="group relative z-10 flex items-center gap-2.5" data-cursor="hover">
            <YugaMark className="h-7 w-auto transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold tracking-tight text-[var(--color-ink)]">{company.brand}</span>
              <span className="hidden text-[10px] uppercase tracking-[0.25em] text-[var(--color-faint)] sm:inline">
                {company.short}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.slice(0, 7).map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-cursor="hover"
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                    active ? "text-[var(--color-ink)]" : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--color-raised)] ring-1 ring-[var(--color-line)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              data-cursor="hover"
              className="hidden rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-void)] transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Free Consultation
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative z-10 grid h-10 w-10 place-items-center rounded-full ring-1 ring-[var(--color-line)] lg:hidden"
              aria-label="Toggle menu"
              data-cursor="hover"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-[var(--color-void)]/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-x flex h-full flex-col justify-center gap-2 pt-20">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    className="font-display block py-2 text-3xl font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-6 inline-flex w-fit rounded-full bg-[var(--color-amber)] px-6 py-3 font-medium text-[var(--color-void)]"
              >
                Free Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
