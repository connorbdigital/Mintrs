import React from 'react';
import { MintrsLogo } from './MintrsLogo';
import { MapPin, Clock, ShieldCheck, CheckCircle2, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-white/10 text-slate-400 text-xs sm:text-sm pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <MintrsLogo variant="dark" size="md" showSubtitle={true} />
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm mt-3">
              Mintrs Ltd is the North West's premier 24-hour vehicle recovery and transport provider. Operating rapid-dispatch units across Whalley, Clitheroe, Lancashire, North West motorways, and delivering nationwide vehicle logistics.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Operating 24 Hours / 7 Days / 365 Days a Year</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>£5,000,000 Goods In Transit & £10M Public Liability</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Stationed in Ribble Valley & North West Motorway Network</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest mb-4">
              Recovery Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  24/7 Breakdown Recovery
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  Commercial Fleet Priority SLA
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Prestige & EV Tilt-Slide
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Accident & Heavy Winching
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Nationwide UK Transport
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Battery Boost & Roadside Triage
                </a>
              </li>
            </ul>
          </div>

          {/* Key Priority Locations */}
          <div>
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest mb-4">
              Priority Coverage
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#coverage" className="hover:text-amber-400 transition-colors">
                  Whalley & Billington (15m ETA)
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-amber-400 transition-colors">
                  Clitheroe & Barrow (15m ETA)
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-amber-400 transition-colors">
                  Ribble Valley Rural Villages
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-amber-400 transition-colors">
                  M65 Motorway (J1 to J14)
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-amber-400 transition-colors">
                  M6 Corridor (Preston / Lancs)
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-amber-400 transition-colors">
                  Nationwide UK Long-Haul
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Dispatch Lines */}
          <div>
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest mb-4">
              24/7 Operations Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Emergency 24/7 Freephone:</span>
                <a href="tel:08009992470" className="text-base font-extrabold text-amber-400 hover:text-amber-300">
                  0800 999 2470
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Whalley & Clitheroe Desk:</span>
                <a href="tel:01200407999" className="text-sm font-bold text-white hover:text-amber-400">
                  01200 407 999
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">WhatsApp Dispatch:</span>
                <a href="https://wa.me/447700900247" className="text-xs font-bold text-emerald-400 hover:underline">
                  07700 900 247
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Commercial Invoicing:</span>
                <a href="mailto:dispatch@mintrs.co.uk" className="text-xs text-slate-300 hover:text-white">
                  dispatch@mintrs.co.uk
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Accreditation Logos / Compliance strip */}
        <div className="py-6 border-y border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> PAS 43 Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> Institute of Vehicle Recovery
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> ISO 9001 Standards
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> EV High-Voltage Certified
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Mintrs Ltd. All rights reserved. Registered Company in England & Wales.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service & Carriage</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Commercial SLAs</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
