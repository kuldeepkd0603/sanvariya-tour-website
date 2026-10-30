import { Users, Snowflake, CheckCircle } from 'lucide-react';
import { config } from '../data/config';

// SEO-friendly alt text map keyed by vehicle id
const vehicleAltText: Record<string, string> = {
  v1: 'Maruti Suzuki Dzire taxi service in Ujjain – book sedan cab',
  v2: 'Maruti Suzuki Eeco cab in Ujjain – family and group travel',
  v3: 'Maruti Suzuki Ertiga taxi Ujjain – premium MPV for outstation',
  v4: 'Innova Crysta taxi Ujjain – luxury SUV for outstation and corporate travel',
  v5: 'Force Urbania group travel Ujjain – 13 to 17 seater traveller',
  v6: 'Mini bus pilgrimage tour Ujjain – large group transportation',
};

const VehicleSection = () => (
  <section id="vehicles" aria-labelledby="vehicles-heading" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-brand-saffron font-semibold tracking-widest text-sm uppercase mb-3">Choose Your Ride</p>
        <h2 id="vehicles-heading" className="section-heading mb-4">Our Vehicle Fleet</h2>
        <div className="divider-saffron mx-auto mb-6" />
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Well-maintained, AC vehicles for Mahakal Darshan, outstation trips, airport transfers and group pilgrimages.
          Driven by experienced, verified drivers across Ujjain, Indore and Dewas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {config.vehicles.map((v, index) => (
          <article key={v.id} className="bg-white rounded-2xl shadow-card hover:shadow-card-hover card-hover overflow-hidden border border-slate-100">
            {/* Image */}
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <img
                src={v.image}
                alt={vehicleAltText[v.id] || v.name}
                width={480}
                height={224}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/sedan.png'; }}
              />
              <div className={`absolute top-4 left-4 ${v.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
                {v.badge}
              </div>
              <div className="absolute top-4 right-4 bg-brand-navy/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                {v.type}
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-navy mb-4">{v.name}</h3>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Users size={16} className="text-brand-saffron" />
                  <span>{v.capacity}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Snowflake size={16} className="text-brand-saffron" />
                  <span>{v.ac ? 'AC' : 'Non-AC'}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm col-span-2">
                  <CheckCircle size={16} className="text-brand-saffron flex-shrink-0" />
                  <span className="text-sm">{v.luggage}</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 mb-5">
                <p className="text-xs text-slate-400 font-medium uppercase mb-1">Ideal For</p>
                <p className="text-sm text-slate-600">{v.suitableFor}</p>
              </div>

              <div className="flex gap-3">
                <a
                  href="#booking-form"
                  id={`book-${v.id}`}
                  className="flex-1 bg-brand-navy hover:bg-brand-navy-light text-white text-center py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  Book Now
                </a>
                <a
                  href={`https://wa.me/${config.business.whatsapp}?text=Hello Sanvariya Tour %26 Travels 🙏%0AI want a quote for ${encodeURIComponent(v.name)} (${encodeURIComponent(v.capacity)}).%0APlease share availability and fare.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`quote-${v.id}`}
                  className="flex-1 bg-brand-saffron hover:bg-amber-600 text-white text-center py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default VehicleSection;
