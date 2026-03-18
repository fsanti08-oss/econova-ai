import { ArrowRight } from 'lucide-react';
import { useInViewReveal } from '../hooks/useInViewReveal';
import { CTA_DEMO_URL } from '../data/navigation';

const CTASection = () => {
  const containerRef = useInViewReveal({ selector: '.cta-el' });

  return (
    <section ref={containerRef} id="contact" className="py-16 sm:py-24 md:py-32 bg-[#1d1d1f] relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
        <h2 className="cta-el reveal-item text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Trasforma il tuo Controllo di Gestione
        </h2>
        <p className="cta-el reveal-item delay-1 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          Scopri come ECAI-Budget e Report VSME ESG possono automatizzare il tuo budget e assicurare la compliance ESG.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a href={CTA_DEMO_URL} className="cta-el reveal-item delay-2 btn-primary text-base px-8 py-3">
            Prenota una Demo <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={CTA_DEMO_URL}
            className="cta-el reveal-item delay-3 border-2 border-white/20 text-white hover:bg-white hover:text-dark px-8 py-2.5 rounded-xl font-semibold transition-all text-base"
          >
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
