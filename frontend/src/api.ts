import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export interface AnalysisResponse {
  analysisId: string;
  status: 'processing' | 'completed' | 'failed';
  message?: string;
}

export interface CommonQuestion {
  question: string;
  count: number;
  examples: string[];
}

export interface ConfusionPoint {
  issue: string;
  count: number;
  timestamp?: string;
}

export interface TimelineMarker {
  timestamp: string;
  mentions: number;
  sentiment: string;
}

export interface SentimentBreakdown {
  positive: number;
  negative: number;
  neutral: number;
  questions: number;
  overallSentiment: string;
}

export interface AnalysisResult {
  analysisId: string;
  videoId: string;
  status: string;
  commentCount: number;
  results: {
    commonQuestions: CommonQuestion[];
    confusionPoints: ConfusionPoint[];
    timelineMarkers: TimelineMarker[];
    sentimentBreakdown?: SentimentBreakdown;
    summary: string;
  } | null;
}

export async function startAnalysis(videoUrl: string): Promise<AnalysisResponse> {
  const res = await api.post('/analyze', { videoUrl });
  return res.data;
}

export async function getAnalysisStatus(analysisId: string): Promise<AnalysisResult> {
  const res = await api.get(`/analysis/${analysisId}`);
  return res.data;
}

// --- Mock Data for Local Testing (no backend needed) ---
export function getMockAnalysisResult(): AnalysisResult {
  return {
    analysisId: 'mock-123',
    videoId: 'dQw4w9WgXcQ',
    status: 'completed',
    commentCount: 247,
    results: {
      commonQuestions: [
        { question: 'How much does this service cost?', count: 18, examples: ['What is the pricing?', 'Is there a free tier?', 'Cost?'] },
        { question: 'Where is the GitHub repository?', count: 12, examples: ['Link to the source code?', 'Is this open source?'] },
        { question: 'Does this work with Python?', count: 9, examples: ['Python support?', 'Can I use this in my Python app?'] },
        { question: 'How do I deploy this to production?', count: 7, examples: ['Deployment guide?', 'Can I host this on Vercel?'] },
      ],
      confusionPoints: [
        { issue: 'Database setup was unclear', count: 22, timestamp: '3:42' },
        { issue: 'Authentication flow was confusing', count: 15, timestamp: '7:18' },
        { issue: 'Environment variables not explained well', count: 11, timestamp: '5:30' },
      ],
      timelineMarkers: [
        { timestamp: '0:45', mentions: 8, sentiment: 'positive' },
        { timestamp: '2:15', mentions: 18, sentiment: 'positive' },
        { timestamp: '3:42', mentions: 32, sentiment: 'confusion' },
        { timestamp: '5:30', mentions: 14, sentiment: 'confusion' },
        { timestamp: '7:18', mentions: 21, sentiment: 'confusion' },
        { timestamp: '9:00', mentions: 10, sentiment: 'positive' },
        { timestamp: '11:30', mentions: 6, sentiment: 'positive' },
      ],
      summary: 'Analysis of 247 comments reveals pricing and GitHub access are top questions. The database setup section around 3:42 caused the most confusion.',
    },
  };
}
