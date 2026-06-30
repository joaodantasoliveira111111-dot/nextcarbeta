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
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--border-subtle)] py-12 md:py-16 px-4 md:px-6">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12 lg:mb-16">
          {/* Logo & Info */}
          <div className="space-y-4 lg:col-span-1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)] flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <span className="font-display font-bold text-base text-[var(--fg)] tracking-tight">
                NextCar
              </span>
            </a>
            <p className="text-body-sm text-[var(--fg-secondary)] leading-relaxed max-w-[280px]">
              Consultoria automotiva inteligente. Nós representamos quem compra, não quem vende.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-overline text-[var(--fg-muted)] mb-5">
              Empresa
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Como funciona", href: "#como-funciona" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-body-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-overline text-[var(--fg-muted)] mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {["Privacidade", "Termos de Uso", "Cookies"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-body-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-overline text-[var(--fg-muted)] mb-5">
              Contato
            </h4>
            <ul className="space-y-2.5 text-body-sm text-[var(--fg-secondary)]">
              <li>contato@nextcar.com.br</li>
              <li>Recife - PE</li>
              <li className="pt-2 flex items-center gap-2 text-[var(--color-success)] font-medium">
                <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" aria-hidden="true" />
                Atendimento ativo
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-[var(--fg-muted)]">
            &copy; {year} NextCar. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="glass-subtle inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-caption">
              <Shield className="w-3.5 h-3.5 text-[var(--color-success)]" aria-hidden="true" />
              Conexão Segura
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};