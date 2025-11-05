import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import MoodzieTeaser from './components/MoodzieTeaser.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: '"Open Sans", ui-sans-serif, system-ui' }}>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <MoodzieTeaser />
      </main>
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Homezie. Curated interior design, made effortless.</p>
          <div className="flex items-center gap-6">
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#moodzie" className="hover:text-white transition">Moodzie</a>
            <a href="#" className="hover:text-white transition">Get Quote</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
