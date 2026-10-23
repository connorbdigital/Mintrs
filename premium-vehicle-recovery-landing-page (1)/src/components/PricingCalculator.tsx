import React, { useState } from 'react';
import {
  Calculator,
  ShieldCheck,
  Phone,
  ArrowRight,
} from 'lucide-react';

interface PricingCalculatorProps {
  onOpenBooking: (preset?: {
    service?: string;
    vehicle?: string;
    estimatedCost?: number;
  }) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenBooking }) => {
  const [vehicleClass, setVehicleClass] = useState<'car' | 'suv' | 'van' | 'prestige'>('car');
  const [distanceZone, setDistanceZone] = useState<'local' | 'regional' | 'nationwide'>('local');
  const [mileage, setMileage] = useState<number>(12);
  const [needWinch, setNeedWinch] = useState(false);
  const [isNightTime, setIsNightTime] = useState(false);

  // Dynamic pricing algorithm
  const calculateTotal = () => {
    let base = 65; // Whalley & Clitheroe local hook-up
    let perMile = 1.95;

    if (vehicleClass === 'suv') base += 15;
    if (vehicleClass === 'van') base += 25;
    if (vehicleClass === 'prestige') base += 35;

    if (distanceZone === 'local') {
      // Local Whalley/Clitheroe flat capped rate
      base = base + Math.min(mileage, 8) * 1.5;
    } else if (distanceZone === 'regional') {
      base = base + mileage * perMile;
    } else {
      // Nationwide discounted rate for long haul
      base = base + mileage * 1.65;
    }

    if (needWinch) base += 40;
    if (isNightTime) base += 20;

    return Math.round(base);
  };

  const totalEstimate = calculateTotal();

  const handleBookEstimate = () => {
    onOpenBooking({
      service: `Vehicle Recovery (${distanceZone.toUpperCase()} ZONE)`,
      vehicle: vehicleClass.toUpperCase(),
      estimatedCost: totalEstimate,
    });
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 relative bg-[#0B0F1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" /> 100% Upfront Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Transparent Pricing Calculator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            No unexpected hookup fees, no hidden mileage traps, and zero compulsory membership fees. Estimate your recovery in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
            
            {/* 1. Vehicle Class */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                1. Select Vehicle Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'car', label: 'Standard Car', desc: 'Hatch / Saloon' },
                  { id: 'suv', label: 'SUV / 4x4', desc: 'Estate / Cross' },
                  { id: 'van', label: 'Van / LCV', desc: 'Up to 3.5t-7.5t' },
                  { id: 'prestige', label: 'Prestige / EV', desc: 'Low-Ramp / Tesla' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setVehicleClass(item.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      vehicleClass === item.id
                        ? 'bg-amber-500/15 border-amber-400 text-white shadow-sm'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xs font-bold block">{item.label}</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Destination / Distance Zone */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                2. Recovery Distance Zone
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  {
                    id: 'local',
                    label: 'Whalley / Clitheroe',
                    sub: 'Under 10 Miles Local',
                    defaultMiles: 6,
                  },
                  {
                    id: 'regional',
                    label: 'North West Corridor',
                    sub: 'M6, M65, Lancs, Manchester',
                    defaultMiles: 24,
                  },
                  {
                    id: 'nationwide',
                    label: 'Nationwide UK',
                    sub: 'Inter-City Long Distance',
                    defaultMiles: 120,
                  },
                ].map((zone) => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => {
                      setDistanceZone(zone.id as any);
                      setMileage(zone.defaultMiles);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      distanceZone === zone.id
                        ? 'bg-amber-500/15 border-amber-400 text-white shadow-sm'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xs font-bold block leading-tight">{zone.label}</span>
                    <span className="text-[10px] text-slate-400 block mt-1">{zone.sub}</span>
                  </button>
                ))}
              </div>

              {/* Slider for Mileage */}
              <div className="mt-4 p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                  <span>Estimated Transport Distance:</span>
                  <span className="text-amber-400 font-extrabold text-sm">{mileage} Miles</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max={distanceZone === 'nationwide' ? '300' : '60'}
                  step="2"
                  value={mileage}
                  onChange={(e) => setMileage(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>2 Miles</span>
                  <span>{distanceZone === 'nationwide' ? '300 Miles' : '60 Miles'}</span>
                </div>
              </div>
            </div>

            {/* 3. Additional Scenario Options */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                3. Special Requirements (Optional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setNeedWinch(!needWinch)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    needWinch
                      ? 'bg-amber-500/15 border-amber-400 text-white'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold block">Heavy Winch Extraction</span>
                    <span className="text-[10px] text-slate-400">Off-road, mud, embankment or ditch</span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                      needWinch ? 'bg-amber-500 text-slate-950' : 'bg-white/10 text-slate-500'
                    }`}
                  >
                    ✓
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIsNightTime(!isNightTime)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    isNightTime
                      ? 'bg-amber-500/15 border-amber-400 text-white'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold block">Late Night Dispatch</span>
                    <span className="text-[10px] text-slate-400">Between 11:00 PM and 6:00 AM</span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                      isNightTime ? 'bg-amber-500 text-slate-950' : 'bg-white/10 text-slate-500'
                    }`}
                  >
                    ✓
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Result / Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#121a2d] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
              <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">
                Instant Calculation
              </span>
              <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Guaranteed Fixed Rate
              </span>
            </div>

            <div className="mb-6">
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                Estimated Transparent Rate
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-black text-white">
                  £{totalEstimate}
                </span>
                <span className="text-xs text-slate-400 font-medium">approx. net</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Includes full loading, passenger heated cab ride, soft strap protection, and £5M goods in transit coverage.
              </p>
            </div>

            {/* Line items summary */}
            <div className="space-y-2 py-4 border-y border-white/10 text-xs mb-6">
              <div className="flex justify-between text-slate-300">
                <span>Vehicle:</span>
                <span className="font-bold text-white uppercase">{vehicleClass}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Distance Bracket:</span>
                <span className="font-bold text-white capitalize">{distanceZone} (~{mileage} mi)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Passenger Transport:</span>
                <span className="font-bold text-emerald-400">Included (Free)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Specialist Over-Wheel Straps:</span>
                <span className="font-bold text-emerald-400">Included (Free)</span>
              </div>
              {needWinch && (
                <div className="flex justify-between text-amber-300">
                  <span>Winch Extraction:</span>
                  <span className="font-bold">+£40</span>
                </div>
              )}
              {isNightTime && (
                <div className="flex justify-between text-amber-300">
                  <span>Late Night Supplement:</span>
                  <span className="font-bold">+£20</span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <button
              onClick={handleBookEstimate}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black py-4 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mb-3"
            >
              <span>Lock In Quote & Request Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:08009992470"
              className="w-full bg-white/10 hover:bg-white/15 text-white font-bold py-3 px-4 rounded-xl border border-white/15 transition-all flex items-center justify-center gap-2 text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Or Confirm via Phone: 0800 999 2470</span>
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Exact price confirmed before driver rolls. No hidden extras.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
