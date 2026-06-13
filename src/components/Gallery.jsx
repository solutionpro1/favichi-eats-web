import React from "react";

const reviews = [
  { id: 1, name: "Blessing A.", location: "Lagos", text: "The bulk Jollof rice and peppered turkey for my daughter's birthday was an absolute hit! Everybody asked for her number.", rating: "⭐⭐⭐⭐⭐" },
  { id: 2, name: "Chidi O.", location: "Abuja", text: "Incredibly professional residential chef service. He manages our family meal preps flawlessly every week.", rating: "⭐⭐⭐⭐⭐" },
  { id: 3, name: "Favour I.", location: "Shomolu", text: "Her Egusi soup bowl is the best in Lagos, hands down. Thick, rich, and loaded with obstacles!", rating: "⭐⭐⭐⭐⭐" }
];

const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=600&q=80", tag: "Bulk Delivery" },
  { id: 2, url: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80", tag: "Fresh Sides" },
  { id: 3, url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80", tag: "Signature Grills" },
  { id: 4, url: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80", tag: "Event Catering" }
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white/60 px-6 border-t border-orange-100 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Our Food Gallery & Reviews</h3>
          <p className="text-sm text-slate-500 mt-1">See what our happy clients are saying about Everyday Favichi_eats</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {galleryImages.map((img) => (
            <div key={img.id} className="aspect-square bg-orange-100/30 border border-orange-100 rounded-2xl overflow-hidden relative group shadow-sm">
              <img src={img.url} alt={img.tag} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white text-xs font-black uppercase tracking-wider">{img.tag}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/80 backdrop-blur border border-orange-100/70 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <p className="text-sm text-slate-600 italic leading-relaxed">"{review.text}"</p>
              <div className="mt-4 pt-4 border-t border-orange-100/50 flex justify-between items-center">
                <div>
                  <h5 className="text-sm font-bold text-slate-900">{review.name}</h5>
                  <span className="text-[10px] text-slate-400 font-medium">{review.location}</span>
                </div>
                <span className="text-xs">{review.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}