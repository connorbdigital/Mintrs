import React from 'react';
import { Phone, MessageCircle, Zap } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#090D16]/95 backdrop-blur-xl border-t border-amber-500/30 p-2.5 shadow-2xl">
      <div className="flex items-center gap-2">
        {/* 1-Tap Emergency Call */}
        <a
          href="tel:08009992470"
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black py-3 px-3 rounded-xl text-xs shadow-lg animate-pulse"
        >
          <Phone className="w-4 h-4 text-slate-950" />
          <span className="uppercase tracking-wide font-black">Call 24/7 Dispatch</span>
        </a>

        {/* WhatsApp Fast Pin */}
        <a
          href="https://wa.me/447700900247?text=Hello%20Mintrs%20Ltd,%20I%20need%20emergency%20breakdown%20recovery.%20My%20location%20is:"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-11 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-md"
          title="WhatsApp Location"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Instant Quote Modal Trigger */}
        <button
          onClick={onOpenBooking}
          className="w-12 h-11 bg-white/10 text-white border border-white/20 rounded-xl flex items-center justify-center shrink-0"
          title="Quote / Book"
        >
          <Zap className="w-5 h-5 text-amber-400" />
        </button>
      </div>
    </div>
  );
};
