import React, { useState } from 'react';
import {
  Truck,
  Car,
  CheckCircle,
  Clock,
  Shield,
  FileText,
  Building2,
  Users,
  Sparkles,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';

interface CommercialDomesticProps {
  onOpenBooking: (preset?: { service?: string }) => void;
}

export const CommercialDomesticToggle: React.FC<CommercialDomesticProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'commercial' | 'domestic'>('commercial');

  return (
    <section id="solutions" className="py-20 lg:py-28 relative overflow-hidden bg-[#090D16]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Tailored Vehicle Recovery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built for Commercial Fleets.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Trusted by Domestic Motorists.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Whether keeping delivery schedules on track across Lancashire or safely recovering your family car late at night, Mintrs Ltd provides priority 24/7 service.
          </p>

          {/* Interactive Switcher */}
          <div className="inline-flex p-1.5 mt-8 bg-slate-900/90 border border-white/10 rounded-2xl shadow-xl">
            <button
              onClick={() => setActiveTab('commercial')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'commercial'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Commercial & Fleet Recovery</span>
            </button>
            <button
              onClick={() => setActiveTab('domestic')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'domestic'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Domestic & Private Motorists</span>
            </button>
          </div>
        </div>

        {/* Tab Content: Commercial */}
        {activeTab === 'commercial' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
            {/* Left Column Description */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
                <Building2 className="w-3.5 h-3.5" /> Business & Corporate Solutions
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Minimize Fleet Downtime Across North West UK & Nationwide Corridors
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                When a work van breaks down, business stops. Mintrs Ltd acts as an agile, on-demand recovery partner for courier logistics, local trades, utility companies, dealerships, and regional hauliers across Whalley, Clitheroe, Blackburn, Preston, and nationwide routes.
              </p>

              {/* Commercial Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    title: 'Priority Business SLA',
                    desc: 'Front-of-queue emergency response guaranteed for registered account holders.',
                    icon: Clock,
                  },
                  {
                    title: 'Up to 7.5 Tonne Capacity',
                    desc: 'Capable of recovering LCVs, Luton box vans, tippers, crew vans and trailers.',
                    icon: Truck,
                  },
                  {
                    title: '30-Day Invoicing & VAT Receipts',
                    desc: 'Simplified commercial accounting with clear digital job sheets and photos.',
                    icon: FileText,
                  },
                  {
                    title: 'Depot & Workshop Transfers',
                    desc: 'Direct transport straight to your company depot or preferred commercial garage.',
                    icon: Shield,
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-all">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking({ service: 'Commercial Fleet Account & Priority Recovery' })}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm shadow-lg flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Open Commercial Fleet Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:08009992470"
                  className="text-slate-300 hover:text-white font-bold text-sm px-4 py-3 rounded-xl border border-white/10 hover:border-white/20 flex items-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Call B2B Dispatch Desk</span>
                </a>
              </div>
            </div>

            {/* Right Column Image & Highlight */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative group">
                <img
                  src="/images/commercial-fleet-recovery.jpg"
                  alt="Commercial delivery van recovery in North West by Mintrs Ltd"
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="text-amber-400 uppercase tracking-wider">Active Commercial Client</span>
                    <span className="text-emerald-400">On-Scene in 24m</span>
                  </div>
                  <p className="text-xs text-slate-200">
                    "Mintrs keeps our 14 delivery vans running across East Lancashire with zero headache."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Domestic */}
        {activeTab === 'domestic' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
            {/* Left Column Description */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
                <Users className="w-3.5 h-3.5" /> 24h Roadside & Breakdown Rescue
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Fast, Caring Breakdown Support When You Need It Most
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                Breaking down on an unlit rural Ribble Valley lane or high-speed North West motorway is stressful. Mintrs Ltd offers pay-as-you-go emergency breakdown recovery with zero costly annual subscriptions, direct driver communication, and comfortable cabin transport for you and your passengers.
              </p>

              {/* Domestic Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    title: 'No Membership Needed',
                    desc: 'Never pay monthly fees. Transparent, fixed-rate pricing only when you actually need us.',
                    icon: Shield,
                  },
                  {
                    title: 'Safe Passenger & Family Cabin',
                    desc: 'Clean, climate-controlled crew cabs to keep you and your loved ones warm and safe.',
                    icon: Users,
                  },
                  {
                    title: 'EV & Hybrid Certified',
                    desc: 'Specialized flatbed transport with non-drag skates for Tesla, Audi e-tron, BMW iX & more.',
                    icon: CheckCircle,
                  },
                  {
                    title: 'Prestige & Lowered Cars',
                    desc: 'Ultra-low 4-degree approach angle ensures sports cars never scrape front splitters or exhausts.',
                    icon: Sparkles,
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-all">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking({ service: 'Domestic Breakdown Recovery' })}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm shadow-lg flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Request Domestic Recovery</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:08009992470"
                  className="text-slate-300 hover:text-white font-bold text-sm px-4 py-3 rounded-xl border border-white/10 hover:border-white/20 flex items-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Call Emergency Dispatch</span>
                </a>
              </div>
            </div>

            {/* Right Column Image & Highlight */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative group">
                <img
                  src="/images/prestige-roadside-rescue.jpg"
                  alt="Domestic and prestige vehicle recovery in Clitheroe Lancashire by Mintrs Ltd"
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="text-amber-400 uppercase tracking-wider">Clitheroe Resident Rescue</span>
                    <span className="text-emerald-400">Arrived in 19m</span>
                  </div>
                  <p className="text-xs text-slate-200">
                    "Rescued us from a pitch-black country lane near Whalley when other services said 4 hours."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
