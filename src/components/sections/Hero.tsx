"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, Shield, ArrowRight } from "lucide-react";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: Copy ──────────────────────── */}
          <div className="max-w-xl">
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] border border-gray-200 bg-gray-50 mb-8"
              {...fadeUp(0)}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs text-gray-500 font-medium tracking-wide">
                Consultoria Automotiva Inteligente
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-gray-900 leading-[1.06] tracking-[-0.025em] mb-6"
              {...fadeUp(0.08)}
            >
              Pare de procurar
              <br />
              carro.{" "}
              <span className="text-gray-400">Nós fazemos</span>
              <br />
              <span className="text-gray-400">isso por você.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-md"
              {...fadeUp(0.16)}
            >
              Responda algumas perguntas e nossa equipe pesquisa o mercado
              para encontrar as melhores opções. Gratuito e sem compromisso.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-10"
              {...fadeUp(0.24)}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("diagnostic")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[11px] bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-all duration-200 shadow-sm"
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
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-[11px] border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >
                Como funciona
              </button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400"
              {...fadeUp(0.32)}
            >
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Menos de 2 min
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                100% gratuito
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                Sem compromisso
              </span>
            </motion.div>
          </div>

          {/* ── Right: Product Mockup ───────────── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative shapes for glassmorphism depth */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-blue-600/[0.04]" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-orange-500/[0.05]" />
            <div className="absolute top-1/2 right-0 w-16 h-16 rounded-full bg-blue-600/[0.03]" />

            <div className="relative glass-card rounded-2xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50/80 border-b border-gray-200/60">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-white border border-gray-200/60">
                    <span className="text-[10px] text-gray-400 font-mono">
                      nextcar.com.br/diagnostico
                    </span>
                  </div>
                </div>
              </div>

              {/* App content */}
              <div className="p-8 md:p-10 bg-white">
                <div className="max-w-xs mx-auto">
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                        Etapa 1 de 6
                      </span>
                      <span className="text-[10px] text-gray-300 font-mono">
                        17%
                      </span>
                    </div>
                    <div className="h-[3px] bg-gray-100 rounded-full">
                      <div className="h-[3px] w-[17%] bg-blue-600 rounded-full transition-all" />
                    </div>
                  </div>

                  {/* Question */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1.5 tracking-tight">
                      Qual seu nome?
                    </h3>
                    <p className="text-xs text-gray-400">
                      Para personalizar sua experiência
                    </p>
                  </div>

                  {/* Input */}
                  <div className="mb-6">
                    <div className="w-full px-3.5 py-3 text-sm border border-gray-200 rounded-[10px] bg-white text-gray-900">
                      João Silva
                      <span className="inline-block w-[2px] h-4 bg-blue-600 ml-0.5 animate-pulse align-text-bottom" />
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-end">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-orange-500 text-white text-xs font-semibold">
                      Continuar
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Security note */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-300">
                      <Shield className="w-3 h-3 text-blue-500" />
                      Seus dados estão protegidos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
