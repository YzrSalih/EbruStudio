import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      gsap.to('.mask-text span', {
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1
      });

      gsap.to(".animate-fade-in", { opacity: 1, duration: 1, delay: 0.5 });
      gsap.fromTo(".animate-fade-up", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" }
      );
    }, containerRef);

    // Canvas Organic Fluid Animation (expanding drops)
    const canvas = canvasRef.current;
    const ctx2d = canvas.getContext('2d');
    let width, height;
    let drops = [];
    const maxDrops = 15;
    let animationFrameId;

    class Drop {
      constructor(w, h) {
        this.w = w;
        this.h = h;
        this.reset();
        // Stagger initial radiuses
        this.radius = Math.random() * this.maxRadius;
      }
      reset() {
        this.x = Math.random() * this.w;
        this.y = Math.random() * this.h;
        this.radius = 0;
        this.maxRadius = Math.random() * 150 + 50;
        this.speed = Math.random() * 0.4 + 0.1;
        this.opacity = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.radius += this.speed;
        this.opacity -= 0.0015;
        if (this.opacity <= 0 || this.radius >= this.maxRadius) {
          this.reset();
        }
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(217, 119, 6, ${this.opacity})`; // Ochre
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner circle for marbling effect
        if (this.radius > 20) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius - 15, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(153, 27, 27, ${this.opacity * 0.5})`; // Earthy Red
          ctx.stroke();
        }
      }
    }

    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      drops = [];
      for (let i = 0; i < maxDrops; i++) {
        drops.push(new Drop(width, height));
      }
    };

    const animateCanvas = () => {
      ctx2d.clearRect(0, 0, width, height);
      drops.forEach(d => {
        d.update();
        d.draw(ctx2d);
      });
      animationFrameId = requestAnimationFrame(animateCanvas);
    };

    window.addEventListener('resize', initCanvas);
    initCanvas();
    animateCanvas();

    return () => {
      ctx.revert();
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={containerRef} className="min-h-[100dvh] flex flex-col overflow-hidden z-10 md:px-6 pr-4 pl-4 relative items-center justify-center">
      <canvas ref={canvasRef} className="pointer-events-none z-0 opacity-60 w-full h-full absolute top-0 right-0 bottom-0 left-0" id="hero-canvas"></canvas>
      <div className="z-0 pointer-events-none bg-gradient-to-t from-ebru-indigo via-transparent to-ebru-indigo/90 absolute top-0 right-0 bottom-0 left-0"></div>

      <div className="z-10 text-center max-w-[1400px] mr-auto ml-auto relative gap-x-12 gap-y-16">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-fluid border backdrop-blur-md mb-8 md:mb-12 hover-trigger opacity-0 animate-fade-in border-white/20 bg-white/5 shadow-lg shadow-ebru-indigo/50">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-ebru-ochre"></span>
          <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-white">Traditional Art Studio</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter leading-[0.95] mb-8 md:mb-12 mix-blend-normal text-white drop-shadow-2xl">
          <span className="mask-text"><span>FLUID</span></span>
          <span className="mask-text"><span className="text-white">EBRU</span></span>
          <span className="mask-text"><span>ARTISTRY</span></span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-8 md:mt-12 border-t pt-8 opacity-0 animate-fade-up border-white/20">
          <p className="text-sm text-white text-center md:text-left max-w-xs mb-8 md:mb-0">Discover the ancient art of painting on water, where every drop tells a unique story.</p>
          <div className="flex gap-12">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold font-display text-white">150+</div>
              <div className="text-[10px] uppercase tracking-widest text-white">Workshops Hosted</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold font-display text-white">10K+</div>
              <div className="text-[10px] uppercase tracking-widest text-white">Drops of Paint</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;