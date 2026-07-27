import React from "react";
import { Instagram, MessageSquare, Youtube, Facebook } from "lucide-react";

export default function FloatingSocials() {
  // Exact client-provided URLs preserving all tracking parameters safely
  const whatsappUrl = "https://wa.me/2348154064345";
  const instagramUrl = "https://www.instagram.com/everyday_favichi?igsh=MTNjN3B1djBiZXdhbg%3D%3D&utm_source=qr";
  const tiktokUrl = "https://www.tiktok.com/@favichi_eats?_r=1&_t=ZS-97AlpSTsD48";
  const youtubeUrl = "https://youtube.com/@favichi_eats?si=84sbT-zsbpav822r";
  const facebookUrl = "https://www.facebook.com/share/1BveaghUms/?mibextid=wwXIfr";

  return (
    <div className="fixed bottom-28 right-4 md:bottom-8 md:right-8 flex flex-col gap-2.5 z-40">
      
      {/* 1. WhatsApp Connection Row */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group border border-white/10"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={20} className="group-hover:scale-105 transition duration-300 md:w-5 md:h-5" />
      </a>

      {/* 2. Instagram Profile Row */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group border border-white/20"
        title="Follow us on Instagram"
      >
        <Instagram size={20} className="group-hover:rotate-6 transition duration-300 md:w-5 md:h-5" />
      </a>

      {/* 3. TikTok Custom SVG Profile Row */}
      <a
        href={tiktokUrl}
        target="_blank"
        rel="noreferrer"
        className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group border border-white/10"
        title="Follow us on TikTok"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-5 h-5 md:w-5 md:h-5 group-hover:-translate-y-0.5 transition duration-300"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.63 4.15 1.02 1.05 2.41 1.69 3.91 1.78v3.91c-1.51-.01-3-.45-4.27-1.29-.68-.46-1.28-1.05-1.74-1.74V15.5c-.06 2.34-1.07 4.57-2.79 6.16-1.89 1.68-4.47 2.45-6.99 2.1-2.92-.35-5.51-2.42-6.42-5.22-.99-3.14-.07-6.73 2.37-8.91 1.83-1.6 4.31-2.3 6.74-1.9v3.91c-1.37-.25-2.82.16-3.8 1.14-.94.99-1.29 2.43-.93 3.73.35 1.25 1.48 2.19 2.78 2.36 1.41.16 2.87-.51 3.49-1.78.3-.65.42-1.37.42-2.08V.02z" />
        </svg>
      </a>

      {/* 4. YouTube Channel Row */}
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noreferrer"
        className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group border border-white/10"
        title="Subscribe on YouTube"
      >
        <Youtube size={20} className="group-hover:scale-105 transition duration-300 md:w-5 md:h-5" />
      </a>

      {/* 5. Facebook Page Row */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
        className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group border border-white/10"
        title="Like us on Facebook"
      >
        <Facebook size={20} className="group-hover:scale-105 transition duration-300 md:w-5 md:h-5" />
      </a>

    </div>
  );
}