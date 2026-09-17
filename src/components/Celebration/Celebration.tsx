import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import content from '../../content';
import {
  triggerNormal,
  triggerFancy,
  triggerFireworks,
  triggerParty,
} from '../../utils/celebrations';
import {
  CakeDoodle,
  SparkleDoodle,
  HeartDoodle,
  BalloonDoodle,
} from '../Doodles/DoodleIcons';
import { Sparkles, Star, Flame, Heart, Zap, RotateCcw } from 'lucide-react';

interface CelebrationProps {
  onRestart: () => void;
}

interface BalloonItem {
  id: number;
  x: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
}

const modeIcons: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-4 h-4" />,
  Star: <Star className="w-4 h-4" />,
  Flame: <Flame className="w-4 h-4" />,
  Heart: <Heart className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
};

const balloonColors = ['#F97316', '#FFD166', '#FB923C', '#F7A8B8', '#EA580C', '#38BDF8'];

export const Celebration: React.FC<CelebrationProps> = ({ onRestart }) => {
  const { celebration } = content;
  const [selectedMode, setSelectedMode] = useState<string>('normal');
  const [balloons, setBalloons] = useState<BalloonItem[]>([]);
  const [replayCount, setReplayCount] = useState<number>(1);

  // Trigger celebration mode
  const runMode = (modeId: string) => {
    setSelectedMode(modeId);
    setReplayCount((c) => c + 1);

    if (modeId === 'normal') {
      triggerNormal();
    } else if (modeId === 'fancy') {
      triggerFancy();
    } else if (modeId === 'fireworks') {
      triggerFireworks();
    } else if (modeId === 'balloons') {
      spawnBalloons();
    } else if (modeId === 'party') {
      triggerParty();
      spawnBalloons();
    }
  };

  const spawnBalloons = () => {
    const newBalloons: BalloonItem[] = Array.from({ length: 14 }).map((_, i) => ({
      id: Date.now() + i,
      x: 5 + Math.random() * 90,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      size: 32 + Math.random() * 28,
      duration: 6 + Math.random() * 4,
      delay: Math.random() * 1.5,
    }));

    setBalloons(newBalloons);
    setTimeout(() => {
      setBalloons([]);
    }, 11000);
  };

  // Initial trigger when celebration screen mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerFancy();
      spawnBalloons();
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto overflow-hidden">
      {/* Floating Animated Balloons for Balloon / Party mode */}
      <AnimatePresence>
        {balloons.map((b) => (
          <motion.div
            key={b.id}
            initial={{ y: '110vh', x: `${b.x}vw`, opacity: 0.95 }}
            animate={{
              y: '-20vh',
              x: `${b.x + (Math.sin(b.id) * 6)}vw`,
              opacity: 0.85,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              ease: 'easeInOut',
            }}
            className="fixed pointer-events-none z-50"
            style={{ width: b.size, height: b.size * 1.5 }}
          >
            <BalloonDoodle color={b.color} className="w-full h-full drop-shadow-md" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Celebration Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full bg-white/95 backdrop-blur-md border border-[#FED7AA]/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-[#F97316]/10 text-center"
      >
        {/* Animated Cake */}
        <motion.div
          animate={{ rotate: [-2, 2, -2], y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center mb-4"
        >
          <CakeDoodle className="w-20 h-20" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#1C1917] tracking-tight mb-3">
          <span className="bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FFD166] bg-clip-text text-transparent">
            {celebration.heading}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#57534E] max-w-lg mx-auto mb-8">
          {celebration.subheading}
        </p>

        {/* Main "Celebrate Again" Button */}
        <div className="mb-8">
          <button
            onClick={() => runMode(selectedMode)}
            className="px-10 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#F97316]/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center space-x-3"
          >
            <SparkleDoodle className="w-6 h-6" color="#FFFFFF" />
            <span>Celebrate Again 🎉</span>
            <SparkleDoodle className="w-6 h-6" color="#FFFFFF" />
          </button>
          <p className="text-xs text-[#78716C] mt-2 font-mono">
            {celebration.replayPrompt} (Trigger #{replayCount})
          </p>
        </div>

        {/* Mode Selector Buttons */}
        <div className="pt-6 border-t border-[#FED7AA]/60">
          <p className="text-xs font-mono uppercase text-[#A8A29E] tracking-wider mb-4">
            {celebration.modesLabel}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 max-w-2xl mx-auto mb-8">
            {celebration.modes.map((mode) => {
              const isActive = selectedMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => runMode(mode.id)}
                  className={`p-3 rounded-xl text-center transition-all duration-200 border flex flex-col items-center space-y-1.5 ${
                    isActive
                      ? 'bg-[#FFF4E8] border-[#F97316] text-[#EA580C] shadow-md font-semibold'
                      : 'bg-[#FFFDF9] border-[#FED7AA]/60 text-[#57534E] hover:border-[#FED7AA] hover:bg-[#FFF4E8]/50'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-[#F97316] text-white' : 'bg-[#FFF4E8] text-[#EA580C]'}`}>
                    {modeIcons[mode.iconName] || <Sparkles className="w-4 h-4" />}
                  </div>
                  <span className="text-xs">{mode.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Restart */}
        <div className="pt-4 border-t border-[#FED7AA]/40 flex items-center justify-between flex-wrap gap-4 text-xs text-[#78716C]">
          <div className="flex items-center space-x-2 font-handwriting text-xl text-[#EA580C]">
            <HeartDoodle className="w-5 h-5" />
            <span>From Team Zenmonk with ❤️</span>
          </div>

          <button
            onClick={onRestart}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#FFF4E8] hover:bg-[#FED7AA]/60 text-[#57534E] font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{celebration.restartButtonText}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Celebration;
