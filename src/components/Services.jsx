import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-anim", {
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
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-12 w-full bg-ebru-cream overflow-hidden" id="about">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24">
        
        {/* LEFT TEXT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10 about-anim">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-ebru-petrol mb-6 lowercase relative">
            hakkımda
            <svg className="absolute -bottom-6 left-2 w-4 h-4 text-ebru-gold animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
          </h2>
          <p className="text-sm md:text-base font-sans font-medium text-ebru-petrol/80 max-w-sm mt-6 mb-8 leading-relaxed">
            Ebruterapia, suyun dinginliğinden ilham alan, geleneksel teknikleri modern bir ruhla harmanlayan bir sanat atölyesidir.
          </p>
          <button className="px-6 py-2.5 bg-transparent border border-ebru-petrol/30 text-ebru-petrol text-[13px] font-sans font-semibold hover:bg-ebru-petrol/5 transition-colors">
            Benim hikayem
          </button>
        </div>

        {/* RIGHT IMAGE CONTENT */}
        <div className="w-full md:w-1/2 flex justify-end relative about-anim">
          {/* Main Arched Image Container */}
          <div className="relative w-[300px] md:w-[350px] aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl shadow-ebru-petrol/10">
            {/* Replace src with a real marbling art image */}
            <img 
              src="/images/ebru_profile.png" 
              alt="Hakkımda Ebru" 
              className="w-full h-full object-cover"
            />
            {/* Subtle Overlay to blend with background */}
            <div className="absolute inset-0 bg-ebru-cream mix-blend-overlay opacity-10 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;