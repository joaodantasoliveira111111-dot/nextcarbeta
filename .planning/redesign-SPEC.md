# NextCar Landing Page — Complete Redesign SPEC

## Executive Summary

Redesign the entire NextCar landing page from scratch to achieve visual refinement comparable to **Stripe, Vercel, Linear, Apple, Notion, Framer, Raycast, Porsche**. Discard current "AI-template" look. New design system, new color palette, new component architecture. Copy remains identical.

---

## 1. DESIGN SYSTEM FOUNDATION

### 1.1 Color Palette — "Automotive Premium"

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| **Background Primary** | `#FAFAFA` | `#0A0A0A` | Page base |
| **Background Secondary** | `#FFFFFF` | `#111111` | Cards, sections |
| **Background Tertiary** | `#F0F0F0` | `#1A1A1A` | Subtle contrast areas |
| **Foreground Primary** | `#0A0A0A` | `#FAFAFA` | Headlines, primary text |
| **Foreground Secondary** | `#404040` | `#A3A3A3` | Body text, descriptions |
| **Foreground Muted** | `#737373` | `#737373` | Labels, meta, placeholders |
| **Border Subtle** | `#E5E5E5` | `#262626` | Dividers, input borders |
| **Border Default** | `#D4D4D4` | `#333333` | Card borders, focus rings |
| **Accent Primary** | `#1A1A2E` | `#E8E8F0` | **Brand navy** — primary actions, key highlights |
| **Accent Secondary** | `#C9A84C` | `#D4B85C` | **Champagne gold** — premium accents, CTAs |
| **Accent Tertiary** | `#0066CC` | `#60A5FA` | **Electric blue** — links, secondary actions |
| **Success** | `#059669` | `#34D399` | Completed states |
| **Warning** | `#D97706` | `#FBBF24` | Pending states |
| **Error** | `#DC2626` | `#EF4444` | Errors, destructive |

**Rationale**: Navy + Champagne + Electric Blue = automotive luxury (Porsche, Mercedes AMG, BMW Individual) + tech credibility (Stripe navy, Linear dark). No generic SaaS blue/orange.

### 1.2 Typography — "Inter + Display"

| Element | Font | Size (Mobile) | Size (Desktop) | Weight | Line Height | Letter Spacing |
|---------|------|---------------|----------------|--------|-------------|----------------|
| Display XL | Inter Display | 3.5rem / 56px | 5.5rem / 88px | 700 | 1.02 | -0.03em |
| Display LG | Inter Display | 2.5rem / 40px | 4rem / 64px | 700 | 1.05 | -0.02em |
| Display MD | Inter Display | 2rem / 32px | 3rem / 48px | 600 | 1.1 | -0.01em |
| Heading 1 | Inter | 1.75rem / 28px | 2.25rem / 36px | 600 | 1.2 | -0.01em |
| Heading 2 | Inter | 1.375rem / 22px | 1.5rem / 24px | 600 | 1.3 | 0 |
| Heading 3 | Inter | 1.125rem / 18px | 1.25rem / 20px | 500 | 1.4 | 0 |
| Body LG | Inter | 1.125rem / 18px | 1.125rem / 18px | 400 | 1.7 | 0 |
| Body | Inter | 1rem / 16px | 1rem / 16px | 400 | 1.6 | 0 |
| Body SM | Inter | 0.875rem / 14px | 0.875rem / 14px | 400 | 1.5 | 0 |
| Caption | Inter | 0.75rem / 12px | 0.75rem / 12px | 500 | 1.4 | +0.02em |
| Overline | Inter | 0.625rem / 10px | 0.625rem / 10px | 600 | 1.5 | +0.1em |

**Font Loading**: `next/font/google` with `variable: "--font-inter"`, subsets `["latin"]`, `display: "swap"`, `preload: true`.

### 1.3 Spacing System — "8px Base Grid"

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Base unit |
| `space-3` | 12px | Small gaps |
| `space-4` | 16px | Standard gaps |
| `space-5` | 24px | Medium gaps |
| `space-6` | 32px | Large gaps |
| `space-7` | 48px | Section internal |
| `space-8` | 64px | Section separation |
| `space-9` | 96px | Major section padding |
| `space-10` | 128px | Hero vertical |

