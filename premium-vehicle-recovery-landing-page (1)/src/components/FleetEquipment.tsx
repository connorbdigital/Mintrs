import React, { useState } from 'react';
import {
  Shield,
  Gauge,
  Sparkles,
  CheckCircle2,
  Wrench,
} from 'lucide-react';

interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  badge: string;
  capacity: string;
  description: string;
  imageUrl: string;
  specs: { label: string; value: string }[];
  idealFor: string[];
}

const fleetItems: FleetVehicle[] = [
  {
    id: 'flatbed-tilt',
    name: 'Hydraulic Tilt & Slide Low-Approach Flatbed',
    category: 'Flagship Transporter',
    badge: 'Zero Ramp Scrape',
    capacity: 'Up to 5.5 Tonne Payload',
    description: 'Our pride and joy. Features a custom 4-degree ultra-shallow hydraulic approach angle that guarantees zero front splitter or rear diffuser contact on lowered sports cars, EVs, and long-wheelbase vans.',
    imageUrl: '/images/mintrs-hero-recovery.jpg',
    specs: [
      { label: 'Approach Angle', value: 'Ultra-Low 4°' },
      { label: 'Bed Length', value: '6.2 Metres' },
      { label: 'Winch Rating', value: '10,000 lbs' },
      { label: 'Strapping', value: 'Over-Wheel Soft Chocks' },
    ],
    idealFor: [
      'Low-clearance sports cars & supercars (Porsche, Ferrari, McLaren)',
      'Electric vehicles requiring zero wheel-drag loading',
      'Long-wheelbase commercial vans & crew cabs',
      'Lowered & modified enthusiast vehicles',
    ],
  },
  {
    id: 'heavy-commercial',
    name: 'Heavy-Duty Commercial Recovery & Spec-Lift',
    category: 'Commercial Backbone',
    badge: '3.5t – 7.5t Fleet',
    capacity: 'Commercial Rig',
    description: 'Purpose-engineered for demanding commercial logistics in the North West. Equipped with dual-line recovery winches, pneumatic air supply for releasing seized brakes, and underlift gear for rapid highway clearing.',
    imageUrl: '/images/commercial-fleet-recovery.jpg',
    specs: [
      { label: 'Gross Vehicle Weight', value: '7,500 KG' },
      { label: 'Air Brake Supply', value: 'Dual Line Pneumatic' },
      { label: 'Auxiliary Lighting', value: '360° High Output LED' },
      { label: 'Crew Capacity', value: 'Heated 3-Person Cab' },
    ],
    idealFor: [
      'Luton box vans, tippers & courier delivery fleets',
      'Highway breakdowns on M6, M65 & M66 requiring fast clearing',
      'Commercial fleet depot relocations & scheduled maintenance transfers',
      'Heavy loaded trade vehicles up to 7.5 tonnes',
    ],
  },
  {
    id: 'roadside-rapid',
    name: 'Mobile Diagnostic & Rapid Roadside Unit',
    category: 'Rapid First Responder',
    badge: 'Fix-on-Scene Priority',
    capacity: 'Rapid Deployment',
    description: 'Kitted with commercial OBD-II diagnostic equipment, high-amperage 12V/24V jump-start booster packs, pneumatic tyre changing equipment, and contaminated fuel drain tanks.',
    imageUrl: '/images/prestige-roadside-rescue.jpg',
    specs: [
      { label: 'Diagnostic System', value: 'Dealer-Level OBD' },
      { label: 'Booster Output', value: '12V / 24V Commercial' },
      { label: 'Jack System', value: 'Low Profile 3-Tonne' },
      { label: 'First Responder ETA', value: '< 25 Mins Local' },
    ],
    idealFor: [
      'Dead battery & flat tyre assistance at home or roadside',
      'Misfueling triage & emergency diesel delivery',
      'Minor electrical & immobiliser resetting',
      'Rapid assessment before deploying heavy recovery bed',
    ],
  },
];

export const FleetEquipment: React.FC = () => {
  const [activeFleetIndex, setActiveFleetIndex] = useState(0);
  const activeFleet = fleetItems[activeFleetIndex];

  return (
    <section id="fleet" className="py-20 lg:py-28 relative bg-[#0B0F1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5" /> High-Spec Fleet & Equipment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Engineered for Damage-Free Recovery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Mintrs Ltd operates purpose-built, high-specification recovery machinery designed to protect wheels, bodywork, and delicate electronic drivetrains.
          </p>
        </div>

        {/* Fleet Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {fleetItems.map((item, idx) => {
            const isSelected = activeFleetIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveFleetIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-400 shadow-xl'
                    : 'bg-slate-900/40 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded font-semibold">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">{item.name}</h4>
              </button>
            );
          })}
        </div>

        {/* Active Fleet Spotlight Card */}
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Image */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src={activeFleet.imageUrl}
                alt={activeFleet.name}
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-white bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Sparkles className="w-4 h-4" /> Mintrs Ltd Certified Machinery
                </span>
                <span className="text-slate-300 font-normal">{activeFleet.capacity}</span>
              </div>
            </div>

            {/* Technical Detail & Specs */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Gauge className="w-3.5 h-3.5" /> Technical Specification
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {activeFleet.name}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeFleet.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {activeFleet.specs.map((spec, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                      {spec.label}
                    </span>
                    <span className="text-sm font-extrabold text-white mt-0.5 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Ideal For list */}
              <div className="mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Optimized For:
                </span>
                <ul className="space-y-1.5">
                  {activeFleet.idealFor.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Guarantee */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-xs text-emerald-300 font-semibold">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protected by Mintrs £5M Goods in Transit Insurance during loading and transit.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
