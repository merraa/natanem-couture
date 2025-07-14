// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CollectionsPage from './pages/CollectionsPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen"> {/* min-h-screen ensures footer is at bottom on short content pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add a 404 page if desired */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;