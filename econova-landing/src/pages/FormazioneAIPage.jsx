import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CTA_DEMO_URL } from '../data/navigation';

const FormazioneAIPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header><Navbar /></header>

      <main>
        {/* Hero */}
        <section className="hero-gradient min-h-[70dvh] flex items-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold text-accent">Formazione</span>
              </div>

              <h1 className="fade-in-up text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.08] font-extrabold tracking-tight text-dark mb-4 sm:mb-6" style={{ animationDelay: '100ms' }}>
                Formazione <span className="text-accent">AI</span>
              </h1>

              <p className="fade-in-up text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10" style={{ animationDelay: '200ms' }}>
                Corsi e workshop di intelligenza artificiale per il tuo team — contenuti in arrivo.
              </p>

              <div className="fade-in-up flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center" style={{ animationDelay: '300ms' }}>
                <a href={CTA_DEMO_URL} className="btn-primary text-base text-center">
                  Contattaci <ArrowRight className="w-5 h-5" />
                </a>
                <Link to="/" className="btn-secondary text-base text-center">
                  Torna alla Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder */}
        <section className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white to-accentLight/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
            <div className="glass-card-strong rounded-3xl p-8 sm:p-12 border border-black/5 shadow-glass-xl">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">Pagina in Costruzione</h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
                Stiamo preparando contenuti dettagliati sui nostri programmi di formazione AI. Contattaci per saperne di più.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FormazioneAIPage;
