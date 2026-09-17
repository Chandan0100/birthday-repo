import React from 'react';
import { motion } from 'framer-motion';
import content from '../../content';
import { Activity, ArrowRight, CheckCircle2, Terminal, Zap, Shield, HelpCircle, Layers } from 'lucide-react';

interface CtoStatusProps {
  onNext: () => void;
}

const getBadgeStyle = (type?: string) => {
  switch (type) {
    case 'success':
      return 'bg-emerald-50 border-emerald-200 text-emerald-700 font-bold';
    case 'warning':
      return 'bg-amber-50 border-amber-200 text-amber-700 font-semibold';
    case 'info':
      return 'bg-orange-50 border-orange-200 text-[#EA580C] font-semibold';
    default:
      return 'bg-stone-50 border-stone-200 text-stone-700 font-medium';
  }
};

export const CtoStatus: React.FC<CtoStatusProps> = ({ onNext }) => {
  const { ctoStatus } = content;
  const { easterEgg, eventStorming, metrics, statusIndicators, systemQuotes } = ctoStatus;

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white/95 backdrop-blur-md border border-[#FED7AA]/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-[#F97316]/5 text-[#1C1917]"
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

        {/* Playful Metrics Telemetry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-[#FFF9F2] border border-[#FED7AA]/70 space-y-1.5 shadow-xs"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#44403C] font-medium flex items-center space-x-1.5">
                  {metric.label.includes('DDD') && <Layers className="w-3.5 h-3.5 text-[#EA580C]" />}
                  {metric.label.includes('Why') && <HelpCircle className="w-3.5 h-3.5 text-[#EA580C]" />}
                  {metric.label.includes('Trust') && <Shield className="w-3.5 h-3.5 text-[#EA580C]" />}
                  <span>{metric.label}</span>
                </span>
                <span className="font-bold text-[#EA580C] tracking-wide">
                  {metric.value}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-[#FED7AA]/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.percentage}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-[#FB923C] to-[#EA580C]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Smaller System-Status Panel */}
        <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#FED7AA] mb-6 font-mono text-xs shadow-xs">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#FED7AA]/60 text-[#78716C]">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider flex items-center space-x-1.5">
              <span>SYSTEM STATUS: ● HEALTHY</span>
            </span>
            <span className="text-[11px] text-[#A8A29E]">DIAGNOSTICS://ACTIVE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {statusIndicators.map((ind, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#FED7AA]/60 text-xs"
              >
                <span className="text-[#57534E] font-medium">{ind.label}:</span>
                <span className={`px-2 py-0.5 rounded-md border text-[11px] font-mono ${getBadgeStyle(ind.badgeType)}`}>
                  {ind.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Humorous Message Box */}
        <div className="p-4 rounded-2xl bg-[#FFF4E8] border border-[#FED7AA] mb-6 text-center space-y-1 shadow-xs font-serif">
          <p className="text-[#1C1917] text-sm sm:text-base font-medium italic">
            {systemQuotes.line1}
          </p>
          <p className="text-[#EA580C] text-sm sm:text-base font-semibold italic">
            {systemQuotes.line2}
          </p>
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
              <span>Event stream consistency:</span>
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
