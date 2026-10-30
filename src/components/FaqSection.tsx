import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { config } from '../data/config';

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-saffron font-semibold tracking-widest text-sm uppercase mb-3">Got Questions?</p>
          <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
          <div className="divider-saffron mx-auto mb-6" />
          <p className="text-slate-500 text-lg">
            Quick answers to the most common questions about our cab and tour services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {config.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen ? 'border-brand-saffron/50 shadow-md' : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`font-semibold text-sm md:text-base pr-4 transition-colors ${isOpen ? 'text-brand-saffron' : 'text-brand-navy'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-brand-saffron transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed px-6 pb-6">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 shadow-card">
          <p className="text-white font-semibold mb-2">Still have questions?</p>
          <p className="text-slate-300 text-sm mb-6">Our team is available 24×7 to assist you with your travel plans.</p>
          <a
            href={`https://wa.me/${config.business.whatsapp}?text=Hello, I have a question about your cab and tour services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-full font-bold transition-all hover:shadow-lg"
          >
            💬 Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
