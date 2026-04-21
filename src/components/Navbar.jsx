import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed transition-transform duration-300 z-50 pt-4 px-4 md:pt-6 md:px-6 top-0 right-0 left-0" id="navbar">
      <div className="flex flex-col glass max-w-[1600px] rounded-fluid md:rounded-fluid mr-auto ml-auto px-4 py-3 md:px-8 items-center justify-between transition-all duration-300">
        <div className="flex w-full items-center justify-between">
          <a href="/" className="flex items-center gap-4 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Minimalist Zen Tulip Logo */}
              <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-ebru-ochre group-hover:drop-shadow-[0_0_8px_rgba(217,119,6,0.6)] transition-all duration-500">
                {/* Left Petal arc */}
                <path d="M20 32 Q 10 25, 12 12 Q 20 20, 20 32" strokeWidth="2" strokeLinecap="round" />
                {/* Right Petal arc */}
                <path d="M20 32 Q 30 25, 28 12 Q 20 20, 20 32" strokeWidth="2" strokeLinecap="round" />
                {/* Middle Stem/Petal Detail */}
                <path d="M20 32 V 8" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-display font-medium tracking-[0.2em] text-white group-hover:text-ebru-ochre transition-colors duration-300 uppercase">
              EBRU<span className="font-light opacity-60">TERAPIA</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-12">
            <a href="#work" className="text-xs font-medium uppercase tracking-widest transition-colors hover-trigger hover:text-gray-300 text-white">Gallery</a>
            <a href="#services" className="uppercase transition-colors hover-trigger hover:text-gray-300 text-xs font-medium text-white tracking-widest">Workshops</a>
            <a href="#testimonials" className="uppercase transition-colors hover-trigger hover:text-gray-300 text-xs font-medium text-white tracking-widest">Stories</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              className="uppercase transition-colors hover-trigger hover:bg-ebru-ochre/90 cursor-pointer text-xs font-semibold text-white tracking-wider bg-ebru-ochre rounded-fluid px-6 py-2.5 hidden md:block border border-white shadow-lg shadow-ebru-ochre/20" 
              onClick={() => window.location.href='#services'} 
              role="button"
            >
              BOOK WORKSHOP
            </button>
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="24" height="24"></iconify-icon>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu w-full flex flex-col gap-6 pt-6 pb-4 border-t border-white/10 mt-4 md:hidden animate-fade-in bg-ebru-indigo/95 rounded-b-fluid backdrop-blur-xl">
            <div className="flex flex-col gap-4 items-center">
              <a href="#work" className="text-sm font-medium uppercase tracking-widest text-white hover:text-gray-300 w-full text-center py-3 border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#services" className="text-sm font-medium uppercase tracking-widest text-white hover:text-gray-300 w-full text-center py-3 border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>Workshops</a>
              <a href="#testimonials" className="text-sm font-medium uppercase tracking-widest text-white hover:text-gray-300 w-full text-center py-3" onClick={() => setMobileMenuOpen(false)}>Stories</a>
            </div>
            <button 
              className="w-full uppercase transition-colors hover:bg-ebru-ochre/90 cursor-pointer text-xs font-semibold text-white border border-white tracking-wider bg-ebru-ochre rounded-fluid py-4 mt-2 shadow-lg shadow-ebru-ochre/20" 
              onClick={() => window.location.href='#services'}
            >
              BOOK WORKSHOP
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;