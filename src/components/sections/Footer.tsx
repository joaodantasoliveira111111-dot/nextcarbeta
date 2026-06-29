"use client";

import * as React from "react";
import { Shield } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200/80 py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Logo & Info */}
          <div className="space-y-4 md:col-span-1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="font-display font-bold text-base text-gray-900 tracking-tight">
                NextCar
              </span>
            </a>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[220px]">
              Consultoria automotiva inteligente. Nós representamos quem compra, não quem vende.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Como funciona", href: "#como-funciona" },
                { label: "Diferenciais", href: "#beneficios" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {["Privacidade", "Termos de Uso", "Cookies"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>contato@nextcar.com.br</li>
              <li>Recife - PE</li>
              <li className="pt-2 flex items-center gap-1.5 text-green-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Atendimento ativo
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-400">
            &copy; {year} NextCar. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] bg-gray-50 text-gray-500 border border-gray-200">
              <Shield className="w-3 h-3 text-blue-600" />
              Conexão Segura
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