**Container**: `max-width: 72rem (1152px)` with `padding-inline: 1.5rem (mobile) → 3rem (desktop)`.

### 1.4 Radius System

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 6px | Pills, badges, small inputs |
| `radius-md` | 10px | Buttons, cards, inputs, modals |
| `radius-lg` | 16px | Large cards, containers |
| `radius-xl` | 24px | Hero mockups, major frames |
| `radius-full` | 9999px | Avatars, progress, pills |

### 1.5 Shadow System — "Ambient Depth"

```css
/* Light mode */
--shadow-xs: 0 1px 2px rgb(0 0 0 / 0.02);
--shadow-sm: 0 1px 3px rgb(0 0 0 / 0.03), 0 1px 2px rgb(0 0 0 / 0.02);
--shadow-md: 0 4px 12px rgb(0 0 0 / 0.04), 0 2px 4px rgb(0 0 0 / 0.02);
--shadow-lg: 0 12px 24px rgb(0 0 0 / 0.05), 0 4px 8px rgb(0 0 0 / 0.03);
--shadow-xl: 0 24px 48px rgb(0 0 0 / 0.06), 0 8px 16px rgb(0 0 0 / 0.04);

/* Dark mode */
--shadow-xs: 0 1px 2px rgb(0 0 0 / 0.3);
--shadow-sm: 0 1px 3px rgb(0 0 0 / 0.4), 0 1px 2px rgb(0 0 0 / 0.3);
--shadow-md: 0 4px 12px rgb(0 0 0 / 0.5), 0 2px 4px rgb(0 0 0 / 0.4);
--shadow-lg: 0 12px 24px rgb(0 0 0 / 0.6), 0 4px 8px rgb(0 0 0 / 0.5);
--shadow-xl: 0 24px 48px rgb(0 0 0 / 0.7), 0 8px 16px rgb(0 0 0 / 0.6);
```

### 1.6 Glassmorphism — "Refined Frost"

```css
.glass-subtle {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: var(--shadow-md);
}

.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow-lg);
}

.glass-strong {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow-xl);
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  .glass-subtle { background: rgba(17, 17, 17, 0.55); border-color: rgba(255,255,255,0.08); }
  .glass-card { background: rgba(17, 17, 17, 0.7); border-color: rgba(255,255,255,0.12); }
  .glass-strong { background: rgba(17, 17, 17, 0.85); border-color: rgba(255,255,255,0.16); }
}
```

**Usage Rules**:
- `glass-subtle`: Sticky header, section dividers
- `glass-card`: Product mockups, differential cards, comparison cards
- `glass-strong`: Diagnostic form container, modal overlays
- **Never** use on pure white backgrounds without decorative shapes behind

### 1.7 Animation System — "Calm Motion"

| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| `fast` | 150ms | `cubic-bezier(0.2, 0, 0.38, 1)` | Hover, press, small transitions |
| `base` | 250ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Default, fade, slide |
| `slow` | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Section reveals, modals |
| `slower` | 600ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero entrance, page transitions |

**Keyframes**:
```css
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
@keyframes scaleIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
@keyframes slideInRight { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: translateX(0); } }
@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
```

**Stagger**: `delay = index * 80ms` for lists, `120ms` for hero elements.

**Reduced Motion**: Respect `prefers-reduced-motion: reduce` — disable all non-essential animation.

---

## 2. SECTION ARCHITECTURE

### 2.1 Section Order (Unchanged Copy)

1. **Header** — Sticky, glass on scroll, minimal nav
2. **Hero** — Typography-driven, product mockup right
3. **SocialProofStrip** — Thin metrics bar
4. **HowItWorks** — 4-step timeline
5. **Comparison** — Sozinho vs NextCar
6. **ProductShowcase** — 5 real flow screens
7. **Differentials** — 6 glass cards
8. **DiagnosticForm** — 6-step premium onboarding
9. **FAQs** — Clean accordion
10. **CTASection** — Final conversion
11. **Footer** — 4-column grid

