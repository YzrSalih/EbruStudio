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
            
            {/* Service Card 1: Workshops - Tulip (Lale) Geometry Analysis */}
            <Card3D className="h-auto min-h-[400px] md:h-[450px] w-full">
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              
              <div className="card-element relative w-full h-48 md:h-64 border bg-ebru-indigo/90 backdrop-blur-xl rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center border-white/20 shadow-inner">
                {/* Tulip Construction Blueprint */}
                <div className="relative w-full h-full flex items-center justify-center">
                   <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 200">
                      {/* Technical Construction Circles (Faint) */}
                      <g opacity="0.1" stroke="white" strokeWidth="0.5" fill="none">
                         <circle cx="100" cy="100" r="60" />
                         <circle cx="100" cy="80" r="40" />
                         <line x1="100" y1="20" x2="100" y2="180" strokeDasharray="2 2" />
                      </g>

                      {/* The Lale (Tulip) - Built with Paths */}
                      <g transform="translate(100, 100)">
                         {/* Stem path */}
                         <path d="M0 80 Q 0 40, 0 0" stroke="white" strokeWidth="1" strokeOpacity="0.4" fill="none" strokeDasharray="100">
                            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" fill="freeze" />
                         </path>
                         
                         {/* Petals - Left */}
                         <path d="M0 0 Q -30 -20, -10 -60 Q 0 -40, 0 0" fill="none" stroke="#991b1b" strokeWidth="1.5">
                            <animate attributeName="stroke-dasharray" from="0, 200" to="200, 0" dur="3s" repeatCount="indefinite" />
                         </path>
                         {/* Petals - Right */}
                         <path d="M0 0 Q 30 -20, 10 -60 Q 0 -40, 0 0" fill="none" stroke="#991b1b" strokeWidth="1.5">
                            <animate attributeName="stroke-dasharray" from="0, 200" to="200, 0" dur="3s" repeatCount="indefinite" />
                         </path>
                         {/* Petals - Middle */}
                         <path d="M0 0 Q 0 -30, 0 -80" stroke="white" strokeWidth="0.8" strokeOpacity="0.6" fill="none" strokeDasharray="5 5">
                            <animate attributeName="y2" from="0" to="-80" dur="2s" repeatCount="indefinite" />
                         </path>
                      </g>

                      {/* Measurement Markers */}
                      <g stroke="white" strokeWidth="0.5" strokeOpacity="0.3">
                         <line x1="60" y1="40" x2="140" y2="40" />
                         <line x1="60" y1="35" x2="60" y2="45" />
                         <line x1="140" y1="35" x2="140" y2="45" />
                      </g>
                      <text x="100" y="35" fill="white" fontSize="5" opacity="0.4" textAnchor="middle">WIDTH: 80.0px</text>

                      {/* Technical Labels */}
                      <text x="10" y="25" fill="white" fontSize="6" opacity="0.4" className="font-mono">TULIP_GEOMETRY_#{52}</text>
                      <text x="10" y="185" fill="white" fontSize="5" opacity="0.5">CURVE_STABILITY: 100%</text>
                      
                      {/* Corner Markers */}
                      <path d="M10 40 V10 H40" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                   </svg>
                </div>
              </div>
              
              <div className="card-element relative z-10">
                <h3 className="text-2xl md:text-3xl font-medium text-white font-display mb-3 tracking-tight">Traditional Marbling Workshops</h3>
                <p className="text-white max-w-sm text-sm md:text-base leading-relaxed">Learn the ancient techniques using tragacanth water and horsehair brushes in our immersive studio sessions.</p>
              </div>
            </Card3D>

            {/* Service Card 2: Commissions - Motif Synthesis Analysis */}
            <Card3D className="w-full h-auto min-h-[400px] md:h-[450px]">
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

              <div className="card-element w-full h-48 md:h-64 mb-6 border bg-ebru-indigo/90 backdrop-blur-xl rounded-[2rem] overflow-hidden flex items-center justify-center border-white/20 shadow-inner relative">
                <svg className="w-full h-full max-w-[300px]" viewBox="0 0 300 160">
                   <g opacity="0.1" stroke="white" strokeWidth="0.5">
                      <circle cx="150" cy="80" r="40" fill="none" />
                      <circle cx="150" cy="80" r="60" fill="none" />
                      <line x1="150" y1="20" x2="150" y2="140" />
                   </g>
                   <g transform="translate(150, 80)">
                      <path d="M0 -30 Q 15 -15, 0 0 Q -15 -15, 0 -30" fill="none" stroke="#991b1b" strokeWidth="1">
                         <animate attributeName="stroke-dasharray" from="0, 100" to="100, 0" dur="3s" repeatCount="indefinite" />
                      </path>
                      <path d="M30 0 Q 15 15, 0 0 Q 15 -15, 30 0" fill="none" stroke="#d97706" strokeWidth="1">
                         <animate attributeName="stroke-dasharray" from="0, 100" to="100, 0" dur="3s" repeatCount="indefinite" begin="0.7s" />
                      </path>
                      <path d="M0 30 Q -15 15, 0 0 Q 15 15, 0 30" fill="none" stroke="white" strokeWidth="1">
                         <animate attributeName="stroke-dasharray" from="0, 100" to="100, 0" dur="3s" repeatCount="indefinite" begin="1.4s" />
                      </path>
                      <path d="M-30 0 Q -15 -15, 0 0 Q -15 15, -30 0" fill="none" stroke="#991b1b" strokeWidth="1">
                         <animate attributeName="stroke-dasharray" from="0, 100" to="100, 0" dur="3s" repeatCount="indefinite" begin="2.1s" />
                      </path>
                   </g>
                   <text x="10" y="25" fill="white" fontSize="6" opacity="0.4">MOTIF_GEOMETRY_V4</text>
                   <text x="10" y="145" fill="white" fontSize="5" opacity="0.5">SYMMETRY: OPTIMAL</text>
                </svg>
                <div className="absolute top-4 right-6 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-ebru-red animate-pulse"></div>
                   <span className="text-[7px] font-bold text-white tracking-[0.2em] uppercase">Synthesis Active</span>
                </div>
              </div>
              
              <div className="card-element relative z-10">
                <h3 className="text-2xl md:text-3xl font-medium text-white font-display mb-3 tracking-tight">Custom Art Commissions</h3>
                <p className="text-white max-w-sm text-sm md:text-base leading-relaxed">Bespoke marbling pieces tailored for your interiors, brand identity, or personal collection.</p>
              </div>
            </Card3D>

            {/* Service Card 3: Supplies */}
            <Card3D className="w-full h-auto min-h-[400px] md:h-[450px]">
              <div className="mt-10 mb-10 absolute top-0 right-0 bottom-0 left-0 opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              
              <div className="card-element relative w-full h-48 md:h-64 border bg-ebru-indigo/80 backdrop-blur-lg rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center border-white/20 shadow-inner">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                   <svg className="w-full h-full scale-125 md:scale-110" viewBox="0 0 400 200" preserveAspectRatio="none">
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
                      <g stroke="white" strokeWidth="1" strokeOpacity="0.5" fill="none">
                        {[...Array(6)].map((_, i) => (
                          <path key={i} d={`M-50 ${20 + i * 35} Q 0 ${10 + i * 35}, 50 ${20 + i * 35} T 150 ${20 + i * 35} T 250 ${20 + i * 35} T 350 ${20 + i * 35} T 450 ${20 + i * 35}`}>
                            <animateTransform attributeName="transform" type="translate" from="0 0" to="-100 0" dur="3s" repeatCount="indefinite" />
                          </path>
                        ))}
                      </g>
                      <text x="20" y="30" fill="white" fontSize="8" opacity="0.6" className="tracking-widest uppercase">Taraklı Pattern Analysis</text>
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