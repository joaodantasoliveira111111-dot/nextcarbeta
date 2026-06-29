"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="section-padding bg-white border-b border-gray-200" id="cta">
      <div className="container-max text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Pare de perder tempo pesquisando carro
          </h2>
          <p className="text-gray-500 mb-8">
            A NextCar faz esse trabalho por você. Diagnóstico gratuito em menos de 2 minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => document.getElementById("diagnostic")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-[10px] bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              Começar diagnóstico gratuito
            </button>
            <button
              onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-[10px] border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Como funciona
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
