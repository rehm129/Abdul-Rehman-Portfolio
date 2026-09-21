import { useState } from 'react';
import {
  PenTool,
  Image,
  Layers,
  Code,
  FileCode,
  Cpu,
  Atom,
  Palette,
  Layout,
  GitBranch,
  Workflow,
  Network,
  Bot,
  Sparkles,
  BarChart3,
  Server
} from 'lucide-react';
import { TOOLKIT } from '../data/portfolioData';

const ICON_MAP: Record<string, any> = {
  PenTool,
  Image,
  Layers,
  Code,
  FileCode,
  Cpu,
  Atom,
  Palette,
  Layout,
  GitBranch,
  Workflow,
  Network,
  Bot,
  Sparkles,
  BarChart3,
  Server
};

export function ToolkitSection() {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const categories = ['ALL', 'Design', 'Development', 'AI & Automation', 'Marketing', 'Infrastructure'];

  const filteredTools = selectedFilter === 'ALL'
    ? TOOLKIT
    : TOOLKIT.filter((t) => t.category === selectedFilter);

  return (
    <section
      id="toolkit"
      className="relative w-full py-24 sm:py-32 bg-[#050505] text-[#F5F5F5] border-t border-white/5"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              <span>05 / STACK & TOOLKIT</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              TOOLS I WORK WITH
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm font-mono text-zinc-400 max-w-sm">
            Proven toolchain utilized across production web architecture and automated pipelines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                selectedFilter === cat
                  ? 'bg-zinc-200 text-black font-semibold'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredTools.map((tool) => {
            const Icon = ICON_MAP[tool.iconName] || Cpu;
            return (
              <div
                key={tool.name}
                className="group p-4 sm:p-5 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#7C3AED]/40 hover:bg-[#111118] transition-all duration-300 flex items-center space-x-3.5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center text-zinc-300 group-hover:text-[#22D3EE] group-hover:bg-[#7C3AED]/20 transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-display font-semibold text-sm sm:text-base text-white group-hover:text-cyan-200 truncate transition-colors">
                    {tool.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase truncate">
                    {tool.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
