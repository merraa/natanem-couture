// src/pages/BookingPage.jsx
import React, { useState } from 'react';
import book from '../assets/book-consultation.jpg';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    alert('Booking request received! (Submission functionality needs backend integration)');
  };

  return (
    <>
      <section
        className="relative h-60 flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${book})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold drop-shadow-lg">
          Book a Consultation
        </h1>
      </section>

      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Schedule Your Appointment</h2>
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
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
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
              <label htmlFor="service" className="block text-gray-700 text-sm font-bold mb-2">Preferred Service:</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select a service</option>
                <option value="custom-tailoring">Custom Tailoring</option>
                <option value="alteration">Alteration Services</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Preferred Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Preferred Time:</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message (optional):</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-purple-800 text-white font-bold py-3 px-4 rounded-full text-lg uppercase transition-colors duration-300"
            >
              Book My Appointment
            </button>
          </form>
          
        </div>
      </section>
    </>
  );
};

export default BookingPage;