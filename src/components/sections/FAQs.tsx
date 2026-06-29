"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "É gratuito?",
    answer: "Sim! O diagnóstico NextCar é 100% gratuito e sem compromisso. Você só paga se decidir adquirir um veículo através de nossas concessionárias parceiras.",
  },
  {
    question: "Vocês vendem carros?",
    answer: "Não. A NextCar não vende carros. Somos uma consultoria automotiva que representa você, o comprador. Nosso trabalho é pesquisar o mercado e encontrar as melhores opções para o seu perfil.",
  },
  {
    question: "Sou obrigado a comprar?",
    answer: "Não. Você não tem nenhuma obrigação de compra. Após receber as opções selecionadas pela nossa equipe, você decide se quer prosseguir ou não. Sem pressão.",
  },
  {
    question: "Quanto tempo demora?",
    answer: "O diagnóstico leva menos de 2 minutos. Após o envio, nossa equipe inicia a pesquisa imediatamente e entra em contato pelo WhatsApp em até 24 horas úteis com as melhores opções.",
  },
  {
    question: "Como funciona na prática?",
    answer: "Você preenche o diagnóstico online. Nossa equipe pesquisa o mercado, analisa estoques das concessionárias parceiras e seleciona os veículos mais compatíveis. Um consultor entra em contato pelo WhatsApp para apresentar as opções e agendar test-drive se desejar.",
  },
];

export const FAQs = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-4 bg-slate-50" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Tire suas dúvidas sobre a NextCar
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={cn(
                "rounded-2xl border transition-all duration-200 overflow-hidden",
                openIndex === index
                  ? "border-blue-200 bg-white shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              )}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-display font-semibold text-slate-800 text-sm md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
