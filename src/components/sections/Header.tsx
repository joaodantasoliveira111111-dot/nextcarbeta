"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
];

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "YOUR_META_PIXEL_ID";
const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-XXXXXXXXXX";

const TrackingScripts = () => {
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    type FbqFunction = {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue: unknown[];
      loaded?: boolean;
      version?: string;
      push: (...args: unknown[]) => void;
    };

    const initMetaPixel = () => {
      const f = window;
      const b = document;
      const e = "script";
      const v = "https://connect.facebook.net/en_US/fbevents.js";
      if (typeof f.fbq === "function") return;
      const fbq = function (...args: unknown[]) {
        if (fbq.callMethod) fbq.callMethod(...args);
        else fbq.queue.push(args);
      } as FbqFunction;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = "2.0";
      fbq.queue = [];
      f.fbq = fbq;
      if (!f._fbq) f._fbq = fbq;
      const t = b.createElement(e);
      t.async = true;
      t.src = v;
      const s = b.getElementsByTagName(e)[0];
      s.parentNode?.insertBefore(t, s);
    };

    initMetaPixel();
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");

    const noscriptImg = document.createElement("img");
    noscriptImg.height = 1;
    noscriptImg.width = 1;
    noscriptImg.style.display = "none";
    noscriptImg.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
    noscriptImg.alt = "";
    document.body.appendChild(noscriptImg);

    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_MEASUREMENT_ID);

    return () => {
      document.body.removeChild(noscriptImg);
      document.head.removeChild(gaScript);
    };
  }, []);

  return null;
};

const scrollTo = (href: string) => {
  const el = document.getElementById(href.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TrackingScripts />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-strong shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container-max flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5"
            aria-label="NextCar"
          >
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-primary)] flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <span className="font-display font-bold text-base text-[var(--fg)] tracking-tight">
              NextCar
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-caption text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#diagnostico")}
              className="btn-primary"
            >
              Começar diagnóstico
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            className="md:hidden p-2 text-[var(--fg-secondary)] hover:text-[var(--fg)] focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden border-t border-[var(--border-subtle)] px-4 py-6 glass-strong"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="px-3 py-3 text-body text-[var(--fg-secondary)] hover:text-[var(--fg)] rounded-md hover:bg-[var(--color-bg-tertiary)] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => scrollTo("#diagnostico")}
                  className="mt-3 btn-primary w-full"
                >
                  Começar diagnóstico
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue: unknown[];
      loaded?: boolean;
      version?: string;
      push: (...args: unknown[]) => void;
    };
    dataLayer: unknown[];
    _fbq: unknown;
  }
}