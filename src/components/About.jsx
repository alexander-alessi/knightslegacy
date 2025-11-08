/**
 * ==============================================================================
 * Knights Legacy Fund – About Page
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React from 'react';

const About = () => {
  const exec = [
    {
      name: 'Mason Grant',
      role: 'President',
      slug: 'headshot-mason.jpeg',
      responsibilities:
        'Founded the Knights Legacy Fund and leads the executive team in strategy and vision.',
      about:
        'I started this after seeing teammates held back by cost. I believe in opportunity through teamwork. Every scholarship we give proves what’s possible when we work together.'
    },
    {
      name: 'Eva Murallo',
      role: 'Vice President',
      slug: 'headshot-eva.png',
      responsibilities:
        'Supports the President, oversees committees, and ensures smooth communication across teams.',
      about:
        'I’m Editor-in-Chief of the yearbook and play softball and tennis. I love bringing people together. This role lets me use leadership to help students reach their goals.'
    },
    {
      name: 'Alex Alessi',
      role: 'Treasurer',
      slug: 'headshot-alex.png',
      responsibilities:
        'Manages all financial records, budgets, donations, and tax documents with precision.',
      about:
        'I run multiple businesses outside of school. I know how important every dollar is. I make sure our funds are used wisely to support as many students as possible.'
    },
    {
      name: 'Nicolas Alessi',
      role: 'Secretary',
      slug: 'headshot-nico.png',
      responsibilities:
        'Maintains meeting minutes, official records, and board communication schedules.',
      about:
        'I\'m an entrepreneur and product manager and I love systems that are designed well and just work. Helping students succeed is what drives me to stay detail-oriented.'
    },
    {
      name: 'Amanda Loar',
      role: 'Head of Marketing',
      slug: 'headshot-amanda.png',
      responsibilities:
        'Creates marketing campaigns and promotions to grow awareness and donor support.',
      about:
        'I play soccer and love telling stories that matter. I bring that energy to our mission. Every post, event, and message is a chance to inspire action.'
    }
  ];

  const chairs = [
    {
      name: 'Nathan Stern',
      role: 'Community & Business Fundraising Co-Chair',
      slug: 'headshot-nathan.png',
      responsibilities:
        'Leads outreach to local businesses and organizations to secure sponsorships and partnerships.',
      about:
        'I’m a Varsity Soccer Captain and the youngest blind soccer coach in the US. I’ve seen what action can do. I’m proud to turn community support into real scholarships.'
    },
    {
      name: 'Kate Kruitwagon',
      role: 'Community & Business Fundraising Co-Chair',
      slug: 'headshot-kate.png',
      responsibilities:
        'Partners with Nathan to expand business and community fundraising efforts.',
      about:
        'I’m a rising senior who values teamwork and school spirit. This role lets me help students I’ll never meet. That’s what makes it so rewarding.'
    },
    {
      name: 'Chase Martin',
      role: 'Alumni & Legacy Donor Chair',
      slug: 'headshot-chase.png',
      responsibilities:
        'Builds and strengthens relationships with Las Lomas alumni and legacy donors.',
      about:
        'I’m a 3rd-generation Knight with a 4.0 GPA. I want every student to have the support I did. I’m honored to connect past and future Knights.'
    },
    {
      name: 'Dean Dunwoodie',
      role: 'Parent Giving Chair',
      slug: 'headshot-dean.png',
      responsibilities:
        'Engages parents of current and future students to build long-term support.',
      about:
        'I lead multiple school clubs and believe in giving back. Parents today create opportunities for tomorrow. I’m excited to build that legacy.'
    },
    {
      name: 'Garrett Phillips',
      role: 'Outreach & Communications Chair',
      slug: 'headshot-garrett.png',
      responsibilities:
        'Manages social media, email campaigns, and community messaging.',
      about:
        'I write to connect people with our mission. Every message shows donors the real impact they make. I love being the bridge between giving and receiving.'
    },
    {
      name: 'Kylie Collins',
      role: 'Scholarship Coordinator / Chair',
      slug: 'headshot-kylie.png',
      responsibilities:
        'Oversees the scholarship application process and recipient selection.',
      about:
        'I lead in Publications and play sports. I bring organization and heart to everything. Helping students achieve their dreams is why I’m here.'
    },
    {
      name: 'Will Landgraf',
      role: 'Recruitment Chair',
      slug: 'headshot-will.png',
      responsibilities:
        'Recruits and onboards new board members from the student body.',
      about:
        'I’m a sophomore from a Knight family. I swim, play water polo, and love my dog Tucker. I want to bring in the next generation of leaders.'
    }
  ];

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

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exec.map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </div>
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

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {chairs.map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;