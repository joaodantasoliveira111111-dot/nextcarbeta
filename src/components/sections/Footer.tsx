"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Endereço", value: "Recife - PE", href: "#" },
  { icon: Phone, label: "Telefone", value: "(81) 3000-0000", href: "tel:+558130000000" },
  { icon: Mail, label: "E-mail", value: "contato@nextcar.com.br", href: "mailto:contato@nextcar.com.br" },
  { icon: MessageSquare, label: "WhatsApp", value: "(81) 99999-9999", href: "https://wa.me/5581999999999" },
];

const footerLinks = {
  empresa: [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#cta" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "LGPD", href: "#" },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-slate-800">NextCar</span>
                <span className="block text-[10px] text-slate-400 font-medium">Consultoria Automotiva Inteligente</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-6">
              Representamos quem compra. Pesquisamos o mercado, selecionamos as melhores opções e apresentamos para você escolher. Sem perder tempo.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: MessageSquare, href: "https://wa.me/5581999999999", label: "WhatsApp" },
                { icon: Mail, href: "mailto:contato@nextcar.com.br", label: "E-mail" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-slate-800 text-sm mb-4">Empresa</h4>
            <nav className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-semibold text-slate-800 text-sm mb-4">Legal</h4>
            <nav className="space-y-3">
              {footerLinks.legal.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-semibold text-slate-800 text-sm mb-4">Contato</h4>
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-start gap-2.5 text-sm text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <contact.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{contact.value}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-slate-400">
            &copy; {currentYear} NextCar. Todos os direitos reservados.
            <br />
            CNPJ: 00.000.000/0001-00 &bull; Recife - PE
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-medium text-slate-500">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Site Seguro
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-medium text-slate-500">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Certificado SSL
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
