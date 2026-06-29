"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  "Economia", "Segurança", "Tecnologia", "Conforto", "Design", "Espaço", "Performance",
];

const steps = [
  { label: "Nome" },
  { label: "Cidade" },
  { label: "Carro" },
  { label: "Orçamento" },
  { label: "Uso" },
  { label: "Detalhes" },
];

export const DiagnosticForm = () => {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState<FormData>({
    name: "", whatsapp: "", city: "", knowsCar: null, carModel: "",
    budget: "", usage: null, priorities: [], financing: null, tradeIn: null,
  });
  const [completed, setCompleted] = React.useState(false);
  const [analysing, setAnalysing] = React.useState(false);
  const [analysingStep, setAnalysingStep] = React.useState(0);

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const togglePriority = (p: string) => {
    setData(prev => ({
      ...prev,
      priorities: prev.priorities.includes(p)
        ? prev.priorities.filter(x => x !== p)
        : [...prev.priorities, p],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 0: return data.name.trim().length >= 2 && data.whatsapp.trim().length >= 10;
      case 1: return data.city.trim().length >= 2;
      case 2: return data.knowsCar !== null && (data.knowsCar === "no" || data.carModel.trim().length >= 2);
      case 3: return data.budget !== "";
      case 4: return data.usage !== null;
      case 5: return true;
      default: return false;
    }
  };

  const goNext = () => {
    if (step < steps.length - 1) {
      setStep(s => s + 1);
    } else {
      startAnalysis();
    }
  };

  const goBack = () => {
    if (step > 0) setStep(s => s - 1);
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

  const progress = ((step) / (steps.length - 1)) * 100;

  if (completed) {
    return (
      <section className="section-padding bg-white" id="diagnostic">
        <div className="container-max max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
              </svg>
            </div>

            <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
              Diagnóstico concluído
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Nossa equipe já iniciou a pesquisa. Em breve um consultor NextCar
              entrará em contato pelo WhatsApp com as melhores opções para você.
            </p>

            <div className="max-w-xs mx-auto space-y-2 mb-8">
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-400">
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

  if (analysing) {
    return (
      <section className="section-padding bg-gray-50" id="diagnostic">
        <div className="container-max max-w-md text-center">
          <div className="p-10 border border-gray-200 rounded-xl bg-white">
            <div className="flex items-center justify-center gap-1 mb-8">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-blue-600"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                />
              ))}
            </div>

            <div className="space-y-3 text-left max-w-xs mx-auto">
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
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                    i < analysingStep
                      ? "bg-blue-600 border-blue-600"
                      : "border-gray-200"
                  }`}>
                    {i < analysingStep && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>
                    )}
                  </div>
                  {msg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gray-50" id="diagnostic">
      <div className="container-max max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-2 flex items-center gap-3 text-xs text-gray-400">
            <span className="font-medium text-gray-600">Diagnóstico</span>
            <span className="text-gray-300">/</span>
            <span>{steps[step].label}</span>
          </div>

          <div className="h-1 bg-gray-100 rounded-full mb-10">
            <div className="h-1 bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {step === 0 && (
                <div className="space-y-5 max-w-sm">
                  <h3 className="font-display text-xl font-bold text-gray-900">Qual seu nome?</h3>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    value={data.name}
                    onChange={e => update("name", e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-[10px] outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                    autoFocus
                  />
                  <div>
                    <label className="block text-sm text-gray-500 mb-1.5">WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="(81) 99999-9999"
                      value={data.whatsapp}
                      onChange={e => update("whatsapp", e.target.value)}
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-[10px] outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-5 max-w-sm">
                  <h3 className="font-display text-xl font-bold text-gray-900">Qual sua cidade?</h3>
                  <input
                    type="text"
                    placeholder="Sua cidade"
                    value={data.city}
                    onChange={e => update("city", e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-[10px] outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                    autoFocus
                  />
                  <p className="text-xs text-gray-400">Atendemos Recife e toda Região Metropolitana</p>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 max-w-sm">
                  <h3 className="font-display text-xl font-bold text-gray-900">Você já sabe qual carro procura?</h3>
                  <div className="flex gap-2">
                    {(["yes", "no"] as const).map(opt => (
                      <button
                        key={opt}
                        onClick={() => update("knowsCar", opt)}
                        className={`flex-1 py-2.5 rounded-[10px] text-sm font-medium border transition-colors ${
                          data.knowsCar === opt
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {opt === "yes" ? "Sim" : "Ainda não"}
                      </button>
                    ))}
                  </div>
                  {data.knowsCar === "yes" && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                      <label className="block text-sm text-gray-500 mb-1.5">Qual carro?</label>
                      <input
                        type="text"
                        placeholder="Ex: Honda HR-V 2024"
                        value={data.carModel}
                        onChange={e => update("carModel", e.target.value)}
                        className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-[10px] outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                        autoFocus
                      />
                    </motion.div>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5 max-w-sm">
                  <h3 className="font-display text-xl font-bold text-gray-900">Qual seu orçamento máximo?</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Até R$ 30 mil", "Até R$ 50 mil", "Até R$ 80 mil",
                      "Até R$ 120 mil", "Até R$ 200 mil", "Acima de R$ 200 mil",
                    ].map(opt => (
                      <button
                        key={opt}
                        onClick={() => update("budget", opt)}
                        className={`py-2.5 rounded-[10px] text-sm border transition-colors ${
                          data.budget === opt
                            ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 max-w-sm">
                  <div>
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Para que vai usar o carro?</h3>
                    <div className="flex flex-wrap gap-2">
                      {([
                        { value: "daily" as const, label: "Uso diário" },
                        { value: "family" as const, label: "Família / Viagens" },
                        { value: "work" as const, label: "Trabalho" },
                        { value: "leisure" as const, label: "Lazer" },
                        { value: "first" as const, label: "Primeiro carro" },
                      ]).map(opt => (
                        <button
                          key={opt.value}
                          onClick={() => update("usage", opt.value)}
                          className={`px-4 py-2 rounded-[10px] text-sm border transition-colors ${
                            data.usage === opt.value
                              ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                              : "border-gray-200 text-gray-600 hover:border-gray-300"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-3">Prioridades (opcional)</p>
                    <div className="flex flex-wrap gap-2">
                      {priorities.map(p => (
                        <button
                          key={p}
                          onClick={() => togglePriority(p)}
                          className={`px-4 py-2 rounded-[10px] text-sm border transition-colors ${
                            data.priorities.includes(p)
                              ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                              : "border-gray-200 text-gray-600 hover:border-gray-300"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-6 max-w-sm">
                  <h3 className="font-display text-xl font-bold text-gray-900">Mais alguns detalhes</h3>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Tem interesse em financiamento?</p>
                    <div className="flex gap-2">
                      {(["yes", "maybe", "no"] as const).map(opt => (
                        <button
                          key={opt}
                          onClick={() => update("financing", opt)}
                          className={`flex-1 py-2 rounded-[10px] text-sm border transition-colors ${
                            data.financing === opt
                              ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                              : "border-gray-200 text-gray-600 hover:border-gray-300"
                          }`}
                        >
                          {opt === "yes" ? "Sim" : opt === "maybe" ? "Talvez" : "Não"}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Possui veículo para troca?</p>
                    <div className="flex gap-2">
                      {(["yes", "no"] as const).map(opt => (
                        <button
                          key={opt}
                          onClick={() => update("tradeIn", opt)}
                          className={`flex-1 py-2 rounded-[10px] text-sm border transition-colors ${
                            data.tradeIn === opt
                              ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                              : "border-gray-200 text-gray-600 hover:border-gray-300"
                          }`}
                        >
                          {opt === "yes" ? "Sim" : "Não"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-10">
            <button
              onClick={goBack}
              disabled={step === 0}
              className={`text-sm transition-colors ${
                step === 0 ? "text-gray-300 cursor-default" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Voltar
            </button>
            <button
              onClick={goNext}
              disabled={!canProceed()}
              className={`px-5 py-2.5 rounded-[10px] text-sm font-semibold transition-colors ${
                canProceed()
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-gray-100 text-gray-300 cursor-not-allowed"
              }`}
            >
              {step === steps.length - 1 ? "Finalizar" : "Continuar"}
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-6">
            Ao continuar, você concorda com a{" "}
            <a href="#" className="text-blue-600 hover:underline">Política de Privacidade</a>
            {" "}e{" "}
            <a href="#" className="text-blue-600 hover:underline">Termos de Uso</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
