import { Sparkles, ChevronDown } from "lucide-react";

interface NavbarProps {
  currentScreen?: string;
  onNavigate?: (screen: string) => void;
}

export const Navbar = ({ currentScreen = 'input', onNavigate }: NavbarProps) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => onNavigate?.('input')}
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center">
        <Sparkles className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-bold tracking-tight text-white">
        ContentPulse
      </span>
    </div>

    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
      {currentScreen !== 'input' && currentScreen !== 'loading' && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate?.('input');
          }}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Home
        </a>
      )}
      {currentScreen !== 'results' && currentScreen !== 'about' && currentScreen !== 'faq' && (
        <a
          href="#features"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Features
        </a>
      )}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onNavigate?.('about');
        }}
        className="hover:text-white transition-colors cursor-pointer"
      >
        About
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onNavigate?.('faq');
        }}
        className="hover:text-white transition-colors cursor-pointer"
      >
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
