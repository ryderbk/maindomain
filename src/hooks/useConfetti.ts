import { useEffect } from "react";
import confetti from "canvas-confetti";

const useConfetti = () => {
  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const colors = ["#ffffff", "#a5b4fc", "#e9d5ff"];

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const frame = () => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) return;

      const particleCount = Math.floor(50 * (timeLeft / duration));

      // Left cannon
      confetti({
        particleCount: Math.floor(particleCount / 2),
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.9 },
        colors: colors,
        ticks: 200,
        gravity: 1.2,
        scalar: randomInRange(0.8, 1.2),
        drift: randomInRange(-0.5, 0.5),
      });

      // Right cannon
      confetti({
        particleCount: Math.floor(particleCount / 2),
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.9 },
        colors: colors,
        ticks: 200,
        gravity: 1.2,
        scalar: randomInRange(0.8, 1.2),
        drift: randomInRange(-0.5, 0.5),
      });

      requestAnimationFrame(frame);
    };

    // Small delay before starting confetti
    const timeout = setTimeout(() => {
      frame();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
};

export default useConfetti;
