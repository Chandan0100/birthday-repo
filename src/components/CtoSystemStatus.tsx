import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Cpu, ArrowRight, AlertCircle } from 'lucide-react';
import content from '../content';

interface CtoSystemStatusProps {
  onNext: () => void;
}

export const CtoSystemStatus: React.FC<CtoSystemStatusProps> = ({ onNext }) => {
  const ctoStatus = content.ctoStatus;
  const systemMetrics = ctoStatus.metrics;
  const systemStatusNote = ctoStatus.systemStatusNote;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zen-500/10 border border-zen-500/30 text-zen-400 font-mono text-xs">
            <Activity className="w-3.5 h-3.5" />
            <span>{ctoStatus.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {ctoStatus.heading}
          </h1>
          <p className="text-slate-400 font-mono text-xs sm:text-sm">
            {ctoStatus.subheading}
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Telemetry Bars (2 columns on md) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border border-white/5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/5 font-mono text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-zen-400" />
                <span>{ctoStatus.panelTitle}</span>
              </div>
              <span className="text-emerald-400 font-semibold">{ctoStatus.panelStatus}</span>
            </div>

            <div className="space-y-4">
              {systemMetrics.map((metric, idx) => (
                <div key={metric.label} className="space-y-1.5 font-mono">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium tracking-wider">
                      {metric.label}
                    </span>
                    <span className={`font-bold ${metric.highlight ? 'text-zen-400' : 'text-emerald-400'}`}>
                      {metric.value}%
                    </span>
                  </div>

                  <div className="h-3 bg-black/50 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        metric.highlight
                          ? 'bg-gradient-to-r from-zen-500 to-amber-400'
                          : 'bg-gradient-to-r from-emerald-500 to-teal-400'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Health & Diagnostic Panel (1 column on md) */}
          <motion.div
            variants={itemVariants}
            className="glass-panel-glow rounded-2xl p-6 flex flex-col justify-between border border-zen-500/20"
          >
            <div className="space-y-6 text-center">
              <div className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                SYSTEM STATUS
              </div>

              {/* Pulsing Radar Node */}
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping" />
                <div className="absolute inset-2 rounded-full bg-emerald-500/20 animate-pulse" />
                <div className="w-16 h-16 rounded-full bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shadow-xl shadow-emerald-500/20">
                  <ShieldCheck className="w-8 h-8" />
                </div>
              </div>

              <div>
                <div className="font-mono text-xl font-bold text-emerald-400 tracking-wider flex items-center justify-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  {ctoStatus.healthStatus}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  {ctoStatus.uptime}
                </div>
              </div>
            </div>

            {/* Sub-note */}
            <div className="pt-4 mt-6 border-t border-white/10 text-center">
              <div className="text-xs text-slate-400 font-mono flex items-center justify-center gap-1.5 text-left">
                <AlertCircle className="w-3.5 h-3.5 text-zen-400 flex-shrink-0" />
                <span className="text-[11px]">{systemStatusNote}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Next Step Action */}
        <motion.div variants={itemVariants} className="pt-2 flex justify-center">
          <button
            onClick={onNext}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-zen-500 to-orange-500 hover:from-zen-400 hover:to-orange-400 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center space-x-2 transition-all shadow-lg shadow-zen-500/20 active:scale-95"
          >
            <span>CONTINUE →</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
