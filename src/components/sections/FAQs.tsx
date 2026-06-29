"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "É gratuito?",
    a: "Sim, o diagnóstico NextCar é 100% gratuito. Você só paga se decidir adquirir um veículo através de nossas concessionárias parceiras.",
  },
  {
    q: "Vocês vendem carros?",
    a: "Não. A NextCar não vende carros. Somos uma consultoria que representa você, o comprador. Nosso trabalho é pesquisar o mercado e encontrar as melhores opções para seu perfil.",
  },
  {
    q: "Sou obrigado a comprar?",
    a: "Não. Você não tem nenhuma obrigação. Após receber as opções, você decide se quer prosseguir ou não. Sem pressão.",
  },
  {
    q: "Quanto tempo demora?",
    a: "O diagnóstico leva menos de 2 minutos. Após o envio, nossa equipe inicia a pesquisa e entra em contato pelo WhatsApp em até 24 horas úteis.",
  },
  {
    q: "Como funciona na prática?",
    a: "Você preenche o diagnóstico online. Nossa equipe pesquisa o mercado, analisa estoques e seleciona os veículos compatíveis. Um consultor entra em contato pelo WhatsApp para apresentar as opções.",
  },
];

export const FAQs = () => {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <section className="section-padding bg-gray-50" id="faq">
      <div className="container-max max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-[0.12em] mb-3 block">FAQ</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open === index}
              >
                <span className="text-sm font-medium text-gray-900">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    open === index ? "rotate-180" : ""
                  }`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-4">
                      <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
