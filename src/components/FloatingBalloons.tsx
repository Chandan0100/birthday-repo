import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BalloonItem {
  id: string;
  leftPercent: number;
  size: number;
  color: string;
  duration: number;
  swayAmount: number;
  delay: number;
}

interface FloatingBalloonsProps {
  triggerKey: number;
  count?: number;
}

const BALLOON_COLORS = [
  '#f97316', // Zenmonk orange
  '#ff6b00', // Deep orange
  '#fbbf24', // Amber/gold
  '#ea580c', // Warm rust
  '#38bdf8', // Sky blue accent
  '#ef4444', // Warm crimson
  '#10b981', // Emerald
];

export const FloatingBalloons: React.FC<FloatingBalloonsProps> = ({ triggerKey, count = 14 }) => {
  const [balloons, setBalloons] = useState<BalloonItem[]>([]);

  useEffect(() => {
    if (triggerKey <= 0) return;

    const newBalloons: BalloonItem[] = Array.from({ length: count }).map((_, i) => ({
      id: `${triggerKey}-${i}-${Date.now()}`,
      leftPercent: 5 + Math.random() * 90,
      size: 40 + Math.random() * 26,
      color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
      duration: 4.5 + Math.random() * 2.5,
      swayAmount: 15 + Math.random() * 25,
      delay: Math.random() * 1.2,
    }));

    setBalloons((prev) => [...prev, ...newBalloons]);

    // Cleanup after balloons float off-screen
    const cleanupTimer = setTimeout(() => {
      setBalloons((prev) => prev.filter((b) => !b.id.startsWith(`${triggerKey}-`)));
    }, 8500);

    return () => clearTimeout(cleanupTimer);
  }, [triggerKey, count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {balloons.map((b) => (
          <motion.div
            key={b.id}
            initial={{ y: '110vh', x: 0, opacity: 0.95 }}
            animate={{
              y: '-20vh',
              x: [0, b.swayAmount, -b.swayAmount, 0],
              opacity: [0.95, 0.95, 0.8, 0],
            }}
            transition={{
              y: { duration: b.duration, ease: 'easeOut', delay: b.delay },
              x: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: b.duration, times: [0, 0.8, 0.95, 1], delay: b.delay },
            }}
            style={{
              position: 'absolute',
              left: `${b.leftPercent}%`,
              width: b.size,
              height: b.size * 1.25,
            }}
          >
            {/* SVG Balloon with subtle shine & string */}
            <svg
              viewBox="0 0 100 130"
              className="w-full h-full drop-shadow-md"
              style={{ filter: `drop-shadow(0 4px 10px ${b.color}40)` }}
            >
              <defs>
                <radialGradient id={`shine-${b.id}`} cx="35%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                  <stop offset="60%" stopColor={b.color} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={b.color} stopOpacity="1" />
                </radialGradient>
              </defs>
              {/* Balloon Body */}
              <ellipse cx="50" cy="50" rx="45" ry="50" fill={`url(#shine-${b.id})`} />
              {/* Knot */}
              <polygon points="45,98 55,98 50,104" fill={b.color} />
              {/* String */}
              <path
                d="M50,104 Q44,115 52,122 T48,130"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

