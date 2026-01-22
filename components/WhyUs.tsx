import React from 'react';

const WhyUs: React.FC = () => {
  interface Step {
    step: string;
    description: string;
    video?: string;
    image?: string;
    alt: string;
  }

  const steps: Step[] = [
    {
      step: "Step 1: Install Solar Panels",
      description: "Start with a smart investment in solar energy.",
      video: "/videos/step-1-install-panels.mp4",
      alt: "Solar panel installation team working on rooftop in Saharanpur"
    },
    {
      step: "Step 2: Save on Electricity Bills",
      description: "In just 3-4 years, recover your 100% investment through savings.",
      video: "/videos/step-2-savings.mp4",
      alt: "Electricity bill savings animation"
    },
    {
      step: "Step 3: Enjoy Free Electricity",
      description: "Since solar panels last more than 25 years, all power generated for the next 22 years will be FREE.",
      video: "/videos/step-3-free-electricity.mp4",
      alt: "Modern home with rooftop solar panels enjoying free electricity"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section with Blue Bar Style */}
        <div className="flex justify-center mb-16">
          <div className="bg-blue-600 text-white py-4 px-8 md:px-16 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl md:text-4xl font-bold text-center">Your Solar Investment Journey</h2>
          </div>
        </div>

        {/* Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-900/20 group"
            >
              {/* Image Section */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                {item.video ? (
                  <video
                    src={item.video}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                )}
              </div>

              {/* Content Section (Blue Background) */}
              <div className="bg-blue-600 p-8 flex-1 flex flex-col items-center text-center relative">
                {/* Decorative Arrow for flow (hidden on mobile last item) */}
                {index < 2 && (
                  <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20 text-blue-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 drop-shadow-lg">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4">{item.step}</h3>
                <div className="w-16 h-1 bg-orange-400 mb-6 rounded-full"></div>
                <p className="text-blue-50 text-lg leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm max-w-2xl mx-auto italic">
            *ROI calculations are based on standard government tariffs and average solar generation in Uttar Pradesh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;