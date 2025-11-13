/**
 * ==============================================================================
 * Knights Legacy Fund Website - Main Application (App.jsx)
 * ==============================================================================
 *
 * Root SPA component. Manages page state and layout using extracted Header/Footer.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Scholarships from './components/Scholarships';
import ScholarshipDominic from './components/ScholarshipDominic';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Faq from './components/Faq';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const App = () => {
  const navigate = useNavigate();

  // Scroll to top on route change
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <Header onNavigate={handleNavigate} />
      
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/scholarships" element={<Scholarships onNavigate={handleNavigate} />} />
          <Route path="/scholarships/dominic" element={<ScholarshipDominic onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/faq" element={<Faq onNavigate={handleNavigate} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;