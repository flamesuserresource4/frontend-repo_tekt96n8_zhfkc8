import React from 'react';
import { Paintbrush } from 'lucide-react';

const themes = [
  {
    title: 'Modern Luxe',
    subtitle: 'Marble, brass, and clean geometry',
    img: 'https://images.unsplash.com/photo-1618278955147-7fff129e34a5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Warm Minimal',
    subtitle: 'Soft textures and calming tones',
    img: 'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Urban Contemporary',
    subtitle: 'Concrete, metal, statement lighting',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Scandinavian Calm',
    subtitle: 'Light woods, airy and functional',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
  },
];

const ThemesShowcase = () => {
  return (
    <section id="themes" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Curated Themes</h2>
            <p className="text-white/70 mt-2">A premium selection designed for real homes.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-white/70">
            <Paintbrush className="h-5 w-5" />
            <span className="text-sm">Style-first browsing</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((t) => (
            <article key={t.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={t.img} alt={t.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{t.title}</h3>
                <p className="text-sm text-white/70 mt-1">{t.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesShowcase;
