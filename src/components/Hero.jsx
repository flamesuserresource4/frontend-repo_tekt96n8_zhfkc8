import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 pt-32 md:pt-36">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Curated interior design, without the noise
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl">
              Homezie connects you with verified, faceless design vendors. Explore premium themes, upload inspirations, and let Moodzie craft a personalized moodboard.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-white/90 px-6 py-3 font-medium transition">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#moodzie" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 font-medium transition">
                Try Moodzie
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
              <div className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Verified Vendors
              </div>
              <div className="inline-flex items-center gap-2">
                <Star className="h-4 w-4" />
                Curated Aesthetic
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
