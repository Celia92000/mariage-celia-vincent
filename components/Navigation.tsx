'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/rsvp', label: 'RSVP' },
    { href: '/programme', label: 'Programme' },
    { href: '/hebergements', label: 'Hébergements' },
    { href: '/infos', label: 'Infos pratiques' },
  ];

  return (
    <nav className="backdrop-blur-md sticky top-0 z-50" style={{
      background: 'rgba(255, 255, 255, 0.95)',
      borderBottom: '1px solid rgba(201, 169, 97, 0.2)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative p-1 rounded-full" style={{
              background: 'linear-gradient(135deg, #c9a961 0%, #e8d4a0 25%, #c9a961 50%, #e8d4a0 75%, #c9a961 100%)',
              boxShadow: '0 0 20px rgba(201, 169, 97, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)'
            }}>
              <div className="bg-white rounded-full px-3 py-1.5" style={{
                boxShadow: 'inset 0 2px 4px rgba(201, 169, 97, 0.1)'
              }}>
                <div className="font-['var(--font-playfair)'] text-4xl font-bold" style={{ color: '#c9a961' }}>
                  C & V
                </div>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-['var(--font-montserrat)'] text-base font-medium px-8 py-3 rounded-full transition-all"
                style={pathname === link.href
                  ? {
                      background: 'linear-gradient(135deg, #c9a961, #e8d4a0)',
                      color: 'white',
                      boxShadow: '0 2px 8px rgba(201, 169, 97, 0.3)'
                    }
                  : {
                      color: '#6b95b8',
                    }
                }
                onMouseEnter={(e) => {
                  if (pathname !== link.href) {
                    e.currentTarget.style.backgroundColor = 'rgba(201, 169, 97, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#c9a961' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(201, 169, 97, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['var(--font-montserrat)'] text-sm font-medium py-3 px-4 rounded-full transition-all"
                  style={pathname === link.href
                    ? {
                        background: 'linear-gradient(135deg, #c9a961, #e8d4a0)',
                        color: 'white',
                        boxShadow: '0 2px 8px rgba(201, 169, 97, 0.3)'
                      }
                    : {
                        color: '#6b95b8',
                      }
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
