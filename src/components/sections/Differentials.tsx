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
    <section className="section-padding bg-[var(--bg)] relative" id="diferenciais">
      <div className="container-max">
        {/* Decorative shapes behind the grid */}
        <div className="deco-shapes">
          <div
            className="absolute top-0 left-1/4 w-48 h-48"
            style={{
              background: "radial-gradient(circle, rgba(26, 26, 46, 0.02) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-40 h-40"
            style={{
              background: "radial-gradient(circle, rgba(201, 168, 76, 0.03) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56"
            style={{
              background: "radial-gradient(circle, rgba(26, 26, 46, 0.02) 0%, transparent 70%)",
            }}
          />
        </div>

        <motion.div
          className="text-center mb-12 md:mb-14 relative z-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 600, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline text-[var(--accent-tertiary)] mb-4 block">
            Diferenciais
          </span>
          <h2 className="text-display-lg text-[var(--fg)] tracking-tight mb-4 leading-tight">
            Por que escolher a NextCar?
          </h2>
          <p className="text-body-lg text-[var(--fg-secondary)] leading-relaxed max-w-lg mx-auto">
            Não somos uma concessionária. Somos seu consultor automotivo.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 z-10">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-card rounded-[16px] p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--accent-tertiary)]/30 group"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 400, delay: index * 60, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--border-subtle)] flex items-center justify-center mb-4 group-hover:border-[var(--accent-tertiary)]/50 group-hover:text-[var(--accent-tertiary)] transition-all duration-300">
                <item.icon className="w-6 h-6 text-[var(--fg-secondary)] group-hover:text-[var(--accent-tertiary)] transition-colors" aria-hidden="true" />
              </div>
              <h3 className="text-h3 text-[var(--fg)] mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-body text-[var(--fg-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};