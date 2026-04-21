import React from 'react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t pt-16 md:pt-24 pb-8 md:pb-12 border-white/10 bg-ebru-indigo/95 backdrop-blur-md">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent to-transparent opacity-50 via-white/40"></div>

      <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] blur-[100px] rounded-full pointer-events-none mix-blend-screen bg-ebru-ochre/10"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16 md:mb-20">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-4 group mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Minimalist Zen Tulip Logo */}
                <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-ebru-ochre group-hover:drop-shadow-[0_0_8px_rgba(217,119,6,0.6)] transition-all duration-500">
                  <path d="M20 32 Q 10 25, 12 12 Q 20 20, 20 32" strokeWidth="2" strokeLinecap="round" />
                  <path d="M20 32 Q 30 25, 28 12 Q 20 20, 20 32" strokeWidth="2" strokeLinecap="round" />
                  <path d="M20 32 V 8" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-display font-medium tracking-[0.2em] text-white group-hover:text-ebru-ochre transition-colors duration-300 uppercase">
                EBRU<span className="font-light opacity-60">TERAPIA</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs text-white">
              Preserving the ancient art of painting on water. Istanbul, London, New York.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Explore</h4>
              <ul className="space-y-4 text-sm font-medium text-white">
                <li><a href="#" className="transition-colors hover:text-gray-300">Gallery</a></li>
                <li><a href="#" className="transition-colors hover:text-gray-300">Workshops</a></li>
                <li><a href="#" className="transition-colors hover:text-gray-300">Techniques</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Studio</h4>
              <ul className="space-y-4 text-sm font-medium text-white">
                <li><a href="#" className="transition-colors hover:text-gray-300">Supplies</a></li>
                <li><a href="#" className="transition-colors hover:text-gray-300">Exhibitions</a></li>
                <li><a href="#" className="transition-colors hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Socials</h4>
              <ul className="space-y-4 text-sm font-medium text-white">
                <li><a href="#" className="transition-colors hover:text-gray-300">Instagram</a></li>
                <li><a href="#" className="transition-colors hover:text-gray-300">Pinterest</a></li>
                <li><a href="#" className="transition-colors hover:text-gray-300">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Newsletter</h4>
            <div className="relative">
              <input type="email" placeholder="Email address" className="focus:outline-none focus:border-gray-400 transition-colors text-sm text-gray-800 bg-gray-100 placeholder-gray-500 w-full border-gray-300 border rounded-fluid pt-3.5 pr-4 pb-3.5 pl-5" />
              <button className="absolute right-2 top-2 p-1.5 rounded-full transition-colors bg-ebru-ochre text-white hover:bg-ebru-ochre/80 flex items-center justify-center border border-white/20">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[16px] h-[16px]"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-white/10">
          <div className="text-[10px] font-bold uppercase text-white tracking-widest text-center md:text-left">© 2025 EBRUTERAPIA. All Rights Reserved.</div>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-white">
            <a href="#" className="transition-colors hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;