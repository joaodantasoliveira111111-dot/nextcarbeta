"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como a consultoria funciona na prática?",
    a: "Você preenche o diagnóstico rápido descrevendo suas necessidades, orçamento e preferências. Nossa equipe de analistas pesquisa e filtra as opções do mercado (concessionárias, lojas e particulares), validando histórico e procedência. Selecionamos as 3 melhores opções e enviamos detalhadamente pelo WhatsApp para você escolher.",
  },
  {
    q: "O diagnóstico é realmente gratuito?",
    a: "Sim, o preenchimento do diagnóstico e a análise inicial são 100% gratuitos. Você não assume nenhum compromisso ao responder às perguntas. Nosso objetivo é apresentar as melhores oportunidades de forma clara.",
  },
  {
    q: "A NextCar vende carros?",
    a: "Não. A NextCar não é uma concessionária, marketplace ou classificados. Somos uma consultoria de tecnologia focada em representar o comprador. Diferente das lojas, nosso interesse é que você faça a melhor escolha para o seu bolso e rotina.",
  },
  {
    q: "Em quanto tempo receberei o retorno?",
    a: "O diagnóstico leva menos de 2 minutos para ser preenchido. Após o envio das informações, nossa equipe inicia a varredura do mercado e entra em contato pelo WhatsApp com as primeiras opções em até 24 horas úteis.",
  },
  {
    q: "Qual a área de atuação da NextCar?",
    a: "Atualmente focamos nosso atendimento personalizado na Região Metropolitana do Recife, garantindo que as vistorias e negociações com parceiros locais tenham o máximo de rigor e agilidade.",
  },
  {
    q: "Como a NextCar garante a qualidade dos veículos?",
    a: "Todos os veículos passam por verificação de procedência, histórico de manutenção e inspeção técnica antes de serem apresentados. Trabalhamos apenas com parceiros auditados e oferecemos garantia estendida nas recomendações finais.",
  },
];

export const FAQs = () => {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <section className="section-padding bg-[var(--color-bg-tertiary)]" id="faq">
      <div className="container-max max-w-2xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 600, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline text-[var(--accent-tertiary)] mb-4 block">
            Dúvidas frequentes
          </span>
          <h2 className="text-display-lg text-[var(--fg)] tracking-tight leading-tight">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={index}
                className="bg-[var(--color-bg-secondary)] border border-[var(--border-subtle)] rounded-[16px] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-medium text-[var(--fg)] text-body outline-none hover:bg-[var(--color-bg-tertiary)]/50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="tracking-tight">{faq.q}</span>
                  <motion.div
                    className="flex-shrink-0 text-[var(--fg-muted)]"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 250, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ChevronDown className="w-5 h-5" aria-hidden="true" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 300, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-body text-[var(--fg-secondary)] leading-relaxed border-t border-[var(--border-subtle)]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};