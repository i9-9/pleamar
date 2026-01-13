import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import CTAButtons from '@/components/CTAButtons';

export default function Nosotros() {
  return (
    <>
      <Header />

      {/* Main Content - Split Layout */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen relative">
          <Image
            src="/images/v2/nosotros.jpg"
            alt="Nosotros - Pleamar"
            fill
            priority
            quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 bg-white flex items-center">
          <div className="w-full py-20 lg:py-0 pt-24 lg:pt-0">
            <div className="max-w-xl mx-auto px-5 md:px-10 lg:px-0 lg:ml-20">
              <h1
                className="text-[32px] lg:text-[44px] leading-[0.95] font-bold mb-8"
                style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
              >
                Desde 1993 facilitamos el<br />
                comercio exterior en Necochea
              </h1>
              
              <div
                className="space-y-5 mb-10"
                style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72' }}
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
                    <span style={{ color: '#364B72' }}>Necochea, Buenos Aires, Bahía Blanca, Mar del Plata, Rosario, San Lorenzo y Paso de los Libres</span>
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
                  <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72' }}>
                    <span>Equipo de </span>
                    <span className="font-bold text-[#2B4C7E]" style={{ fontFamily: 'din-2014, sans-serif' }}>profesionales</span>
                    <span> especializados</span>
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
                  <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72' }}>
                    <span className="font-bold text-[#2B4C7E]" style={{ fontFamily: 'din-2014, sans-serif' }}>Atención personalizada</span>
                    <span> para cada operación</span>
                  </p>
                </div>
              </div>

              <CTAButtons variant="stacked" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
