import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getAccessPassword } from '../../config/environment';

interface PasswordGateProps {
  onSuccess: () => void;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = getAccessPassword();

    if (password.trim() === correctPassword) {
      setHasError(false);
      onSuccess();
    } else {
      setHasError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F11] flex flex-col items-center justify-center p-4 selection:bg-neutral-700 selection:text-neutral-200">
      <motion.div
        animate={shake ? { x: [-6, 6, -4, 4, 0] } : {}}
        transition={{ duration: 0.3 }}
        className="w-full max-w-sm bg-[#18181B] border border-[#27272A] rounded-xl p-8 shadow-2xl shadow-black/60"
      >
        <div className="text-center mb-6">
          <h1 className="text-base font-medium text-neutral-300 tracking-tight">
            Enter password
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (hasError) setHasError(false);
              }}
              placeholder="••••••••••••"
              className="w-full px-4 py-2.5 bg-[#0F0F11] border border-[#27272A] rounded-lg text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors text-center tracking-widest font-mono"
            />
          </div>

          {hasError && (
            <p className="text-xs text-red-400 text-center font-normal pt-0.5">
              Incorrect password
            </p>
          )}

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-neutral-200 hover:bg-white text-neutral-900 rounded-lg text-sm font-medium transition-colors shadow-sm active:scale-[0.99]"
          >
            Enter
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default PasswordGate;

