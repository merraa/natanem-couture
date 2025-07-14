// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-1 sticky top-0 z-50 flex">
      <nav className="container mx-auto flex justify-center items-center px-2 gap-25">

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="text-primary hover:text-primary font-medium transition-colors duration-300">Home</Link></li>
          <li><Link to="/about" className="text-primary hover:text-primary font-medium transition-colors duration-300">About</Link></li>
          <li><Link to="/collections" className="text-primary hover:text-primary font-medium transition-colors duration-300">Collections</Link></li>
        </ul>
        <Link to="/">
           <img src={logo} alt="Brand Logo" className='h-15 rounded-full'/>
          </Link>
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/services" className="text-primary hover:text-primary font-medium transition-colors duration-300">Services</Link></li>
          <li><Link to="/gallery" className="text-primary hover:text-primary font-medium transition-colors duration-300">Gallery</Link></li>
          <li><Link to="/book" className="text-primary hover:text-primary font-medium transition-colors duration-300">Book</Link></li>
          <li><Link to="/contact" className="text-primary hover:text-primary font-medium transition-colors duration-300">Contact</Link></li>
        </ul>

        {/* Mobile Burger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-medium">Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-medium">About</Link></li>
            <li><Link to="/collections" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-medium">Collections</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-medium">Services</Link></li>
            <li><Link to="/gallery" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-medium">Gallery</Link></li>
            <li><Link to="/book" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-medium">Book</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-medium">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;