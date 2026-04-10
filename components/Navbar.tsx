import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  useEffect(() => {
    // Check google translate cookie to set initial button state
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const googtrans = getCookie('googtrans');
    if (googtrans === '/en/hi') {
      setLang('hi');
    } else {
      setLang('en');
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'hi' : 'en';
    const cookieValue = `/en/${newLang}`;
    
    // Clear existing cookies first to avoid conflicts
    const domains = [window.location.hostname, `.${window.location.hostname}`];
    const hostParts = window.location.hostname.split('.');
    if (hostParts.length > 2) {
      domains.push(`.${hostParts.slice(-2).join('.')}`);
    }

    domains.forEach(domain => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    });

    // Set the new cookie
    document.cookie = `googtrans=${cookieValue}; path=/`;
    document.cookie = `googtrans=${cookieValue}; domain=${window.location.hostname}; path=/`;
    
    // Final attempt without domain for maximum compatibility
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Subsidies', href: '#incentives' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/img/logo.png" 
                alt="Saraswati Solar Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-orange-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 text-slate-600 hover:text-orange-600 font-medium transition-colors cursor-pointer mr-2"
              title="Toggle language Hindi/English"
            >
              <Globe className="h-5 w-5" />
              <span>{lang === 'en' ? 'HI' : 'EN'}</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="bg-blue-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg cursor-pointer"
            >
              Get Quote
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-slate-50 w-full text-left cursor-pointer"
            >
              <Globe className="h-5 w-5" />
              <span>{lang === 'en' ? 'Switch to Hindi (हिंदी)' : 'Switch to English'}</span>
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="block w-full text-center mt-4 bg-orange-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;