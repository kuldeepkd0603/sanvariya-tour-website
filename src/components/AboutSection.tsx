import { config } from '../data/config';
import { Shield, Clock, MapPin, Users } from 'lucide-react';

const statItems = [
  { num: '5000+', label: 'Happy Pilgrims', icon: <Users size={22} className="text-brand-saffron" /> },
  { num: '10+', label: 'Vehicle Types', icon: <Shield size={22} className="text-brand-saffron" /> },
  { num: '24×7', label: 'Support', icon: <Clock size={22} className="text-brand-saffron" /> },
  { num: '50+', label: 'Destinations', icon: <MapPin size={22} className="text-brand-saffron" /> },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-brand-saffron font-semibold tracking-widest text-sm uppercase mb-3">Who We Are</p>
        <h2 className="section-heading mb-4">About Sanvariya Tour & Travels</h2>
        <div className="divider-saffron mx-auto mb-6" />
        <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
          Based in the holy city of Ujjain, Sanvariya Tour & Travels has been serving pilgrims, families,
          and corporate travellers across Madhya Pradesh and all of India. We are committed to making your
          spiritual journeys and travel experiences safe, comfortable, and memorable.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {statItems.map((s) => (
          <div key={s.label} className="bg-gradient-to-br from-brand-navy to-blue-900 rounded-2xl p-6 text-center shadow-card card-hover">
            <div className="flex justify-center mb-3">{s.icon}</div>
            <div className="text-3xl font-bold text-white mb-1">{s.num}</div>
            <div className="text-slate-400 text-sm">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-12">
        <p className="text-brand-saffron font-semibold tracking-widest text-sm uppercase mb-3">Our Promise</p>
        <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Why Choose Us?</h3>
        <div className="divider-saffron mx-auto mb-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {config.whyChooseUs.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-white border border-slate-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover card-hover text-center overflow-hidden"
          >
            {/* Decorative bg glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-saffron/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

            <div className="relative z-10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.icon}
              </div>
              <h4 className="font-bold text-brand-navy text-base mb-2 group-hover:text-brand-saffron transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>

            {/* Bottom accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-saffron to-amber-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="mt-20 rounded-3xl bg-gradient-to-r from-brand-navy via-blue-900 to-brand-navy p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)] pointer-events-none" />
        <p className="text-brand-saffron font-semibold uppercase tracking-widest text-sm mb-3 relative z-10">
          Ready for Your Journey?
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
          Book Your Ride with Confidence
        </h3>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
          Call us or send a WhatsApp message — get an instant quote and confirm your booking in minutes.
          Available 24×7, even for early morning Bhasma Aarti pickups.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
          <a
            href={`tel:${config.business.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 bg-white text-brand-navy px-8 py-3.5 rounded-full font-bold hover:bg-brand-saffron hover:text-white transition-all shadow-lg hover:shadow-saffron"
          >
            📞 {config.business.phone}
          </a>
          <a
            href={`https://wa.me/${config.business.whatsapp}?text=Hello Sanvariya Tour %26 Travels, I want to book a cab.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-lg"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
