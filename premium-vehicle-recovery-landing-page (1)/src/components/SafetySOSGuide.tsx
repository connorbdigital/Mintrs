import React, { useState } from 'react';
import {
  AlertTriangle,
  LifeBuoy,
  Phone,
} from 'lucide-react';

export const SafetySOSGuide: React.FC = () => {
  const [situation, setSituation] = useState<'motorway' | 'countryLane'>('motorway');

  return (
    <section className="py-16 lg:py-20 relative bg-[#0c1220] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-red-950/40 via-slate-900 to-amber-950/40 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-3">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" /> Breakdown Safety Guide
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Broken Down Right Now? Follow These Safety Steps
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                Your safety is paramount before our recovery truck arrives. Take immediate precautions based on your current location.
              </p>
            </div>

            {/* Situation Toggle */}
            <div className="flex items-center p-1 bg-black/50 border border-white/10 rounded-xl shrink-0">
              <button
                onClick={() => setSituation('motorway')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  situation === 'motorway'
                    ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🛣️ Motorway / Dual Carriageway
              </button>
              <button
                onClick={() => setSituation('countryLane')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  situation === 'countryLane'
                    ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🌲 Rural / Ribble Valley Lane
              </button>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {situation === 'motorway' ? (
              <>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-2">
                    Step 1: Hard Shoulder Exit
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">Exit via Passenger Door</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Switch on hazard warning lights immediately. Never exit via the driver door towards live traffic. All occupants should step over the safety barrier onto the embankment.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-2">
                    Step 2: Note Marker Post
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">Check Blue/White Posts</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Look for small marker posts along the verge (e.g. M65 A 14.2). This enables Mintrs dispatch to pinpoint your exact lane within seconds.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-2">
                    Step 3: Call Mintrs Dispatch
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">Wait Behind Barrier</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Call our emergency hotline on <strong className="text-amber-400">0800 999 2470</strong>. Never sit inside the vehicle on a live motorway shoulder while waiting.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-2">
                    Step 1: Maximum Visibility
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">Hazards & Sidelights</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    On unlit Ribble Valley country roads, leave sidelights and hazard flashers on. If safe, position a warning triangle 45 metres back before any blind bend.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-2">
                    Step 2: Stay Visible & Warm
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">Verge Safety</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Wear high-visibility coats if available. If the lane has high-speed blind bends, wait safely on a raised grass verge rather than standing in the road.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-2">
                    Step 3: Direct Local Call
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">Local Ribble Valley Desk</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Call our local Clitheroe desk on <strong className="text-amber-400">01200 407 999</strong>. We can dispatch a local recovery flatbed from Whalley or Clitheroe within 15–25 minutes.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Quick Call Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <span className="text-xs text-slate-300 flex items-center gap-2">
              <LifeBuoy className="w-4 h-4 text-amber-400 shrink-0" />
              Need help right now? Our operators can talk you through roadside safety while the truck is rolling.
            </span>
            <a
              href="tel:08009992470"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2 shrink-0 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call 24/7 Dispatch Desk (0800 999 2470)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
