/**
 * ==============================================================================
 * Knights Legacy Fund – FAQ Page
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React from 'react';

const Faq = ({ onNavigate }) => {
  const faqs = [
    {
      q: "When are scholarships awarded?",
      a: "Scholarships are awarded in May of each school year, in coordination with the Las Lomas High School senior awards and graduation season. Recipients are notified in advance and may be recognized at a school-wide awards ceremony."
    },
    {
      q: "How many scholarships are given each year?",
      a: "Between 5 and 10 scholarships are awarded annually. The number of scholarships depends on the amount of donations received that year and the number of qualified applicants."
    },
    {
      q: "How much is each scholarship?",
      a: "Scholarship amounts will vary each year, depending on the total funds raised. Our goal is to distribute 75% of annual donations, reserving 25% to ensure long-term sustainability of the fund. This helps us maintain a legacy that supports future students for years to come."
    },
    {
      q: "What are your operating costs?",
      a: (
        <>
          <p className="mb-3">We are committed to keeping operating costs minimal. Less than 5% of annual funds are allocated to necessary expenses such as:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Business banking and credit card processing fees</li>
            <li>Printed materials or promotional efforts to increase awareness</li>
            <li>Website maintenance</li>
          </ul>
          <p>We are a community-driven initiative with all board members serving on a volunteer basis.</p>
        </>
      )
    },
    {
      q: "Are scholarships based only on grades?",
      a: (
        <>
          <p className="mb-3">No. While academic performance is considered, scholarships are not awarded solely on GPA or test scores. We also evaluate:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Personal character</li>
            <li>Community service</li>
            <li>Financial need</li>
            <li>Leadership</li>
            <li>Resilience and personal growth</li>
            <li>Dominic Paul Maron Ferrell has specific qualifications and attributes</li>
          </ul>
          <p>Our goal is to recognize well-rounded individuals who embody the spirit of the Las Lomas Knights Legacy.</p>
        </>
      )
    },
    {
      q: "Can funds be used for trade schools or military?",
      a: (
        <>
          <p className="font-bold mb-2">Yes! The Knights Legacy Fund supports a wide range of post-high school paths, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>2-year community colleges</li>
            <li>4-year colleges or universities</li>
            <li>Trade or vocational schools</li>
            <li>Accredited certification programs</li>
            <li>Military enlistment or academies</li>
          </ul>
          <p className="mt-3">We believe in supporting all pathways to success.</p>
        </>
      )
    },
    {
      q: "Who selects the recipients?",
      a: "Scholarship recipients are selected by the Knights Legacy Fund Board of Advisors, in collaboration with a non-biased school representative. For named or donor-specific scholarships (like the Dominic Paul Maron Ferrell Scholarship), family representatives such as Christine Maron may participate in interviews and final selection. The process is designed to ensure fairness, transparency, and alignment with the values of the fund."
    },
    {
      q: "Is the fund sustainable long-term?",
      a: "The Knights Legacy Fund is designed as a long-term, sustainable program, with the goal of offering scholarships annually for generations to come. By reserving 25% of each year’s donations, we’re building a strong foundation to support future students."
    },
    {
      q: "How do I join the board?",
      a: "To maintain a non-biased and diverse board, new members are selected through a nomination and interview process facilitated by the current board and a Las Lomas school representative. Board positions are available to students (incoming freshmen through seniors), alumni, parents, and community members who want to serve the mission of the fund."
    },
    {
      q: "Can the by-laws be changed?",
      a: (
        <>
          <p>Yes, but only with oversight. The board follows a set of ratified by-laws, which are reviewed annually. Any proposed changes must be:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Voted on and approved by a majority of the board</li>
            <li>Reviewed and approved by the Las Lomas High School representative.</li>
          </ul>
          <p className="mt-3">This ensures continuity, transparency, and alignment with the mission.</p>
        </>
      )
    },
    {
      q: "Can I create a named scholarship?",
      a: (
        <p>
          Yes. We welcome donations made in honor or memory of a loved one, teacher, or classmate. If you would like to establish a named scholarship or dedicate funds in someone’s name,{' '}
          <button
            onClick={() => onNavigate('/contact')}
            className="text-llhs-maroon underline hover:text-llhs-gold transition-colors"
          >
            contact us
          </button>.
        </p>
      )
    },
    {
      q: "Are donations tax-deductible?",
      a: "Yes. The Knights Legacy Fund operates under the umbrella of a registered nonprofit organization. Donations are tax-deductible to the extent allowed by law. Tax receipts will be provided for all qualifying donations."
    },
    {
      q: "How do students apply?",
      a: (
        <>
          <p className="mb-2">Each year, the scholarship application opens in early spring, and includes:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>A short application form</li>
            <li>A personal statement or essay</li>
            <li>A letter of recommendation</li>
          </ul>
          <p>More details, including exact dates and instructions, will be posted on our website and shared through the Las Lomas Career and College Center.</p>
        </>
      )
    },
    {
      q: "How can I get involved?",
      a: (
        <>
          <p className="mb-2">We’re always looking for volunteers, sponsors, and community partners. You can:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Join a committee or volunteer at events</li>
            <li>Become a sponsor or donor</li>
            <li>Help with outreach or student mentoring</li>
          </ul>
          <p>
            <button
              onClick={() => onNavigate('/contact')}
              className="text-llhs-maroon underline hover:text-llhs-gold transition-colors"
            >
              Contact us
            </button>{' '}
            if you want to help and get involved!
          </p>
        </>
      )
    },
    {
      q: "What is your EIN?",
      a: (
        <p className="font-mono text-2xl text-llhs-maroon">
          33-3823929
        </p>
      )
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <section className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-llhs-maroon mb-6 uppercase tracking-wider">
            Frequently Asked Questions
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Accordion – ALL CLOSED ON MOUNT */}
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
                {item.a}
              </div>
            </details>
          ))}
        </div>

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