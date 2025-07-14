// src/pages/GalleryPage.jsx
import React, { useState } from 'react';
import gallery from '../assets/gallery.jpg';
import galleryBehindScenes1 from '../assets/gallery/gallery_behind_scenes1.jpg';
import galleryBehindScenes2 from '../assets/gallery/gallery_behind_scenes2.jpg';
import galleryBehindScenes3 from '../assets/gallery/gallery_behind_scenes3.jpg';
import galleryBehindScenes4 from '../assets/gallery/gallery_behind_scenes4.jpg';

import galleryClient1 from '../assets/gallery/gallery_client1.jpg';
import galleryClient2 from '../assets/gallery/gallery_client2.jpg';




const galleryItems = [
  { id: 1, src: galleryBehindScenes4, category: 'behind-the-scenes', alt: 'Behind the Scenes 3' },
  { id: 2, src: galleryBehindScenes1, category: 'behind-the-scenes', alt: 'Behind the Scenes 1' },
  { id: 3, src: galleryClient1, category: 'clients', alt: 'Client Photo 1' },
  { id: 4, src: galleryBehindScenes3, category: 'behind-the-scenes', alt: 'Behind the Scenes 4' },
  { id: 5, src: galleryBehindScenes2, category: 'behind-the-scenes', alt: 'Behind the Scenes 2' },
  { id: 6, src: galleryClient2, category: 'clients', alt: 'Client Photo 2' },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <section
        className="relative h-60 flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${gallery})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold drop-shadow-lg">
          Our Gallery
        </h1>
      </section>

      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'behind-the-scenes', 'clients'].map(category => (
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

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map(item => (
              <div key={item.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={item.src} alt={item.alt} className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;