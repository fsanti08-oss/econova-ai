const EconovaLogo = ({ className = '', white = false }) => (
  <a href="#" className={`flex items-center gap-0.5 font-extrabold text-xl sm:text-2xl tracking-tight ${className}`}>
    <span className={white ? 'text-white' : 'text-accent'}>ECONOVA</span>
    <span className={white ? 'text-white/70' : 'text-accentLime'}>-AI</span>
  </a>
);

export default EconovaLogo;
