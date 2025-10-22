import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-light to-dark text-white py-24 px-8 text-center">
        <h1 className="text-6xl mb-6 text-gold font-bold">
          Custom Stock Scanners Built for Your Strategy
        </h1>
        <p className="text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
          Professional-grade watchlists tailored to your exact criteria. We write the code, you get the results.
        </p>
        <Link href="/get-in-touch" className="cta-button">
          Get Started Today
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-8" id="features">
        <h2 className="text-center text-5xl text-dark mb-12">
          Why Choose <span className="text-gold">The Ticker Tipper</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div className="feature-card">
            <h3 className="text-2xl text-dark mb-4">Custom Code & Scripts</h3>
            <p className="text-gray-600 leading-relaxed">
              We build scanners from scratch based on your specific trading criteria and strategy requirements.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-2xl text-dark mb-4">Personalized Watchlists</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive curated watchlists that match your exact specifications, delivered regularly to keep you ahead of the market.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-2xl text-dark mb-4">Flexible Subscription Tiers</h3>
            <p className="text-gray-600 leading-relaxed">
              Choose the plan that fits your needs, from basic scanners to advanced multi-criteria analysis.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-2xl text-dark mb-4">Professional Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Our experienced developers create robust, reliable scanning tools that work when you need them.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-2xl text-dark mb-4">Regular Updates</h3>
            <p className="text-gray-600 leading-relaxed">
              Your scanners evolve with market conditions and your changing strategies.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="text-2xl text-dark mb-4">Dedicated Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Work directly with our team to refine your scanners and optimize your results.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 px-8" id="how-it-works">
        <h2 className="text-center text-5xl text-dark mb-12">
          How It <span className="text-gold">Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-10 rounded-2xl text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-gold text-dark w-16 h-16 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-lg">
              1
            </div>
            <h3 className="text-2xl text-dark mb-4">Share Your Criteria</h3>
            <p className="text-gray-600 leading-relaxed">
              Tell us what you&apos;re looking for in stocks - technical indicators, fundamentals, price action, or any combination.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-gold text-dark w-16 h-16 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-lg">
              2
            </div>
            <h3 className="text-2xl text-dark mb-4">We Build Your Scanner</h3>
            <p className="text-gray-600 leading-relaxed">
              Our team develops custom code and scripts tailored to your exact specifications.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-gold text-dark w-16 h-16 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-lg">
              3
            </div>
            <h3 className="text-2xl text-dark mb-4">Receive Your Watchlist</h3>
            <p className="text-gray-600 leading-relaxed">
              Get regularly updated watchlists with stocks that meet your criteria, ready for your analysis.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-gold text-dark w-16 h-16 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-lg">
              4
            </div>
            <h3 className="text-2xl text-dark mb-4">Refine & Optimize</h3>
            <p className="text-gray-600 leading-relaxed">
              Work with us to adjust and improve your scanners as your strategy evolves.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16 px-8" id="pricing">
        <h2 className="text-center text-5xl text-dark mb-12">
          Subscription <span className="text-gold">Plans</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-12 rounded-2xl text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative">
            <h3 className="text-4xl text-dark mb-4">Starter</h3>
            <div className="text-6xl text-gold font-bold mb-2">$49</div>
            <div className="text-gray-600 text-xl mb-8">/month</div>
            <ul className="list-none mb-10 text-left">
              <li className="py-3 text-gray-800 border-b border-gray-300">1 Custom Scanner</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Weekly Watchlist Updates</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Basic Technical Criteria</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Email Support</li>
              <li className="py-3 text-gray-800">Up to 50 Stocks per List</li>
            </ul>
            <Link href="/get-in-touch" className="inline-block bg-gold text-dark px-10 py-4 rounded-full font-bold transition-all duration-300 hover:bg-gold-dark hover:-translate-y-1 hover:shadow-lg">
              Get Started
            </Link>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-12 rounded-2xl text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative border-4 border-gold scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-dark px-6 py-2 rounded-full font-bold shadow-md">
              Most Popular
            </div>
            <h3 className="text-4xl text-dark mb-4">Professional</h3>
            <div className="text-6xl text-gold font-bold mb-2">$149</div>
            <div className="text-gray-600 text-xl mb-8">/month</div>
            <ul className="list-none mb-10 text-left">
              <li className="py-3 text-gray-800 border-b border-gray-300">3 Custom Scanners</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Daily Watchlist Updates</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Advanced Multi-Criteria</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Priority Support</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Up to 150 Stocks per List</li>
              <li className="py-3 text-gray-800">Monthly Strategy Calls</li>
            </ul>
            <Link href="/get-in-touch" className="inline-block bg-gold text-dark px-10 py-4 rounded-full font-bold transition-all duration-300 hover:bg-gold-dark hover:-translate-y-1 hover:shadow-lg">
              Get Started
            </Link>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-12 rounded-2xl text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative">
            <h3 className="text-4xl text-dark mb-4">Enterprise</h3>
            <div className="text-6xl text-gold font-bold mb-2">$349</div>
            <div className="text-gray-600 text-xl mb-8">/month</div>
            <ul className="list-none mb-10 text-left">
              <li className="py-3 text-gray-800 border-b border-gray-300">Unlimited Custom Scanners</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Real-Time Updates</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Complex Algorithm Development</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Dedicated Support Line</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Unlimited Stocks per List</li>
              <li className="py-3 text-gray-800 border-b border-gray-300">Weekly Strategy Sessions</li>
              <li className="py-3 text-gray-800">API Access Available</li>
            </ul>
            <Link href="/get-in-touch" className="inline-block bg-gold text-dark px-10 py-4 rounded-full font-bold transition-all duration-300 hover:bg-gold-dark hover:-translate-y-1 hover:shadow-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-br from-dark to-dark-light text-white py-16 px-8 text-center">
        <h2 className="text-5xl mb-4 text-gold">Ready to Get Started?</h2>
        <p className="text-2xl mb-8 text-gray-300">
          Contact us today to discuss your scanning needs and find the perfect plan for your trading strategy.
        </p>
        <div className="flex justify-center gap-12 mt-8 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="text-2xl">📧</span>
            <a href="mailto:info@thetickertipper.com" className="text-gold no-underline text-xl font-semibold hover:underline">
              info@thetickertipper.com
            </a>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/get-in-touch" className="cta-button">
            Choose Your Plan
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-8">
        <p className="mb-2">&copy; 2025 The Ticker Tipper. All rights reserved.</p>
        <p className="mt-4">www.thetickertipper.com</p>
      </footer>
    </>
  );
}
