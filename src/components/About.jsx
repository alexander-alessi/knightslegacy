/**
 * ==============================================================================
 * Knights Legacy Fund – About Page
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React, { useState, useEffect } from 'react';

const About = () => {
  const [exec, setExec] = useState([]);
  const [chairs, setChairs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch('/data/about-execs.json').then(r => r.ok ? r.json() : []),
      fetch('/data/about-chairs.json').then(r => r.ok ? r.json() : [])
    ])
      .then(([execData, chairsData]) => {
        setExec(execData);
        setChairs(chairsData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load team data:', err);
        setError('Using fallback data');
        setLoading(false);
      });
  }, []);

  const PersonCard = ({ name, role, slug, responsibilities, about }) => (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-llhs-gold mb-4 shadow-lg">
        <img
          src={`/assets/headshots/${slug}`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-llhs-maroon">{name}</h3>
      <p className="text-sm text-gray-600 mb-8">{role}</p>

      <div className="w-full max-w-xs p-4 rounded-lg border border-llhs-gold/30 bg-gray-100">
        <div className="space-y-4 text-center text-sm">
          <div>
            <p className="font-semibold text-llhs-maroon mb-1">Responsibilities</p>
            <p className="text-gray-700 leading-relaxed">{responsibilities}</p>
          </div>
          <div>
            <p className="font-semibold text-llhs-maroon mb-1">About Me</p>
            <p className="text-gray-700 leading-relaxed italic">{about}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-12">

      {/* About Our Team */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
              About Our Team
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="mt-12 text-center text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              We’re a group of passionate high school students dedicated to making a meaningful impact in our community. United by a shared vision, we’re driven to support and uplift students who face financial barriers in pursuing their education.
            </p>
          </div>

          <div className="mt-16">
            <img
              src="/assets/team/extended-team.png"
              alt="Knights Legacy Fund Extended Team"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Executive Board Members */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
              Executive Board Members
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          {loading && !exec.length ? (
            <p className="text-center py-8 text-gray-500">Loading executives…</p>
          ) : (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {exec.length > 0 ? (
                exec.map((p) => <PersonCard key={p.name} {...p} />)
              ) : (
                <p className="col-span-full text-center text-gray-500">No executives listed.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Chair Members */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
              Chair Members
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          {loading && !chairs.length ? (
            <p className="text-center py-8 text-gray-500">Loading chairs…</p>
          ) : (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {chairs.length > 0 ? (
                chairs.map((p) => <PersonCard key={p.name} {...p} />)
              ) : (
                <p className="col-span-full text-center text-gray-500">No chairs listed.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {error && (
        <p className="text-center text-sm text-red-600 mt-4">{error}</p>
      )}
    </div>
  );
};

export default About;