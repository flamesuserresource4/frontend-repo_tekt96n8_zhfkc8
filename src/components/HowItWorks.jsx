import React from 'react';
import { Upload, Sparkles, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Share your vibe',
    desc: 'Tell us your room, budget, and style inspirations. Keep it simple—links or images work.',
    icon: Upload,
  },
  {
    title: 'Moodzie crafts ideas',
    desc: 'Our AI blends your inputs into a tailored moodboard you can tweak and iterate on.',
    icon: Sparkles,
  },
  {
    title: 'Match with vendors',
    desc: 'We shortlist verified, faceless vendors who fit your brief. Request quotes when ready.',
    icon: CheckCircle2,
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl tracking-tight"
          style={{ fontFamily: '"Bebas Neue", ui-sans-serif, system-ui' }}
        >
          How Homezie Works
        </h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          From your inspiration to a ready-to-execute plan—fast, friendly, and beautifully curated.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition p-6"
            >
              <div className="h-11 w-11 rounded-xl flex items-center justify-center"
                   style={{ backgroundColor: '#6A469C20', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Icon className="h-5 w-5" style={{ color: '#6A469C' }} />
              </div>
              <h3 className="mt-4 text-xl font-semibold" style={{ fontFamily: '"Open Sans", ui-sans-serif, system-ui' }}>
                {title}
              </h3>
              <p className="mt-2 text-white/70" style={{ fontFamily: '"Open Sans", ui-sans-serif, system-ui' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
