import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { ZenmonkLogo } from './ZenmonkLogo';
import content from '../content';

interface RealMessageProps {
  onNext: () => void;
}

export const RealMessage: React.FC<RealMessageProps> = ({ onNext }) => {
  const realMessage = content.finalMessage;

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
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
            <span>{realMessage.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F5F5F5] tracking-tight leading-snug">
            "{realMessage.heading}"
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#FFD166]">
            {realMessage.subheading}
          </p>
        </motion.div>

        {/* Narrative Box */}
        <motion.div
          variants={itemVariants}
          className="glass-panel-warm rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 text-left"
        >
          <div className="space-y-3 font-normal text-[#F5F5F5] text-sm sm:text-base">
            {realMessage.bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-[#00FF66]/20 text-[#00FF66] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span className="text-[#A0A0A0]">{point}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <blockquote className="text-base sm:text-lg font-semibold text-[#F5F5F5] italic text-center sm:text-left">
              "{realMessage.closingQuote}"
            </blockquote>
          </div>
        </motion.div>

        {/* Grand Birthday Greeting */}
        <motion.div variants={itemVariants} className="space-y-4 pt-2">
          <div className="text-lg font-medium text-[#A0A0A0] font-mono">
            {realMessage.gratitude}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F5] tracking-tight">
            {realMessage.greeting}
          </h1>
          <div className="flex flex-col items-center justify-center gap-2 pt-1">
            <ZenmonkLogo size="sm" showWordmark={true} />
            <p className="text-sm sm:text-base font-semibold text-[#00FF66]">
              {realMessage.subtext}
            </p>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div variants={itemVariants} className="pt-4 flex justify-center">
          <button
            onClick={onNext}
            className="px-8 py-4 rounded-2xl bg-[#00FF66] hover:bg-[#39FF88] text-[#050505] font-mono text-sm font-bold tracking-wider uppercase flex items-center space-x-2 transition-all shadow-xl shadow-[#00FF66]/25 active:scale-95"
          >
            <span>{realMessage.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
