'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/rsvp', label: 'RSVP' },
    { href: '/programme', label: 'Programme' },
    { href: '/infos', label: 'Infos pratiques' },
    { href: '/hebergements', label: 'Hébergements' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-['var(--font-playfair)'] text-2xl font-bold text-gold">
            C & V
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-['var(--font-montserrat)'] text-sm font-medium transition-colors hover:text-gold ${
                  pathname === link.href
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-foreground hover:text-gold">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-['var(--font-montserrat)'] text-sm font-medium py-2 transition-colors hover:text-gold ${
                  pathname === link.href ? 'text-gold' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
