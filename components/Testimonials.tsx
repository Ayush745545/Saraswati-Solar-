import React, { useState } from 'react';
import { Star, Quote, MapPin, Play, Camera } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const reviews = [
    {
      name: "Dr. Sharma",
      location: "Deoband",
      text: "Electricity bill dropped from ₹4000 to ₹200. The net metering process was handled completely by them. My meter literally runs backwards now!",
      rating: 5,
      color: "bg-emerald-600",
      accent: "text-emerald-200",
      /* REPLACE WITH REAL VIDEO: Place your 30-second customer video at /videos/testimonial-dr-sharma.mp4 */
      hasVideo: true,
      videoSrc: "/videos/testimonials-bg.mp4",
      videoPoster: "/img/trusted-neighbors-bg.jpg"
    },
    {
      name: "Rajesh Kumar",
      location: "Talheri Buzurg",
      text: "The team from Saraswati Solar was very professional. They installed the 3kW system in just 2 days. The subsidy amount was credited to my account within a month.",
      rating: 5,
      color: "bg-orange-600",
      accent: "text-orange-200",
      hasVideo: false
    },
    {
      name: "Amit Singh",
      location: "Saharanpur",
      text: "I was worried about the structure strength, but they used heavy galvanized iron. Very sturdy work. Highly recommended for anyone looking for Adani panels.",
      rating: 5,
      color: "bg-blue-600",
      accent: "text-blue-200",
      hasVideo: false
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
                onClick={() => { setActiveIndex(index); setIsVideoPlaying(false); }}
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

                  {/* Video Testimonial Play Button */}
                  {review.hasVideo && isActive && !isVideoPlaying && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsVideoPlaying(true); }}
                      className="absolute top-6 left-6 md:top-12 md:left-auto md:right-36 z-20 flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full transition-all border border-white/20 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 text-emerald-700 fill-emerald-700 ml-0.5" />
                      </div>
                      <span className="text-sm font-bold">Watch Video</span>
                    </button>
                  )}

                  {/* Video Player Overlay */}
                  {review.hasVideo && isActive && isVideoPlaying && (
                    <div className="absolute inset-0 z-30 bg-black/90 flex items-center justify-center p-4"
                      onClick={(e) => { e.stopPropagation(); setIsVideoPlaying(false); }}
                    >
                      <video
                        src={review.videoSrc}
                        poster={review.videoPoster}
                        controls
                        autoPlay
                        className="max-w-full max-h-full rounded-xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  )}

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
                    {review.hasVideo && (
                      <div className="ml-auto flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                        <Camera className="w-3.5 h-3.5 text-white/70" />
                        <span className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Video Review</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Net Meter Proof Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Net Metering Proof</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">We Handle UPPCL Paperwork End-to-End</h3>
              <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                Our technicians manage the complete UPPCL application, bi-directional meter installation, and inspection scheduling — 
                ensuring your solar system is commissioned without you ever having to visit a government office.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 mt-4 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 px-6 py-2 rounded-full border border-orange-500/20 font-bold text-sm transition-all">
                Learn about Net Metering →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;