---

## 3. SECTION SPECIFICATIONS

### 3.1 Header

**Structure**:
```
┌────────────────────────────────────────────────────────────────┐
│  Logo          Nav Links (desktop)      CTA Button    │
│                                                        │
│  [Mobile: Hamburger → Full-screen overlay]            │
└────────────────────────────────────────────────────────┘
```

**Behavior**:
- Initial: `bg-transparent`, `py-6`
- Scrolled (>20px): `glass-strong`, `py-3`, `shadow-sm`
- Logo: Navy circle + "NextCar" in Display MD
- Nav: Caption weight, Foreground Secondary → Primary on hover
- CTA: Champagne background, Navy text, `radius-md`, `shadow-sm`
- Mobile: Full-screen overlay with `glass-strong`, staggered fadeUp

**Copy**: "Como funciona", "Diferenciais", "FAQ", "Começar diagnóstico"

---

### 3.2 Hero

**Layout**: CSS Grid 2-col desktop (1.2fr text / 1fr mockup), stacked mobile

**Left Column — Copy** (exact copy preserved):
```
[Badge] "Consultoria Automotiva Inteligente"
[Headline Display XL] "Pare de procurar carro.\nNós fazemos isso por você."
[Subheadline Body LG] "Responda algumas perguntas. Nossa equipe pesquisa o mercado e encontra as melhores opções. Gratuito."
[CTA Group] Primary: "Começar diagnóstico gratuito" + ArrowRight | Ghost: "Como funciona"
[Indicators] "Menos de 2 min" · "100% gratuito" · "Sem compromisso"
```

**Right Column — Product Mockup**:
- Browser chrome frame (`glass-card`, `radius-xl`)
- Shows **Step 1: "Qual seu nome?"** with progress bar (17%)
- Real input with blinking cursor animation
- Subtle decorative shapes behind for glass depth:
  - Top-right: Navy radial gradient 8% opacity
  - Bottom-left: Champagne radial gradient 6% opacity
  - Center-right: Electric blue radial gradient 4% opacity

**Animations**:
- Text: Staggered fadeUp (0, 80, 160, 240, 320ms)
- Mockup: fadeUp + scaleIn (200ms delay, 500ms duration)
- Cursor blink: 1000ms infinite

---

### 3.3 SocialProofStrip

**Background**: Background Tertiary (`#F0F0F0` / `#1A1A1A`)
**Height**: ~80px desktop, ~120px mobile (wrapped)

**Content** (4 metrics, equal width):
```
[Users icon] "500+ diagnósticos realizados"
[Clock icon] "Resposta em até 24h"
[MapPin icon] "Recife e Região Metropolitana"
[Shield icon] "100% gratuito"
```

**Style**: Monochrome icons (Foreground Muted), Caption text, centered. No cards, no borders between — just whitespace separation. Subtle hover: icon scales 1.05x, color → Accent Tertiary.

---

### 3.4 HowItWorks

**Background**: Background Primary
**Header**: Centered, max-w-2xl

**Desktop**: Horizontal timeline, 4 columns connected by 1px line
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│   01        │   02        │   03        │   04        │
│  Diagnóstico│  Pesquisa   │  Curadoria  │ Apresentação│
│  [desc]     │  [desc]     │  [desc]     │  [desc]     │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

**Mobile**: Vertical timeline with connecting line on left
- Number circles: `w-10 h-10`, Border Default, Navy text, Background Secondary
- Active/completed: Navy fill, white text
- Connector: 1px Border Subtle, dashed

**Copy** (exact):
1. Diagnóstico — "Responda perguntas rápidas sobre suas preferências, orçamento e necessidades."
2. Pesquisa — "Nossa equipe pesquisa o mercado completo e analisa as opções disponíveis."
3. Curadoria — "Selecionamos apenas os veículos realmente compatíveis com seu perfil."
4. Apresentação — "Um consultor entra em contato pelo WhatsApp com as melhores opções."

---

