import { config } from '../data/config';

// SEO-optimised alt texts for service images
const serviceAltMap: Record<number, string> = {
  1: 'Mahakal Darshan taxi service Ujjain – early morning Bhasma Aarti pickup',
  2: 'Ujjain local sightseeing cab – Mahakal, Kal Bhairav, Ram Ghat tour',
  3: 'Indore airport taxi service – pickup and drop cab Ujjain Indore',
  4: 'Outstation taxi service Ujjain – Madhya Pradesh and all India cab',
  5: 'Religious pilgrimage tour taxi – Ujjain Omkareshwar Baglamukhi cab',
  6: 'Corporate cab service Ujjain – business travel with GST invoice',
  7: 'Wedding transportation Ujjain – baraat and guest cab service',
  8: 'Group travel Ujjain – Force Urbania and mini bus booking',
};

const ServicesSection = () => (
  <section id="services" aria-labelledby="services-heading" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-brand-saffron font-semibold tracking-widest text-sm uppercase mb-3">What We Offer</p>
        <h2 id="services-heading" className="section-heading mb-4">Cab &amp; Tour Services in Ujjain, Indore &amp; Dewas</h2>
        <div className="divider-saffron mx-auto mb-6" />
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Premium taxi and travel solutions for pilgrims, families, corporates and groups across
          Ujjain, Indore, Dewas and all of Madhya Pradesh.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {config.services.map((s, index) => (
          <article
            key={s.id}
            className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover card-hover bg-white border border-slate-100 cursor-pointer"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={s.image}
                alt={serviceAltMap[s.id] || s.name}
                width={400}
                height={208}
                loading={index < 4 ? 'lazy' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/mahakal.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
              <div className="absolute top-4 left-4 text-3xl" aria-hidden="true">{s.icon}</div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-saffron transition-colors">{s.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{s.description}</p>
            </div>
            <div className="px-5 pb-5">
              <a
                href={`https://wa.me/${config.business.whatsapp}?text=Hello Sanvariya Tour %26 Travels 🙏%0AI want to enquire about: ${encodeURIComponent(s.name)}%0APlease share details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-saffron text-sm font-semibold hover:text-amber-600 transition-colors flex items-center gap-1"
              >
                Enquire Now →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
