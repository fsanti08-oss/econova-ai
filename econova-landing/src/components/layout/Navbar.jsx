import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import EconovaLogo from '../ui/EconovaLogo';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { internalLinks, externalLinks, CTA_DEMO_URL } from '../../data/navigation';

const Navbar = () => {
  const scrolled = useScrollPosition(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-black/[0.04] shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <EconovaLogo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-muted">
          {internalLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-dark transition-colors">
              {link.label}
            </a>
          ))}

          <span className="w-px h-5 bg-black/10" />

          {externalLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-dark transition-colors">
              {link.label}
            </a>
          ))}

          <a href={CTA_DEMO_URL} className="btn-primary !px-6 !py-2.5 !text-sm">
            Prenota Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2" aria-label="Menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-black/[0.04] px-6 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[500px] py-6' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-mono text-muted uppercase tracking-wider mb-2">Piattaforma</p>
          {internalLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMobile} className="text-dark font-medium py-2">
              {link.label}
            </a>
          ))}

          <p className="text-[10px] font-mono text-muted uppercase tracking-wider mt-4 mb-2">Azienda</p>
          {externalLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMobile} className="text-dark font-medium py-2">
              {link.label}
            </a>
          ))}

          <a href={CTA_DEMO_URL} onClick={closeMobile} className="btn-primary text-center mt-4">
            Prenota Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
