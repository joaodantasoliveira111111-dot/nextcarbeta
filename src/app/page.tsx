"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Comparison } from "@/components/sections/Comparison";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DiagnosticForm } from "@/components/sections/DiagnosticForm";
import { Differentials } from "@/components/sections/Differentials";
import { Coverage } from "@/components/sections/Coverage";
import { FAQs } from "@/components/sections/FAQs";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "YOUR_META_PIXEL_ID";
const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-XXXXXXXXXX";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#cta" },
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
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <TrackingScripts />
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8" aria-label="Navegação principal">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.a
              href="#"
              className="flex items-center gap-3 z-50"
              aria-label="NextCar - Início"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                  <line x1="12" y1="2" x2="12" y2="6"/>
                  <line x1="12" y1="18" x2="12" y2="22"/>
                  <line x1="2" y1="12" x2="6" y2="12"/>
                  <line x1="18" y1="12" x2="22" y2="12"/>
                </svg>
              </div>
              <div>
                <span className={cn(
                  "font-display text-lg font-bold tracking-tight transition-colors",
                  isScrolled ? "text-slate-800" : "text-white"
                )}>
                  NextCar
                </span>
                <span className={cn(
                  "block text-[10px] font-medium leading-tight transition-colors",
                  isScrolled ? "text-slate-400" : "text-white/60"
                )}>
                  Consultoria Automotiva
                </span>
              </div>
            </motion.a>

            <motion.div
              className={cn(
                "hidden md:flex items-center gap-8",
                isScrolled ? "text-slate-600" : "text-white/80"
              )}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={cn(
                    "font-medium text-sm transition-colors relative",
                    isScrolled ? "hover:text-blue-600" : "hover:text-white"
                  )}
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="hidden md:flex items-center gap-3 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => scrollToSection("#diagnostic")}
                className={cn(
                  "px-5 py-2.5 rounded-full font-display font-semibold text-sm transition-all duration-300",
                  "bg-orange-500 text-white hover:bg-orange-600 shadow-orange/30 hover:shadow-orange-lg"
                )}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                Começar Diagnóstico
                <ArrowRight className="w-4 h-4 inline ml-1.5" />
              </motion.button>
            </motion.div>

            <motion.button
              className={cn(
                "md:hidden z-50 p-2 rounded-lg border transition-colors",
                isScrolled
                  ? "border-slate-200 text-slate-700 hover:bg-slate-100"
                  : "border-white/20 text-white hover:bg-white/10"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>

          <motion.div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300",
              isMobileMenuOpen ? "max-h-96 opacity-100 pb-6 pt-2" : "max-h-0 opacity-0"
            )}
            initial={false}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={cn(
                    "px-4 py-3 rounded-xl transition-all text-left font-medium",
                    isScrolled
                      ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => scrollToSection("#diagnostic")}
                className="mt-2 mx-2 px-4 py-3 rounded-xl bg-orange-500 text-white font-display font-semibold text-sm text-center"
                whileTap={{ scale: 0.97 }}
              >
                Começar Diagnóstico Gratuito
              </motion.button>
            </div>
          </motion.div>
        </nav>
      </motion.header>
    </>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all",
        "bg-blue-600 text-white hover:bg-blue-700"
      )}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Voltar ao topo"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <Comparison />
        <HowItWorks />
        <DiagnosticForm />
        <Differentials />
        <Coverage />
        <FAQs />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
