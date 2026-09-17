import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import content from '../../content';
import {
  Layers,
  Compass,
  Boxes,
  Cpu,
  Shield,
  ArrowRight,
  Terminal,
  CheckCircle2,
  Code2,
  Heart
} from 'lucide-react';

interface EngineeringLegacyProps {
  onNext: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Boxes: <Boxes className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
};

export const EngineeringLegacy: React.FC<EngineeringLegacyProps> = ({ onNext }) => {
  const { legacy } = content;
  const { seriousMoment } = legacy;
  const [activeTab, setActiveTab] = useState<number>(0);
  const [showLegacyMoment, setShowLegacyMoment] = useState<boolean>(false);

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-5xl mx-auto">
      <AnimatePresence mode="wait">
        {!showLegacyMoment ? (
          <motion.div
            key="pillars-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#0D0D10] border border-[#27272A] rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl text-neutral-100 relative overflow-hidden"
          >
            {/* Subtle Neon Glow in dark space */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FF66]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header section */}
            <div className="relative z-10 mb-6 pb-6 border-b border-neutral-800">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-[#00FF66]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{legacy.badge}</span>
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  DEBATES://UNBIASED_ARCH
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight mb-2">
                {legacy.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#00FF66] font-mono">
                {legacy.subheading}
              </p>

              {/* Lead quote */}
              <div className="mt-4 p-3.5 rounded-xl bg-neutral-900/90 border-l-4 border-[#00FF66] text-neutral-300 font-sans text-xs sm:text-sm italic">
                {legacy.leadQuote}
              </div>
            </div>

            {/* Pillar Navigation Tabs */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
              {legacy.pillars.map((pillar, idx) => {
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(idx)}
                    className={`p-3 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#18181B] border-[#00FF66] text-white shadow-lg shadow-[#00FF66]/10'
                        : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                    }`}
                  >
                    <div className={`p-2 rounded-lg w-fit mb-2 ${isSelected ? 'bg-[#00FF66]/20 text-[#00FF66]' : 'bg-neutral-800 text-neutral-400'}`}>
                      {iconMap[pillar.iconName] || <Code2 className="w-4 h-4" />}
                    </div>
                    <span className="text-xs font-semibold tracking-tight line-clamp-1">
                      {pillar.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 p-6 sm:p-7 rounded-2xl bg-neutral-900 border border-neutral-800 mb-6"
            >
              <div className="flex items-center space-x-2.5 text-xs font-mono text-[#00FF66] mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{legacy.pillars[activeTab].tag}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {legacy.pillars[activeTab].title}
              </h3>

              <p className="text-sm sm:text-base font-serif italic text-amber-200/90 mb-2 bg-amber-500/10 p-3.5 rounded-xl border border-amber-500/20">
                {legacy.pillars[activeTab].quote}
              </p>

              {legacy.pillars[activeTab].caption && (
                <p className="text-xs font-mono text-neutral-400 mb-3 pl-1">
                  💡 {legacy.pillars[activeTab].caption}
                </p>
              )}

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {legacy.pillars[activeTab].description}
              </p>
            </motion.div>

            {/* Serious Moment Box */}
            <div className="relative z-10 p-5 rounded-2xl bg-[#141418] border border-neutral-800/80 mb-6 text-xs sm:text-sm text-neutral-300 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase font-mono">
                <Heart className="w-3.5 h-3.5 text-[#F97316]" />
                <span>{seriousMoment.heading}</span>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                {seriousMoment.text1} <span className="text-[#00FF66] font-semibold">{seriousMoment.punchline}</span>
              </p>
              <p className="text-neutral-400 leading-relaxed">
                {seriousMoment.text2}
              </p>
              <p className="text-xs font-mono text-amber-300/90 pt-1">
                — {seriousMoment.closing}
              </p>
            </div>

            {/* Navigation to The Legacy Moment */}
            <div className="relative z-10 flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-neutral-800">
              <span className="text-xs font-mono text-neutral-400">
                Card 0{activeTab + 1} / 05 Architectural Insights
              </span>

              <button
                onClick={() => setShowLegacyMoment(true)}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#00FF66] hover:bg-[#39FF88] text-neutral-950 font-semibold text-sm rounded-xl transition-all shadow-md shadow-[#00FF66]/20 group"
              >
                <span>The Legacy Moment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        ) : (
          /* THE LEGACY MOMENT */
          <motion.div
            key="legacy-moment"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#050505] border border-neutral-800 rounded-3xl p-8 sm:p-14 md:p-20 shadow-2xl text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh]"
          >
            <div className="max-w-2xl mx-auto space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg font-mono text-neutral-400 uppercase tracking-widest"
              >
                {legacy.transitionLead}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-lg sm:text-2xl font-normal text-neutral-300"
              >
                {legacy.transitionPause1}
              </motion.p>

              {/* The Punchline */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white leading-tight"
              >
                <span className="bg-gradient-to-r from-amber-200 via-orange-400 to-[#00FF66] bg-clip-text text-transparent">
                  {legacy.transitionPunchline}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                className="text-xs sm:text-sm font-mono text-neutral-400 max-w-md mx-auto"
              >
                {legacy.transitionNote}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.2 }}
                className="pt-6"
              >
                <button
                  onClick={onNext}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium text-base rounded-2xl shadow-lg shadow-[#F97316]/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <span>{legacy.buttonText}</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EngineeringLegacy;
