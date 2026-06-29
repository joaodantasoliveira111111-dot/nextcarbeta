"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Shield, Loader2 } from "lucide-react";

type KnowsCar = "yes" | "no" | null;
type Financing = "yes" | "no" | "maybe" | null;
type TradeIn = "yes" | "no" | null;
type Usage = "daily" | "family" | "work" | "leisure" | "first" | null;

interface FormData {
  name: string;
  whatsapp: string;
  city: string;
  knowsCar: KnowsCar;
  carModel: string;
  budget: string;
  usage: Usage;
  priorities: string[];
  financing: Financing;
  tradeIn: TradeIn;
}

const priorities = [
  "Economia",
  "Segurança",
  "Tecnologia",
  "Conforto",
  "Design",
  "Espaço",
  "Performance",
];

const steps = [
  { label: "Nome", number: 1 },
  { label: "Cidade", number: 2 },
  { label: "Carro", number: 3 },
  { label: "Orçamento", number: 4 },
  { label: "Uso", number: 5 },
  { label: "Detalhes", number: 6 },
];

const OptionPill = ({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2.5 rounded-[10px] text-sm border transition-all duration-200 ${
      selected
        ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
    }`}
  >
    {children}
  </button>
);

export const DiagnosticForm = () => {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState<FormData>({
    name: "",
    whatsapp: "",
    city: "",
    knowsCar: null,
    carModel: "",
    budget: "",
    usage: null,
    priorities: [],
    financing: null,
    tradeIn: null,
  });
  const [completed, setCompleted] = React.useState(false);
  const [analysing, setAnalysing] = React.useState(false);
  const [analysingStep, setAnalysingStep] = React.useState(0);

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const togglePriority = (p: string) => {
    setData((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(p)
        ? prev.priorities.filter((x) => x !== p)
        : [...prev.priorities, p],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return (
          data.name.trim().length >= 2 && data.whatsapp.trim().length >= 10
        );
      case 1:
        return data.city.trim().length >= 2;
      case 2:
        return (
          data.knowsCar !== null &&
          (data.knowsCar === "no" || data.carModel.trim().length >= 2)
        );
      case 3:
        return data.budget !== "";
      case 4:
        return data.usage !== null;
      case 5:
        return true;
      default:
        return false;
    }
  };

  const goNext = () => {
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
    } else {
      startAnalysis();
    }
  };

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const startAnalysis = () => {
    setAnalysing(true);
    const messages = [
      "Recebendo seus dados",
      "Analisando preferências",
      "Calculando perfil ideal",
      "Preparando pesquisa",
      "Quase pronto",
    ];
    messages.forEach((_, i) => {
      setTimeout(() => setAnalysingStep(i + 1), (i + 1) * 700);
    });
    setTimeout(() => {
      setAnalysing(false);
      setAnalysingStep(0);
      setCompleted(true);
    }, messages.length * 700 + 600);
  };

  const progress = Math.round((step / (steps.length - 1)) * 100);

  /* ── Completed State ─────────────────────── */
  if (completed) {
    return (
      <section className="section-padding bg-white" id="diagnostic">
        <div className="max-w-md mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
              <Check className="w-6 h-6 text-blue-600" />
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
              Diagnóstico concluído
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
              Nossa equipe já iniciou a pesquisa. Em breve um consultor NextCar
              entrará em contato pelo WhatsApp com as melhores opções.
            </p>

            <div className="max-w-xs mx-auto mb-8">
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-gray-400">
                <span>Processando</span>
                <span>100%</span>
              </div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-5 py-2.5 rounded-[10px] bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              Voltar ao início
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  /* ── Analysing State ─────────────────────── */
  if (analysing) {
    return (
      <section className="section-padding bg-white" id="diagnostic">
        <div className="max-w-sm mx-auto text-center px-4">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
            </div>
            <p className="text-sm text-gray-500">Processando diagnóstico</p>
          </div>

          <div className="space-y-3 text-left">
            {[
              "Recebendo seus dados",
              "Analisando preferências",
              "Calculando perfil ideal",
              "Preparando pesquisa",
              "Quase pronto",
            ].map((msg, i) => (
              <div
                key={msg}
                className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                  i < analysingStep ? "text-gray-700" : "text-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    i < analysingStep
                      ? "bg-blue-600 border-blue-600"
                      : "border-gray-200"
                  }`}
                >
                  {i < analysingStep && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                {msg}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── Form ────────────────────────────────── */
  return (
    <section className="section-padding bg-white" id="diagnostic">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            <span className="font-medium text-gray-600">Diagnóstico</span>
            <span className="text-gray-300">/</span>
            <span>{steps[step].label}</span>
            <span className="ml-auto text-gray-300 font-mono">
              {step + 1} de {steps.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-[3px] bg-gray-100 rounded-full mb-12">
            <div
              className="h-[3px] bg-blue-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {step === 0 && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl md:text-[1.75rem] font-bold text-gray-900 tracking-tight">
                    Qual seu nome?
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      value={data.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-[10px] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all bg-white text-gray-900 placeholder-gray-400"
                      autoFocus
                    />
                    <div>
                      <label className="block text-sm text-gray-500 mb-1.5 font-medium">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="(81) 99999-9999"
                        value={data.whatsapp}
                        onChange={(e) => update("whatsapp", e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-[10px] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all bg-white text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-[1.75rem] font-bold text-gray-900 tracking-tight mb-1">
                      Qual sua cidade?
                    </h3>
                    <p className="text-sm text-gray-400">
                      Atendemos Recife e toda Região Metropolitana
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="Sua cidade"
                    value={data.city}
                    onChange={(e) => update("city", e.target.value)}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-[10px] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all bg-white text-gray-900 placeholder-gray-400"
                    autoFocus
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl md:text-[1.75rem] font-bold text-gray-900 tracking-tight">
                    Você já sabe qual carro procura?
                  </h3>
                  <div className="flex gap-3">
                    {(["yes", "no"] as const).map((opt) => (
                      <OptionPill
                        key={opt}
                        selected={data.knowsCar === opt}
                        onClick={() => update("knowsCar", opt)}
                      >
                        {opt === "yes" ? "Sim" : "Ainda não"}
                      </OptionPill>
                    ))}
                  </div>
                  {data.knowsCar === "yes" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm text-gray-500 mb-1.5 font-medium">
                        Qual carro?
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Honda HR-V 2024"
                        value={data.carModel}
                        onChange={(e) => update("carModel", e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-[10px] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all bg-white text-gray-900 placeholder-gray-400"
                        autoFocus
                      />
                    </motion.div>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl md:text-[1.75rem] font-bold text-gray-900 tracking-tight">
                    Qual seu orçamento máximo?
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      "Até R$ 30 mil",
                      "Até R$ 50 mil",
                      "Até R$ 80 mil",
                      "Até R$ 120 mil",
                      "Até R$ 200 mil",
                      "Acima de R$ 200 mil",
                    ].map((opt) => (
                      <OptionPill
                        key={opt}
                        selected={data.budget === opt}
                        onClick={() => update("budget", opt)}
                      >
                        {opt}
                      </OptionPill>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="font-display text-2xl md:text-[1.75rem] font-bold text-gray-900 tracking-tight mb-5">
                      Para que vai usar o carro?
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {(
                        [
                          { value: "daily" as const, label: "Uso diário" },
                          {
                            value: "family" as const,
                            label: "Família / Viagens",
                          },
                          { value: "work" as const, label: "Trabalho" },
                          { value: "leisure" as const, label: "Lazer" },
                          {
                            value: "first" as const,
                            label: "Primeiro carro",
                          },
                        ] as const
                      ).map((opt) => (
                        <OptionPill
                          key={opt.value}
                          selected={data.usage === opt.value}
                          onClick={() => update("usage", opt.value)}
                        >
                          {opt.label}
                        </OptionPill>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-3 font-medium">
                      Prioridades{" "}
                      <span className="text-gray-400 font-normal">
                        (opcional)
                      </span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {priorities.map((p) => (
                        <OptionPill
                          key={p}
                          selected={data.priorities.includes(p)}
                          onClick={() => togglePriority(p)}
                        >
                          {p}
                        </OptionPill>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-8">
                  <h3 className="font-display text-2xl md:text-[1.75rem] font-bold text-gray-900 tracking-tight">
                    Mais alguns detalhes
                  </h3>
                  <div>
                    <p className="text-sm text-gray-500 mb-3 font-medium">
                      Tem interesse em financiamento?
                    </p>
                    <div className="flex gap-2.5">
                      {(["yes", "maybe", "no"] as const).map((opt) => (
                        <OptionPill
                          key={opt}
                          selected={data.financing === opt}
                          onClick={() => update("financing", opt)}
                        >
                          {opt === "yes"
                            ? "Sim"
                            : opt === "maybe"
                              ? "Talvez"
                              : "Não"}
                        </OptionPill>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-3 font-medium">
                      Possui veículo para troca?
                    </p>
                    <div className="flex gap-2.5">
                      {(["yes", "no"] as const).map((opt) => (
                        <OptionPill
                          key={opt}
                          selected={data.tradeIn === opt}
                          onClick={() => update("tradeIn", opt)}
                        >
                          {opt === "yes" ? "Sim" : "Não"}
                        </OptionPill>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={goBack}
              disabled={step === 0}
              className={`inline-flex items-center gap-1.5 text-sm transition-colors ${
                step === 0
                  ? "text-gray-300 cursor-default"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Voltar
            </button>
            <button
              onClick={goNext}
              disabled={!canProceed()}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-sm font-semibold transition-all duration-200 ${
                canProceed()
                  ? "bg-orange-500 text-white hover:bg-orange-600 shadow-sm"
                  : "bg-gray-100 text-gray-300 cursor-not-allowed"
              }`}
            >
              {step === steps.length - 1 ? "Finalizar" : "Continuar"}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Privacy */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
              <Shield className="w-3 h-3 text-blue-500" />
              Dados protegidos
            </div>
            <span className="text-gray-200">·</span>
            <p className="text-[11px] text-gray-400">
              <a href="#" className="text-blue-600 hover:underline">
                Privacidade
              </a>{" "}
              e{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Termos
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
