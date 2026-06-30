"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, Shield, Check, ChevronRight } from "lucide-react";

export const Hero = () => {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-[10rem] pb-[6rem] px-4 md:px-6 bg-[var(--bg)] overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
          {/* ── Left: Copy ──────────────────────── */}
          <div className="max-w-2xl">
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--color-bg-secondary)] mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 600, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-2 h-2 rounded-full bg-[var(--accent-tertiary)]" />
              <span className="text-overline text-[var(--accent-tertiary)]">
                Consultoria Automotiva Inteligente
              </span>
            </motion.div>

            <motion.h1
              className="text-display-xl text-[var(--fg)] leading-[1.02] tracking-[-0.03em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 700, delay: 80, ease: [0.16, 1, 0.3, 1] }}
            >
              Pare de procurar carro.
              <br />
              <span className="text-[var(--fg-secondary)]">Nós fazemos</span>
              <br />
              <span className="text-[var(--fg-secondary)]">isso por você.</span>
            </motion.h1>

            <motion.p
              className="text-body-lg text-[var(--fg-secondary)] leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 700, delay: 160, ease: [0.16, 1, 0.3, 1] }}
            >
              Responda algumas perguntas. Nossa equipe pesquisa o mercado
              e encontra as melhores opções. Gratuito.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 700, delay: 240, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => scrollTo("#diagnostico")}
                className="btn-primary group w-full sm:w-auto"
              >
                Começar diagnóstico gratuito
                <ChevronRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
              <button
                onClick={() => scrollTo("#como-funciona")}
                className="btn-ghost w-full sm:w-auto"
              >
                Como funciona
              </button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-x-8 gap-y-3 text-body-sm text-[var(--fg-muted)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 700, delay: 320, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--accent-tertiary)]" aria-hidden="true" />
                Menos de 2 min
              </span>
              <span className="inline-flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--accent-tertiary)]" aria-hidden="true" />
                100% gratuito
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--color-success)]" aria-hidden="true" />
                Sem compromisso
              </span>
            </motion.div>
          </div>

          {/* ── Right: Product Mockup ───────────── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 800, delay: 200, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative shapes for glassmorphism depth */}
            <div className="deco-shapes">
              <div
                className="absolute -top-10 -right-10 w-40 h-40"
                style={{
                  background: "radial-gradient(circle, rgba(26, 26, 46, 0.08) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32"
                style={{
                  background: "radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute top-1/2 right-0 w-24 h-24"
                style={{
                  background: "radial-gradient(circle, rgba(0, 102, 204, 0.04) 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="relative glass-card rounded-[24px] overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-bg-tertiary)]/80 border-b border-[var(--border-subtle)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-3 py-1 rounded-md bg-[var(--color-bg-secondary)] border border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--fg-muted)]">
                      nextcar.com.br/diagnostico
                    </span>
                  </div>
                </div>
              </div>

              {/* App content */}
              <div className="p-8 md:p-10 bg-[var(--color-bg-secondary)]">
                <div className="max-w-xs mx-auto">
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-overline text-[var(--fg-muted)]">
                        Etapa 1 de 6
                      </span>
                      <span className="text-[10px] font-mono text-[var(--fg-muted)]">
                        17%
                      </span>
                    </div>
                    <div className="h-1 bg-[var(--color-bg-tertiary)] rounded-full">
                      <motion.div
                        className="h-1 w-[17%] bg-[var(--accent-tertiary)] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "17%" }}
                        transition={{ duration: 800, delay: 400, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <div className="mb-6">
                    <h3 className="text-h3 text-[var(--fg)] mb-1.5 tracking-tight">
                      Qual seu nome?
                    </h3>
                    <p className="text-body-sm text-[var(--fg-muted)]">
                      Para personalizar sua experiência
                    </p>
                  </div>

                  {/* Input with animated cursor */}
                  <div className="mb-8">
                    <div className="relative">
                      <input
                        type="text"
                        className="input-base w-full px-4 py-3.5 text-body pl-0 pr-8"
                        value="João Silva"
                        readOnly
                        aria-label="Nome de exemplo"
                      />
                      <motion.span
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-[var(--accent-tertiary)]"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-end mb-8">
                    <button className="btn-primary group" disabled>
                      Continuar
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Security note */}
                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2 text-caption text-[var(--fg-muted)]">
                      <Shield className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" aria-hidden="true" />
                      Seus dados estão protegidos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};