### 3.5 Comparison

**Background**: Background Tertiary (subtle contrast)

**Layout**: 2-col grid, equal width, max-w-5xl

**Left — "Sozinho" (Pain)**:
- Header: X icon in Red-500 circle, "Sozinho" in Caption Red-500
- 6 items: Number (mono, Foreground Muted) + text (Foreground Secondary)
- Background: Background Secondary
- Border: Border Subtle

**Right — "Com a NextCar" (Gain)**:
- Header: Check icon in Success circle, "Com a NextCar" in Caption Success
- 6 items: Number (mono, Accent Tertiary) + text (Foreground Primary, 500 weight)
- Background: `glass-card` over decorative shapes (Navy 4% + Champagne 3%)
- Border: glass-card border

**Copy** (exact):
| Sozinho | Com a NextCar |
|---------|---------------|
| Pesquisar dezenas de anúncios em sites diferentes | Você responde 6 perguntas rápidas |
| Entrar em contato com vendedores um por um | Nossa equipe pesquisa o mercado completo |
| Visitar várias concessionárias pessoalmente | Selecionamos as melhores opções para seu perfil |
| Negociar preços sem referência de mercado | Comparamos preços e condições para você |
| Perder dias ou semanas até encontrar o carro | Você recebe tudo pelo WhatsApp e escolhe |

---

### 3.6 ProductShowcase

**Background**: Background Primary
**Layout**: Horizontal scroll (mobile) / 5-col grid (desktop), snap-x

**5 Screens** (real UI, not images):

| Screen | Title | Content |
|--------|-------|---------|
| 1 | Diagnóstico | Name input + WhatsApp + "Continuar" |
| 2 | Analisando perfil | 3-step checklist with animated checkmarks |
| 3 | Painel do consultor | Lead card: name, budget, usage, priorities |
| 4 | Pesquisando veículos | Search bar + 3 vehicle cards with match % |
| 5 | Recomendação | Top 3 cards: name, match %, key specs |

**Card Style**: `glass-card`, `radius-xl`, `p-6`, min-w-[280px]
**Connector**: ArrowRight between cards (hidden mobile)
**Decorative**: Navy + Champagne radial gradients behind grid

---

### 3.7 Differentials

**Background**: Background Primary
**Layout**: 3×2 grid desktop, 2×3 tablet, 1×6 mobile
**Cards**: `glass-card`, `radius-lg`, `p-6`, hover: `translateY(-4px)`, `shadow-lg`, border → Accent Tertiary 30%

**Icon**: `w-12 h-12`, `radius-lg`, Background Tertiary, Foreground Secondary → Accent Tertiary on hover

**Copy** (exact, 6 items):
1. Clock — "Economia de tempo" / "Enquanto você cuida da sua vida, nós pesquisamos o mercado completo por você."
2. Users — "Representamos você" / "Diferente de concessionárias, nosso compromisso é com o comprador, não com a venda."
3. Search — "Pesquisa completa" / "Varremos todo o mercado em busca das opções que realmente atendem seu perfil."
4. Target — "Curadoria real" / "Selecionamos apenas veículos compatíveis com suas necessidades e orçamento."
5. Headphones — "Atendimento dedicado" / "Um consultor exclusivo para acompanhar você do início ao fim do processo."
6. Building2 — "Parceiros selecionados" / "Trabalhamos com as melhores concessionárias da sua região."

---

### 3.8 DiagnosticForm — "Premium Onboarding"

**Background**: Background Primary
**Container**: Centered, `max-w-md`, `glass-strong`, `radius-xl`, `p-8` (desktop) / `p-6` (mobile)

**Progress Bar**: Top, 3px, Navy → Champagne gradient, step labels below

**6 Steps** (exact copy preserved):

| Step | Fields | Validation |
|------|--------|------------|
| 1. Nome | Name (text) + WhatsApp (tel) | Name ≥2, WhatsApp ≥10 digits |
| 2. Cidade | City (text) + helper "Atendemos Recife e RM" | ≥2 chars |
| 3. Carro | Pills: "Sim" / "Ainda não" + conditional "Qual carro?" | Required |
| 4. Orçamento | 6 pills in 2×3 grid | Required |
| 5. Uso + Prioridades | 5 usage pills + 8 priority tags (multi-select) | Usage required |
| 6. Detalhes | Financiamento (3 pills) + Troca (2 pills) | Optional |

