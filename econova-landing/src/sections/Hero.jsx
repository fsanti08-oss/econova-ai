import { ArrowRight, TrendingUp, Leaf, Factory, Lightbulb } from 'lucide-react';
import { CTA_DEMO_URL } from '../data/navigation';

const Hero = () => {
  return (
    <section className="hero-gradient min-h-[100dvh] flex items-center relative overflow-hidden pt-20">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
        <div className="max-w-4xl">
          <h1 className="fade-in-up text-center lg:text-left text-[clamp(2.2rem,6vw,5.5rem)] leading-[1.05] font-extrabold tracking-tight text-dark mb-4 sm:mb-6">
            Controllo di gestione{' '}
            <span className="text-accent">intelligente</span>,{' '}
            <br className="hidden lg:block" />
            sostenibilità{' '}
            <span className="italic font-medium text-muted">automatica.</span>
          </h1>

          <p className="fade-in-up text-center lg:text-left text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10" style={{ animationDelay: '150ms' }}>
            ECAI-Budget e Report VSME ESG: due piattaforme AI progettate per le PMI che vogliono gestire budget e
            compliance ESG senza complessità.
          </p>

          <div className="fade-in-up flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start" style={{ animationDelay: '300ms' }}>
            <a href={CTA_DEMO_URL} className="btn-primary text-base text-center">
              Prenota una Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#budget" className="btn-secondary text-base text-center">
              Esplora le Dashboard
            </a>
          </div>

          {/* NVIDIA trust badge */}
          <div className="fade-in-up flex items-center gap-3 mt-8 justify-center lg:justify-start" style={{ animationDelay: '450ms' }}>
            <img src="/nvidia-badge.svg" alt="NVIDIA Inception Program" className="h-10 object-contain" />
            <span className="text-xs text-muted">Member of NVIDIA Inception Program</span>
          </div>
        </div>

        {/* Floating stats cards — desktop only */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[340px]">
          {/* Budget card */}
          <div className="float-animation glass-card-strong p-6 shadow-glass-lg mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-muted uppercase tracking-wider">Budget Mensile</span>
              <TrendingUp className="w-4 h-4 text-accent" />
            </div>
            <div className="text-3xl font-bold text-dark mb-1">&euro; 142.850</div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12.4%</span>
              <span className="text-xs text-muted">vs mese precedente</span>
            </div>
            <div className="mt-4 flex items-end gap-1 h-12">
              {[35, 45, 30, 55, 40, 65, 50, 70, 60, 80, 75, 90].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-accent/20" style={{ height: `${h}%` }}>
                  <div
                    className="w-full rounded-sm bg-accent"
                    style={{ height: `${Math.min(100, h + 10)}%`, opacity: i > 9 ? 1 : 0.4 + i * 0.05 }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carbon Footprint card */}
          <div className="float-animation-delayed glass-card-strong p-5 shadow-glass-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-muted uppercase tracking-wider">Carbon Footprint</span>
              <Leaf className="w-4 h-4 text-accent" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-accent/5 rounded-xl p-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Factory className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted">Scope 1 — Emissioni dirette</div>
                  <div className="text-lg font-bold text-dark">
                    32.1 <span className="text-xs font-normal text-muted">tCO₂e</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">-12%</span>
              </div>
              <div className="flex items-center gap-3 bg-accentLime/5 rounded-xl p-3">
                <div className="w-10 h-10 rounded-lg bg-accentLime/15 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-accentLime" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted">Scope 2 — Energia acquistata</div>
                  <div className="text-lg font-bold text-dark">
                    58.4 <span className="text-xs font-normal text-muted">tCO₂e</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">-22%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile floating cards */}
        <div className="lg:hidden mt-10 grid grid-cols-2 gap-3">
          <div className="glass-card-strong p-4 shadow-glass">
            <div className="flex items-center gap-2 mb-2">
              <Factory className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-mono text-muted uppercase">Scope 1</span>
            </div>
            <div className="text-xl font-bold text-dark">32.1</div>
            <div className="text-[10px] text-muted">tCO₂e &bull; Emissioni dirette</div>
          </div>
          <div className="glass-card-strong p-4 shadow-glass">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-accentLime" />
              <span className="text-[10px] font-mono text-muted uppercase">Scope 2</span>
            </div>
            <div className="text-xl font-bold text-dark">58.4</div>
            <div className="text-[10px] text-muted">tCO₂e &bull; Energia acquistata</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
