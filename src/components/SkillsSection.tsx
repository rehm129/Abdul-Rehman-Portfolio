import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Palette, Cpu, Workflow, Globe, Layers, ArrowRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillCategory } from '../types';

export function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  // Derive dynamic context telemetry based on hovered skill or active category
  const getContextMetadata = (skillName: string | null, category: SkillCategory) => {
    if (!skillName) return category.contextTags;

    const lower = skillName.toLowerCase();
    if (lower.includes('ai') || lower.includes('automation') || lower.includes('chatbot')) {
      return ['TRIGGERS', 'WORKFLOWS', 'DATA', 'CRM', 'EMAIL', 'FOLLOW-UP'];
    }
    if (lower.includes('design') || lower.includes('brand') || lower.includes('logo')) {
      return ['LAYOUT', 'TYPOGRAPHY', 'BRANDING', 'VISUAL SYSTEMS'];
    }
    if (lower.includes('frontend') || lower.includes('web') || lower.includes('developer')) {
      return ['HTML', 'CSS', 'JAVASCRIPT', 'RESPONSIVE UI', 'INTERACTION'];
    }
    if (lower.includes('seo') || lower.includes('marketing') || lower.includes('ads')) {
      return ['SEARCH VISIBILITY', 'CONVERSIONS', 'TRAFFIC', 'AUDIENCE REACH'];
    }
    if (lower.includes('lead') || lower.includes('email') || lower.includes('crm') || lower.includes('support')) {
      return ['PIPELINES', 'CUSTOMER CARE', 'OPERATIONS', 'COMMUNICATION'];
    }
    if (lower.includes('cloud') || lower.includes('domain') || lower.includes('hosting')) {
      return ['UPTIME', 'SECURITY', 'DNS', 'DEPLOYMENT'];
    }
    return category.contextTags;
  };

  const activeTags = getContextMetadata(hoveredSkill, activeCategory);

  return (
    <section
      id="skills"
      className="relative w-full py-28 sm:py-36 bg-[#0B0B0F] text-[#F5F5F5] border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-24 w-[460px] h-[460px] bg-[#7C3AED]/06 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-[#22D3EE]/05 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#22D3EE] tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
              <span>04 / SKILLS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              INTERACTIVE CAPABILITY MATRIX
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm font-mono text-zinc-400 max-w-sm">
            Categorized core competencies spanning design art direction, technical development, and AI engineering.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/10">
          {SKILL_CATEGORIES.map((category, idx) => {
            const isSelected = idx === activeCategoryIndex;
            return (
              <button
                key={category.title}
                onClick={() => {
                  setActiveCategoryIndex(idx);
                  setHoveredSkill(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 uppercase ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-[0_0_16px_rgba(255,255,255,0.2)]'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/5'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Interactive Typography Wall */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F0F16] border border-white/10 relative overflow-hidden">
          {/* Active Context Metadata Bar (Top Right) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-3">
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="text-zinc-500">ACTIVE DOMAIN:</span>
              <span className="text-[#22D3EE] font-bold">{activeCategory.title}</span>
            </div>

            {/* Live Contextual Nodes Tag Display */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono text-zinc-500 mr-1 uppercase">SYSTEM NODES:</span>
              {activeTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider text-[#8B5CF6] bg-[#7C3AED]/10 border border-[#7C3AED]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Typography Wall Items */}
          <div className="flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-5 sm:gap-y-8 items-center py-4">
            {activeCategory.skills.map((skill) => {
              const isCurrentHovered = hoveredSkill === skill;
              const hasHover = hoveredSkill !== null;

              return (
                <button
                  key={skill}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`group relative text-left font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-300 ${
                    isCurrentHovered
                      ? 'text-white scale-105 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                      : hasHover
                      ? 'text-zinc-600'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>{skill}</span>
                  {isCurrentHovered && (
                    <motion.div
                      layoutId="skillUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom Live Inspector Readout */}
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-zinc-400 gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {hoveredSkill ? `INSPECTING: ${hoveredSkill}` : 'HOVER ANY SKILL TO REVEAL CONNECTED SYSTEMS'}
              </span>
            </div>
            <div className="text-zinc-500">
              {activeCategory.skills.length} DISCIPLINE MODULES LOADED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
