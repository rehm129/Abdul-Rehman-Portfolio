import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1200; // 1.2 seconds max as requested
    const interval = 25;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 400);
          }, 150);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-[#F5F5F5] select-none"
        >
          {/* Subtle noise and radial glow */}
          <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" />
          <div className="absolute w-[360px] h-[360px] rounded-full bg-[#7C3AED]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Monogram */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xs font-mono tracking-widest text-[#7C3AED] px-2 py-0.5 border border-[#7C3AED]/30 rounded">
                AR
              </span>
              <span className="font-display font-semibold tracking-wider text-sm sm:text-base text-zinc-300">
                ABDUL REHMAN
              </span>
            </div>

            {/* Percentage counter */}
            <div className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white mb-6 tabular-nums">
              {Math.floor(progress).toString().padStart(2, '0')}
              <span className="text-sm font-mono text-[#22D3EE] ml-1">%</span>
            </div>

            {/* Animated progress line */}
            <div className="w-48 sm:w-64 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#22D3EE]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Micro label */}
            <p className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase mt-4">
              INITIALIZING CREATIVE ENGINE
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
