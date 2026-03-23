import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, Users, Clock, Monitor, Check, Target, TrendingUp, Shield, Star } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CTA_DEMO_URL } from '../data/navigation';

/* ─── HERO ─── */
const FormazioneHero = () => (
  <section className="hero-gradient min-h-[85dvh] flex items-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
      backgroundSize: '80px 80px'
    }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
      <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
        <div className="fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
          <GraduationCap className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold text-accent">Formazione</span>
        </div>

        <h1 className="fade-in-up text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.08] font-extrabold tracking-tight text-dark mb-4 sm:mb-6" style={{ animationDelay: '100ms' }}>
          Formazione AI per{' '}
          <span className="text-accent">Leader del Futuro</span>
        </h1>

        <p className="fade-in-up text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10" style={{ animationDelay: '200ms' }}>
          Trasforma la tua azienda con strategie AI concrete. Automatizza processi, riduci costi operativi e mantieni il vantaggio competitivo in un mercato che non aspetta.
        </p>

        <div className="fade-in-up flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start" style={{ animationDelay: '300ms' }}>
          <a href={CTA_DEMO_URL} className="btn-primary text-base text-center">
            Richiedi Consulenza Gratuita <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#pacchetti" className="btn-secondary text-base text-center">
            Scopri i Pacchetti
          </a>
        </div>

        {/* Stats */}
        <div className="fade-in-up grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 max-w-lg mx-auto lg:mx-0" style={{ animationDelay: '450ms' }}>
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-2xl sm:text-3xl font-extrabold text-dark">2+</span>
            </div>
            <p className="text-xs text-muted">Aziende Formate</p>
          </div>
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-2xl sm:text-3xl font-extrabold text-dark">12-40h</span>
            </div>
            <p className="text-xs text-muted">Ore di Formazione</p>
          </div>
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
              <Monitor className="w-4 h-4 text-accent" />
              <span className="text-2xl sm:text-3xl font-extrabold text-dark">3</span>
            </div>
            <p className="text-xs text-muted">Modalità Disponibili</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── IL NOSTRO METODO ─── */
const MetodoSection = () => (
  <section className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white to-accentLight/30 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Il Nostro Metodo</h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          Un approccio strutturato che converte la teoria in vantaggio competitivo immediato.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="fade-in-up glass-card-strong rounded-3xl p-8 sm:p-10 border border-accent/20 shadow-glass-xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent">Blueprint Strategico</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">Framework Operativo</h3>

            <div className="space-y-4">
              {[
                { num: '01', title: 'Assessment', desc: 'Analizziamo la tua azienda per identificare le aree ad alto impatto per l\'AI.' },
                { num: '02', title: 'Formazione su Misura', desc: 'Moduli personalizzati in base al livello del team e agli obiettivi aziendali.' },
                { num: '03', title: 'Implementazione Pratica', desc: 'Esercitazioni hands-on con strumenti AI reali sui tuoi casi d\'uso.' },
                { num: '04', title: 'Follow-up & Supporto', desc: 'Monitoraggio dei risultati e sessioni di affinamento post-formazione.' },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-black/5">
                  <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-2 py-1 rounded-lg flex-shrink-0">{step.num}</span>
                  <div>
                    <h4 className="font-semibold text-dark text-sm">{step.title}</h4>
                    <p className="text-sm text-muted mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── PACCHETTI FORMAZIONE ─── */
const PacchettiSection = () => {
  const packages = [
    {
      badge: 'Starter',
      name: 'Essential',
      desc: 'Fondamenti AI per imprenditori. Comprendi opportunità e rischi.',
      hours: '12h',
      highlight: false,
      features: [
        'Introduzione all\'AI e modelli LLM',
        'Casi d\'uso pratici per il tuo settore',
        'Prompt engineering per non tecnici',
        'Identificazione quick wins',
        'Modalità: Online / Presenza / Ibrida',
      ],
    },
    {
      badge: 'Più Richiesto',
      name: 'Professional',
      desc: 'Implementazione strategica AI. Automazione processi.',
      hours: '24h',
      highlight: true,
      features: [
        'Tutto incluso nel pacchetto Essential',
        'Automazione workflow con AI agents',
        'Integrazione AI nei sistemi aziendali',
        'Analytics e misurazione performance',
        'Strategia personalizzata',
      ],
    },
    {
      badge: 'Advanced',
      name: 'Executive',
      desc: 'Trasformazione digitale completa. AI governance e cybersecurity.',
      hours: '40h',
      highlight: false,
      features: [
        'Tutto incluso nel pacchetto Professional',
        'AI Governance e framework etici',
        'Cybersecurity per sistemi AI',
        'Compliance (AI Act EU)',
        'Sessioni 1-to-1 con Advisor',
      ],
    },
  ];

  return (
    <section id="pacchetti" className="py-16 sm:py-24 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Pacchetti Formazione</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Scegli il percorso più adatto alla tua azienda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`fade-in-up glass-card-strong rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-glass-xl flex flex-col relative overflow-hidden ${
                pkg.highlight
                  ? 'border-accent/30 shadow-glass-lg ring-2 ring-accent/10'
                  : 'border-black/5 shadow-glass'
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-accentLime py-1.5 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-white" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{pkg.badge}</span>
                  </div>
                </div>
              )}

              <div className={pkg.highlight ? 'mt-6' : ''}>
                {!pkg.highlight && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent mb-4">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="text-2xl sm:text-3xl font-bold text-dark mt-2 mb-3">{pkg.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{pkg.desc}</p>

                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-dark">{pkg.hours} di formazione</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-dark">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={CTA_DEMO_URL}
                className={`text-center font-semibold py-3 px-6 rounded-pill transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-accent text-white hover:shadow-lg hover:scale-[1.02]'
                    : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                }`}
              >
                Richiedi Informazioni
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── PERCHÉ SCEGLIERE NOI ─── */
const WhyUsSection = () => {
  const reasons = [
    { icon: Target, title: 'Focus sul Business', desc: 'Ogni modulo è progettato per generare valore immediato.' },
    { icon: TrendingUp, title: 'ROI Misurabile', desc: 'Impara a quantificare i risparmi e l\'incremento di produttività.' },
    { icon: Shield, title: 'Sicurezza First', desc: 'Ti guidiamo nell\'implementazione di AI sicura e conforme alle norme EU.' },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white to-accentLight/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Perché Scegliere Noi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, i) => {
            const ReasonIcon = reason.icon;
            return (
              <div key={i} className="fade-in-up glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-all hover:shadow-glass-lg" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <ReasonIcon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{reason.title}</h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const FormazioneCTA = () => (
  <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-accentLight/20 to-white relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
      <h2 className="fade-in-up text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6 leading-tight">
        Pronto a Trasformare la Tua Azienda?
      </h2>
      <p className="fade-in-up text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed" style={{ animationDelay: '100ms' }}>
        Inizia con una consulenza gratuita. Analizziamo insieme le tue esigenze.
      </p>
      <div className="fade-in-up flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center" style={{ animationDelay: '200ms' }}>
        <a href={CTA_DEMO_URL} className="btn-primary text-base px-8 py-3">
          Prenota Consulenza Gratuita <ArrowRight className="w-5 h-5" />
        </a>
        <Link to="/" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-2.5 rounded-pill font-semibold transition-all text-base">
          Torna alla Home
        </Link>
      </div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const FormazioneAIPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header><Navbar /></header>
      <main>
        <FormazioneHero />
        <MetodoSection />
        <PacchettiSection />
        <WhyUsSection />
        <FormazioneCTA />
      </main>
      <Footer />
    </>
  );
};

export default FormazioneAIPage;
