import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { SkillsSection } from './components/SkillsSection';
import { ToolkitSection } from './components/ToolkitSection';
import { ProcessSection } from './components/ProcessSection';
import { ApproachSection } from './components/ApproachSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EasterEgg } from './components/EasterEgg';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll for cinematic scrolling
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] font-sans antialiased selection:bg-[#7C3AED]/30 selection:text-[#22D3EE] overflow-x-hidden">
      {/* Short Premium Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Subtle Noise Texture Overlay */}
      <div className="fixed inset-0 bg-noise pointer-events-none opacity-30 z-30" />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Longitudinal Cinematic Experience */}
      <main className="relative z-10 flex flex-col w-full">
        {/* 1. HOME (Hero) */}
        <HeroSection />

        {/* 2. ABOUT */}
        <AboutSection />

        {/* 3. SERVICES */}
        <ServicesSection />

        {/* 4. WORK (Real Projects + Experiments & Concepts) */}
        <WorkSection />

        {/* 5. SKILLS */}
        <SkillsSection />

        {/* 6. TOOLKIT */}
        <ToolkitSection />

        {/* 7. PROCESS */}
        <ProcessSection />

        {/* 8. APPROACH */}
        <ApproachSection />

        {/* 9. CONTACT */}
        <ContactSection />
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* Hidden Easter Egg Listener */}
      <EasterEgg />
    </div>
  );
}
