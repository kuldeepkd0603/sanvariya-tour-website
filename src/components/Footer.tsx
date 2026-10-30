import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { config } from '../data/config';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div itemScope itemType="https://schema.org/TaxiService">
            <a href="#home" aria-label="Sanvariya Tour & Travels – Home" className="inline-block mb-4">
              <img
                src="/images/logo.png"
                alt="Sanvariya Tour and Travels – Taxi Service Ujjain"
                width={160}
                height={96}
                className="h-24 object-contain"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </a>
            <p className="mb-2 text-slate-300 font-semibold" itemProp="name">{config.business.name}</p>
            <p className="mb-4 text-slate-400 text-sm italic" itemProp="description">{config.business.tagline}</p>
            <p className="text-slate-400 text-sm mb-6">
              Trusted taxi &amp; cab service in <strong className="text-slate-300">Ujjain</strong>,{' '}
              <strong className="text-slate-300">Indore</strong> &amp;{' '}
              <strong className="text-slate-300">Dewas</strong>. Pilgrimage tours, outstation travel
              and airport transfers. Available 24×7.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${config.business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageSquare size={20} aria-hidden="true" />
              </a>
              <a
                href={`tel:${config.business.phone.replace(/[^0-9+]/g, '')}`}
                aria-label="Call us"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-saffron hover:text-white transition-colors"
              >
                <Phone size={20} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${config.business.email}`}
                aria-label="Email us"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-saffron hover:text-white transition-colors"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-brand-saffron transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-saffron transition-colors">About Us</a></li>
              <li><a href="#vehicles" className="hover:text-brand-saffron transition-colors">Our Fleet</a></li>
              <li><a href="#services" className="hover:text-brand-saffron transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-brand-saffron transition-colors">Tour Packages</a></li>
              <li><a href="#service-areas" className="hover:text-brand-saffron transition-colors">Service Areas</a></li>
              <li><a href="#faq" className="hover:text-brand-saffron transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-brand-saffron transition-colors">Contact Us</a></li>
            </ul>
          </nav>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Popular Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#booking-form" className="hover:text-brand-saffron transition-colors">
                  Taxi Service in Ujjain
                </a>
              </li>
              <li>
                <a href="#booking-form" className="hover:text-brand-saffron transition-colors">
                  Mahakal Darshan Cab
                </a>
              </li>
              <li>
                <a href="#booking-form" className="hover:text-brand-saffron transition-colors">
                  Ujjain to Indore Taxi
                </a>
              </li>
              <li>
                <a href="#booking-form" className="hover:text-brand-saffron transition-colors">
                  Ujjain to Omkareshwar Cab
                </a>
              </li>
              <li>
                <a href="#booking-form" className="hover:text-brand-saffron transition-colors">
                  Taxi Service in Indore
                </a>
              </li>
              <li>
                <a href="#booking-form" className="hover:text-brand-saffron transition-colors">
                  Taxi Service in Dewas
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-brand-saffron transition-colors">
                  Pilgrimage Tour Packages
                </a>
              </li>
              <li>
                <a href="#booking-form" className="hover:text-brand-saffron transition-colors">
                  Outstation Cab Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact — NAP (Name, Address, Phone) */}
          <div id="contact" itemScope itemType="https://schema.org/TaxiService">
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-saffron flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p itemProp="areaServed" className="text-sm">Service Area:</p>
                  <p className="text-slate-400 text-sm">Ujjain, Indore &amp; Dewas, Madhya Pradesh</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-saffron flex-shrink-0" aria-hidden="true" />
                <div>
                  <a
                    href={`tel:${config.business.phone.replace(/[^0-9+]/g, '')}`}
                    itemProp="telephone"
                    className="hover:text-white transition-colors text-sm block"
                    aria-label={`Call ${config.business.phoneName}`}
                  >
                    {config.business.phone} ({config.business.phoneName})
                  </a>
                  <a
                    href={`tel:${config.business.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                    className="hover:text-white transition-colors text-sm block mt-1"
                    aria-label={`Call ${config.business.secondaryPhoneName}`}
                  >
                    {config.business.secondaryPhone} ({config.business.secondaryPhoneName})
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={20} className="text-brand-saffron flex-shrink-0" aria-hidden="true" />
                <a
                  href={`https://wa.me/${config.business.whatsapp}?text=Hello Sanvariya Tour %26 Travels 🙏%0AI want to book a taxi in Ujjain.%0APlease share vehicle availability and fare details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-sm"
                  aria-label="Chat on WhatsApp"
                >
                  WhatsApp: +{config.business.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-saffron flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${config.business.email}`}
                  itemProp="email"
                  className="hover:text-white transition-colors text-sm"
                >
                  {config.business.email}
                </a>
              </li>
              <li className="flex items-center gap-3 mt-2">
                <span className="text-brand-saffron text-lg" aria-hidden="true">🕐</span>
                <span itemProp="openingHours" content="Mo-Su 00:00-23:59" className="text-sm">
                  Available 24×7 — including early morning
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} {config.business.name}. All rights reserved.</p>
          <p className="text-center">
            Taxi Service in <a href="#home" className="hover:text-brand-saffron transition-colors">Ujjain</a> |{' '}
            <a href="#service-areas" className="hover:text-brand-saffron transition-colors">Indore</a> |{' '}
            <a href="#service-areas" className="hover:text-brand-saffron transition-colors">Dewas</a>
          </p>
          <p>
            <a href="/sitemap.xml" className="hover:text-brand-saffron transition-colors" target="_blank" rel="noopener">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
