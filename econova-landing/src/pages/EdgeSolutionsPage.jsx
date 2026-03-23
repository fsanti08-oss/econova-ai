import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ArrowRight, Shield, Eye, Zap, Bot, FlaskConical, Settings, Camera, Lock, Star, Check } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CTA_DEMO_URL } from '../data/navigation';

/* ─── HERO ─── */
const EdgeHero = () => (
  <section className="hero-gradient min-h-[85dvh] flex items-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
      backgroundSize: '80px 80px'
    }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
      <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
        {/* Badges */}
        <div className="fade-in-up flex flex-wrap gap-3 justify-center lg:justify-start mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
            <Zap className="w-3.5 h-3.5" /> 67 TOPS AI on-device
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
            <Lock className="w-3.5 h-3.5" /> LLM / VLM Privati
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
            <Eye className="w-3.5 h-3.5" /> Vision QC &amp; Robotica
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
            <Shield className="w-3.5 h-3.5" /> On-prem &bull; 100% Locale
          </span>
        </div>

        <h1 className="fade-in-up text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.08] font-extrabold tracking-tight text-dark mb-4 sm:mb-6" style={{ animationDelay: '100ms' }}>
          Soluzioni Edge per{' '}
          <span className="text-accent">Operazioni nel Mondo Reale</span>
        </h1>

        <p className="fade-in-up text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10" style={{ animationDelay: '200ms' }}>
          Dispositivi e sistemi vision all&rsquo;avanguardia alimentati da NVIDIA che eseguono AI privata e a bassa latenza sull&rsquo;edge. Dal controllo qualità agli assistenti intelligenti — sicuri per progettazione, costruiti per scalare.
        </p>

        <div className="fade-in-up flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start" style={{ animationDelay: '300ms' }}>
          <a href={CTA_DEMO_URL} className="btn-primary text-base text-center">
            Richiedi una Demo <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#soluzioni" className="btn-secondary text-base text-center">
            Esplora le Soluzioni
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── SOLUZIONI EDGE (Product Cards) ─── */
const SoluzioniSection = () => {
  const products = [
    {
      name: 'ECAI-NANO',
      desc: 'Dispositivi edge ultra-efficienti con GPU NVIDIA Ampere integrata, CPU ARM a 6 core e 8 GB di memoria condivisa. Fino a 67 TOPS per AI in tempo reale con LLM open-source ottimizzati.',
      subdesc: 'Sistema vision con telecamere calibrate per rilevamento automatico difetti, QC manifatturiero e monitoraggio intelligente.',
      price: '1.000',
      highlight: false,
      specs: ['GPU NVIDIA Ampere integrata', 'CPU ARM 6 core', '8 GB memoria condivisa', 'Fino a 67 TOPS', 'LLM open-source ottimizzati', 'Sistema vision con telecamere calibrate'],
    },
    {
      name: 'NVIDIA JETSON THOR',
      desc: 'Il computer per robotica più potente al mondo. Progettato per modelli di fondazione robotici e IA generativa.',
      subdesc: 'Sviluppato sull\'architettura Blackwell, offre prestazioni incredibili per robot umanoidi e sistemi autonomi di prossima generazione.',
      price: '2.700',
      priceNote: '+ IVA',
      highlight: true,
      specs: ['Architettura NVIDIA Blackwell', 'Modelli di fondazione robotici', 'IA generativa on-device', 'Robot umanoidi', 'Sistemi autonomi next-gen'],
    },
    {
      name: 'ECAI-ROBOT',
      desc: 'Piattaforma robotica umanoide avanzata alimentata da AI edge ECAI.',
      subdesc: 'Navigazione autonoma, interazione in linguaggio naturale e apprendimento adattivo per ambienti industriali e di servizio.',
      price: null,
      highlight: false,
      specs: ['AI edge ECAI integrata', 'Navigazione autonoma', 'Interazione linguaggio naturale', 'Apprendimento adattivo', 'Ambienti industriali e di servizio'],
    },
  ];

  return (
    <section id="soluzioni" className="py-16 sm:py-24 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Soluzioni Edge</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Hardware modulare + software che puoi implementare oggi. Ottimizzato per affidabilità, efficienza energetica e controllo totale dei dati.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {products.map((product, i) => (
            <div
              key={i}
              className={`fade-in-up glass-card-strong rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-glass-xl flex flex-col relative overflow-hidden ${
                product.highlight
                  ? 'border-accent/30 shadow-glass-lg ring-2 ring-accent/10'
                  : 'border-black/5 shadow-glass'
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {product.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-accentLime py-1.5 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-white" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Top Performance</span>
                  </div>
                </div>
              )}

              <div className={product.highlight ? 'mt-6' : ''}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                  <Cpu className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-accent">Edge Device</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-3">{product.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-2">{product.desc}</p>
                <p className="text-muted text-sm leading-relaxed mb-5">{product.subdesc}</p>

                {product.price && (
                  <div className="mb-6">
                    <span className="text-sm text-muted">a partire da</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-dark">
                      &euro;{product.price}
                      {product.priceNote && (
                        <span className="text-base font-medium text-muted ml-1">{product.priceNote}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {product.specs.map((spec, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-dark">{spec}</span>
                  </div>
                ))}
              </div>

              <a
                href={CTA_DEMO_URL}
                className={`text-center font-semibold py-3 px-6 rounded-pill transition-all duration-300 ${
                  product.highlight
                    ? 'bg-accent text-white hover:shadow-lg hover:scale-[1.02]'
                    : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                }`}
              >
                {product.price ? 'Scopri di più' : 'Richiedi dettagli'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CAPABILITIES ─── */
const CapabilitiesSection = () => {
  const capabilities = [
    { icon: Bot, title: 'Assistente AI', desc: 'Automazione attività quotidiane' },
    { icon: Eye, title: 'Controllo Qualità', desc: 'Rilevamento difetti basato su vision' },
    { icon: FlaskConical, title: 'Simulazioni', desc: 'Modellazione computazionale in tempo reale' },
    { icon: Settings, title: 'Ottimizzazione', desc: 'Miglioramenti processi data-driven' },
    { icon: Camera, title: 'Sorveglianza', desc: 'Rilevamento minacce intelligente' },
    { icon: Lock, title: '100% Locale', desc: 'Privacy e sicurezza dati completa' },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white to-accentLight/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Cosa possono fare i nostri Nano</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Capacità pratiche che puoi integrare nelle operazioni in giorni, non mesi.
          </p>
        </div>

        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible scrollbar-hide">
          {capabilities.map((cap, i) => {
            const CapIcon = cap.icon;
            return (
              <div
                key={i}
                className="fade-in-up glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-all hover:shadow-glass-lg min-w-[260px] sm:min-w-[280px] md:min-w-0 snap-start"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <CapIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark mb-2">{cap.title}</h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const EdgeCTA = () => (
  <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-accentLight/20 to-white relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
      <h2 className="fade-in-up text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6 leading-tight">
        Pronto a trasformare il tuo business con l&rsquo;AI Edge?
      </h2>
      <p className="fade-in-up text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed" style={{ animationDelay: '100ms' }}>
        Contattaci per scoprire come le nostre soluzioni edge possono ottimizzare le tue operazioni con AI privata e a bassa latenza.
      </p>
      <div className="fade-in-up flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center" style={{ animationDelay: '200ms' }}>
        <a href={CTA_DEMO_URL} className="btn-primary text-base px-8 py-3">
          Richiedi una Demo <ArrowRight className="w-5 h-5" />
        </a>
        <Link to="/" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-2.5 rounded-pill font-semibold transition-all text-base">
          Torna alla Home
        </Link>
      </div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const EdgeSolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header><Navbar /></header>
      <main>
        <EdgeHero />
        <SoluzioniSection />
        <CapabilitiesSection />
        <EdgeCTA />
      </main>
      <Footer />
    </>
  );
};

export default EdgeSolutionsPage;
