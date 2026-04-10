import React from 'react';
import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import ServiceMap from './ServiceMap';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-24 pb-24 overflow-hidden border-t border-slate-800">
      {/* Video Background Section */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none">
        <video
          src="/videos/footer-bg.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Sun className="h-8 w-8 text-brand" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-white tracking-tight underline decoration-brand/30">SARASWATI SOLAR</span>
                <span className="text-[10px] font-medium text-slate-400 tracking-[0.2em] uppercase">Power Solution</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Saharanpur's premier Adani Solar EPC partner. We provide complete rooftop solar solutions with end-to-end subsidy support.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all shadow-lg"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all shadow-lg"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all shadow-lg"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-white font-bold text-lg mb-6 border-b border-brand/20 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#about" className="hover:text-brand transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand" /> Our Story</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand" /> Expert Solutions</a></li>
              <li><a href="#contact" className="hover:text-brand transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand" /> Free Estimator</a></li>
              <li><a href="#incentives" className="hover:text-brand transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand" /> Subsidy Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-b border-brand/20 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <span className="pt-1">Regional Center, Talheri Buzurg,<br />Saharanpur, UP 247554</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <span className="font-bold text-white">+91 98971 47441</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <span className="hover:text-white transition-colors">help@upsolarexpert.com</span>
              </li>
            </ul>
          </div>

          {/* Service Area Map */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-b border-brand/20 pb-2 inline-block">Service Area</h3>
            <div className="w-full h-44 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl relative">
              <ServiceMap />
              <div className="absolute bottom-2 right-2 z-20 bg-slate-900/90 backdrop-blur-md px-2 py-1 rounded text-[10px] text-slate-400 border border-slate-700">
                Saharanpur District
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-10 text-center">
          <p className="text-sm font-medium text-slate-500">
            &copy; {new Date().getFullYear()} Saraswati Solar Power Solution. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;