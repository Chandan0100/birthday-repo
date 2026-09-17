import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DoodleOverlayProps {
  stage: number;
}

export const DoodleOverlay: React.FC<DoodleOverlayProps> = ({ stage }) => {
  // Doodles gradually appear from stage 4 onwards
  if (stage < 4) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none">
      <AnimatePresence>
        {/* Stage 4+: Initial subtle hand-drawn stars & handwritten arrows */}
        {stage >= 4 && (
          <>
            {/* Top Left Doodled Star (✦) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 0.75, scale: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-24 left-8 sm:left-16 text-[#00FF66]"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 2 L13.5 8.5 L20 10 L14.5 13.5 L15.5 20 L11 15.5 L6 19 L7.5 13 L2 9.5 L8.5 8 Z" />
              </svg>
            </motion.div>

            {/* Top Right Handwritten Arrow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.6, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-28 right-8 sm:right-24 text-[#39FF88]"
            >
              <svg width="48" height="36" viewBox="0 0 48 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 30 C 16 10, 32 8, 42 16" />
                <path d="M35 11 L42 16 L38 23" />
              </svg>
            </motion.div>
          </>
        )}

        {/* Stage 5+: Subtle balloon sketch & heart doodle */}
        {stage >= 5 && (
          <>
            {/* Left Hand-drawn Heart Doodle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.65, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-28 left-6 sm:left-20 text-[#FFD166]"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20.5 C 12 20.5, 3.5 14.5, 3.5 8.5 C 3.5 5.5, 6 3.5, 8.5 3.5 C 10.5 3.5, 11.5 4.5, 12 5.5 C 12.5 4.5, 13.5 3.5, 15.5 3.5 C 18 3.5, 20.5 5.5, 20.5 8.5 C 20.5 14.5, 12 20.5, 12 20.5 Z" />
              </svg>
            </motion.div>

            {/* Right Mini Balloon Sketch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 0.6, y: [0, -6, 0] }}
              exit={{ opacity: 0 }}
              transition={{ y: { repeat: Infinity, duration: 4, ease: 'easeInOut' }, opacity: { duration: 0.8 } }}
              className="absolute bottom-36 right-8 sm:right-20 text-[#00FF66]"
            >
              <svg width="34" height="48" viewBox="0 0 34 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <ellipse cx="17" cy="18" rx="14" ry="16" />
                <path d="M15 34 L19 34 L17 37 Z" />
                <path d="M17 37 Q12 42 16 46" />
              </svg>
            </motion.div>
          </>
        )}

        {/* Stage 7+: Full celebratory warm annotations (Cake sketch, sparkles, stars) */}
        {stage >= 7 && (
          <>
            {/* Top Right Mini Cake Doodle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
              animate={{ opacity: 0.75, scale: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-24 right-12 sm:right-32 text-[#FFD166]"
            >
              <svg width="42" height="42" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {/* Candle & Flame */}
                <line x1="16" y1="11" x2="16" y2="7" />
                <path d="M16 4 Q17.5 5.5 16 7 Q14.5 5.5 16 4 Z" fill="#FFD166" />
                {/* Tier 1 */}
                <rect x="8" y="11" width="16" height="7" rx="2" />
                {/* Tier 2 */}
                <rect x="5" y="18" width="22" height="9" rx="2" />
              </svg>
            </motion.div>

            {/* Sparkle cluster on the left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 0.7, scale: [1, 1.15, 1] }}
              exit={{ opacity: 0 }}
              transition={{ scale: { repeat: Infinity, duration: 3 }, opacity: { duration: 0.8 } }}
              className="absolute top-1/2 left-6 sm:left-14 -translate-y-1/2 text-[#39FF88]"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="12" y1="3" x2="12" y2="21" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
