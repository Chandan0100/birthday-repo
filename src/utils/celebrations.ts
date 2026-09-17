import confetti from 'canvas-confetti';

// Warm Birthday + Zenmonk Orange + Celebratory Gold + Subtle Neon Green Sparks
const WARM_BIRTHDAY_PALETTE = ['#F97316', '#EA580C', '#FFD166', '#FFB86C', '#F7A8B8', '#FFF4E8', '#FFFFFF', '#00FF66'];
const GOLD_SPARKLE_PALETTE = ['#FFD166', '#FFDC85', '#F5BE47', '#FFF9F2', '#F97316', '#00FF66'];
const FIREWORKS_PALETTE = ['#F97316', '#FFD166', '#38BDF8', '#F7A8B8', '#00FF66', '#FFFFFF'];

// 1. NORMAL: Classic birthday confetti burst
export const triggerNormal = () => {
  const randomSpread = 65 + Math.random() * 20;
  const randomCount = 80 + Math.floor(Math.random() * 30);
  const randomX = 0.5 + (Math.random() * 0.2 - 0.1);

  confetti({
    particleCount: randomCount,
    spread: randomSpread,
    origin: { x: randomX, y: 0.65 },
    colors: WARM_BIRTHDAY_PALETTE,
    ticks: 200,
    gravity: 0.85,
    scalar: 1,
    zIndex: 9999,
  });
};

// 2. FANCY: Dual cannons, golden stars, sparkles
export const triggerFancy = () => {
  // Left angled cannon
  confetti({
    particleCount: 60,
    angle: 55 + Math.random() * 15,
    spread: 60,
    origin: { x: 0.05, y: 0.75 },
    colors: WARM_BIRTHDAY_PALETTE,
    zIndex: 9999,
  });

  // Right angled cannon
  confetti({
    particleCount: 60,
    angle: 125 - Math.random() * 15,
    spread: 60,
    origin: { x: 0.95, y: 0.75 },
    colors: WARM_BIRTHDAY_PALETTE,
    zIndex: 9999,
  });

  // Center star & gold cascade
  setTimeout(() => {
    confetti({
      particleCount: 50,
      spread: 90,
      origin: { x: 0.5, y: 0.45 },
      shapes: ['star', 'circle'],
      colors: GOLD_SPARKLE_PALETTE,
      scalar: 1.3,
      zIndex: 9999,
    });
  }, 250);

  // Trailing shimmer
  setTimeout(() => {
    confetti({
      particleCount: 35,
      spread: 120,
      origin: { x: 0.5 + (Math.random() * 0.3 - 0.15), y: 0.35 },
      colors: ['#FFFFFF', '#FFD166', '#F97316', '#00FF66'],
      scalar: 0.8,
      zIndex: 9999,
    });
  }, 500);
};

// 3. FIREWORKS: Multiple sky bursts with echoes
export const triggerFireworks = () => {
  const count = 5;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const x = 0.2 + Math.random() * 0.6;
      const y = 0.15 + Math.random() * 0.35;
      const colorSet = i % 2 === 0 ? FIREWORKS_PALETTE : GOLD_SPARKLE_PALETTE;

      // Primary radial blast
      confetti({
        particleCount: 50,
        startVelocity: 32,
        spread: 360,
        ticks: 90,
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
          startVelocity: 16,
          spread: 360,
          ticks: 60,
          origin: { x, y: y + 0.02 },
          colors: ['#FFFFFF', '#FFD166', '#F97316'],
          gravity: 0.8,
          scalar: 0.7,
          zIndex: 9999,
        });
      }, 180);
    }, i * 320);
  }
};

// 4. STREAMERS / CANNONS
export const triggerStreamers = (durationMs = 2600) => {
  const animationEnd = Date.now() + durationMs;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: WARM_BIRTHDAY_PALETTE,
      zIndex: 9999,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: WARM_BIRTHDAY_PALETTE,
      zIndex: 9999,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};

// 5. PARTY: Full combination
export const triggerParty = () => {
  triggerFancy();
  setTimeout(() => triggerFireworks(), 300);
  setTimeout(() => triggerStreamers(2200), 500);
};
