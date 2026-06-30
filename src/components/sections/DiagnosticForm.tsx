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

const budgetOptions = [
  "Até R$ 30 mil",
  "Até R$ 50 mil",
  "Até R$ 80 mil",
  "Até R$ 120 mil",
  "Até R$ 200 mil",
  "Acima de R$ 200 mil",
];

const usageOptions = [
  { value: "daily" as const, label: "Uso diário" },
  { value: "family" as const, label: "Família / Viagens" },
  { value: "work" as const, label: "Trabalho" },
  { value: "leisure" as const, label: "Lazer" },
  { value: "first" as const, label: "Primeiro carro" },
] as const;

const financingOptions = [
  { value: "yes" as const, label: "Sim" },
  { value: "maybe" as const, label: "Talvez" },
  { value: "no" as const, label: "Não" },
] as const;

const tradeInOptions = [
  { value: "yes" as const, label: "Sim" },
  { value: "no" as const, label: "Não" },
] as const;

const OptionPill = ({
  selected,
  onClick,
  children,
  disabled = false,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`pill-base ${selected ? "selected" : ""} ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
  >
    {children}
  </button>
);

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error = false,
  autoFocus = false,
  required = false,
}: {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  autoFocus?: boolean;
  required?: boolean;
}) => (
  <div className="w-full">
    {label && (
      <label className="block text-caption text-[var(--fg-secondary)] mb-1.5 font-medium">
        {label} {required && <span className="text-[var(--color-error)]" aria-hidden="true">*</span>}
      </label>
    )}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input-base ${error ? "error" : ""}`}
      autoFocus={autoFocus}
      aria-invalid={error}
      aria-describedby={error ? `${label}-error` : undefined}
    />
    {error && (
      <p id={`${label}-error`} className="mt-1.5 text-caption text-[var(--color-error)]" role="alert">
        Preencha este campo
      </p>
    )}
  </div>
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
  const [errors, setErrors] = React.useState<Record<string, boolean>>({});

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as string]) {
      setErrors((prev) => ({ ...prev, [field as string]: false }));
    }
  };

  const togglePriority = (p: string) => {
    setData((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(p)
        ? prev.priorities.filter((x) => x !== p)
        : [...prev.priorities, p],
    }));
  };

  const validateStep = () => {
    const newErrors: Record<string, boolean> = {};
    let valid = true;

    switch (step) {
      case 0:
        if (data.name.trim().length < 2) {
          newErrors.name = true;
          valid = false;
        }
        if (data.whatsapp.trim().length < 10) {
          newErrors.whatsapp = true;
          valid = false;
        }
        break;
      case 1:
        if (data.city.trim().length < 2) {
          newErrors.city = true;
          valid = false;
        }
        break;
      case 2:
        if (data.knowsCar === null) {
          newErrors.knowsCar = true;
          valid = false;
        } else if (data.knowsCar === "yes" && data.carModel.trim().length < 2) {
          newErrors.carModel = true;
          valid = false;
        }
        break;
      case 3:
        if (!data.budget) {
          newErrors.budget = true;
          valid = false;
        }
        break;
      case 4:
        if (!data.usage) {
          newErrors.usage = true;
          valid = false;
        }
        break;
      case 5:
        valid = true;
        break;
    }

    setErrors(newErrors);
    return valid;
  };

  const goNext = () => {
    if (validateStep()) {
      if (step < steps.length - 1) {
        setStep((s) => s + 1);
      } else {
        startAnalysis();
      }
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

  const progress = Math.round(((step + 1) / steps.length) * 100);

  /* ── Completed State ─────────────────────── */
  if (completed) {
    return (
      <section className="section-padding bg-[var(--bg)]" id="diagnostico">
        <div className="container-max max-w-md mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 500, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-[var(--color-success)]" aria-hidden="true" />
            </div>

            <h3 className="text-display-md text-[var(--fg)] mb-3 tracking-tight">
              Diagnóstico concluído
            </h3>
            <p className="text-body text-[var(--fg-secondary)] leading-relaxed mb-10 max-w-sm mx-auto">
              Nossa equipe já iniciou a pesquisa. Em breve um consultor NextCar
              entrará em contato pelo WhatsApp com as melhores opções.
            </p>

            <div className="max-w-xs mx-auto mb-10">
              <div className="h-1.5 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--accent-secondary)] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1000, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <div className="flex justify-between mt-3 text-caption text-[var(--fg-muted)]">
                <span>Processando</span>
                <span>100%</span>
              </div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-primary w-full sm:w-auto"
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
      <section className="section-padding bg-[var(--bg)]" id="diagnostico">
        <div className="container-max max-w-sm mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 500, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <Loader2 className="w-10 h-10 text-[var(--accent-tertiary)] animate-spin mx-auto mb-4" aria-hidden="true" />
            <p className="text-body text-[var(--fg-secondary)]">Processando diagnóstico</p>
          </motion.div>

          <div className="space-y-3 text-left">
            {[
              "Recebendo seus dados",
              "Analisando preferências",
              "Calculando perfil ideal",
              "Preparando pesquisa",
              "Quase pronto",
            ].map((msg, i) => (
              <motion.div
                key={msg}
                className={`flex items-center gap-3 text-body transition-all duration-300 ${
                  i < analysingStep ? "text-[var(--fg)]" : "text-[var(--fg-muted)]"
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 300, delay: i * 100 }}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    i < analysingStep
                      ? "bg-[var(--color-success)] border-[var(--color-success)]"
                      : i === analysingStep
                      ? "border-[var(--accent-tertiary)]"
                      : "border-[var(--border-default)]"
                  }`}
                >
                  {i < analysingStep && <Check className="w-4 h-4 text-white" />}
                  {i === analysingStep && <Loader2 className="w-4 h-4 text-[var(--accent-tertiary)] animate-spin" />}
                </div>
                {msg}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── Form ────────────────────────────────── */
  return (
    <section className="section-padding bg-[var(--bg)]" id="diagnostico">
      <div className="container-max max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 600, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Progress indicator */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-caption text-[var(--fg-secondary)] font-medium">
                Diagnóstico
              </span>
              <span className="text-caption font-mono text-[var(--fg-muted)]">
                {step + 1} de {steps.length}
              </span>
            </div>
            <div className="h-1.5 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[var(--accent-tertiary)] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 600, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="flex justify-between mt-2 text-overline text-[var(--fg-muted)]">
              {steps.map((s, i) => (
                <span
                  key={s.label}
                  className={`flex-1 text-center transition-colors ${
                    i <= step ? "text-[var(--accent-tertiary)] font-semibold" : ""
                  }`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 1.02 }}
              transition={{ duration: 300, ease: [0.16, 1, 0.3, 1] }}
            >
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-h1 text-[var(--fg)] tracking-tight mb-1">
                      Qual seu nome?
                    </h3>
                    <p className="text-body text-[var(--fg-secondary)]">
                      Para personalizar sua experiência
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Input
                      label="Nome completo"
                      placeholder="Seu nome completo"
                      value={data.name}
                      onChange={(e) => update("name", e.target.value)}
                      error={errors.name}
                      required
                      autoFocus
                    />
                    <Input
                      label="WhatsApp"
                      type="tel"
                      placeholder="(81) 99999-9999"
                      value={data.whatsapp}
                      onChange={(e) => update("whatsapp", e.target.value)}
                      error={errors.whatsapp}
                      required
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-h1 text-[var(--fg)] tracking-tight mb-1">
                      Qual sua cidade?
                    </h3>
                    <p className="text-body text-[var(--fg-secondary)]">
                      Atendemos Recife e toda Região Metropolitana
                    </p>
                  </div>
                  <Input
                    label="Cidade"
                    placeholder="Sua cidade"
                    value={data.city}
                    onChange={(e) => update("city", e.target.value)}
                    error={errors.city}
                    required
                    autoFocus
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-h1 text-[var(--fg)] tracking-tight">
                    Você já sabe qual carro procura?
                  </h3>
                  <div className="flex gap-3" role="radiogroup" aria-label="Sabe qual carro">
                    {(["yes", "no"] as const).map((opt) => (
                      <OptionPill
                        key={opt}
                        selected={data.knowsCar === opt}
                        onClick={() => {
                          update("knowsCar", opt);
                          if (opt === "no") update("carModel", "");
                        }}
                      >
                        {opt === "yes" ? "Sim" : "Ainda não"}
                      </OptionPill>
                    ))}
                  </div>
                  {data.knowsCar === "yes" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      transition={{ duration: 300 }}
                    >
                      <Input
                        label="Qual carro?"
                        placeholder="Ex: Honda HR-V 2024"
                        value={data.carModel}
                        onChange={(e) => update("carModel", e.target.value)}
                        error={errors.carModel}
                        required
                        autoFocus
                      />
                    </motion.div>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-h1 text-[var(--fg)] tracking-tight">
                    Qual seu orçamento máximo?
                  </h3>
                  <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Orçamento">
                    {budgetOptions.map((opt) => (
                      <OptionPill
                        key={opt}
                        selected={data.budget === opt}
                        onClick={() => update("budget", opt)}
                      >
                        {opt}
                      </OptionPill>
                    ))}
                  </div>
                  {errors.budget && (
                    <p className="text-caption text-[var(--color-error)]" role="alert">
                      Selecione uma opção
                    </p>
                  )}
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-h1 text-[var(--fg)] tracking-tight mb-5">
                      Para que vai usar o carro?
                    </h3>
                    <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Uso do carro">
                      {usageOptions.map((opt) => (
                        <OptionPill
                          key={opt.value}
                          selected={data.usage === opt.value}
                          onClick={() => update("usage", opt.value)}
                        >
                          {opt.label}
                        </OptionPill>
                      ))}
                    </div>
                    {errors.usage && (
                      <p className="mt-2 text-caption text-[var(--color-error)]" role="alert">
                        Selecione uma opção
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-caption text-[var(--fg-secondary)] mb-3 font-medium">
                      Prioridades{" "}
                      <span className="text-[var(--fg-muted)] font-normal">
                        (opcional, selecione quantas quiser)
                      </span>
                    </p>
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Prioridades">
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
                  <h3 className="text-h1 text-[var(--fg)] tracking-tight">
                    Mais alguns detalhes
                  </h3>
                  <div>
                    <p className="text-caption text-[var(--fg-secondary)] mb-3 font-medium">
                      Tem interesse em financiamento?
                    </p>
                    <div className="flex gap-3" role="radiogroup" aria-label="Financiamento">
                      {financingOptions.map((opt) => (
                        <OptionPill
                          key={opt.value}
                          selected={data.financing === opt.value}
                          onClick={() => update("financing", opt.value)}
                        >
                          {opt.label}
                        </OptionPill>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-caption text-[var(--fg-secondary)] mb-3 font-medium">
                      Possui veículo para troca?
                    </p>
                    <div className="flex gap-3" role="radiogroup" aria-label="Troca">
                      {tradeInOptions.map((opt) => (
                        <OptionPill
                          key={opt.value}
                          selected={data.tradeIn === opt.value}
                          onClick={() => update("tradeIn", opt.value)}
                        >
                          {opt.label}
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
              className={`inline-flex items-center gap-2 text-body transition-colors ${
                step === 0
                  ? "text-[var(--fg-muted)] cursor-default"
                  : "text-[var(--fg-secondary)] hover:text-[var(--fg)]"
              }`}
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              Voltar
            </button>
            <button
              onClick={goNext}
              className="btn-primary group"
            >
              {step === steps.length - 1 ? "Finalizar" : "Continuar"}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>

          {/* Privacy */}
          <div className="flex items-center justify-center gap-5 mt-10 pt-6 border-t border-[var(--border-subtle)]">
            <div className="flex items-center gap-1.5 text-caption text-[var(--fg-muted)]">
              <Shield className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" aria-hidden="true" />
              Dados protegidos
            </div>
            <span className="text-[var(--border-default)]" aria-hidden="true">·</span>
            <p className="text-caption text-[var(--fg-muted)]">
              <a href="#" className="text-[var(--accent-tertiary)] hover:underline">
                Privacidade
              </a>{" "}
              e{" "}
              <a href="#" className="text-[var(--accent-tertiary)] hover:underline">
                Termos
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};