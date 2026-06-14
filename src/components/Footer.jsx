import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 px-6 text-center text-xs border-t border-slate-900 relative z-10">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* High-priority Social Brand Icons Row - TOP */}
        <div className="flex justify-center items-center gap-6">
          <a href="https://www.instagram.com/everyday_favichi?igsh=MTNjN3B1djBiZXdhbg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-orange-500 transition p-2 bg-slate-900 rounded-xl border border-slate-800" title="Instagram">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://youtube.com/@favichi_eats?si=84sbT-zsbpav822r" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-orange-500 transition p-2 bg-slate-900 rounded-xl border border-slate-800" title="YouTube">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@favichi_eats?_r=1&_t=ZS-97AlpSTsD48" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-orange-500 transition p-2 bg-slate-900 rounded-xl border border-slate-800" title="TikTok">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.69 4.14 1.13 1.2 2.68 1.92 4.31 2.05v3.63c-1.3-.01-2.6-.33-3.76-.92-.89-.46-1.68-1.12-2.3-1.92v6.23c0 1.29-.27 2.56-.79 3.72-.57 1.26-1.44 2.36-2.5 3.19-1.28.98-2.83 1.56-4.46 1.67-1.42.09-2.85-.18-4.15-.79a8.76 8.76 0 01-4.32-4.78C-.3 15.02-.17 13.2 0 11.45c.42-2.12 1.62-4.05 3.39-5.32A8.61 8.61 0 018.66 4.7c.07 1.23.05 2.46.01 3.69-.65.04-1.3.21-1.88.52-.75.4-1.37.99-1.78 1.72-.47.83-.62 1.8-.42 2.73.18.84.62 1.6 1.25 2.15.69.59 1.57.9 2.48.87.82.02 1.63-.23 2.3-.7.71-.52 1.19-1.31 1.34-2.17.13-.77.11-1.56.11-2.34V0h.43z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/share/1BveaghUms/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-orange-500 transition p-2 bg-slate-900 rounded-xl border border-slate-800" title="Facebook">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        <div className="border-t border-slate-900/60 pt-6">
          <p className="font-semibold text-slate-400"> © {new Date().getFullYear()} Everyday Favichi_eats. All Rights Reserved.</p>
          <p className="mt-1 text-slate-600">Engineered by SolutionPro Technologies.</p>
        </div>

      </div>
    </footer>
  );
}