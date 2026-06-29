"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Users, CheckCircle } from "lucide-react";

const stats = [
  { icon: Users, label: "500+ diagnósticos realizados" },
  { icon: Clock, label: "Resposta em até 24h" },
  { icon: MapPin, label: "Recife e Região Metropolitana" },
  { icon: CheckCircle, label: "100% gratuito" },
];

export const SocialProofStrip = () => {
  return (
    <section className="py-6 md:py-8 px-4 bg-gray-50 border-y border-gray-200/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-wrap justify-center gap-x-10 gap-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-2 text-sm text-gray-500"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <stat.icon className="w-4 h-4 text-gray-400" />
              <span className="font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
