import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

interface FloatingCTAProps {
  onOpenBooking: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenBooking }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~500px (past hero section)
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`
        fixed bottom-0 left-0 right-0 z-[90] md:hidden
        transition-all duration-500 ease-out
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}
      `}
    >
      {/* Gradient fade on top edge */}
      <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>

      <div className="bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] px-4 py-3 flex items-center gap-3">
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919897147441?text=Hi%20Saraswati%20Solar%2C%20I%20want%20to%20learn%20about%20solar%20panels%20for%20my%20home."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-green-600/20"
          id="floating-cta-whatsapp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">WhatsApp</span>
        </a>

        {/* Get Free Quote Button */}
        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-600/20"
          id="floating-cta-quote"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm">Free Quote</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;
