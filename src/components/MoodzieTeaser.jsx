import React from 'react';
import { Image as ImageIcon, Upload, Sparkles, ArrowRight } from 'lucide-react';

const MoodzieTeaser = () => {
  return (
    <section id="moodzie" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 text-sm text-white/70">
              <Sparkles className="h-4 w-4" />
              Meet Moodzie
            </div>
            <h3
              className="mt-2 text-3xl md:text-4xl tracking-tight"
              style={{ fontFamily: '"Bebas Neue", ui-sans-serif, system-ui' }}
            >
              AI moodboards from your inspirations
            </h3>
            <p className="mt-2 text-white/70 max-w-xl" style={{ fontFamily: '"Open Sans", ui-sans-serif, system-ui' }}>
              Upload a few images and a short brief. Moodzie blends styles and returns a customized moodboard preview you can iterate on.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="h-28 rounded-xl border border-dashed border-white/15 bg-white/[0.03] hover:bg-white/[0.06] inline-flex flex-col items-center justify-center gap-2 transition">
                <Upload className="h-5 w-5" />
                <span className="text-xs text-white/70">Upload</span>
              </button>
              <button className="h-28 rounded-xl border border-dashed border-white/15 bg-white/[0.03] hover:bg-white/[0.06] inline-flex flex-col items-center justify-center gap-2 transition">
                <ImageIcon className="h-5 w-5" />
                <span className="text-xs text-white/70">Inspo</span>
              </button>
              <button className="h-28 rounded-xl border border-dashed border-white/15 bg-white/[0.03] hover:bg-white/[0.06] inline-flex flex-col items-center justify-center gap-2 transition">
                <Sparkles className="h-5 w-5" />
                <span className="text-xs text-white/70">Prompt</span>
              </button>
            </div>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition"
              style={{ backgroundColor: '#6FAF92', color: '#0b1110' }}
            >
              Try Moodzie
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="order-1 md:order-2">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/[0.04] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop"
                  alt="Moodboard preview"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-3 text-sm text-white/70">
                Example preview moodboard generated from 3 images + brief.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodzieTeaser;
