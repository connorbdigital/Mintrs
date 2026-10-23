import React, { useState, useEffect } from 'react';
import { MintrsLogo } from './MintrsLogo';
import { Phone, Menu, X, MapPin, ChevronRight, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (preset?: { service?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Commercial & Domestic', href: '#solutions' },
    { label: 'Coverage & Map', href: '#coverage' },
    { label: 'Fleet & Tech', href: '#fleet' },
    { label: 'Instant Pricing', href: '#pricing' },
    { label: 'Why Mintrs', href: '#why-mintrs' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-[38px] z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090D16]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2.5'
          : 'bg-[#090D16]/80 backdrop-blur-md border-b border-white/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center group focus:outline-none">
            <MintrsLogo variant="dark" size="md" showSubtitle={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Clitheroe & Whalley Direct Desk */}
            <div className="hidden xl:flex flex-col text-right pr-2 border-r border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center justify-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-radar"></span>
                Whalley & Clitheroe Desk
              </span>
              <a
                href="tel:01200407999"
                className="text-sm font-extrabold text-white hover:text-amber-400 transition-colors"
              >
                01200 407 999
              </a>
            </div>

            {/* 24/7 Primary Hotline */}
            <a
              href="tel:08009992470"
              className="flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <div className="w-6 h-6 rounded-lg bg-black/15 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-slate-950" />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[10px] tracking-wider uppercase font-black opacity-80">24/7 Hotline</span>
                <span className="text-sm font-black">0800 999 2470</span>
              </div>
            </a>

            {/* Recovery Quote Button */}
            <button
              onClick={() => onOpenBooking()}
              className="hidden md:flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white border border-white/15 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:border-amber-400/50"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Instant Quote</span>
            </button>
          </div>

          {/* Mobile hamburger & quick call */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="tel:08009992470"
              className="bg-amber-500 text-slate-950 p-2 rounded-lg font-bold flex items-center justify-center"
              aria-label="Call emergency recovery"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-200 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0c1220] border-b border-white/10 px-4 pt-3 pb-6 animate-fadeIn">
          {/* Status highlight */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-radar"></span>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                24/7 Units Active in Whalley & Clitheroe
              </span>
            </div>
            <span className="text-xs text-slate-300 font-semibold">ETA ~25m</span>
          </div>

          {/* Direct call buttons */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <a
              href="tel:08009992470"
              className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 py-2.5 px-3 rounded-xl font-bold text-xs shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0800 999 2470</span>
            </a>
            <a
              href="tel:01200407999"
              className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/15 py-2.5 px-3 rounded-xl font-bold text-xs"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>01200 407 999</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-200 hover:bg-white/5 font-medium text-sm"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          {/* Instant quote trigger */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-4 bg-white/10 hover:bg-white/15 text-white border border-amber-400/30 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Request Instant Recovery Quote</span>
          </button>
        </div>
      )}
    </header>
  );
};
