import React from 'react';
import { Sparkles, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 group">
          <div className="relative">
            <Sparkles className="h-5 w-5 text-white/90 group-hover:text-white transition" />
          </div>
          <span className="text-lg font-semibold tracking-wide">Homezie</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#themes" className="hover:text-white transition">Themes</a>
          <a href="#moodzie" className="hover:text-white transition">Moodzie</a>
          <a href="#quote" className="hover:text-white transition">Get Quote</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-2 text-sm transition">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-white/90 px-4 py-2 text-sm font-medium transition">
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
