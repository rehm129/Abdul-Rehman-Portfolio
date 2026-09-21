import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
    }
  };

  const marqueeWords = [
    'DESIGN',
    'DEVELOPMENT',
    'AI',
    'AUTOMATION',
    'CREATIVE TECHNOLOGY',
    'INTERACTION',
    'DESIGN',
    'DEVELOPMENT',
    'AI',
    'AUTOMATION',
    'CREATIVE TECHNOLOGY',
    'INTERACTION'
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-8 overflow-hidden bg-[#050505]"
    >
      {/* 3D WebGL Selective Background */}
      <ThreeHeroCanvas />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-40 z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-8 my-auto flex flex-col items-start justify-center">
        {/* Monospace Metadata Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-2.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono font-medium tracking-widest text-zinc-300 uppercase">
            CREATIVE TECHNOLOGIST / PAKISTAN
          </span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white uppercase max-w-4xl"
        >
          <span className="block">I DESIGN.</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            I BUILD.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#22D3EE]">
            I AUTOMATE.
          </span>
        </motion.div>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg lg:text-xl text-zinc-400 font-normal leading-relaxed"
        >
          Designing digital experiences, building modern websites, and creating AI-powered workflows.
        </motion.p>

        {/* Role Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-zinc-400"
        >
          <span className="text-zinc-200">Creative Technologist</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-200">Designer</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-200">Frontend Developer</span>
          <span className="text-zinc-600">•</span>
          <span className="text-[#22D3EE]">AI & Automation</span>
        </motion.div>

        {/* Magnetic Primary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            id="hero-view-work-btn"
            data-cursor="button"
            onClick={() => scrollToSection('work')}
            className="group relative inline-flex items-center space-x-3 px-6 sm:px-8 py-3.5 rounded-full bg-white text-black font-display font-semibold text-sm sm:text-base tracking-wide shadow-[0_0_24px_rgba(255,255,255,0.15)] hover:bg-[#F0F0F0] hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-300"
          >
            <span>VIEW MY WORK</span>
            <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            id="hero-contact-btn"
            data-cursor="button"
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center space-x-3 px-6 sm:px-8 py-3.5 rounded-full bg-white/[0.04] text-white border border-white/15 font-display font-semibold text-sm sm:text-base tracking-wide hover:border-[#7C3AED] hover:bg-[#7C3AED]/15 transition-all duration-300"
          >
            <span>LET'S WORK TOGETHER</span>
            <ArrowUpRight className="w-4 h-4 text-[#22D3EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Row: Scroll Indicator & Marquee */}
      <div className="relative z-20 w-full mt-12 flex flex-col items-center">
        {/* Scroll indicator */}
        <div className="flex flex-col items-center mb-6 text-zinc-500 hover:text-zinc-300 transition-colors">
          <span className="text-[10px] font-mono tracking-widest uppercase mb-2">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-zinc-500 via-[#22D3EE] to-transparent animate-pulse" />
        </div>

        {/* Continuous Horizontal Marquee */}
        <div className="w-full border-y border-white/5 bg-[#0B0B0F]/60 py-3.5 overflow-hidden backdrop-blur-sm select-none">
          <div className="animate-marquee flex items-center space-x-8">
            {marqueeWords.map((word, idx) => (
              <div key={idx} className="flex items-center space-x-8 shrink-0">
                <span className="text-xs sm:text-sm font-display font-medium tracking-widest text-zinc-400 hover:text-white transition-colors">
                  {word}
                </span>
                <Sparkles className="w-3 h-3 text-[#7C3AED]/70" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
