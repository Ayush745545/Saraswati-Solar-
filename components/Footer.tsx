import React from 'react';
import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import ServiceMap from './ServiceMap';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-0 pb-8 overflow-hidden">
      {/* Video Background Section - Upper Crop */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-60 pointer-events-none overflow-hidden">
        <video
          src="/videos/footer-bg.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/10"></div>
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-6 w-6 text-orange-500" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-white tracking-tight">SARASWATI SOLAR</span>
                <span className="text-[10px] font-medium text-slate-400 tracking-widest">POWER SOLUTION</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Authorized Adani Solar Partner in Saharanpur. We provide complete rooftop solar solutions with MNRE subsidy support.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">Our Story</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Expert Solutions</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Free Estimator</a></li>
              <li><a href="#incentives" className="hover:text-orange-400 transition-colors">Subsidy Guide</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Locations</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Regional Center, Talheri Buzurg,<br />Saharanpur (U.P.)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>+91 98971 47441</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>help@upsolarexpert.com</span>
              </li>
            </ul>
          </div>

          {/* Map/Area */}
          <div className="flex flex-col h-full">
            <h3 className="text-white font-bold text-lg mb-4">Service Area</h3>
            <p className="text-sm text-slate-400 mb-4">
              We proudly serve Saharanpur district, Deoband, Nakur, Gangoh, and Rampur Maniharan.
            </p>
            <div className="w-full h-48 bg-slate-800 rounded-lg overflow-hidden border border-slate-700 shadow-lg">
              <ServiceMap />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Saraswati Solar Power Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;