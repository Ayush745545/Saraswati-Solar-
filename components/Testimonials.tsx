import React, { useState } from 'react';
import { Star, Quote, MapPin, Play, Camera, CheckCircle2, ShieldCheck } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<number | null>(null);

  const reviews = [
    {
      name: "Dr. Sharma",
      location: "Deoband",
      text: "Electricity bill dropped from ₹4000 to ₹200. The net metering process was handled completely by them. My meter literally runs backwards now!",
      rating: 5,
      hasVideo: true,
      videoSrc: "/videos/testimonials-bg.mp4",
      videoPoster: "/img/trusted-neighbors-bg.jpg"
    },
    {
      name: "Rajesh Kumar",
      location: "Talheri Buzurg",
      text: "The team from Saraswati Solar was very professional. They installed the 3kW system in just 2 days. The subsidy amount was credited within a month.",
      rating: 5,
      hasVideo: false
    },
    {
      name: "Amit Singh",
      location: "Saharanpur",
      text: "I was worried about structure strength, but they used heavy galvanized iron. Very sturdy work. Highly recommended for Adani panels.",
      rating: 5,
      hasVideo: false
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand text-xs font-bold tracking-wider mb-6 uppercase">
            <CheckCircle2 className="w-4 h-4" /> Trusted by Neighbors
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            See what the <span className="text-brand">community</span> is saying
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Join 500+ happy families in Saharanpur district who have switched to solar with us.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-50 relative flex flex-col hover:shadow-[0_25px_60px_rgba(45,102,246,0.08)] transition-all duration-500 group"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-brand/5 group-hover:text-brand/10 transition-colors" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand text-brand" />
                ))}
              </div>

              <div className="flex-1">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-8">
                  "{review.text}"
                </p>
              </div>

              {/* Video Preview if hasVideo */}
              {review.hasVideo && (
                <div className="mb-8 relative rounded-3xl overflow-hidden aspect-video bg-slate-100 group/video">
                  {isVideoPlaying === index ? (
                    <video 
                      src={review.videoSrc} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <img 
                        src={review.videoPoster} 
                        alt="Video Thumbnail" 
                        className="w-full h-full object-cover"
                      />
                      <button 
                        onClick={() => setIsVideoPlaying(index)}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all group-hover:bg-black/10"
                      >
                        <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl group-hover/video:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-brand fill-brand ml-1" />
                        </div>
                      </button>
                    </>
                  )}
                </div>
              )}

              <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand font-bold text-xl group-hover:bg-brand group-hover:text-white transition-colors">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">{review.name}</p>
                  <div className="flex items-center gap-1.5 text-slate-400 font-medium text-sm">
                    <MapPin className="w-3.5 h-3.5 text-brand" />
                    {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Proof Section */}
        <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
          <div className="bg-brand rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-[0_30px_70px_rgba(45,102,246,0.3)]">
            {/* Decorative Background Circles */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="bg-white/10 p-8 rounded-[2.5rem] backdrop-blur-md border border-white/20 shrink-0">
                <ShieldCheck className="w-20 h-20 text-white" />
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-6 translate-y-[-4px]">
                  Net Metering Specialists
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  We Handle UPPCL Paperwork End-to-End
                </h3>
                <p className="text-xl text-white/80 leading-relaxed font-medium max-w-2xl mb-10">
                  Our technicians manage the complete application, bi-directional meter installation, and inspection scheduling. You won't have to visit any government office.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span className="text-sm font-bold opacity-90">Instant Approvals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span className="text-sm font-bold opacity-90">Direct Subsidy Credit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span className="text-sm font-bold opacity-90">VIP Liaisoning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;