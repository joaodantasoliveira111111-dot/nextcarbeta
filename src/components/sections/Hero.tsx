"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="max-w-xl">
            <motion.div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gray-50 border border-gray-200 mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span className="text-xs text-gray-500 font-medium">Recife e Região Metropolitana</span>
            </motion.div>

            <motion.h1
              className="font-display text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-bold text-gray-900 leading-[1.08] tracking-tight mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Pare de procurar carro.
              <br />
              Nós fazemos isso por você.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Você responde algumas perguntas e nossa equipe pesquisa o mercado para encontrar as melhores opções para você. Gratuito e sem compromisso.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
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
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Leva menos de 2 minutos
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-[10px] text-gray-400 font-mono">diagnóstico.nextcar.app</span>
                </div>
              </div>

              <div className="p-8 md:p-10 bg-white">
                <div className="max-w-sm mx-auto space-y-8">
                  <div>
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">ETAPA 1 DE 6</div>
                    <div className="h-1 bg-gray-100 rounded-full">
                      <div className="h-1 w-1/6 bg-blue-600 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Qual seu nome?
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Seu nome completo"
                        className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-[10px] outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-colors bg-white text-gray-900 placeholder-gray-400"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div />
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-50 border border-gray-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span className="text-xs text-gray-500">Avançar</span>
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                      Seus dados estão seguros
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center">
              <span className="font-display font-bold text-sm text-orange-500">Grátis</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </motion.div>
    </section>
  );
};
