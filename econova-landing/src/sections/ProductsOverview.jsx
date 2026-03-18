import { ArrowRight, BarChart3, Zap, TrendingUp, Brain, Leaf, Trees, FileText, Shield } from 'lucide-react';

const ProductsOverview = () => (
  <section id="prodotti" className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white to-accentLight/30 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <div className="text-center mb-12 sm:mb-16">
        <h2 id="heading-prodotti" className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">
          Due piattaforme, infinite possibilità
        </h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          Gestisci budget e sostenibilità con l'intelligenza artificiale
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* ECAI-Budget Product Card */}
        <div className="fade-in-up glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-all duration-300 hover:shadow-glass-xl overflow-hidden relative group">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <BarChart3 className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent">Controllo di Gestione</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-3">ECAI-Budget</h3>
            <p className="text-muted mb-6 leading-relaxed">
              Automatizza il controllo di gestione con AI che analizza budget, costi e flussi di cassa in tempo reale.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark">Budget vs Actual in tempo reale</span>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark">Forecast intelligenti per previsioni accurate</span>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark">Anomalie e inefficienze identificate automaticamente</span>
              </div>
            </div>
            <a href="#budget" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              Scopri di più <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Report VSME ESG Product Card */}
        <div className="fade-in-up delay-200 glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-all duration-300 hover:shadow-glass-xl overflow-hidden relative group">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent">Sostenibilità</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-3">Report VSME ESG</h3>
            <p className="text-muted mb-6 leading-relaxed">
              Genera report ESG standardizzati secondo le direttive CSRD per comunicare la sostenibilità dell'azienda.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Trees className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark">Calcolo automatico impronta ecologica e carbon footprint</span>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark">Report compliant con standard CSRD</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark">Audit trail completo per compliance</span>
              </div>
            </div>
            <a href="#vsme" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              Scopri di più <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsOverview;
