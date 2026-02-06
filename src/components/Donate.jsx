/**
 * ==============================================================================
 * Knights Legacy Fund – Donate Page
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2026 Knights Legacy Fund. All rights reserved.
 */

import React from 'react';

const Donate = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12">

      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
            Support Our Mission
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <p className="text-center text-lg text-gray-700 mt-8 mb-12 max-w-3xl mx-auto leading-relaxed">
          Every dollar helps us fund scholarships for students in need. Choose your preferred, secure donation method below:
        </p>

        <div className="mt-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Stripe Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-llhs-gold">
              <h3 className="text-2xl font-bold text-llhs-maroon mb-6 text-center">
                Card & Digital Wallet
              </h3>

              <div className="text-center space-y-4">
                <a
                  href="https://donate.stripe.com/00w4gzgrd9YG36v5xe2cg00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-llhs-maroon text-white font-bold py-4 px-10 rounded-full hover:bg-llhs-maroon/90 transition shadow-lg"
                >
                  Donate with Card / Wallet
                </a>

                <p className="text-lg font-semibold text-gray-800">
                  Powered by <span className="text-llhs-maroon">Stripe</span>
                </p>

                <p className="text-sm text-gray-600">
                  We support Credit, Debit, Apple Pay, Google Pay, Amazon Pay, Klarna, Affirm, Link, Cash App.
                </p>
              </div>
            </div>

            {/* Venmo Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-llhs-gold">
              <h3 className="text-2xl font-bold text-llhs-maroon mb-6 text-center">
                Venmo
              </h3>

              <div className="text-center space-y-4">
                <a
                  href="https://venmo.com/u/KnightsLegacy?txn=pay"
                  className="inline-block bg-llhs-maroon text-white font-bold py-4 px-10 rounded-full hover:bg-llhs-maroon/90 transition shadow-lg"
                >
                  Donate with Venmo App
                </a>

                <a
                  href="https://venmo.com/KnightsLegacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-llhs-maroon underline hover:text-llhs-gold"
                >
                  or open in browser
                </a>

                <p className="text-sm font-mono text-llhs-maroon">
                  @KnightsLegacy
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-llhs-gold/10 p-6 rounded-xl border-2 border-llhs-gold">
            <p className="text-center text-lg text-gray-800">
              <strong className="text-llhs-maroon">Prefer to donate by check?</strong> This is our preferred method as 100% of your donation goes directly to scholarships (no ~3% vendor fees).{' '}
              <a
                href="/contact"
                className="text-llhs-maroon underline hover:text-llhs-gold font-semibold"
              >
                Contact us
              </a>{' '}
              for details—we can arrange pick-up!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
            Tax Information
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <div className="mt-12 text-center space-y-4 text-lg text-gray-700">
          <p>
            The <strong>Knights Legacy Fund</strong> is a registered{' '}
            <span className="font-bold text-llhs-maroon">501(c)(3)</span> nonprofit organization.
          </p>
          <p className="font-bold">
            EIN / Tax ID: <span className="font-mono text-llhs-maroon">33-3823929</span>
          </p>
          <p className="italic">
            All donations are tax-deductible to the extent permitted by law.
          </p>
          <p className="text-sm bg-white p-4 rounded-lg border border-gray-300">
            <strong>Note:</strong> No goods or services were provided in exchange for this contribution.
            Please retain your receipt for tax purposes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate;