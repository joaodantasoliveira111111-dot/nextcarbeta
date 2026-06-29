"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { X, Check, Clock, Search, MessageSquare, MapPin, ThumbsUp } from "lucide-react";

const traditionalSteps = [
  { icon: Search, text: "Pesquisar dezenas de anúncios em vários sites" },
  { icon: MessageSquare, text: "Entrar em contato com vários vendedores" },
  { icon: MapPin, text: "Visitar diversas concessionárias" },
  { icon: Clock, text: "Perder dias ou semanas pesquisando" },
];

const nextcarSteps = [
  { icon: Search, text: "Você responde algumas perguntas rápidas" },
  { icon: Check, text: "Nós pesquisamos o mercado inteiro por você" },
  { icon: ThumbsUp, text: "Selecionamos apenas as melhores opções" },
  { icon: Clock, text: "Você escolhe sem perder tempo" },
];

export const Comparison = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Comprar carro não deveria
            <br />
            dar tanto trabalho
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Veja a diferença entre o método tradicional e a experiência NextCar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-red-100 hover:border-red-200 transition-colors shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-red-400 uppercase tracking-widest">Método</span>
                  <p className="font-display font-bold text-xl text-slate-800">Tradicional</p>
                </div>
              </div>

              <div className="space-y-4">
                {traditionalSteps.map((step, index) => (
                  <motion.div
                    key={step.text}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <p className="text-sm md:text-base text-slate-600">{step.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-2xl blur-lg opacity-60" />
            <div className="relative p-6 md:p-8 rounded-2xl bg-white border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest">Método</span>
                  <p className="font-display font-bold text-xl text-slate-800">NextCar</p>
                </div>
              </div>

              <div className="space-y-4">
                {nextcarSteps.map((step, index) => (
                  <motion.div
                    key={step.text}
                    className="flex items-center gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm md:text-base text-slate-700 font-medium">{step.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
