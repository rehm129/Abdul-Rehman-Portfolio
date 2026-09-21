import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'button' | 'project' | 'image' | 'hidden'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Check for touch device or reduced motion preference
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect hover target attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const mode = cursorTarget.getAttribute('data-cursor');
        if (mode === 'view') {
          setCursorType('project');
          setCursorText('VIEW');
        } else if (mode === 'explore') {
          setCursorType('image');
          setCursorText('EXPLORE');
        } else if (mode === 'button') {
          setCursorType('button');
          setCursorText('');
        } else {
          setCursorType('default');
          setCursorText('');
        }
      } else if (target.closest('button, a, input, textarea, select')) {
        setCursorType('button');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => setCursorType('hidden');
    const onMouseEnter = () => setCursorType('default');

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Smooth lerp for the trailing ring
  useEffect(() => {
    if (!isEnabled) return;

    const lerp = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16
        };
      });
      rafRef.current = requestAnimationFrame(lerp);
    };

    rafRef.current = requestAnimationFrame(lerp);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isEnabled, position]);

  if (!isEnabled || cursorType === 'hidden') return null;

  const isLarge = cursorType === 'project' || cursorType === 'image';
  const isButton = cursorType === 'button';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central exact point */}
      <div
        className="fixed w-1.5 h-1.5 rounded-full bg-white transition-opacity duration-150"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          opacity: isLarge ? 0 : 0.9,
          boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)'
        }}
      />

      {/* Trailing follower ring */}
      <div
        className={`fixed flex items-center justify-center rounded-full transition-all duration-200 ${
          isLarge
            ? 'w-16 h-16 bg-[#7C3AED]/30 border border-[#22D3EE]/80 backdrop-blur-sm'
            : isButton
            ? 'w-8 h-8 border border-[#7C3AED]/70 bg-[#7C3AED]/10'
            : 'w-7 h-7 border border-white/30'
        }`}
        style={{
          transform: `translate3d(${
            trailingPos.x - (isLarge ? 32 : isButton ? 16 : 14)
          }px, ${trailingPos.y - (isLarge ? 32 : isButton ? 16 : 14)}px, 0)`
        }}
      >
        {isLarge && (
          <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-300">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
