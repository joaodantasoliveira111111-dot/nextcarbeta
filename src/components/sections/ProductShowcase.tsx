"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, BarChart3, CheckCircle, Loader2 } from "lucide-react";

const screens = [
  {
    step: "Etapa 1",
    title: "Diagnóstico",
    description: "Coleta de preferências e necessidades",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-caption text-[var(--fg-muted)] mb-1.5">Qual seu nome?</p>
          <div className="input-base px-3 py-2 text-body-sm bg-[var(--color-bg-tertiary)]">
            João Silva
          </div>
        </div>
        <div>
          <p className="text-caption text-[var(--fg-muted)] mb-1.5">WhatsApp</p>
          <div className="input-base px-3 py-2 text-body-sm bg-[var(--color-bg-tertiary)] text-[var(--fg-muted)]">
            (81) 99999-9999
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn-primary text-body-sm px-3 py-2" disabled>
            Continuar
          </button>
        </div>
      </div>
    ),
  },
  {
    step: "Etapa 2",
    title: "Analisando perfil",
    description: "Processamento das preferências",
    content: (
      <div className="space-y-3">
        {[
          "Recebendo dados",
          "Analisando preferências",
          "Calculando perfil ideal",
        ].map((msg, i) => (
          <div key={msg} className="flex items-center gap-2.5">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                i < 2 ? "bg-[var(--color-success)]" : "border border-[var(--border-default)]"
              }`}
            >
              {i < 2 && <CheckCircle className="w-3.5 h-3.5 text-white" />}
              {i === 2 && <Loader2 className="w-3.5 h-3.5 text-[var(--fg-muted)] animate-spin" />}
            </div>
            <span className={`text-body-sm ${i < 2 ? "text-[var(--fg)]" : "text-[var(--fg-muted)]"}`}>
              {msg}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    step: "Painel",
    title: "Consultor",
    description: "Visão do consultor NextCar",
    content: (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-body-sm font-medium text-[var(--fg)]">Novo lead</span>
          <span className="px-2 py-0.5 rounded text-caption font-medium bg-[var(--accent-tertiary)]/10 text-[var(--accent-tertiary)]">
            Ativo
          </span>
        </div>
        <div className="h-[1px] bg-[var(--border-subtle)]" />
        <div className="space-y-2.5">
          <div className="flex justify-between text-body-sm">
            <span className="text-[var(--fg-muted)]">Orçamento</span>
            <span className="text-[var(--fg)]">Até R$ 80 mil</span>
          </div>
          <div className="flex justify-between text-body-sm">
            <span className="text-[var(--fg-muted)]">Uso</span>
            <span className="text-[var(--fg)]">Uso diário</span>
          </div>
          <div className="flex justify-between text-body-sm">
            <span className="text-[var(--fg-muted)]">Prioridades</span>
            <span className="text-[var(--fg)]">Economia, Segurança</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    step: "Pesquisa",
    title: "Buscando veículos",
    description: "Pesquisa de mercado automatizada",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-[var(--accent-tertiary)]" aria-hidden="true" />
          <span className="text-body-sm font-medium text-[var(--fg-secondary)]">
            42 veículos encontrados
          </span>
        </div>
        <div className="h-[1px] bg-[var(--border-subtle)]" />
        {["Honda HR-V EXL 2024", "Toyota Corolla Cross 2024", "VW T-Cross Highline 2024"].map(
          (car) => (
            <div key={car} className="flex items-center justify-between py-1.5">
              <span className="text-body-sm text-[var(--fg-secondary)]">{car}</span>
              <BarChart3 className="w-4 h-4 text-[var(--fg-muted)]" aria-hidden="true" />
            </div>
          )
        )}
      </div>
    ),
  },
  {
    step: "Final",
    title: "Recomendação",
    description: "Top 3 opções selecionadas",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle className="w-5 h-5 text-[var(--color-success)]" aria-hidden="true" />
          <span className="text-body-sm font-medium text-[var(--fg-secondary)]">
            3 opções selecionadas
          </span>
        </div>
        {[
          { name: "Honda HR-V EXL", match: "97%" },
          { name: "Corolla Cross XRE", match: "94%" },
          { name: "T-Cross Highline", match: "91%" },
        ].map((car) => (
          <div
            key={car.name}
            className="flex items-center justify-between py-2 px-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--border-subtle)]"
          >
            <span className="text-body-sm text-[var(--fg)] font-medium">
              {car.name}
            </span>
            <span className="text-caption text-[var(--accent-tertiary)] font-semibold">
              {car.match}
            </span>
          </div>
        ))}
      </div>
    ),
  },
];

export const ProductShowcase = () => {
  return (
    <section className="section-padding bg-[var(--bg)] overflow-hidden" id="produto">
      <div className="container-max">
        <motion.div
          className="text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 600, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline text-[var(--accent-tertiary)] mb-4 block">
            Produto
          </span>
          <h2 className="text-display-lg text-[var(--fg)] tracking-tight mb-4 leading-tight">
            Veja como funciona na prática
          </h2>
          <p className="text-body-lg text-[var(--fg-secondary)] leading-relaxed max-w-lg mx-auto">
            Do diagnóstico à recomendação final — cada etapa
            projetada para encontrar seu carro ideal
          </p>
        </motion.div>

        {/* Horizontal scrollable showcase */}
        <div className="relative">
          {/* Decorative shapes */}
          <div className="deco-shapes">
            <div
              className="absolute top-1/4 left-0 w-40 h-40 -translate-x-1/2"
              style={{
                background: "radial-gradient(circle, rgba(26, 26, 46, 0.03) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-1/4 right-0 w-48 h-48 translate-x-1/2"
              style={{
                background: "radial-gradient(circle, rgba(201, 168, 76, 0.03) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="flex gap-5 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0 lg:gap-6">
            {screens.map((screen, index) => (
              <motion.div
                key={screen.title}
                className="flex-shrink-0 w-[300px] lg:w-auto snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 500, delay: index * 100, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-card rounded-[16px] p-6 h-full flex flex-col">
                  {/* Step label */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-overline text-[var(--fg-muted)]">
                      {screen.step}
                    </span>
                    {index < screens.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-[var(--border-default)] hidden lg:block ml-auto" aria-hidden="true" />
                    )}
                  </div>

                  <h3 className="text-h3 text-[var(--fg)] mb-1 tracking-tight">
                    {screen.title}
                  </h3>
                  <p className="text-body-sm text-[var(--fg-muted)] mb-5">
                    {screen.description}
                  </p>

                  {/* Screen content */}
                  <div className="flex-1 p-4 rounded-[12px] bg-[var(--color-bg-tertiary)] border border-[var(--border-subtle)]">
                    {screen.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};