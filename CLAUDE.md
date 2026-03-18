# ECONOVA-AI Landing Page

## Progetto
Landing page React per ECONOVA-AI — piattaforma SaaS B2B di controllo di gestione e bilancio di sostenibilita ESG per PMI italiane. Questa landing page e destinata a diventare la home page di [econova.ai](https://www.econova.ai), attualmente gestito su Squarespace.

## Stack Tecnico
- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS 3.4 + CSS custom (glassmorphism, gradients)
- **Animazioni:** GSAP 3.12 + ScrollTrigger (da migrare a CSS + IntersectionObserver)
- **Icone:** Lucide React
- **Font:** Montserrat + JetBrains Mono (da migrare a Inter per allineamento brand)
- **Deploy:** Vercel (bozza) → econova.ai (produzione)

## Struttura Directory
```
econova-landing/
  src/
    App.jsx          # Componente principale (da ristrutturare in moduli)
    main.jsx         # Entry point React
    index.css        # Stili globali + glassmorphism + animazioni CSS
  public/
    econova-logo.svg
    nvidia-badge.svg
  index.html         # Template HTML con meta tags
  tailwind.config.js # Tema custom (colori eco-green, font, shadows)
  vite.config.js     # Config Vite
  package.json
```

## Architettura
La pagina e una single-page con le seguenti sezioni (attualmente tutte in App.jsx):
1. **Navbar** — navigazione fissa con scroll detection + menu mobile
2. **Hero** — headline, stats, CTA animati con GSAP
3. **ProductsOverview** — card prodotti (ECAI-Budget + Report VSME ESG)
4. **BudgetDashboard** — mockup interattivo con tabs, categorie espandibili, grafici SVG
5. **VsmeDashboard** — dashboard ESG con moduli selezionabili, metriche, compliance
6. **WhySection** — 6 value proposition cards
7. **CTASection** — call to action con gradiente
8. **Footer** — brand, navigazione, social, copyright

## Integrazione con Squarespace
- Il sito principale e su [econova.ai](https://www.econova.ai) (Squarespace)
- Pagine Squarespace: Services, Research, About Us, Blog, Events, Privacy, Contact Us
- La navbar della landing deve avere link interni (scroll a sezioni) + link esterni a Squarespace
- CTA "Prenota Demo" → `https://www.econova.ai/contact`

## Convenzioni di Navigazione
- **Link interni:** `#prodotti`, `#budget`, `#vsme`, `#perche-noi` (smooth scroll)
- **Link esterni:** URL assoluti a `https://www.econova.ai/...`
- **Base URL Squarespace:** `https://www.econova.ai`

## Brand
- **Colori primari:** `#2e7d32` (verde principale), `#4caf50` (verde secondario)
- **Background:** bianco con sezioni scure per ritmo visivo
- **Stile:** Glassmorphism, gradients sottili, ombre soft
- **Font target:** Inter (sans-serif) + JetBrains Mono (mono)
- **Partner:** NVIDIA (badge Inception)
- **Lingua:** Italiano

## Comandi Utili
```bash
cd econova-landing
npm install          # Installa dipendenze
npm run dev          # Dev server locale (Vite)
npm run build        # Build produzione → dist/
npm run preview      # Preview build locale
```

## Note Importanti
- NON committare file .env
- Il favicon va aggiornato da vite.svg a econova-logo.svg
- I dati delle dashboard sono mockup statici (non c'e backend)
- Il sito deve funzionare come static site (no SSR)
