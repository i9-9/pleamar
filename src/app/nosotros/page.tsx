import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Nosotros() {
  return (
    <>
      <Header />

      {/* Main Content - Split Layout */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/nosotros-01.jpg)' }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 bg-white flex items-center">
          <div className="w-full px-[40px] py-20 lg:py-0 pt-24 lg:pt-0">
            <div className="max-w-xl">
              <h1 
                className="text-[32px] lg:text-[44px] leading-[1.15] font-bold mb-8 italic"
                style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
              >
                Desde 1993 facilitamos el<br />
                comercio exterior en Necochea
              </h1>
              
              <div 
                className="space-y-5 text-gray-700 mb-10"
                style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}
              >
                <p className="text-base leading-relaxed">
                  Somos una agencia marítima integral que gestiona cada etapa de tu operación: desde el arribo del buque hasta la entrega final de la mercadería.
                </p>
                <p className="text-base leading-relaxed">
                  Con más de 32 años de experiencia, trabajamos con pequeñas, medianas y grandes empresas que buscan agilidad, confianza y soluciones personalizadas.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-[#2B4C7E] flex-shrink-0 mt-0.5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    <span className="font-bold text-[#2B4C7E]" style={{ fontFamily: 'din-2014, sans-serif' }}>Presencia nacional:</span>{' '}
                    <span className="text-gray-600">Necochea, Buenos Aires, Bahía Blanca, Mar del Plata, Rosario, San Lorenzo y Paso de los Libres</span>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-[#2B4C7E] flex-shrink-0 mt-0.5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    <span className="text-gray-600">Equipo de </span>
                    <span className="font-bold text-[#2B4C7E]" style={{ fontFamily: 'din-2014, sans-serif' }}>profesionales</span>
                    <span className="text-gray-600"> especializados</span>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-[#2B4C7E] flex-shrink-0 mt-0.5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    <span className="font-bold text-[#2B4C7E]" style={{ fontFamily: 'din-2014, sans-serif' }}>Atención personalizada</span>
                    <span className="text-gray-600"> para cada operación</span>
                  </p>
                </div>
              </div>

              <Link
                href="/contacto"
                className="inline-block bg-[#2B4C7E] text-white px-8 py-3.5 font-bold text-sm hover:bg-[#1e3a5f] transition-colors rounded-sm"
                style={{ fontFamily: 'din-2014, sans-serif' }}
              >
                Consultá tu operación
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
