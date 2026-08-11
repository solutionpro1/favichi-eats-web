import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function PopupAd({ imageUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full z-10 transition"
        >
          <X size={20} />
        </button>
        <img 
          src={imageUrl} 
          alt="Advertisement" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
