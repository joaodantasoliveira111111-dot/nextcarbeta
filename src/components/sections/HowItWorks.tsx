"use client";

import * as React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    desc: "Responda perguntas rápidas sobre suas preferências, orçamento e necessidades.",
  },
  {
    number: "02",
    title: "Pesquisa",
    desc: "Nossa equipe pesquisa o mercado completo e analisa as opções disponíveis.",
  },
  {
    number: "03",
    title: "Curadoria",
    desc: "Selecionamos apenas os veículos realmente compatíveis com seu perfil.",
  },
  {
    number: "04",
    title: "Apresentação",
    desc: "Um consultor entra em contato pelo WhatsApp com as melhores opções.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="section-padding bg-white" id="como-funciona">
      <div className="container-max">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-4 block">
            Como funciona
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            Do diagnóstico às melhores opções
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            Um processo simples, rápido e sem complicação —
            sem você sair de casa.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative px-6 lg:px-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-[18px] left-[calc(50%+16px)] right-0 h-[1px] bg-gray-200" />
              )}

              {/* Number circle */}
              <div className="relative flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center flex-shrink-0 bg-white relative z-10">
                  <span className="text-xs font-bold text-gray-900">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-base font-semibold text-gray-900 mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative flex gap-4 pb-8 last:pb-0"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Vertical line */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center flex-shrink-0 bg-white relative z-10">
                  <span className="text-xs font-bold text-gray-900">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-[1px] flex-1 bg-gray-200 mt-2" />
                )}
              </div>

              <div className="pt-1.5 pb-2">
                <h3 className="font-display text-base font-semibold text-gray-900 mb-1 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
