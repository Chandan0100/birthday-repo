import React from 'react';
import { motion } from 'framer-motion';
import content from '../../content';
import { Activity, ArrowRight, CheckCircle2, Coffee, Terminal, Zap } from 'lucide-react';

interface CtoStatusProps {
  onNext: () => void;
}

export const CtoStatus: React.FC<CtoStatusProps> = ({ onNext }) => {
  const { ctoStatus } = content;
  const { easterEgg, eventStorming, metrics, statBadges } = ctoStatus;

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white/90 backdrop-blur-md border border-[#FED7AA]/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-[#F97316]/5 text-[#1C1917]"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6 pb-6 border-b border-[#FED7AA]/60">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#EA580C] mb-2 font-semibold">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>{ctoStatus.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-[#1C1917]">
              {ctoStatus.heading}
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] font-mono mt-1">
              {ctoStatus.subheading}
            </p>
          </div>

          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFF4E8] border border-[#FED7AA] text-[#EA580C] font-mono text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-ping" />
            <span>● {ctoStatus.healthStatus}</span>
          </div>
        </div>

        {/* 3 Quick Stat Badges */}
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          {statBadges.map((stat, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[#FFF9F2] border border-[#FED7AA] text-center font-mono shadow-xs">
              <span className="text-[10px] text-[#78716C] block truncate font-semibold uppercase">{stat.label}</span>
              <span className="text-base sm:text-lg font-bold text-[#EA580C]">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Telemetry Progress Bars Grid (Warm Orange) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#FED7AA]/70 space-y-1.5 shadow-xs"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#44403C] font-medium flex items-center space-x-1.5">
                  {metric.label === 'COFFEE' && <Coffee className="w-3.5 h-3.5 text-[#EA580C]" />}
                  <span>{metric.label}</span>
                </span>
                <span className="font-bold text-[#EA580C]">
                  {metric.value}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-[#FED7AA]/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-[#FB923C] to-[#EA580C]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Event Storming Diagram + DDD Easter Egg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* Event Storming Diagram Joke (Warm) */}
          <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#FED7AA] font-mono text-xs shadow-xs">
            <div className="flex items-center justify-between text-[#EA580C] border-b border-[#FED7AA]/60 pb-2 mb-3">
              <span className="flex items-center space-x-1.5 font-bold">
                <Zap className="w-3.5 h-3.5" />
                <span>{eventStorming.title}</span>
              </span>
              <span className="text-[#78716C] text-[10px]">DDD_STORM</span>
            </div>

            <div className="flex items-center justify-between gap-1 overflow-x-auto py-2">
              {eventStorming.steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-2 py-1.5 rounded bg-white border border-[#FED7AA] text-[#EA580C] text-[10px] text-center font-semibold whitespace-nowrap shadow-xs">
                    {step}
                  </div>
                  {idx < eventStorming.steps.length - 1 && (
                    <span className="text-[#FB923C] text-xs font-bold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-3 pt-2 border-t border-[#FED7AA]/60 flex items-center justify-between text-[11px] text-[#57534E]">
              <span>{ctoStatus.systemStatusNote}</span>
              <span className="text-[#00D957] font-semibold">{eventStorming.consistency}</span>
            </div>
          </div>

          {/* DDD Domain Event Easter Egg (Warm) */}
          <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#FED7AA] font-mono text-xs text-[#44403C] space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between text-[#78716C] border-b border-[#FED7AA]/60 pb-1 mb-2">
              <span className="flex items-center space-x-1 text-[#EA580C] font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>EVENT://{easterEgg.event}</span>
              </span>
              <span className="text-[#00D957] font-semibold">{easterEgg.status}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div><span className="text-[#78716C]">Aggregate:</span> {easterEgg.aggregate}</div>
              <div><span className="text-[#78716C]">Command:</span> {easterEgg.command}</div>
            </div>

            <div className="pt-2 space-y-1">
              {easterEgg.checks.map((check, idx) => (
                <div key={idx} className="flex items-center space-x-1.5 text-[11px] text-[#57534E]">
                  <CheckCircle2 className="w-3 h-3 text-[#00D957]" />
                  <span>{check}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[#FED7AA]/60">
          <span className="text-xs font-mono text-[#78716C]">
            System status: 100% nominal & ready for final birthday note
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
