import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 px-6 text-center text-xs border-t border-slate-900 relative z-10">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Social Navigation Node Layer */}
        <div className="flex justify-center items-center gap-4 flex-wrap pb-2">
          <a 
            href="https://www.instagram.com/everyday_favichi?igsh=MTNjN3B1djBiZXdhbg%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-slate-900 hover:bg-orange-600/10 hover:text-orange-500 border border-slate-800/80 px-4 py-2 rounded-xl text-slate-300 font-bold tracking-tight transition"
          >
            Instagram
          </a>
          <a 
            href="https://youtube.com/@favichi_eats?si=84sbT-zsbpav822r" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-slate-900 hover:bg-orange-600/10 hover:text-orange-500 border border-slate-800/80 px-4 py-2 rounded-xl text-slate-300 font-bold tracking-tight transition"
          >
            YouTube
          </a>
          <a 
            href="https://www.tiktok.com/@favichi_eats?_r=1&_t=ZS-97AlpSTsD48" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-slate-900 hover:bg-orange-600/10 hover:text-orange-500 border border-slate-800/80 px-4 py-2 rounded-xl text-slate-300 font-bold tracking-tight transition"
          >
            TikTok
          </a>
          <a 
            href="https://www.facebook.com/share/1BveaghUms/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-slate-900 hover:bg-orange-600/10 hover:text-orange-500 border border-slate-800/80 px-4 py-2 rounded-xl text-slate-300 font-bold tracking-tight transition"
          >
            Facebook
          </a>
        </div>

        <div className="border-t border-slate-900/60 pt-6">
          <p className="font-semibold text-slate-400">© {new Date().getFullYear()} Everyday Favichi_eats. All Rights Reserved.</p>
          <p className="mt-1 text-slate-600">Premium Culinary Delivery and Event Experience Logistics.</p>
        </div>

      </div>
    </footer>
  );
}