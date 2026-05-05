import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Tinh tế", "Hiện đại", "Cá tính"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const startTimeRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 2700;
    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const p = Math.min(elapsed / duration, 1);
      setProgress(Math.floor(p * 100));

      if (p < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setIsExiting(true);
        setTimeout(onComplete, 400);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12 transition-opacity duration-400 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Top left */}
      <div className="flex items-center gap-3">
        <span className="text-sm tracking-[0.3em] font-light accent-gradient-text">
          ANNA EYEWEAR
        </span>
      </div>

      {/* Center rotating text */}
      <div className="flex-1 flex items-center justify-center">
        <h1
          key={wordIndex}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary animate-fade-in"
        >
          {words[wordIndex]}
        </h1>
      </div>

      {/* Bottom section */}
      <div className="flex items-end justify-between">
        <div className="w-48 md:w-64">
          <div className="h-[2px] bg-stroke rounded-full overflow-hidden">
            <div
              className="h-full accent-gradient rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <span className="text-muted text-sm font-mono tracking-wider">
          {String(progress).padStart(3, "0")}
        </span>
      </div>
    </div>
  );
}
