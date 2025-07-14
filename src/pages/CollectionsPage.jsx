// src/pages/CollectionsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from "../data.js";
import collectionBanner from '../assets/collection_banner.jpg';


const CollectionsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null); // For modal

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section
        className="relative h-60 flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${collectionBanner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold drop-shadow-lg">
          Our Collections
        </h1>
      </section>

      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'ready-to-wear', 'ወኔ', 'embroidered-looks'].map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
              >
                {category.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(product)}
              >
                <img src={product.image} alt={product.name} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <button className="text-primary hover:underline font-semibold">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl leading-none">&times;</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-96 object-cover rounded-md mb-6" />
            <h2 className="text-4xl font-bold text-primary mb-4">{selectedProduct.name}</h2>
            <p className="text-gray-800 text-lg mb-6">{selectedProduct.description}</p>
            <Link to="/book" onClick={closeModal} className="bg-primary hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition-colors duration-300">
              Book Consultation for this piece
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CollectionsPage;