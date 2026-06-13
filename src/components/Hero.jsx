import React from "react";
export default function Hero() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
        Catering • Bulk Food Vendor • Private Chefs
      </span>
      <h2 className="text-4xl md:text-6xl font-black mt-6 text-slate-900 tracking-tight leading-tight">
        Freshly Made Bulk Meals Delivered Straight To You
      </h2>
      <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
        Serving premium culinary experiences across Lagos, Abuja, Asaba, and Ogun State. From family soup bowls to dedicated chefs for your residence.
      </p>
    </section>
  );
}