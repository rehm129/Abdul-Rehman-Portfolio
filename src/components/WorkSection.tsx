import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, Github, Sparkles, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { AiAutomationWorkflow } from './AiAutomationWorkflow';

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const realProjects = PROJECTS.filter((p) => p.type === 'real');
  const conceptProjects = PROJECTS.filter((p) => p.type === 'concept');

  return (
    <section
      id="work"
      className="relative w-full py-28 sm:py-36 bg-[#050505] text-[#F5F5F5] border-t border-white/5 overflow-hidden"
    >
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#7C3AED]/06 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[420px] h-[420px] bg-[#22D3EE]/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#7C3AED] tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              <span>03 / PORTFOLIO</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              SELECTED WORK
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm font-mono text-zinc-400 max-w-sm">
            Featuring actual client and public projects first, followed by personal research experiments.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* PART 1: REAL PROJECTS (Prioritized First) */}
        {/* ---------------------------------------------------- */}
        <div className="mb-8 flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h3 className="font-display font-bold text-lg sm:text-xl tracking-wider text-white uppercase">
            REAL PROJECTS
          </h3>
          <span className="text-xs font-mono text-zinc-500">
            ({realProjects.length} DOCUMENTED DELIVERABLES)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {realProjects.map((project, idx) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              data-cursor="view"
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative rounded-3xl overflow-hidden bg-[#0B0B0F] border border-white/10 hover:border-[#22D3EE]/50 transition-all duration-500 flex flex-col justify-between shadow-2xl"
            >
              {/* Top Image Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101014]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-90" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md uppercase">
                    ● REAL WORK
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-zinc-300 bg-black/60 border border-white/10 backdrop-blur-md">
                    0{idx + 1}
                  </span>
                </div>

                {/* Arrow Icon Indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-zinc-300 group-hover:text-black group-hover:bg-[#22D3EE] group-hover:border-[#22D3EE] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Card Meta Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[11px] font-mono text-[#22D3EE] tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mt-1 mb-2 group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Technologies & CTAs */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-white/[0.04] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-mono">
                    {project.liveUrl && (
                      <span className="text-[#22D3EE] flex items-center space-x-1 group-hover:underline">
                        <span>LIVE PROJECT</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    )}
                    {project.githubUrl && (
                      <span className="text-zinc-300 flex items-center space-x-1 group-hover:underline">
                        <span>SOURCE CODE</span>
                        <Github className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------------------------------------------- */}
        {/* PART 2: EXPERIMENTS & CONCEPT VISUALS */}
        {/* ---------------------------------------------------- */}
        <div className="pt-12 border-t border-white/10">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] animate-pulse" />
              <h3 className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white uppercase">
                EXPERIMENTS & CONCEPTS
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30">
              ◆ CLEARLY LABELED PERSONAL EXPLORATIONS
            </span>
          </div>

          <p className="text-sm text-zinc-400 max-w-2xl mb-8">
            Conceptual frameworks, generative automation topologies, 3D digital sculptures, and UI prototypes
            created to test novel interaction patterns and system architectures.
          </p>

          {/* Interactive AI Automation Conceptual Visual Feature */}
          <AiAutomationWorkflow />

          {/* Additional Concept Visuals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {conceptProjects.map((concept) => (
              <div
                key={concept.id}
                data-cursor="explore"
                onClick={() => setSelectedProject(concept)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0C0C10] border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={concept.image}
                    alt={concept.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest bg-purple-950/80 text-purple-300 border border-purple-500/40 backdrop-blur-md uppercase">
                      CONCEPT
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      {concept.category}
                    </span>
                    <h5 className="font-display font-bold text-base text-white group-hover:text-purple-300 transition-colors mt-0.5 mb-2">
                      {concept.title}
                    </h5>
                    <p className="text-xs text-zinc-400 line-clamp-2">
                      {concept.tagline}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>{concept.technologies[0]}</span>
                    <span className="text-[#22D3EE] group-hover:translate-x-0.5 transition-transform flex items-center space-x-1">
                      <span>INSPECT</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
