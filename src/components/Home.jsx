/**
 * ==============================================================================
 * Knights Legacy Fund – Home Page
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React, { useState, useEffect } from 'react';

const Home = ({ onNavigate }) => {
  const [raised, setRaised] = useState(0);
  const [goal, setGoal] = useState(50000);
  const [loading, setLoading] = useState(true);
  const [donors, setDonors] = useState([]);
  const [currentDonorIndex, setCurrentDonorIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/fund.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load funding data');
        return res.json();
      })
      .then(data => {
        setRaised(data.raised || 0);
        setGoal(data.goal || 50000);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
        // Fallback values
        setRaised(32800);
        setGoal(50000);
      });
  }, []);

  const percent = goal > 0 ? Math.round((raised / goal) * 100) : 0;

  // Animate progress bar after data loads
  useEffect(() => {
    if (!loading && !error) {
      const el = document.querySelector('.progress-fill');
      if (el) {
        setTimeout(() => {
          el.style.width = `${percent}%`;
        }, 100);
      }
    }
  }, [loading, error, percent]);

  // Load donors + randomize
  useEffect(() => {
    fetch('/data/donors.json')
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setDonors(shuffled);
      })
      .catch(() => setDonors([]));
  }, []);

  // Cycle through donors
  useEffect(() => {
    if (donors.length === 0) return;

    const interval = setInterval(() => {
      setCurrentDonorIndex(prev => (prev + 1) % donors.length);
    }, 3500); // 3.5 seconds per donor

    return () => clearInterval(interval);
  }, [donors]);

  return (
    <div className="space-y-16 max-w-5xl mx-auto">

      {/* HERO IMAGE */}
      <section className="relative h-[500px] md:h-[600px] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/assets/team/graduates.png"
          alt="Las Lomas Graduates Celebrating"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 leading-tight">
            Knights Legacy Fund
          </h1>
          <p className="text-lg md:text-2xl font-bold text-white drop-shadow-lg max-w-3xl">
            Empowering Las Lomas graduates with scholarships for higher education and beyond.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6">
            HELP US REACH OUR GOAL
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <div className="max-w-2xl mx-auto mt-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <p className="text-base text-gray-600 italic">
              Your generous donations go directly towards funding scholarships for Las Lomas students.
            </p>
          </div>

          <div className="text-right text-sm font-medium text-gray-600 mb-2">
            2025 Goal: <span className="font-bold text-llhs-maroon">${goal.toLocaleString()}</span>
          </div>

          <div className="relative h-12 bg-white rounded-full overflow-hidden shadow-inner border-2 border-llhs-gold">
            <div
              className="progress-fill absolute inset-y-0 left-0 bg-llhs-maroon transition-all duration-[2200ms] ease-out flex items-center justify-end pr-6"
              style={{ width: 0 }}
            >
              <span className="text-base md:text-lg font-bold text-white drop-shadow tracking-tight">
                ${raised.toLocaleString()}
              </span>
            </div>
          </div>

          {loading && (
            <p className="text-center text-sm text-gray-500 mt-4">Loading progress...</p>
          )}
          {error && (
            <p className="text-center text-sm text-red-600 mt-4">Using cached values</p>
          )}

          <p className="text-center text-sm text-gray-600 mt-4 italic">
            Every gift helps a Knight rise.
          </p>
          <p className="text-center mt-2">
            <button
              onClick={() => onNavigate('/donate')}
              className="font-bold text-llhs-maroon hover:text-llhs-gold transition-colors underline"
            >
              Donate today!
            </button>
          </p>

          {/* Dynamic Donor Ticker */}
          {donors.length > 0 && (
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-600 mb-3">
                Thank you to our generous supporters:
              </p>
              <div className="h-12 flex items-center justify-center">
                <div className="inline-flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-llhs-gold/10 via-llhs-gold/20 to-llhs-gold/10 rounded-full shadow-inner animate-fade">
                  <span className="text-xl animate-ping inline-block opacity-70">✨</span>
                  <p className="text-sm font-medium text-llhs-maroon tracking-wide">
                    {donors[currentDonorIndex]?.name || '...'}
                  </p>
                  <span className="text-xl animate-ping inline-block opacity-70">✨</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
              Our Mission
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-700 leading-relaxed mt-12">
            <div className="text-center">
              <h3 className="text-xl font-bold text-llhs-maroon mb-4">Who We Are</h3>
              <p>
                The Knights Legacy Fund is a nonprofit organization founded by a passionate group of high school seniors dedicated to making a meaningful impact in our community. United by a shared vision, we’re driven to support and uplift students who face financial barriers in pursuing their education.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-llhs-maroon mb-4">What We Do</h3>
              <p>
                We provide scholarships to students in need, helping them access the opportunities they deserve to achieve their academic and personal goals. Through fundraising, community engagement, and a commitment to positive change, we strive to create a legacy of empowerment and opportunity for future generations.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <img
              src="/assets/team/leadership-team.png"
              alt="Knights Legacy Fund Leadership Team"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <div className="hidden animate-grow-to-end"></div>
    </div>
  );
};

export default Home;