import React from 'react';
import { Utensils } from 'lucide-react';

const menuItems = [
  { id: 1, name: "Bulk Family Soup Bowls", price: "From ₦25,000", desc: "Freshly made Egusi, Ogbono, Banga, or Afang soups delivered in 3L or 5L bulk bowls." },
  { id: 2, name: "Bulk Party Food Packs", price: "Custom Pricing", desc: "Jollof rice, fried rice, and swallow options prepared in large quantities for your small gatherings." },
  { id: 3, name: "Corporate Lunch Packages", price: "Per Plate / Bulk", desc: "Delicious, freshly packaged meals delivered straight to your office or corporate event." }
];

export default function Menu({ onOrder }) {
  return (
    <section className="py-12 bg-white px-6 border-y border-orange-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900">Order Bulk Meals</h3>
          <p className="text-sm text-slate-500 mt-1">Click any item to place your order directly via WhatsApp</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between bg-orange-50/20">
              <div>
                <div className="bg-orange-100 text-orange-700 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                  <Utensils size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{item.name}</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-6">
                <div className="text-orange-600 font-black text-base mb-3">{item.price}</div>
                <button 
                  onClick={() => onOrder(item.name)}
                  className="w-full bg-slate-900 text-white text-xs font-bold py-3 rounded-xl hover:bg-slate-800 transition flex items-center justify-center gap-2 shadow-sm"
                >
                  Order via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}