import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import CTAButtons from '@/components/CTAButtons';

export default function Servicios() {
  return (
    <>
      <Header />

      {/* Main Content - Split Layout */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="lg:w-1/2 bg-white flex items-center order-2 lg:order-1 pt-24">
          <div className="w-full py-20 lg:py-0">
            <div className="max-w-xl mx-auto px-5 md:px-10 lg:px-0 lg:ml-[72px]">
              <h1
                className="text-[32px] lg:text-[44px] leading-[0.95] font-bold mb-12"
                style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
              >
                Acompañamos su operación<br />
                de punta a punta
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {/* Gestión Aduanera */}
                <div>
                  <h2 
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    Gestión Aduanera
                  </h2>
                  <ul
                    className="space-y-1"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72', lineHeight: '1.3' }}
                  >
                    <li className="flex items-center gap-2">
                      <span className="text-[#2B4C7E]">•</span>
                      <span>Despacho de Aduana</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2B4C7E]">•</span>
                      <span>Agente de Transporte Aduanero</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2B4C7E]">•</span>
                      <span>Representación ante organismos</span>
                    </li>
                  </ul>
                </div>

                {/* Operaciones Logísticas */}
                <div>
                  <h2 
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    Operaciones Logísticas
                  </h2>
                  <ul
                    className="space-y-1"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72', lineHeight: '1.3' }}
                  >
                    <li className="flex items-center gap-2">
                      <span className="text-[#2B4C7E]">•</span>
                      <span>Transporte marítimo y terrestre</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2B4C7E]">•</span>
                      <span>Logística y coordinación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2B4C7E]">•</span>
                      <span>Coordinación de embarque</span>
                    </li>
                  </ul>
                </div>

                {/* Gestión Documental */}
                <div>
                  <h2 
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    Gestión Documental
                  </h2>
                  <ul
                    className="space-y-1"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72', lineHeight: '1.3' }}
                  >
                    <li className="flex items-center gap-2">
                      <span className="text-[#2B4C7E]">•</span>
                      <span>Tramitación de<br />documentos comerciales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2B4C7E]">•</span>
                      <span>Asesoramiento en<br />comercio exterior</span>
                    </li>
                  </ul>
                </div>

                {/* Manejo de Mercaderías */}
                <div>
                  <h2 
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    Manejo de Mercaderías
                  </h2>
                  <ul
                    className="space-y-1"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72', lineHeight: '1.3' }}
                  >
                    <li className="flex items-center gap-2">
                      <span className="text-[#2B4C7E]">•</span>
                      <span>Estibaje</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2B4C7E]">•</span>
                      <span>Recepción</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2B4C7E]">•</span>
                      <span>Entrega</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16">
                <CTAButtons variant="stacked" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image with transport label */}
        <div className="lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen relative order-1 lg:order-2">
          <Image
            src="/images/v2/servicios.jpg"
            alt="Servicios - Pleamar"
            fill
            priority
            quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Transport label at bottom */}
          <div className="absolute bottom-0 left-0 right-0" style={{ padding: '28px 40px' }}>
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '6px',
                padding: '0 32px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                height: '52px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <h3
                className="font-bold text-center"
                style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E', fontSize: '16px' }}
              >
                Transporte marítimo y terrestre
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
