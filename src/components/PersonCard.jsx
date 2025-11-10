/**
 * ==============================================================================
 * Knights Legacy Fund – Person Card
 * ==============================================================================
 * Reusable card for Executive & Chair members
 * 
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const PersonCard = ({ name, role, slug, responsibilities = [], about, contact = {} }) => {
  const hasLinkedIn = !!contact.linkedin;
  const hasEmail = !!contact.email;

  return (
    <div className="bg-white rounded-2xl shadow-xl border-t-4 border-llhs-maroon overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Left: Headshot + Name + Role + Icons (Centered) */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 mb-6">
              <img
                src={`/assets/headshots/${slug}`}
                alt={name}
                className="w-full h-full rounded-full object-cover border-4 border-llhs-gold shadow-lg"
              />
            </div>

            <h3 className="text-3xl font-bold text-llhs-maroon mb-2">
              {name}
            </h3>
            <p className="text-xl font-semibold text-llhs-gold mb-6">
              {role}
            </p>

            {/* Icons Below Title */}
            {(hasLinkedIn || hasEmail) && (
              <div className="flex gap-4 mb-6">
                {hasLinkedIn && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-llhs-maroon text-white rounded-full hover:bg-llhs-maroon/90 transition-colors shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                )}
                {hasEmail && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-center w-12 h-12 bg-llhs-gold text-llhs-maroon rounded-full hover:bg-llhs-gold/90 transition-colors shadow-lg"
                    aria-label="Email"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right: Responsibilities + About Me (Left Justified) */}
          <div className="space-y-10">
            {/* Responsibilities – Tighter Spacing */}
            <div>
              <h4 className="text-xl font-bold text-llhs-maroon mb-4 border-b-2 border-llhs-gold pb-2 inline-block">
                Responsibilities
              </h4>
              <ul className="space-y-1.5 mt-4">
                {responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-llhs-gold font-bold text-lg">•</span>
                    <span className="text-gray-700 leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Me */}
            <div>
              <h4 className="text-xl font-bold text-llhs-maroon mb-4 border-b-2 border-llhs-gold pb-2 inline-block">
                About Me
              </h4>
              <p className="text-gray-700 leading-relaxed mt-4">
                {about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;