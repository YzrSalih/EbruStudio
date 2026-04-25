import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-text-anim", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[80vh] min-h-[600px] flex items-center px-6 md:px-12 overflow-hidden bg-ebru-cream" 
      id="hero"
    >
      {/* BACKGROUND IMAGE - FULL RIGHT SIDE COVERAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The Artwork - Filling the entire right side */}
        <img 
          src="/moon_marbling.png" 
          alt="Ebru Moon" 
          className="absolute right-0 top-0 h-full w-full md:w-2/3 object-cover opacity-95 transition-all duration-700"
          style={{ objectPosition: 'center 15%' }}
        />
        {/* SMOOTH GRADIENT OVERLAY - FULL WIDTH TO PREVENT LINES */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-ebru-cream via-ebru-cream/80 to-transparent z-1" 
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10 pt-10">
        <div className="w-full md:w-1/2 flex flex-col items-start text-left hero-text-anim">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-[#1F5C5B] leading-[1.1] mb-8 lowercase relative">
            suyun <br/>
            rüyası lehçe
            <svg className="absolute -right-8 md:-right-10 top-12 w-6 h-6 text-ebru-gold animate-pulse drop-shadow-[0_0_15px_rgba(212,168,90,0.6)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
          </h1>
          <p className="text-lg md:text-xl font-sans font-medium text-[#1F5C5B]/80 max-w-sm leading-relaxed mb-12">
            Okunuşu akıcı, akılda kalıcı, estetik ve size özel. Ebru sanatının rüya gibi dokunuşları.
          </p>
          <button className="px-10 py-4 bg-[#1F5C5B] text-white text-base font-sans font-medium hover:bg-[#1F5C5B]/90 transition-all shadow-xl shadow-[#1F5C5B]/20">
            Daha fazlası
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;