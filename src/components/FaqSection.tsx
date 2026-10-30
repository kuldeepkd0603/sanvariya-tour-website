import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { config } from '../data/config';

// Extended FAQ list for SEO — includes local keyword questions
const allFaqs = [
  ...config.faqs,
  {
    q: 'Do you provide taxi service from Indore to Ujjain?',
    a: 'Yes! We provide cab service from Indore to Ujjain for Mahakal Darshan, Bhasma Aarti, outstation tours and any other destination. Pickup available from Indore Airport, Indore Railway Station, or your hotel. Available 24×7.'
  },
  {
    q: 'What is the distance from Ujjain to Omkareshwar and how long does it take?',
    a: 'Ujjain to Omkareshwar is approximately 130 km and takes around 3 hours by road. We offer full-day cab packages for Omkareshwar Jyotirlinga darshan with comfortable AC vehicles.'
  },
  {
    q: 'Do you provide taxi service near Mahakaleshwar Temple?',
    a: 'Yes, we provide pickup and drop near Mahakaleshwar Temple, Ujjain. For Bhasma Aarti visits, we offer early morning pickup from 2:30 AM. Just WhatsApp or call us to confirm your location and timing.'
  },
  {
    q: 'Do you offer taxi service in Dewas?',
    a: 'Yes, we offer cab service in Dewas for local travel, Dewas to Ujjain, Dewas to Indore, and other outstation routes. Pickup from Dewas Bus Stand, Dewas Railway Station, or your home is available.'
  },
  {
    q: 'How do I book a one-way taxi from Ujjain to Indore?',
    a: 'Send us a WhatsApp message with your pickup point in Ujjain, drop point in Indore, date, time, and number of passengers. We will confirm the cab and fare immediately. We offer both one-way and round-trip options.'
  },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-saffron font-semibold tracking-widest text-sm uppercase mb-3">Got Questions?</p>
          <h2 id="faq-heading" className="section-heading mb-4">Frequently Asked Questions</h2>
          <div className="divider-saffron mx-auto mb-6" />
          <p className="text-slate-500 text-lg">
            Quick answers about our taxi service in Ujjain, Indore and Dewas — cab booking,
            vehicles, routes, and pilgrimage tours.
          </p>
        </div>

        {/* FAQ Accordion — Schema-friendly structure */}
        <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {allFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen ? 'border-brand-saffron/50 shadow-md' : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span
                    itemProp="name"
                    className={`font-semibold text-sm md:text-base pr-4 transition-colors ${isOpen ? 'text-brand-saffron' : 'text-brand-navy'}`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className={`flex-shrink-0 text-brand-saffron transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <p itemProp="text" className="text-slate-600 text-sm leading-relaxed px-6 pb-6">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 shadow-card">
          <p className="text-white font-semibold mb-2">Still have questions?</p>
          <p className="text-slate-300 text-sm mb-6">
            Our team is available 24×7 to help with taxi bookings in Ujjain, Indore, Dewas and beyond.
          </p>
          <a
            href={`https://wa.me/${config.business.whatsapp}?text=Hello Sanvariya Tour %26 Travels 🙏%0AI have a question about your cab and tour services.%0APlease help me.`}
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp-btn"
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
