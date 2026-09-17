import React, { useState } from 'react';
import { motion } from 'framer-motion';
import content from '../../content';
import { HeartDoodle, StarDoodle, SparkleDoodle } from '../Doodles/DoodleIcons';
import { ArrowRight, Heart, MessageSquareQuote } from 'lucide-react';

interface TeamMessagesProps {
  onNext: () => void;
}

export const TeamMessages: React.FC<TeamMessagesProps> = ({ onNext }) => {
  const { teamMessages } = content;
  const { chandanLetter, members } = teamMessages;
  const [selectedMember, setSelectedMember] = useState<string>('chandan');

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-white/90 backdrop-blur-md border border-[#FED7AA]/70 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-[#F97316]/5 text-[#1C1917]"
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF4E8] border border-[#FED7AA] text-xs font-mono text-[#EA580C] mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{teamMessages.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#1C1917] mb-2">
            {teamMessages.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            {teamMessages.subheading}
          </p>
        </div>

        {/* Member Selector Tabs */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-8">
          <button
            onClick={() => setSelectedMember('chandan')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
              selectedMember === 'chandan'
                ? 'bg-[#F97316] text-white shadow-md shadow-[#F97316]/25'
                : 'bg-[#FFF4E8] text-[#57534E] hover:bg-[#FED7AA]/50'
            }`}
          >
            <Heart className="w-4 h-4 text-white" />
            <span>Chandan (Special Letter)</span>
          </button>

          {members.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMember(m.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedMember === m.id
                  ? 'bg-[#F97316] text-white shadow-md shadow-[#F97316]/25'
                  : 'bg-[#FFF4E8] text-[#57534E] hover:bg-[#FED7AA]/50'
              }`}
            >
              <span>{m.name}</span>
            </button>
          ))}
        </div>

        {/* Chandan's Full Letter View */}
        {selectedMember === 'chandan' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-2xl bg-[#FFF9F2] border border-[#FED7AA] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 pointer-events-none opacity-80">
              <HeartDoodle className="w-8 h-8" />
            </div>

            <h3 className="font-serif italic text-2xl font-bold text-[#EA580C] mb-6">
              {chandanLetter.salutation}
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-[#292524] leading-relaxed font-sans font-normal">
              {chandanLetter.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === chandanLetter.paragraphs.length - 2 ? 'font-medium text-[#1C1917] bg-[#FED7AA]/20 p-3 rounded-lg border-l-2 border-[#F97316]' : ''}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#FED7AA]/60 flex items-center justify-between">
              <div>
                <span className="font-handwriting text-2xl text-[#1C1917] block">
                  — {chandanLetter.author}
                </span>
                <span className="text-xs text-[#78716C] font-mono">
                  {chandanLetter.role}
                </span>
              </div>
              <StarDoodle className="w-6 h-6" color="#FFD166" />
            </div>
          </motion.div>
        ) : (
          /* Other Team Member Cards */
          <motion.div
            key={selectedMember}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl bg-[#FFF9F2] border border-[#FED7AA] shadow-sm"
          >
            {members
              .filter((m) => m.id === selectedMember)
              .map((m) => (
                <div key={m.id}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${m.avatarBg || 'from-orange-400 to-amber-600'} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                      {m.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#1C1917]">{m.name}</h4>
                      <p className="text-xs text-[#78716C] font-mono">{m.role}</p>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-[#292524] leading-relaxed my-6 italic font-serif">
                    “{m.message}”
                  </p>

                  {m.tags && (
                    <div className="flex items-center space-x-2">
                      {m.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#FFF4E8] text-[#EA580C] text-xs font-mono font-medium border border-[#FED7AA]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </motion.div>
        )}

        {/* Footer Next Button */}
        <div className="mt-8 pt-6 border-t border-[#FED7AA]/50 flex items-center justify-between flex-wrap gap-4">
          <div className="inline-flex items-center space-x-1.5 font-handwriting text-xl text-[#EA580C]">
            <SparkleDoodle className="w-4 h-4" />
            <span>Appreciation from the heart</span>
          </div>

          <button
            onClick={onNext}
            className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-xl font-medium text-sm transition-all shadow-md shadow-[#F97316]/20 hover:shadow-lg hover:shadow-[#F97316]/30 group"
          >
            <span>{teamMessages.buttonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamMessages;

