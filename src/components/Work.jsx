import React, { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoCard = ({ embedId, badgeText, technique, duration, delayClass }) => {
  return (
    <div 
      className="video-card group relative aspect-[9/16] rounded-[32px] overflow-hidden bg-[#1a4d4b] border border-white/20 cursor-pointer shadow-2xl transition-all duration-700 hover:-translate-y-4 opacity-0"
      style={delayClass ? { transitionDelay: delayClass } : {}}
    >
      {/* YouTube Embed Container */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1&loop=1&playlist=${embedId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`} 
          title={technique}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-full object-cover scale-[1.5]"
        ></iframe>
        {/* Overlay to prevent interaction and maintain card feel */}
        <div className="absolute inset-0 z-10 bg-transparent"></div>
      </div>
      
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F5C5B]/90 via-transparent to-transparent z-20 pointer-events-none"></div>

      {/* Content */}
      <div className="absolute top-6 right-6 z-30">
        <div className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-ebru-gold animate-pulse"></div>
          <span className="text-[9px] font-bold text-white tracking-widest uppercase">{badgeText}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 z-30 pointer-events-none text-left">
        <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-2">{duration}</p>
        <h3 className="text-white text-xl font-display font-medium mb-4">{technique}</h3>
        <div className="w-10 h-0.5 bg-ebru-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

const Work = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Title Animation
      gsap.to(".work-title-anim", {
        scrollTrigger: {
          trigger: ".work-title-anim",
          start: "top 90%",
          toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      });

      // Cards Animation
      gsap.to(".video-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      });
    }, containerRef);

    // Force a refresh after a small delay to catch production rendering issues
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-ebru-petrol relative overflow-hidden" id="work">
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none grayscale bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-20 work-title-anim opacity-0 translate-y-10 text-left">
          <h2 className="text-4xl md:text-7xl font-display font-medium text-white mb-6 lowercase">
            ebru galerisi
          </h2>
          <p className="text-lg text-white/70 max-w-2xl font-sans italic">
            "Renklerin su üzerindeki sessiz şiiri. Her eser, bir rüyanın suya yansımasıdır."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <VideoCard 
            embedId="5U7z8-e1U7U"
            badgeText="Klasik"
            technique="Battal Ebru"
            duration="Seans 01"
          />
          <VideoCard 
            embedId="S_7-20P9H5k"
            badgeText="Soyut"
            technique="Gelgit Ebru"
            duration="Özel Çalışma"
          />
          <VideoCard 
            embedId="BvH_V0n5S-g"
            badgeText="Lale"
            technique="Çiçekli Ebru"
            duration="Sergi Hazırlığı"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;