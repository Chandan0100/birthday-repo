import confetti from 'canvas-confetti';

export const triggerGrandCelebration = () => {
  // Brand colors: Zenmonk orange, gold, amber, warm white, cyan accent
  const colors = ['#f97316', '#ff6b00', '#fbbf24', '#f59e0b', '#ffffff', '#38bdf8'];

  // Left cannon
  confetti({
    particleCount: 80,
    angle: 60,
    spread: 70,
    origin: { x: 0, y: 0.8 },
    colors: colors,
    zIndex: 9999,
  });

  // Right cannon
  confetti({
    particleCount: 80,
    angle: 120,
    spread: 70,
    origin: { x: 1, y: 0.8 },
    colors: colors,
    zIndex: 9999,
  });

  // Center blast
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { x: 0.5, y: 0.6 },
      colors: colors,
      zIndex: 9999,
      scalar: 1.2,
    });
  }, 300);

  // Subtle delayed fireworks cascades
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 90,
      spread: 120,
      origin: { x: 0.3, y: 0.4 },
      colors: ['#f97316', '#fbbf24', '#ffffff'],
      zIndex: 9999,
    });
    confetti({
      particleCount: 50,
      angle: 90,
      spread: 120,
      origin: { x: 0.7, y: 0.4 },
      colors: ['#ff6b00', '#f59e0b', '#38bdf8'],
      zIndex: 9999,
    });
  }, 700);
};

export const triggerContinuousConfetti = (durationMs = 3000) => {
  const animationEnd = Date.now() + durationMs;
  const colors = ['#f97316', '#ff6b00', '#fbbf24', '#ffffff'];

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: colors,
      zIndex: 9999,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: colors,
      zIndex: 9999,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};
