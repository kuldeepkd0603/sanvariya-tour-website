import { useState } from 'react';
import { MessageSquare, Car, ChevronDown } from 'lucide-react';
import { config } from '../data/config';

const Hero = () => {
  const [form, setForm] = useState({ pickup: '', destination: '', date: '', passengers: '', vehicle: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Sanvariya Tour & Travels 🙏\n\nI want to book a cab:\n\n📍 *Pickup:* ${form.pickup}\n🏁 *Destination:* ${form.destination}\n📅 *Date:* ${form.date}\n👥 *Passengers:* ${form.passengers}\n🚗 *Vehicle:* ${form.vehicle || 'Any'}\n\nPlease share the fare quote.`;
    window.open(`https://wa.me/${config.business.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="home" aria-label="Hero – Taxi Service in Ujjain" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/mahakal.jpg"
          alt="Mahakaleshwar Temple Ujjain – Taxi Service by Sanvariya Tour & Travels"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          onError={(e) => { (e.target as HTMLImageElement).src = '/images/mahakal.png'; }}
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div id="main-content" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-2.5 rounded-full glass border border-brand-saffron/40 animate-pulse-glow">
            <span className="text-brand-saffron text-lg font-bold tracking-widest">॥ जय श्री महाकाल ॥</span>
          </div>

          {/* SEO-Optimised H1 — Primary keyword: Taxi Service in Ujjain */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg leading-tight">
            Taxi Service in Ujjain –{' '}
            <span className="text-brand-saffron">Mahakal Darshan, Outstation &amp; Local Cab</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Your Trusted Cab Booking Partner for Mahakaleshwar Darshan, Ujjain to Indore,
            Ujjain to Omkareshwar, Dewas, Airport Transfers &amp; All-India Journeys.
          </p>

          {/* Service Areas */}
          <p className="text-brand-saffron font-semibold text-base md:text-lg mb-10 tracking-wide">
            Ujjain | Indore | Dewas | All India Tours
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#booking-form"
              id="hero-book-btn"
              className="w-full sm:w-auto bg-gradient-to-r from-brand-saffron to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-saffron hover:shadow-saffron-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Car size={22} /> Book Your Ride
            </a>
            <a
              href="#packages"
              className="w-full sm:w-auto glass border border-white/30 hover:border-brand-saffron/60 text-white hover:text-brand-saffron px-8 py-4 rounded-full text-lg font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Explore Tour Packages
            </a>
          </div>

          {/* Trust Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-white">
            {[
              { num: '5000+', label: 'Happy Pilgrims' },
              { num: '24×7', label: 'Available' },
              { num: '100%', label: 'Safe Journeys' },
              { num: '10+', label: 'Vehicle Types' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-saffron">{stat.num}</div>
                <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Booking Form */}
        <div id="booking-form" className="max-w-5xl mx-auto">
          <div className="glass rounded-2xl p-6 md:p-8 shadow-glass border border-white/20">
            <h2 className="text-white font-bold text-xl mb-6 text-center">
              🚗 Quick Cab Booking — <span className="text-brand-saffron">Get Free Quote on WhatsApp</span>
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Taxi booking enquiry form">
              <div>
                <label htmlFor="pickup" className="text-slate-300 text-sm mb-1.5 block font-medium">Pickup Location *</label>
                <input
                  id="pickup"
                  required
                  name="pickup"
                  value={form.pickup}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-brand-saffron/70 focus:bg-white/15 transition"
                  placeholder="e.g. Ujjain Railway Station"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="destination" className="text-slate-300 text-sm mb-1.5 block font-medium">Destination *</label>
                <input
                  id="destination"
                  required
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-brand-saffron/70 transition"
                  placeholder="e.g. Mahakaleshwar Temple"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="journey-date" className="text-slate-300 text-sm mb-1.5 block font-medium">Journey Date *</label>
                <input
                  id="journey-date"
                  required
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-saffron/70 transition"
                />
              </div>
              <div>
                <label htmlFor="passengers" className="text-slate-300 text-sm mb-1.5 block font-medium">Passengers *</label>
                <select
                  id="passengers"
                  required
                  name="passengers"
                  value={form.passengers}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-saffron/70 transition appearance-none"
                >
                  <option value="" className="text-slate-800">Select passengers</option>
                  {['1-2', '3-4', '5-6', '7-10', '11-17', '18-25', '25+'].map(p => (
                    <option key={p} value={p} className="text-slate-800">{p} Passengers</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="vehicle-preference" className="text-slate-300 text-sm mb-1.5 block font-medium">Vehicle Preference</label>
                <select
                  id="vehicle-preference"
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-saffron/70 transition appearance-none"
                >
                  <option value="" className="text-slate-800">Any Vehicle</option>
                  {config.vehicles.map(v => (
                    <option key={v.id} value={v.name} className="text-slate-800">{v.name} ({v.capacity})</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  id="get-quote-btn"
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#1da851] hover:from-[#20bd5a] hover:to-[#178a42] text-white py-3 rounded-xl font-bold text-base transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} /> Get Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#services" className="text-white/50 hover:text-brand-saffron transition-colors flex flex-col items-center gap-1" aria-label="Scroll down to see our services">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
