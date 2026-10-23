import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../data/mockData';
import {
  AlertTriangle,
  Truck,
  ShieldCheck,
  Anchor,
  Compass,
  Zap,
  ArrowRight,
  CheckCircle2,
  Phone,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (preset?: { service?: string }) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'domestic'>('all');

  const filteredServices = servicesData.filter((service) => {
    if (filter === 'all') return true;
    if (filter === 'commercial') return service.category === 'commercial' || service.category === 'both';
    if (filter === 'domestic') return service.category === 'domestic' || service.category === 'both';
    return true;
  });

  const getIcon = (name: string) => {
    switch (name) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'Anchor':
        return <Anchor className="w-5 h-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      default:
        return <Truck className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#0B0F1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">
              Complete Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
              24-Hour Recovery Services
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              From roadside triage in Whalley and Clitheroe to heavy-duty fleet recovery across the North West and nationwide transport.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === 'all' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === 'commercial' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('domestic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === 'domestic' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Domestic
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400/40 hover:bg-slate-900/80 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features checklist */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Specs Strip */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-black/40 border border-white/5 mb-5 text-center">
                  {service.specs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold truncate">
                        {spec.label}
                      </span>
                      <span className="text-xs font-bold text-slate-100 truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card CTA */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenBooking({ service: service.title })}
                    className="flex-1 bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs py-2.5 px-3 rounded-xl border border-white/10 hover:border-amber-400 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Book / Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="tel:08009992470"
                    className="w-10 h-10 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/20 flex items-center justify-center transition-all shrink-0"
                    title="Call 24/7 Hotline"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Emergency Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/15 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shrink-0">
              🚨
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Stranded in Whalley, Clitheroe or on the M6/M65 right now?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Do not wait hours in the cold for nationwide motor clubs. Call Mintrs Ltd direct for 15-30 min local arrival.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:08009992470"
              className="flex-1 md:flex-initial text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl text-sm transition-all shadow-md"
            >
              Call 0800 999 2470
            </a>
            <a
              href="tel:01200407999"
              className="flex-1 md:flex-initial text-center bg-white/10 hover:bg-white/15 text-white font-bold px-5 py-3 rounded-xl text-sm border border-white/15 transition-all"
            >
              01200 407 999
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
