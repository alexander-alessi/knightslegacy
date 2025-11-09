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
    <footer className="bg-white text-llhs-maroon py-4 mt-16 border-t border-llhs-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm">

          {/* LEFT: Logo + Name + Copyright */}
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

          {/* CENTER: Donate Button */}
          <div className="flex justify-center">
            <button
              onClick={() => onNavigate('/donate')}
              className="inline-flex items-center gap-2 text-llhs-maroon hover:text-llhs-gold transition-colors"
            >
              <FontAwesomeIcon icon={faHeart} className="text-xl animate-pulse text-red-600" />
              <span className="font-medium text-lg">Donate</span>
            </button>
          </div>

          {/* RIGHT: Icons Only (IG, LinkedIn, Contact) */}
          <div className="flex justify-center md:justify-end gap-1">
            <a
              href="https://www.instagram.com/knights.legacy.fund/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-2xl text-llhs-maroon hover:text-llhs-gold transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://www.linkedin.com/company/knights-legacy-fund/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-llhs-maroon hover:text-llhs-gold transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <button
              onClick={() => onNavigate('/contact')}
              aria-label="Contact Us"
              className="text-2xl text-llhs-maroon hover:text-llhs-gold transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;