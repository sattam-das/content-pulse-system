import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Youtube, ArrowUpRight, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { cn } from '../lib/utils';
import { Navbar } from './Navbar';

interface InputScreenProps {
  onSubmit: (url: string) => void;
  isSubmitting: boolean;
}

const YOUTUBE_URL_REGEX = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)[\w-]{11}/;

const FloatingWidget = ({ title, value, percentage, className }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={cn("glass-card p-4 w-48 absolute z-20 pointer-events-none", className)}
  >
    <div className="flex justify-between items-start mb-4">
      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{title}</span>
      <div className="p-1.5 rounded-full bg-white/5 border border-white/10">
        <ArrowUpRight className="w-3 h-3 text-slate-400" />
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-lg font-bold text-white">{value}</span>
      {percentage && (
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: percentage }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-indigo-500 to-pink-500" 
          />
        </div>
      )}
    </div>
  </motion.div>
);

export default function InputScreen({ onSubmit, isSubmitting }: InputScreenProps) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    if (!YOUTUBE_URL_REGEX.test(url.trim())) {
      setError('Please enter a valid YouTube video URL');
      return;
    }

    onSubmit(url.trim());
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white relative flex flex-col">
      <Navbar />
      
      {/* Hero Content */}
      <div id="hero" className="relative z-10 flex flex-col items-center justify-center px-6 pt-40 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
            Elevate Your <br />
            <span className="text-slate-300">Content Strategy</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Unlock your audience potential with AI-powered comment analysis, 
            powered by ContentPulse.
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-[#0f172a] rounded-full p-1.5 border border-white/10">
              <div className="pl-6 flex items-center gap-3 flex-1">
                <Youtube className="w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Paste YouTube URL here..."
                  className="bg-transparent border-none outline-none text-white w-full placeholder:text-slate-600 py-3"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (error) setError('');
                  }}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Analyze Now
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -bottom-8 left-6 text-red-400 text-xs"
              >
                {error}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Deliverables Section */}
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-400">4.9 on TrustPilot</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Understand your <br />
              <span className="gradient-text">Audience Using AI</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
              Packed with deep sentiment analysis, automated question extraction, 
              and actionable timeline insights. Discover what your viewers really 
              want — 10x faster than manual reading.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-all">
                Get Started — For Free!
              </button>
              <button className="px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-all">
                Book A Demo
              </button>
            </div>
          </motion.div>

          {/* Visual Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            {/* Widgets */}
            <FloatingWidget 
              title="Engagement Rate" 
              value="96%" 
              percentage="96%" 
              className="-top-12 -left-24 hidden xl:block shadow-2xl border-white/20"
            />
            <FloatingWidget 
              title="Top Insight" 
              value="Feature Request" 
              className="bottom-0 -right-24 hidden xl:block shadow-2xl border-white/20"
            />
            {/* Main "Phone" Mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[560px] glass-card overflow-hidden border-white/20 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/audience/600/1200" 
                alt="Audience" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-widest">Top Commenter</div>
                <div className="text-lg font-bold text-white mb-2">Sarah Jenkins</div>
                <button className="w-full py-2 bg-white text-black rounded-lg text-sm font-bold">View Profile</button>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-[10%] -right-4 glass-card p-4 w-48 shadow-xl border-white/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sentiment</span>
              </div>
              <div className="text-sm font-bold text-white">92% Positive Feedback</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-[20%] -left-12 glass-card p-4 w-56 shadow-xl border-white/20"
            >
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Audience Tags</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded bg-indigo-500/20 text-indigo-400 text-[10px] font-bold border border-indigo-500/30">+ Feature Request</span>
                <span className="px-2 py-1 rounded bg-pink-500/20 text-pink-400 text-[10px] font-bold border border-pink-500/30">+ Bug Report</span>
                <span className="px-2 py-1 rounded bg-slate-500/20 text-slate-400 text-[10px] font-bold border border-slate-500/30">+ Praise</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-[40%] -left-8 glass-card p-3 rounded-full shadow-xl border-white/20"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="w-3 h-3 text-pink-500 fill-current" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <div className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Trusted by 500+ Content Creators</div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale brightness-200">
            {['HEIRESS', 'TOZO', 'HELLBABES', 'COCOKIND', 'OXYFRESH', 'DOT & KEY'].map((logo) => (
              <span key={logo} className="text-xl font-black tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: '92%', label: 'ACCURACY IN SENTIMENT', sub: 'POWERED BY CUSTOM LLMS' },
            { value: '3.5x', label: 'FASTER ANALYSIS', sub: 'THAN MANUAL MODERATION' },
            { value: '60%', label: 'INCREASE IN ENGAGEMENT', sub: 'THROUGH ACTIONABLE INSIGHTS' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-12 text-center group hover:border-indigo-500/50 transition-all"
            >
              <div className="text-6xl font-bold text-white mb-6 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
              <div className="text-sm font-bold text-slate-300 tracking-widest mb-2">{stat.label}</div>
              <div className="text-[10px] font-bold text-slate-500 tracking-widest">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="relative z-10 px-6 py-32 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 border-white/20 bg-gradient-to-b from-white/5 to-transparent shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">What ContentPulse Does</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                emoji: '🔍',
                title: 'Intelligent Pattern Detection',
                desc: 'Our AI analyzes every comment to identify repeated questions, confusion points, and engagement trends—saving you hours of manual reading.',
              },
              {
                emoji: '💬',
                title: 'Automatic Question Grouping',
                desc: 'Similar questions get clustered together with frequency counts. See "Pricing question - Asked 18 times" instead of hunting through individual comments.',
              },
              {
                emoji: '⚠️',
                title: 'Confusion Spotting',
                desc: 'Pinpoint exactly where viewers are struggling. "15 people confused at timestamp 3:42" tells you precisely what needs clarification.',
              },
              {
                emoji: '📊',
                title: 'Visual Timeline Mapping',
                desc: 'Interactive timeline shows comment activity across your content. Identify which moments spark engagement and which cause viewers to disengage.',
              },
              {
                emoji: '💡',
                title: 'Plain-English Insights',
                desc: 'No complex analytics dashboards. Get simple, actionable recommendations like "Pin a comment addressing the installation question—12 people asking."',
              },
              {
                emoji: '⚡',
                title: 'Real-Time Speed',
                desc: 'Complete comment analysis in under 15 seconds. Engage with your audience while your content is still fresh and trending.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all group"
              >
                <div className="text-3xl mb-4">{feature.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-all shadow-xl shadow-white/10 active:scale-95 text-lg"
            >
              Dive IN!!!
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 pt-20 pb-12 max-w-7xl mx-auto w-full">
        <div className="glass-card p-12 border-white/10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">ContentPulse</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                ContentPulse empowers creators to transform raw audience data into clear, 
                compelling insights — making audience understanding easier to share, 
                understand, and act on.
              </p>
              <div className="flex items-center gap-5 text-slate-500">
                <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-bold text-sm mb-6">Product</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-6">Resources</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-6">Company</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
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

        {/* Large Background Branding */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none whitespace-nowrap">
          ContentPulse
        </div>
      </footer>
    </div>
  );
}
