import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import CTAButtons from '@/components/CTAButtons';
import ClientAnimations from '@/components/ClientAnimations';
import { getServiciosPage } from '@/lib/api';
import { getImageUrl, getImageAlt } from '@/types/contentful';

export const revalidate = 3600; // Revalidate every hour (ISR)

export default async function Servicios() {
  const content = await getServiciosPage();

  if (!content) {
    return (
      <>
        <Header />
        <div style={{ padding: '100px 40px', textAlign: 'center' }}>
          <p>Error loading content. Please try again later.</p>
        </div>
        <Footer />
      </>
    );
  }

  const fields = content.fields;

  return (
    <>
      <Header />

      {/* Main Content - Split Layout */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="lg:w-1/2 bg-white flex items-center order-2 lg:order-1 pt-6 lg:pt-24">
          <div className="w-full py-6 lg:py-0">
            <div className="max-w-xl mx-auto px-5 md:px-10 lg:px-0 lg:ml-[72px]">
              <h1
                className="text-[32px] lg:text-[44px] leading-[0.95] font-bold mb-12"
                style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
              >
                <ClientAnimations text={fields.title} delay={0} />
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {/* Category 1 */}
                <div>
                  <h2
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    {fields.category1Title}
                  </h2>
                  <ul
                    className="space-y-1"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72', lineHeight: '1.3' }}
                  >
                    {(fields.category1Items as string[] || []).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-[#2B4C7E]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Category 2 */}
                <div>
                  <h2
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    {fields.category2Title}
                  </h2>
                  <ul
                    className="space-y-1"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72', lineHeight: '1.3' }}
                  >
                    {(fields.category2Items as string[] || []).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-[#2B4C7E]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Category 3 */}
                <div>
                  <h2
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    {fields.category3Title}
                  </h2>
                  <ul
                    className="space-y-1"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72', lineHeight: '1.3' }}
                  >
                    {(fields.category3Items as string[] || []).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-[#2B4C7E]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Category 4 */}
                <div>
                  <h2
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    {fields.category4Title}
                  </h2>
                  <ul
                    className="space-y-1"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72', lineHeight: '1.3' }}
                  >
                    {(fields.category4Items as string[] || []).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-[#2B4C7E]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-16">
                <CTAButtons variant="stacked" hideServicios />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image with transport label */}
        <div className="lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen relative order-1 lg:order-2">
          <Image
            src={getImageUrl(fields.mainImage, 1500)}
            alt={getImageAlt(fields.mainImage, 'Servicios - Pleamar')}
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
                {fields.transportLabel}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
