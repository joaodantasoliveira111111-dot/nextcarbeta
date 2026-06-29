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
          <p className="text-xs text-gray-400 mb-1.5">Qual seu nome?</p>
          <div className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 bg-white">
            João Silva
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1.5">WhatsApp</p>
          <div className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-400 bg-gray-50">
            (81) 99999-9999
          </div>
        </div>
        <div className="flex justify-end">
          <div className="px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-medium">
            Continuar
          </div>
        </div>
      </div>
    ),
  },
  {
    step: "Etapa 3",
    title: "Analisando perfil",
    description: "Processamento das preferências",
    content: (
      <div className="space-y-3">
        {["Recebendo dados", "Analisando preferências", "Calculando perfil"].map(
          (msg, i) => (
            <div key={msg} className="flex items-center gap-2.5">
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                  i < 2
                    ? "bg-blue-600"
                    : "border border-gray-200"
                }`}
              >
                {i < 2 && (
                  <CheckCircle className="w-3 h-3 text-white" />
                )}
                {i === 2 && (
                  <Loader2 className="w-2.5 h-2.5 text-gray-300 animate-spin" />
                )}
              </div>
              <span
                className={`text-xs ${
                  i < 2 ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {msg}
              </span>
            </div>
          )
        )}
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
          <span className="text-xs font-medium text-gray-700">Novo lead</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-600">
            Ativo
          </span>
        </div>
        <div className="h-[1px] bg-gray-100" />
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Orçamento</span>
            <span className="text-gray-700">Até R$ 80 mil</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Uso</span>
            <span className="text-gray-700">Uso diário</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Prioridades</span>
            <span className="text-gray-700">Economia, Segurança</span>
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
          <Search className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-xs text-gray-600 font-medium">
            42 veículos encontrados
          </span>
        </div>
        <div className="h-[1px] bg-gray-100" />
        {["Honda HR-V EXL 2024", "Toyota Corolla Cross 2024", "VW T-Cross Highline 2024"].map(
          (car) => (
            <div
              key={car}
              className="flex items-center justify-between py-1"
            >
              <span className="text-xs text-gray-600">{car}</span>
              <BarChart3 className="w-3 h-3 text-gray-300" />
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
          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
          <span className="text-xs text-gray-600 font-medium">
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
            className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-gray-50 border border-gray-100"
          >
            <span className="text-xs text-gray-700 font-medium">
              {car.name}
            </span>
            <span className="text-[10px] text-blue-600 font-semibold">
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
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-max">
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-4 block">
            Produto
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            Veja como funciona na prática
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            Do diagnóstico à recomendação final — cada etapa
            projetada para encontrar seu carro ideal
          </p>
        </motion.div>

        {/* Horizontal scrollable showcase */}
        <div className="relative">
          {/* Decorative shapes */}
          <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full bg-blue-600/[0.03] -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-40 h-40 rounded-full bg-orange-500/[0.03] translate-x-1/2" />

          <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
            {screens.map((screen, index) => (
              <motion.div
                key={screen.title}
                className="flex-shrink-0 w-[260px] md:w-auto snap-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="glass-card rounded-2xl p-5 h-full">
                  {/* Step label */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest">
                      {screen.step}
                    </span>
                    {index < screens.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-gray-200 hidden md:block ml-auto" />
                    )}
                  </div>

                  <h3 className="text-sm font-semibold text-gray-900 mb-0.5 tracking-tight">
                    {screen.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 mb-4">
                    {screen.description}
                  </p>

                  {/* Screen content */}
                  <div className="p-3 rounded-xl bg-white border border-gray-100">
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
