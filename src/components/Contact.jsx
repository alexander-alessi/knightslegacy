/**
 * ==============================================================================
 * Knights Legacy Fund – Contact Page
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
            Contact & Inquiries
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <div className="mt-12 text-center space-y-6 text-lg">
          <p className="text-gray-700">
            Have questions? We’d love to hear from you.<br />
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 text-llhs-maroon">
            <a
              href="mailto:knightslegacy.org@gmail.com"
              className="flex items-center gap-3 hover:text-llhs-gold transition"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
              <span className="font-medium">knightslegacy.org@gmail.com</span>
            </a>

            <a
              href="tel:+19255425480"
              className="flex items-center gap-3 hover:text-llhs-gold transition"
            >
              <FontAwesomeIcon icon={faPhone} className="text-2xl" />
              <span className="font-medium">(925) 542-5480</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;