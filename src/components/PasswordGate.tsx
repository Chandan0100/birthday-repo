import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, ShieldAlert, CheckCircle2, KeyRound, Terminal } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../config/birthdayData';

interface PasswordGateProps {
  onSuccess: () => void;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    if (password.trim().toLowerCase() === BIRTHDAY_CONFIG.secretPassword.toLowerCase()) {
      setErrorStatus(null);
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 1400);
    } else {
      setAttempts((prev) => prev + 1);
      setErrorStatus('ACCESS DENIED: Invalid authorization code. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        {/* Main Terminal Card */}
        <div className="relative rounded-2xl bg-[#0e121a]/95 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
          {/* Top Decorative Console Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/5 font-mono text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-500 pl-2">SYS_AUTH_DAEMON</span>
            </div>
            <div className="flex items-center space-x-1 text-[11px] text-slate-500">
              <Terminal className="w-3.5 h-3.5 text-zen-400" />
              <span>PORT: 8080</span>
            </div>
          </div>

          <div className="p-8">
            {/* Header / Security Badge */}
            <div className="text-center space-y-3 mb-8">
              <motion.div
                animate={{
                  scale: isSuccess ? [1, 1.15, 1] : 1,
                  rotate: isSuccess ? [0, 5, -5, 0] : 0,
                }}
                className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border transition-colors duration-500 ${
                  isSuccess
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 shadow-lg shadow-emerald-500/20'
                    : errorStatus
                    ? 'bg-red-500/20 border-red-500/40 text-red-400 shadow-lg shadow-red-500/10'
                    : 'bg-zen-500/10 border-zen-500/30 text-zen-400 shadow-lg shadow-zen-500/10'
                }`}
              >
                {isSuccess ? (
                  <Unlock className="w-8 h-8 animate-bounce" />
                ) : (
                  <Lock className="w-8 h-8" />
                )}
              </motion.div>

              <div>
                <div className="font-mono text-xs tracking-widest uppercase font-semibold text-zen-400">
                  RESTRICTED ACCESS
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-white mt-1">
                  {BIRTHDAY_CONFIG.personName.toUpperCase()} SYSTEM
                </h1>
                <p className="font-mono text-xs text-slate-400 mt-0.5 tracking-wide">
                  CLASSIFIED PRODUCTION DEPLOYMENT
                </p>
              </div>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-zen-500/50 to-transparent mx-auto pt-1" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                  Authorization Required
                </label>

                <motion.div
                  animate={errorStatus ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-zen-400 transition-colors">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errorStatus) setErrorStatus(null);
                    }}
                    placeholder="Enter access code..."
                    disabled={isSuccess}
                    autoFocus
                    className="w-full bg-[#141923] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-zen-500 focus:ring-2 focus:ring-zen-500/20 transition-all disabled:opacity-50"
                  />
                </motion.div>
              </div>

              {/* Status alerts */}
              <AnimatePresence mode="wait">
                {errorStatus && !isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -6, height: 0 }}
                    className="p-3 rounded-lg bg-red-950/40 border border-red-800/50 text-red-300 text-xs font-mono flex items-start space-x-2.5"
                  >
                    <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-red-200 uppercase">ACCESS DENIED</div>
                      <div className="text-[11px] text-red-400/90 mt-0.5">
                        Invalid authorization code (Attempt #{attempts}). Try again.
                      </div>
                    </div>
                  </motion.div>
                )}

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs font-mono flex items-start space-x-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 animate-spin" />
                    <div>
                      <div className="font-semibold text-emerald-200 uppercase">ACCESS GRANTED</div>
                      <div className="text-[11px] text-emerald-400/90 mt-0.5">
                        Authorization successful. Preparing deployment...
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSuccess || !password.trim()}
                className={`w-full py-3.5 px-4 rounded-xl font-mono text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSuccess
                    ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25 cursor-default'
                    : 'bg-gradient-to-r from-zen-500 to-orange-500 hover:from-zen-400 hover:to-orange-400 text-black shadow-lg shadow-zen-500/20 active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed'
                }`}
              >
                {isSuccess ? (
                  <>
                    <span>INITIALIZING...</span>
                  </>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>UNLOCK</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer Metadata */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>CLEARANCE: LEVEL 5</span>
              <span>HOST: PROD-US-EAST</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