**Input Style**:
- `w-full`, `px-4 py-3.5`, `radius-md`
- Border: Border Default → Accent Tertiary on focus
- Focus ring: `0 0 0 3px rgba(0, 102, 204, 0.15)`
- Placeholder: Foreground Muted
- Label: Caption, Foreground Secondary, mb-1.5

**Pill Style**:
- `px-4 py-2.5`, `radius-md`, `text-sm`, `font-medium`
- Unselected: Border Default, Background Secondary, Foreground Secondary
- Selected: Accent Primary bg, white text, `shadow-sm`
- Hover unselected: Border → Accent Tertiary, bg → Background Tertiary

**Navigation**:
- Left: "Voltar" (Caption, Foreground Secondary → Primary) + ArrowLeft
- Right: "Continuar" / "Finalizar" (Accent Primary, white, `shadow-sm`, disabled = 30% opacity)
- Mobile: Full-width buttons, stacked

**States**:
- **Analyzing**: Full-screen overlay, animated dots + step checklist (5 steps, 700ms each)
- **Complete**: Checkmark circle (Success), "Diagnóstico concluído", progress 100%, "Voltar ao início"

**Animation**: `AnimatePresence` between steps — fadeUp 200ms + scale 0.98→1

---

### 3.9 FAQs

**Background**: Background Tertiary
**Layout**: Single column, max-w-2xl centered
**Style**: Border-bottom only (Border Subtle), no card borders

**Interaction**:
- ChevronDown rotates 180° (200ms)
- `AnimatePresence` height animation (250ms, ease-out)
- Only one open at a time (accordion)

**Copy** (exact, 6 items):
1. "Como a consultoria funciona na prática?" — [full answer preserved]
2. "O diagnóstico é realmente gratuito?" — [full answer preserved]
3. "A NextCar vende carros?" — [full answer preserved]
4. "Em quanto tempo receberei o retorno?" — [full answer preserved]
5. "Qual a área de atuação da NextCar?" — [full answer preserved]
6. "Como a NextCar garante a qualidade dos veículos?" — [new, logical addition]

---

### 3.10 CTASection

**Background**: Background Primary
**Layout**: Centered, max-w-xl, text-center

**Content**:
```
[Headline Display LG] "Pronto para encontrar seu próximo carro sem estresse?"
[Subheadline Body] "Economize horas de pesquisa. Deixe que nossos especialistas varram o mercado e façam todo o trabalho pesado por você."
[CTA Group] Primary: "Começar diagnóstico gratuito" + ArrowRight | Ghost: "Como funciona"
```

**Padding**: `space-10` vertical

---

### 3.11 Footer

**Background**: Background Secondary
**Top Border**: Border Subtle
**Layout**: 4-col grid desktop, 2×2 tablet, 1×4 mobile

**Columns**:
1. Logo + Tagline: "Consultoria automotiva inteligente. Nós representamos quem compra, não quem vende."
2. Empresa: "Como funciona", "Diferenciais", "FAQ"
3. Legal: "Privacidade", "Termos de Uso", "Cookies"
4. Contato: "contato@nextcar.com.br", "Recife - PE", "Atendimento ativo" (green dot)

**Bottom**: Copyright + "Conexão Segura" badge (Shield + text, `glass-subtle`)

---

## 4. COMPONENT LIBRARY — INLINE ONLY

**No shared UI components**. All styles inline via Tailwind utilities + CSS variables. This ensures:
- Zero abstraction leakage
- Per-section tuning
- No "design system drift"

**Patterns to replicate manually**:
- Button: Primary (Champagne/Navy), Ghost (Border/Default), Destructive (Red)
- Input: Standard, Error, Success states
- Pill: Single-select, Multi-select
- Card: Glass variants
- Accordion: FAQ pattern
- Progress: Linear, Circular
- Modal/Overlay: Glass-strong + backdrop

