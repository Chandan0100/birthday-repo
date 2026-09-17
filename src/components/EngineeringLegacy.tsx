import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Boxes,
  Network,
  HelpCircle,
  Layers,
  ArrowRight,
  BookOpen,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
import content from '../content';

interface EngineeringLegacyProps {
  onNext: () => void;
}

export const EngineeringLegacy: React.FC<EngineeringLegacyProps> = ({ onNext }) => {
  const whatYouTaughtUs = content.legacy;

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5 text-zen-400" />,
    Boxes: <Boxes className="w-5 h-5 text-zen-400" />,
    Network: <Network className="w-5 h-5 text-zen-400" />,
    HelpCircle: <HelpCircle className="w-5 h-5 text-zen-400" />,
    Layers: <Layers className="w-5 h-5 text-zen-400" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zen-500/10 border border-zen-500/30 text-zen-400 font-mono text-xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL LEGACY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {whatYouTaughtUs.heading}
          </h1>
          <p className="text-slate-400 font-mono text-sm sm:text-base">
            {whatYouTaughtUs.subheading}
          </p>
        </motion.div>

        {/* Central Core Statement Banner */}
        <motion.div
          variants={itemVariants}
          className="glass-panel-glow rounded-2xl p-6 sm:p-8 text-center border border-zen-500/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-zen-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-center gap-1.5 text-zen-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE CORE LESSON</span>
          </div>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
            "{whatYouTaughtUs.centralTheme}"
          </blockquote>
        </motion.div>

        {/* The 5 Architecture & Thinking Cards */}
        <div className="space-y-4">
          {whatYouTaughtUs.concepts.map((concept, index) => (
            <motion.div
              key={concept.id}
              variants={itemVariants}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="glass-panel rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-zen-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg"
            >
              <div className="flex items-start sm:items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-zen-500/10 border border-zen-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0 shadow-sm shadow-zen-500/10">
                  {iconMap[concept.iconName] || <Layers className="w-5 h-5 text-zen-400" />}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs text-zen-400 font-semibold uppercase tracking-wider">
                      {concept.tag}
                    </span>
                    <span className="text-slate-600">/</span>
                    <span className="text-white font-bold text-sm sm:text-base">
                      {concept.title}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {concept.quote}
                  </p>
                </div>
              </div>

              <div className="hidden md:flex items-center text-slate-600 font-mono text-xs">
                <span>0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition Bridge to Culture */}
        <motion.div
          variants={itemVariants}
          className="rounded-2xl bg-gradient-to-b from-[#131824]/90 to-[#0c0f16]/90 border border-white/10 p-6 sm:p-8 text-center space-y-4 shadow-xl"
        >
          <div className="w-8 h-8 rounded-full bg-zen-500/15 border border-zen-500/30 flex items-center justify-center mx-auto text-zen-400">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {whatYouTaughtUs.transitionHeader}
            </div>
            <p className="text-sm sm:text-base text-slate-300">
              {whatYouTaughtUs.transitionText}
            </p>
            <p className="text-xl sm:text-2xl font-extrabold text-zen-300 tracking-tight">
              {whatYouTaughtUs.transitionPunchline}
            </p>
          </div>

          <p className="text-xs sm:text-sm font-mono text-slate-400 pt-2 border-t border-white/5 max-w-lg mx-auto">
            {whatYouTaughtUs.transitionLegacy}
          </p>
        </motion.div>

        {/* Next Step Action */}
        <motion.div variants={itemVariants} className="pt-2 flex justify-center">
          <button
            onClick={onNext}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-zen-500 to-orange-500 hover:from-zen-400 hover:to-orange-400 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center space-x-2 transition-all shadow-lg shadow-zen-500/20 active:scale-95"
          >
            <span>READ TEAM MESSAGES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

