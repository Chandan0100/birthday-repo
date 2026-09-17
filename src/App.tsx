import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PasswordGate } from './components/PasswordGate/PasswordGate';
import { BirthdayHero } from './components/BirthdayHero/BirthdayHero';
import { Story } from './components/Story/Story';
import { EngineeringLegacy } from './components/EngineeringLegacy/EngineeringLegacy';
import { TeamMessages } from './components/TeamMessages/TeamMessages';
import { CtoStatus } from './components/CtoStatus/CtoStatus';
import { FinalMessage } from './components/FinalMessage/FinalMessage';
import { Celebration } from './components/Celebration/Celebration';
import { StageNav } from './components/Common/StageNav';
import { Footer } from './components/Common/Footer';
import { AmbientLighting } from './components/Common/AmbientLighting';

export function App() {
  const [stage, setStage] = useState<number>(0);
  const totalStages = 7;

  // Unlocks upon entering correct password
  const handlePasswordSuccess = () => {
    setStage(1);
  };

  const handleNextStage = () => {
    setStage((prev) => Math.min(totalStages, prev + 1));
  };

  const handleNavigateStage = (targetStage: number) => {
    if (stage > 0 && targetStage >= 1 && targetStage <= totalStages) {
      setStage(targetStage);
    }
  };

  const handleRestart = () => {
    setStage(1);
  };

  const isDarkStage = stage === 3 || stage === 5;

  return (
    <div className={`min-h-screen flex flex-col justify-between relative overflow-x-hidden transition-colors duration-700 ${
      stage === 0 ? 'bg-[#0F0F11]' : isDarkStage ? 'bg-[#08080A] text-neutral-100' : 'bg-[#FFF9F2] text-[#1C1917]'
    }`}>
      {/* Dynamic atmospheric lighting */}
      {stage > 0 && <AmbientLighting stage={stage} />}

      {/* Top Header Navigation */}
      {stage > 0 && (
        <StageNav
          currentStage={stage}
          totalStages={totalStages}
          onNavigateStage={handleNavigateStage}
          isDarkTheme={isDarkStage}
        />
      )}

      {/* Main Stage Flow */}
      <main className={`flex-1 flex flex-col justify-center relative z-10 ${stage > 0 ? 'pt-20 pb-8' : ''}`}>
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.div
              key="stage-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <PasswordGate onSuccess={handlePasswordSuccess} />
            </motion.div>
          )}

          {stage === 1 && (
            <motion.div
              key="stage-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <BirthdayHero onNext={handleNextStage} />
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div
              key="stage-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Story onNext={handleNextStage} />
            </motion.div>
          )}

          {stage === 3 && (
            <motion.div
              key="stage-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <EngineeringLegacy onNext={handleNextStage} />
            </motion.div>
          )}

          {stage === 4 && (
            <motion.div
              key="stage-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <TeamMessages onNext={handleNextStage} />
            </motion.div>
          )}

          {stage === 5 && (
            <motion.div
              key="stage-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <CtoStatus onNext={handleNextStage} />
            </motion.div>
          )}

          {stage === 6 && (
            <motion.div
              key="stage-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <FinalMessage onNext={handleNextStage} />
            </motion.div>
          )}

          {stage === 7 && (
            <motion.div
              key="stage-7"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Celebration onRestart={handleRestart} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      {stage > 0 && <Footer isDarkTheme={isDarkStage} />}
    </div>
  );
}

export default App;
