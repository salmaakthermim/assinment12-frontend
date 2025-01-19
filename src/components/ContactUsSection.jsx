import React, { useState } from 'react';

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
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12">We’d love to hear from you! Reach out for any questions or assistance.</p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Send Message
              </button>
            </form>
            {isSubmitted && <p className="mt-4 text-green-500">Thank you for your message. We will get back to you soon!</p>}
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">If you need immediate assistance, feel free to contact us directly at:</p>
            <p className="text-lg text-blue-600">+1 (123) 456-7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
