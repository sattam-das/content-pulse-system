import { motion } from 'motion/react';
import { RefreshCcw, MessageSquare, HelpCircle, AlertCircle, ArrowUpRight, Target, Zap, CheckCircle2 } from 'lucide-react';
import { Navbar } from './Navbar';
import CommentBrowser from './CommentBrowser';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import type { AnalysisResult } from '../api';

interface ResultsDashboardProps {
  data: AnalysisResult;
  onReset: () => void;
  onNavigate: (screen: string) => void;
}

export default function ResultsDashboard({ data, onReset, onNavigate }: ResultsDashboardProps) {
  const results = data.results!;

  // Convert timestamp string (e.g. "3:42") to total seconds for sorting
  const timestampToSeconds = (ts: string): number => {
    const parts = ts.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return parts[0] || 0;
  };

  // Transform timelineMarkers into chart data, sorted chronologically
  const chartData = [...results.timelineMarkers]
    .sort((a, b) => timestampToSeconds(a.timestamp) - timestampToSeconds(b.timestamp))
    .map((marker) => ({
      time: marker.timestamp,
      positive: marker.sentiment === 'positive' ? marker.mentions : 0,
      confusion: marker.sentiment === 'confusion' ? marker.mentions : 0,
      negative: marker.sentiment === 'negative' ? marker.mentions : 0,
      mentions: marker.mentions,
    }));

  // Use real sentiment data from AI if available, fallback to timeline-based
  const totalComments = data.commentCount;
  const sentiment = results.sentimentBreakdown || null;
  const totalSentimentComments = sentiment
    ? (sentiment.positive + sentiment.negative + sentiment.neutral + sentiment.questions)
    : 0;

  const positivePct = sentiment && totalSentimentComments > 0
    ? Math.round((sentiment.positive / totalSentimentComments) * 100)
    : 0;
  const negativePct = sentiment && totalSentimentComments > 0
    ? Math.round((sentiment.negative / totalSentimentComments) * 100)
    : 0;
  const neutralPct = sentiment && totalSentimentComments > 0
    ? Math.round((sentiment.neutral / totalSentimentComments) * 100)
    : 0;
  const questionsPct = sentiment && totalSentimentComments > 0
    ? Math.round((sentiment.questions / totalSentimentComments) * 100)
    : 0;

  const sentimentStats = [
    { label: 'Total Comments', value: totalComments.toLocaleString(), subtitle: 'Based on raw extraction', icon: MessageSquare, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10' },
    { label: 'Positive Sentiment', value: `${positivePct}%`, subtitle: 'Audience approval rating', icon: Zap, color: 'text-green-400', bgColor: 'bg-green-500/10' },
    { label: 'Questions Found', value: results.commonQuestions.length.toString(), subtitle: 'High priority inquiries', icon: HelpCircle, color: 'text-pink-400', bgColor: 'bg-pink-500/10' },
  ];

  const categoryBreakdown = [
    { name: 'Positive', value: positivePct || 0, color: '#22c55e' },
    { name: 'Negative', value: negativePct || 0, color: '#ef4444' },
    { name: 'Neutral', value: neutralPct || 0, color: '#64748b' },
    { name: 'Questions', value: questionsPct || 0, color: '#6366f1' },
  ];

  const healthScore = Math.min(100, Math.max(0, positivePct));
  const healthData = [
    { name: 'Health', value: healthScore },
    { name: 'Remaining', value: 100 - healthScore },
  ];

  return (
    <div className="min-h-screen text-white overflow-y-auto relative flex flex-col">
      <Navbar currentScreen="results" onNavigate={onNavigate} />
      
      <div className="relative z-10 px-6 pb-6 md:px-12 md:pb-12 pt-28 max-w-7xl mx-auto w-full">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-2">Audience Intelligence</h2>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                {totalComments.toLocaleString()} Comments Analyzed
              </span>
              <span className="w-1 h-1 bg-slate-700 rounded-full" />
              <span>Video: {data.videoId}</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-all w-fit"
          >
            <RefreshCcw className="w-4 h-4" />
            Analyze Another
          </motion.button>
        </header>

        {/* Top Section: Main Chart + Side Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-9 glass-card p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-3xl font-bold mb-1">Sentiment Trend</div>
                <div className="text-sm text-slate-500">Audience emotional response over video timeline</div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <div className="w-3 h-3 rounded-full bg-indigo-500" /> Positive
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <div className="w-3 h-3 rounded-full bg-pink-500" /> Confusion
                </div>
              </div>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Area type="monotone" dataKey="positive" stroke="#6366f1" fillOpacity={1} fill="url(#colorPos)" strokeWidth={3} />
                  <Area type="monotone" dataKey="confusion" stroke="#ec4899" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            {sentimentStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-auto pt-2 border-t border-white/5">
                  {stat.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Middle Section: Questions + Confusion Points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Common Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-indigo-400" />
              <div className="text-lg font-bold">Common Questions</div>
            </div>
            <div className="space-y-4">
              {results.commonQuestions.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium text-slate-200">{q.question}</p>
                    <span className="flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-400">
                      {q.count}×
                    </span>
                  </div>
                  {q.examples.length > 0 && (
                    <p className="text-xs mt-2 text-slate-500">e.g. "{q.examples[0]}"</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Tip + Confusion Points */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <div className="text-lg font-bold mb-1">Optimize your content with AI</div>
                <p className="text-sm text-slate-500 mb-3">
                  {results.confusionPoints.length > 0
                    ? `Address the confusion around "${results.confusionPoints[0].issue}" to boost engagement.`
                    : 'Your content is performing well. Keep it up!'}
                </p>
                <button className="text-sm font-bold text-indigo-400 flex items-center gap-1 hover:text-indigo-300 transition-colors">
                  Read full insights <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <div className="text-lg font-bold">Confusion Points</div>
              </div>
              <div className="space-y-4">
                {results.confusionPoints.map((cp, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-300">{cp.issue}</span>
                        <span className="text-slate-500">{cp.count} mentions</span>
                      </div>
                      {cp.timestamp && (
                        <div className="text-[10px] text-slate-500">at {cp.timestamp} in the video</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Breakdown + Health + Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Category Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8"
          >
            <div className="text-lg font-bold mb-8">Comment Categories</div>
            <div className="space-y-6">
              {categoryBreakdown.map((cat, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-300">{cat.name}</span>
                    <span className="text-slate-500">{cat.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${cat.value}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Audience Health */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-8 flex flex-col items-center text-center"
          >
            <div className="text-lg font-bold mb-4 w-full text-left">Audience Health</div>
            <div className="relative w-full h-[200px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={healthData}
                    cx="50%"
                    cy="80%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    <Cell fill="#6366f1" />
                    <Cell fill="rgba(255,255,255,0.05)" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute bottom-[20%] flex flex-col items-center">
                <div className="text-4xl font-bold">{healthScore}%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Overall Health</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">Based on sentiment, engagement, and retention metrics.</p>
          </motion.div>

          {/* Goal Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="text-lg font-bold">Engagement Goals</div>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Target className="w-4 h-4 text-slate-400" />
              </button>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Reply to top questions', progress: Math.min(100, results.commonQuestions.length * 25), icon: MessageSquare, color: 'bg-indigo-500' },
                { label: 'Address confusion points', progress: Math.min(100, results.confusionPoints.length * 20), icon: AlertCircle, color: 'bg-pink-500' },
                { label: 'Pin top feedback', progress: results.engagementMetrics ? Math.min(100, results.engagementMetrics.positiveFeedbackCount * 5) : 0, icon: CheckCircle2, color: 'bg-green-500' },
              ].map((goal, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${goal.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <goal.icon className={`w-5 h-5 ${goal.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-300">{goal.label}</span>
                      <span className="text-slate-500">{goal.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
                        className={`h-full rounded-full ${goal.color}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Comment Browser */}
        {data.comments && data.comments.length > 0 && (
          <CommentBrowser comments={data.comments} />
        )}

        {/* Executive Summary */}
        {(results.executiveSummary || results.summary) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="glass-card p-8 mb-8"
          >
            <h3 className="text-lg font-bold gradient-text mb-4 uppercase tracking-widest">Executive Summary</h3>
            <p className="text-slate-300 leading-relaxed">
              {results.executiveSummary || results.summary}
            </p>
            {results.engagementMetrics?.topPositiveComment && (
              <div className="mt-6 p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-2">💬 Top Positive Comment</div>
                <p className="text-sm text-slate-300 italic">"{results.engagementMetrics.topPositiveComment}"</p>
              </div>
            )}
            {results.engagementMetrics?.actionItems && results.engagementMetrics.actionItems.length > 0 && (
              <div className="mt-4">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">🎯 Recommended Actions</div>
                <ul className="space-y-1">
                  {results.engagementMetrics.actionItems.map((item, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.section>
        )}

        {/* Footer */}
        <footer className="relative z-10 px-6 pt-20 pb-12 max-w-7xl mx-auto w-full">
          <div className="glass-card p-12 border-white/10 mb-8">
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-slate-600 text-sm">
                © 2026 ContentPulse. All rights reserved.
              </div>
              <div className="flex items-center gap-8 text-sm text-slate-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
