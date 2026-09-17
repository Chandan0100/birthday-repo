import confetti from 'canvas-confetti';

// Engineering Neon Green & Celebratory Gold Palette
// Black first. Neon second. Gold celebratory accents.
const NEON_PALETTE = ['#00FF66', '#39FF88', '#00D957', '#7CFFB2', '#FFFFFF'];
const CELEBRATION_PALETTE = ['#00FF66', '#39FF88', '#FFD166', '#FFDC85', '#FFFFFF', '#38BDF8'];

// 1. NORMAL CELEBRATION: Classic neon green + white birthday confetti burst
export const triggerNormal = () => {
  const randomSpread = 65 + Math.random() * 20;
  const randomCount = 75 + Math.floor(Math.random() * 30);
  const randomY = 0.65 + (Math.random() * 0.1 - 0.05);

  confetti({
    particleCount: randomCount,
    spread: randomSpread,
    origin: { x: 0.5 + (Math.random() * 0.2 - 0.1), y: randomY },
    colors: NEON_PALETTE,
    ticks: 200,
    gravity: 0.85,
    scalar: 1,
    zIndex: 9999,
  });
};

// 2. FANCY CELEBRATION: Dual cannons, gold stars, neon sparkles
export const triggerFancy = () => {
  // Left angled cannon
  confetti({
    particleCount: 65,
    angle: 55 + Math.random() * 15,
    spread: 65,
    origin: { x: 0.05, y: 0.75 },
    colors: CELEBRATION_PALETTE,
    zIndex: 9999,
  });

  // Right angled cannon
  confetti({
    particleCount: 65,
    angle: 125 - Math.random() * 15,
    spread: 65,
    origin: { x: 0.95, y: 0.75 },
    colors: CELEBRATION_PALETTE,
    zIndex: 9999,
  });

  // Center star & gold cascade
  setTimeout(() => {
    confetti({
      particleCount: 55,
      spread: 95,
      origin: { x: 0.5, y: 0.5 },
      shapes: ['star', 'circle'],
      colors: ['#FFD166', '#FFDC85', '#00FF66', '#FFFFFF'],
      scalar: 1.3,
      zIndex: 9999,
    });
  }, 250);

  // Trailing shimmer
  setTimeout(() => {
    confetti({
      particleCount: 40,
      spread: 120,
      origin: { x: 0.5 + (Math.random() * 0.3 - 0.15), y: 0.4 },
      colors: ['#FFFFFF', '#39FF88', '#FFD166'],
      scalar: 0.8,
      zIndex: 9999,
    });
  }, 500);
};

// 3. FIREWORKS CELEBRATION: Radial night sky neon & gold bursts
export const triggerFireworks = () => {
  const count = 4;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const x = 0.2 + Math.random() * 0.6;
      const y = 0.2 + Math.random() * 0.35;
      const colorSet = i % 2 === 0 ? NEON_PALETTE : CELEBRATION_PALETTE;

      // Primary radial blast
      confetti({
        particleCount: 45,
        startVelocity: 30,
        spread: 360,
        ticks: 85,
        origin: { x, y },
        colors: colorSet,
        gravity: 0.6,
        scalar: 1.1,
        zIndex: 9999,
      });

      // Secondary sparkle echo
      setTimeout(() => {
        confetti({
          particleCount: 25,
          startVelocity: 15,
          spread: 360,
          ticks: 60,
          origin: { x, y: y + 0.02 },
          colors: ['#FFFFFF', '#00FF66', '#FFD166'],
          gravity: 0.8,
          scalar: 0.7,
          zIndex: 9999,
        });
      }, 150);
    }, i * 350);
  }
};

// 4. Party Streamers
export const triggerStreamers = (durationMs = 2800) => {
  const animationEnd = Date.now() + durationMs;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: CELEBRATION_PALETTE,
      zIndex: 9999,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: CELEBRATION_PALETTE,
      zIndex: 9999,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};
