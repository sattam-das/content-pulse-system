import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export interface AnalysisResponse {
  analysisId: string;
  status: "processing" | "completed" | "failed";
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

export interface EngagementMetrics {
  positiveFeedbackCount: number;
  topPositiveComment: string;
  actionItems: string[];
}

export interface Comment {
  commentId: string;
  text: string;
  author: string;
  publishedAt: string;
  likeCount: number;
  sentiment?: "positive" | "negative" | "neutral" | "question" | "confusion";
}

export interface AnalysisResult {
  analysisId: string;
  videoId: string;
  status: string;
  commentCount: number;
  comments?: Comment[];
  results: {
    commonQuestions: CommonQuestion[];
    confusionPoints: ConfusionPoint[];
    timelineMarkers: TimelineMarker[];
    sentimentBreakdown?: SentimentBreakdown;
    executiveSummary?: string;
    engagementMetrics?: EngagementMetrics;
    summary: string;
  } | null;
}

export async function startAnalysis(
  videoUrl: string,
): Promise<AnalysisResponse> {
  const res = await api.post("/analyze", { videoUrl });
  return res.data;
}

export async function getAnalysisStatus(
  analysisId: string,
): Promise<AnalysisResult> {
  const res = await api.get(`/analysis/${analysisId}`);
  return res.data;
}

// --- Mock Data for Local Testing (no backend needed) ---
export function getMockAnalysisResult(): AnalysisResult {
  return {
    analysisId: "mock-123",
    videoId: "dQw4w9WgXcQ",
    status: "completed",
    commentCount: 247,
    comments: [
      {
        commentId: "c1",
        text: "This is an amazing tutorial, learned so much! 🔥",
        author: "Sarah Jenkins",
        publishedAt: "2026-02-20T14:32:00Z",
        likeCount: 42,
        sentiment: "positive",
      },
      {
        commentId: "c2",
        text: "How much does this service cost? Is there a free tier?",
        author: "DevMike",
        publishedAt: "2026-02-20T15:10:00Z",
        likeCount: 18,
        sentiment: "question",
      },
      {
        commentId: "c3",
        text: "I'm confused about the database setup at 3:42. Can someone explain?",
        author: "newbieCoder",
        publishedAt: "2026-02-20T16:45:00Z",
        likeCount: 25,
        sentiment: "confusion",
      },
      {
        commentId: "c4",
        text: "The authentication flow makes no sense. Why not use OAuth directly?",
        author: "SecurityGuru",
        publishedAt: "2026-02-21T09:20:00Z",
        likeCount: 31,
        sentiment: "negative",
      },
      {
        commentId: "c5",
        text: "Where is the GitHub repository? Link please!",
        author: "OpenSourceFan",
        publishedAt: "2026-02-21T10:05:00Z",
        likeCount: 14,
        sentiment: "question",
      },
      {
        commentId: "c6",
        text: "Solid content as always. Subscribed!",
        author: "TechEnthusiast",
        publishedAt: "2026-02-21T11:30:00Z",
        likeCount: 8,
        sentiment: "positive",
      },
      {
        commentId: "c7",
        text: "The environment variables part at 5:30 was really unclear.",
        author: "JuniorDev42",
        publishedAt: "2026-02-21T13:15:00Z",
        likeCount: 19,
        sentiment: "confusion",
      },
      {
        commentId: "c8",
        text: "Does this work with Python or only JavaScript?",
        author: "PythonLover",
        publishedAt: "2026-02-21T14:00:00Z",
        likeCount: 9,
        sentiment: "question",
      },
      {
        commentId: "c9",
        text: "Great explanation of the API layer. Very clear!",
        author: "BackendBoss",
        publishedAt: "2026-02-22T08:45:00Z",
        likeCount: 36,
        sentiment: "positive",
      },
      {
        commentId: "c10",
        text: "This video is way too long for what it covers.",
        author: "BusyDev",
        publishedAt: "2026-02-22T09:30:00Z",
        likeCount: 5,
        sentiment: "negative",
      },
      {
        commentId: "c11",
        text: "How do I deploy this to production? Any guide?",
        author: "CloudNative",
        publishedAt: "2026-02-22T10:20:00Z",
        likeCount: 7,
        sentiment: "question",
      },
      {
        commentId: "c12",
        text: "The intro was solid but the middle part dragged on.",
        author: "HonestReviewer",
        publishedAt: "2026-02-22T12:00:00Z",
        likeCount: 3,
        sentiment: "neutral",
      },
      {
        commentId: "c13",
        text: "Been waiting for this content. Exactly what I needed!",
        author: "EagerLearner",
        publishedAt: "2026-02-22T14:30:00Z",
        likeCount: 22,
        sentiment: "positive",
      },
      {
        commentId: "c14",
        text: "I tried following along but the auth part at 7:18 lost me completely.",
        author: "LostViewer",
        publishedAt: "2026-02-23T09:00:00Z",
        likeCount: 16,
        sentiment: "confusion",
      },
      {
        commentId: "c15",
        text: "Nice video. Nothing groundbreaking but decent overview.",
        author: "CasualWatcher",
        publishedAt: "2026-02-23T11:45:00Z",
        likeCount: 2,
        sentiment: "neutral",
      },
      {
        commentId: "c16",
        text: "The audio quality could be better. Hard to hear in some parts.",
        author: "AudioPhile",
        publishedAt: "2026-02-23T13:20:00Z",
        likeCount: 11,
        sentiment: "negative",
      },
      {
        commentId: "c17",
        text: "Can I use this with Next.js? Or is it only for plain React?",
        author: "NextJSFan",
        publishedAt: "2026-02-23T15:00:00Z",
        likeCount: 6,
        sentiment: "question",
      },
      {
        commentId: "c18",
        text: "Absolutely brilliant walkthrough. Saved me hours of debugging! 👏",
        author: "GratefulDev",
        publishedAt: "2026-02-24T08:10:00Z",
        likeCount: 55,
        sentiment: "positive",
      },
      {
        commentId: "c19",
        text: "Standard tutorial. Covered the basics alright.",
        author: "MidTierDev",
        publishedAt: "2026-02-24T10:30:00Z",
        likeCount: 1,
        sentiment: "neutral",
      },
      {
        commentId: "c20",
        text: "The pricing model explanation was missing. Please add it!",
        author: "StartupFounder",
        publishedAt: "2026-02-24T12:45:00Z",
        likeCount: 20,
        sentiment: "question",
      },
    ],
    results: {
      commonQuestions: [
        {
          question: "How much does this service cost?",
          count: 18,
          examples: ["What is the pricing?", "Is there a free tier?", "Cost?"],
        },
        {
          question: "Where is the GitHub repository?",
          count: 12,
          examples: ["Link to the source code?", "Is this open source?"],
        },
        {
          question: "Does this work with Python?",
          count: 9,
          examples: ["Python support?", "Can I use this in my Python app?"],
        },
        {
          question: "How do I deploy this to production?",
          count: 7,
          examples: ["Deployment guide?", "Can I host this on Vercel?"],
        },
      ],
      confusionPoints: [
        { issue: "Database setup was unclear", count: 22, timestamp: "3:42" },
        {
          issue: "Authentication flow was confusing",
          count: 15,
          timestamp: "7:18",
        },
        {
          issue: "Environment variables not explained well",
          count: 11,
          timestamp: "5:30",
        },
      ],
      timelineMarkers: [
        { timestamp: "0:45", mentions: 8, sentiment: "positive" },
        { timestamp: "2:15", mentions: 18, sentiment: "positive" },
        { timestamp: "3:42", mentions: 32, sentiment: "confusion" },
        { timestamp: "5:30", mentions: 14, sentiment: "confusion" },
        { timestamp: "7:18", mentions: 21, sentiment: "confusion" },
        { timestamp: "9:00", mentions: 10, sentiment: "positive" },
        { timestamp: "11:30", mentions: 6, sentiment: "positive" },
      ],
      summary:
        "Analysis of 247 comments reveals pricing and GitHub access are top questions. The database setup section around 3:42 caused the most confusion.",
    },
  };
}
