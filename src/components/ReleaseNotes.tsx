import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, TrendingUp, AlertCircle, ArrowRight, Tag, CheckCircle2 } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../config/birthdayData';

interface ReleaseNotesProps {
  onNext: () => void;
}

export const ReleaseNotes: React.FC<ReleaseNotesProps> = ({ onNext }) => {
  const { releaseNotes } = BIRTHDAY_CONFIG;

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
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Header Title */}
        <motion.div variants={itemVariants} className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zen-500/10 border border-zen-500/30 text-zen-400 font-mono text-xs">
            <Tag className="w-3.5 h-3.5" />
            <span>CHANGELOG // LATEST DEPLOY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {releaseNotes.version}
          </h1>
          <p className="text-slate-400 font-mono text-sm sm:text-base">
            {releaseNotes.tagline}
          </p>
        </motion.div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Added Section */}
          <motion.div
            variants={itemVariants}
            className="glass-panel rounded-2xl p-6 border-t-4 border-t-emerald-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2 text-emerald-400 font-mono font-bold text-sm mb-4 uppercase">
                <PlusCircle className="w-4 h-4" />
                <span>Added</span>
              </div>
              <ul className="space-y-3">
                {releaseNotes.categories[0].items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="text-emerald-400 font-mono font-bold mt-0.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Improved Section */}
          <motion.div
            variants={itemVariants}
            className="glass-panel rounded-2xl p-6 border-t-4 border-t-zen-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2 text-zen-400 font-mono font-bold text-sm mb-4 uppercase">
                <TrendingUp className="w-4 h-4" />
                <span>Improved</span>
              </div>
              <ul className="space-y-3">
                {releaseNotes.categories[1].items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="text-zen-400 font-mono font-bold mt-0.5">↑</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Known Issues Section */}
          <motion.div
            variants={itemVariants}
            className="glass-panel rounded-2xl p-6 border-t-4 border-t-amber-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2 text-amber-400 font-mono font-bold text-sm mb-4 uppercase">
                <AlertCircle className="w-4 h-4" />
                <span>Known Issues</span>
              </div>
              <ul className="space-y-3">
                {releaseNotes.categories[2].items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="text-amber-400 font-mono font-bold mt-0.5">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Release Status & Next CTA */}
        <motion.div
          variants={itemVariants}
          className="glass-panel-glow rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-zen-500/20"
        >
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span className="font-semibold">Release status: {releaseNotes.status}</span>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Next milestone: <span className="text-white font-medium">{releaseNotes.nextMilestone}</span>
            </div>
          </div>

          <button
            onClick={onNext}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-zen-500 to-orange-500 hover:from-zen-400 hover:to-orange-400 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center space-x-2 transition-all shadow-lg shadow-zen-500/20 active:scale-95"
          >
            <span>MEET THE TEAM</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

