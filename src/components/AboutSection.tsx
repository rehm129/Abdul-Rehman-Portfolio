import { motion } from 'motion/react';
import { Sparkles, Terminal, Palette, Cpu, Workflow, Globe } from 'lucide-react';

export function AboutSection() {
  const metadataTags = [
    { label: 'DESIGN', icon: Palette, top: '8%', left: '-6%' },
    { label: 'CODE', icon: Terminal, top: '38%', right: '-8%' },
    { label: 'AI', icon: Sparkles, bottom: '28%', left: '-10%' },
    { label: 'AUTOMATION', icon: Workflow, bottom: '6%', right: '-4%' },
    { label: 'WEB', icon: Globe, top: '75%', left: '10%' }
  ];

  return (
    <section
      id="about"
      className="relative w-full py-28 sm:py-36 bg-[#050505] text-[#F5F5F5] overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-[#7C3AED]/08 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[360px] h-[360px] bg-[#22D3EE]/06 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Step 1: Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
          <span>01 / ABOUT</span>
        </motion.div>

        {/* Step 2: Big Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] max-w-4xl uppercase"
        >
          I BUILD DIGITAL EXPERIENCES THAT CONNECT{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            DESIGN,
          </span>{' '}
          <span className="text-[#8B5CF6]">TECHNOLOGY</span> AND{' '}
          <span className="text-[#22D3EE]">AUTOMATION.</span>
        </motion.h2>

        {/* Grid Layout: Editorial Narrative & Digital Avatar Identity Visual */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Step 3: Paragraphs Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed"
          >
            <p>
              Based in Pakistan, I work at the intersection where aesthetic visual art direction converges with
              resilient frontend development and modern intelligent workflows.
            </p>
            <p>
              As a designer and frontend developer, I focus on clean typographic systems, responsive architecture, and
              tactile micro-interactions. Every layout is constructed intentionally—delivering clarity, speed, and
              intuitive ergonomics without superfluous visual clutter.
            </p>
            <p>
              Beyond the interface, I specialize in AI tools and business process automation: architecting connected
              pipelines that link webhooks, CRM databases, automated email sequences, and generative models to eliminate
              repetitive manual friction.
            </p>

            {/* Quick Fact / Philosophy Pills */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-zinc-500 uppercase">LOCATION</span>
                <span className="font-display font-medium text-zinc-200 mt-1">Pakistan</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-zinc-500 uppercase">CORE DISCIPLINE</span>
                <span className="font-display font-medium text-zinc-200 mt-1">Design + Code + AI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-zinc-500 uppercase">PHILOSOPHY</span>
                <span className="font-display font-medium text-zinc-200 mt-1">Function First</span>
              </div>
            </div>
          </motion.div>

          {/* Step 4 & 5: Visual Avatar + Floating Metadata */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Avatar Frame */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0B0B0F] shadow-[0_16px_40px_rgba(0,0,0,0.6)] group">
              <img
                src="/src/assets/images/digital_avatar_tech_1789978468610.jpg"
                alt="Abdul Rehman — Creative Technologist Digital Representation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

              {/* Bottom Identity Caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="flex flex-col">
                  <span className="text-xs font-display font-bold text-white tracking-wide">
                    ABDUL REHMAN
                  </span>
                  <span className="text-[10px] font-mono text-[#22D3EE]">
                    CREATIVE IDENTITY
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#22D3EE] animate-ping" />
              </div>
            </div>

            {/* Step 5: Floating Metadata Tags around the avatar */}
            {metadataTags.map((tag, idx) => {
              const Icon = tag.icon;
              return (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                  style={{
                    top: tag.top,
                    left: tag.left,
                    right: tag.right,
                    bottom: tag.bottom
                  }}
                  className="absolute z-20 hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#101014]/90 border border-white/15 text-[11px] font-mono text-zinc-300 backdrop-blur-md shadow-xl select-none hover:border-[#7C3AED] hover:text-white transition-colors"
                >
                  <Icon className="w-3 h-3 text-[#22D3EE]" />
                  <span>{tag.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
