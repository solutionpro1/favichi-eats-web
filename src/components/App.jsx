import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Sparkles, X, ShoppingBag } from 'lucide-react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Booking from './components/Booking';
import RentAChef from './components/RentAChef';
//import Reviews from './components/Reviews'; 
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';

import logoAsset from './assets/logo.png';

export default function App() {
  const [showPromoModal, setShowPromoModal] = useState(true);
  const whatsappNumber = "2348154064345";
  const businessAddress = "28 Olabiran Street, off Shodimu, Shomolu, Lagos";

  return (
    <div className="min-h-screen bg-orange-50/40 text-slate-800 font-sans antialiased relative">
      
      {/* 🛑 INTERCEPTOR PROMO MODAL POPUP (Shows immediately on load) */}
      {showPromoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-orange-100 text-center relative overflow-hidden transform scale-100 transition-all">
            {/* Background design accents */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-amber-500/10 rounded-full blur-xl"></div>

            <button 
              onClick={() => setShowPromoModal(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition"
            >
              <X size={18} />
            </button>

            <div className="w-16 h-16 bg-gradient-to-tr from-orange-500 to-amber-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-orange-500/20">
              <Sparkles size={32} className="animate-pulse" />
            </div>

            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              Exclusive Launch Offer! 🎉
            </h3>
            
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Welcome to the official digital portal of <span className="font-bold text-orange-600">Everyday Favichi_eats</span>. 
            </p>

            <div className="my-5 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-4">
              <span className="block text-[10px] font-black tracking-widest text-orange-700 uppercase">Special Incentive</span>
              <span className="block text-3xl font-black text-slate-900 my-1">5% OFF</span>
              <p className="text-xs text-slate-600 font-medium leading-tight">
                Instantly applied to all premium meal trays, custom event combinations, and private chef bookings from <span className="font-bold text-slate-900">July 1st – July 5th, 2026</span>!
              </p>
            </div>

            <button
              onClick={() => setShowPromoModal(false)}
              className="w-full bg-slate-900 hover:bg-orange-600 text-white font-black text-sm py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              ORDER NOW
            </button>
          </div>
        </div>
      )}

      {/* 🚀 FIXED 5-DAY GLOBAL DISCOUNT PROMO BANNER BAR */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white text-center py-2 px-4 text-[11px] md:text-xs font-black tracking-wide flex items-center justify-center gap-2 shadow-inner relative z-50 select-none">
        <Sparkles size={14} className="animate-spin duration-[3000ms] shrink-0" />
        <span className="truncate">LIMITED TIME WEBSITE LAUNCH PROMO: 5% INSTANT DISCOUNT APPLIED TO ALL ORDERS & BOOKINGS FROM 1ST OF JULY - 5TH OF JULY 2026!</span>
        <Sparkles size={14} className="animate-spin duration-[3000ms] shrink-0" />
      </div>

      {/* Watermark Background Animation Layer */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-[0.03]">
        <img 
          src={logoAsset} 
          alt="Watermark Background" 
          className="w-[120vw] max-w-[800px] aspect-square object-contain animate-pulse duration-[8000ms]" 
        />
      </div>

      {/* Persistent Global Application Navigation Header Bar */}
      <header className="bg-white/95 backdrop-blur border-b border-orange-100 sticky top-0 z-50 shadow-sm px-3 md:px-8 py-2.5 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3.5">
          <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-orange-100 bg-orange-50 shrink-0 p-0.5 transition-all duration-300">
            <img src={logoAsset} alt="Everyday Favichi_eats Logo" className="w-full h-full object-cover rounded-lg md:rounded-xl" />
          </div>
          <h1 className="text-sm md:text-xl font-black text-orange-600 tracking-tight block">
            Everyday Favichi_eats
          </h1>
        </div>
        
        <a 
          href={`https://wa.me/${whatsappNumber}?text=Hello%20Everyday%20Favichi_eats,%20I%20am%20ordering%20from%20the%20website.%20Please%20activate%20my%205%25%20web%20discount%20on%20my%20meals!`} 
          target="_blank" 
          rel="noreferrer"
          className="bg-green-600 text-white text-[11px] md:text-sm font-bold px-3.5 md:px-5 py-2 md:py-2.5 rounded-full flex items-center gap-1.5 md:gap-2 hover:bg-green-700 transition shadow-sm whitespace-nowrap"
        >
          <MessageSquare size={14} className="md:w-4 md:h-4" /> Order via WhatsApp
        </a>
      </header>

      {/* Structural Page Section Node Wrapper Layout */}
      <div className="relative z-10">
        <Hero />
        <Menu />
        
        {/* Dynamic Booking Payload with Instant Website Promotion Tagging */}
        <Booking onBooking={(service) => window.open(`https://wa.me/${whatsappNumber}?text=Hello%20Everyday%20Favichi%20Eats,%20I%20want%20to%20make%20an%20inquiry%20about%20booking%20the%20"${encodeURIComponent(service)}"%20service%20via%20your%20website%20portal.%20Please%20apply%20the%20active%205%25%20website%20promo%20discount%20to%20my%20invoice!`, '_blank')} />
        
        <RentAChef />
        
        {/* <Reviews /> */}
        
        <Gallery />

        {/* Corporate Address & Map Location Matrix Section */}
        <section className="py-16 px-6 bg-slate-900 text-white grid md:grid-cols-2 gap-12 items-center border-t border-slate-800">
          <div className="max-w-md mx-auto md:mx-0 md:pl-12">
            <h3 className="text-2xl font-black text-white mb-4">Everyday Favichi_eats</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Reach out directly to coordinate bulk logistics or menu customisations.
            </p>
            <div className="space-y-4 text-slate-300 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0 mt-0.5" size={18} />
                <p>{businessAddress}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange-500 shrink-0" size={18} />
                <p>+234 815 406 4345</p>
              </div>
            </div>
          </div>
          
          <div className="w-full h-64 bg-slate-800 rounded-2xl overflow-hidden relative shadow-md">
            <iframe 
              title="Business Location Map"
              src="https://maps.google.com/maps?q=28%20olabiran%20street%20shomolu&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <Footer />
        <FloatingSocials />
      </div>
    </div>
  );
}