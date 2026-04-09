import React from 'react';
import { MapPin, Zap, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const projects = [
    {
      title: "Residential Setup",
      capacity: "5kW",
      location: "Talheri Buzurg",
      image: "/solar/installation-1.png",
      alt: "5kW Residential Solar Panel System Installation in Talheri Buzurg"
    },
    {
      title: "Commercial Unit",
      capacity: "10kW",
      location: "Saharanpur City",
      image: "/solar/installation-2.png",
      alt: "10kW Commercial Solar Power Plant in Saharanpur"
    },
    {
      title: "Home Installation",
      capacity: "3kW",
      location: "Deoband",
      image: "/solar/installation-3.png",
      alt: "3kW Home Rooftop Solar Panels in Deoband"
    },
    {
      title: "Raised Structure Mount",
      capacity: "7kW",
      location: "Nakur",
      image: "/solar/installation-4.png",
      alt: "High Rise Solar Mounting Structure Installation in Nakur"
    },
    {
      title: "Farm Installation",
      capacity: "8kW",
      location: "Rampur Maniharan",
      image: "/solar/installation-5.png",
      alt: "8kW Solar System for Agriculture Farm in Rampur Maniharan"
    },
    {
      title: "School Project",
      capacity: "12kW",
      location: "Gangoh",
      image: "/solar/installation-6.png",
      alt: "12kW Solar Power System for School in Gangoh"
    },
    {
      title: "Residential System",
      capacity: "6kW",
      location: "Nanauta",
      image: "/solar/installation-7.png",
      alt: "6kW Residential Solar Installation in Nanauta"
    }
  ];

  // Duplicate the array to create a seamless loop
  const displayProjects = [...projects, ...projects];

  return (
    <section id="gallery" className="py-24 bg-transparent overflow-hidden relative">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.75rem)); }
        }
        .gallery-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .gallery-track:hover {
          animation-play-state: paused;
        }
        /* Fade edges for smooth scrolling effect */
        .fade-edges::before, .fade-edges::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 10;
          pointer-events: none;
        }
        .fade-edges::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }
        .fade-edges::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }
        @media (max-width: 768px) {
          .fade-edges::before, .fade-edges::after {
            width: 80px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-wider mb-4 uppercase">
            <Camera className="w-4 h-4" /> Real Customer Projects
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Recent Installations
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            See how we are powering homes, schools, and businesses across Saharanpur district with premium solar logic.
          </p>
        </div>
      </div>

      <div className="w-full relative fade-edges">
        <div className="gallery-track px-4 md:px-0">
          {displayProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-[400px] w-[300px] md:w-[400px] flex-shrink-0 cursor-pointer hover:shadow-2xl transition-all duration-500 bg-slate-100"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              />
              
              {/* Capacity Badge - Top Right */}
              <div className="absolute top-4 right-4 z-20 bg-blue-600 text-white px-3 py-1.5 rounded-lg font-black text-sm flex items-center gap-1 shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                <Zap className="w-3.5 h-3.5 fill-current" /> {project.capacity}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content Panel - Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-1 text-[10px] text-blue-200 font-bold uppercase tracking-wider mb-1.5">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </div>
                  <h3 className="font-bold text-xl leading-tight mb-2 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-orange-500 rounded-full group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;