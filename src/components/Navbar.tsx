import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { config } from '../data/config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-navy/98 shadow-2xl py-1 backdrop-blur-md' : 'bg-gradient-to-b from-brand-navy/80 via-brand-navy/40 to-transparent backdrop-blur-sm py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Sanvariya Tour & Travels"
              className={`object-contain transition-all duration-500 ${isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-18'}`}
              style={{ filter: isScrolled ? 'none' : 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {config.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-brand-saffron transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${config.business.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-brand-saffron transition-colors"
            >
              <Phone size={16} />
              <span className="hidden xl:inline">{config.business.phone}</span>
            </a>
            <a
              href={`https://wa.me/${config.business.whatsapp}?text=Hello Sanvariya Tour & Travels, I want to book a cab.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
            >
              <MessageSquare size={16} />
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:text-brand-saffron transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-navy/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-3 border-b border-white/10">
            <img src="/images/logo.png" alt="Sanvariya" className="h-12 object-contain" />
          </div>
          <div className="px-4 py-3 space-y-1">
            {config.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-white/90 hover:text-brand-saffron hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="px-4 py-4 flex gap-3 border-t border-white/10">
            <a href={`tel:${config.business.phone}`} className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white py-3 rounded-xl font-semibold text-sm">
              <Phone size={16} /> Call Us
            </a>
            <a href={`https://wa.me/${config.business.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-sm">
              <MessageSquare size={16} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
