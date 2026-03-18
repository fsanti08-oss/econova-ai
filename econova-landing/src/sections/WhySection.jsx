import { reasons } from '../data/whyReasons';

const WhySection = () => (
  <section id="perche-noi" className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white via-white to-accentLight/20" aria-labelledby="heading-perche-noi">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <div className="text-center mb-12 sm:mb-16">
        <h2 id="heading-perche-noi" className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">
          Perchè ECONOVA-AI?
        </h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          6 motivi per scegliere la nostra piattaforma
        </p>
      </div>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible scrollbar-hide">
        {reasons.map((reason, i) => {
          const ReasonIcon = reason.icon;
          return (
            <div
              key={i}
              className="fade-in-up glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-all hover:shadow-glass-lg min-w-[260px] sm:min-w-[280px] md:min-w-0 snap-start"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <ReasonIcon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dark mb-2">{reason.title}</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">{reason.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhySection;
