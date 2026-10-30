import { Phone, Mail, MapPin, Star, Globe, MessageSquare } from 'lucide-react';
import { config } from '../data/config';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <a href="#home" className="inline-block mb-4">
              <img src="/images/logo.png" alt="Savariya Tour and Travels" className="h-24 object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            </a>
            <p className="mb-6 text-slate-300">
              {config.business.tagline}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-saffron hover:text-white transition-colors">
                <Star size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-saffron hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href={`https://wa.me/${config.business.whatsapp}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-brand-saffron transition-colors">Home</a></li>
              <li><a href="#vehicles" className="hover:text-brand-saffron transition-colors">Vehicles</a></li>
              <li><a href="#services" className="hover:text-brand-saffron transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-brand-saffron transition-colors">Tour Packages</a></li>
              <li><a href="#booking-form" className="hover:text-brand-saffron transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Popular Services</h4>
            <ul className="space-y-3">
              <li>Local Cab Service</li>
              <li>Outstation Taxi</li>
              <li>Airport Transfer</li>
              <li>Religious Tours</li>
              <li>Wedding Transportation</li>
            </ul>
          </div>

          <div id="contact">
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-saffron flex-shrink-0 mt-1" />
                <span>{config.business.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-saffron flex-shrink-0" />
                <a href={`tel:${config.business.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {config.business.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={20} className="text-brand-saffron flex-shrink-0" />
                <a href={`https://wa.me/${config.business.whatsapp}`} className="hover:text-white transition-colors">
                  +{config.business.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-saffron flex-shrink-0" />
                <a href={`mailto:${config.business.email}`} className="hover:text-white transition-colors">
                  {config.business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} {config.business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
