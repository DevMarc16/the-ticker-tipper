import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-8">
      <p className="mb-2">&copy; 2025 The Ticker Tipper. All rights reserved.</p>
      <p className="mt-4">
        <Link href="/" className="text-gold no-underline hover:underline">
          Home
        </Link>
        {' | '}
        <Link href="/#pricing" className="text-gold no-underline hover:underline">
          Pricing
        </Link>
        {' | '}
        <Link href="/promo" className="text-gold no-underline hover:underline">
          Free Trial
        </Link>
        {' | '}
        <Link href="/get-in-touch" className="text-gold no-underline hover:underline">
          Contact
        </Link>
      </p>
      <p className="mt-4">www.thetickertipper.com</p>
    </footer>
  );
}
