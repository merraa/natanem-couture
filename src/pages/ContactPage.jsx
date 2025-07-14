// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import getInTouch from '../assets/get-in-touch.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Similar to booking form, send to backend for email notification
    alert('Your message has been sent! We will get back to you soon.');
  };

  return (
    <>
      <section
        className="relative h-60 flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${getInTouch})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold drop-shadow-lg">
          Get in Touch
        </h1>
      </section>

      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
            <div className="space-y-4 text-lg">
              <p><strong className="font-semibold">Email:</strong> <a href="mailto:info@natanemcouture.com" className="text-gray-700 hover:text-primary">info@natanemcouture.com</a></p>
              <p><strong className="font-semibold">Phone:</strong> <a href="tel:+251911234567" className="text-gray-700 hover:text-primary">+251 911 234 567</a></p>
              <p><strong className="font-semibold">WhatsApp:</strong> <a href="https://wa.me/251911234567" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary flex items-center"><FaWhatsapp className="mr-2" /> +251 911 234 567</a></p>
              <div className="flex items-center space-x-4 mt-6">
                <a href="https://instagram.com/natanem_couture" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-purple-800 transition-colors duration-300">
                  <FaInstagram className="text-4xl" />
                </a>
                {/* Add more social icons here (e.g., Facebook, Pinterest) */}
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Location</h3>
              <p className="text-lg mb-4">Natanem Couture Atelier, Bole, Addis Ababa, Ethiopia</p>
              {/* Google Maps Embed */}
              <div className="map-container overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.640193108985!2d38.75775831478546!3d9.01426499354051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA2JzUzLjQiTiAzOMKwNDUnMjcuOSJF!5e0!3m2!1sen!2set!4v1678900000000!5m2!1sen!2set"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Natanem Couture Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone (optional):</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="7"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-purple-800 text-white font-bold py-3 px-4 rounded-full text-lg uppercase transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;