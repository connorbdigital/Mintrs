import React, { useState, useEffect } from 'react';
import {
  X,
  Phone,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';

interface RecoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetData?: {
    service?: string;
    vehicle?: string;
    pickup?: string;
    dropoff?: string;
    estimatedCost?: number;
  };
}

export const RecoveryModal: React.FC<RecoveryModalProps> = ({
  isOpen,
  onClose,
  presetData,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    vehicleReg: '',
    vehicleMake: presetData?.vehicle || 'Standard Car',
    service: presetData?.service || '24/7 Emergency Breakdown Recovery',
    pickupLocation: presetData?.pickup || 'Whalley / Clitheroe Area',
    destination: presetData?.dropoff || '',
    notes: '',
    isCommercial: false,
    companyName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  useEffect(() => {
    if (presetData) {
      setFormData((prev) => ({
        ...prev,
        service: presetData.service || prev.service,
        vehicleMake: presetData.vehicle || prev.vehicleMake,
        pickupLocation: presetData.pickup || prev.pickupLocation,
        destination: presetData.dropoff || prev.destination,
      }));
    }
  }, [presetData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setRefNumber(`MNTR-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0f172a] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Submission Success State */
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              Dispatch Alert Generated
            </span>
            <h3 className="text-2xl font-black text-white mt-1 mb-2">
              Recovery Request Received!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
              Our 24h dispatch controller is reviewing your location details. You will receive an immediate call to confirm ETA and driver dispatch.
            </p>

            {/* Reference Box */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-6 text-left max-w-sm mx-auto text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Reference:</span>
                <span className="font-mono font-bold text-amber-400">{refNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Service:</span>
                <span className="font-semibold text-white">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Est. Arrival:</span>
                <span className="font-bold text-emerald-400">15 – 35 Mins (Priority)</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:08009992470"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black py-3.5 px-6 rounded-xl text-sm shadow-lg hover:from-amber-400 hover:to-amber-500 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dispatch Desk Directly (0800 999 2470)</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full bg-white/5 hover:bg-white/10 text-slate-300 font-semibold py-2.5 rounded-xl text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Input State */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5" /> 24h Priority Recovery Request
              </div>
              <h3 className="text-2xl font-black text-white">
                Request Immediate Recovery / Quote
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Serving Whalley, Clitheroe, Lancashire, North West & nationwide transport.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Smith"
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Telephone */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Phone Number (Active Mobile) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07123 456789"
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Vehicle Reg */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Vehicle Reg (VRN)
                  </label>
                  <input
                    type="text"
                    value={formData.vehicleReg}
                    onChange={(e) => setFormData({ ...formData, vehicleReg: e.target.value.toUpperCase() })}
                    placeholder="e.g. AB21 XYZ"
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-sm text-white uppercase font-mono tracking-wider focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Vehicle Make / Class */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Vehicle Type
                  </label>
                  <select
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Standard Car">Standard Car (Hatch/Saloon)</option>
                    <option value="Commercial Van / LCV">Commercial Van / LCV (Transit/Sprinter)</option>
                    <option value="4x4 / SUV">4x4 / Large SUV</option>
                    <option value="Prestige / EV / Supercar">Prestige / EV / Supercar (Low Ramp)</option>
                    <option value="Commercial 7.5t Truck">Commercial 7.5t Truck</option>
                  </select>
                </div>
              </div>

              {/* Breakdown / Pickup Location */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Current Breakdown Location / Pickup Address *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-amber-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="Road name, post code, junction or What3words"
                    className="w-full bg-black/40 border border-white/15 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Drop-off Destination Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="Home address, dealership, garage or business depot"
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Commercial Fleet Toggle */}
              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={formData.isCommercial}
                    onChange={(e) => setFormData({ ...formData, isCommercial: e.target.checked })}
                    className="rounded text-amber-500 focus:ring-amber-400 w-4 h-4"
                  />
                  <span className="font-semibold">This is a Commercial Fleet / Business Vehicle</span>
                </label>
                {formData.isCommercial && (
                  <input
                    type="text"
                    placeholder="Company Name (for 30-Day VAT Invoice)"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="mt-2 w-full bg-black/40 border border-white/15 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                )}
              </div>

              {/* Action Submit */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black py-3.5 px-4 rounded-xl text-sm shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Alerting 24/7 Controllers...</span>
                  ) : (
                    <>
                      <span>Transmit Recovery Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Emergency Fallback Strip */}
              <div className="pt-2 text-center text-xs text-slate-400">
                <span>In an immediate life danger situation? Call 999 first, then Mintrs Ltd at </span>
                <a href="tel:08009992470" className="text-amber-400 font-bold underline">
                  0800 999 2470
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
