// src/pages/ServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import service from '../assets/services.jpg';
import customTailoring from '../assets/custom_tailoring.jpg';
import alterationService from '../assets/alteration_service.jpg';
import measurmentGuide from '../assets/measurment_guide.jpg';


const services = [
  {
    title: 'Custom Tailoring',
    description: 'Experience the pinnacle of personalized fashion with our custom tailoring service. From initial concept to final fitting, we craft garments that perfectly align with your vision and measurements, ensuring an impeccable fit and unique style.',
    image: customTailoring,
    pricing: 'Pricing upon request',
    link: '/book?service=custom-tailoring'
  },
  {
    title: 'Alteration Services',
    description: 'Ensure your existing garments fit flawlessly. We offer expert alteration services for both Natanem Couture pieces and other high-quality apparel, ensuring your clothing feels and looks made just for you.',
    image: alterationService,
    pricing: 'Starting from $5', 
    link: '/book?service=alteration'
  },
  {
    title: 'Measurements Guide',
    description: 'An essential guide for our remote clients or for those preparing for a fitting. Follow our detailed instructions to accurately take your measurements from the comfort of your home.',
    image: measurmentGuide,
    pricing: 'Free resource',
    link: '/measurements-guide' // Could be a separate page or a downloadable PDF
  }
];

const ServicesPage = () => {
  return (
    <>
      <section
        className="relative h-60 flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${service})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold drop-shadow-lg">
          Our Services
        </h1>
      </section>

      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch group hover:shadow-xl transition-shadow duration-300">
                <div className="md:w-1/2 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                    {service.pricing && (
                      <p className="text-gray-800 font-semibold mb-6">
                        {service.pricing}
                      </p>
                    )}
                  </div>
                  {service.link && (
                    <Link
                      to={service.link}
                      className="inline-block mt-4 bg-primary hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full text-base uppercase transition-colors duration-300 self-start"
                    >
                      Book Your Appointment
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;