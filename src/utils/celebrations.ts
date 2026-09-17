import confetti from 'canvas-confetti';

// Zenmonk palette & celebration accents
const ZEN_PALETTE = ['#f97316', '#ff6b00', '#fbbf24', '#f59e0b', '#ffffff', '#38bdf8', '#ef4444'];
const GOLD_PALETTE = ['#fbbf24', '#f59e0b', '#d97706', '#ffffff', '#fed7aa'];

// 1. NORMAL CELEBRATION: Classic birthday confetti burst
export const triggerNormal = () => {
  const randomSpread = 60 + Math.random() * 20;
  const randomCount = 70 + Math.floor(Math.random() * 30);
  const randomY = 0.65 + (Math.random() * 0.1 - 0.05);

  confetti({
    particleCount: randomCount,
    spread: randomSpread,
    origin: { x: 0.5 + (Math.random() * 0.2 - 0.1), y: randomY },
    colors: ZEN_PALETTE,
    ticks: 200,
    gravity: 0.9,
    scalar: 1,
    zIndex: 9999,
  });
};

// 2. FANCY CELEBRATION: Stars, multi-bursts, gold accents, sparkling cascades
export const triggerFancy = () => {
  // Left angled cannon
  confetti({
    particleCount: 60,
    angle: 55 + Math.random() * 15,
    spread: 65,
    origin: { x: 0.05, y: 0.75 },
    colors: ZEN_PALETTE,
    zIndex: 9999,
  });

  // Right angled cannon
  confetti({
    particleCount: 60,
    angle: 125 - Math.random() * 15,
    spread: 65,
    origin: { x: 0.95, y: 0.75 },
    colors: ZEN_PALETTE,
    zIndex: 9999,
  });

  // Center star & gold cascade
  setTimeout(() => {
    confetti({
      particleCount: 50,
      spread: 90,
      origin: { x: 0.5, y: 0.5 },
      shapes: ['star', 'circle'],
      colors: GOLD_PALETTE,
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
      colors: ['#ffffff', '#f97316', '#fbbf24'],
      scalar: 0.8,
      zIndex: 9999,
    });
  }, 500);
};

// 3. FIREWORKS CELEBRATION: Radial outward expansions across randomized coordinates
export const triggerFireworks = () => {
  const count = 4;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const x = 0.2 + Math.random() * 0.6;
      const y = 0.2 + Math.random() * 0.4;
      const colorSet = i % 2 === 0 ? ZEN_PALETTE : GOLD_PALETTE;

      // Primary radial blast
      confetti({
        particleCount: 45,
        startVelocity: 30,
        spread: 360,
        ticks: 80,
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
          colors: ['#ffffff', '#fbbf24', '#f97316'],
          gravity: 0.8,
          scalar: 0.7,
          zIndex: 9999,
        });
      }, 150);
    }, i * 350);
  }
};

// 4. Continuous background streamer for Party mode
export const triggerStreamers = (durationMs = 2500) => {
  const animationEnd = Date.now() + durationMs;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ZEN_PALETTE,
      zIndex: 9999,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ZEN_PALETTE,
      zIndex: 9999,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};
