/**
 * ==============================================================================
 * Knights Legacy Fund – About Page
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2026 Knights Legacy Fund. All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import PersonCard from './PersonCard';

const About = () => {
  const [exec, setExec] = useState([]);
  const [chairs, setChairs] = useState([]);
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch('/data/about-execs.json').then(r => r.ok ? r.json() : []),
      fetch('/data/about-chairs.json').then(r => r.ok ? r.json() : []),
      fetch('/data/about-interns.json').then(r => r.ok ? r.json() : [])
    ])
      .then(([execData, chairsData, internsData]) => {
        setExec(execData);
        setChairs(chairsData);
        setInterns(internsData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load team data:', err);
        setError('Using fallback data');
        setLoading(false);
      });
  }, []);

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
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
              Executive Board Members
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          {loading && !exec.length ? (
            <p className="text-center py-12 text-gray-500">Loading executives…</p>
          ) : (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              {exec.length > 0 ? (
                exec.map((p) => <PersonCard key={p.name} {...p} />)
              ) : (
                <p className="col-span-2 text-center text-gray-500">No executives listed.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Chair Members */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
              Chair Members
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          {loading && !chairs.length ? (
            <p className="text-center py-12 text-gray-500">Loading chairs…</p>
          ) : (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              {chairs.length > 0 ? (
                chairs.map((p) => <PersonCard key={p.name} {...p} />)
              ) : (
                <p className="col-span-2 text-center text-gray-500">No chairs listed.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Junior Interns */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
              Junior Interns
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 italic">
              Training the next generation of Knights Legacy Fund leaders
            </p>
          </div>

          {loading && !interns.length ? (
            <p className="text-center py-12 text-gray-500">Loading interns…</p>
          ) : (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              {interns.length > 0 ? (
                interns.map((p) => <PersonCard key={p.name} {...p} />)
              ) : (
                <p className="col-span-2 text-center text-gray-500">No interns listed.</p>
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