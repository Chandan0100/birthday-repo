import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-3xl text-center space-y-10"
      >
        {/* Soft Heading */}
        <motion.div variants={itemVariants} className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zen-500/10 text-zen-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-zen-400" />
            <span>A NOTE FROM THE HEART</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-slate-300 italic">
            "{realMessage.heading}"
          </h2>
        </motion.div>

        {/* Narrative Box */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl bg-gradient-to-b from-[#11151f]/80 to-[#0a0d14]/90 border border-white/10 p-8 sm:p-12 shadow-2xl space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed font-normal"
        >
          {realMessage.paragraphs.map((para, idx) => (
            <p key={idx} className="text-slate-300 font-light">
              {para}
            </p>
          ))}
        </motion.div>

        {/* Grand Birthday Greeting */}
        <motion.div variants={itemVariants} className="space-y-3 pt-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            {realMessage.greeting}
          </h1>
          <p className="text-base sm:text-lg font-medium text-zen-400 flex items-center justify-center gap-2">
            <span>{realMessage.subtext}</span>
          </p>
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
