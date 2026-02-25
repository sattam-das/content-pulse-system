import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Navbar } from './Navbar';

interface FAQPageProps {
  onBack: () => void;
  onNavigate: (screen: string) => void;
}

const faqs = [
  {
    question: 'What is ContentPulse?',
    answer:
      'ContentPulse is an AI-powered platform that analyzes YouTube comments to provide content creators with actionable insights. It uses natural language processing and sentiment analysis to identify common questions, confusion points, and audience sentiment trends — helping you understand what your viewers really think.',
  },
  {
    question: 'How does the comment analysis work?',
    answer:
      'Simply paste your YouTube video URL into ContentPulse. Our system fetches all available comments, processes them through our custom AI models, and delivers a comprehensive dashboard with sentiment trends, frequently asked questions, confusion hotspots, and personalized recommendations — all in under 15 seconds.',
  },
  {
    question: 'Is ContentPulse free to use?',
    answer:
      'Yes! ContentPulse is currently free to use during our beta phase. We plan to introduce premium tiers in the future with advanced features like multi-video analysis, historical trend tracking, and competitor benchmarking. Early adopters will receive special pricing.',
  },
  {
    question: 'What types of videos does ContentPulse support?',
    answer:
      'ContentPulse works with any public YouTube video that has comments enabled. Whether you create tutorials, vlogs, product reviews, podcasts, or educational content — our AI adapts to understand the context and deliver relevant insights for your niche.',
  },
  {
    question: 'How accurate is the sentiment analysis?',
    answer:
      'Our sentiment analysis achieves 92% accuracy, powered by custom large language models fine-tuned specifically for YouTube comment patterns. The AI understands sarcasm, slang, emojis, and multi-language comments to provide reliable sentiment classification.',
  },
  {
    question: 'Can I analyze videos from other platforms?',
    answer:
      'Currently, ContentPulse focuses exclusively on YouTube comments to deliver the best possible experience. We are actively working on expanding support to other platforms including Instagram, TikTok, and Twitter. Stay tuned for updates!',
  },
  {
    question: 'How do I interpret the results dashboard?',
    answer:
      'The results dashboard is designed to be intuitive. The Sentiment Trend chart shows emotional responses over time. Common Questions highlights what your audience is asking most. Confusion Points pinpoint where viewers are struggling. The Audience Health score gives you an overall engagement rating. Each section includes actionable tips.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. ContentPulse only accesses publicly available YouTube comments through official APIs. We do not store your video data or comments beyond the analysis session. All data transmission is encrypted with TLS 1.3, and we follow industry-standard security practices.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-white/5 last:border-none"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 leading-relaxed pb-6 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage({ onBack, onNavigate }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white relative flex flex-col">
      <Navbar currentScreen="faq" onNavigate={onNavigate} />

      <div className="relative z-10 px-6 pt-32 pb-20 max-w-4xl mx-auto w-full">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-4 block">Support</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Frequently Asked <br />
            <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to know about ContentPulse. Can't find what you're looking for? Reach out to our team.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 border-white/10"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-10 border-white/10 bg-gradient-to-b from-indigo-500/5 to-transparent">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-slate-400 mb-6">Our team is here to help you get the most out of ContentPulse.</p>
            <button className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-all">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
