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
    <section className="section-padding bg-[var(--bg)]" id="como-funciona">
      <div className="container-max">
        <motion.div
          className="text-center mb-14 md:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 600, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline text-[var(--accent-tertiary)] mb-4 block">
            Como funciona
          </span>
          <h2 className="text-display-lg text-[var(--fg)] tracking-tight mb-4 leading-tight">
            Do diagnóstico às melhores opções
          </h2>
          <p className="text-body-lg text-[var(--fg-secondary)] leading-relaxed">
            Um processo simples, rápido e sem complicação —
            sem você sair de casa.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-[22px] left-[calc(50%+20px)] right-[calc(50%+20px)] h-[1px] bg-[var(--border-subtle)] lg:left-[calc(25%+20px)] lg:right-[calc(25%+20px)]" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative px-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 500, delay: index * 100, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Number circle */}
              <div className="relative flex justify-center mb-5">
                <div className="w-10 h-10 rounded-full border-2 border-[var(--border-default)] flex items-center justify-center flex-shrink-0 bg-[var(--color-bg-secondary)] relative z-10 text-caption font-bold text-[var(--fg)]">
                  {step.number}
                </div>
              </div>

              <h3 className="text-h3 text-[var(--fg)] mb-2 tracking-tight text-center">
                {step.title}
              </h3>
              <p className="text-body text-[var(--fg-secondary)] leading-relaxed text-center">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative flex gap-4 pb-10 last:pb-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 500, delay: index * 100, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Vertical line & number */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full border-2 border-[var(--border-default)] flex items-center justify-center flex-shrink-0 bg-[var(--color-bg-secondary)] relative z-10 text-caption font-bold text-[var(--fg)]">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-[1px] flex-1 bg-[var(--border-subtle)] mt-2" />
                )}
              </div>

              <div className="pt-1.5 flex-1">
                <h3 className="text-h3 text-[var(--fg)] mb-1.5 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-body text-[var(--fg-secondary)] leading-relaxed">
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