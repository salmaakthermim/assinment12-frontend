import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUsSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">We'd love to hear from you! Reach out for any questions, support, or partnership opportunities.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-red-500 rounded-3xl p-10 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-red-100 mb-10 leading-relaxed">Fill up the form and our team will get back to you within 24 hours.</p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="text-xl mt-1 text-red-200" />
                <div>
                  <p className="font-medium text-lg">+1 (123) 456-7890</p>
                  <p className="text-red-200 text-sm">Mon-Fri 9am-6pm</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-xl mt-1 text-red-200" />
                <div>
                  <p className="font-medium text-lg">support@donatelife.org</p>
                  <p className="text-red-200 text-sm">Online support</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-xl mt-1 text-red-200" />
                <div>
                  <p className="font-medium text-lg">123 Health Ave, NY 10012</p>
                  <p className="text-red-200 text-sm">United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors outline-none resize-none"
                  rows="5"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Send Message
              </button>
            </form>
            {isSubmitted && (
              <div className="mt-6 p-4 bg-green-50 text-green-600 rounded-xl border border-green-100 flex items-center">
                <span className="mr-2">✅</span> Thank you! We will get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
