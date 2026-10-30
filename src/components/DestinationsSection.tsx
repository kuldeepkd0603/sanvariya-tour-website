import { MapPin, MessageSquare } from 'lucide-react';
import { config } from '../data/config';

const DestinationsSection = () => {
  return (
    <section id="destinations" aria-labelledby="destinations-heading" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-saffron font-semibold tracking-widest text-sm uppercase mb-3">Sacred Destinations</p>
          <h2 id="destinations-heading" className="section-heading mb-4">Popular Darshan Destinations</h2>
          <div className="divider-saffron mx-auto mb-6" />
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Book comfortable cabs from Ujjain for Jyotirlinga darshan, Shakti Peeth visits and Madhya Pradesh sightseeing.
            We cover Omkareshwar, Baglamukhi Mata, Dewas, Indore, Somnath and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.destinations.map((dest) => (
            <div key={dest.id} className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover card-hover h-72 cursor-pointer">
              <div className="absolute inset-0">
                <img
                  src={dest.image}
                  alt={`${dest.name} – taxi service from Ujjain, ${dest.city}`}
                  width={480}
                  height={288}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/mahakal.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
              </div>

              {/* City tag */}
              <div className="absolute top-4 left-4 bg-brand-saffron text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                <MapPin size={10} aria-hidden="true" /> {dest.city}
              </div>

              <div className="absolute bottom-0 left-0 p-5 w-full">
                <p className="text-brand-saffron text-sm font-medium mb-1">{dest.hindi}</p>
                <h3 className="text-xl font-bold text-white mb-2">{dest.name}</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 line-clamp-2">
                  {dest.desc}
                </p>
                <div className="mt-3 pt-3 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a
                    href={`https://wa.me/${config.business.whatsapp}?text=Hello Sanvariya Tour %26 Travels 🙏%0AI want to book a cab for ${encodeURIComponent(dest.name)}, ${encodeURIComponent(dest.city)}.%0APlease share vehicle options and fare.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-saffron hover:text-white font-semibold transition-colors text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageSquare size={14} aria-hidden="true" /> Book Taxi →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
