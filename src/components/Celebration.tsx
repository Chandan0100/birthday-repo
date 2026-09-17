import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  RotateCcw,
  Heart,
  PartyPopper,
  Cake,
  Flame,
  Sparkles,
  FlameKindling,
  Disc,
} from 'lucide-react';
import { ZenmonkLogo } from './ZenmonkLogo';
import { FloatingBalloons } from './FloatingBalloons';
import content from '../content';
import {
  triggerNormal,
  triggerFancy,
  triggerFireworks,
  triggerStreamers,
} from '../utils/celebrations';

interface CelebrationProps {
  onRestart: () => void;
}

type CelebrationMode = 'normal' | 'fancy' | 'fireworks' | 'balloons' | 'party';

export const Celebration: React.FC<CelebrationProps> = ({ onRestart }) => {
  const [activeMode, setActiveMode] = useState<CelebrationMode>('normal');
  const [balloonTriggerKey, setBalloonTriggerKey] = useState<number>(0);
  const [celebrateCount, setCelebrateCount] = useState<number>(1);
  const candleLit = true;

  const runCelebrationMode = (mode: CelebrationMode) => {
    setActiveMode(mode);
    setCelebrateCount((c) => c + 1);

    switch (mode) {
      case 'normal':
        triggerNormal();
        break;
      case 'fancy':
        triggerFancy();
        break;
      case 'fireworks':
        triggerFireworks();
        break;
      case 'balloons':
        setBalloonTriggerKey((k) => k + 1);
        break;
      case 'party':
        triggerFancy();
        triggerFireworks();
        triggerStreamers(3000);
        setBalloonTriggerKey((k) => k + 1);
        break;
    }
  };

  const handleCelebrateAgain = () => {
    runCelebrationMode(activeMode);
  };

  // Trigger default "NORMAL" celebration on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerNormal();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const celebrationButtons: {
    id: CelebrationMode;
    label: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: 'normal',
      label: 'Normal',
      description: 'Classic confetti',
      icon: <Disc className="w-3.5 h-3.5" />,
    },
    {
      id: 'fancy',
      label: 'Fancy',
      description: 'Stars & sparkles',
      icon: <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />,
    },
    {
      id: 'fireworks',
      label: 'Fireworks',
      description: 'Radial night sky bursts',
      icon: <FlameKindling className="w-3.5 h-3.5 text-[#FFD166]" />,
    },
    {
      id: 'balloons',
      label: 'Balloons',
      description: 'Rising festive balloons',
      icon: <span className="text-xs">🎈</span>,
    },
    {
      id: 'party',
      label: 'Party',
      description: 'Maximum energy celebration',
      icon: <PartyPopper className="w-3.5 h-3.5 text-[#00FF66]" />,
    },
  ];

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-8 relative z-10">
      {/* Floating Balloons Layer */}
      <FloatingBalloons triggerKey={balloonTriggerKey} />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl text-center"
      >
        <div className="glass-panel-warm rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#FFD166]/30 shadow-2xl space-y-8">
          {/* Top glowing ambient highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#FFD166]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Interactive Cake / Celebration Icon */}
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-3xl bg-gradient-to-br from-[#00FF66]/20 via-[#FFD166]/20 to-[#39FF88]/20 border border-[#00FF66]/40 flex flex-col items-center justify-center shadow-xl shadow-[#00FF66]/20 text-[#00FF66] relative cursor-pointer active:scale-95 transition-transform"
              onClick={handleCelebrateAgain}
              title="Click to celebrate again!"
            >
              {candleLit && (
                <motion.div
                  animate={{ y: [-2, 2, -2], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-[#FFD166]"
                >
                  <Flame className="w-6 h-6 fill-[#FFD166] text-[#FFDC85]" />
                </motion.div>
              )}
              <Cake className="w-10 h-10 sm:w-12 sm:h-12 text-[#FFD166] mt-1" />
            </motion.div>
          </div>

          {/* Main Celebration Banner */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-tight"
            >
              {content.celebration.heading}
            </motion.h1>

            <p className="text-[#00FF66] font-mono text-sm sm:text-base flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{content.celebration.deploymentStatusText}</span>
            </p>
          </div>

          {/* Primary "Celebrate Again" Button */}
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCelebrateAgain}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#00FF66] hover:bg-[#39FF88] text-[#050505] font-mono text-sm sm:text-base font-bold tracking-wider uppercase shadow-xl shadow-[#00FF66]/30 flex items-center justify-center space-x-2.5 mx-auto transition-all"
            >
              <PartyPopper className="w-5 h-5 text-[#050505]" />
              <span>{content.celebration.buttonText}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/20 text-[#050505] font-mono">
                #{celebrateCount}
              </span>
            </motion.button>
          </div>

          {/* Celebration Style Selector */}
          <div className="space-y-3 pt-2">
            <div className="text-[11px] font-mono text-[#A0A0A0] uppercase tracking-widest text-center">
              {content.celebration.modesLabel}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-xl mx-auto">
              {celebrationButtons.map((btn) => {
                const isSelected = activeMode === btn.id;

                return (
                  <button
                    key={btn.id}
                    onClick={() => runCelebrationMode(btn.id)}
                    className={`py-2.5 px-3 rounded-xl font-mono text-xs font-semibold transition-all flex flex-col items-center justify-center space-y-1 border ${
                      isSelected
                        ? 'bg-[#00FF66]/20 text-[#00FF66] border-[#00FF66]/50 shadow-md shadow-[#00FF66]/10 scale-105'
                        : 'bg-black/40 hover:bg-white/5 text-[#A0A0A0] hover:text-[#F5F5F5] border-white/5'
                    }`}
                  >
                    <div className="flex items-center space-x-1">
                      {btn.icon}
                      <span>{btn.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Status & Next Release Box */}
          <div className="bg-[#050505]/80 border border-white/10 rounded-2xl p-5 font-mono text-left max-w-lg mx-auto space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs text-[#A0A0A0]">
                <span>{content.celebration.statusLabel}</span>
                <span className="text-[#00FF66] font-bold">{content.celebration.statusValue}</span>
              </div>
              <div className="w-full h-2 bg-[#181c1b] rounded-full overflow-hidden p-0.5">
                <div className="w-full h-full bg-gradient-to-r from-[#00D957] to-[#00FF66] rounded-full" />
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-[#A0A0A0]">{content.celebration.nextReleaseLabel}</span>
              <span className="text-[#FFD166] font-bold tracking-wider">
                {content.celebration.nextReleaseText}
              </span>
            </div>

            {/* Domain Event Telemetry */}
            <div className="pt-2.5 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px] text-[#A0A0A0] font-mono">
              <div>
                <span className="text-[#666666]">EVENT: </span>
                <span className="text-[#00FF66] font-semibold">{content.celebration.domainEvent.event}</span>
              </div>
              <div>
                <span className="text-[#666666]">AGGREGATE: </span>
                <span className="text-[#FFD166] font-semibold">{content.celebration.domainEvent.aggregate}</span>
              </div>
              <div>
                <span className="text-[#666666]">COMMAND: </span>
                <span className="text-[#39FF88] font-semibold">{content.celebration.domainEvent.command}</span>
              </div>
              <div>
                <span className="text-[#666666]">STATUS: </span>
                <span className="text-[#00FF66] font-semibold">{content.celebration.domainEvent.status}</span>
              </div>
            </div>
          </div>

          {/* Bottom Controls: Replay entire journey */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={onRestart}
              className="px-5 py-2.5 rounded-xl bg-[#080808] hover:bg-[#101312] border border-white/10 text-[#A0A0A0] hover:text-[#F5F5F5] font-mono text-xs font-semibold flex items-center space-x-2 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{content.celebration.replaySurpriseText}</span>
            </button>
          </div>

          {/* Signoff */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#A0A0A0]">
            <ZenmonkLogo size="sm" showWordmark={true} />
            <div className="flex items-center gap-1.5">
              <span>{content.brand.madeWith}</span>
              <Heart className="w-3.5 h-3.5 text-[#00FF66] fill-current animate-pulse" />
              <span>
                by <strong className="text-[#F5F5F5]">{content.brand.subtext}</strong> for{' '}
                <strong className="text-[#00FF66]">{content.person.name}</strong>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
