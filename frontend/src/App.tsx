import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BackgroundOrbs } from './components/BackgroundOrbs';
import InputScreen from './components/InputScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultsDashboard from './components/ResultsDashboard';
import { startAnalysis, getAnalysisStatus, getMockAnalysisResult } from './api';
import type { AnalysisResult } from './api';

type AppScreen = 'input' | 'loading' | 'results';

// Set to true to use mock data without needing a running backend
const USE_MOCK = true;

function App() {
  const [screen, setScreen] = useState<AppScreen>('input');
  const [analysisId, setAnalysisId] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [commentCount, setCommentCount] = useState<number | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        setCommentCount(mockData.commentCount);
        setAnalysisResult(mockData);
        setScreen('results');
      }, 6000); // 6 seconds to show the nice loading animation
      
      // Update comment count partway through
      const countTimer = setTimeout(() => setCommentCount(247), 2000);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(countTimer);
      };
    }

    const interval = setInterval(async () => {
      try {
        const result = await getAnalysisStatus(analysisId);
        setCommentCount(result.commentCount);

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
    setCommentCount(undefined);
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
              <InputScreen onSubmit={handleSubmit} isSubmitting={isSubmitting} />
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
              <LoadingScreen commentCount={commentCount} />
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
              <ResultsDashboard data={analysisResult} onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
