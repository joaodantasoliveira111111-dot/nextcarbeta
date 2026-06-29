"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Search, ThumbsUp, PhoneCall } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Diagnóstico",
    description: "Você responde algumas perguntas rápidas sobre suas preferências e necessidades.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Search,
    title: "Pesquisa Inteligente",
    description: "Nossa equipe pesquisa o mercado, analisa estoques e encontra as melhores opções para você.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: ThumbsUp,
    title: "Seleção Curada",
    description: "Selecionamos apenas os veículos realmente compatíveis com seu perfil e orçamento.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: PhoneCall,
    title: "Apresentação",
    description: "Um consultor entra em contato pelo WhatsApp com as melhores opções para você escolher.",
    color: "from-purple-500 to-purple-600",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-white" id="como-funciona">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-4">
            Como Funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Em 4 etapas simples
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Do diagnóstico à apresentação das melhores opções — sem você precisar fazer nada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-40px)] h-px bg-gradient-to-r from-slate-200 to-slate-300">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-slate-300 rotate-45" />
                </div>
              )}

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all hover:shadow-md group">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </motion.div>

                <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-sm font-bold text-slate-500 mb-3">
                  {index + 1}
                </div>

                <h3 className="font-display text-lg font-bold text-slate-800 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
