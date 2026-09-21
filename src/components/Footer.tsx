import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: id === 'home' ? 0 : elementPosition - topOffset,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'toolkit', label: 'Toolkit' },
    { id: 'process', label: 'Process' },
    { id: 'approach', label: 'Approach' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="relative w-full py-16 sm:py-20 bg-[#050505] text-[#F5F5F5] border-t border-white/10">
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Logo & Identity */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/20 border border-[#7C3AED]/50 flex items-center justify-center text-xs font-mono font-bold text-[#22D3EE]">
                AR
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wide">
                ABDUL REHMAN
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-400">
              Creative Technologist • Designer • Frontend Developer • AI & Automation
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-zinc-400">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#22D3EE] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Back-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-[#7C3AED] hover:bg-[#7C3AED]/10 transition-all group shrink-0"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#22D3EE]" />
          </button>
        </div>

        {/* Bottom Micro Meta */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <div className="flex items-center space-x-2">
            <span>© 2026 Abdul Rehman. All rights reserved.</span>
            <span>•</span>
            <span>Pakistan</span>
          </div>

          <div className="text-zinc-400 tracking-wider">
            DESIGN • CODE • AI • AUTOMATION
          </div>
        </div>
      </div>
    </footer>
  );
}
