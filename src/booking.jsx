import React from 'react';
import { Calendar, Users } from 'lucide-react';

export default function Booking({ onBooking }) {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-black text-slate-900">Book Our Premium Services</h3>
        <p className="text-sm text-slate-500 mt-1">Hire professional chefs for your private residence or upcoming events</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="bg-blue-50 text-blue-600 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Users size={20} />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Chefs For Residents</h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Get a dedicated professional chef stationed at your home to manage meal preps, specialized diets, and daily family catering on weekly or monthly arrangements.
            </p>
          </div>
          <button 
            onClick={() => onBooking("Chef for Residence")}
            className="mt-6 w-full bg-blue-600 text-white text-xs font-bold py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Calendar size={14} /> Book Private Chef
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="bg-purple-50 text-purple-600 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Calendar size={20} />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Event Catering</h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Premium culinary setups for weddings, birthday parties, corporate functions, and indoor gatherings with customized indoor/outdoor kitchen setups.
            </p>
          </div>
          <button 
            onClick={() => onBooking("Event Catering Service")}
            className="mt-6 w-full bg-purple-600 text-white text-xs font-bold py-3 rounded-xl hover:bg-purple-700 transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Calendar size={14} /> Inquire For Event Catering
          </button>
        </div>
      </div>
    </section>
  );
}