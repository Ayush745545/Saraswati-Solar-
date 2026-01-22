import React, { useState } from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Rajesh Kumar",
      location: "Talheri Buzurg",
      text: "The team from Saraswati Solar was very professional. They installed the 3kW system in just 2 days. The subsidy amount was credited to my account within a month.",
      rating: 5,
      color: "bg-orange-600",
      accent: "text-orange-200"
    },
    {
      name: "Amit Singh",
      location: "Saharanpur",
      text: "I was worried about the structure strength, but they used heavy galvanized iron. Very sturdy work. Highly recommended for anyone looking for Adani panels.",
      rating: 5,
      color: "bg-blue-600",
      accent: "text-blue-200"
    },
    {
      name: "Dr. Sharma",
      location: "Deoband",
      text: "Electricity bill dropped from ₹4000 to ₹200. The net metering process was handled completely by them. Excellent service.",
      rating: 5,
      color: "bg-emerald-600",
      accent: "text-emerald-200"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 user-select-none pointer-events-none">
        <img
          src="/img/trusted-neighbors-bg.jpg"
          alt="Modern Indian home with solar panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Neighbors</h2>
          <p className="text-lg text-slate-400">See what the community is saying.</p>
        </div>

        {/* Interactive Folder Deck */}
        <div className="h-[500px] w-full max-w-6xl mx-auto flex items-end justify-center gap-2 md:gap-4 p-4">
          {reviews.map((review, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative rounded-t-3xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                  overflow-hidden border-t border-x border-white/10 shadow-2xl
                  ${isActive ? `w-full md:w-[70%] h-full z-10 ${review.color}` : 'w-16 md:w-24 h-[300px] hover:h-[320px] bg-slate-800 hover:bg-slate-700 z-0'}
                `}
              >
                {/* Inactive State Label */}
                <div className={`absolute inset-0 flex flex-col items-center pt-8 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-sm font-bold mb-4">
                    {review.name.charAt(0)}
                  </div>
                  <div className="[writing-mode:vertical-rl] rotate-180 text-slate-400 font-bold tracking-widest uppercase text-xs whitespace-nowrap opacity-60">
                    {review.location}
                  </div>
                </div>

                {/* Active State Content */}
                <div className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-between transition-all duration-500 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                  <Quote className={`absolute top-6 right-6 md:top-12 md:right-12 w-20 h-20 ${review.accent} opacity-20 rotate-12`} />

                  <div className="relative z-10 mt-4 md:mt-8">
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-white text-white" />
                      ))}
                    </div>
                    <p className="text-xl md:text-3xl font-medium text-white leading-relaxed tracking-tight">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-xl border border-white/10">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{review.name}</p>
                      <div className="flex items-center gap-1 text-white/80 text-sm">
                        <MapPin className="w-3 h-3" />
                        {review.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;