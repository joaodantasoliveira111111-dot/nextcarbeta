"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Search, CheckCircle, BarChart3, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-400/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 w-full pt-24 pb-16 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-xs font-medium text-white/70">
                  Atendendo Recife e Região Metropolitana
                </span>
              </motion.div>

              <motion.h1
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Pare de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                  procurar carro
                </span>
                <br />
                Nós fazemos isso por você.
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-white/70 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Você responde algumas perguntas rápidas e nossa equipe encontra
                as melhores opções disponíveis nas concessionárias parceiras de
                Recife e Região Metropolitana.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <motion.button
                  onClick={() => document.getElementById("diagnostic")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-display font-semibold text-sm uppercase tracking-wide shadow-orange hover:bg-orange-600 hover:shadow-orange-lg transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Começar Diagnóstico Gratuito
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-medium text-sm backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Como Funciona
                </motion.button>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 text-sm text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Leva menos de 2 minutos. Sem custo. Sem compromisso.</span>
              </motion.div>
            </div>

            <motion.div
              className="hidden lg:block relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-orange-500/10 rounded-3xl blur-xl" />

                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-3 py-1 rounded-md bg-white/5 text-[10px] text-white/40 font-mono">
                        app.nextcar.com/diagnostic
                      </div>
                    </div>
                  </div>

                  <div className="flex h-80">
                    <div className="w-36 bg-white/5 border-r border-white/10 p-3 space-y-2">
                      {["Dashboard", "Diagnóstico", "Ofertas", "Perfil"].map((item, i) => (
                        <div
                          key={item}
                          className={`px-3 py-2 rounded-lg text-xs ${
                            i === 1
                              ? "bg-blue-500/20 text-blue-300 font-medium"
                              : "text-white/40 hover:text-white/60"
                          } transition-colors`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="flex-1 p-4 space-y-3">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-white/80">Veículos Compatíveis</h3>
                        <div className="flex items-center gap-1 text-[10px] text-orange-400 font-medium">
                          <BarChart3 className="w-3 h-3" />
                          12 encontrados
                        </div>
                      </div>

                      {[
                        { name: "Honda HR-V 2024", price: "R$ 149.900", match: "98%", color: "from-blue-400 to-blue-500" },
                        { name: "Toyota Corolla 2024", price: "R$ 159.900", match: "95%", color: "from-orange-400 to-orange-500" },
                        { name: "Jeep Compass 2023", price: "R$ 139.900", match: "92%", color: "from-emerald-400 to-emerald-500" },
                      ].map((car, i) => (
                        <motion.div
                          key={car.name}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${car.color} flex items-center justify-center flex-shrink-0`}>
                            <Search className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-white/80 truncate">{car.name}</p>
                            <p className="text-[10px] text-white/40">{car.price}</p>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/15 text-[10px] text-green-400 font-medium">
                            <CheckCircle className="w-2.5 h-2.5" />
                            {car.match}
                          </div>
                        </motion.div>
                      ))}

                      <div className="pt-2 border-t border-white/10">
                        <div className="flex items-center gap-2 text-[10px] text-white/30">
                          <Star className="w-3 h-3 text-orange-400" />
                          <span>Análise inteligente em andamento</span>
                          <span className="flex-1" />
                          <span className="animate-pulse">●</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-400/10 border border-orange-400/30 flex items-center justify-center backdrop-blur-sm"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="font-display font-bold text-lg text-orange-400">GRÁTIS</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};
