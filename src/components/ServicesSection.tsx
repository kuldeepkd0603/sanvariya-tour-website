import { config } from '../data/config';

const ServicesSection = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-brand-saffron font-semibold tracking-widest text-sm uppercase mb-3">What We Offer</p>
        <h2 className="section-heading mb-4">Our Services</h2>
        <div className="divider-saffron mx-auto mb-6" />
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Premium travel solutions tailored for pilgrims, families, corporates and groups across Madhya Pradesh and all of India.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {config.services.map((s) => (
          <div key={s.id} className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover card-hover bg-white border border-slate-100 cursor-pointer">
            <div className="relative h-52 overflow-hidden">
              <img src={s.image} alt={s.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/mahakal.png'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
              <div className="absolute top-4 left-4 text-3xl">{s.icon}</div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-saffron transition-colors">{s.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{s.description}</p>
            </div>
            <div className="px-5 pb-5">
              <a href={`https://wa.me/${config.business.whatsapp}?text=I want to enquire about ${s.name} service.`}
                target="_blank" rel="noopener noreferrer"
                className="text-brand-saffron text-sm font-semibold hover:text-amber-600 transition-colors flex items-center gap-1">
                Enquire Now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
