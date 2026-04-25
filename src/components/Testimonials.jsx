import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Testimonials = () => {
  const containerRef = useRef(null);
  const newsletterRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".journal-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
      
      gsap.from(".news-anim", {
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Defterim Section */}
      <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-12 w-full bg-ebru-cream overflow-hidden" id="journal">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          
          {/* LEFT IMAGE CONTENT */}
          <div className="w-full md:w-1/2 flex justify-start relative journal-anim">
            {/* Main Arched Image Container */}
            <div className="relative w-[300px] md:w-[350px] aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl shadow-ebru-petrol/10">
              {/* Replace src with a real marbling art image */}
              <img 
                src="/images/ebru_journal.png" 
                alt="Defterim Ebru" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ebru-cream mix-blend-overlay opacity-10 pointer-events-none"></div>
            </div>
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10 journal-anim">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-ebru-petrol mb-6 lowercase relative">
              defterim
              <svg className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 text-ebru-gold animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
            </h2>
            <p className="text-sm md:text-base font-sans font-medium text-ebru-petrol/80 max-w-sm mt-6 mb-8 leading-relaxed">
              Düşünceler, notlar, ilhamlar ve daha fazlası bu defterde birikir.
            </p>
            <button className="px-6 py-2.5 bg-transparent border border-ebru-petrol/30 text-ebru-petrol text-[13px] font-sans font-semibold hover:bg-ebru-petrol/5 transition-colors">
              Defterime göz at
            </button>
          </div>

        </div>
      </section>

      {/* Newsletter Section */}
      <section ref={newsletterRef} className="w-full bg-ebru-cream relative overflow-hidden border-t border-ebru-petrol/5" id="newsletter">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 h-full min-h-[300px]">
          
          {/* LEFT: TEXT & FORM */}
          <div className="w-full md:w-1/2 flex flex-col items-start z-10 news-anim">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-ebru-petrol mb-8 lowercase tracking-tight relative">
              yeniliklerden haberdar ol
              <svg className="absolute -right-10 top-1 w-6 h-6 text-ebru-gold animate-pulse drop-shadow-[0_0_10px_rgba(212,168,90,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
            </h3>
            
            <div className="flex w-full max-w-[420px] shadow-lg shadow-ebru-petrol/5">
              <input 
                type="email" 
                placeholder="e-posta adresin" 
                className="w-full px-5 py-3.5 border border-ebru-petrol/10 bg-white/40 backdrop-blur-md text-sm font-sans focus:outline-none focus:border-ebru-petrol placeholder-ebru-petrol/30 text-ebru-petrol transition-all duration-300 rounded-l-sm"
               />
              <button className="px-8 py-3.5 bg-ebru-petrol text-ebru-cream text-sm font-sans font-medium hover:bg-ebru-petrol/90 transition-all duration-300 whitespace-nowrap cursor-pointer rounded-r-sm">
                abone ol
              </button>
            </div>
          </div>

          {/* RIGHT: MARBLING FLORAL MOTIF - Seamless Blend */}
          <div 
            className="absolute right-0 top-0 w-full md:w-3/5 h-full pointer-events-none z-0 news-anim"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)'
            }}
          >
             <img 
               src="/motif.png" 
               alt="Floral Motif" 
               className="w-full h-full object-cover object-right opacity-90 transition-opacity duration-700"
             />
          </div>

        </div>
      </section>
    </>
  );
};

export default Testimonials;