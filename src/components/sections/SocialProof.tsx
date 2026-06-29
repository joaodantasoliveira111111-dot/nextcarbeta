"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Mariana Santos",
    location: "São Paulo - SP",
    vehicle: "Honda HR-V 2024",
    rating: 5,
    text: "O diagnóstico foi incrivelmente preciso! Em 15 minutos recebi 3 opções que encaixavam perfeitamente no meu orçamento e necessidades. A equipe me atendeu no WhatsApp e resolveu tudo sem eu sair de casa. Recebi o carro em 36 horas!",
    avatar: "MS",
    bgColor: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    name: "Carlos Eduardo Lima",
    location: "Belo Horizonte - MG",
    vehicle: "Toyota Corolla Cross 2023",
    rating: 5,
    text: "Tinha medo de comprar carro online, mas o processo foi totalmente transparente. O consultor me mostrou o laudo cautelar completo, histórico de revisões e até fotos detalhadas. Melhor experiência de compra que já tive em 20 anos.",
    avatar: "CE",
    bgColor: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Ana Paula Ferreira",
    location: "Curitiba - PR",
    vehicle: "Jeep Compass 2024",
    rating: 5,
    text: "Precisava de um SUV para a família e não tinha tempo de visitar lojas. O algoritmo encontrou exatamente o que procurava: espaço, segurança e dentro do orçamento. Financiamento aprovado na hora e entrega na porta de casa. Sensacional!",
    avatar: "AF",
    bgColor: "from-purple-500 to-violet-500",
  },
  {
    id: 4,
    name: "Roberto Alves",
    location: "Porto Alegre - RS",
    vehicle: "Volkswagen T-Cross 2023",
    rating: 5,
    text: "Troquei meu carro antigo com uma avaliação justa e transparente. O valor da troca cobriu grande parte do entrada. Todo processo digital, assinatura eletrônica e suporte 24h. Recomendo de olhos fechados para quem valoriza tempo e segurança.",
    avatar: "RA",
    bgColor: "from-green-500 to-emerald-500",
  },
];

export const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
    setTouchStart(null);
  };

  const currentTestimonial = testimonials[currentIndex];

  const avatarGradient = (() => {
    const parts = currentTestimonial.bgColor.split(" to ");
    const from = parts[0]?.replace("from-", "");
    const to = parts[1]?.replace("to-", "")?.trim() || "gold-500";
    return `linear-gradient(135deg, ${from} 0%, ${to} 100%)`;
  })();

  return (
    <section className="py-20 md:py-28 px-4" id="depoimentos">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Badge variant="outline" className="mb-4 inline-block">
            Depoimentos Reais
          </Badge>
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            O que nossos clientes
            <br />
            <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text text-transparent">
              dizem sobre a AutoFit
            </span>
          </motion.h2>
        </motion.div>

        <div className="relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                className="relative"
                initial={{ opacity: 0, x: 300, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -300, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Card variant="hover" padding="lg" className="max-w-3xl mx-auto relative">
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 opacity-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Quote className="w-full h-full text-gold-400" />
                  </motion.div>

                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 + i * 0.05 }}
                      >
                        <Star
                          className={cn(
                            "w-5 h-5",
                            i < currentTestimonial.rating ? "text-gold-400 fill-current" : "text-white-100/10"
                          )}
                        />
                      </motion.span>
                    ))}
                  </div>

                  <motion.p
                    className="text-lg md:text-xl text-white-100/80 leading-relaxed mb-6 relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    &ldquo;{currentTestimonial.text}&rdquo;
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-4 pt-4 border-t border-white-100/10 relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-black-900 text-lg"
                      style={{ background: avatarGradient }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                    >
                      {currentTestimonial.avatar}
                    </motion.div>
                    <div>
                      <p className="font-display font-semibold text-white-200">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-sm text-white-100/50">
                        {currentTestimonial.location} • {currentTestimonial.vehicle}
                      </p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white-200/5 backdrop-blur-lg border border-white-100/10 flex items-center justify-center text-white-100/60 hover:text-gold-400 hover:border-gold-400/50 transition-all duration-300"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white-200/5 backdrop-blur-lg border border-white-100/10 flex items-center justify-center text-white-100/60 hover:text-gold-400 hover:border-gold-400/50 transition-all duration-300"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goTo(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-gold-400 w-8 shadow-gold/50"
                    : "bg-white-100/20 hover:bg-white-100/40"
                )}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Ir para depoimento ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { label: "Avaliação Média", value: "4.9/5", icon: Star },
            { label: "Recomendam", value: "97%", icon: Star },
            { label: "Voltariam a Comprar", value: "94%", icon: Star },
            { label: "Resolução em 24h", value: "99%", icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-white-200/5 backdrop-blur-lg border border-white-100/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                <stat.icon className="w-5 h-5 text-gold-400" />
              </div>
              <p className="font-display text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-white-100/50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};