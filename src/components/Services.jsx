import React from 'react';

const Card3D = ({ children, className }) => {
  const handleMouseMove = (e) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    const inner = card.querySelector('.card-3d-inner');
    if (inner) {
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    const inner = card.querySelector('.card-3d-inner');
    if (inner) {
      inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <div 
      className={`card-3d-wrap group cursor-pointer hover-trigger ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-3d-inner relative w-full h-full border rounded-fluid p-6 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden bg-ebru-indigo/70 backdrop-blur-md border-white/20" style={{ transform: 'rotateX(0deg) rotateY(0deg)' }}>
        {children}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="z-10 border-white/10 border-t pt-16 md:pt-40 px-4 md:px-6 pb-0 relative" id="services">
      <div className="max-w-7xl mr-auto ml-auto gap-x-4 gap-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <div className="lg:sticky md:top-32 lg:mb-0 h-fit mb-12 relative top-0">
            <h2 className="md:text-5xl lg:text-6xl md:mb-8 text-4xl font-medium text-white tracking-tight font-display mb-6">Our <br />Expertise</h2>
            <p className="text-base md:text-lg text-white text-justify max-w-md mb-8 md:mb-12">We preserve and teach the ancient techniques of Ebru, using authentic materials to create mesmerizing fluid art.</p>
            <ul className="space-y-4 md:space-y-6 text-sm md:text-base">
              <li className="flex text-white gap-x-4 gap-y-4 items-center font-medium">
                <span className="w-2 h-2 rounded-full bg-ebru-ochre"></span> Traditional Marbling Workshops
              </li>
              <li className="flex text-white gap-x-4 gap-y-4 items-center font-medium">
                <span className="w-2 h-2 rounded-full bg-ebru-red"></span> Custom Art Commissions
              </li>
              <li className="flex text-white gap-x-4 gap-y-4 items-center font-medium">
                <span className="w-2 h-2 rounded-full bg-white"></span> Authentic Ebru Supplies
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8 md:gap-12 pb-16">
            
            {/* Service Card 1: Workshops */}
            <Card3D className="h-auto min-h-[400px] md:h-[450px] w-full">
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              <div className="card-element relative w-full h-48 md:h-64 border bg-ebru-indigo/80 backdrop-blur-lg rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center border-white/20 shadow-inner">
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40" preserveAspectRatio="none" viewBox="0 0 400 256">
                  <path d="M50 128 Q 150 50, 200 128 T 350 128" fill="none" stroke="rgba(217,119,6,0.4)" strokeWidth="2" strokeDasharray="6 6"></path>
                  <path d="M50 148 Q 150 70, 200 148 T 350 148" fill="none" stroke="rgba(153,27,27,0.3)" strokeWidth="1.5"></path>
                  <circle r="4" fill="#d97706" className="opacity-90">
                    <animateMotion repeatCount="indefinite" dur="4s" keyPoints="0;1" keyTimes="0;1" path="M50 128 Q 150 50, 200 128 T 350 128"></animateMotion>
                  </circle>
                  <circle r="3" fill="#ffffff" className="opacity-80">
                    <animateMotion repeatCount="indefinite" dur="3s" path="M50 148 Q 150 70, 200 148 T 350 148"></animateMotion>
                  </circle>
                </svg>

                <div className="relative z-10 w-full h-full flex items-center justify-between px-4 md:px-12">
                  <div className="flex flex-col gap-6 md:gap-10">
                    <div className="flex items-center gap-3 p-2 md:p-3 rounded-fluid bg-ebru-indigo border border-white/20 shadow-xl transform transition-transform hover:scale-105">
                      <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-ebru-ochre/20 text-ebru-ochre">
                        <iconify-icon icon="solar:pen-new-round-linear" width="20" height="20"></iconify-icon>
                      </div>
                      <div className="hidden sm:block pr-3">
                        <div className="text-[10px] font-semibold text-white tracking-wider uppercase">Brush</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-ebru-ochre/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-ebru-indigo to-black border border-ebru-ochre/40 shadow-[0_0_30px_rgba(217,119,6,0.15)] flex items-center justify-center relative z-10 animate-fluid">
                      <iconify-icon icon="solar:water-drop-linear" width="32" height="32" class="text-ebru-ochre"></iconify-icon>
                    </div>
                    <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap px-3 py-1.5 rounded-fluid bg-white/10 border border-white/30 backdrop-blur-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                      <span className="text-[9px] font-bold text-white tracking-widest uppercase">Tragacanth Basin</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 md:gap-10">
                    <div className="flex items-center justify-end gap-3 p-2 md:p-3 rounded-fluid bg-ebru-indigo border border-white/20 shadow-xl transform transition-transform hover:scale-105">
                      <div className="hidden sm:block pl-3 text-right">
                        <div className="text-[10px] font-semibold text-white tracking-wider uppercase">Paper</div>
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 text-white">
                        <iconify-icon icon="solar:document-linear" width="20" height="20"></iconify-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-element relative z-10">
                <h3 className="text-2xl md:text-3xl font-medium text-white font-display mb-3 tracking-tight">Traditional Marbling Workshops</h3>
                <p className="text-white max-w-sm text-sm md:text-base leading-relaxed">Learn the ancient techniques using tragacanth water and horsehair brushes in our immersive studio sessions.</p>
              </div>
            </Card3D>

            {/* Service Card 2: Commissions */}
            <Card3D className="w-full h-auto min-h-[400px] md:h-[450px]">
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)', backgroundSize: '100% 40px' }}></div>

              <div className="card-element w-full h-48 md:h-64 mb-6 relative perspective-1000">
                <div className="absolute top-6 left-6 w-[90%] h-52 border border-white/20 bg-white/[0.05] rounded-[1.5rem] -z-10 transform translate-x-3 translate-y-3"></div>
                
                <div className="w-full h-full bg-ebru-indigo border border-white/30 rounded-[1.5rem] overflow-hidden flex flex-col shadow-2xl relative group hover:-translate-y-2 transition-transform duration-500">
                  <div className="h-10 border-b border-white/20 flex items-center px-5 bg-white/10 justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-ebru-red/40 border border-ebru-red"></div>
                      <div className="w-3 h-3 rounded-full bg-ebru-ochre/40 border border-ebru-ochre"></div>
                      <div className="w-3 h-3 rounded-full bg-white/40 border border-white"></div>
                    </div>
                    <div className="text-[10px] text-white flex items-center gap-2 uppercase tracking-widest font-bold">
                      <span>studio_session</span>
                      <span className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    </div>
                  </div>

                  <div className="flex-1 p-4 md:p-6 flex flex-col relative text-[11px]">
                    <div className="flex-1 flex pr-2 pl-2 relative items-center justify-between">
                      <div className="flex flex-col items-center gap-3 z-10 w-16 md:w-20">
                        <div className="flex transition-colors text-ebru-ochre bg-ebru-ochre/10 w-10 h-10 md:w-12 md:h-12 border-ebru-ochre/30 border rounded-fluid relative shadow-[0_0_15px_rgba(217,119,6,0.15)] items-center justify-center">
                          <iconify-icon icon="solar:dropper-minimalistic-linear" width="24" height="24"></iconify-icon>
                        </div>
                        <span className="text-[9px] text-white font-semibold uppercase tracking-widest">Pigment</span>
                      </div>

                      <div className="relative z-10 flex flex-col items-center gap-2 px-4">
                        <div className="w-full h-[2px] bg-white/20 rounded-full w-24 relative overflow-hidden">
                           <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-ebru-ochre to-ebru-red w-[60%] animate-pulse"></div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 z-10 w-28 md:w-32">
                        <div className="flex items-center gap-3 bg-ebru-indigo/90 border border-white/20 p-2 rounded-xl shadow-lg">
                          <div className="w-6 h-6 rounded-full bg-ebru-red/20 flex items-center justify-center text-ebru-red border border-ebru-red/30">
                             <iconify-icon icon="solar:palette-linear" width="14" height="14"></iconify-icon>
                          </div>
                          <div className="flex flex-col w-full">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[9px] font-bold text-white leading-none">Mixing</span>
                              <span className="text-[8px] font-bold text-white">80%</span>
                            </div>
                            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden"><div className="w-[80%] h-full bg-ebru-red"></div></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/20 text-[10px] text-white font-medium flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-ebru-ochre"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></span>
                        <span>Preparing Tragacanth basin viscosity</span>
                      </div>
                      <div className="flex gap-2 items-center">
                         <span className="text-ebru-ochre"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></span>
                         <span>Grinding organic earth pigments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-element relative z-10">
                <h3 className="text-2xl md:text-3xl font-medium text-white font-display mb-3 tracking-tight">Custom Art Commissions</h3>
                <p className="text-white max-w-sm text-sm md:text-base leading-relaxed">Bespoke marbling pieces tailored for your interiors, brand identity, or personal collection.</p>
              </div>
            </Card3D>

            {/* Service Card 3: Supplies */}
            <Card3D className="w-full h-auto min-h-[400px] md:h-[450px]">
              <div className="mt-10 mb-10 absolute top-0 right-0 bottom-0 left-0 opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                <div className="hidden md:block absolute bottom-10 right-8 w-52 bg-ebru-indigo/95 backdrop-blur-xl border border-white/30 rounded-[1.5rem] p-4 shadow-2xl transform rotate-3 transition-transform duration-700 group-hover:rotate-0 group-hover:-translate-y-2 pointer-events-none">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-widest text-white uppercase">Inventory</span>
                    <div className="h-2 w-2 rounded-full bg-ebru-ochre shadow-[0_0_10px_rgba(217,119,6,0.6)] animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/30 text-white">
                      <iconify-icon icon="solar:box-minimalistic-linear" width="20" height="20"></iconify-icon>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">Rose Branch Brushes</span>
                      <span className="text-[10px] font-bold text-ebru-ochre">In Stock: Authentic</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-element relative w-full h-48 md:h-64 border bg-ebru-indigo/80 backdrop-blur-lg rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center border-white/20 shadow-inner">
                <div className="relative w-full h-full flex items-center justify-center scale-75 md:scale-100">
                  <div className="absolute border rounded-full border-ebru-red/30 w-64 h-64 animate-[spin_25s_linear_infinite]"></div>
                  <div className="absolute border rounded-full border-ebru-ochre/30 w-48 h-48 animate-[spin_20s_linear_infinite_reverse]"></div>
                  <div className="absolute border rounded-full border-white/30 w-32 h-32 animate-pulse"></div>
                  
                  <div className="relative z-10 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.15)] animate-fluid">
                    <iconify-icon icon="solar:palette-round-linear" width="28" height="28" class="text-white"></iconify-icon>
                  </div>

                  <div className="absolute top-1/4 right-1/4 transform translate-x-6 -translate-y-6">
                    <div className="w-10 h-10 bg-ebru-red/20 border border-ebru-red/50 rounded-full flex items-center justify-center backdrop-blur-md animate-bounce" style={{ animationDuration: '3.5s' }}>
                      <iconify-icon icon="solar:brush-linear" width="18" height="18" class="text-ebru-red"></iconify-icon>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 left-1/4 transform -translate-x-6 translate-y-4">
                    <div className="w-10 h-10 bg-ebru-ochre/20 border border-ebru-ochre/50 rounded-full flex items-center justify-center backdrop-blur-md animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1s' }}>
                       <iconify-icon icon="solar:dropper-linear" width="18" height="18" class="text-ebru-ochre"></iconify-icon>
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 right-1/3 transform translate-x-4 translate-y-6">
                    <div className="w-10 h-10 bg-white/20 border border-white/50 rounded-full flex items-center justify-center backdrop-blur-md animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                      <iconify-icon icon="solar:bucket-linear" width="18" height="18" class="text-white"></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-element relative z-10">
                <h3 className="text-2xl md:text-3xl font-medium text-white font-display mb-3 tracking-tight">Authentic Ebru Supplies</h3>
                <p className="text-white max-w-sm text-sm md:text-base leading-relaxed">Source high-quality organic pigments, traditional horsehair brushes, and perfectly balanced marbling trays.</p>
              </div>
            </Card3D>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;