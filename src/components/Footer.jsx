import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-ebru-petrol py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side - Logo */}
        <div className="flex items-start group cursor-pointer">
           <span className="text-3xl md:text-4xl font-display font-medium text-ebru-cream lowercase tracking-tight group-hover:text-ebru-gold transition-colors">
             ebruterapia
           </span>
           <svg className="w-5 h-5 ml-2 mt-2 text-ebru-gold animate-pulse shadow-[0_0_15px_rgba(212,168,90,0.5)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
           </svg>
        </div>
 
        {/* Center - Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          <a href="#hero" className="text-base font-sans font-medium text-ebru-cream/70 hover:text-ebru-gold transition-colors lowercase tracking-wide">anasayfa</a>
          <a href="#work" className="text-base font-sans font-medium text-ebru-cream/70 hover:text-ebru-gold transition-colors lowercase tracking-wide">galeri</a>
          <a href="#about" className="text-base font-sans font-medium text-ebru-cream/70 hover:text-ebru-gold transition-colors lowercase tracking-wide">hakkımda</a>
          <a href="#journal" className="text-base font-sans font-medium text-ebru-cream/70 hover:text-ebru-gold transition-colors lowercase tracking-wide">defterim</a>
          <a href="#contact" className="text-base font-sans font-medium text-ebru-cream/70 hover:text-ebru-gold transition-colors lowercase tracking-wide">iletişim</a>
        </div>

        {/* Right Side - Socials */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-ebru-cream/70">
          <a href="#" className="hover:text-ebru-gold transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
               <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
               <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="hover:text-ebru-gold transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="hover:text-ebru-gold transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
               <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;