/**
 * ==============================================================================
 * Knights Legacy Fund – Header Component
 * ==============================================================================
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 */

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Scholarships', path: '/scholarships' },
    { name: 'Contact', path: '/contact' },
    { name: 'Donate', path: '/donate' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path) => currentPath === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">

          {/* Logo + Title */}
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-3 text-llhs-maroon hover:text-llhs-maroon/80 transition-colors"
          >
            <div className="w-12 h-12">
              <img
                src="/assets/logo/knights.png"
                alt="Knights Legacy Fund Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Knights Legacy Fund
            </span>
          </button>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center p-2 text-llhs-maroon hover:text-llhs-gold"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-3 lg:gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.path)}
                className={`
                  text-lg font-medium py-2 px-4 rounded-lg transition-all duration-200
                  ${isActive(item.path)
                    ? 'bg-llhs-maroon text-white shadow-md'
                    : 'text-llhs-maroon hover:bg-llhs-maroon/10'
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.path);
                    setIsOpen(false);
                  }}
                  className={`
                    text-left text-lg font-medium py-2 px-4 rounded-lg transition-all duration-200
                    ${isActive(item.path)
                      ? 'bg-llhs-maroon text-white'
                      : 'text-llhs-maroon hover:bg-llhs-maroon/10'
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;