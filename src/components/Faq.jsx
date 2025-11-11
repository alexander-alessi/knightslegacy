/**
 * ==============================================================================
 * Knights Legacy Fund – FAQ Page
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React, { useState, useEffect } from 'react';

const Faq = ({ onNavigate }) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/faq.json')
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        setFaqs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
            Frequently Asked Questions
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <p className="text-center py-12 text-gray-500">Loading FAQs…</p>
        )}

        {/* Accordion */}
        {!loading && faqs.length > 0 && (
          <div className="mt-12 space-y-8">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-llhs-light rounded-2xl shadow-md overflow-hidden border border-llhs-gold/30"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-xl text-llhs-maroon hover:bg-llhs-gold/10 transition">
                  <span>{item.q}</span>
                  <span className="text-3xl text-llhs-gold group-open:rotate-90 transform transition">
                    ›
                  </span>
                </summary>
<div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">
  {item.a.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      <br />
    </React.Fragment>
  ))}
</div>
              </details>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && faqs.length === 0 && (
          <p className="text-center py-12 text-gray-500">No FAQs available.</p>
        )}

        {/* Simple Contact Link */}
        <p className="text-center text-base text-gray-700 mt-12">
          Still have questions?{' '}
          <button
            onClick={() => onNavigate('/contact')}
            className="font-bold text-llhs-maroon hover:text-llhs-gold underline transition-colors"
          >
            Contact us
          </button>
        </p>
      </section>
    </div>
  );
};

export default Faq;