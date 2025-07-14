// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-10 px-4 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
        {/* Navigation */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
          <ul className="text-center md:text-left">
            <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
            <li className="mb-2"><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link></li>
            <li className="mb-2"><Link to="/collections" className="text-gray-400 hover:text-white transition-colors duration-300">Collections</Link></li>
            <li className="mb-2"><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</Link></li>
            <li className="mb-2"><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors duration-300">Gallery</Link></li>
            <li className="mb-2"><Link to="/book" className="text-gray-400 hover:text-white transition-colors duration-300">Book</Link></li>
            <li className="mb-2"><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
          <a href="https://instagram.com/natanem_couture" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-purple-800 transition-colors duration-300">
            <FaInstagram className="text-4xl" />
          </a>
          {/* Add more social icons as needed */}
        </div>

        {/* Contact & Hours */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-white text-lg font-semibold mb-4">Contact & Hours</h3>
          <p className="mb-2">Addis Ababa, Ethiopia</p>
          <p className="mb-1">Mon-Fri: 9 AM - 6 PM</p>
          <p>Sat: 10 AM - 4 PM</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs">
        <p>&copy; 2025 Natanem Couture. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;