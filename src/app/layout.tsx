import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A2E",
};

export const metadata: Metadata = {
  title: "NextCar - Consultoria Automotiva Inteligente | Encontre Seu Carro Ideal em Recife",
  description:
    "Pare de procurar carro. Nós pesquisamos o mercado e encontramos o veículo ideal para você. Diagnóstico gratuito em menos de 2 minutos. Atendimento em Recife e Região Metropolitana.",
  openGraph: {
    title: "NextCar - Consultoria Automotiva Inteligente",
    description:
      "Pare de procurar carro. Nós pesquisamos o mercado e encontramos o veículo ideal para você. Diagnóstico gratuito em menos de 2 minutos.",
    type: "website",
    locale: "pt_BR",
    siteName: "NextCar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        {children}
      </body>
    </html>
  );
}