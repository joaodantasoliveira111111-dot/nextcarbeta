"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, CheckCircle, Sparkles } from "lucide-react";

const valueProps = [
  { icon: Shield, title: "Sem Compromisso", desc: "Diagnóstico 100% gratuito" },
  { icon: Clock, title: "Pesquisa Completa", desc: "Nós fazemos por você" },
  { icon: CheckCircle, title: "Opções Curadas", desc: "Só as melhores opções" },
  { icon: Sparkles, title: "Atendimento VIP", desc: "Consultor dedicado" },
];

export const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900" id="cta">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Pare de perder dias
            <br />
            pesquisando carro
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            A NextCar faz esse trabalho por você. Diagnóstico gratuito em menos de 2 minutos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.button
            onClick={() => document.getElementById("diagnostic")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white font-display font-bold text-sm uppercase tracking-wide shadow-orange hover:bg-orange-600 hover:shadow-orange-lg transition-all duration-300"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            Começar Diagnóstico Gratuito
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-medium text-sm border border-white/10 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Como Funciona
          </motion.button>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <prop.icon className="w-4 h-4 text-orange-400" />
              </div>
              <div className="text-left">
                <p className="font-medium text-white text-sm">{prop.title}</p>
                <p className="text-xs text-white/40">{prop.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
