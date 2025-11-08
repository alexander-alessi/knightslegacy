/**
 * ==============================================================================
 * Knights Legacy Fund – Footer Component
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-white text-llhs-maroon py-8 mt-16 border-t border-llhs-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-3 mb-1 hover:text-llhs-gold transition-colors"
            >
              <div className="w-10 h-10">
                <img
                  src="/assets/logo/knights.png"
                  alt="Knights Legacy Fund Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Knights Legacy Fund
              </span>
            </button>
            <p className="text-xs text-gray-600">
              © 2025 Knights Legacy Fund. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">

            {/* Donate */}
            <button
              onClick={() => onNavigate('/donate')}
              className="inline-flex items-center gap-2 text-llhs-maroon hover:text-llhs-gold transition-colors"
            >
              <FontAwesomeIcon icon={faHeart} className="text-xl animate-pulse text-red-600" />
              <span className="font-medium">Donate</span>
            </button>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/knights.legacy.fund/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-llhs-maroon hover:text-llhs-gold transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              <span className="font-medium">@knights.legacy.fund</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/knights-legacy-fund/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-llhs-maroon hover:text-llhs-gold transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              <span className="font-medium">LinkedIn</span>
            </a>

            {/* Contact Us */}
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 text-llhs-maroon hover:text-llhs-gold transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              <span className="font-medium">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;