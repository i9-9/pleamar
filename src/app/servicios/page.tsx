import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Servicios() {
  return (
    <>
      <Header />

      {/* Main Content - Split Layout */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="lg:w-1/2 bg-white flex items-center order-2 lg:order-1">
          <div className="w-full px-[40px] py-16 lg:py-0 pt-24 lg:pt-0">
            <div className="max-w-xl">
              <h1 
                className="text-[32px] lg:text-[44px] leading-[1.15] font-bold mb-12 italic"
                style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
              >
                Acompañamos su operación<br />
                de punta a punta
              </h1>

              <div className="space-y-8">
                {/* Gestión Aduanera */}
                <div>
                  <h2 
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    Gestión Aduanera
                  </h2>
                  <ul 
                    className="space-y-2 text-gray-600"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}
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
                    className="space-y-2 text-gray-600"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}
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
                    className="space-y-2 text-gray-600"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}
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
                    className="space-y-2 text-gray-600"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}
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

              <div className="mt-12">
                <Link
                  href="/contacto"
                  className="inline-block border-2 border-[#2B4C7E] text-[#2B4C7E] px-8 py-3.5 font-bold text-sm hover:bg-[#2B4C7E] hover:text-white transition-colors rounded-sm"
                  style={{ fontFamily: 'din-2014, sans-serif' }}
                >
                  Solicitar asesoramiento
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image with transport label */}
        <div className="lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen relative order-1 lg:order-2">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/servicios-02.jpg)' }}
          />
          {/* Transport label at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-white/95 backdrop-blur-sm py-5 px-8">
              <h3 
                className="text-xl lg:text-2xl font-bold text-center"
                style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
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
