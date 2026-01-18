import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import CTAButtons from '@/components/CTAButtons';
import { getNosotrosPage } from '@/lib/api';
import { getImageUrl, getImageAlt } from '@/types/contentful';

export const revalidate = 3600; // Revalidate every hour (ISR)

export default async function Nosotros() {
  const content = await getNosotrosPage();

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
        {/* Left Side - Image */}
        <div className="lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen relative">
          <Image
            src={getImageUrl(fields.mainImage, 1500)}
            alt={getImageAlt(fields.mainImage, 'Nosotros - Pleamar')}
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
                {fields.title}
              </h1>

              <div
                className="space-y-5 mb-10"
                style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72' }}
              >
                <p className="text-base leading-relaxed">
                  {fields.paragraph1}
                </p>
                <p className="text-base leading-relaxed">
                  {fields.paragraph2}
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
                    <span className="font-bold text-[#2B4C7E]" style={{ fontFamily: 'din-2014, sans-serif' }}>{fields.bullet1Title}</span>{' '}
                    <span style={{ color: '#364B72' }}>{fields.bullet1Description}</span>
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
                    {fields.bullet2Text}
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
                    {fields.bullet3Text}
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
