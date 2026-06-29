"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, Users, Search, Target, Headphones, Building2 } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Economia de tempo",
    desc: "Enquanto você cuida da sua vida, nós pesquisamos o mercado completo por você.",
  },
  {
    icon: Users,
    title: "Representamos você",
    desc: "Diferente de concessionárias, nosso compromisso é com o comprador, não com a venda.",
  },
  {
    icon: Search,
    title: "Pesquisa completa",
    desc: "Varremos todo o mercado em busca das opções que realmente atendem seu perfil.",
  },
  {
    icon: Target,
    title: "Curadoria real",
    desc: "Selecionamos apenas veículos compatíveis com suas necessidades e orçamento.",
  },
  {
    icon: Headphones,
    title: "Atendimento dedicado",
    desc: "Um consultor exclusivo para acompanhar você do início ao fim do processo.",
  },
  {
    icon: Building2,
    title: "Parceiros selecionados",
    desc: "Trabalhamos com as melhores concessionárias da sua região.",
  },
];

export const Differentials = () => {
  return (
    <section className="section-padding bg-white" id="beneficios">
      <div className="container-max">
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-4 block">
            Diferenciais
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            Por que escolher a NextCar?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            Não somos uma concessionária. Somos seu consultor automotivo.
          </p>
        </motion.div>

        {/* Decorative shapes behind the grid */}
        <div className="relative">
          <div className="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-blue-600/[0.02]" />
          <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-orange-500/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-blue-600/[0.02]" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card rounded-2xl p-6 hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 group-hover:border-gray-200 transition-colors">
                  <item.icon className="w-5 h-5 text-gray-500" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 mb-2 text-[15px] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
