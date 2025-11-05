import React from 'react';
import { ArrowRight, Upload, Image as ImageIcon, Sparkles } from 'lucide-react';

const CTAQuote = () => {
  return (
    <section id="quote" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="text-sm uppercase tracking-wider text-white/60">Get Quote</div>
            <h3 className="mt-1 text-2xl font-semibold">Connect with a verified vendor</h3>
            <p className="mt-2 text-white/70">Answer a few questions and we'll shortlist the right partners. Vendors remain faceless until you request a quote.</p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Name" />
                <input type="email" className="w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" />
              </div>
              <input className="w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="City / Area" />
              <select className="w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 text-white/80">
                <option className="text-black">Renovation</option>
                <option className="text-black">New Build</option>
                <option className="text-black">Single Room</option>
              </select>
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black hover:bg-white/90 px-5 py-3 font-medium transition">
                Request Shortlist
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-3 text-xs text-white/50">No spam. We'll introduce up to 3 best-fit vendors.</p>
          </div>

          <div id="moodzie" className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6">
            <div className="inline-flex items-center gap-2 text-sm text-white/70">
              <Sparkles className="h-4 w-4" />
              Meet Moodzie
            </div>
            <h3 className="mt-1 text-2xl font-semibold">AI moodboards from your ideas</h3>
            <p className="mt-2 text-white/70">Drop a few images and a brief. Moodzie blends styles and outputs a tailored moodboard you can iterate on.</p>

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

            <button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 font-medium transition">
              Generate Moodboard
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAQuote;
