import React from 'react';
import { motion } from 'framer-motion';
import { Users, Quote, ArrowRight, Heart } from 'lucide-react';
import content from '../content';

interface TeamMessagesProps {
  onNext: () => void;
}

export const TeamMessages: React.FC<TeamMessagesProps> = ({ onNext }) => {
  const teamSection = content.teamMessages;
  const teamMessages = teamSection.members;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] font-mono text-xs">
            <Users className="w-3.5 h-3.5" />
            <span>{teamSection.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
            {teamSection.heading}
          </h1>
          <p className="text-[#A0A0A0] text-sm sm:text-base max-w-2xl mx-auto">
            {teamSection.subheading}
          </p>
        </motion.div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMessages.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-panel rounded-2xl p-6 relative flex flex-col justify-between border border-white/5 hover:border-[#00FF66]/40 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                {/* Author Info */}
                <div className="flex items-center space-x-3 pb-4 border-b border-white/5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${member.avatarBg || 'from-[#00FF66] to-[#00D957]'} flex items-center justify-center font-bold text-[#050505] shadow-md text-base`}>
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#F5F5F5] text-base">
                      {member.name}
                    </div>
                    <div className="text-xs font-mono text-[#00FF66]">
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Quote Body */}
                <div className="relative text-[#F5F5F5] text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  <Quote className="w-6 h-6 text-[#00FF66]/15 absolute -top-1 -left-1 pointer-events-none" />
                  <p className="relative z-10 pt-1">
                    {member.message}
                  </p>
                </div>
              </div>

              {/* Heart sign-off */}
              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#666666]">
                <span>VERIFIED COMMITS</span>
                <span className="flex items-center gap-1 text-[#00FF66]/90">
                  <Heart className="w-3 h-3 fill-current text-[#00FF66]" /> With appreciation
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next Step Action */}
        <motion.div variants={cardVariants} className="pt-4 flex justify-center">
          <button
            onClick={onNext}
            className="px-8 py-3.5 rounded-xl bg-[#00FF66] hover:bg-[#39FF88] text-[#050505] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center space-x-2 transition-all shadow-lg shadow-[#00FF66]/20 active:scale-95"
          >
            <span>{teamSection.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
