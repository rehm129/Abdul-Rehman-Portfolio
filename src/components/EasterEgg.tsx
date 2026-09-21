import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal } from 'lucide-react';

export function EasterEgg() {
  const [buffer, setBuffer] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or editable field
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      const key = e.key.toLowerCase();
      if (/^[a-z]$/.test(key)) {
        setBuffer((prev) => {
          const next = (prev + key).slice(-10);
          if (next.endsWith('ar') || next.endsWith('abdul')) {
            setIsActive(true);
            setTimeout(() => setIsActive(false), 3800);
            return '';
          }
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-50 pointer-events-none"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0E0E16]/95 border border-[#22D3EE]/60 backdrop-blur-2xl shadow-[0_0_35px_rgba(34,211,238,0.3)] flex items-center space-x-3 text-white">
            <div className="w-9 h-9 rounded-xl bg-[#22D3EE]/20 border border-[#22D3EE]/40 flex items-center justify-center text-[#22D3EE]">
              <Sparkles className="w-5 h-5 animate-spin" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-widest text-[#22D3EE] uppercase font-bold">
                EASTER EGG ACTIVATED
              </span>
              <span className="text-xs font-display font-semibold text-zinc-100">
                SYSTEM OVERDRIVE: CREATIVE TECH ENGAGED
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
