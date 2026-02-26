import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Navbar } from './Navbar';

interface AboutPageProps {
  onBack: () => void;
  onNavigate: (screen: string) => void;
}

export default function AboutPage({ onBack, onNavigate }: AboutPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white relative flex flex-col">
      <Navbar currentScreen="about" onNavigate={onNavigate} />

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
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em]">About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            About <span className="gradient-text">ContentPulse</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="glass-card p-10 md:p-14 border-white/10">
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                ContentPulse is an advanced AI-powered platform designed to revolutionize how content creators 
                understand and engage with their audience. Built with cutting-edge natural language processing 
                and sentiment analysis technologies, ContentPulse transforms raw YouTube comment data into 
                actionable insights that drive content strategy and audience growth.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">The Spark</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                It started with a simple observation. While casually scrolling through a YouTube video's comment section, our team leader noticed something frustrating: hundreds of comments, dozens asking the same questions, creators clearly overwhelmed trying to keep up. That's when the idea clicked—what if AI could read all those comments and tell creators exactly what their audience was saying?
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                We pitched it to our team, aligned it with the AWS hackathon track, and ContentPulse was born.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                We believe every creator deserves to understand their audience deeply—not just the top 1% with dedicated teams and expensive analytics tools.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Small creators shouldn't have to choose between making great content and managing their community. They shouldn't spend hours reading comments when they could be creating. And they definitely shouldn't miss important feedback because it's buried under hundreds of reactions.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                ContentPulse democratizes audience insights. We give independent creators the same understanding of their audience that big channels get from their analytics teams—except we do it in 15 seconds, not 15 hours.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-slate-300 font-semibold mb-4">Simple. Fast. Actionable.</p>
              <ol className="list-decimal list-inside text-slate-400 leading-relaxed mb-4 space-y-2">
                <li>You paste your YouTube video URL into ContentPulse</li>
                <li>Our AI reads every comment in seconds—finding patterns humans would take hours to spot</li>
                <li>You get plain-English insights: "18 people asking about pricing," "15 viewers confused at 3:42," "your explanation at 6:15 is resonating"</li>
                <li>You take action while your content is trending—pin clarifications, answer common questions, engage meaningfully</li>
              </ol>
              <p className="text-slate-400 leading-relaxed mb-8">
                No complex dashboards. No overwhelming data. Just: "Here's what your audience is saying, here's what you should do."
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Our Technology</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                ContentPulse is built on a modern, scalable architecture, leveraging cutting-edge AI and robust cloud infrastructure:
              </p>
              <ul className="list-disc list-inside text-slate-400 leading-relaxed mb-4 space-y-2">
                <li><span className="text-indigo-400 font-semibold">Groq (Llama 3.1)</span> powers our ultra-fast natural language understanding, processing thousands of comments in seconds to detect patterns, group similar questions, and identify confusion points</li>
                <li><span className="text-indigo-400 font-semibold">YouTube Data API</span> extracts deep structured comment data instantly directly from the source</li>
                <li><span className="text-indigo-400 font-semibold">AWS Lambda</span> handles serverless processing on the backend, scaling instantly whether a video has 50 comments or 2,500</li>
                <li><span className="text-indigo-400 font-semibold">Amazon DynamoDB</span> stores and structures your audience insights and extracted comments for lightning-fast retrieval</li>
                <li><span className="text-indigo-400 font-semibold">AWS Amplify</span> completely hosts and delivers our seamless, responsive React/Vite web experience that works anywhere</li>
                <li><span className="text-indigo-400 font-semibold">AWS API Gateway</span> securely orchestrates the entire workflow between the frontend and the cloud</li>
              </ul>
              <p className="text-slate-400 leading-relaxed mb-8">
                This powerful combination of AWS serverless infrastructure and Groq's low-latency AI inference allows us to deliver enterprise-grade analytics in seconds.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">The Team</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We're four first-year B.Tech AI & ML students who learned AWS on the fly to build something meaningful.
              </p>
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-white font-bold">Sattam Das</div>
                  <div className="text-indigo-400 text-sm font-semibold mb-1">Team Leader, Lead Architect & Full-Stack AI Developer</div>
                  <p className="text-slate-500 text-sm">Leads the entire technical development from architecture design to deployment. Built and integrated the AI models, developed both frontend and backend systems, and orchestrated the AWS infrastructure that powers ContentPulse.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-white font-bold">Saptarshi Mukhopadhyay</div>
                  <div className="text-indigo-400 text-sm font-semibold mb-1">Research & Development Lead, Supporting AI Developer</div>
                  <p className="text-slate-500 text-sm">Drives innovation by continuously exploring new ideas and gathering insights. Supports AI development and ensures the platform stays ahead with cutting-edge features and improvements.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-white font-bold">Swarnavo Bagchi</div>
                  <div className="text-indigo-400 text-sm font-semibold mb-1">Project Coordinator & Operations Manager</div>
                  <p className="text-slate-500 text-sm">Keeps the team synchronized and on track. Manages timelines, coordinates workflows, and ensures every component comes together seamlessly from concept to deployment.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-white font-bold">Priyangshu Ghorai</div>
                  <div className="text-indigo-400 text-sm font-semibold mb-1">Quality Assurance & User Testing Lead</div>
                  <p className="text-slate-500 text-sm">Ensures ContentPulse delivers a flawless user experience. Conducts rigorous testing, identifies issues before they reach users, and validates that every feature works as intended.</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our edge? We're building this as creators and students ourselves—we understand the overwhelm of managing feedback while trying to learn and create. We have hands-on AI/ML experience but approached AWS as complete beginners for this hackathon, learning every service as we built. That beginner's mindset helped us keep ContentPulse simple and focused on real problems, not just technical complexity.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Why This Matters</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Content creation shouldn't be overwhelming. Community engagement shouldn't require a team.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Right now, only creators with resources can afford tools that truly understand their audience. Everyone else is stuck manually reading hundreds of comments, hoping they catch the important stuff. They miss recurring questions. They don't notice patterns. They engage hours too late when the algorithm has already moved on.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                We're changing that. ContentPulse levels the playing field—giving every creator, regardless of size or budget, the insights they need to build stronger connections with their audience.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Looking Ahead</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                This hackathon is just the beginning.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                We're committed to turning ContentPulse into a full-scale platform that creators actually use every day. Our roadmap includes:
              </p>
              <ul className="list-disc list-inside text-slate-400 leading-relaxed mb-4 space-y-2">
                <li><span className="text-white font-semibold">Multi-platform support</span> — Expanding beyond YouTube to Instagram, TikTok, LinkedIn, and more</li>
                <li><span className="text-white font-semibold">Predictive analytics</span> — Helping creators understand what content will resonate before they publish</li>
                <li><span className="text-white font-semibold">Collaborative features</span> — Tools for teams and multi-creator collaborations</li>
                <li><span className="text-white font-semibold">Advanced pattern detection</span> — Identifying trends across your entire content library</li>
                <li><span className="text-white font-semibold">Creator community</span> — Connecting creators who face similar challenges</li>
              </ul>
              <p className="text-slate-400 leading-relaxed mb-4">
                But more importantly, we're listening. As we grow, creators will shape what ContentPulse becomes. This is a tool built by people who understand the creator struggle, for people living it every day.
              </p>
              <p className="text-slate-300 font-semibold mb-8">
                We're first-year students who saw a problem and decided to build the solution. We're just getting started.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card p-10 border-white/10 bg-gradient-to-b from-indigo-500/5 to-transparent text-center">
            <p className="text-slate-400 mb-4">Want to see what your audience is really saying?</p>
            <button
              onClick={() => { window.scrollTo(0, 0); onBack(); }}
              className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-all"
            >
              Try ContentPulse Today
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
