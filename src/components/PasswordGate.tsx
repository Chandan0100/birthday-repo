import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ACCESS_PASSWORD } from '../config/environment';

interface PasswordGateProps {
  onSuccess: () => void;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    if (password.trim().toLowerCase() === ACCESS_PASSWORD.toLowerCase()) {
      setHasError(false);
      onSuccess();
    } else {
      setHasError(true);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0d1117] text-slate-200">
      <div className="w-full max-w-sm">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center pb-1">
              <h1 className="text-base font-medium text-slate-200">
                Enter password
              </h1>
            </div>

            <div className="space-y-1.5">
              <motion.div
                animate={hasError ? { x: [-6, 6, -4, 4, 0] } : {}}
                transition={{ duration: 0.25 }}
              >
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (hasError) setHasError(false);
                  }}
                  placeholder="Enter password"
                  autoFocus
                  className={`w-full bg-[#0d1117] border ${
                    hasError ? 'border-red-500/80 focus:border-red-500' : 'border-[#30363d] focus:border-blue-500'
                  } rounded-md px-3.5 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 ${
                    hasError ? 'focus:ring-red-500/50' : 'focus:ring-blue-500/50'
                  } transition-colors`}
                />
              </motion.div>

              {hasError && (
                <p className="text-xs text-red-400 pl-0.5 pt-0.5">
                  Incorrect password
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!password.trim()}
              className="w-full py-2 px-4 rounded-md bg-[#21262d] hover:bg-[#30363d] active:bg-[#282e38] border border-[#30363d] text-slate-200 text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
