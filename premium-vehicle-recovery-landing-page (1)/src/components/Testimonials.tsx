import React from 'react';
import { testimonialsData } from '../data/mockData';
import { Star, CheckCircle2, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative bg-[#090D16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Client Trust & Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Trusted Across the Ribble Valley & Beyond
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Read how Mintrs Ltd has rescued commercial courier fleets, families on dark country lanes, and prestige car owners.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl">
              5.0
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-white">480+ Verified Recoveries</p>
              <p className="text-[11px] text-slate-400">100% Recommended in Lancashire</p>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 shadow-xl relative"
            >
              <div>
                {/* Header with stars and location */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {item.location}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
                <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  {item.vehicle}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
