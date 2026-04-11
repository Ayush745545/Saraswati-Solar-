import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  setView: (view: 'home' | 'services' | 'products' | 'contact' | 'subsidies' | 'financing' | 'systems' | 'calculators') => void;
  currentView: 'home' | 'services' | 'products' | 'contact' | 'subsidies' | 'financing' | 'systems' | 'calculators';
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  useEffect(() => {
    // Check google translate cookie to set initial button state
    const getCookie = (name: string) => {
      const match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]*)'));
      return match ? match[2] : null;
    };

    const googtrans = getCookie('googtrans');
    // Google translate cookie can be /en/hi or /auto/hi depending on setup
    if (googtrans && (googtrans.includes('/hi') || googtrans.includes('hi'))) {
      setLang('hi');
    } else {
      setLang('en');
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'hi' : 'en';
    const cookieValue = `/en/${newLang}`;
    
    // Clear existing cookies
    const host = window.location.hostname;
    const isLocalhost = host === 'localhost' || host === '127.0.0.1' || host.includes('192.168.');
    
    // Domains to clear
    const domains = [host, `.${host}`];
    if (!isLocalhost && host.includes('.')) {
      const parts = host.split('.');
      if (parts.length > 2) {
        domains.push(`.${parts.slice(-2).join('.')}`);
      }
    }

    domains.forEach(domain => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    });

    // Set the new cookie
    // For localhost, we MUST NOT set the domain or it might be ignored
    if (isLocalhost) {
      document.cookie = `googtrans=${cookieValue}; path=/`;
    } else {
      document.cookie = `googtrans=${cookieValue}; path=/`;
      document.cookie = `googtrans=${cookieValue}; domain=${host}; path=/`;
      // Also try base domain for maximum coverage
      const hostParts = host.split('.');
      if (hostParts.length > 2) {
        const baseDomain = hostParts.slice(-2).join('.');
        document.cookie = `googtrans=${cookieValue}; domain=.${baseDomain}; path=/`;
      }
    }
    
    // Reload to apply changes
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  const navLinks = [
    { name: 'Solutions', href: '#services', action: () => setView('services'), id: 'services' },
    { name: 'Solar Systems', href: '#systems', action: () => setView('systems'), id: 'systems' },
    { name: 'Products', href: '#products', action: () => setView('products'), id: 'products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Subsidies', href: '#incentives', action: () => setView('subsidies'), id: 'subsidies' },
    { name: 'Financing', href: '#financing', action: () => setView('financing'), id: 'financing' },
    { name: 'Calculators', href: '#calculators', action: () => setView('calculators'), id: 'calculators' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact', action: () => setView('contact'), id: 'contact' },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => setView('home')}
            >
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
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  } else {
                    setView('home'); // Switch back to home for other links
                  }
                }}
                className={`text-slate-600 hover:text-brand font-medium transition-colors ${
                  (link.id === 'services' && currentView === 'services') || 
                  (link.id === 'systems' && currentView === 'systems') ||
                  (link.id === 'products' && currentView === 'products') ||
                  (link.id === 'subsidies' && currentView === 'subsidies') || 
                  (link.id === 'financing' && currentView === 'financing') ||
                  (link.id === 'calculators' && currentView === 'calculators') ||
                  (link.id === 'contact' && currentView === 'contact') ||
                  (link.id !== 'services' && link.id !== 'systems' && link.id !== 'products' && link.id !== 'subsidies' && link.id !== 'financing' && link.id !== 'calculators' && link.id !== 'contact' && currentView === 'home' && window.location.hash === link.href)
                    ? 'text-brand' 
                    : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 text-slate-600 hover:text-brand font-medium transition-colors cursor-pointer mr-2"
              title="Toggle language Hindi/English"
            >
              <Globe className="h-5 w-5" />
              <span>{lang === 'en' ? 'HI' : 'EN'}</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="bg-brand text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-brand/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
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
                className={`block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand hover:bg-brand-light/50 ${
                  (link.id === 'services' && currentView === 'services') || 
                  (link.id === 'systems' && currentView === 'systems') ||
                  (link.id === 'products' && currentView === 'products') ||
                  (link.id === 'subsidies' && currentView === 'subsidies') || 
                  (link.id === 'financing' && currentView === 'financing') ||
                  (link.id === 'calculators' && currentView === 'calculators') ||
                  (link.id === 'contact' && currentView === 'contact') 
                    ? 'text-brand bg-brand-light/50' 
                    : ''
                }`}
                onClick={(e) => {
                  setIsOpen(false);
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  } else {
                    setView('home');
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand hover:bg-brand-light/50 w-full text-left cursor-pointer"
            >
              <Globe className="h-5 w-5" />
              <span>{lang === 'en' ? 'Switch to Hindi (हिंदी)' : 'Switch to English'}</span>
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="block w-full text-center mt-4 bg-brand text-white px-4 py-3 rounded-xl font-bold hover:bg-brand/90 transition-all cursor-pointer shadow-lg"
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