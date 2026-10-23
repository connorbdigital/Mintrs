import React from 'react';
import { Phone, MapPin, Zap, Shield, ArrowRight, Clock } from 'lucide-react';
import { MintrsLogo } from './MintrsLogo';

interface CallToActionProps {
  onOpenBooking: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 relative bg-[#090D16] border-t border-white/10 overflow-hidden">
      {/* Background Graphic Gradients */}
      <div className="absolute inset-0 bg-radial-hero opacity-70 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Brand Logo & Subtitle */}
        <div className="flex justify-center mb-6">
          <MintrsLogo variant="dark" size="lg" showSubtitle={true} />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-radar" />
          Immediate 24/7 Roadside & Commercial Dispatch
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          Need Vehicle Recovery Now?{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
            Our Recovery Truck Is Ready To Roll.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Operating across <strong className="text-white">Whalley, Clitheroe, the Ribble Valley, M6/M65 motorways, North West UK</strong> and <strong className="text-white">nationwide</strong>. Commercial fleets and private motorists trust Mintrs Ltd for speed, safety, and fixed transparent rates.
        </p>

        {/* Dual Primary Conversion Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-12">
          <a
            href="tel:08009992470"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base px-8 py-4 rounded-xl shadow-2xl shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-black/15 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4 text-slate-950" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-black tracking-wider block opacity-80 leading-none">
                24/7 Freephone Dispatch
              </span>
              <span className="text-lg font-black leading-tight">0800 999 2470</span>
            </div>
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-amber-400/50 font-bold text-sm px-6 py-4 rounded-xl transition-all shadow-xl cursor-pointer"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Book Online / Request Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Local Telephone Desk Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400" />
            Whalley & Clitheroe Desk: <a href="tel:01200407999" className="font-bold text-white hover:text-amber-400">01200 407 999</a>
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            Average North West Arrival: <strong className="text-white">25–35 Mins</strong>
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-amber-400" />
            Transit Insurance: <strong className="text-white">£5,000,000 Cover</strong>
          </span>
        </div>

      </div>
    </section>
  );
};
