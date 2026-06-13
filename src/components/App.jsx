import React from 'react';
import { Phone, MapPin, MessageSquare } from 'lucide-react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  const whatsappNumber = "2348154064345";
  const businessAddress = "28 Olabiran Street, off Shodimu, Shomolu, Lagos";

  const handleOrder = (itemName) => {
    const message = encodeURIComponent(`Hello Everyday Favichi_eats, I want to order the "${itemName}". Please send me your menu options and pricing.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleBooking = (serviceType) => {
    const message = encodeURIComponent(`Hello Everyday Favichi_eats, I would like to make an inquiry about booking a "${serviceType}" for an upcoming date.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-orange-50/50 text-slate-800 font-sans antialiased">
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur border-b border-orange-100 sticky top-0 z-50 shadow-sm px-4 md:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-black text-orange-600 tracking-tight">Everyday Favichi_eats</h1>
        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noreferrer"
          className="bg-green-600 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-700 transition shadow-sm"
        >
          <MessageSquare size={16} /> Chat on WhatsApp
        </a>
      </header>

      {/* Structured Core Modules */}
      <Hero />
      <Menu onOrder={handleOrder} />
      <Booking onBooking={handleBooking} />

      {/* Location Map Section */}
      <section className="py-16 px-6 bg-slate-900 text-white grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-md mx-auto md:mx-0 md:pl-12">
          <h3 className="text-2xl font-black text-white mb-4">Everyday Favichi_eats Kitchen</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Drop by our central kitchen or reach out directly to coordinate bulk logistics or menu customisations.
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
    </div>
  );
}