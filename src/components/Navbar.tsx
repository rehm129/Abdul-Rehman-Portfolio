import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'services', label: 'SERVICES' },
  { id: 'work', label: 'WORK' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'process', label: 'PROCESS' },
  { id: 'contact', label: 'CONTACT' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section based on scroll offset
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: id === 'home' ? 0 : elementPosition - topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none flex justify-center ${
          scrolled ? 'pt-3 sm:pt-4' : 'pt-5 sm:pt-6'
        }`}
      >
        <nav
          className={`pointer-events-auto w-[94%] max-w-5xl rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
            scrolled
              ? 'bg-[#0B0B0F]/85 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
              : 'bg-[#101014]/60 backdrop-blur-md border-white/5 shadow-lg'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo / Monogram */}
          <button
            id="nav-logo-btn"
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2.5 text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#22D3EE] rounded-md px-1"
          >
            <div className="w-7 h-7 rounded-md bg-[#7C3AED]/20 border border-[#7C3AED]/50 flex items-center justify-center text-[11px] font-mono font-bold text-[#22D3EE] group-hover:border-[#22D3EE] transition-colors">
              AR
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xs sm:text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                ABDUL REHMAN
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase hidden sm:inline-block">
                CREATIVE TECH • PK
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-1.5 text-xs font-mono tracking-wider transition-colors uppercase rounded-full ${
                    isActive ? 'text-white font-medium' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {item.label}

                  {/* Animated Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute -bottom-1 left-2 right-2 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] rounded-full shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick CTA & Mobile Menu Toggle */}
          <div className="flex items-center space-x-2">
            <button
              id="nav-cta-contact"
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-200 bg-white/[0.04] hover:bg-[#7C3AED]/20 hover:text-white border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-200"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#22D3EE]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-zinc-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-4 top-20 z-30 md:hidden rounded-2xl bg-[#0B0B0F]/95 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-mono tracking-wider transition-colors ${
                      isActive
                        ? 'bg-[#7C3AED]/20 text-[#22D3EE] font-semibold border-l-2 border-[#22D3EE]'
                        : 'text-zinc-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-[10px] uppercase font-mono text-[#7C3AED]">● ACTIVE</span>
                    )}
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col space-y-2 text-xs font-mono text-zinc-400">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">DIRECT REACH</span>
                <a
                  href="mailto:rehmanalbalushi375@gmail.com"
                  className="text-zinc-200 hover:text-[#22D3EE] transition-colors"
                >
                  rehmanalbalushi375@gmail.com
                </a>
                <a
                  href="https://wa.me/923278234073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-[#22D3EE] transition-colors"
                >
                  WhatsApp: +92 327 8234073
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
