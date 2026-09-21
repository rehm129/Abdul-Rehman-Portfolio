import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Sparkles, Terminal, Palette, Workflow, BarChart3 } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [hoveredService, setHoveredService] = useState<Service | null>(null);

  const categories = ['ALL', 'Design', 'Development', 'AI & Automation', 'Growth & Strategy'];

  const filteredServices = activeCategory === 'ALL'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  // Render original mini concept visual for the hovered card
  const renderPreviewVisual = (type: Service['previewType']) => {
    switch (type) {
      case 'automation':
        return (
          <div className="w-full h-full p-3 flex flex-col justify-between bg-[#08080C] text-[10px] font-mono">
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-1.5 text-zinc-400">
              <span className="flex items-center space-x-1">
                <Workflow className="w-3 h-3 text-[#22D3EE]" />
                <span>AI_PIPELINE.n8n</span>
              </span>
              <span className="text-[#22D3EE] text-[9px]">ACTIVE</span>
            </div>
            <div className="flex items-center justify-between text-[9px] text-zinc-300 py-1">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">Lead Event</span>
              <span className="text-zinc-600">→</span>
              <span className="px-1.5 py-0.5 rounded bg-purple-900/40 text-purple-300 border border-purple-500/30">LLM Parse</span>
              <span className="text-zinc-600">→</span>
              <span className="px-1.5 py-0.5 rounded bg-cyan-900/40 text-cyan-300 border border-cyan-500/30">CRM Sync</span>
            </div>
            <div className="text-[9px] text-zinc-500 font-mono flex justify-between">
              <span>Latency: 140ms</span>
              <span className="text-emerald-400">Status 200 OK</span>
            </div>
          </div>
        );
      case 'frontend':
        return (
          <div className="w-full h-full p-3 flex flex-col justify-between bg-[#08080C] text-[10px] font-mono">
            <div className="flex items-center space-x-1.5 border-b border-white/10 pb-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <div className="w-2 h-2 rounded-full bg-green-500/80" />
              <span className="text-[9px] text-zinc-400 ml-1">App.tsx • React 19</span>
            </div>
            <div className="space-y-0.5 text-[9px] text-zinc-400">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-cyan-300">experience</span> ={' '}
              <span className="text-yellow-200">useInteraction</span>();
              <div className="text-zinc-500 pl-2">// Optimized 60FPS render</div>
              <div className="text-emerald-400 pl-2">return &lt;Experience /&gt;</div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-zinc-500 border-t border-white/5 pt-1">
              <span>Tailwind v4</span>
              <span>Lighthouse 100</span>
            </div>
          </div>
        );
      case 'seo':
        return (
          <div className="w-full h-full p-3 flex flex-col justify-between bg-[#08080C] text-[10px] font-mono">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-1.5">
              <span className="flex items-center space-x-1 text-zinc-300">
                <BarChart3 className="w-3 h-3 text-[#22D3EE]" />
                <span>GROWTH TELEMETRY</span>
              </span>
              <span className="text-emerald-400">+184%</span>
            </div>
            <div className="flex items-end space-x-1.5 h-10 py-1">
              <div className="flex-1 bg-zinc-800 h-3 rounded-t" />
              <div className="flex-1 bg-zinc-700 h-5 rounded-t" />
              <div className="flex-1 bg-[#7C3AED]/60 h-7 rounded-t" />
              <div className="flex-1 bg-[#22D3EE] h-10 rounded-t shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            </div>
            <div className="flex justify-between text-[9px] text-zinc-500">
              <span>Keyword Rank #1</span>
              <span>Organic CTR 12.8%</span>
            </div>
          </div>
        );
      case 'design':
      default:
        return (
          <div className="w-full h-full p-3 flex flex-col justify-between bg-[#08080C] text-[10px] font-mono">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <span className="flex items-center space-x-1 text-zinc-300">
                <Palette className="w-3 h-3 text-[#7C3AED]" />
                <span>ART DIRECTION</span>
              </span>
              <span className="text-zinc-500 text-[9px]">FIGMA GRID</span>
            </div>
            <div className="flex items-center justify-center py-2">
              <div className="relative w-16 h-10 border border-dashed border-purple-500/50 rounded flex items-center justify-center">
                <span className="text-[8px] tracking-widest text-[#22D3EE]">EDITORIAL</span>
              </div>
            </div>
            <div className="flex justify-between text-[9px] text-zinc-500">
              <span>Space Grotesk</span>
              <span>Golden Ratio 1.618</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="services"
      className="relative w-full py-28 sm:py-36 bg-[#0B0B0F] text-[#F5F5F5] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background lights */}
      <div className="absolute top-1/2 right-1/4 w-[460px] h-[460px] bg-[#7C3AED]/06 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-[#22D3EE]/05 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#22D3EE] tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
              <span>02 / CAPABILITIES</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              WHAT I CAN BUILD
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm sm:text-base text-zinc-400 font-mono max-w-sm">
            16 comprehensive disciplines spanning visual craft, frontend code, and autonomous systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-white text-black font-semibold shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const isHovered = hoveredService?.id === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onMouseEnter={() => setHoveredService(service)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#101014]/70 border border-white/[0.07] hover:border-[#7C3AED]/50 hover:bg-[#121218] transition-all duration-300 flex flex-col justify-between shadow-lg overflow-hidden"
              >
                {/* Subtle top card gradient highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#8B5CF6]/50 transition-all duration-500" />

                <div>
                  {/* Top row: Number and Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-zinc-600 group-hover:text-[#22D3EE] group-hover:translate-x-1 transition-all duration-300">
                      {service.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-[#7C3AED]/30 group-hover:border-[#7C3AED]/60 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-200 transition-colors tracking-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-white/[0.03] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Desktop Interactive Preview Drawer on Hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2 }}
                    className="hidden xl:block absolute bottom-3 right-3 left-3 h-28 rounded-xl overflow-hidden border border-white/10 shadow-2xl z-20 backdrop-blur-md"
                  >
                    {renderPreviewVisual(service.previewType)}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
