'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gold hover:text-gold-dark transition-colors">
            The Ticker Tipper
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-gold transition-colors font-medium">
              Home
            </Link>
            <Link href="/#pricing" className="text-white hover:text-gold transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/promo" className="text-white hover:text-gold transition-colors font-medium">
              Free Trial
            </Link>
            <Link href="/get-in-touch" className="bg-gold text-dark px-6 py-2 rounded-full font-bold hover:bg-gold-dark transition-all duration-300">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gold focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gold transition-colors font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gold transition-colors font-medium py-2"
            >
              Pricing
            </Link>
            <Link
              href="/promo"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gold transition-colors font-medium py-2"
            >
              Free Trial
            </Link>
            <Link
              href="/get-in-touch"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gold text-dark px-6 py-3 rounded-full font-bold hover:bg-gold-dark transition-all duration-300 text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
