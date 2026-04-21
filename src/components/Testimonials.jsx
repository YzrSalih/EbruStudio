import React, { useRef, useState } from 'react';

const TestimonialCard = ({ src, poster, avatar, name, role, isMutedByDefault = true, containerClass = "" }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(isMutedByDefault);

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <div className={`group relative rounded-fluid overflow-hidden aspect-[9/16] border border-white/20 bg-ebru-indigo/90 transition-transform duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl ${containerClass}`}>
      <div className="absolute inset-0 w-full h-full bg-ebru-indigo">
        <video 
          ref={videoRef}
          src={src} 
          poster={poster} 
          className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out opacity-50 w-full h-full object-cover sepia-[.3]" 
          muted={isMuted} 
          loop 
          playsInline 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut}
        />
      </div>

      <button 
        className="hover:bg-ebru-indigo transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 cursor-pointer text-white bg-ebru-indigo/80 opacity-0 z-30 border-white/30 border rounded-full pt-2.5 pr-2.5 pb-2.5 pl-2.5 absolute top-4 right-4 backdrop-blur-md translate-y-2 flex items-center justify-center" 
        onClick={toggleMute} 
        aria-label="Toggle Mute"
      >
        {isMuted ? (
          <iconify-icon icon="solar:volume-cross-linear" width="16" height="16"></iconify-icon>
        ) : (
          <iconify-icon icon="solar:volume-loud-linear" width="16" height="16"></iconify-icon>
        )}
      </button>

      <div className="absolute inset-0 bg-gradient-to-t from-ebru-indigo via-ebru-indigo/60 to-transparent opacity-95 transition-opacity duration-300 pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
        <div className="flex items-center gap-4 border-t border-white/20 pt-5">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
            <img src={avatar} className="group-hover:sepia-0 transition-all duration-500 w-full h-full object-cover sepia-[.5]" alt={name} />
          </div>
          <div>
            <div className="text-sm font-bold text-white">{name}</div>
            <div className="uppercase text-[10px] font-semibold text-white tracking-wider mt-1">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="md:py-32 md:px-6 overflow-hidden border-white/10 border-t pt-20 pr-4 pb-20 pl-4 relative" id="testimonials">
      <div className="z-10 max-w-[1400px] mr-auto ml-auto relative">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-medium text-white font-display mb-4 md:mb-6 tracking-tight">Community Stories</h2>
          <p className="uppercase text-xs text-white font-semibold tracking-widest">Hear from our students and collectors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <TestimonialCard 
            src="https://cdn.coverr.co/videos/coverr-painting-on-a-canvas-2661/1080p.mp4"
            poster="https://images.unsplash.com/photo-1579541591970-e5989139611b?w=800&q=80"
            avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
            name="Elif Yılmaz"
            role="Workshop Student"
          />
          <TestimonialCard 
            src="https://cdn.coverr.co/videos/coverr-artist-mixing-colors-2662/1080p.mp4"
            avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80"
            name="James Thorne"
            role="Art Collector"
            containerClass="md:-mt-12"
          />
          <TestimonialCard 
            src="https://cdn.coverr.co/videos/coverr-woman-painting-4318/1080p.mp4"
            poster="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
            avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80"
            name="Sarah K."
            role="Interior Designer"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;