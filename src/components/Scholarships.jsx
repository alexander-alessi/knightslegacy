/**
 * ==============================================================================
 * Knights Legacy Fund – Scholarships Page
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Scholarships = ({ onNavigate }) => {
  const [sponsorsPartners, setSponsorsPartners] = useState([]);
  const [eventSponsors, setEventSponsors] = useState([]);
  const [namedPartners, setNamedPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch('/data/sponsors-partners.json').then(r => r.ok ? r.json() : []),
      fetch('/data/sponsors-event.json').then(r => r.ok ? r.json() : []),
      fetch('/data/sponsors-named.json').then(r => r.ok ? r.json() : [])
    ])
      .then(([partnersData, eventData, namedData]) => {
        setSponsorsPartners(partnersData);
        setEventSponsors(eventData);
        setNamedPartners(namedData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load sponsor data:', err);
        setError('Using fallback data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-12">

      {/* Our Scholarships */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
            Scholarships
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <div className="mt-12 text-center text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <p>
            Every year, we award scholarships to deserving Las Lomas students pursuing higher education. Our goal is to remove financial barriers and celebrate resilience, leadership, and community impact.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-llhs-gold/50">
            <h3 className="text-2xl font-bold text-llhs-maroon mb-3">
              Knights Legacy Scholarship
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Award:</strong> $1,000 – $5,000
            </p>
            <p className="text-gray-700 leading-relaxed">
              For students demonstrating financial need, academic effort, and community involvement. Open to all post-high school paths.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-llhs-gold/50 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-llhs-maroon mb-3">
              Dominic Paul Maron Ferrell Memorial Scholarship
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Award:</strong> $5,000 – $10,000
            </p>
            <p className="text-gray-700 leading-relaxed flex-grow">
              Honors a beloved community member. Awarded to a student who embodies kindness, perseverance, and service to others.
            </p>
            <div className="mt-6">
              <button
                onClick={() => onNavigate('/scholarships/dominic')}
                className="w-full bg-llhs-maroon text-white font-bold text-lg py-3 px-6 rounded-full hover:bg-llhs-maroon/90 hover:shadow-lg transition-all duration-200"
              >
                More Info
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            Applications open in <strong>early spring</strong>. Details announced via the Las Lomas Career Center and our website.
          </p>
        </div>
      </section>

      {/* Named Scholarship Partners */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
              Named Scholarship Partners
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <p className="mt-12 text-center text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            These generous partners have committed to fully funding named scholarships, creating lasting impact for Las Lomas students.
          </p>

          <div className="mt-12 overflow-x-auto">
            {loading && !namedPartners.length ? (
              <p className="text-center py-8 text-gray-500">Loading named partners...</p>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-llhs-gold">
                    <th className="py-4 px-6 text-sm font-semibold text-llhs-maroon uppercase tracking-wider">
                      Partner
                    </th>
                    <th className="py-4 px-6"></th>
                    <th className="py-4 px-6 text-sm font-semibold text-llhs-maroon uppercase tracking-wider text-center">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {namedPartners.length > 0 ? (
                    namedPartners.map((p) => (
                      <tr key={p.slug} className="border-b border-gray-200 hover:bg-gray-50 transition">
                        <td className="py-6 px-6">
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-llhs-maroon hover:text-llhs-gold hover:underline transition-all duration-200"
                          >
                            {p.name}
                            <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" className="opacity-70 ml-1" />
                          </a>
                        </td>
                        <td className="py-6 px-6">
                          <div className="w-24 h-24 mx-auto flex items-center justify-center">
                            <img
                              src={`/assets/partners/${p.slug}`}
                              alt={p.name}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <span className="inline-block px-3 py-1 text-sm font-medium text-llhs-maroon bg-llhs-gold/20 rounded-full">
                            ${parseInt(p.amount).toLocaleString()}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="py-8 text-center text-gray-500">
                        No named partners listed yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
            {error && <p className="text-center text-sm text-red-600 mt-2">{error}</p>}
          </div>
        </div>
      </section>

      {/* Scholarship Partners */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
              Scholarship Partners
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <p className="mt-12 text-center text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Every scholarship we give is made possible by our incredible Scholarship Partners. Their support — at every level — is the heartbeat of the Knights Legacy Fund. Thank you for believing in our students. Ready to join them?
          </p>

          <div className="mt-12 overflow-x-auto">
            {loading && !sponsorsPartners.length ? (
              <p className="text-center py-8 text-gray-500">Loading partners...</p>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-llhs-gold">
                    <th className="py-4 px-6 text-sm font-semibold text-llhs-maroon uppercase tracking-wider">
                      Partner
                    </th>
                    <th className="py-4 px-6"></th>
                    <th className="py-4 px-6 text-sm font-semibold text-llhs-maroon uppercase tracking-wider text-center">
                      Tier
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sponsorsPartners.length > 0 ? (
                    sponsorsPartners.map((p) => (
                      <tr key={p.slug} className="border-b border-gray-200 hover:bg-gray-50 transition">
                        <td className="py-6 px-6">
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-llhs-maroon hover:text-llhs-gold hover:underline transition-all duration-200"
                          >
                            {p.name}
                            <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" className="opacity-70 ml-1" />
                          </a>
                        </td>
                        <td className="py-6 px-6">
                          <div className="w-24 h-24 mx-auto flex items-center justify-center">
                            <img
                              src={`/assets/partners/${p.slug}`}
                              alt={p.name}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <span className="inline-block px-3 py-1 text-sm font-medium text-llhs-maroon bg-llhs-gold/20 rounded-full">
                            {p.tier}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="py-8 text-center text-gray-500">
                        No partners listed yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
            {error && <p className="text-center text-sm text-red-600 mt-2">{error}</p>}
          </div>
        </div>
      </section>

      {/* Special Event Sponsors */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
              Special Event Sponsors
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <p className="mt-12 text-center text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our special event sponsors help us host fundraising events in the community. Their support brings people together and makes our work possible. We’re grateful for their generosity.
          </p>

          <div className="mt-12 overflow-x-auto">
            {loading && !eventSponsors.length ? (
              <p className="text-center py-8 text-gray-500">Loading event sponsors...</p>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-llhs-gold">
                    <th className="py-4 px-6 text-sm font-semibold text-llhs-maroon uppercase tracking-wider">
                      Sponsor
                    </th>
                    <th className="py-4 px-6"></th>
                    <th className="py-4 px-6 text-sm font-semibold text-llhs-maroon uppercase tracking-wider text-center">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {eventSponsors.length > 0 ? (
                    eventSponsors.map((s) => (
                      <tr key={s.slug} className="border-b border-gray-200 hover:bg-gray-50 transition">
                        <td className="py-6 px-6">
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-llhs-maroon hover:text-llhs-gold hover:underline transition-all duration-200"
                          >
                            {s.name}
                            <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" className="opacity-70 ml-1" />
                          </a>
                        </td>
                        <td className="py-6 px-6">
                          <div className="w-24 h-24 mx-auto flex items-center justify-center">
                            <img
                              src={`/assets/partners/${s.slug}`}
                              alt={s.name}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <span className="inline-block px-3 py-1 text-sm font-medium text-llhs-maroon bg-llhs-gold/20 rounded-full">
                            {s.role}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="py-8 text-center text-gray-500">
                        No event sponsors listed yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;