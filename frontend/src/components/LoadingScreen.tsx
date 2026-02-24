import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Brain, BarChart3 } from 'lucide-react';

interface LoadingScreenProps {
  commentCount?: number;
}

const steps = [
  { icon: Search, label: 'Fetching comments' },
  { icon: Brain, label: 'AI analysis' },
  { icon: BarChart3, label: 'Building insights' },
];

export default function LoadingScreen({ commentCount }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5500;
    const interval = 30;
    const totalSteps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const t = current / totalSteps;
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.min(100, Math.round(eased * 100)));

      if (current >= totalSteps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const circumference = 2 * Math.PI * 120;
  const strokeOffset = circumference - (progress / 100) * circumference;

  // Determine active step based on progress
  const activeStep = progress < 35 ? 0 : progress < 70 ? 1 : 2;

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
              stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round"
              strokeDasharray={circumference} strokeDashoffset={strokeOffset}
              style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
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
