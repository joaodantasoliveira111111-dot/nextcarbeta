"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding bg-white" id="cta">
      <div className="container-max max-w-2xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="space-y-6"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-[1.1] tracking-tight text-balance">
            Pronto para encontrar seu próximo carro sem estresse?
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
            Economize horas de pesquisa. Deixe que nossos especialistas varram o mercado e façam todo o trabalho pesado por você.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() =>
                document
                  .getElementById("diagnostic")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-[11px] bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-all duration-200 shadow-sm"
            >
              Começar diagnóstico gratuito
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("como-funciona")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 rounded-[11px] border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              Como funciona
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
