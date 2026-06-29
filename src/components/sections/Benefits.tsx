"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Shield, Zap, Search, Truck, CheckCircle, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Search,
    title: "Busca Inteligente",
    description:
      "Algoritmo avançado analisa seu perfil e encontra as melhores ofertas entre milhares de veículos parceiros em segundos.",
    highlight: "98% de precisão",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description:
      "Todos os veículos passam por vistoria rigorosa e têm procedência garantida. Histórico completo e laudo cautelar incluso.",
    highlight: "Vistoria 210 pontos",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Processo Ágil",
    description:
      "Da escolha à entrega em até 48h. Financiamento pré-aprovado, documentação digital e entrega na sua porta.",
    highlight: "Entrega em 48h",
    color: "from-gold-400 to-orange-500",
  },
  {
    icon: Truck,
    title: "Suporte Completo",
    description:
      "Consultores dedicados do início ao fim. Pós-venda ativo, garantia estendida opcional e troca facilitada futura.",
    highlight: "Suporte 24/7",
    color: "from-purple-500 to-pink-500",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 md:py-28 px-4" id="benefits">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Badge variant="outline" className="mb-4 inline-block">
            Por que escolher a AutoFit?
          </Badge>
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Benefícios Exclusivos
            <br />
            <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text text-transparent">
              Para Sua Tranquilidade
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white-100/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tecnologia, segurança e agilidade unidas para você sair de carro novo
            sem dor de cabeça.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 },
                },
              }}
            >
              <Card variant="hover" padding="lg" className="relative group h-full">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
                <div className="relative z-10">
                  <motion.div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110",
                      `bg-gradient-to-br ${benefit.color}`
                    )}
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <benefit.icon
                      className="w-7 h-7 text-black-900"
                      aria-hidden="true"
                    />
                  </motion.div>

                  <h3 className="font-display text-xl font-semibold text-white-200 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-white-100/60 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <div className="flex items-center gap-2 pt-4 border-t border-white-100/10">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-gold-300">
                      {benefit.highlight}
                    </span>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { label: "Veículos Verificados", value: "5.000+", icon: CheckCircle },
            { label: "Clientes Satisfeitos", value: "10.000+", icon: Star },
            { label: "Parceiros Oficiais", value: "50+", icon: Truck },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white-200/5 backdrop-blur-lg border border-white-100/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-500/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <stat.icon className="w-6 h-6 text-gold-400" />
              </motion.div>
              <p className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-white-100/60 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};