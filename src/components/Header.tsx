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
        zIndex: 100,
        padding: '28px 40px 0 40px'
      }}
    >
      <nav
        style={{
          backgroundColor: '#E5E5E5',
          borderRadius: '6px',
          padding: '0 32px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
          border: '1px solid #C5C5C5',
          position: 'relative',
          zIndex: 110,
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
          <div className="hidden md:flex items-center gap-10 h-full">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative h-full flex items-center transition-colors hover:text-[#2B4C7E] ${
                  pathname === item.path
                    ? 'text-[#2B4C7E] font-medium'
                    : 'text-gray-600'
                }`}
                style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '16px' }}
              >
                {item.name}
                {pathname === item.path && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: '#A83B17',
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden text-[#2B4C7E]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1, width: '32px', height: '32px', alignItems: 'center', justifyContent: 'center', position: 'relative', top: '-4px' }}
          >
            <span style={{ transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)', display: 'inline-block', transition: 'transform 0.3s ease' }}>+</span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[60]"
            style={{
              top: 0,
              animation: 'fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Overlay Menu - full screen behind header */}
          <div
            className="md:hidden fixed left-0 right-0 z-[70] shadow-lg"
            style={{
              top: 0,
              height: '100vh',
              overflowY: 'auto',
              backgroundColor: '#2B4C7E',
              animation: 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '40px',
              paddingRight: '40px',
              paddingBottom: '40px',
              paddingTop: '120px',
            }}
          >
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative block transition-colors ${
                  pathname === item.path
                    ? 'text-white font-medium'
                    : 'text-white/80 hover:text-white'
                }`}
                style={{
                  fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: '28px',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  borderBottom: index < navItems.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {pathname === item.path && (
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: '18px',
                      width: '50px',
                      height: '3px',
                      backgroundColor: '#A83B17',
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </header>
  );
}
