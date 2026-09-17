import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import content from '../../content';
import {
  SparkleDoodle,
  StarDoodle,
  HeartDoodle,
  CakeDoodle,
  BalloonDoodle
} from '../Doodles/DoodleIcons';
import { ArrowRight } from 'lucide-react';

interface BirthdayHeroProps {
  onNext: () => void;
}

export const BirthdayHero: React.FC<BirthdayHeroProps> = ({ onNext }) => {
  const { hero } = content;

  // Gentle celebratory confetti puff on initial reveal
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#F97316', '#FFD166', '#FFB86C', '#F7A8B8', '#FFF4E8'],
        disableForReducedMotion: true,
      });
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-12 text-center overflow-hidden">
      {/* Decorative floating balloons in background */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: [0, -12, 0], opacity: 0.9 }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1 }
        }}
        className="absolute top-12 left-6 md:left-24 pointer-events-none"
      >
        <BalloonDoodle color="#F97316" stringColor="#EA580C" className="w-12 h-20 md:w-16 md:h-28" />
      </motion.div>

      <motion.div
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: [0, -16, 0], opacity: 0.9 }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          opacity: { duration: 1.2, delay: 0.2 }
        }}
        className="absolute top-16 right-6 md:right-28 pointer-events-none"
      >
        <BalloonDoodle color="#FFD166" stringColor="#D97706" className="w-10 h-16 md:w-14 md:h-24" />
      </motion.div>

      {/* Floating stars and sparkles */}
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: [0, 15, -15, 0] }}
        transition={{
          scale: { duration: 0.6, delay: 0.3 },
          rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-28 left-1/4 hidden md:block pointer-events-none"
      >
        <StarDoodle className="w-6 h-6" color="#FFD166" />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-28 right-1/4 hidden md:block pointer-events-none"
      >
        <SparkleDoodle className="w-7 h-7" color="#F97316" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-32 left-1/5 hidden lg:block pointer-events-none"
      >
        <HeartDoodle className="w-6 h-6" color="#F7A8B8" />
      </motion.div>

      {/* Main Birthday Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-md border border-[#FED7AA]/70 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl shadow-[#F97316]/5"
      >
        {/* Top Badge & Sparkle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFF4E8] border border-[#FED7AA] text-xs font-medium text-[#EA580C] mb-6"
        >
          <SparkleDoodle className="w-3.5 h-3.5" color="#EA580C" />
          <span>{hero.badge}</span>
        </motion.div>

        {/* Small Hand-Drawn Cake */}
        <motion.div
          initial={{ scale: 0, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
          className="flex justify-center mb-4"
        >
          <CakeDoodle className="w-14 h-14 md:w-16 md:h-16" />
        </motion.div>

        {/* Greeting Prefix */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#A8A29E] uppercase mb-2"
        >
          {hero.greetingPrefix}
        </motion.p>

        {/* Focal Headline (Name) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-serif font-black tracking-tight text-[#1C1917] mb-6 drop-shadow-sm"
        >
          <span className="bg-gradient-to-r from-[#1C1917] via-[#EA580C] to-[#1C1917] bg-clip-text text-transparent">
            {hero.name}
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-lg sm:text-xl text-[#57534E] font-normal max-w-md mx-auto mb-8 leading-relaxed"
        >
          {hero.subtext}
        </motion.p>

        {/* Handwritten Annotation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mb-8"
        >
          <span className="font-handwriting text-2xl md:text-3xl text-[#EA580C] tracking-wide inline-block -rotate-2">
            ✦ {hero.cardNote} ✦
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center"
        >
          <button
            onClick={onNext}
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium text-base rounded-2xl shadow-lg shadow-[#F97316]/25 hover:shadow-xl hover:shadow-[#F97316]/35 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{hero.buttonText}</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BirthdayHero;

