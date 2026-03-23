import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Leaf, Award, Calendar } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CTA_DEMO_URL } from '../data/navigation';

/* ─── HERO ─── */
const ChiSiamoHero = () => (
  <section className="hero-gradient min-h-[85dvh] flex items-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
      backgroundSize: '80px 80px'
    }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
      <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
        <div className="fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
          <Leaf className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold text-accent">Chi Siamo</span>
        </div>

        <h1 className="fade-in-up text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.08] font-extrabold tracking-tight text-dark mb-4 sm:mb-6" style={{ animationDelay: '100ms' }}>
          Sfruttiamo l'AI e la sostenibilità per costruire un{' '}
          <span className="text-accent">futuro migliore</span>
        </h1>

        <p className="fade-in-up text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10" style={{ animationDelay: '200ms' }}>
          La nostra missione è dare potere alle aziende con soluzioni AI all'avanguardia che guidano efficienza e responsabilità. Crediamo in un'intelligenza artificiale che trasforma i processi, riduce gli sprechi e crea valore reale per le persone e il pianeta.
        </p>

        <div className="fade-in-up flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start" style={{ animationDelay: '300ms' }}>
          <a href={CTA_DEMO_URL} className="btn-primary text-base text-center">
            Contattaci <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#timeline" className="btn-secondary text-base text-center">
            Il Nostro Viaggio
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── VALORI ─── */
const ValoriSection = () => {
  const valori = [
    {
      icon: Lightbulb,
      title: 'Innovazione',
      desc: 'Soluzioni AI pionieristiche per un futuro più verde e sostenibile. Spingiamo costantemente i confini della tecnologia per creare strumenti che fanno la differenza.',
    },
    {
      icon: Leaf,
      title: 'Sostenibilità',
      desc: 'Impegno verso pratiche aziendali responsabili e rispettose dell\'ambiente. Ogni progetto è pensato per minimizzare l\'impatto ambientale e massimizzare i benefici sociali.',
    },
    {
      icon: Award,
      title: 'Eccellenza',
      desc: 'Forniamo soluzioni AI di alto livello con precisione e dedizione. La qualità non è un obiettivo, ma lo standard con cui misuriamo ogni nostro risultato.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white to-accentLight/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">I Nostri Valori</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Tre pilastri che guidano ogni nostra decisione e progetto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {valori.map((valore, i) => {
            const ValoreIcon = valore.icon;
            return (
              <div key={i} className="fade-in-up glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-all hover:shadow-glass-lg" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <ValoreIcon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{valore.title}</h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed">{valore.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── TIMELINE ─── */
const TimelineSection = () => {
  const milestones = [
    { date: '28/11/2023', title: 'Costituzione ECONOVA-AI', desc: 'Nasce ufficialmente ECONOVA-AI con la missione di unire intelligenza artificiale e sostenibilità.' },
    { date: '01/12/2023', title: 'Partnership con POLITO & UNIVPM', desc: 'Collaborazione strategica con il Politecnico di Torino e l\'Università Politecnica delle Marche.' },
    { date: '01/04/2024', title: 'GRI Community Member 2024', desc: 'Ingresso nella community della Global Reporting Initiative per gli standard di sostenibilità.' },
    { date: '01/05/2024', title: 'Partnership con Mesa per CSRD', desc: 'Alleanza per supportare le aziende nella conformità alla Corporate Sustainability Reporting Directive.' },
    { date: '01/07/2025', title: 'Primi 2 bilanci di sostenibilità', desc: 'Completamento dei primi bilanci di sostenibilità realizzati con la piattaforma ECONOVA-AI.' },
    { date: '20/08/2025', title: 'NVIDIA Inception Program Member', desc: 'Accesso al programma NVIDIA Inception per startup AI all\'avanguardia.' },
    { date: '01/10/2025', title: 'LeVillage Acceleration Program', desc: 'Ingresso nel programma di accelerazione LeVillage by CA per la crescita e l\'innovazione.' },
  ];

  return (
    <section id="timeline" className="py-16 sm:py-24 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Il Nostro Viaggio</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Dalle origini ad oggi, ogni passo verso l'innovazione sostenibile.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-accent/20" />

          <div className="space-y-6 sm:space-y-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="fade-in-up flex gap-4 sm:gap-6 relative" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="flex-shrink-0 w-12 sm:w-16 flex items-start justify-center pt-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center z-10 relative">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                </div>

                <div className="glass-card-strong rounded-2xl p-5 sm:p-6 border border-black/5 hover:border-accent/20 transition-all hover:shadow-glass-lg flex-1">
                  <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-2 py-1 rounded-lg">{milestone.date}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-dark mt-3 mb-2">{milestone.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const ChiSiamoCTA = () => (
  <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-accentLight/20 to-white relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
      <h2 className="fade-in-up text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6 leading-tight">
        Costruiamo Insieme il Futuro
      </h2>
      <p className="fade-in-up text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed" style={{ animationDelay: '100ms' }}>
        Scopri come ECONOVA-AI può trasformare la tua azienda con soluzioni AI sostenibili.
      </p>
      <div className="fade-in-up flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center" style={{ animationDelay: '200ms' }}>
        <a href={CTA_DEMO_URL} className="btn-primary text-base px-8 py-3">
          Prenota una Demo <ArrowRight className="w-5 h-5" />
        </a>
        <Link to="/" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-2.5 rounded-pill font-semibold transition-all text-base">
          Torna alla Home
        </Link>
      </div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const ChiSiamoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header><Navbar /></header>
      <main>
        <ChiSiamoHero />
        <ValoriSection />
        <TimelineSection />
        <ChiSiamoCTA />
      </main>
      <Footer />
    </>
  );
};

export default ChiSiamoPage;
