'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function GetInTouchPage() {
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, [searchParams]);

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-dark-light to-dark text-white py-20 px-8 text-center">
        <h1 className="text-6xl mb-4 text-gold">Get In Touch</h1>
        <p className="text-2xl max-w-3xl mx-auto">
          Ready to transform your trading with custom scanners? We&apos;re here to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-8">
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12" id="contact-form">
          {/* Form Container */}
          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <h2 className="text-dark mb-6 text-3xl">Send Us a Message</h2>

            {showSuccess && (
              <div className="bg-green-500 text-white p-4 rounded-lg mb-4 text-center animate-slideDown">
                ✓ Thank you! Your message has been sent to info@thetickertipper.com
              </div>
            )}

            <form className="flex flex-col gap-6" action="https://formsubmit.co/info@thetickertipper.com" method="POST">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form - The Ticker Tipper" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-dark font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="p-4 border-2 border-gray-300 rounded-lg text-base transition-all focus:outline-none focus:border-gold focus:shadow-lg"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-dark font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="p-4 border-2 border-gray-300 rounded-lg text-base transition-all focus:outline-none focus:border-gold focus:shadow-lg"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-2 text-dark font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(555) 123-4567"
                  className="p-4 border-2 border-gray-300 rounded-lg text-base transition-all focus:outline-none focus:border-gold focus:shadow-lg"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="interest" className="mb-2 text-dark font-semibold">
                  I&apos;m Interested In *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="p-4 border-2 border-gray-300 rounded-lg text-base transition-all focus:outline-none focus:border-gold focus:shadow-lg"
                >
                  <option value="">Select an option...</option>
                  <option value="5 Day Free Trial">5 Day Free Trial</option>
                  <option value="Starter Plan - $49/month">Starter Plan - $49/month</option>
                  <option value="Professional Plan - $149/month">Professional Plan - $149/month</option>
                  <option value="Enterprise Plan - $349/month">Enterprise Plan - $349/month</option>
                  <option value="Custom Scanner Request">Custom Scanner Request</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 text-dark font-semibold">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your trading strategy and what you're looking for..."
                  className="p-4 border-2 border-gray-300 rounded-lg text-base min-h-32 resize-y transition-all focus:outline-none focus:border-gold focus:shadow-lg"
                />
              </div>

              <button
                type="submit"
                className="bg-gold text-dark px-10 py-4 rounded-full text-lg font-bold cursor-pointer transition-all duration-300 hover:bg-gold-dark hover:-translate-y-1 hover:shadow-lg border-none"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Info Container */}
          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <h2 className="text-dark mb-6 text-3xl">Contact Information</h2>

            <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-6 rounded-xl mb-6 border-l-4 border-gold">
              <h3 className="text-dark mb-2 flex items-center gap-2 text-xl">
                <span className="text-2xl">📧</span> Email
              </h3>
              <p className="ml-8">
                <a href="mailto:info@thetickertipper.com" className="text-gold no-underline font-semibold hover:underline">
                  info@thetickertipper.com
                </a>
              </p>
              <p className="ml-8 text-sm mt-2">We respond within 24 hours</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-6 rounded-xl mb-6 border-l-4 border-gold">
              <h3 className="text-dark mb-2 flex items-center gap-2 text-xl">
                <span className="text-2xl">⏰</span> Response Time
              </h3>
              <p className="ml-8">Typical response: 24 hours</p>
              <p className="ml-8">Business Hours: Mon-Fri, 9 AM - 6 PM EST</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-6 rounded-xl mb-6 border-l-4 border-gold">
              <h3 className="text-dark mb-2 flex items-center gap-2 text-xl">
                <span className="text-2xl">🎯</span> What to Include
              </h3>
              <p className="ml-8">Your trading style and timeframe</p>
              <p className="ml-8">Specific criteria you&apos;re looking for</p>
              <p className="ml-8">Any technical indicators you prefer</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-6 rounded-xl border-l-4 border-gold">
              <h3 className="text-dark mb-2 flex items-center gap-2 text-xl">
                <span className="text-2xl">💼</span> Business Inquiries
              </h3>
              <p className="ml-8">For partnerships and collaborations</p>
              <p className="ml-8">
                <a href="mailto:info@thetickertipper.com" className="text-gold no-underline font-semibold hover:underline">
                  info@thetickertipper.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-12 rounded-2xl shadow-xl mb-12">
          <h2 className="text-dark mb-8 text-center text-4xl">Frequently Asked Questions</h2>

          <div className="bg-gray-50 p-6 rounded-xl mb-4 border-l-4 border-gold">
            <h3 className="text-dark mb-2 text-xl">How quickly will I receive a response?</h3>
            <p className="text-gray-600">
              We typically respond to all inquiries within 24 hours during business days. For new trial signups, we&apos;ll reach out immediately to get started on your custom scanner.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-4 border-l-4 border-gold">
            <h3 className="text-dark mb-2 text-xl">Can I change my scanner criteria during the trial?</h3>
            <p className="text-gray-600">
              Yes! During your 5-day free trial, you can change your scanning criteria once per day to test different strategies and find what works best for you.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-4 border-l-4 border-gold">
            <h3 className="text-dark mb-2 text-xl">What happens after my free trial ends?</h3>
            <p className="text-gray-600">
              Your trial ends after 5 days with no automatic charges. If you love the service, you can choose to subscribe to any of our plans. If not, no problem - no credit card required for the trial.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-4 border-l-4 border-gold">
            <h3 className="text-dark mb-2 text-xl">Can I upgrade or downgrade my plan?</h3>
            <p className="text-gray-600">
              Absolutely! You can change your subscription plan at any time. Upgrades take effect immediately, and downgrades apply at your next billing cycle.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-4 border-l-4 border-gold">
            <h3 className="text-dark mb-2 text-xl">What platforms do your scanners work with?</h3>
            <p className="text-gray-600">
              We build custom scanners that work with most major platforms including ThinkOrSwim, TradingView, and others. We&apos;ll discuss your platform preferences during setup.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gold">
            <h3 className="text-dark mb-2 text-xl">Do you offer refunds?</h3>
            <p className="text-gray-600">
              Yes! We offer a 30-day money-back guarantee on all paid plans. If you&apos;re not satisfied within the first 30 days, we&apos;ll refund your subscription in full.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-8">
        <p className="mb-2">&copy; 2025 The Ticker Tipper. All rights reserved.</p>
        <p className="mt-4">
          <Link href="/" className="text-gold no-underline hover:underline">Home</Link>
          {' | '}
          <Link href="/#pricing" className="text-gold no-underline hover:underline">Pricing</Link>
          {' | '}
          <Link href="/promo" className="text-gold no-underline hover:underline">Free Trial</Link>
          {' | '}
          <Link href="/get-in-touch" className="text-gold no-underline hover:underline">Contact</Link>
        </p>
        <p className="mt-4">www.thetickertipper.com</p>
      </footer>
    </>
  );
}
