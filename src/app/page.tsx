"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Hero,
  SocialProofStrip,
  HowItWorks,
  Comparison,
  ProductShowcase,
  Differentials,
  DiagnosticForm,
  FAQs,
  CTASection,
  Footer,
} from "@/components/sections";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "YOUR_META_PIXEL_ID";
const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-XXXXXXXXXX";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
];

const TrackingScripts = () => {
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const initMetaPixel = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const f = window as any;
      const b = document;
      const e = "script";
      const v = "https://connect.facebook.net/en_US/fbevents.js";
      if (f.fbq) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fbq: any = function (...args: any[]) {
        if (fbq.callMethod) fbq.callMethod(...args);
        else fbq.queue.push(args);
      };
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq("init", META_PIXEL_ID);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq("track", "PageView");

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

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <TrackingScripts />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-header shadow-xs py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5"
            aria-label="NextCar"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span className="font-display font-bold text-base text-gray-900 tracking-tight">
              NextCar
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#diagnostic")}
              className="px-4 py-2.5 rounded-[10px] bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors duration-200 shadow-xs"
            >
              Começar diagnóstico
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-500 hover:text-gray-950 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-gray-200/80 px-4 py-4 mt-3 bg-white"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-950 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => scrollTo("#diagnostic")}
                className="mt-3 px-4 py-3 rounded-[10px] bg-orange-500 text-white text-sm font-semibold text-center hover:bg-orange-600 transition-colors shadow-xs"
              >
                Começar diagnóstico
              </button>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    dataLayer: unknown[];
    _fbq: unknown;
  }
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProofStrip />
        <HowItWorks />
        <Comparison />
        <ProductShowcase />
        <Differentials />
        <DiagnosticForm />
        <FAQs />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
