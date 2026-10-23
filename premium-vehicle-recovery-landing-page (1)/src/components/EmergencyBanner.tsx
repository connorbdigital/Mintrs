import React from 'react';
import { Phone, ShieldCheck, Radio } from 'lucide-react';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-medium text-xs sm:text-sm py-2 px-3 sm:px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 bg-black/20 text-slate-950 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[11px]">
            <Radio className="w-3.5 h-3.5 text-black beacon-flash" />
            24/7 Immediate Dispatch
          </span>
          <span className="hidden md:inline text-black/60">•</span>
          <span className="font-semibold">
            Avg. Arrival <span className="font-extrabold underline decoration-black/40">25–35 Mins</span> across Whalley, Clitheroe & North West UK
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold">
          <div className="hidden lg:flex items-center gap-1.5 opacity-90">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>£5M Insured • PAS 43 Standard</span>
          </div>

          <a
            href="tel:08009992470"
            className="inline-flex items-center gap-1.5 bg-slate-950 text-amber-400 hover:bg-slate-900 px-3 py-1 rounded-full text-xs font-extrabold shadow-sm transition-all hover:scale-105"
          >
            <Phone className="w-3 h-3 text-amber-400 animate-pulse" />
            <span>0800 999 2470</span>
          </a>
        </div>
      </div>
    </div>
  );
};
