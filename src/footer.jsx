import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 text-center py-6 text-xs border-t border-slate-900">
      <p>© {new Date().getFullYear()} Everyday Favichi_eats. All rights reserved.</p>
      <p className="text-slate-700 mt-1 font-mono">Engineered by SP Technologies</p>
    </footer>
  );
}