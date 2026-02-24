import { Sparkles, ChevronDown } from "lucide-react";

export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center">
        <Sparkles className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-bold tracking-tight text-white">
        ContentPulse
      </span>
    </div>

    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
      <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">
        About
      </a>
      <a href="#" className="hover:text-white transition-colors">
        FAQ
      </a>
      <a
        href="#"
        className="hover:text-white transition-colors flex items-center gap-1"
      >
        ENG <ChevronDown className="w-4 h-4" />
      </a>
    </div>
  </nav>
);
