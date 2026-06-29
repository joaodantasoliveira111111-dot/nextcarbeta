"use client";

import * as React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Economia de tempo",
    desc: "Enquanto você cuida da sua vida, nós pesquisamos o mercado completo por você.",
  },
  {
    title: "Representamos você",
    desc: "Diferente de concessionárias, nosso compromisso é com o comprador, não com a venda.",
  },
  {
    title: "Pesquisa completa",
    desc: "Varremos todo o mercado em busca das opções que realmente atendem seu perfil.",
  },
  {
    title: "Curadoria real",
    desc: "Selecionamos apenas veículos compatíveis com suas necessidades e orçamento.",
  },
  {
    title: "Atendimento dedicado",
    desc: "Um consultor exclusivo para acompanhar você do início ao fim do processo.",
  },
  {
    title: "Parceiros selecionados",
    desc: "Trabalhamos com as melhores concessionárias da sua região.",
  },
];

export const Differentials = () => {
  return (
    <section className="section-padding bg-white" id="beneficios">
      <div className="container-max">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-[0.12em] mb-3 block">Diferenciais</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Por que escolher a NextCar?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Não somos uma concessionária. Somos seu consultor automotivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-5 border border-gray-200 rounded-xl bg-white hover:border-gray-300 transition-colors"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <h3 className="font-display font-semibold text-gray-900 mb-1.5 text-sm">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
