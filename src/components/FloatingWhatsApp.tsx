import { MessageSquare } from 'lucide-react';
import { config } from '../data/config';

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${config.business.whatsapp}?text=Hello ${config.business.shortName}, I want to book a vehicle.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2 z-50 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={32} />
      <span className="absolute right-16 bg-white text-slate-800 text-sm font-semibold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Need help? Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
