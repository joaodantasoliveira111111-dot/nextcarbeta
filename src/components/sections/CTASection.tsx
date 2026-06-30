"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const CTASection = () => {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-[var(--bg)]" id="cta">
      <div className="container-max max-w-2xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 700, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h2 className="text-display-lg text-[var(--fg)] leading-[1.1] tracking-tight text-balance">
            Pronto para encontrar seu próximo carro sem estresse?
          </h2>
          <p className="text-body-lg text-[var(--fg-secondary)] max-w-md mx-auto leading-relaxed">
            Economize horas de pesquisa. Deixe que nossos especialistas varram o mercado e façam todo o trabalho pesado por você.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("#diagnostico")}
              className="btn-primary group w-full sm:w-auto"
            >
              Começar diagnóstico gratuito
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <button
              onClick={() => scrollTo("#como-funciona")}
              className="btn-ghost w-full sm:w-auto"
            >
              Como funciona
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};