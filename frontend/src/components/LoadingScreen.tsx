import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Search, Brain, BarChart3 } from 'lucide-react';

interface LoadingScreenProps {
  /** 
   * Whether the analysis is complete. When true, progress jumps to 100%.
   * When false/undefined, progress slowly climbs toward 90% max.
   */
  isComplete?: boolean;
}

const steps = [
  { icon: Search, label: 'Fetching comments' },
  { icon: Brain, label: 'AI analysis' },
  { icon: BarChart3, label: 'Building insights' },
];

export default function LoadingScreen({ isComplete = false }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    if (isComplete) {
      setProgress(100);
      return;
    }

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000; // seconds

      // Asymptotic curve: fast at start, slows down as it approaches 90%
      // Formula: 90 * (1 - e^(-elapsed/25))
      // ~30% at 10s, ~50% at 18s, ~70% at 30s, ~85% at 50s, never reaches 90
      const asymptotic = 90 * (1 - Math.exp(-elapsed / 25));

      setProgress(Math.min(89, Math.round(asymptotic)));
    }, 200);

    return () => clearInterval(interval);
  }, [isComplete]);

  const circumference = 2 * Math.PI * 120;
  const strokeOffset = circumference - (progress / 100) * circumference;

  // Determine active step based on progress
  const activeStep = progress < 20 ? 0 : progress < 85 ? 1 : 2;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08)_0%,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative flex flex-col items-center z-10"
      >
        {/* Circular progress ring */}
        <div className="relative w-[280px] h-[280px] flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 260 260">
            <circle cx="130" cy="130" r="120" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          </svg>
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 260 260">
            <circle
              cx="130" cy="130" r="120" fill="none"
              stroke={progress >= 100 ? '#22c55e' : '#818cf8'}
              strokeWidth="1.5" strokeLinecap="round"
              strokeDasharray={circumference} strokeDashoffset={strokeOffset}
              style={{ transition: 'stroke-dashoffset 0.3s ease-out, stroke 0.5s ease' }}
            />
          </svg>
          <span className="text-7xl font-light tracking-tight text-slate-100 tabular-nums font-sans">
            {progress}
          </span>
        </div>

        {/* Step indicators */}
        <div className="mt-10 flex flex-col gap-3 w-full max-w-xs">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === activeStep;
            const isDone = i < activeStep;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-500 ${
                  isActive ? 'bg-white/[0.06]' : ''
                }`}
              >
                <Icon className={`w-4 h-4 transition-colors duration-500 ${
                  isActive ? 'text-indigo-400' : isDone ? 'text-green-400' : 'text-slate-600'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-500 ${
                  isActive ? 'text-slate-200' : isDone ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {step.label}
                </span>
                {isActive && (
                  <div className="ml-auto flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <motion.div
                        key={d}
                        className="w-1 h-1 bg-indigo-400 rounded-full"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
