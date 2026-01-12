'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';
import { useEffect, useState } from 'react';

// Animated text component - letter by letter reveal
function AnimatedTitle({ text, delay = 0 }: { text: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0px)' : 'blur(4px)',
            transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.025}s, filter 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.025}s`,
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </span>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background - Full width image - edge to edge */}
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/v2/hero_2.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Main Content - vertically centered */}
          <div className="flex-1 flex items-center" style={{ padding: '0 40px' }}>
            <div style={{ maxWidth: '620px' }}>
              <h1 
                style={{ 
                  fontFamily: 'din-2014, sans-serif',
                  fontSize: '64px',
                  lineHeight: '0.85',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '20px',
                  letterSpacing: '-0.03em',
                }}
              >
                <AnimatedTitle text="Soluciones marítimas" delay={200} />
                <br />
                <AnimatedTitle text="y portuarias integrales" delay={400} />
              </h1>
              <p 
                style={{ 
                  fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: '19px',
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '32px',
                }}
              >
                Especialistas en Comercio Exterior
              </p>
              
              {/* Botones con padding correcto */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                <Link
                  href="/contacto"
                  style={{ 
                    fontFamily: 'din-2014, sans-serif',
                    backgroundColor: 'white',
                    color: '#2B4C7E',
                    padding: '14px 28px',
                    fontWeight: 600,
                    fontSize: '16px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Consultá tu operación
                </Link>
                <Link
                  href="/servicios"
                  style={{ 
                    fontFamily: 'din-2014, sans-serif',
                    backgroundColor: '#2B4C7E',
                    color: 'white',
                    padding: '14px 28px',
                    fontWeight: 600,
                    fontSize: '16px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Nuestros servicios
                </Link>
              </div>
              
              <p 
                style={{ 
                  fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                Respuesta rápida · Atención personalizada
              </p>
            </div>
          </div>

          {/* Stats Bar - positioned above bottom */}
          <div style={{ position: 'absolute', bottom: '120px', left: '40px', right: '40px', zIndex: 10 }}>
            <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '16px' }}>
              <AnimatedCounter end={32} suffix="+" label="Años de experiencia" duration={2000} />
              <AnimatedCounter end={95} suffix="%" label="Operaciones sin demora" duration={2200} />
              <AnimatedCounter end={600} suffix="+" label="Buques anuales" duration={2400} />
              <AnimatedCounter end={24} suffix="/7" label="Respuesta inmediata" duration={1800} />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div style={{ position: 'absolute', bottom: '24px', left: '40px', zIndex: 10 }}>
            <svg
              style={{ width: '28px', height: '28px', color: 'white' }}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 40px', backgroundColor: '#F5F5F5' }}>
        <div style={{ marginBottom: '48px' }}>
          <h2 
            style={{ 
              fontFamily: 'din-2014, sans-serif',
              fontSize: '99px',
              lineHeight: 0.95,
              fontWeight: 700,
              color: '#2B4C7E',
              marginBottom: '4px',
              letterSpacing: '-0.03em',
            }}
          >
            Una forma más simple de operar
          </h2>
          <p 
            style={{ 
              fontFamily: 'din-2014, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              color: '#2B4C7E',
              lineHeight: 1.1,
            }}
          >
            Simplificamos tus operaciones de importación y exportación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px', alignItems: 'stretch' }}>
          {/* Feature Card 1 */}
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: '1px solid #E5E5E5',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ padding: '32px 28px 24px', height: '180px' }}>
              <div style={{ color: '#2B4C7E', marginBottom: '16px' }}>
                <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 8v24M20 8l-4 4M20 8l4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="6" r="2" fill="currentColor"/>
                  <path d="M8 20c0 6.627 5.373 12 12 12s12-5.373 12-12" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '23px', fontWeight: 700, color: '#2B4C7E', marginBottom: '8px', letterSpacing: '-0.03em' }}>
                32 años de experiencia
              </h3>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '16px', color: '#2B4C7E', lineHeight: 1.5 }}>
                Operando desde 1993, tres décadas gestionando operaciones exitosas
              </p>
            </div>
            <div style={{ flex: 1, minHeight: '340px', backgroundImage: 'url(/images/hero/CARD_1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>

          {/* Feature Card 2 */}
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: '1px solid #E5E5E5',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ padding: '32px 28px 24px', height: '180px' }}>
              <div style={{ color: '#2B4C7E', marginBottom: '16px' }}>
                <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 4C13.373 4 8 9.373 8 16c0 8 12 20 12 20s12-12 12-20c0-6.627-5.373-12-12-12zm0 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '23px', fontWeight: 700, color: '#2B4C7E', marginBottom: '8px', letterSpacing: '-0.03em' }}>
                Presencia diversas localidades
              </h3>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '16px', color: '#2B4C7E', lineHeight: 1.5 }}>
                Necochea, Quequén, Buenos Aires, Bahía Blanca, Mar del Plata, Paso de los Libres, Rosario, San Lorenzo, Tres Arroyos. Red Nacional para tu comodidad
              </p>
            </div>
            <div style={{ flex: 1, minHeight: '340px', backgroundImage: 'url(/images/hero/CARD_2.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>

          {/* Feature Card 3 */}
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: '1px solid #E5E5E5',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ padding: '32px 28px 24px', height: '180px' }}>
              <div style={{ color: '#2B4C7E', marginBottom: '16px' }}>
                <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '23px', fontWeight: 700, color: '#2B4C7E', marginBottom: '8px', letterSpacing: '-0.03em' }}>
                Servicio integral
              </h3>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '16px', color: '#2B4C7E', lineHeight: 1.5 }}>
                De la agencia marítima al despacho final. Coordinamos toda tu operación.
              </p>
            </div>
            <div style={{ flex: 1, minHeight: '340px', backgroundImage: 'url(/images/hero/CARD_3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '80px 40px', backgroundColor: 'white' }}>
        <h2 
          style={{ 
            fontFamily: 'din-2014, sans-serif',
            fontSize: 'clamp(33px, 4vw, 48px)',
            lineHeight: 1,
            fontWeight: 700,
            color: '#2B4C7E',
            marginBottom: '40px',
            letterSpacing: '-0.03em',
          }}
        >
          Nuestros Servicios Principales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px' }}>
          {/* Service 1 */}
          <Link href="/servicios" className="group" style={{ display: 'block', position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '480px' }}>
            <div
              className="group-hover:scale-105 transition-transform duration-700"
              style={{ 
                position: 'absolute', 
                inset: 0, 
                backgroundImage: 'url(/images/v2/agencia_maritima.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,76,126,0.85) 0%, rgba(43,76,126,0.3) 50%, transparent 100%)' }} />
            <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px', color: 'white' }}>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
                ESPECIALISTAS EN
              </p>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '33px', fontWeight: 700, letterSpacing: '-0.03em' }}>
                Agencia marítima
              </h3>
            </div>
          </Link>

          {/* Service 2 */}
          <Link href="/servicios" className="group" style={{ display: 'block', position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '480px' }}>
            <div
              className="group-hover:scale-105 transition-transform duration-700"
              style={{ 
                position: 'absolute', 
                inset: 0, 
                backgroundImage: 'url(/images/v2/despacho.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,76,126,0.85) 0%, rgba(43,76,126,0.3) 50%, transparent 100%)' }} />
            <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px', color: 'white' }}>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
                ESPECIALISTAS EN
              </p>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '33px', fontWeight: 700, letterSpacing: '-0.03em' }}>
                Despacho de aduana
              </h3>
            </div>
          </Link>

          {/* Service 3 */}
          <Link href="/servicios" className="group" style={{ display: 'block', position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '480px' }}>
            <div
              className="group-hover:scale-105 transition-transform duration-700"
              style={{ 
                position: 'absolute', 
                inset: 0, 
                backgroundImage: 'url(/images/v2/estibaje.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,76,126,0.85) 0%, rgba(43,76,126,0.3) 50%, transparent 100%)' }} />
            <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px', color: 'white' }}>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
                ESPECIALISTAS EN
              </p>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '33px', fontWeight: 700, letterSpacing: '-0.03em' }}>
                Estibaje
              </h3>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
