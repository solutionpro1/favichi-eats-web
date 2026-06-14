import React from "react";

const galleryImages = [
  { id: 1, url: "/gallery-1.jpg", tag: "Signature Delicacy" },
  { id: 2, url: "/gallery-2.jpg", tag: "Gourmet Event Buffet" },
  { id: 3, url: "/gallery-3.jpg", tag: "Slow Cooked Stew Bowl" },
  { id: 4, url: "/gallery-4.jpg", tag: "Premium Native Soup" },
  { id: 5, url: "/gallery-5.jpg", tag: "Smokey Jollof Cooler" },
  { id: 6, url: "/gallery-6.jpg", tag: "Luxury Party Combo" },
  { id: 7, url: "/gallery-7.jpg", tag: "Fresh Swallow Display" },
  { id: 8, url: "/gallery-8.jpg", tag: "Aromatic Pepper Soup" },
  { id: 9, url: "/gallery-9.jpg", tag: "Chef Plated Platter" },
  { id: 10, url: "/gallery-10.jpg", tag: "Event Culinary Setup" }
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white/60 px-6 border-t border-orange-100 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Our Food Gallery</h3>
          <p className="text-sm text-slate-500 mt-1">Authentic glimpses of freshly curated culinary orders from Everyday Favichi_eats</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {galleryImages.map((img) => (
            <div key={img.id} className="aspect-square bg-orange-100/30 border border-orange-100 rounded-2xl overflow-hidden relative group shadow-sm">
              <img 
                src={img.url} 
                alt={img.tag} 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'p-4', 'text-slate-400', 'text-[10px]', 'font-bold', 'text-center');
                  e.target.parentNode.innerHTML = "<span>[Drop picture inside public/ folder named: gallery-" + img.id + ".jpg]</span>";
                }}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white text-[10px] font-black uppercase tracking-wider">{img.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}