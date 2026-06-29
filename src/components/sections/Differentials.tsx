"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, Heart, Search, Filter, UserCheck, Building2 } from "lucide-react";

const differentials = [
  {
    icon: Clock,
    title: "Economizamos seu tempo",
    description: "Enquanto você cuida do que importa, nós fazemos a pesquisa completa por você.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Heart,
    title: "Representamos quem compra",
    description: "Diferente de concessionárias, nosso compromisso é com você, não com a venda.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Search,
    title: "Pesquisamos por você",
    description: "Varremos o mercado em busca das melhores opções dentro do seu orçamento.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Filter,
    title: "Seleção curada",
    description: "Filtramos apenas veículos que realmente atendem suas necessidades e preferências.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: UserCheck,
    title: "Atendimento personalizado",
    description: "Um consultor dedicado para acompanhar você do início ao fim do processo.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Building2,
    title: "Concessionárias parceiras",
    description: "Trabalhamos com as melhores concessionárias da sua região.",
    color: "from-cyan-500 to-cyan-600",
  },
];

export const Differentials = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-slate-50" id="beneficios">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-4">
            Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Por que escolher a NextCar?
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Não somos uma concessionária. Somos seu consultor automotivo inteligente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
