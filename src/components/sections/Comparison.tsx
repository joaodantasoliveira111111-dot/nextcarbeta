"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

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
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            Comprar carro não deveria
            <br className="hidden sm:block" /> dar tanto trabalho
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Veja a diferença entre fazer tudo sozinho e ter a NextCar
            pesquisando por você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Sozinho */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 md:p-8 border border-gray-200 rounded-2xl bg-white h-full">
              <div className="flex items-center gap-2.5 mb-7">
                <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-red-400" />
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Sozinho
                </span>
              </div>
              <ul className="space-y-4">
                {traditional.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed"
                  >
                    <span className="text-gray-300 font-mono text-[11px] mt-[3px] flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Com a NextCar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="relative p-6 md:p-8 rounded-2xl bg-white h-full overflow-hidden">
              {/* Decorative bg shapes for glass effect */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-600/[0.04]" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-orange-500/[0.04]" />

              <div className="relative glass-card rounded-2xl p-6 md:p-8 h-full">
                <div className="flex items-center gap-2.5 mb-7">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    Com a NextCar
                  </span>
                </div>
                <ul className="space-y-4">
                  {nextcar.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-700 font-medium leading-relaxed"
                    >
                      <span className="text-blue-500 font-mono text-[11px] mt-[3px] flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
