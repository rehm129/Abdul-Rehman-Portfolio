import { motion } from 'motion/react';
import { Eye, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export function ApproachSection() {
  const pillars = [
    {
      title: 'CLARITY & HIERARCHY',
      desc: 'Eliminating decorative noise so content and primary actions communicate with immediate optical authority.',
      icon: Eye
    },
    {
      title: 'SPEED AS A FEATURE',
      desc: 'Zero layout shift, 60fps hardware-accelerated transforms, and lean bundle architectures that load instantly.',
      icon: Zap
    },
    {
      title: 'INTELLIGENT AUTOMATION',
      desc: 'Integrating AI and webhooks into existing workflows to replace repetitive manual drag with autonomous reliability.',
      icon: Sparkles
    },
    {
      title: 'BUSINESS PURPOSE',
      desc: 'Every layout, animation, and backend hook serves a measurable functional goal: converting interest into outcomes.',
      icon: ShieldCheck
    }
  ];

  return (
    <section
      id="approach"
      className="relative w-full py-28 sm:py-36 bg-[#050505] text-[#F5F5F5] border-t border-white/5 overflow-hidden"
    >
      {/* Subtle background ambient blob */}
      <div className="absolute top-1/3 right-1/3 w-[450px] h-[450px] bg-[#7C3AED]/06 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
          <span>07 / CORE PHILOSOPHY</span>
        </div>

        {/* Big Editorial Statement */}
        <div className="mb-16 sm:mb-20 max-w-5xl">
          <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.08]">
            <span>GOOD DESIGN </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
              GETS ATTENTION.
            </span>
            <br />
            <span>GREAT EXPERIENCES </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#38BDF8]">
              KEEP IT.
            </span>
          </h2>
          <p className="mt-8 text-base sm:text-lg text-zinc-400 font-normal max-w-2xl leading-relaxed">
            True digital craftsmanship is not about accumulating gratuitous visual tricks. It is the discipline
            of making complex software feel effortless, fast, and memorable.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#22D3EE] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white tracking-wide mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
