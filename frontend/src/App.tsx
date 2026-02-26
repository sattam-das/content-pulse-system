import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BackgroundOrbs } from './components/BackgroundOrbs';
import InputScreen from './components/InputScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultsDashboard from './components/ResultsDashboard';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import { startAnalysis, getAnalysisStatus, getMockAnalysisResult } from './api';
import type { AnalysisResult } from './api';

type AppScreen = 'input' | 'loading' | 'results' | 'about' | 'faq';

// Set to true to use mock data without needing a running backend
const USE_MOCK = false;

function App() {
  const [screen, setScreen] = useState<AppScreen>('input');
  const [previousScreen, setPreviousScreen] = useState<AppScreen>('input');
  const [analysisId, setAnalysisId] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNavigate = useCallback((target: string) => {
    if (target === 'about' || target === 'faq') {
      setPreviousScreen(screen);
      setScreen(target as AppScreen);
    } else if (target === 'input') {
      setScreen('input');
    }
  }, [screen]);

  const handleBackFromAbout = useCallback(() => {
    setScreen(previousScreen);
  }, [previousScreen]);

  const handleSubmit = useCallback(async (url: string) => {
    setIsSubmitting(true);

    if (USE_MOCK) {
      // Simulate network delay
      await new Promise((r) => setTimeout(r, 800));
      setAnalysisId('mock-123');
      setScreen('loading');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await startAnalysis(url);
      setAnalysisId(res.analysisId);
      setScreen('loading');
    } catch (err) {
      console.error('Failed to start analysis:', err);
      alert('Failed to start analysis. Please check the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  // Polling for results
  useEffect(() => {
    if (screen !== 'loading' || !analysisId) return;

    if (USE_MOCK) {
      // Simulate a loading delay then show mock results
      const timer = setTimeout(() => {
        const mockData = getMockAnalysisResult();
        setAnalysisResult(mockData);
        setScreen('results');
      }, 6000); // 6 seconds to show the nice loading animation
      
      return () => {
        clearTimeout(timer);
      };
    }

    const interval = setInterval(async () => {
      try {
        const result = await getAnalysisStatus(analysisId);

        if (result.status === 'completed') {
          setAnalysisResult(result);
          setScreen('results');
          clearInterval(interval);
        } else if (result.status === 'failed') {
          alert('Analysis failed. Please try again.');
          handleReset();
          clearInterval(interval);
        }
      } catch (err) {
        console.error('Polling error:', err);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [screen, analysisId]);

  const handleReset = () => {
    setScreen('input');
    setAnalysisId(null);
    setAnalysisResult(null);
  };

  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30">
      <BackgroundOrbs />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {screen === 'input' && (
            <motion.div
              key="input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <InputScreen onSubmit={handleSubmit} isSubmitting={isSubmitting} onNavigate={handleNavigate} />
            </motion.div>
          )}

          {screen === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LoadingScreen />
            </motion.div>
          )}

          {screen === 'results' && analysisResult && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ResultsDashboard data={analysisResult} onReset={handleReset} onNavigate={handleNavigate} />
            </motion.div>
          )}

          {screen === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutPage onBack={handleBackFromAbout} onNavigate={handleNavigate} />
            </motion.div>
          )}

          {screen === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FAQPage onBack={handleBackFromAbout} onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;

