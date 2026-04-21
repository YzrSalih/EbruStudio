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
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <div className="card-element relative w-full h-48 md:h-64 border bg-ebru-indigo/80 backdrop-blur-lg rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center border-white/20 shadow-inner">
                {/* Surface Tension & Pigment Analysis Schematic */}
                <div className="relative w-full h-full p-6 flex items-center justify-center">
                  <svg className="w-full h-full max-w-[320px]" viewBox="0 0 320 180">
                    {/* Technical Grid Overlay */}
                    <path d="M0 90 L320 90 M160 0 L160 180" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                    
                    {/* Tray Boundary */}
                    <rect x="20" y="20" width="280" height="140" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
                    <text x="25" y="32" fill="white" fontSize="5" opacity="0.4" className="font-mono tracking-tighter">SURFACE_TENSION_MONITOR // V2.0</text>
                    
                    {/* Expanding Pigment Rings with Technical Data */}
                    <g>
                      {[
                        { cx: 100, cy: 80, r: 40, color: "#d97706", delay: "0s" },
                        { cx: 220, cy: 110, r: 30, color: "#991b1b", delay: "1.5s" }
                      ].map((ring, i) => (
                        <g key={i}>
                           <circle cx={ring.cx} cy={ring.cy} r="0" fill="none" stroke={ring.color} strokeWidth="0.5" strokeOpacity="0.6">
                             <animate attributeName="r" from="0" to={ring.r} dur="4s" repeatCount="indefinite" begin={ring.delay} />
                             <animate attributeName="opacity" values="0.6;0" dur="4s" repeatCount="indefinite" begin={ring.delay} />
                           </circle>
                           {/* Coordinate Marker */}
                           <line x1={ring.cx} y1={ring.cy} x2={ring.cx + 20} y2={ring.cy - 20} stroke="white" strokeWidth="0.5" strokeOpacity="0.3">
                              <animate attributeName="opacity" values="0;0.5;0" dur="4s" repeatCount="indefinite" begin={ring.delay} />
                           </line>
                           <text x={ring.cx + 22} y={ring.cy - 22} fill="white" fontSize="4" opacity="0">
                              X:{ring.cx} Y:{ring.cy} R:VAR
                              <animate attributeName="opacity" values="0;0.5;0" dur="4s" repeatCount="indefinite" begin={ring.delay} />
                           </text>
                        </g>
                      ))}
                    </g>
                    
                    {/* Vertical Scan Line */}
                    <g>
                      <line x1="0" y1="20" x2="0" y2="160" stroke="white" strokeWidth="1" strokeOpacity="0.3">
                        <animate attributeName="x1" from="20" to="300" dur="5s" repeatCount="indefinite" />
                        <animate attributeName="x2" from="20" to="300" dur="5s" repeatCount="indefinite" />
                      </line>
                      <text x="20" y="170" fill="white" fontSize="5" opacity="0.6" className="font-mono">
                         SCAN_STATUS: OK // DISTRIBUTION_STABLE
                         <animate attributeName="x" from="20" to="240" dur="5s" repeatCount="indefinite" />
                      </text>
                    </g>

                    {/* Corner Markers */}
                    <path d="M20 30 V20 H30 M290 20 H300 V30 M300 150 V160 H290 M30 160 H20 V150" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                  </svg>
                </div>

                <div className="absolute inset-x-0 bottom-12 flex items-center justify-center pointer-events-none">
                   <div className="flex items-center gap-6">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40">
                          <iconify-icon icon="solar:bottle-linear" width="16" height="16"></iconify-icon>
                        </div>
                        <span className="text-[7px] text-white/40 font-bold tracking-widest uppercase">PIGMENT</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40">
                          <iconify-icon icon="solar:test-tube-linear" width="16" height="16"></iconify-icon>
                        </div>
                        <span className="text-[7px] text-white/40 font-bold tracking-widest uppercase">OX GALL</span>
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
                        <div className="flex transition-colors text-ebru-red bg-ebru-red/10 w-10 h-10 md:w-12 md:h-12 border-ebru-red/30 border rounded-fluid relative shadow-[0_0_15px_rgba(153,27,27,0.15)] items-center justify-center">
                          <iconify-icon icon="solar:palette-linear" width="24" height="24"></iconify-icon>
                        </div>
                        <span className="text-[9px] text-white font-semibold uppercase tracking-widest">Pigment</span>
                      </div>

                      {/* Tulip (Lale) Drawing Animation */}
                      <div className="relative z-10 flex flex-col items-center gap-2 px-4">
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                          {/* Stylized Bloom */}
                          <path 
                             d="M50 80 Q50 50 20 40 Q50 30 50 10 Q50 30 80 40 Q50 50 50 80" 
                             fill="none" 
                             stroke="white" 
                             strokeWidth="1.5"
                             strokeDasharray="200"
                             strokeDashoffset="200"
                          >
                            <animate attributeName="stroke-dashoffset" from="200" to="0" dur="4s" repeatCount="indefinite" />
                            <animate attributeName="stroke" values="#991b1b; white; #d97706; #991b1b" dur="8s" repeatCount="indefinite" />
                          </path>
                          {/* Stylus (Bız) following the path */}
                          <circle r="2" fill="white">
                            <animateMotion path="M50 80 Q50 50 20 40 Q50 30 50 10 Q50 30 80 40 Q50 50 50 80" dur="4s" repeatCount="indefinite" />
                          </circle>
                        </svg>
                      </div>

                      <div className="flex flex-col gap-3 z-10 w-28 md:w-32">
                        <div className="flex items-center gap-3 bg-ebru-indigo/90 border border-white/20 p-2 rounded-xl shadow-lg relative overflow-hidden group">
                          {/* Pulsating effect */}
                          <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/30 relative z-10">
                             <iconify-icon icon="solar:mask-hiring-linear" width="14" height="14"></iconify-icon>
                          </div>
                          <div className="flex flex-col w-full relative z-10">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[8px] font-bold text-white leading-none tracking-tight uppercase">Motif Resolution</span>
                            </div>
                            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                              <div className="h-full bg-white">
                                <animate attributeName="width" from="0%" to="100%" dur="4s" repeatCount="indefinite" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/20 text-[10px] text-white font-medium flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-ebru-ochre"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></span>
                        <span>Stylus pattern manipulation</span>
                      </div>
                      <div className="flex gap-2 items-center">
                         <span className="text-ebru-ochre"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></span>
                         <span>Traditional motif extraction</span>
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
                {/* Taraklı Ebru (Combed Pattern) Animation */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                   <svg className="w-full h-full scale-125 md:scale-110" viewBox="0 0 400 200" preserveAspectRatio="none">
                      {/* Base "Stones" patterns */}
                      <g opacity="0.4">
                         {[...Array(8)].map((_, i) => (
                           <g key={i}>
                              {[...Array(4)].map((_, j) => (
                                 <circle key={j} cx={50 + i * 45} cy={30 + j * 45} r="20" fill={i % 2 === 0 ? "#991b1b" : "#d97706"}>
                                    <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite" begin={`${(i+j)*0.2}s`} />
                                 </circle>
                              ))}
                           </g>
                         ))}
                      </g>
                      
                      {/* Comb (Tarak) motion that 'distorts' the pattern */}
                      <rect x="0" y="0" width="400" height="200" fill="none">
                         <animate attributeName="x" from="-400" to="400" dur="4s" repeatCount="indefinite" />
                      </rect>
                      
                      {/* Moving wave lines representing the comb dragging */}
                      <g stroke="white" strokeWidth="1" strokeOpacity="0.5" fill="none">
                        {[...Array(6)].map((_, i) => (
                          <path key={i} d={`M-50 ${20 + i * 35} Q 0 ${10 + i * 35}, 50 ${20 + i * 35} T 150 ${20 + i * 35} T 250 ${20 + i * 35} T 350 ${20 + i * 35} T 450 ${20 + i * 35}`}>
                            <animateTransform attributeName="transform" type="translate" from="0 0" to="-100 0" dur="3s" repeatCount="indefinite" />
                          </path>
                        ))}
                      </g>

                      {/* Tool Overlay */}
                      <text x="20" y="30" fill="white" fontSize="8" fontBold="true" opacity="0.6" className="tracking-widest uppercase">Taraklı Pattern Analysis</text>
                      <line x1="50" y1="10" x2="50" y2="190" stroke="white" strokeWidth="2" strokeDasharray="5 5">
                         <animate attributeName="x1" from="0" to="400" dur="4s" repeatCount="indefinite" />
                         <animate attributeName="x2" from="0" to="400" dur="4s" repeatCount="indefinite" />
                      </line>
                   </svg>
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