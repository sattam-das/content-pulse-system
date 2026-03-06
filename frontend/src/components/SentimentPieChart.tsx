import { useMemo } from 'react';
import { AlertCircle } from 'lucide-react';
import {
  Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import type { SentimentBreakdown } from '../api';

// --- Interfaces ---

export interface SentimentPieChartProps {
  sentimentData: SentimentBreakdown | null;
  isLoading?: boolean;
  error?: string | null;
}

interface ChartDataPoint {
  name: string;
  value: number;
  count: number;
  color: string;
  light: string;
  dark: string;
}

// --- Constants ---

const SENTIMENT_COLORS = [
  { name: 'Positive', color: '#22c55e', light: '#4ade80', dark: '#166534' },
  { name: 'Negative', color: '#ef4444', light: '#f87171', dark: '#991b1b' },
  { name: 'Neutral', color: '#64748b', light: '#94a3b8', dark: '#334155' },
  { name: 'Mixed', color: '#f59e0b', light: '#fbbf24', dark: '#92400e' },
] as const;

// --- Data Transformation ---

export function normalizeSentimentData(breakdown: SentimentBreakdown): ChartDataPoint[] {
  const categories = [
    { key: 'positive' as const, count: breakdown.positive },
    { key: 'negative' as const, count: breakdown.negative },
    { key: 'neutral' as const, count: breakdown.neutral },
    { key: 'questions' as const, count: breakdown.questions },
  ];

  const total = categories.reduce((sum, cat) => sum + cat.count, 0);

  if (total === 0) {
    return SENTIMENT_COLORS.map((sc, i) => ({
      name: sc.name,
      value: 0,
      count: categories[i].count,
      color: sc.color,
      light: sc.light,
      dark: sc.dark,
    }));
  }

  // Calculate raw percentages
  const rawPercentages = categories.map((cat, i) => ({
    name: SENTIMENT_COLORS[i].name,
    value: Math.round((cat.count / total) * 100),
    count: cat.count,
    color: SENTIMENT_COLORS[i].color,
    light: SENTIMENT_COLORS[i].light,
    dark: SENTIMENT_COLORS[i].dark,
  }));

  // Normalize to ensure sum is exactly 100%
  const sum = rawPercentages.reduce((acc, p) => acc + p.value, 0);
  const adjustment = 100 - sum;

  if (adjustment !== 0) {
    const maxIndex = rawPercentages.reduce(
      (maxIdx, p, idx, arr) => (p.value > arr[maxIdx].value ? idx : maxIdx),
      0
    );
    rawPercentages[maxIndex].value += adjustment;
  }

  return rawPercentages;
}

// --- Component ---

export default function SentimentPieChart({ sentimentData, isLoading, error }: SentimentPieChartProps) {
  const chartData = useMemo(() => {
    if (!sentimentData) return null;
    return normalizeSentimentData(sentimentData);
  }, [sentimentData]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full text-slate-500" role="status" aria-label="Loading sentiment data">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-3 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm">Analyzing sentiment data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center h-full text-slate-500" role="alert">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-3 text-red-400 opacity-70" />
          <p className="text-sm text-red-400">{error}</p>
          <p className="text-xs mt-1">Unable to display sentiment data. Please try analyzing another video.</p>
        </div>
      </div>
    );
  }

  // No data state
  if (!chartData || chartData.every(d => d.value === 0)) {
    return (
      <div className="flex items-center justify-center h-full text-slate-500">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p className="text-sm">No sentiment data available</p>
          <p className="text-xs mt-1">Sentiment data is currently processing or unavailable</p>
        </div>
      </div>
    );
  }

  const filteredData = chartData.filter(item => item.value > 0);

  return (
    <div className="w-full h-full" role="region" aria-label="Sentiment Distribution Chart">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <defs>
            <filter id="glass-3d" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="15" stdDeviation="15" floodColor="#000000" floodOpacity="0.4" result="shadow1" />
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" result="shadow2" />
              <feMerge result="shadows">
                <feMergeNode in="shadow1" />
                <feMergeNode in="shadow2" />
              </feMerge>

              <feComponentTransfer in="SourceAlpha" result="alpha1">
                <feFuncA type="linear" slope="0.8" />
              </feComponentTransfer>
              <feGaussianBlur in="alpha1" stdDeviation="2" result="blur1" />
              <feOffset in="blur1" dy="2" dx="0" result="offset1" />
              <feComposite in="SourceAlpha" in2="offset1" operator="arithmetic" k2="-1" k3="1" result="diff1" />
              <feFlood floodColor="white" floodOpacity="0.6" result="flood1" />
              <feComposite in="flood1" in2="diff1" operator="in" result="highlight" />

              <feMerge>
                <feMergeNode in="shadows" />
                <feMergeNode in="SourceGraphic" />
                <feMergeNode in="highlight" />
              </feMerge>
            </filter>

            {chartData.map((cat, i) => (
              <linearGradient key={`grad-${i}`} id={`grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={cat.light} stopOpacity={0.9} />
                <stop offset="100%" stopColor={cat.dark} stopOpacity={0.95} />
              </linearGradient>
            ))}
          </defs>

          {/* Bottom cylinder piece for solid 3D depth */}
          <Pie
            data={filteredData}
            cx="50%"
            cy="54%"
            outerRadius={140}
            paddingAngle={4}
            cornerRadius={8}
            dataKey="value"
            stroke="none"
            isAnimationActive={true}
          >
            {filteredData.map((entry, index) => (
              <Cell key={`cell-shadow-${index}`} fill={entry.dark} />
            ))}
          </Pie>

          {/* Top glass piece */}
          <Pie
            data={filteredData}
            cx="50%"
            cy="50%"
            outerRadius={140}
            paddingAngle={4}
            cornerRadius={8}
            labelLine={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1.5 }}
            label={(props: any) => {
              const { name, value, cx, cy, midAngle, outerRadius } = props;
              const RADIAN = Math.PI / 180;
              const radius = outerRadius + 18;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              const colorProps = chartData.find(c => c.name === name);
              return (
                <g textAnchor={x > cx ? 'start' : 'end'}>
                  <text x={x} y={y - 8} fill={colorProps?.light || '#fff'} className="font-bold text-sm tracking-wide drop-shadow-md">
                    {name}
                  </text>
                  <text x={x} y={y + 12} fill="#94a3b8" className="text-xs font-semibold">
                    {value}%
                  </text>
                </g>
              );
            }}
            dataKey="value"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth={1}
            filter="url(#glass-3d)"
            aria-label="Sentiment distribution glass pie chart"
          >
            {filteredData.map((entry, index) => {
              const originalIndex = chartData.findIndex(c => c.name === entry.name);
              return <Cell key={`cell-${index}`} fill={`url(#grad-${originalIndex})`} />;
            })}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            }}
            itemStyle={{ color: '#f8fafc', fontSize: '15px', fontWeight: 'bold' }}
            formatter={(value: number | undefined, name: string | undefined) => [`${value || 0}%`, name || '']}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
