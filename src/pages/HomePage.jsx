// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import landingPic1 from "../assets/landing_pic1.jpg";
import landingPic2 from "../assets/landing_pic2.jpg";
import landingPic3 from "../assets/landing_pic3.jpg";
import hisHers from '../assets/his_and_hers.jpg';
import wene from '../assets/wene.jpg';
import readyWear from '../assets/ready_to_wear.jpg';
import instagram1 from '../assets/carousel_pic1.jpg';
import instagram2 from '../assets/carousel_pic2.jpg';
import instagram3 from '../assets/carousel_pic3.jpg';
import instagram4 from '../assets/carousel_pic4.jpg';
import instagram5 from '../assets/carousel_pic5.jpg';
import instagram6 from '../assets/carousel_pic6.jpg';

const instagramImages = [
  instagram1,
  instagram2,
  instagram3,
  instagram4,
  instagram5,
  instagram6,
];


const HomePage = () => {
  return (
    <>
      {/* Hero Banner with Carousel */}
      <section className="relative h-screen w-screen overflow-hidden"> {/* Added w-screen and ensured overflow-hidden */}
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={700}
          stopOnHover={true}
          // The carousel itself needs to contain its content
          className="h-full w-full" // Ensure carousel takes full height AND full width
        >
          {/* Slide 1 */}
          <div className="relative h-screen w-full flex items-center justify-center text-center text-white bg-cover bg-center" // Added w-full here too
               style={{ backgroundImage: `url(${landingPic1})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 p-4 max-w-2xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Where Elegance Meets Style.
              </h1>
              <Link to="/collections" className="bg-primary hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition-colors duration-300">
                View Collection
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative h-screen w-full flex items-center justify-center text-center text-white bg-cover bg-center" // Added w-full
               style={{ backgroundImage: `url(${landingPic2})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 p-4 max-w-2xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Elegance in Every Stitch.
              </h1>
              <Link to="/about" className="bg-primary hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition-colors duration-300">
                Discover Our Story
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative h-screen w-full flex items-center justify-center text-center text-white bg-cover bg-center" // Added w-full
               style={{ backgroundImage: `url(${landingPic3})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 p-4 max-w-2xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Crafting Your Dream Garment.
              </h1>
              <Link to="/book" className="bg-primary hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition-colors duration-300">
                Book a Consultation
              </Link>
            </div>
          </div>
        </Carousel>
      </section>

      {/* About Teaser */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-6">Our Story, Our Craft</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Natanem Couture blends timeless elegance with Ethiopian heritage, creating bespoke pieces that celebrate individuality and slow fashion. Discover our commitment to exquisite craftsmanship and unique design.
          </p>
          <Link to="/about" className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition-colors duration-300">
            Learn More &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 bg-secondary text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collection Item 1 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img src={readyWear} alt="Ready To Wear" className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-semibold uppercase tracking-wider">Ready To Wear</h3>
              </div>
            </div>
            {/* Collection Item 2 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img src={hisHers} alt="His & Hers" className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-semibold uppercase tracking-wider">His & Hers</h3>
              </div>
            </div>
            {/* Collection Item 3 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img src={wene} alt="ወኔ" className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-semibold uppercase tracking-wider">ወኔ</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed (Conceptual - requires API) */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-4">Follow Us on Instagram</h2>
          <p className="text-xl text-gray-600 mb-10">@natanem_couture</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {instagramImages.map((imageSrc, index) => (
              <img
                key={index} // Use index as key if items don't reorder or get added/removed. If they do, use a unique ID.
                src={imageSrc} // Use the imported image variable directly
                alt={`Instagram Post ${index + 1}`}
                className="w-full h-40 object-cover rounded-md shadow-md"
              />
            ))}
          </div>
          <a href="https://instagram.com/natanem_couture" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition-colors duration-300">
            View on Instagram
          </a>
        </div>
      </section>

      {/* CTA / Booking Prompt */}
      <section className="bg-primary text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need something custom?</h2>
          <p className="text-xl mb-10">Book a fitting with Natanem today.</p>
          <Link to="/book" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg uppercase transition-colors duration-300">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;