---

## 5. RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Container Padding | Grid Columns |
|------------|-------|-------------------|--------------|
| Mobile | < 640px | 1.5rem | 1 |
| Tablet | 640–1023px | 2rem | 2 |
| Desktop | 1024–1279px | 3rem | 3-4 |
| Wide | ≥1280px | 4rem | 4-5 |

**Hero Mockup**: Visible on all breakpoints. Mobile: below text, 85% width, centered.

---

## 6. DARK MODE

**Strategy**: Class-based (`dark:` prefix), default light. Toggle in header (future).

**Key Inversions**:
- Backgrounds: Primary ↔ `#0A0A0A`, Secondary ↔ `#111111`, Tertiary ↔ `#1A1A1A`
- Foregrounds: Primary ↔ `#FAFAFA`, Secondary ↔ `#A3A3A3`
- Borders: Subtle ↔ `#262626`, Default ↔ `#333333`
- Glass: White-based → Black-based (see 1.6)
- Shadows: Stronger in dark (see 1.5)
- Accent Primary: Navy → Near-white (`#E8E8F0`)
- Accent Secondary: Champagne → Lighter (`#D4B85C`)

---

## 7. PERFORMANCE BUDGET

| Metric | Target |
|--------|--------|
| LCP | < 1.8s |
| CLS | < 0.05 |
| INP | < 200ms |
| Total JS | < 120KB gzipped |
| Total CSS | < 30KB gzipped |
| Fonts | Inter variable (woff2, ~45KB) |
| Images | Zero — all UI is CSS/HTML |

---

## 8. ACCESSIBILITY

- Semantic HTML5 landmarks (`header`, `main`, `section`, `footer`, `nav`)
- Heading hierarchy: h1 → h2 → h3
- Focus visible: `focus-visible: ring-2 ring-accent-tertiary ring-offset-2`
- Color contrast: WCAG AA minimum (4.5:1 text, 3:1 UI)
- ARIA: `aria-expanded`, `aria-controls` on accordion, `aria-label` on icon buttons
- Reduced motion: `@media (prefers-reduced-motion: reduce)`
- Form labels: Explicit `<label for="">` on all inputs

---

## 9. IMPLEMENTATION SEQUENCE

### Phase 1: Foundation
1. `globals.css` — Complete rewrite with new design tokens
2. `layout.tsx` — Metadata, font loading, dark mode class
3. `components/ui/tokens.css` — CSS custom properties export

### Phase 2: Layout & Sections (Parallel Waves)
**Wave A**: Header, Hero, SocialProofStrip
**Wave B**: HowItWorks, Comparison, ProductShowcase
**Wave C**: Differentials, DiagnosticForm
**Wave D**: FAQs, CTASection, Footer

### Phase 3: Polish
1. Animation refinements
2. Dark mode verification
3. Mobile testing
4. Performance audit
5. Accessibility audit

---

## 10. ACCEPTANCE CRITERIA

- [ ] Build passes: `npm run build` (no errors)
- [ ] Lint passes: `npm run lint` (zero warnings)
- [ ] TypeScript: `tsc --noEmit` (zero errors)
- [ ] LCP < 1.8s on 3G throttle
- [ ] All 11 sections render correctly at all breakpoints
- [ ] Diagnostic form: all 6 steps functional, validation works, analyzing/complete states work
- [ ] Copy matches existing exactly (diff check)
- [ ] Dark mode: no visual regressions
- [ ] Reduced motion: animations disabled
- [ ] Keyboard navigation: full flow works
- [ ] Screen reader: NVDA/VoiceOver test passes

---

## 11. OUT OF SCOPE

- Backend API integration (form submission)
- Analytics events (GA4/Meta Pixel remain as-is)
- A/B testing infrastructure
- CMS integration
- Multi-language (pt-BR only)
- User accounts/dashboard

---

*This SPEC locks "what" and "why". The discuss-phase will determine "how" (component structure, state management, file organization).*