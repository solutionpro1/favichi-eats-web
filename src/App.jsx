import React, { useState, useEffect } from 'react';
import { Phone, MapPin, MessageSquare } from 'lucide-react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Booking from './components/Booking';
import RentAChef from './components/RentAChef';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';

import logoAsset from './assets/logo.png';

export default function App() {
  const [loading, setLoading] = useState(true);
  const whatsappNumber = "2348154064345";
  const businessAddress = "10 Lawal Oladipo Street, Abukon Stop, Off Temidire Road, Alagbado, Lagos";

  useEffect(() => {
    // 1-second loading splash screen
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50/40 text-slate-800 font-sans antialiased relative">
      
      {/* LOADING SPLASH SCREEN */}
      {loading && (
        <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-500">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-2xl animate-pulse p-1">
            <img src={logoAsset} alt="Loading..." className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Header */}
        <header className="bg-white/95 backdrop-blur border-b border-orange-100 sticky top-0 z-50 shadow-sm px-3 md:px-8 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3.5">
            <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-orange-100 bg-orange-50 shrink-0 p-0.5">
              <img src={logoAsset} alt="Logo" className="w-full h-full object-cover rounded-lg md:rounded-xl" />
            </div>
            <h1 className="text-sm md:text-xl font-black text-orange-600 tracking-tight block">
              Everyday Favichi_eats
            </h1>
          </div>
          
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Hello%20Everyday%20Favichi_eats,%20I%20am%20ordering!`} 
            target="_blank" 
            rel="noreferrer"
            className="bg-green-600 text-white text-[11px] md:text-sm font-bold px-3.5 md:px-5 py-2 md:py-2.5 rounded-full flex items-center gap-1.5 md:gap-2 hover:bg-green-700 transition shadow-sm whitespace-nowrap"
          >
            <MessageSquare size={14} /> Order via WhatsApp
          </a>
        </header>

        <div className="relative z-10">
          <Hero />
          
          {/* Gallery moved beneath Hero */}
          <Gallery />
          
          <Menu />
          
          <Booking onBooking={(service) => window.open(`https://wa.me/${whatsappNumber}?text=Inquiry%20about%20${encodeURIComponent(service)}`, '_blank')} />
          
          <RentAChef />
          
          <section className="py-16 px-6 bg-slate-900 text-white grid md:grid-cols-2 gap-12 items-center border-t border-slate-800">
            <div className="max-w-md mx-auto md:mx-0 md:pl-12">
              <h3 className="text-2xl font-black text-white mb-4">Everyday Favichi_eats</h3>
              <p className="text-slate-400 text-sm mb-6">{businessAddress}</p>
            </div>
            <div className="w-full h-64 bg-slate-800 rounded-2xl overflow-hidden relative shadow-md">
              <iframe 
                title="Map" 
                src="https://maps.google.com/maps?q=10%20Lawal%20Oladipo%20Street%20Alagbado%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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
    </div>
  );
}