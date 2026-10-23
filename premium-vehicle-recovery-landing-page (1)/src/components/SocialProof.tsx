import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const stats = [
    { number: '15–28m', label: 'Whalley & Clitheroe ETA', subtext: 'A59 Corridor Rapid Units' },
    { number: '24/7/365', label: 'Continuous Operation', subtext: 'Day, Night & Bank Holidays' },
    { number: '£5,000,000', label: 'Goods in Transit Cover', subtext: 'Full Motor Trade Comprehensive' },
    { number: '5.0 ★', label: 'Google Verified Rating', subtext: 'Over 480+ Ribble Valley & NW Rescues' },
  ];

  const trustBadges = [
    'PAS 43 Roadside Certified',
    'IVR (Institute of Vehicle Recovery) Trained',
    'EV & Hybrid High-Voltage Qualified',
    'Commercial Fleet SLAs Available',
    'Lancashire & North West Constabulary Compliant',
  ];

  return (
    <section className="relative z-20 py-10 border-y border-white/10 bg-[#0B0F1A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 pb-8 border-b border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-400">
                {stat.number}
              </span>
              <span className="text-sm font-bold text-white mt-1">{stat.label}</span>
              <span className="text-xs text-slate-400">{stat.subtext}</span>
            </div>
          ))}
        </div>

        {/* Trust Badges & Verified Review Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#090D16] bg-amber-500/20 flex items-center justify-center text-xs font-bold text-amber-300">
                  ★
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">5.0 / 5.0</span>
              </div>
              <p className="text-xs text-slate-400">
                Top-rated vehicle recovery in <span className="text-amber-400 font-semibold">Whalley, Clitheroe & Ribble Valley</span>
              </p>
            </div>
          </div>

          {/* Badges marquee / flex */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
            {trustBadges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
