import React, { useState } from 'react';
import { coverageAreas } from '../data/mockData';
import {
  MapPin,
  Compass,
  Navigation,
  Phone,
  Copy,
  Check,
} from 'lucide-react';

export const CoverageSection: React.FC = () => {
  const [selectedHubIndex, setSelectedHubIndex] = useState(0);
  const [copiedW3W, setCopiedW3W] = useState(false);
  const [currentCoords, setCurrentCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [gpsLoading, setGpsLoading] = useState(false);

  const selectedHub = coverageAreas[selectedHubIndex];

  // Geolocation helper for stranded drivers
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCurrentCoords({
          lat: parseFloat(pos.coords.latitude.toFixed(5)),
          lng: parseFloat(pos.coords.longitude.toFixed(5)),
        });
        setGpsLoading(false);
      },
      () => {
        setGpsLoading(false);
        alert('Could not determine exact location. Please tell dispatch your nearest road, landmark, or motorway junction.');
      }
    );
  };

  const copyCoordinates = () => {
    if (currentCoords) {
      navigator.clipboard.writeText(`${currentCoords.lat}, ${currentCoords.lng}`);
      setCopiedW3W(true);
      setTimeout(() => setCopiedW3W(false), 2500);
    }
  };

  return (
    <section id="coverage" className="py-20 lg:py-28 relative bg-[#090D16] border-t border-white/5 overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute -left-20 top-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">
            Operational Territory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            Whalley, Clitheroe, North West & Nationwide
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            With dedicated recovery units stationed along the <strong className="text-slate-200">A59 corridor</strong> and rapid access to the <strong className="text-slate-200">M6, M65 & M66</strong>, Mintrs Ltd offers unrivalled local arrival times and reliable nationwide transport.
          </p>
        </div>

        {/* Interactive Zone Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Interactive Hub Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Operational Zone
            </h3>
            {coverageAreas.map((area, idx) => {
              const isSelected = selectedHubIndex === idx;
              return (
                <button
                  key={area.hub}
                  onClick={() => setSelectedHubIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-400 shadow-xl shadow-amber-500/10'
                      : 'bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                        isSelected ? 'bg-amber-500 text-slate-950 font-black' : 'bg-white/5 text-slate-300'
                      }`}
                    >
                      {idx === 0 ? '📍' : idx === 2 ? '🛣️' : idx === 4 ? '🇬🇧' : '🚗'}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        {area.hub}
                        {idx === 0 && (
                          <span className="text-[10px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-black uppercase">
                            Primary Base
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-slate-400">{area.tag}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-black text-amber-300 block">{area.eta}</span>
                    <span className="text-[10px] text-slate-400">Response</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Zone Detail & Radar Card */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            {/* Visual Radar Pulse Graphic */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-radar" />
                  Live Dispatch Coverage
                </span>
                <h3 className="text-2xl font-black text-white mt-1">{selectedHub.hub}</h3>
              </div>

              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                  Target Response
                </span>
                <span className="text-lg font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20 inline-block">
                  {selectedHub.eta}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedHub.description}
            </p>

            {/* Specific Towns / Roads Covered */}
            <div className="mb-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Key Towns, Roads & Corridors Covered:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedHub.towns.map((town) => (
                  <span
                    key={town}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200"
                  >
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {town}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated Live Route Radar Status */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">A59 & North West Strategic Patrols</span>
                  <span className="text-[11px] text-slate-400">Recovery units positioned for minimum traffic bottleneck delay</span>
                </div>
              </div>

              <a
                href="tel:08009992470"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 shrink-0 transition-all shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Local Unit</span>
              </a>
            </div>

          </div>

        </div>

        {/* Stranded Motorist GPS & What3Words Helper Tool */}
        <div className="bg-gradient-to-r from-slate-900 via-[#101726] to-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-7 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Navigation className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Stranded on a dark rural road or motorway shoulder?
                  </h4>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    Driver Location Tool
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Can't explain your exact location in the Ribble Valley or North West country lanes? Tap below to fetch your device's exact GPS coordinates to provide straight to our driver.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              {!currentCoords ? (
                <button
                  type="button"
                  onClick={handleGetLocation}
                  disabled={gpsLoading}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-3 px-5 rounded-xl border border-white/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>{gpsLoading ? 'Locating Your Device...' : 'Pin My Exact GPS Location'}</span>
                </button>
              ) : (
                <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/40 p-2 rounded-xl">
                  <div className="px-3 py-1 text-xs font-mono text-emerald-300">
                    {currentCoords.lat}, {currentCoords.lng}
                  </div>
                  <button
                    onClick={copyCoordinates}
                    className="p-2 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all text-xs flex items-center gap-1 cursor-pointer"
                    title="Copy Coordinates"
                  >
                    {copiedW3W ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedW3W ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              )}

              <a
                href={`https://wa.me/447700900247?text=Hello%20Mintrs%20Ltd,%20I%20need%20vehicle%20recovery.%20My%20location%20is:%20${
                  currentCoords ? `${currentCoords.lat},%20${currentCoords.lng}` : 'Whalley%20/%20Clitheroe%20area'
                }`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>WhatsApp Location to Dispatch</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
