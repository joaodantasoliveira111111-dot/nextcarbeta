"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type VehicleKnowledge = "yes" | "no" | "";
type FinancingInterest = "yes" | "no" | "maybe" | "";
type HasTradeIn = "yes" | "no" | "";
type UsageType = "daily" | "family" | "work" | "leisure" | "first" | "";
type Priority = "economy" | "safety" | "tech" | "comfort" | "design" | "space" | "performance";

interface FormData {
  vehicleKnowledge: VehicleKnowledge;
  vehicleModel: string;
  budget: string;
  downPayment: string;
  financing: FinancingInterest;
  tradeIn: HasTradeIn;
  tradeInModel: string;
  usage: UsageType;
  priorities: Priority[];
  name: string;
  whatsapp: string;
  city: string;
}

const prioritiesList: { value: Priority; label: string; icon: string }[] = [
  { value: "economy", label: "Economia", icon: "💰" },
  { value: "safety", label: "Segurança", icon: "🛡️" },
  { value: "tech", label: "Tecnologia", icon: "📱" },
  { value: "comfort", label: "Conforto", icon: "✨" },
  { value: "design", label: "Design", icon: "🎨" },
  { value: "space", label: "Espaço", icon: "📦" },
  { value: "performance", label: "Performance", icon: "⚡" },
];

const techMessages = [
  "Analisando sua resposta...",
  "Processando informações...",
  "Atualizando seu perfil...",
  "Calculando compatibilidade...",
  "Cruzando preferências...",
  "Buscando veículos compatíveis...",
  "Verificando disponibilidade...",
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
  }),
};

