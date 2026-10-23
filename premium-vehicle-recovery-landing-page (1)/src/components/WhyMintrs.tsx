import React from 'react';
import {
  Check,
  X,
  Clock,
  ShieldCheck,
  PhoneCall,
  Sparkles,
} from 'lucide-react';

interface WhyMintrsProps {
  onOpenBooking: () => void;
}

export const WhyMintrs: React.FC<WhyMintrsProps> = ({ onOpenBooking }) => {
  const comparisonItems = [
    {
      feature: 'Average Arrival Time (Whalley / Clitheroe)',
      mintrs: '15 – 25 Minutes (Local Dispatch)',
      traditional: '2 – 4+ Hours (Subcontracted queue)',
      advantage: true,
    },
    {
      feature: 'Direct Driver Contact',
      mintrs: 'Yes – Live phone & GPS tracking with your driver',
      traditional: 'No – Call center automated bots & endless hold music',
      advantage: true,
    },
    {
      feature: 'Commercial Fleet Downtime SLA',
      mintrs: 'Dedicated B2B Priority Queue & Fast Delivery Routing',
      traditional: 'Standard consumer queue; business loses work day',
      advantage: true,
    },
    {
      feature: 'Prestige / Low-Approach Equipment',
      mintrs: '4° Hydraulic Tilt-Slide with soft wheel-chocks',
      traditional: 'Generic tow dollies or steep angle ramps',
      advantage: true,
    },
    {
      feature: 'Pricing Model',
      mintrs: 'Transparent, upfront fixed rate – zero hidden add-ons',
      traditional: 'Expensive monthly subscriptions or surprise penalty fees',
      advantage: true,
    },
    {
      feature: 'Goods in Transit Insurance Cover',
      mintrs: '£5,000,000 Comprehensive Commercial Policy',
      traditional: 'Often limited to basic vehicle book value',
      advantage: true,
    },
    {
      feature: 'Nationwide Long-Distance Flexibility',
      mintrs: 'Immediate single-truck transport to anywhere in the UK',
      traditional: 'Relay system with multiple depot handoffs',
      advantage: true,
    },
  ];

  return (
    <section id="why-mintrs" className="py-20 lg:py-28 relative bg-[#090D16] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" /> The Mintrs Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Why Motorists & Fleets Choose Mintrs Ltd
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Leading tech-enabled vehicle recovery built around rapid human response, state-of-the-art machinery, and complete operational transparency.
          </p>
        </div>

        {/* Feature Cards Grid (3 Core Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-amber-400/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Direct Local Fleet</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We own and operate our fleet right here in Lancashire. No middlemen, no waiting on third-party sub-contractors, just fast professional rescue.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-amber-400/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">£5M High-Limit Cover</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Whether transporting a family hatchback, an electric Tesla, or a brand new commercial van, every vehicle is safeguarded under £5,000,000 transit cover.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-amber-400/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <PhoneCall className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Real People, 24/7</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              When you call Mintrs Ltd, you speak directly to an experienced controller or on-duty driver ready to roll—not a foreign call centre queue.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-x-auto">
          <div className="min-w-[620px]">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <div>
                <h3 className="text-xl font-extrabold text-white">Mintrs Ltd vs Traditional Motor Clubs</h3>
                <p className="text-xs text-slate-400 mt-1">See how our direct dispatch model outperforms typical breakdown memberships</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold px-3 py-1 rounded-full">
                  Direct Response Guarantee
                </span>
              </div>
            </div>

            <table className="w-full text-left">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-slate-400 border-b border-white/10">
                  <th className="py-3 px-4 font-bold">Capability / Service Feature</th>
                  <th className="py-3 px-4 font-black text-amber-400 bg-amber-500/10 rounded-t-xl">
                    Mintrs Ltd (Direct Dispatch)
                  </th>
                  <th className="py-3 px-4 font-semibold text-slate-400">
                    Traditional National Clubs (AA / RAC)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white text-xs sm:text-sm">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 font-bold text-slate-100 bg-amber-500/5">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item.mintrs}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-400 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400/80 shrink-0" />
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Need immediate recovery or scheduled transport? Speak directly to our operations room.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="flex-1 sm:flex-initial bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-5 py-3 rounded-xl transition-all shadow-md cursor-pointer"
              >
                Request Instant Dispatch
              </button>
              <a
                href="tel:08009992470"
                className="flex-1 sm:flex-initial text-center bg-white/10 hover:bg-white/15 text-white font-bold text-xs px-4 py-3 rounded-xl border border-white/15 transition-all"
              >
                0800 999 2470
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
