import { useState } from 'react';
import { config } from '../data/config';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pickup: '',
    drop: '',
    travelDate: '',
    returnDate: '',
    passengers: '',
    vehicleType: '',
    tripType: 'One Way'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hello ${config.business.name},

I want to book a vehicle.

*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*Pickup:* ${formData.pickup}
*Drop:* ${formData.drop}
*Travel Date:* ${formData.travelDate}
*Return Date:* ${formData.returnDate || 'N/A'}
*Passengers:* ${formData.passengers}
*Vehicle:* ${formData.vehicleType}
*Trip Type:* ${formData.tripType}

Please share the best available price.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${config.business.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking-form" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-brand-navy p-6">
            <h2 className="text-2xl font-bold text-white text-center">Quick Booking & Enquiry</h2>
            <p className="text-slate-300 text-center mt-2">Get a free quote via WhatsApp instantly</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:border-brand-saffron outline-none transition" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number *</label>
                <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:border-brand-saffron outline-none transition" placeholder="Your Mobile Number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Pickup Location *</label>
                <input required type="text" name="pickup" value={formData.pickup} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:border-brand-saffron outline-none transition" placeholder="e.g. Ujjain Railway Station" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Drop Location *</label>
                <input required type="text" name="drop" value={formData.drop} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:border-brand-saffron outline-none transition" placeholder="e.g. Omkareshwar" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Travel Date *</label>
                <input required type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:border-brand-saffron outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Return Date (Optional)</label>
                <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:border-brand-saffron outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Number of Passengers *</label>
                <input required type="number" min="1" name="passengers" value={formData.passengers} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:border-brand-saffron outline-none transition" placeholder="e.g. 4" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Trip Type *</label>
                <select required name="tripType" value={formData.tripType} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:border-brand-saffron outline-none transition bg-white">
                  <option>One Way</option>
                  <option>Round Trip</option>
                  <option>Local</option>
                  <option>Outstation</option>
                  <option>Airport Transfer</option>
                  <option>Full Day</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Vehicle Type (Optional)</label>
                <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:border-brand-saffron outline-none transition bg-white">
                  <option value="">Let us suggest the best vehicle</option>
                  {config.vehicles.map(v => (
                    <option key={v.id} value={v.name}>{v.name} ({v.capacity})</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-brand-saffron hover:bg-amber-600 text-white px-10 py-3 rounded-full text-lg font-bold transition-all shadow-md hover:shadow-lg"
              >
                Get a Free Quote via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
