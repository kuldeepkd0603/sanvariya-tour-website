import { useState } from 'react';
import { config } from '../data/config';
import { MessageSquare, Clock, Car, MapPin, CheckCircle, XCircle, ChevronDown } from 'lucide-react';

type Package = typeof config.packages[0];

const typeColors: Record<string, string> = {
  'Local': 'bg-green-100 text-green-700',
  'Outstation': 'bg-blue-100 text-blue-700',
  'Local + Outstation': 'bg-purple-100 text-purple-700',
};

const PackageCard = ({ pkg }: { pkg: Package }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover card-hover overflow-hidden border border-slate-100 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={`${pkg.name} – taxi package from Ujjain by Sanvariya Tour & Travels`}
          width={480}
          height={208}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => { (e.target as HTMLImageElement).src = '/images/mahakal.jpg'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />

        {/* Type badge */}
        <div className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${typeColors[pkg.type] ?? 'bg-slate-100 text-slate-700'}`}>
          {pkg.type}
        </div>

        {/* Duration badge */}
        <div className="absolute top-4 right-4 bg-brand-navy/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
          <Clock size={11} /> {pkg.duration}
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-lg font-bold text-white leading-tight">{pkg.name}</h3>
          <p className="text-brand-saffron text-sm font-medium">{pkg.subtitle}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{pkg.description}</p>

        {/* Highlights */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Highlights</p>
          <div className="flex flex-wrap gap-1.5">
            {pkg.highlights.map((h) => (
              <span key={h} className="flex items-center gap-1 text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
                <MapPin size={9} /> {h}
              </span>
            ))}
          </div>
        </div>

        {/* Vehicles */}
        <div className="flex items-center gap-2 mb-4 text-sm text-slate-500">
          <Car size={15} className="text-brand-saffron flex-shrink-0" />
          <span>{pkg.vehicles.join(' · ')}</span>
        </div>

        {/* Expandable inclusions/exclusions */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full text-xs font-semibold text-slate-500 bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-lg transition mb-2"
        >
          <span>Inclusions & Exclusions</span>
          <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        {expanded && (
          <div className="mb-4 grid grid-cols-1 gap-3 text-xs">
            <div>
              <p className="font-semibold text-green-700 mb-1 flex items-center gap-1"><CheckCircle size={12} /> Included</p>
              <ul className="space-y-1 text-slate-600 pl-4">
                {pkg.inclusions.map(i => <li key={i} className="list-disc">{i}</li>)}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-red-600 mb-1 flex items-center gap-1"><XCircle size={12} /> Excluded</p>
              <ul className="space-y-1 text-slate-600 pl-4">
                {pkg.exclusions.map(e => <li key={e} className="list-disc">{e}</li>)}
              </ul>
            </div>
          </div>
        )}

        {/* CTA */}
        <a
          href={`https://wa.me/${config.business.whatsapp}?text=I want to get a quote for the ${encodeURIComponent(pkg.name)} package (${pkg.duration}). Please share pricing details.`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-saffron to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white text-center py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-saffron"
        >
          <MessageSquare size={15} /> Get Free Quote
        </a>
      </div>
    </article>
  );
};

const PackagesSection = () => (
  <section id="packages" className="py-24 bg-gradient-to-b from-slate-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-brand-saffron font-semibold tracking-widest text-sm uppercase mb-3">Curated Itineraries</p>
        <h2 id="packages-heading" className="section-heading mb-4">Ujjain Pilgrimage &amp; Tour Packages</h2>
        <div className="divider-saffron mx-auto mb-6" />
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Carefully crafted pilgrimage and sightseeing packages — from local Ujjain darshan and Mahakal taxi tours
          to Omkareshwar, Baglamukhi, Khatu Shyam, Somnath and multi-day all-India yatras.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {config.packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-500 text-sm mb-4">Don't see what you're looking for?</p>
        <a
          href={`https://wa.me/${config.business.whatsapp}?text=I want to create a custom tour package. Please help me plan.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-brand-saffron text-brand-saffron hover:bg-brand-saffron hover:text-white px-8 py-3 rounded-full font-bold transition-all"
        >
          <MessageSquare size={18} /> Request Custom Package
        </a>
      </div>
    </div>
  </section>
);

export default PackagesSection;
