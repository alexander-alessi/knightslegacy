/**
 * ==============================================================================
 * Knights Legacy Fund – Dominic Paul Maron Ferrell Memorial Scholarship
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React from 'react';

const ScholarshipDominic = ({ onNavigate }) => {
  const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12">

      {/* About Dominic */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
            The Dominic Paul Maron Ferrell Memorial Scholarship
          </h2>
          <div className="w-full h-px bg-gray-300"></div>

          {/* Honorary Portrait */}
          <div className="mt-10 flex justify-center px-4">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <img
                src="/assets/scholarships/dominic/dominic.png"
                alt="Dominic Paul Maron Ferrell – In Loving Memory"
                className="w-full h-auto aspect-square object-cover rounded-3xl border-8 border-llhs-gold/70 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl ring-4 ring-llhs-gold/30 ring-inset pointer-events-none"></div>
            </div>
          </div>

          <p className="mt-4 text-sm italic text-gray-600 text-center max-w-md mx-auto px-4">
            In loving memory of Dominic Paul Maron Ferrell
          </p>
        </div>

        <div className="mt-12 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <p className="mb-6">
            Dominic Paul Maron Ferrell was more than just a beloved friend, son, brother, and student — he was the kind of person who made others feel seen, heard, and valued. His heart was open to everyone, and his spirit radiated kindness, loyalty, and warmth.
          </p>
          <p>
            Whether in the classroom, on campus, or with his closest friends, Dominic was known for being a best buddy — the one you could count on for a smile, support, or selfless act of kindness.
          </p>
          <p className="mt-6 italic">
            Dominic was tragically taken from us at just 17 years old, just as he was about to begin his senior high school year. Though his time was cut short, his impact was immeasurable — and his memory lives on through those who knew and loved him.
          </p>
        </div>
      </section>

      {/* About the Scholarship */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
            About the Scholarship
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <div className="mt-12 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <p className="mb-6">
            The <strong>Dominic Paul Maron Ferrell Memorial Scholarship</strong> is awarded annually to a graduating senior at Las Lomas High School who exemplifies exceptional character, empathy, and respect for all students.
          </p>
          <p className="mb-6">
            This is not a scholarship based on grades or athletics — it's for the student who, like Dominic, goes out of their way to make life better for others. A true best friend. A person of quiet strength and inclusive spirit.
          </p>

          <div className="bg-gray-50 p-6 rounded-2xl border border-llhs-gold/50">
            <p className="font-semibold text-llhs-maroon mb-3">Selection Criteria:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Demonstrates compassion and kindness toward all students</li>
              <li>Acts with integrity and respect, both in and outside the classroom</li>
              <li>Is a positive force in the school community</li>
              <li>Embodies the values Dominic lived by every day</li>
            </ul>
          </div>

          <p className="mt-6">
            The Dominic Paul Maron Ferrell Award is given to a Las Lomas High School senior who plans to attend a 2-year, 4-year college, credentialed program, or trade school.
          </p>
          <p className="mt-4 italic font-medium">
            This award is a celebration of heart over accolades, of humility over ego, and of giving over receiving.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg border border-llhs-gold/30"
            >
              <img
                src={`/assets/scholarships/dominic/${img}`}
                alt={`Dominic memory ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Forever Giving Back */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
            Forever Giving Back
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <div className="mt-12 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          <p className="mb-6">
            Your donation helps honor Dominic’s memory and ensures that his legacy continues to inspire future generations of students.
          </p>
          <p className="mb-6">
            Every dollar goes directly to the scholarship fund and to celebrating the kind of character we need more of in the world.
          </p>
          <p className="italic text-xl">
            Help us keep Dominic's spirit alive — through generosity, remembrance, and the power of human kindness.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg italic text-llhs-maroon">
            “Be the reason someone smiles today.” – In memory of Dominic
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
            Contact & Inquiries
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <div className="mt-12 text-center text-lg text-gray-700">
          <p className="mb-6">
            Have questions about the scholarship, or want to share a story about Dominic?
          </p>
          <p>
            We’d love to hear from you.{' '}
            <button
              onClick={() => onNavigate('/contact')}
              className="font-bold text-llhs-maroon hover:text-llhs-gold underline transition-colors"
            >
              Contact us
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ScholarshipDominic;