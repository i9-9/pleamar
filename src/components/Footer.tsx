import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#F0F0F0', padding: '40px' }}>
      {/* Main Footer Content - White box */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '16px', 
        padding: '48px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4" style={{ gap: '40px', marginBottom: '40px' }}>
          {/* Logo y Dirección */}
          <div className="col-span-2 lg:col-span-2">
            <div style={{ marginBottom: '24px' }}>
              <Image
                src="/images/logo/logo_nav.svg"
                alt="Pleamar S.A."
                width={300}
                height={64}
                style={{ width: '300px', height: 'auto' }}
              />
            </div>
            <div style={{ 
              fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: '16px',
              color: '#666',
              lineHeight: 1.8,
              marginBottom: '32px',
            }}>
              <p>Avenida 59 Nro 2151</p>
              <p>Necochea, Buenos Aires</p>
              <p>Argentina</p>
            </div>
            
            {/* Contact Info */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ 
                  fontFamily: 'din-2014, sans-serif',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#2B4C7E',
                  marginBottom: '4px',
                }}>
                  Tel
                </p>
                <a
                  href="tel:+542262433336"
                  style={{ 
                    fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    color: '#666',
                    textDecoration: 'none',
                  }}
                >
                  +54 2262 433336/7/8
                </a>
              </div>
              <div>
                <p style={{ 
                  fontFamily: 'din-2014, sans-serif',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#2B4C7E',
                  marginBottom: '4px',
                }}>
                  Email
                </p>
                <a
                  href="mailto:operaciones@pleamar.com.ar"
                  style={{ 
                    fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    color: '#666',
                    textDecoration: 'none',
                  }}
                >
                  operaciones@pleamar.com.ar
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ 
              fontFamily: 'din-2014, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              color: '#2B4C7E',
              marginBottom: '16px',
            }}>
              Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link
                  href="/nosotros"
                  style={{ 
                    fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    color: '#666',
                    textDecoration: 'none',
                  }}
                >
                  Nosotros
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link
                  href="/servicios"
                  style={{ 
                    fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    color: '#666',
                    textDecoration: 'none',
                  }}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  style={{ 
                    fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    color: '#666',
                    textDecoration: 'none',
                  }}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ 
              fontFamily: 'din-2014, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              color: '#2B4C7E',
              marginBottom: '16px',
            }}>
              Legal
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link
                  href="/terminos"
                  style={{ 
                    fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    color: '#666',
                    textDecoration: 'none',
                  }}
                >
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  style={{ 
                    fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    color: '#666',
                    textDecoration: 'none',
                  }}
                >
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ paddingTop: '32px', borderTop: '1px solid #E5E5E5' }}>
          <p style={{ 
            fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: '13px',
            color: '#999',
            textAlign: 'center',
          }}>
            Copyright 2025 Agencia Pleamar
          </p>
        </div>
      </div>
    </footer>
  );
}
