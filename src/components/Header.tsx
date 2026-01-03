'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 50, 
        padding: '28px 40px 0 40px' 
      }}
    >
      <nav 
        style={{ 
          backgroundColor: 'white', 
          borderRadius: '6px', 
          padding: '0 32px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo/logo_nav.svg"
              alt="Pleamar S.A."
              width={180}
              height={40}
              className="h-[32px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors hover:text-[#2B4C7E] ${
                  pathname === item.path
                    ? 'text-[#2B4C7E] font-medium'
                    : 'text-gray-600'
                }`}
                style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '16px' }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2B4C7E]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-2.5 transition-colors hover:text-[#2B4C7E] ${
                  pathname === item.path
                    ? 'text-[#2B4C7E] font-medium'
                    : 'text-gray-600'
                }`}
                style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '16px' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
