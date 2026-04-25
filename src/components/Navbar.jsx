import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 top-0 left-0 right-0 py-6 md:py-8 px-6 md:px-12 w-full bg-ebru-cream/90 backdrop-blur-md border-b border-ebru-petrol/10" id="navbar">
      <div className="flex max-w-[1400px] w-full mx-auto items-center justify-between">
        
        {/* LOGO */}
        <a href="/" className="flex items-start group">
           <span className="text-3xl md:text-4xl lg:text-[2.5rem] font-display font-medium text-ebru-petrol lowercase tracking-tight">
             ebruterapia
           </span>
           <svg className="w-5 h-5 md:w-6 md:h-6 ml-1 md:ml-2 mt-1 md:mt-2 text-ebru-gold animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
           </svg>
        </a>
        
        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14">
          <a href="#hero" className="text-[15px] lg:text-base font-sans font-medium text-ebru-petrol hover:text-ebru-gold transition-colors lowercase">anasayfa</a>
          <a href="#work" className="text-[15px] lg:text-base font-sans font-medium text-ebru-petrol hover:text-ebru-gold transition-colors lowercase">galeri</a>
          <a href="#about" className="text-[15px] lg:text-base font-sans font-medium text-ebru-petrol hover:text-ebru-gold transition-colors lowercase">hakkımda</a>
          <a href="#journal" className="text-[15px] lg:text-base font-sans font-medium text-ebru-petrol hover:text-ebru-gold transition-colors lowercase">defterim</a>
          <a href="#contact" className="text-[15px] lg:text-base font-sans font-medium text-ebru-petrol hover:text-ebru-gold transition-colors lowercase">iletişim</a>
          
          <button className="relative text-ebru-petrol hover:text-ebru-gold hover:rotate-12 transition-transform cursor-pointer ml-4 flex items-center justify-center">
             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
             </svg>
             <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 -right-1.5 text-ebru-gold animate-[pulse_2s_ease-in-out_infinite] shadow-sm">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
             </svg>
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-5 md:hidden">
          <button className="relative text-ebru-petrol hover:text-ebru-gold hover:rotate-12 transition-transform cursor-pointer flex items-center justify-center">
             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
             </svg>
             <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 -right-1.5 text-ebru-gold animate-[pulse_2s_ease-in-out_infinite] shadow-sm">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
             </svg>
          </button>
          <button 
            className="text-ebru-petrol hover:text-ebru-gold transition-colors block leading-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="30" height="30"></iconify-icon>
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-ebru-cream shadow-xl shadow-ebru-petrol/5 border-t border-ebru-petrol/10 py-8 px-6 flex flex-col gap-6 items-center">
          <a href="#hero" className="text-base font-sans font-medium text-ebru-petrol hover:text-ebru-gold lowercase" onClick={() => setMobileMenuOpen(false)}>anasayfa</a>
          <a href="#work" className="text-base font-sans font-medium text-ebru-petrol hover:text-ebru-gold lowercase" onClick={() => setMobileMenuOpen(false)}>galeri</a>
          <a href="#about" className="text-base font-sans font-medium text-ebru-petrol hover:text-ebru-gold lowercase" onClick={() => setMobileMenuOpen(false)}>hakkımda</a>
          <a href="#journal" className="text-base font-sans font-medium text-ebru-petrol hover:text-ebru-gold lowercase" onClick={() => setMobileMenuOpen(false)}>defterim</a>
          <a href="#contact" className="text-base font-sans font-medium text-ebru-petrol hover:text-ebru-gold lowercase" onClick={() => setMobileMenuOpen(false)}>iletişim</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;