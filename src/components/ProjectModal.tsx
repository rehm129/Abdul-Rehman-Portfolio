import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Calendar, User, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0C0C10] border border-white/15 text-[#F5F5F5] shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-black transition-colors"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero Image in Modal */}
            <div className="relative w-full aspect-video sm:aspect-[21/9] overflow-hidden bg-zinc-950">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C10] via-transparent to-transparent" />

              {/* Status Badge */}
              <div className="absolute top-5 left-5">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase border backdrop-blur-md ${
                    project.type === 'real'
                      ? 'bg-emerald-950/70 text-emerald-400 border-emerald-500/40'
                      : 'bg-purple-950/70 text-purple-300 border-purple-500/40'
                  }`}
                >
                  {project.type === 'real' ? '● REAL PROJECT' : '◆ EXPERIMENT / CONCEPT'}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                <div>
                  <span className="text-xs font-mono text-[#22D3EE] tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-1">
                    {project.title}
                  </h2>
                </div>

                <div className="flex items-center space-x-4 text-xs font-mono text-zinc-400">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{project.year}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{project.role}</span>
                  </span>
                </div>
              </div>

              {/* Tagline & Description */}
              <p className="text-lg text-zinc-200 font-medium leading-relaxed mb-4">
                {project.tagline}
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  HIGHLIGHTS & EXECUTION
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-zinc-300">
                  {project.featuredPoints.map((pt, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  TECHNOLOGIES & TOOLKIT
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#14141E] border border-white/10 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#22D3EE] text-black font-display font-semibold text-sm hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  >
                    <span>VIEW LIVE PROJECT</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 text-white border border-white/20 font-display font-semibold text-sm hover:bg-white/20 transition-colors"
                  >
                    <span>VIEW SOURCE ON GITHUB</span>
                    <Github className="w-4 h-4" />
                  </a>
                )}

                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-full text-zinc-400 hover:text-white font-mono text-xs transition-colors"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
