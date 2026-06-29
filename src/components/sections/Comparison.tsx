"use client";

import * as React from "react";
import { motion } from "framer-motion";

const traditional = [
  "Pesquisar dezenas de anúncios em sites diferentes",
  "Entrar em contato com vendedores um por um",
  "Visitar várias concessionárias pessoalmente",
  "Negociar preços sem referência de mercado",
  "Perder dias ou semanas até encontrar o carro",
];

const nextcar = [
  "Você responde 6 perguntas rápidas",
  "Nossa equipe pesquisa o mercado completo",
  "Selecionamos as melhores opções para seu perfil",
  "Comparamos preços e condições para você",
  "Você recebe tudo pelo WhatsApp e escolhe",
];

export const Comparison = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Comprar carro não deveria dar tanto trabalho
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Veja a diferença entre fazer tudo sozinho e ter a NextCar pesquisando por você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 md:p-8 border border-gray-200 rounded-xl bg-white">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-7 h-7 rounded-md bg-red-50 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Sozinho</span>
              </div>
              <ul className="space-y-3">
                {traditional.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-gray-300 font-medium mt-px">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-6 md:p-8 border border-blue-100 rounded-xl bg-white">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Com a NextCar</span>
              </div>
              <ul className="space-y-3">
                {nextcar.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <span className="text-blue-500 font-medium mt-px">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
