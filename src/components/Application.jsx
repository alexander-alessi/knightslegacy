/**
 * ==============================================================================
 * Knights Legacy Fund – Application Page
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React, { useState, useEffect } from 'react';

const Application = () => {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/application.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load application data');
        return res.json();
      })
      .then(data => {
        setEnabled(data.enabled || false);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Load Tally embed script when enabled
  useEffect(() => {
    if (!enabled) return;

    const script = document.createElement('script');
    script.innerHTML = `
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [enabled]);

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
            Scholarship Application
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <div className="mt-12">
          {loading ? (
            <p className="text-lg text-gray-600 text-center">Loading...</p>
          ) : enabled ? (
            <div className="w-full">
              <iframe 
                data-tally-src="https://tally.so/embed/XxxVML?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="1609" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0" 
                title="Knights Legacy Fund Scholarship Application"
              ></iframe>
            </div>
          ) : (
            <p className="text-lg text-gray-700 text-center">We are not currently accepting new applications.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Application;
