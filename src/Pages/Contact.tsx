import React, { useState } from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      <nav className="text-sm mb-12 text-gray-500">
        <a href="/" className="hover:text-black transition-colors">
          Home
        </a>
        <span className="mx-2">/</span>
        <span className="text-black font-medium">Cantact</span>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 bg-white p-8 rounded-md shadow-md border border-gray-100 space-y-8">
                      <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center text-white">
                <FiPhone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-black">Call To Us</h3>
            </div>
            <p className="text-sm text-black">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm text-black">Phone: +8801611112222</p>
          </div>

          <hr className="border-gray-300" />
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center text-white">
                <FiMail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-black">Write To US</h3>
            </div>
            <p className="text-sm text-black leading-relaxed">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm text-black">
              Emails: customer@exclusive.com
            </p>
            <p className="text-sm text-black">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>
        <div className="lg:col-span-8 bg-white p-8 rounded-md shadow-md border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] text-sm text-black placeholder-gray-500 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#DB4444]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] text-sm text-black placeholder-gray-500 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#DB4444]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] text-sm text-black placeholder-gray-500 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#DB4444]"
              />
            </div>
                        <div>
              <textarea
                name="message"
                rows={7}
                placeholder="Your Massage"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] text-sm text-black placeholder-gray-500 rounded p-4 resize-none focus:outline-none focus:ring-1 focus:ring-[#DB4444]"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#E04F4F] hover:bg-[#d03f3f] text-white font-medium px-12 py-4 rounded transition-colors duration-200 text-sm"
              >
                Send Massage
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;