import React from 'react';
import { motion } from 'framer-motion';
import content from '../../content';
import { Activity, ArrowRight, CheckCircle2, Coffee, ShieldCheck, Terminal } from 'lucide-react';

interface CtoStatusProps {
  onNext: () => void;
}

export const CtoStatus: React.FC<CtoStatusProps> = ({ onNext }) => {
  const { ctoStatus } = content;
  const { easterEgg, metrics } = ctoStatus;

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#0D0D10] border border-[#27272A] rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl text-neutral-100"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#00FF66] mb-2">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>{ctoStatus.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-white">
              {ctoStatus.heading}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-1">
              {ctoStatus.subheading}
            </p>
          </div>

          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[#00FF66] font-mono text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
            <span>● {ctoStatus.healthStatus}</span>
          </div>
        </div>

        {/* Telemetry Progress Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-300 font-medium flex items-center space-x-1.5">
                  {metric.label === 'COFFEE' && <Coffee className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{metric.label}</span>
                </span>
                <span className={`font-bold ${metric.highlight ? 'text-[#00FF66]' : 'text-amber-400'}`}>
                  {metric.value}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                  className={`h-full rounded-full ${
                    metric.highlight
                      ? 'bg-gradient-to-r from-emerald-500 to-[#00FF66]'
                      : 'bg-gradient-to-r from-amber-500 to-orange-400'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* System Note & DDD Easter Egg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Status Note */}
          <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#00FF66] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono uppercase text-neutral-400">Diagnostic Summary</h4>
              <p className="text-sm text-neutral-200 mt-1">
                {ctoStatus.systemStatusNote}
              </p>
            </div>
          </div>

          {/* DDD Domain Event Easter Egg */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-neutral-300 space-y-1.5">
            <div className="flex items-center justify-between text-neutral-400 border-b border-neutral-800 pb-1 mb-2">
              <span className="flex items-center space-x-1 text-[#00FF66]">
                <Terminal className="w-3.5 h-3.5" />
                <span>EVENT://{easterEgg.event}</span>
              </span>
              <span className="text-emerald-400">{easterEgg.status}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><span className="text-neutral-500">Aggregate:</span> {easterEgg.aggregate}</div>
              <div><span className="text-neutral-500">Command:</span> {easterEgg.command}</div>
            </div>

            <div className="pt-2 space-y-1">
              {easterEgg.checks.map((check, idx) => (
                <div key={idx} className="flex items-center space-x-1.5 text-[11px] text-neutral-400">
                  <CheckCircle2 className="w-3 h-3 text-[#00FF66]" />
                  <span>{check}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-neutral-800">
          <span className="text-xs font-mono text-neutral-400">
            System status: Optimal & ready for celebration
          </span>

          <button
            onClick={onNext}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-[#F97316]/25 group"
          >
            <span>{ctoStatus.buttonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CtoStatus;

