import React from 'react';
import { ClipboardCheck, Wrench, FileCheck, IndianRupee } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "1. Free Site Survey",
      description: "Our engineer visits your Talheri Buzurg location to analyze roof space and shadow patterns."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "2. Expert Installation",
      description: "We install the structure and Adani panels within 3-5 days with full safety compliance."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "3. Net Metering",
      description: "We handle all UPPCL paperwork and liaise with the electricity department for your net meter."
    },
    {
      icon: <IndianRupee className="w-8 h-8" />,
      title: "4. Subsidy Release",
      description: "Once commissioned, we help you file the claim to receive the direct subsidy in your bank."
    }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-400 font-bold tracking-wider uppercase text-sm">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Your Journey to Free Electricity</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-blue-700 z-0 transform translate-y-4"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-blue-800 border-4 border-blue-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:border-orange-400 transition-colors duration-300 shadow-xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="#contact" className="inline-block border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full transition-colors">
             Start Your Application
           </a>
        </div>
      </div>
    </section>
  );
};

export default Process;