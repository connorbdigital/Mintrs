import React, { useState } from 'react';
import {
  Phone,
  Clock,
  Shield,
  MapPin,
  Car,
  Truck,
  ArrowRight,
  CheckCircle2,
  Navigation,
  Compass,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: (preset?: {
    service?: string;
    vehicle?: string;
    pickup?: string;
    dropoff?: string;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  // Calculator state
  const [vehicleType, setVehicleType] = useState<'car' | 'van' | '4x4' | 'prestige'>('car');
  const [serviceType, setServiceType] = useState<'emergency' | 'transport'>('emergency');
  const [pickup, setPickup] = useState('Whalley / Clitheroe');
  const [dropoff, setDropoff] = useState('Home / Local Repair Garage');

  const popularLocations = ['Whalley', 'Clitheroe', 'M65 J7/8', 'Preston', 'Blackburn', 'Nationwide'];

  const calculateEstimate = () => {
    let base = 69;
    if (vehicleType === 'van') base += 25;
    if (vehicleType === '4x4') base += 20;
    if (vehicleType === 'prestige') base += 35;
    if (serviceType === 'emergency') base += 10;
    return base;
  };

  const getEstimatedETA = () => {
    if (pickup.toLowerCase().includes('whalley') || pickup.toLowerCase().includes('clitheroe')) {
      return '15 – 25 Mins';
    }
    if (pickup.toLowerCase().includes('m6') || pickup.toLowerCase().includes('m65')) {
      return '20 – 30 Mins';
    }
    return '30 – 45 Mins';
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking({
      service: serviceType === 'emergency' ? '24/7 Emergency Breakdown Recovery' : 'Nationwide Vehicle Transport',
      vehicle: vehicleType.toUpperCase(),
      pickup,
      dropoff,
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background Hero Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/mintrs-hero-recovery.jpg"
          alt="Mintrs Ltd 24h vehicle recovery flatbed truck in Ribble Valley"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090D16] via-[#090D16]/75 to-transparent" />
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-xl backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-radar" />
              <span className="font-bold text-white tracking-wide uppercase text-[11px] sm:text-xs">
                Live 24h Rapid Response Fleet
              </span>
              <span className="text-amber-400 font-extrabold">• Whalley & Clitheroe Base</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              24h Vehicle Recovery.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Commercial & Domestic.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl">
              Professional, damage-free tilt-and-slide recovery across <strong className="text-white font-semibold">Whalley</strong>,{' '}
              <strong className="text-white font-semibold">Clitheroe</strong>, the <strong className="text-white font-semibold">Ribble Valley</strong>,{' '}
              <strong className="text-white font-semibold">North West motorways (M6, M65, M66)</strong>, and <strong className="text-white font-semibold">nationwide UK transit</strong>. Direct dispatch to your stranded vehicle within minutes.
            </p>

            {/* Local Quick Coverage Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs text-slate-300">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Priority Hubs:
              </span>
              {['Whalley', 'Clitheroe', 'Ribble Valley', 'M6 / M65', 'North West', 'Nationwide'].map((loc) => (
                <button
                  key={loc}
                  onClick={() => setPickup(loc)}
                  className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-amber-500/20 hover:text-amber-300 border border-white/10 text-slate-200 transition-colors text-xs font-medium cursor-pointer"
                >
                  {loc}
                </button>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              {/* Emergency Call Hotline button */}
              <a
                href="tel:08009992470"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base px-6 py-4 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-black/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-slate-950" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-900 leading-none">
                    Immediate Breakdown Hotline
                  </span>
                  <span className="text-lg leading-tight font-black">0800 999 2470</span>
                </div>
              </a>

              {/* Local Whalley / Clitheroe direct line */}
              <a
                href="tel:01200407999"
                className="flex items-center justify-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-white border border-white/15 hover:border-amber-400/50 px-5 py-4 rounded-xl font-bold text-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Local Ribble Valley</span>
                  <span className="font-bold text-sm text-slate-100">01200 407 999</span>
                </div>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-white">25–35 Min</span>
                  <span className="text-[11px] text-slate-400">Avg North West ETA</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-white">£5M Cover</span>
                  <span className="text-[11px] text-slate-400">Goods in Transit</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-white">Up to 7.5t</span>
                  <span className="text-[11px] text-slate-400">Commercial & Fleet</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-white">PAS 43</span>
                  <span className="text-[11px] text-slate-400">Roadside Standard</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Rapid Quote & Recovery Dispatch Widget */}
          <div className="lg:col-span-5">
            <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Rapid Recovery Estimator
                  </span>
                  <h3 className="text-lg font-extrabold text-white mt-0.5">Instant Quote & Dispatch</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase block font-semibold">Priority ETA</span>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {getEstimatedETA()}
                  </span>
                </div>
              </div>

              <form onSubmit={handleHeroSubmit} className="space-y-4">
                {/* Service Mode Toggle */}
                <div className="grid grid-cols-2 p-1 bg-black/40 rounded-xl border border-white/10 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setServiceType('emergency')}
                    className={`py-2 px-3 rounded-lg transition-all ${
                      serviceType === 'emergency'
                        ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    🚨 24/7 Breakdown Rescue
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('transport')}
                    className={`py-2 px-3 rounded-lg transition-all ${
                      serviceType === 'transport'
                        ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    🚚 Vehicle Transport
                  </button>
                </div>

                {/* Vehicle Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Select Vehicle Class
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'car', label: 'Car / EV', icon: Car },
                      { id: 'van', label: 'Van / LCV', icon: Truck },
                      { id: '4x4', label: '4x4 / SUV', icon: Compass },
                      { id: 'prestige', label: 'Prestige', icon: Shield },
                    ].map((v) => {
                      const Icon = v.icon;
                      const active = vehicleType === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setVehicleType(v.id as any)}
                          className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                            active
                              ? 'bg-amber-500/15 border-amber-400 text-amber-300 shadow-sm'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          <Icon className={`w-4 h-4 mb-1 ${active ? 'text-amber-400' : 'text-slate-400'}`} />
                          <span>{v.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Pickup Location */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Pickup Location
                    </label>
                    <span className="text-[11px] text-amber-400/90 font-medium">Clitheroe / Whalley Core</span>
                  </div>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-amber-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Whalley Road, Clitheroe, M65 J8..."
                      className="w-full bg-black/40 border border-white/15 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      required
                    />
                  </div>
                  {/* Quick selection chips */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {popularLocations.map((loc) => (
                      <button
                        type="button"
                        key={loc}
                        onClick={() => setPickup(loc)}
                        className={`text-[11px] px-2 py-0.5 rounded transition-all ${
                          pickup === loc
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Drop-off Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Drop-off / Destination
                  </label>
                  <div className="relative">
                    <Navigation className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      placeholder="e.g. Home address, Dealership, Preferred Garage..."
                      className="w-full bg-black/40 border border-white/15 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      required
                    />
                  </div>
                </div>

                {/* Live Estimated Price Bar */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                      Estimated Starting Rate
                    </span>
                    <span className="text-xl font-extrabold text-white">
                      From £{calculateEstimate()} <span className="text-xs text-slate-400 font-normal">+ local mileage</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-300 block font-medium">Includes Hook-up</span>
                    <span className="text-[11px] text-emerald-400 font-bold">Heated Cab Ride Included</span>
                  </div>
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Request Immediate Dispatch / Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Bottom live notice */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No membership needed
                </span>
                <span>Direct driver phone contact</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
