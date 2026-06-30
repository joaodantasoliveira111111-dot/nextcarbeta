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
    <section className="section-padding bg-[var(--color-bg-tertiary)]">
      <div className="container-max">
        <motion.div
          className="text-center mb-12 md:mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 600, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-display-lg text-[var(--fg)] tracking-tight mb-4 leading-tight">
            Comprar carro não deveria
            <br className="hidden sm:block" /> dar tanto trabalho
          </h2>
          <p className="text-body-lg text-[var(--fg-secondary)] leading-relaxed">
            Veja a diferença entre fazer tudo sozinho e ter a NextCar
            pesquisando por você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Sozinho */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 600, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-6 md:p-8 border border-[var(--border-subtle)] rounded-[16px] bg-[var(--color-bg-secondary)] h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-error)]/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-[var(--color-error)]" aria-hidden="true" />
                </div>
                <span className="text-overline text-[var(--color-error)]">
                  Sozinho
                </span>
              </div>
              <ul className="space-y-5">
                {traditional.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-body text-[var(--fg-secondary)] leading-relaxed"
                  >
                    <span className="text-[11px] font-mono text-[var(--fg-muted)] mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Com a/* Com a NextCar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 600, delay: 80, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative p-6 md:p-8 rounded-[16px] bg-[var(--color-bg-secondary)] h-full overflow-hidden">
              {/* Decorative bg shapes for glass effect */}
              <div className="deco-shapes">
                <div
                  className="absolute -top-6 -right-6 w-24 h-24"
                  style={{
                    background: "radial-gradient(circle, rgba(26, 26, 46, 0.04) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute -bottom-6 -left-6 w-20 h-20"
                  style={{
                    background: "radial-gradient(circle, rgba(201, 168, 76, 0.03) 0%, transparent 70%)",
                  }}
                />
              </div>

              <div className="relative glass-card rounded-[16px] p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-success)]/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[var(--color-success)]" aria-hidden="true" />
                  </div>
                  <span className="text-overline text-[var(--color-success)]">
                    Com a NextCar
                  </span>
                </div>
                <ul className="space-y-5">
                  {nextcar.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-body text-[var(--fg)] font-medium leading-relaxed"
                    >
                      <span className="text-[11px] font-mono text-[var(--accent-tertiary)] mt-1 flex-shrink-0">
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