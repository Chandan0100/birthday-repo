import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { ZenmonkLogo } from './ZenmonkLogo';
import { BIRTHDAY_CONFIG } from '../config/birthdayData';

interface RealMessageProps {
  onNext: () => void;
}

export const RealMessage: React.FC<RealMessageProps> = ({ onNext }) => {
  const { realMessage } = BIRTHDAY_CONFIG;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-8 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-3xl text-center space-y-8"
      >
        {/* Soft Heading */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zen-500/10 text-zen-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-zen-400" />
            <span>A NOTE FROM THE TEAM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-200 tracking-tight leading-snug">
            "{realMessage.heading}"
          </h2>
          <p className="text-base sm:text-lg font-medium text-zen-300">
            {realMessage.subheading}
          </p>
        </motion.div>

        {/* Narrative Box */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl bg-gradient-to-b from-[#121622]/90 to-[#0a0d14]/95 border border-white/10 p-6 sm:p-10 shadow-2xl space-y-6 text-left"
        >
          <div className="space-y-3 font-normal text-slate-200 text-sm sm:text-base">
            {realMessage.bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-zen-500/20 text-zen-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span className="text-slate-300">{point}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <blockquote className="text-base sm:text-lg font-semibold text-white italic text-center sm:text-left">
              "{realMessage.closingQuote}"
            </blockquote>
          </div>
        </motion.div>

        {/* Grand Birthday Greeting */}
        <motion.div variants={itemVariants} className="space-y-4 pt-2">
          <div className="text-lg font-medium text-slate-300 font-mono">
            {realMessage.gratitude}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            {realMessage.greeting}
          </h1>
          <div className="flex flex-col items-center justify-center gap-2 pt-1">
            <ZenmonkLogo size="sm" showWordmark={true} />
            <p className="text-sm sm:text-base font-semibold text-zen-400">
              {realMessage.subtext}
            </p>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div variants={itemVariants} className="pt-4 flex justify-center">
          <button
            onClick={onNext}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-zen-500 via-orange-500 to-amber-500 hover:from-zen-400 hover:to-orange-400 text-slate-950 font-mono text-sm font-bold tracking-wider uppercase flex items-center space-x-2 transition-all shadow-xl shadow-zen-500/25 active:scale-95"
          >
            <span>PROCEED TO CELEBRATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
