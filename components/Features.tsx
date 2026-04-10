import React from 'react';
import { MapPin, Sun, Cable, Zap, PenTool, ArrowRight, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Local Installation Team",
      description: "Our dedicated team in Talheri Buzurg ensures rapid installation and lifetime local support for Saharanpur residents.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-600",
      stat: "24hr",
      statLabel: "Response Time"
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Adani Solar Panels",
      description: "We use authorized Adani Solar modules (Mono PERC / TOPCon) for maximum efficiency and long-term reliability.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      borderColor: "border-orange-500",
      stat: "22%+",
      statLabel: "Module Efficiency"
    },
    {
      icon: <Cable className="w-6 h-6" />,
      title: "ISI Havells Cabling",
      description: "We never compromise on safety. We use high-grade ISI marked Havells DC/AC cabling for loss-free power transmission.",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-600",
      stat: "ISI",
      statLabel: "Certified Grade"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Copper Earthing",
      description: "Superior protection against surges with 99.9% pure copper earthing kits, ensuring your home's safety during storms.",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
      borderColor: "border-amber-500",
      stat: "99.9%",
      statLabel: "Pure Copper"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Galvanized Structure",
      description: "Hot-dip galvanized iron (GI) mounting structures designed to withstand high winds and prevent rust for decades.",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      borderColor: "border-slate-700",
      stat: "25+",
      statLabel: "Years Rust-Free"
    },
  ];

  return (
    <section id="features" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand text-xs font-bold tracking-wider mb-4 uppercase">
            <ShieldCheck className="w-4 h-4" /> Why Choose Saraswati Solar?
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Premium Quality Components & Local Expertise
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
             We also provide full support for <strong>Net Metering with UPPCL</strong>, making your transition to solar smooth and hassle-free.
          </p>
        </div>

        {/* Features Grid - Clean Corporate Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group flex flex-col relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${feature.iconBg.replace('bg-', 'bg-').replace('50', '500')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Header: Icon & Stat */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${feature.iconBg} ${feature.iconColor} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-black ${feature.iconColor} leading-none mb-1`}>{feature.stat}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{feature.statLabel}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm flex-1 mb-8">
                {feature.description}
              </p>

              {/* Bottom CTA */}
              <div className="mt-auto border-t border-slate-100 pt-4">
                <a 
                  href="#contact" 
                  className={`inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:${feature.iconColor} transition-colors group/link`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}

          {/* Contact / Action Card inside grid */}
          <div className="bg-brand rounded-3xl p-8 shadow-xl border border-brand flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Go Solar?</h3>
              <p className="text-brand-light/80 text-sm mb-8 px-4">
                Book a free site survey in Saharanpur & get a custom quote today.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-white text-brand hover:bg-brand-light font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-white/20 active:scale-[0.98]"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;