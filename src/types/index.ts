export enum DiagnosticStep {
  BUDGET = 1,
  USAGE = 2,
  FUEL = 3,
  TRADE_IN = 4,
  CONTACT = 5,
}

export interface DiagnosticFormData {
  budget: string;
  usage: string;
  fuel: string;
  hasTradeIn: boolean;
  tradeInDetails?: {
    brand: string;
    model: string;
    year: string;
    condition: string;
  };
  timeline: string;
  name: string;
  phone: string;
  email: string;
}

export interface LeadData extends DiagnosticFormData {
  source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  timestamp: string;
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
}

export interface FormValidationErrors {
  budget?: string;
  usage?: string;
  fuel?: string;
  tradeInDetails?: {
    brand?: string;
    model?: string;
    year?: string;
    condition?: string;
  };
  timeline?: string;
  name?: string;
  phone?: string;
  email?: string;
}