export const DiagnosticForm = () => {
  const [step, setStep] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [formData, setFormData] = React.useState<FormData>({
    vehicleKnowledge: "",
    vehicleModel: "",
    budget: "",
    downPayment: "",
    financing: "",
    tradeIn: "",
    tradeInModel: "",
    usage: "",
    priorities: [],
    name: "",
    whatsapp: "",
    city: "",
  });
  const [showTechOverlay, setShowTechOverlay] = React.useState(false);
  const [techMessageIndex, setTechMessageIndex] = React.useState(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);

  const totalSteps = 6;

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const togglePriority = (p: Priority) => {
    setFormData((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(p)
        ? prev.priorities.filter((x) => x !== p)
        : [...prev.priorities, p],
    }));
  };

  const goNext = () => {
    if (step < totalSteps - 1) {
      setDirection(1);
      setShowTechOverlay(true);
      const msgIndex = Math.floor(Math.random() * techMessages.length);
      setTechMessageIndex(msgIndex);
      setTimeout(() => {
        setShowTechOverlay(false);
        setStep((s) => s + 1);
      }, 800);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 0: return formData.vehicleKnowledge !== "";
      case 1: return formData.vehicleKnowledge === "no" || formData.vehicleModel.trim().length >= 3;
      case 2: return formData.budget !== "";
      case 3: return true;
      case 4: return formData.usage !== "" && formData.priorities.length > 0;
      case 5: return formData.name.trim().length >= 3 && formData.whatsapp.trim().length >= 10 && formData.city.trim().length >= 3;
      default: return false;
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
      const lead = {
        ...formData,
        timestamp: new Date().toISOString(),
        status: "Novo Lead",
      };
      console.log("Lead captured:", lead);
    }, 500);
  };

  const progress = ((step) / (totalSteps - 1)) * 100;

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-slate-500 text-sm mb-1">Pergunta 1 de {totalSteps}</p>
              <h3 className="font-display text-2xl font-bold text-slate-800">
                Você já sabe qual carro procura?
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto pt-4">
              {[
                { value: "yes" as const, label: "Sim, já sei", desc: "Tenho um modelo em mente", emoji: "🎯" },
                { value: "no" as const, label: "Ainda não", desc: "Quero sugestões", emoji: "💡" },
              ].map((opt) => (
                <motion.button
                  key={opt.value}
                  type="button"
                  onClick={() => updateField("vehicleKnowledge", opt.value)}
                  className={cn(
                    "relative flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 text-center",
                    formData.vehicleKnowledge === opt.value
                      ? "border-blue-500 bg-blue-50 shadow-blue"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                  )}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-3xl">{opt.emoji}</span>
                  <div>
                    <p className="font-display font-bold text-slate-800">{opt.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{opt.desc}</p>
                  </div>
                  {formData.vehicleKnowledge === opt.value && (
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-slate-500 text-sm mb-1">Pergunta 2 de {totalSteps}</p>
              <h3 className="font-display text-2xl font-bold text-slate-800">
                {formData.vehicleKnowledge === "yes" ? "Qual carro você procura?" : "Conte um pouco sobre o que busca"}
              </h3>
            </div>
            <div className="max-w-md mx-auto pt-4">
              <label className="input-label">
                {formData.vehicleKnowledge === "yes" ? "Marca, modelo e ano" : "Preferências (opcional)"}
              </label>
              <input
                type="text"
                placeholder={formData.vehicleKnowledge === "yes" ? "Ex: Honda HR-V 2024" : "Ex: SUV, automático, até 2022..."}
                value={formData.vehicleModel}
                onChange={(e) => updateField("vehicleModel", e.target.value)}
                className="input-field text-center text-lg py-4"
                autoFocus
              />
              <p className="text-xs text-slate-400 mt-2 text-center">
                {formData.vehicleKnowledge === "yes"
                  ? "Quanto mais detalhes, melhor será nossa pesquisa"
                  : "Deixe em branco se preferir sugestões baseadas no seu perfil"}
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-slate-500 text-sm mb-1">Pergunta 3 de {totalSteps}</p>
              <h3 className="font-display text-2xl font-bold text-slate-800">
                Qual seu orçamento?
              </h3>
            </div>
            <div className="max-w-lg mx-auto pt-2">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "30k", label: "Até R$ 30 mil" },
                  { value: "50k", label: "Até R$ 50 mil" },
                  { value: "80k", label: "Até R$ 80 mil" },
                  { value: "120k", label: "Até R$ 120 mil" },
                  { value: "200k", label: "Até R$ 200 mil" },
                  { value: "200k+", label: "Acima de R$ 200 mil" },
                ].map((opt) => (
                  <motion.button
                    key={opt.value}
                    type="button"
                    onClick={() => updateField("budget", opt.value)}
                    className={cn(
                      "px-5 py-4 rounded-xl border-2 transition-all duration-200 text-center",
                      formData.budget === opt.value
                        ? "border-blue-500 bg-blue-50 shadow-blue"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className={cn(
                      "font-medium text-sm",
                      formData.budget === opt.value ? "text-blue-700" : "text-slate-700"
                    )}>
                      {opt.label}
                    </span>
                  </motion.button>
                ))}
              </div>
              <div className="mt-6">
                <label className="input-label">Valor de entrada (opcional)</label>
                <input
                  type="text"
                  placeholder="Ex: R$ 20.000"
                  value={formData.downPayment}
                  onChange={(e) => updateField("downPayment", e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-slate-500 text-sm mb-1">Pergunta 4 de {totalSteps}</p>
              <h3 className="font-display text-2xl font-bold text-slate-800">
                Financiamento e Troca
              </h3>
            </div>
            <div className="max-w-lg mx-auto space-y-6 pt-4">
              <div>
                <p className="text-sm font-medium text-slate-700 mb-3">Tem interesse em financiamento?</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "yes" as const, label: "Sim" },
                    { value: "maybe" as const, label: "Talvez" },
                    { value: "no" as const, label: "Não" },
                  ].map((opt) => (
                    <motion.button
                      key={opt.value}
                      type="button"
                      onClick={() => updateField("financing", opt.value)}
                      className={cn(
                        "px-4 py-3 rounded-xl border-2 transition-all duration-200 text-center text-sm font-medium",
                        formData.financing === opt.value
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {opt.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-700 mb-3">Possui veículo para troca?</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "yes" as const, label: "Sim, tenho" },
                    { value: "no" as const, label: "Não" },
                  ].map((opt) => (
                    <motion.button
                      key={opt.value}
                      type="button"
                      onClick={() => updateField("tradeIn", opt.value)}
                      className={cn(
                        "px-4 py-3 rounded-xl border-2 transition-all duration-200 text-center text-sm font-medium",
                        formData.tradeIn === opt.value
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {opt.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {formData.tradeIn === "yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  <label className="input-label">Qual veículo você tem?</label>
                  <input
                    type="text"
                    placeholder="Ex: Honda Civic 2020"
                    value={formData.tradeInModel}
                    onChange={(e) => updateField("tradeInModel", e.target.value)}
                    className="input-field"
                  />
                </motion.div>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-slate-500 text-sm mb-1">Pergunta 5 de {totalSteps}</p>
              <h3 className="font-display text-2xl font-bold text-slate-800">
                Seu perfil de uso
              </h3>
            </div>
            <div className="max-w-lg mx-auto space-y-6 pt-4">
              <div>
                <p className="text-sm font-medium text-slate-700 mb-3">Uso principal do veículo</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "daily" as const, label: "Uso diário", desc: "Casa-trabalho" },
                    { value: "family" as const, label: "Família", desc: "Viagens e passeios" },
                    { value: "work" as const, label: "Trabalho", desc: "Comercial / Uber" },
                    { value: "leisure" as const, label: "Lazer", desc: "Fim de semana" },
                    { value: "first" as const, label: "Primeiro carro", desc: "Estou começando" },
                  ].map((opt) => (
                    <motion.button
                      key={opt.value}
                      type="button"
                      onClick={() => updateField("usage", opt.value)}
                      className={cn(
                        "px-4 py-3 rounded-xl border-2 transition-all duration-200 text-left",
                        formData.usage === opt.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <p className={cn(
                        "font-medium text-sm",
                        formData.usage === opt.value ? "text-blue-700" : "text-slate-700"
                      )}>
                        {opt.label}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">{opt.desc}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-700 mb-3">Prioridades (escolha até 3)</p>
                <div className="flex flex-wrap gap-2">
                  {prioritiesList.map((p) => (
                    <motion.button
                      key={p.value}
                      type="button"
                      onClick={() => togglePriority(p.value)}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border-2 transition-all duration-200 text-sm",
                        formData.priorities.includes(p.value)
                          ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      )}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span>{p.icon}</span>
                      {p.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-slate-500 text-sm mb-1">Pergunta 6 de {totalSteps}</p>
              <h3 className="font-display text-2xl font-bold text-slate-800">
                Onde enviamos suas opções?
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                Nossa equipe entrará em contato pelo WhatsApp
              </p>
            </div>
            <div className="max-w-md mx-auto space-y-4 pt-4">
              <div>
                <label className="input-label">Nome *</label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="input-field"
                  autoFocus
                />
              </div>
              <div>
                <label className="input-label">WhatsApp *</label>
                <input
                  type="tel"
                  placeholder="(81) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => updateField("whatsapp", e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="input-label">Cidade *</label>
                <input
                  type="text"
                  placeholder="Sua cidade"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isComplete) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white px-4" id="diagnostic">
        <div className="max-w-md w-full text-center">
          <motion.div
            className="relative mx-auto w-32 h-32 mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <svg className="w-full h-full" viewBox="0 0 128 128">
              <circle
                cx="64" cy="64" r="60"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="4"
              />
              <motion.circle
                cx="64" cy="64" r="60"
                fill="none"
                stroke="#2563EB"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 60}
                initial={{ strokeDashoffset: 2 * Math.PI * 60 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                transform="rotate(-90 64 64)"
              />
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
              >
                <circle cx="64" cy="64" r="24" fill="#2563EB" />
                <path d="M50 64 l10 10 l18-18" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </motion.g>
            </svg>
          </motion.div>

          <motion.h3
            className="font-display text-2xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Analisando seu perfil
          </motion.h3>

          <div className="space-y-3 mb-8">
            {[
              "Identificando necessidades",
              "Calculando compatibilidade",
              "Cruzando preferências",
              "Verificando disponibilidade",
              "Localizando oportunidades",
              "Preparando recomendação",
            ].map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-slate-50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.3 }}
              >
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-slate-600">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="w-full h-1.5 bg-slate-100 rounded-full mb-8 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 mb-6">
              <h4 className="font-display text-xl font-bold text-slate-800 mb-2">
                Encontramos opções compatíveis com seu perfil!
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Nossa equipe já começou a pesquisar os veículos ideais para você.
                Em breve um consultor especializado da NextCar entrará em contato
                pelo WhatsApp apresentando apenas opções realmente compatíveis
                com suas necessidades.
              </p>
            </div>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-display font-semibold text-sm hover:bg-blue-700 transition-all shadow-blue"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Voltar ao Início
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-slate-50" id="diagnostic">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <span className="font-display font-semibold text-sm text-slate-700">NextCar Diagnóstico</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                {step + 1} / {totalSteps}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all duration-300",
                      i <= step ? "bg-blue-500" : "bg-slate-200"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="h-1 bg-slate-100">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="px-6 md:px-10 py-8 md:py-10 min-h-[400px] flex items-center justify-center"
            >
              {showTechOverlay ? (
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-sm text-blue-700 font-medium">
                      {techMessages[techMessageIndex]}
                    </span>
                  </div>
                  <div className="flex justify-center gap-1">
                    {[0, 0.2, 0.4, 0.6, 0.8].map((d) => (
                      <motion.div
                        key={d}
                        className="w-2 h-2 rounded-full bg-blue-400"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, delay: d, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                renderStep()
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/50">
            <motion.button
              onClick={goBack}
              disabled={step === 0}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                step === 0
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
              )}
              whileHover={step > 0 ? { x: -2 } : {}}
              whileTap={step > 0 ? { scale: 0.97 } : {}}
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </motion.button>

            <motion.button
              onClick={step === totalSteps - 1 ? handleSubmit : goNext}
              disabled={!canProceed() || isSubmitting || showTechOverlay}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-display font-semibold text-sm transition-all duration-200",
                (canProceed() && !isSubmitting && !showTechOverlay)
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue"
                  : "bg-slate-100 text-slate-300 cursor-not-allowed"
              )}
              whileHover={(canProceed() && !isSubmitting && !showTechOverlay) ? { scale: 1.03, y: -1 } : {}}
              whileTap={(canProceed() && !isSubmitting && !showTechOverlay) ? { scale: 0.97 } : {}}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processando...
                </>
              ) : step === totalSteps - 1 ? (
                <>
                  Finalizar Diagnóstico
                  <Check className="w-4 h-4" />
                </>
              ) : (
                <>
                  Próximo
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        <motion.p
          className="text-center text-xs text-slate-400 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ao continuar, você concorda com nossa{" "}
          <a href="#" className="text-blue-600 hover:underline">Política de Privacidade</a>
          {" "}e{" "}
          <a href="#" className="text-blue-600 hover:underline">Termos de Uso</a>
        </motion.p>
      </div>
    </section>
  );
};
