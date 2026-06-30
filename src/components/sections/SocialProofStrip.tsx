"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Users, Clock, MapPin, Shield } from "lucide-react";

const stats = [
  { icon: Users, label: "500+ diagnósticos realizados" },
  { icon: Clock, label: "Resposta em até 24h" },
  { icon: MapPin, label: "Recife e Região Metropolitana" },
  { icon: Shield, label: "100% gratuito" },
];

export const SocialProofStrip = () => {
  return (
    <section className="py-5 md:py-6 px-4 bg-[var(--color-bg-tertiary)] border-y border-[var(--border-subtle)]">
      <div className="container-max">
        <motion.div
          className="flex flex-wrap justify-center gap-x-10 gap-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 500 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-2.5 text-body-sm text-[var(--fg-secondary)]"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 400, delay: i * 80 }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <stat.icon className="w-5 h-5 text-[var(--fg-muted)] transition-colors group-hover:text-[var(--accent-tertiary)]" aria-hidden="true" />
              <span className="font-medium text-[var(--fg)]">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};