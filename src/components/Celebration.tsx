import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, RotateCcw, Heart, PartyPopper, Cake, Flame } from 'lucide-react';
import { ZenmonkLogo } from './ZenmonkLogo';
import { BIRTHDAY_CONFIG } from '../config/birthdayData';
import { triggerGrandCelebration, triggerContinuousConfetti } from '../utils/confetti';

interface CelebrationProps {
  onRestart: () => void;
}

export const Celebration: React.FC<CelebrationProps> = ({ onRestart }) => {
  const [hasDeployedWishes, setHasDeployedWishes] = useState(false);
  const candleLit = true;
  const [cheerCount, setCheerCount] = useState(1);

  const handleDeployWishes = () => {
    setHasDeployedWishes(true);
    triggerGrandCelebration();
    triggerContinuousConfetti(3500);
  };

  const handleMoreConfetti = () => {
    setCheerCount((c) => c + 1);
    triggerGrandCelebration();
  };

  // Auto trigger first blast if entering this stage
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasDeployedWishes) {
        handleDeployWishes();
      }
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl text-center"
      >
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-zen-500/30 shadow-2xl space-y-8">
          {/* Top glowing ambient highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-zen-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Interactive Cake / Celebration Icon */}
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-3xl bg-gradient-to-br from-zen-500/30 via-amber-500/20 to-orange-500/30 border border-zen-500/40 flex flex-col items-center justify-center shadow-xl shadow-zen-500/20 text-zen-400 relative cursor-pointer"
              onClick={handleMoreConfetti}
              title="Click for extra confetti!"
            >
              {candleLit && (
                <motion.div
                  animate={{ y: [-2, 2, -2], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-amber-300"
                >
                  <Flame className="w-6 h-6 fill-amber-400 text-amber-500" />
                </motion.div>
              )}
              <Cake className="w-10 h-10 sm:w-12 sm:h-12 text-zen-300 mt-1" />
            </motion.div>
          </div>

          {/* Main Celebration Banner */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
            >
              {BIRTHDAY_CONFIG.celebration.heading}
            </motion.h1>

            <p className="text-emerald-400 font-mono text-sm sm:text-base flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{BIRTHDAY_CONFIG.celebration.deploymentStatusText}</span>
            </p>
          </div>

          {/* Status & Next Release Box */}
          <div className="bg-black/40 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4 font-mono text-left max-w-lg mx-auto">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Birthday Status</span>
                <span className="text-emerald-400 font-bold">100% COMPLETE</span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div className="w-full h-full bg-gradient-to-r from-zen-500 to-emerald-400 rounded-full" />
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">Next Planned Release:</span>
              <span className="text-zen-300 font-bold tracking-wider">
                {BIRTHDAY_CONFIG.celebration.nextReleaseText}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <button
              onClick={handleMoreConfetti}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-zen-500 to-orange-500 hover:from-zen-400 hover:to-orange-400 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center space-x-2 transition-all shadow-lg shadow-zen-500/20 active:scale-95"
            >
              <PartyPopper className="w-4 h-4" />
              <span>TRIGGER MORE CONFETTI ({cheerCount})</span>
            </button>

            <button
              onClick={onRestart}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 font-mono text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>REPLAY SURPRISE</span>
            </button>
          </div>

          {/* Signoff */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <ZenmonkLogo size="sm" showWordmark={true} />
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-zen-500 fill-current animate-pulse" />
              <span>by <strong className="text-white">{BIRTHDAY_CONFIG.teamName}</strong> for <strong className="text-zen-400">{BIRTHDAY_CONFIG.personName}</strong></span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
