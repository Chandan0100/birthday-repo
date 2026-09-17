import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Check, Loader2, ArrowRight } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../config/birthdayData';

interface DeploymentTerminalProps {
  onComplete: () => void;
}

export const DeploymentTerminal: React.FC<DeploymentTerminalProps> = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const steps = BIRTHDAY_CONFIG.deploymentSteps;
  const progress = Math.min(100, Math.round(((completedSteps.length) / steps.length) * 100));

  useEffect(() => {
    if (currentStepIndex < steps.length) {
      const timer = setTimeout(() => {
        setCompletedSteps((prev) => [...prev, currentStepIndex]);
        setCurrentStepIndex((prev) => prev + 1);
      }, steps[currentStepIndex].duration);

      return () => clearTimeout(timer);
    } else {
      setIsFinished(true);
      const autoProceedTimer = setTimeout(() => {
        onComplete();
      }, 1600);
      return () => clearTimeout(autoProceedTimer);
    }
  }, [currentStepIndex, steps, onComplete]);

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <div className="rounded-2xl bg-[#0b0e14] border border-white/10 shadow-2xl overflow-hidden font-mono">
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111622] border-b border-white/5">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-400 text-xs pl-2 font-medium">bash - deployment-agent v2.4</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-zen-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>CI/CD RUNNING</span>
            </div>
          </div>

          {/* Terminal Console Logs */}
          <div className="p-6 md:p-8 space-y-3.5 min-h-[340px] text-xs sm:text-sm">
            <div className="text-slate-500 pb-2 border-b border-white/5">
              $ zenmonk-deploy --target=kevin --version={BIRTHDAY_CONFIG.releaseVersion} --priority=MAX
            </div>

            {steps.map((step, idx) => {
              const isDone = completedSteps.includes(idx);
              const isCurrent = currentStepIndex === idx;

              if (idx > currentStepIndex) return null;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {isDone ? (
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    ) : isCurrent ? (
                      <span className="w-4 h-4 rounded-full bg-zen-500/20 text-zen-400 flex items-center justify-center">
                        <Loader2 className="w-3 h-3 animate-spin" />
                      </span>
                    ) : null}
                  </div>

                  <span
                    className={`${
                      isDone
                        ? idx === steps.length - 1
                          ? 'text-emerald-300 font-bold'
                          : 'text-slate-300'
                        : 'text-zen-400 font-medium'
                    }`}
                  >
                    {step.text}
                    {isCurrent && <span className="terminal-cursor" />}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar Footer */}
          <div className="p-4 bg-[#0d121c] border-t border-white/5 space-y-3">
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>DEPLOYMENT PIPELINE</span>
              <span className="font-semibold text-zen-400">{progress}%</span>
            </div>
            
            <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-zen-500 via-amber-400 to-emerald-400 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {isFinished && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-2 flex justify-end"
              >
                <button
                  onClick={onComplete}
                  className="px-4 py-2 rounded-xl bg-zen-500/20 hover:bg-zen-500/30 border border-zen-500/40 text-zen-300 text-xs font-semibold flex items-center space-x-2 transition-all"
                >
                  <span>CONTINUE TO RELEASE NOTES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
