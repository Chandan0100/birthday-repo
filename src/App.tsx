import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Header } from './components/Header';
import { PasswordGate } from './components/PasswordGate';
import { SecretDeployment } from './components/SecretDeployment';
import { DeploymentTerminal } from './components/DeploymentTerminal';
import { ReleaseNotes } from './components/ReleaseNotes';
import { TeamMessages } from './components/TeamMessages';
import { CtoSystemStatus } from './components/CtoSystemStatus';
import { RealMessage } from './components/RealMessage';
import { Celebration } from './components/Celebration';

export function App() {
  const [stage, setStage] = useState<number>(0);
  const totalStages = 7;

  // Handles unlocking through password gate
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

  return (
    <div className="min-h-screen bg-[#090b0e] text-slate-100 flex flex-col justify-between selection:bg-zen-500/30 selection:text-zen-200 relative overflow-x-hidden">
      {/* Background Visual Effects (Only rendered after unlocking) */}
      {stage > 0 && <BackgroundGlow />}

      {/* Header bar (Visible once authenticated) */}
      {stage > 0 && (
        <Header
          currentStage={stage}
          totalStages={totalStages}
          onNavigateStage={handleNavigateStage}
        />
      )}

      {/* Main Experience Flow */}
      <main className={`flex-1 flex flex-col justify-center ${stage > 0 ? 'pt-20 pb-12' : ''}`}>
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <SecretDeployment onDeploy={handleNextStage} />
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div
              key="stage-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DeploymentTerminal onComplete={handleNextStage} />
            </motion.div>
          )}

          {stage === 3 && (
            <motion.div
              key="stage-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <ReleaseNotes onNext={handleNextStage} />
            </motion.div>
          )}

          {stage === 4 && (
            <motion.div
              key="stage-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <TeamMessages onNext={handleNextStage} />
            </motion.div>
          )}

          {stage === 5 && (
            <motion.div
              key="stage-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <CtoSystemStatus onNext={handleNextStage} />
            </motion.div>
          )}

          {stage === 6 && (
            <motion.div
              key="stage-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <RealMessage onNext={handleNextStage} />
            </motion.div>
          )}

          {stage === 7 && (
            <motion.div
              key="stage-7"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Celebration onRestart={handleRestart} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
