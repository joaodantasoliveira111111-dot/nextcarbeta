"use client";

import * as React from "react";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Diagnóstico", desc: "Você responde perguntas rápidas sobre suas preferências e necessidades." },
  { number: "02", title: "Pesquisa", desc: "Nossa equipe pesquisa o mercado e analisa as melhores opções disponíveis." },
  { number: "03", title: "Seleção", desc: "Selecionamos apenas os veículos realmente compatíveis com seu perfil." },
  { number: "04", title: "Apresentação", desc: "Um consultor entra em contato com as melhores opções para você escolher." },
];

export const HowItWorks = () => {
  return (
    <section className="section-padding bg-white" id="como-funciona">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-[0.12em] mb-3 block">Como funciona</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Em 4 etapas simples
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Do diagnóstico à apresentação das melhores opções — sem você sair de casa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="p-6 border border-gray-200 rounded-xl bg-white"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="text-[10px] font-semibold text-gray-300 tracking-widest">{step.number}</span>
              <h3 className="font-display text-lg font-bold text-gray-900 mt-1 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
