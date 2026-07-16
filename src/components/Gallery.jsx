import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { id: 1, url: "/gallery-1.jpg" },
  { id: 2, url: "/gallery-2.jpg" },
  { id: 3, url: "/gallery-3.jpg" },
  { id: 4, url: "/gallery-4.jpg" },
  { id: 5, url: "/gallery-5.jpg" },
  { id: 6, url: "/gallery-6.jpg" },
  { id: 7, url: "/gallery-7.jpg" },
  { id: 8, url: "/gallery-8.jpg" },
  { id: 9, url: "/gallery-9.jpg" },
  { id: 10, url: "/gallery-10.jpg" },
  { id: 11, url: "/gallery-11.jpg" },
  { id: 12, url: "/gallery-12.jpg" },
  { id: 13, url: "/gallery-13.jpg" },
  { id: 14, url: "/gallery-14.jpg" },
  { id: 15, url: "/gallery-15.jpg" },
  { id: 15, url: "/gallery-15.jpg" },
];

export default function Gallery() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
      let scrollToAmount;
      
      if (direction === "left") {
        scrollToAmount = scrollLeft - clientWidth;
        // If they click left at the very beginning, wrap around to the end
        if (scrollLeft <= 0) {
          scrollToAmount = scrollWidth - clientWidth;
        }
      } else {
        scrollToAmount = scrollLeft + clientWidth;
        // If sliding right hits the end, wrap back to the first picture
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollToAmount = 0;
        }
      }
      
      sliderRef.current.scrollTo({
        left: scrollToAmount,
        behavior: "smooth"
      });
    }
  };

  // Automated 3-second interval cycle layer
  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      scrollSlider("right");
    }, 6000);

    // Clean up the timer when the component unmounts to protect processing memory
    return () => clearInterval(autoPlayTimer);
  }, []);

  return (
    <section className="py-16 bg-white/60 px-4 md:px-6 border-t border-orange-100 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block with Slideshow Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">What we offer</h3>
            <p className="text-sm text-slate-500 mt-1">Viewing our freshly curated culinary executions</p>
          </div>
          
          {/* Manual Control Overrides */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => scrollSlider("left")}
              className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-orange-500 hover:text-orange-600 transition shadow-sm active:scale-95"
              title="Slide Left"
            >
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => scrollSlider("right")}
              className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-orange-500 hover:text-orange-600 transition shadow-sm active:scale-95"
              title="Slide Right"
            >
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Sliding Snap Container */}
        <div 
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-2"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="snap-start shrink-0 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] aspect-square bg-orange-100/30 border border-orange-50/60 rounded-2xl overflow-hidden relative shadow-sm"
            >
              <img 
                src={img.url} 
                alt={`Everyday Favichi Eats Food Display ${img.id}`}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'p-4', 'text-slate-400', 'text-[10px]', 'font-bold', 'text-center', 'bg-slate-50');
                  e.target.parentNode.innerHTML = "<span>[Drop picture inside public/ folder named: gallery-" + img.id + ".jpg]</span>";
                }}
                className="w-full h-full object-cover select-none pointer-events-none" 
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}