import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const VideoCard = ({ 
  src, 
  poster, 
  themeColor, 
  badgeText, 
  technique, 
  duration, 
  delayClass = "" 
}) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const themeColors = {
    ochre: "bg-ebru-ochre hover:shadow-[0_0_40px_-10px_rgba(217,119,6,0.3)] hover:border-ebru-ochre/50 group-hover:via-ebru-ochre/50",
    red: "bg-ebru-red hover:shadow-[0_0_40px_-10px_rgba(153,27,27,0.3)] hover:border-ebru-red/50 group-hover:via-ebru-red/50",
    cream: "bg-white hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:border-white/50 group-hover:via-white/50 text-ebru-indigo"
  };

  const getThemeClass = (type) => themeColors[themeColor]?.split(' ').find(c => c.startsWith(type)) || '';

  const handleMouseEnter = () => {
    if (videoRef.current) {
      if (themeColor === 'red') {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play().catch(() => {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div 
      className={`video-card group relative aspect-[9/16] rounded-fluid overflow-hidden bg-ebru-indigo/80 border border-white/20 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 ${getThemeClass('hover:shadow')} ${getThemeClass('hover:border')}`}
      style={delayClass ? { transitionDelay: delayClass } : {}}
    >
      <div className="absolute inset-0 w-full h-full bg-ebru-indigo">
        <div 
          className="relative w-full h-full" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <video 
            ref={videoRef}
            src={src} 
            poster={poster}
            className="group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out group-hover:grayscale-0 opacity-70 w-full h-full object-cover grayscale-img" 
            loop 
            playsInline
            muted={themeColor === 'red' || isMuted}
          />
          <button 
            onClick={toggleMute} 
            className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-ebru-indigo/80 backdrop-blur-md border border-white/30 text-white hover:bg-ebru-indigo transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer flex items-center justify-center"
          >
            {isMuted ? (
              <iconify-icon icon="solar:volume-cross-linear" width="16" height="16"></iconify-icon>
            ) : (
              <iconify-icon icon="solar:volume-loud-linear" width="16" height="16"></iconify-icon>
            )}
          </button>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-ebru-indigo via-ebru-indigo/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-75 text-white">
          <iconify-icon icon="solar:play-bold" width="20" height="20" class="ml-1"></iconify-icon>
        </div>
      </div>

      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-fluid bg-ebru-indigo/80 backdrop-blur-xl border border-white/30 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
        <div className={`w-2 h-2 rounded-full animate-pulse ${getThemeClass('bg-')}`}></div>
        <span className="text-[10px] font-bold text-white tracking-wider uppercase">{badgeText}</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex flex-col gap-2">
          {themeColor === 'ochre' && (
            <div className="flex items-center gap-2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ebru-ochre/20 text-ebru-ochre shadow-[0_0_15px_rgba(217,119,6,0.3)]">
                <iconify-icon icon="solar:waterdrops-bold-duotone" width="16" height="16"></iconify-icon>
              </span>
            </div>
          )}
          <div className={`h-[2px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent mt-2 mb-2 transition-all duration-500 rounded-full ${getThemeClass('group-hover:via-')}`}></div>
          <div className="flex justify-between items-center text-[11px] font-medium text-white">
            <span className="flex items-center gap-1.5"><iconify-icon icon="solar:palette-linear" width="14" height="14"></iconify-icon> {technique}</span>
            <span className="flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear" width="14" height="14"></iconify-icon> {duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".video-card", {
        scrollTrigger: {
          trigger: "#work",
          start: "top 80%", 
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="md:py-32 md:px-6 border-white/10 border-t pt-20 pr-4 pb-20 pl-4 relative" id="work">
      <div className="z-10 max-w-[1400px] mr-auto ml-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:mb-16 gap-6 md:gap-8 mb-16 items-start justify-between">
          <div className="gap-x-4 gap-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-medium mb-4 md:mb-6 text-white">Gallery of Marbling</h2>
            <p className="text-base md:text-lg text-white max-w-lg">Watch the hypnotic dance of organic pigments as they expand on the surface of tragacanth water.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-white uppercase tracking-widest border border-white/20 px-4 py-2 rounded-fluid bg-ebru-indigo/80">
            <span className="w-2 h-2 rounded-full bg-ebru-red animate-pulse shadow-[0_0_8px_rgba(153,27,27,0.8)]"></span>
            Studio Sessions
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <VideoCard 
            src="https://cdn.coverr.co/videos/coverr-mixing-paint-in-water-5250/1080p.mp4"
            themeColor="ochre"
            badgeText="Classic"
            technique="Battal Ebru"
            duration="Workshop 1"
          />
          <VideoCard 
            src="https://cdn.coverr.co/videos/coverr-ink-in-water-1563/1080p.mp4"
            themeColor="red"
            badgeText="Abstract"
            technique="Gelgit Ebru"
            duration="Commission"
            delayClass="100ms"
          />
          <VideoCard 
            src="https://cdn.coverr.co/videos/coverr-abstract-paint-swirls-5246/1080p.mp4"
            themeColor="cream"
            badgeText="Floral"
            technique="Necmeddin Ebru"
            duration="Exhibition"
            delayClass="200ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;