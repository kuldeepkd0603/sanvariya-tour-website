import { MessageSquare, Phone } from 'lucide-react';
import { config } from '../data/config';

const routes = [
  {
    from: 'Ujjain',
    to: 'Indore',
    distance: '~55 km',
    duration: '~1.5 hrs',
    desc: 'Popular route for business, darshan, and airport transfers. One-way and round-trip available.',
    keyword: 'Ujjain to Indore taxi',
  },
  {
    from: 'Ujjain',
    to: 'Omkareshwar',
    distance: '~130 km',
    duration: '~3 hrs',
    desc: 'Full-day cab for Omkareshwar Jyotirlinga darshan on the banks of the sacred Narmada river.',
    keyword: 'Ujjain to Omkareshwar taxi',
  },
  {
    from: 'Ujjain',
    to: 'Dewas',
    distance: '~35 km',
    duration: '~45 min',
    desc: 'Quick trip to Maa Chamunda and Tulja Bhavani temples atop the Dewas Tekri hill.',
    keyword: 'Ujjain to Dewas taxi',
  },
  {
    from: 'Indore',
    to: 'Ujjain',
    distance: '~55 km',
    duration: '~1.5 hrs',
    desc: 'Cab from Indore to Ujjain for Mahakal Darshan, Bhasma Aarti, or connecting to outstation tours.',
    keyword: 'Indore to Ujjain taxi',
  },
  {
    from: 'Dewas',
    to: 'Ujjain',
    distance: '~35 km',
    duration: '~45 min',
    desc: 'Daily cab service from Dewas to Ujjain for temple visits, railway station, and bus stand.',
    keyword: 'Dewas to Ujjain taxi',
  },
  {
    from: 'Ujjain',
    to: 'Baglamukhi',
    distance: '~90 km',
    duration: '~2 hrs',
    desc: 'Half-day or full-day taxi to Maa Baglamukhi Shakti Peeth, Nalkheda, Shajapur.',
    keyword: 'Ujjain to Baglamukhi Mata taxi',
  },
];

const serviceAreas = [
  {
    city: 'Ujjain',
    desc: 'Local sightseeing, Mahakal Darshan, Bhasma Aarti pickup, railway station, bus stand, outstation cab service.',
    icon: '🛕',
  },
  {
    city: 'Indore',
    desc: 'Airport transfers, outstation cab, Indore to Ujjain taxi, local Indore travel and corporate cab service.',
    icon: '✈️',
  },
  {
    city: 'Dewas',
    desc: 'Local Dewas cab, Dewas to Ujjain taxi, Dewas to Indore cab, Dewas Tekri temple visits.',
    icon: '⛰️',
  },
];

const LocalSeoSection = () => (
  <section id="service-areas" aria-labelledby="areas-heading" className="py-24 bg-gradient-to-b from-white to-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-brand-saffron font-semibold tracking-widest text-sm uppercase mb-3">Coverage Area</p>
        <h2 id="areas-heading" className="section-heading mb-4">
          Taxi Service in Ujjain, Indore &amp; Dewas
        </h2>
        <div className="divider-saffron mx-auto mb-6" />
        <p className="text-slate-500 max-w-3xl mx-auto text-lg">
          Sanvariya Tour &amp; Travels operates as a service-area taxi business across Ujjain, Indore, Dewas and
          all of Madhya Pradesh. We come to you — no office visit needed. Book via WhatsApp or call us 24×7.
        </p>
      </div>

      {/* Service Cities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {serviceAreas.map((area) => (
          <div
            key={area.city}
            className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 hover:border-brand-saffron/30 hover:shadow-card-hover transition-all"
          >
            <div className="text-4xl mb-4" aria-hidden="true">{area.icon}</div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">
              Taxi Service in {area.city}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">{area.desc}</p>
            <a
              href={`https://wa.me/${config.business.whatsapp}?text=Hello Sanvariya Tour %26 Travels 🙏%0AI need a taxi in ${encodeURIComponent(area.city)}.%0APlease share availability and fare.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-saffron font-semibold text-sm hover:text-amber-600 transition-colors"
            >
              <MessageSquare size={14} aria-hidden="true" /> Book {area.city} Taxi →
            </a>
          </div>
        ))}
      </div>

      {/* Popular Routes */}
      <div>
        <h3 className="text-2xl font-bold text-brand-navy text-center mb-3">Popular Taxi Routes</h3>
        <p className="text-slate-500 text-center mb-10 max-w-2xl mx-auto">
          We cover all major routes from Ujjain, Indore and Dewas. Pick-up available from railway station,
          bus stand, airport, hotel, or your home — anywhere in the city.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {routes.map((route) => (
            <div
              key={`${route.from}-${route.to}`}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:border-brand-saffron/40 hover:shadow-card transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-base">
                    <span>{route.from}</span>
                    <span className="text-brand-saffron">→</span>
                    <span>{route.to}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{route.keyword}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-brand-saffron">{route.distance}</p>
                  <p className="text-xs text-slate-400">{route.duration}</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{route.desc}</p>
              <a
                href={`https://wa.me/${config.business.whatsapp}?text=Hello Sanvariya Tour %26 Travels 🙏%0AI want to book a taxi from ${encodeURIComponent(route.from)} to ${encodeURIComponent(route.to)}.%0APlease share fare and availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-saffron hover:text-amber-600 transition-colors group-hover:gap-2"
              >
                <MessageSquare size={12} aria-hidden="true" /> Book This Route →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Bar */}
      <div className="mt-16 bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Book Your Taxi Now — Available 24×7</h3>
          <p className="text-slate-300 text-sm">
            Call us or send a WhatsApp message. We'll confirm your cab immediately.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={`tel:${config.business.phone.replace(/[^0-9+]/g, '')}`}
            id="local-seo-call-btn"
            className="flex items-center gap-2 bg-white text-brand-navy px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-100 transition-all"
          >
            <Phone size={16} aria-hidden="true" /> {config.business.phone}
          </a>
          <a
            href={`https://wa.me/${config.business.whatsapp}?text=Hello Sanvariya Tour %26 Travels 🙏%0AI want to book a taxi in Ujjain.%0APlease share vehicle availability and fare details.`}
            target="_blank"
            rel="noopener noreferrer"
            id="local-seo-wa-btn"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold text-sm transition-all"
          >
            <MessageSquare size={16} aria-hidden="true" /> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default LocalSeoSection;
