"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";

const cities = [
  "Recife",
  "Olinda",
  "Jaboatão dos Guararapes",
  "Paulista",
  "Camaragibe",
  "São Lourenço da Mata",
  "Abreu e Lima",
  "Região Metropolitana",
];

export const Coverage = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-white" id="cobertura">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-4">
            Área de Atuação
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Atendemos toda a Região Metropolitana
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Estamos presentes nas principais cidades de Pernambuco para atender você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative aspect-square max-w-md mx-auto w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl" />

            <svg viewBox="0 0 400 400" className="w-full h-full p-8">
              <defs>
                <radialGradient id="pulseGrad" cx="50%" cy="45%" r="50%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="200" cy="180" r="140" fill="url(#pulseGrad)">
                <animate attributeName="r" values="140;160;140" dur="4s" repeatCount="indefinite" />
              </circle>

              <circle cx="200" cy="180" r="100" fill="#2563EB" fillOpacity="0.08" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="6 4" />

              <motion.circle
                cx="200" cy="180" r="60"
                fill="#2563EB" fillOpacity="0.1"
                stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.3"
                initial={{ r: 40, opacity: 0 }}
                whileInView={{ r: 60, opacity: 1 }}
                transition={{ duration: 1 }}
              />

              <circle cx="200" cy="168" r="8" fill="#2563EB" />
              <circle cx="200" cy="168" r="4" fill="white" />

              {[
                { x: 200, y: 168, label: "Recife", dx: 0, dy: -24 },
                { x: 215, y: 145, label: "Olinda", dx: 24, dy: -8 },
                { x: 170, y: 188, label: "Jaboatão", dx: -28, dy: 16 },
                { x: 220, y: 130, label: "Paulista", dx: 20, dy: -16 },
                { x: 175, y: 152, label: "Camaragibe", dx: -24, dy: -12 },
                { x: 165, y: 175, label: "S. Lourenço", dx: -28, dy: 4 },
                { x: 215, y: 148, label: "A. e Lima", dx: 24, dy: -20 },
              ].map((city) => (
                <g key={city.label}>
                  <circle cx={city.x} cy={city.y} r="3" fill="#F97316" className="animate-pulse" />
                  <text x={city.x + city.dx} y={city.y + city.dy} textAnchor="middle" fontSize="8" fill="#64748B" fontFamily="Inter, sans-serif">
                    {city.label}
                  </text>
                </g>
              ))}
            </svg>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              className="p-4 rounded-xl bg-blue-50 border border-blue-100 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm text-blue-700 font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Todas as cidades da Região Metropolitana do Recife
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cities.map((city, index) => (
                <motion.div
                  key={city}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{city}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
