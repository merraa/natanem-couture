import aboutPic from '../assets/about_pic.jpg';
import designer from '../assets/designer_profile.jpg';
import vogue from '../assets/vogue.jpg';
import magazine from '../assets/fashion_magazine.jpg';
import React from 'react';

const AboutPage = () => {
  return (
    <>
      {/* Hero Banner Section (Keep as is) */}
      <section
        className="relative h-60 flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutPic})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold drop-shadow-lg">
          The Story of Natanem Couture
        </h1>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">

          {/* Designer Bio Section - Enhanced with prominent rectangular photo */}
          <div className="flex flex-col md:flex-row gap-12 mb-20 items-start"> {/* items-start aligns content to the top */}
            {/* Designer Photo - Now a long, prominent rectangle */}
            <div className="w-full md:w-3/5 lg:w-1/2 flex-shrink-0"> {/* This div controls the photo's column width */}
              <img
                src={designer} // Make sure this path is correct and the image is suitable for a rectangle
                alt="Natanem Couture Designer"
                className="w-full h-100 object-cover border-4 shadow-lg" // h-96 creates the "long" rectangle, w-full ensures it fills its column
              />
            </div>

            {/* Designer Bio Text - Takes up remaining column width */}
            <div className="w-full md:w-3/5 lg:w-1/2">
              <h2 className="text-4xl font-bold text-primary mb-6">Meet Natanem, The Visionary Behind Natanem Couture</h2>
              <p className="text-lg mb-4 leading-relaxed text-gray-700">
                Natanem, the visionary behind Natanem Couture, embarked on her journey with a passion for transforming fabrics into wearable art. Growing up in Addis Ababa, she was deeply inspired by the rich cultural tapestry of Ethiopia – the vibrant textiles, the intricate patterns, and the enduring grace of Ethiopian women. This early exposure to heritage and craftsmanship ignited a desire to blend traditional aesthetics with contemporary haute couture.
              </p>
              <p className="text-lg mb-4 leading-relaxed text-gray-700">
                After honing her skills at renowned fashion institutions abroad, Natanem returned home with a singular vision: to redefine luxury fashion from an Ethiopian perspective.</p>
            </div>
          </div>

          {/* Design Philosophy Section (Keep as is, adjusted spacing) */}
          <div className="pt-16 border-t border-gray-200 text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Our Design Philosophy</h2>
            <p className="text-lg max-w-4xl mx-auto mb-6 leading-relaxed text-justify text-gray-700">
              At Natanem Couture, we champion <strong>elegance, slow fashion, and heritage embroidery</strong> . We believe in creating garments that are not just beautiful, but also meaningful and sustainable. Our designs embody a sophisticated minimalism, allowing the intricate details and luxurious fabrics to speak for themselves. We are committed to ethical practices, working closely with local artisans to empower communities and preserve traditional techniques. Every stitch tells a story, and every garment is a celebration of individuality and the timeless beauty of Ethiopian artistry.
            </p>
          </div>

          {/* Optional: Press Mentions Section (Keep as is) */}
          <div className="pt-20 text-center">
            <h3 className="text-3xl font-bold text-primary mb-10">As Seen In</h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <img src={vogue} alt="Vogue Italia" className="h-60 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 border-4 border-primary" />
              <img src={magazine} alt="Fashion Magazine" className="h-60 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 border-4 border-primary" />
              {/* Add more logos */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;