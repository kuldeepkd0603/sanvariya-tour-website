import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';
import { config } from '../data/config';

const TestimonialsSection = () => {
  const testimonials = config.testimonials;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-24 bg-brand-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-saffron font-semibold tracking-widest text-sm uppercase mb-3">Happy Travellers</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">What Our Customers Say</h2>
          <div className="divider-saffron mx-auto mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real experiences from pilgrims, families, and travellers who've journeyed with us.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t) => (
            <div key={t.id} className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-saffron/40 rounded-2xl p-6 transition-all duration-300 card-hover backdrop-blur-sm">
              {/* Quote icon */}
              <div className="absolute top-5 right-5 text-brand-saffron/20 group-hover:text-brand-saffron/40 transition-colors">
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-saffron text-brand-saffron" />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">"{t.review}"</p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-saffron to-amber-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    {t.verified && <BadgeCheck size={14} className="text-brand-saffron" />}
                  </div>
                  <p className="text-slate-400 text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative min-h-[220px]">
            <div className="absolute top-5 right-5 text-brand-saffron/20">
              <Quote size={40} />
            </div>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-brand-saffron text-brand-saffron" />
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">"{testimonials[current].review}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-saffron to-amber-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-white font-semibold text-sm">{testimonials[current].name}</p>
                  {testimonials[current].verified && <BadgeCheck size={14} className="text-brand-saffron" />}
                </div>
                <p className="text-slate-400 text-xs">{testimonials[current].city}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-saffron text-white flex items-center justify-center transition-colors">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-brand-saffron w-6' : 'bg-white/30'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-saffron text-white flex items-center justify-center transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
