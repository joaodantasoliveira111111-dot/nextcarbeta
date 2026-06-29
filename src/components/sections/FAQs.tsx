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
];

export const FAQs = () => {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <section className="section-padding bg-gray-50" id="faq">
      <div className="container-max max-w-2xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-4 block">
            Dúvidas frequentes
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={index}
                className="border border-gray-200/80 bg-white rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-medium text-gray-900 text-sm md:text-base outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="tracking-tight">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
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
