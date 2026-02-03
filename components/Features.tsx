import React from 'react';
import { MapPin, Sun, Cable, Zap, PenTool } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: "Local Installation Team",
      description: "Our dedicated team in Talheri Buzurg ensures rapid installation and lifetime local support for Saharanpur residents."
    },
    {
      icon: <Sun className="w-8 h-8 text-orange-600" />,
      title: "Adani Solar Panels",
      description: "We use authorized Adani Solar modules (Mono PERC / TOPCon) for maximum efficiency and long-term reliability."
    },
    {
      icon: <Cable className="w-8 h-8 text-orange-600" />,
      title: "ISI Havells Cabling",
      description: "We never compromise on safety. We use high-grade ISI marked Havells DC/AC cabling for loss-free power transmission."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Copper Earthing",
      description: "Superior protection against surges with 99.9% pure copper earthing kits, ensuring your home's safety during storms."
    },
    {
      icon: <PenTool className="w-8 h-8 text-orange-600" />,
      title: "Galvanized Structure",
      description: "Hot-dip galvanized iron (GI) mounting structures designed to withstand high winds and prevent rust for decades."
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Why Choose Saraswati Solar?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Premium Quality Components & Local Expertise</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
             We also provide full support for <strong>Net Metering with UPPCL</strong>, making your transition to solar smooth and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Go Solar?</h3>
            <p className="text-blue-200">Book a free site survey in Saharanpur & get a custom quote today.</p>
          </div>
          <a href="#contact" className="whitespace-nowrap bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;