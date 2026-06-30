"use client";

import * as React from "react";
import {
  Header,
  Hero,
  SocialProofStrip,
  HowItWorks,
  Comparison,
  ProductShowcase,
  Differentials,
  DiagnosticForm,
  FAQs,
  CTASection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProofStrip />
        <HowItWorks />
        <Comparison />
        <ProductShowcase />
        <Differentials />
        <DiagnosticForm />
        <FAQs />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}