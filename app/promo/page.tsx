'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function PromoPage() {
  useEffect(() => {
    // Scroll animation setup
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-dark via-dark-light to-dark min-h-screen">
      <div className="max-w-6xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="text-center py-12 text-white">
          <div className="text-3xl font-bold text-gold mb-4">The Ticker Tipper</div>
          <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-bold mb-8 text-lg animate-pulse">
            ⏰ LIMITED TIME OFFER
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gold to-gold-dark rounded-3xl p-16 text-center mb-12 shadow-2xl">
          <h1 className="text-dark mb-4 leading-tight">
            <div className="text-5xl">Try It Free!</div>
            <div className="text-7xl font-black my-4">5 DAYS</div>
            <div className="text-5xl">No Credit Card Required</div>
          </h1>
          <p className="text-3xl text-dark-light mb-8 max-w-3xl mx-auto">
            Experience professional-grade custom stock scanners risk-free. See what makes our watchlists different.
          </p>
          <Link href="/get-in-touch" className="inline-block bg-dark text-gold px-14 py-6 rounded-full font-bold text-2xl transition-all duration-300 border-4 border-dark hover:bg-transparent hover:text-dark shadow-xl hover:-translate-y-2">
            Start Your Free Trial
          </Link>
        </div>

        {/* Features Box */}
        <div className="bg-white rounded-3xl p-12 mb-12 shadow-xl animate-on-scroll">
          <h2 className="text-5xl text-dark mb-8 text-center">
            What You Get in Your <span className="text-gold">Free Trial</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-8 rounded-2xl border-l-[5px] border-gold transition-all duration-300 hover:translate-x-3 hover:shadow-lg">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-dark mb-2 text-2xl">1 Active Watchlist</h3>
              <p className="text-gray-700 text-base">
                Get a fully customized scanner built to your exact specifications and trading criteria.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-8 rounded-2xl border-l-[5px] border-gold transition-all duration-300 hover:translate-x-3 hover:shadow-lg">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-dark mb-2 text-2xl">Daily Strategy Changes</h3>
              <p className="text-gray-700 text-base">
                Switch your scanning criteria once per day to test different strategies and approaches.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-8 rounded-2xl border-l-[5px] border-gold transition-all duration-300 hover:translate-x-3 hover:shadow-lg">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-dark mb-2 text-2xl">Full Access Features</h3>
              <p className="text-gray-700 text-base">
                Experience our professional-grade scanning tools with no limitations on quality or accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* Trial Details */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-12 text-white mb-12 shadow-xl animate-on-scroll">
          <h2 className="text-5xl mb-8 text-center">How Your Free Trial Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-2xl mb-4 text-gold">Day 1-2: Setup</h3>
              <ul className="list-none space-y-3">
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  Share your trading criteria with us
                </li>
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  We build your custom scanner
                </li>
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  Review and adjust parameters
                </li>
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  Get your first watchlist
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-2xl mb-4 text-gold">Day 3-5: Experience</h3>
              <ul className="list-none space-y-3">
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  Receive daily watchlist updates
                </li>
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  Test different strategies
                </li>
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  Change criteria once per day
                </li>
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  See real results
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-2xl mb-4 text-gold">What's Included</h3>
              <ul className="list-none space-y-3">
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  1 active custom scanner
                </li>
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  Daily watchlist delivery
                </li>
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  Email support
                </li>
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  Up to 50 stocks per list
                </li>
                <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold before:text-xl">
                  Strategy change once daily
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-3xl p-12 mb-12 shadow-xl text-center animate-on-scroll">
          <p className="text-2xl italic text-gray-700 mb-6 leading-relaxed">
            "I tested 3 different scanning strategies during my free trial. By day 5, I found exactly what I needed and upgraded immediately. The custom code is worth every penny."
          </p>
          <p className="text-gold font-bold text-xl">- Michael R., Day Trader</p>
        </div>

        {/* Urgency Box */}
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-10 text-center text-white mb-12 shadow-xl animate-on-scroll">
          <h3 className="text-4xl mb-4">🔥 Why Start Today?</h3>
          <p className="text-2xl mb-8">
            The market doesn't wait, and neither should you. Start scanning smarter stocks tomorrow morning.
          </p>
          <Link href="/get-in-touch" className="inline-block bg-white text-red-600 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            Claim Your Free Trial
          </Link>
        </div>

        {/* Final CTA */}
        <div className="bg-white rounded-3xl p-16 text-center shadow-xl">
          <h2 className="text-5xl text-dark mb-4">Zero Risk. All Reward.</h2>
          <p className="text-2xl text-gray-700 mb-10">
            No credit card. No commitment. Just 5 days of professional-grade stock scanning.
          </p>

          <div className="flex justify-center gap-12 my-8 flex-wrap">
            <div className="text-center">
              <div className="text-6xl font-bold text-gold">$0</div>
              <div className="text-gray-600 text-base">To Start</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gold">5</div>
              <div className="text-gray-600 text-base">Days Free</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gold">1</div>
              <div className="text-gray-600 text-base">Custom Scanner</div>
            </div>
          </div>

          <Link href="/get-in-touch" className="cta-button">
            Start Your Free 5-Day Trial
          </Link>

          <p className="mt-8 text-sm text-gray-500">
            After your trial, choose from our flexible subscription plans starting at just $49/month. Cancel anytime.
          </p>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-400 text-sm">
          <p>&copy; 2025 The Ticker Tipper. All rights reserved.</p>
          <p className="mt-2">Questions? Email us at info@thetickertipper.com</p>
        </footer>
      </div>
    </div>
  );
}
