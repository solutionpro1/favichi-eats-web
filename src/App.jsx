import React from 'react';
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
  const whatsappNumber = "2348154064345";
  const businessAddress = "28 Olabiran Street, off Shodimu, Shomolu, Lagos";

  return (
    <div className="min-h-screen bg-orange-50/40 text-slate-800 font-sans antialiased relative">
      
      {/* Watermark Background Animation Layer */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-[0.03]">
        <img 
          src={logoAsset} 
          alt="Watermark Background" 
          className="w-[120vw] max-w-[800px] aspect-square object-contain animate-pulse duration-[8000ms]" 
        />
      </div>

      {/* Persistent Global Application Navigation Header Bar */}
      <header className="bg-white/95 backdrop-blur border-b border-orange-100 sticky top-0 z-50 shadow-sm px-4 md:px-8 py-2.5 flex justify-between items-center">
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden shadow-sm border border-orange-100 bg-orange-50 shrink-0 p-0.5 transition-all duration-300">
            <img src={logoAsset} alt="Everyday Favichi_eats Logo" className="w-full h-full object-cover rounded-xl" />
          </div>
          <h1 className="text-xl font-black text-orange-600 tracking-tight hidden sm:block">Everyday Favichi_eats</h1>
        </div>
        
        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noreferrer"
          className="bg-green-600 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-green-700 transition shadow-sm"
        >
          <MessageSquare size={16} /> Order via WhatsApp
        </a>
      </header>

      {/* Structural Page Section Node Wrapper Layout */}
      <div className="relative z-10">
        <Hero />
        <Menu />
        <Booking onBooking={(service) => window.open(`https://wa.me/${whatsappNumber}?text=Hello%20Everyday%20Favichi%20Eats,%20I%20want%20to%20make%20an%20inquiry%20about%20booking%20a%20"${encodeURIComponent(service)}".`, '_blank')} />
        <RentAChef />
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