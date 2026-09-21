import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Compass, Layout, Code2, Gauge } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

const STEP_ICONS = [Compass, Layout, Code2, Gauge];

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section
      id="process"
      className="relative w-full py-28 sm:py-36 bg-[#0B0B0F] text-[#F5F5F5] border-t border-white/5 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#7C3AED]/06 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#22D3EE] tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
              <span>06 / METHODOLOGY</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              FROM IDEA → EXPERIENCE
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm font-mono text-zinc-400 max-w-sm">
            A structured, 4-phase methodology ensuring disciplined design, scalable code, and zero friction.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Vertical Timeline Steps */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[index] || Compass;
              const isActive = index === activeStepIndex;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(index)}
                  className={`w-full text-left p-6 sm:p-7 rounded-2xl transition-all duration-300 border flex items-start space-x-5 ${
                    isActive
                      ? 'bg-[#12121A] border-[#22D3EE] shadow-[0_8px_32px_rgba(34,211,238,0.15)]'
                      : 'bg-[#0E0E14]/60 border-white/5 hover:border-white/15 hover:bg-[#101016]'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/40'
                        : 'bg-white/[0.04] text-zinc-500 border border-white/5'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                        PHASE {step.number}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-mono text-[#22D3EE] tracking-widest uppercase">
                          ACTIVE PHASE
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Phase Deep Dive Card */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-8 sm:p-10 rounded-3xl bg-[#101016] border border-white/15 shadow-2xl relative overflow-hidden"
            >
              {/* Top Phase Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-display font-bold text-[#8B5CF6]">
                    {PROCESS_STEPS[activeStepIndex].number}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-zinc-400 uppercase">CURRENT DELIVERABLES</span>
                    <span className="text-lg font-display font-bold text-white">
                      {PROCESS_STEPS[activeStepIndex].title} EXECUTION
                    </span>
                  </div>
                </div>

                <div className="w-2 h-2 rounded-full bg-[#22D3EE] animate-ping" />
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-8">
                {PROCESS_STEPS[activeStepIndex].description}
              </p>

              {/* Execution Checklist */}
              <div className="space-y-3.5 mb-8">
                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  ACTION PLAN & STANDARDS
                </h4>
                {PROCESS_STEPS[activeStepIndex].details.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center space-x-3 text-xs sm:text-sm text-zinc-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Timeline Navigation Dots */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 text-xs font-mono text-zinc-500">
                <span>PROGRESSION: {activeStepIndex + 1} / 4</span>
                <div className="flex items-center space-x-1.5">
                  {PROCESS_STEPS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStepIndex
                          ? 'w-6 bg-[#22D3EE]'
                          : 'w-1.5 bg-zinc-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
