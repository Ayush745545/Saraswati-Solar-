import React from 'react';
import { MapPin } from 'lucide-react';

const Gallery: React.FC = () => {
  const projects = [
    {
      title: "5kW Residential Setup",
      location: "Talheri Buzurg",
      image: "/solar/installation-1.png",
      alt: "5kW Residential Solar Panel System Installation in Talheri Buzurg"
    },
    {
      title: "10kW Commercial Unit",
      location: "Saharanpur City",
      image: "/solar/installation-2.png",
      alt: "10kW Commercial Solar Power Plant in Saharanpur"
    },
    {
      title: "3kW Home Installation",
      location: "Deoband",
      image: "/solar/installation-3.png",
      alt: "3kW Home Rooftop Solar Panels in Deoband"
    },
    {
      title: "Raised Structure Mount",
      location: "Nakur",
      image: "/solar/installation-4.png",
      alt: "High Rise Solar Mounting Structure Installation in Nakur"
    },
    {
      title: "8kW Farm Installation",
      location: "Rampur Maniharan",
      image: "/solar/installation-5.png",
      alt: "8kW Solar System for Agriculture Farm in Rampur Maniharan"
    },
    {
      title: "12kW School Project",
      location: "Gangoh",
      image: "/solar/installation-6.png",
      alt: "12kW Solar Power System for School in Gangoh"
    },
    {
      title: "6kW Residential System",
      location: "Nanauta",
      image: "/solar/installation-7.png",
      alt: "6kW Residential Solar Installation in Nanauta"
    }
  ];

  // Duplicate the array to create a seamless loop
  const displayProjects = [...projects, ...projects];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Recent Installations</h2>
          <p className="mt-4 text-slate-600">See how we are powering homes across Saharanpur district.</p>
        </div>
      </div>

      <div className="w-full">
        <div className="gallery-track px-4">
          {displayProjects.map((project, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg h-80 w-80 md:w-96 flex-shrink-0 cursor-pointer">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <div className="flex items-center gap-1 text-sm text-orange-300 mt-1">
                  <MapPin className="w-3 h-3" />
                  {project.location}
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