import React, { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
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
            <div className="flex-shrink-0 flex items-center gap-2">
              <Sun className="h-8 w-8 text-orange-500" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-blue-900 tracking-tight">SARASWATI SOLAR</span>
                <span className="text-xs font-medium text-slate-500 tracking-widest">POWER SOLUTION</span>
              </div>
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