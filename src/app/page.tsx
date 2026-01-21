import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedCounter from '@/components/AnimatedCounter';
import CTAButtons from '@/components/CTAButtons';
import { getLandingPage } from '@/lib/api';
import { getImageUrl, getImageAlt } from '@/types/contentful';
import ClientAnimations from '@/components/ClientAnimations';

export const revalidate = 3600; // Revalidate every hour (ISR)

export default async function Home() {
  const content = await getLandingPage();

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

      {/* Hero Section - Mobile */}
      <section className="md:hidden relative min-h-screen" style={{ overflow: 'hidden' }}>
        {/* Background - Full width image - edge to edge */}
        <Image
          src={getImageUrl(fields.heroImage, 2000)}
          alt={getImageAlt(fields.heroImage, 'Hero Pleamar')}
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        />

        {/* Content Container - Mobile Layout */}
        <div className="relative z-10 min-h-screen flex flex-col px-10 py-6">
          {/* Main Content - centered */}
          <div className="flex-grow flex flex-col justify-center pt-20 pb-8">
            <div style={{ maxWidth: '620px' }}>
              <h1
                style={{
                  fontFamily: 'din-2014, sans-serif',
                  fontSize: 'clamp(32px, 10vw, 48px)',
                  lineHeight: '0.9',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '16px',
                  letterSpacing: '-0.03em',
                }}
              >
                <ClientAnimations text={`${fields.heroTitle1}\n${fields.heroTitle2}`} delay={0} />
              </h1>
              <p
                style={{
                  fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '24px',
                  lineHeight: '1.5',
                }}
              >
                {fields.heroSubtitle}
              </p>

              {/* Botones CTA */}
              <CTAButtons className="mb-4" />

              <p
                style={{
                  fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {fields.heroSecondaryText}
              </p>
            </div>
          </div>

          {/* Stats Bar - bottom section */}
          <div className="flex-shrink-0 pb-6">
            {/* Stats Bar */}
            <div style={{ marginBottom: '16px' }}>
              <div className="grid grid-cols-2" style={{ gap: '12px' }}>
                <AnimatedCounter end={fields.stat1Value} suffix={fields.stat1Suffix} label={fields.stat1Label} duration={2000} />
                <AnimatedCounter end={fields.stat2Value} suffix={fields.stat2Suffix} label={fields.stat2Label} duration={2200} />
                <AnimatedCounter end={fields.stat3Value} suffix={fields.stat3Suffix} label={fields.stat3Label} duration={2400} />
                <AnimatedCounter end={fields.stat4Value} suffix={fields.stat4Suffix} label={fields.stat4Label} duration={1800} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Desktop */}
      <section className="hidden md:block relative h-screen" style={{ overflow: 'hidden' }}>
        {/* Background - Full width image - edge to edge */}
        <Image
          src={getImageUrl(fields.heroImage, 2000)}
          alt={getImageAlt(fields.heroImage, 'Hero Pleamar')}
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        />

        {/* Content Container - Desktop Layout */}
        <div className="relative z-10 h-full flex flex-col justify-between px-10">
          {/* Main Content - top section */}
          <div className="flex-shrink-0 pt-[160px] lg:pt-[200px]">
            <div style={{ maxWidth: '620px' }}>
              <h1
                className="-mb-6"
                style={{
                  fontFamily: 'din-2014, sans-serif',
                  fontSize: 'clamp(48px, 6vw, 64px)',
                  lineHeight: '0.85',
                  fontWeight: 700,
                  color: 'white',
                  marginTop: '50px',
                  letterSpacing: '-0.03em',
                }}
              >
                <ClientAnimations text={`${fields.heroTitle1}\n${fields.heroTitle2}`} delay={0} />
              </h1>
              <p
                style={{
                  fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: '19px',
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '32px',
                }}
              >
                {fields.heroSubtitle}
              </p>

              {/* Botones CTA */}
              <CTAButtons className="mb-6" />

              <p
                style={{
                  fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {fields.heroSecondaryText}
              </p>
            </div>
          </div>

          {/* Stats Bar and Scroll Indicator - bottom section */}
          <div className="flex-shrink-0 pb-6 pt-8">
            {/* Stats Bar */}
            <div style={{ marginBottom: '40px' }}>
              <div className="grid grid-cols-4" style={{ gap: '16px' }}>
                <AnimatedCounter end={fields.stat1Value} suffix={fields.stat1Suffix} label={fields.stat1Label} duration={2000} />
                <AnimatedCounter end={fields.stat2Value} suffix={fields.stat2Suffix} label={fields.stat2Label} duration={2200} />
                <AnimatedCounter end={fields.stat3Value} suffix={fields.stat3Suffix} label={fields.stat3Label} duration={2400} />
                <AnimatedCounter end={fields.stat4Value} suffix={fields.stat4Suffix} label={fields.stat4Label} duration={1800} />
              </div>
            </div>

            {/* Scroll Indicator */}
            <div>
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
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen md:h-screen" style={{ paddingTop: 'clamp(100px, 12vw, 120px)', paddingBottom: 'clamp(40px, 8vw, 80px)', paddingLeft: '40px', paddingRight: '40px', backgroundColor: '#F5F5F5' }}>
        <div style={{ marginBottom: 'clamp(24px, 5vw, 48px)' }}>
          <h2
            className="mb-4 md:mb-3"
            style={{
              fontFamily: 'din-2014, sans-serif',
              fontSize: 'clamp(44px, 8vw, 80px)',
              lineHeight: 0.95,
              fontWeight: 700,
              color: '#2B4C7E',
              letterSpacing: '-0.03em',
              hyphens: 'none',
              wordBreak: 'keep-all',
            }}
          >
            <ClientAnimations
              text={fields.featuresTitle1.replace(' | ', ' ')}
              mobileText={fields.featuresTitle1.replace(' | ', '\n')}
              delay={0}
            />
          </h2>
          <p
            style={{
              fontFamily: 'din-2014, sans-serif',
              fontSize: 'clamp(16px, 3.5vw, 24px)',
              fontWeight: 700,
              color: '#2B4C7E',
              lineHeight: 1.1,
            }}
          >
            <span className="md:!hidden">
              {fields.featuresSubtitle.replace(' | ', '\n').split('\n').map((line, idx) => (
                idx === 0 ? <span key={idx}>{line}<br /></span> : <span key={idx}>{line}</span>
              ))}
            </span>
            <span className="!hidden md:!inline">{fields.featuresSubtitle.replace(' | ', ' ')}</span>
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
            <div className="lg:h-[220px]" style={{ padding: '32px 28px 24px' }}>
              <div style={{ color: '#2B4C7E', marginBottom: '16px' }}>
                <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 8v24M20 8l-4 4M20 8l4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="6" r="2" fill="currentColor"/>
                  <path d="M8 20c0 6.627 5.373 12 12 12s12-5.373 12-12" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '23px', fontWeight: 700, color: '#2B4C7E', marginBottom: '8px', letterSpacing: '-0.03em' }}>
                {fields.feature1Title}
              </h3>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '16px', color: '#2B4C7E', lineHeight: 1.5 }}>
                {fields.feature1Description}
              </p>
            </div>
            <div style={{ flex: 1, minHeight: '300px', backgroundImage: `url(${getImageUrl(fields.feature1Image, 800)})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
            <div className="lg:h-[220px]" style={{ padding: '32px 28px 24px' }}>
              <div style={{ color: '#2B4C7E', marginBottom: '16px' }}>
                <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 4C13.373 4 8 9.373 8 16c0 8 12 20 12 20s12-12 12-20c0-6.627-5.373-12-12-12zm0 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '23px', fontWeight: 700, color: '#2B4C7E', marginBottom: '8px', letterSpacing: '-0.03em' }}>
                {fields.feature2Title}
              </h3>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '16px', color: '#2B4C7E', lineHeight: 1.5 }}>
                {fields.feature2Description}
              </p>
            </div>
            <div style={{ flex: 1, minHeight: '300px', backgroundImage: `url(${getImageUrl(fields.feature2Image, 800)})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
            <div className="lg:h-[220px]" style={{ padding: '32px 28px 24px' }}>
              <div style={{ color: '#2B4C7E', marginBottom: '16px' }}>
                <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '23px', fontWeight: 700, color: '#2B4C7E', marginBottom: '8px', letterSpacing: '-0.03em' }}>
                {fields.feature3Title}
              </h3>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '16px', color: '#2B4C7E', lineHeight: 1.5 }}>
                {fields.feature3Description}
              </p>
            </div>
            <div style={{ flex: 1, minHeight: '300px', backgroundImage: `url(${getImageUrl(fields.feature3Image, 800)})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen md:h-screen" style={{ padding: 'clamp(40px, 8vw, 80px) 40px', backgroundColor: 'white' }}>
        <h2
          style={{
            fontFamily: 'din-2014, sans-serif',
            fontSize: 'clamp(36px, 8vw, 80px)',
            lineHeight: 0.95,
            fontWeight: 700,
            color: '#2B4C7E',
            marginBottom: 'clamp(24px, 5vw, 40px)',
            letterSpacing: '-0.03em',
            hyphens: 'none',
            wordBreak: 'keep-all',
          }}
        >
          <ClientAnimations
            text={fields.servicesTitle.replace(' | ', ' ')}
            mobileText={fields.servicesTitle.replace(' | ', '\n')}
            delay={0}
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px' }}>
          {/* Service 1 */}
          <Link href="/servicios" className="group" style={{ display: 'block', position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '480px' }}>
            <div
              className="group-hover:scale-105 transition-transform duration-700"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${getImageUrl(fields.service1Image, 1000)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,76,126,0.85) 0%, rgba(43,76,126,0.3) 50%, transparent 100%)' }} />
            <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px', color: 'white' }}>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
                {fields.service1Subtitle}
              </p>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '33px', fontWeight: 700, letterSpacing: '-0.03em' }}>
                {fields.service1Title}
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
                backgroundImage: `url(${getImageUrl(fields.service2Image, 1000)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,76,126,0.85) 0%, rgba(43,76,126,0.3) 50%, transparent 100%)' }} />
            <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px', color: 'white' }}>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
                {fields.service2Subtitle}
              </p>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '33px', fontWeight: 700, letterSpacing: '-0.03em' }}>
                {fields.service2Title}
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
                backgroundImage: `url(${getImageUrl(fields.service3Image, 1000)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,76,126,0.85) 0%, rgba(43,76,126,0.3) 50%, transparent 100%)' }} />
            <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px', color: 'white' }}>
              <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
                {fields.service3Subtitle}
              </p>
              <h3 style={{ fontFamily: 'din-2014, sans-serif', fontSize: '33px', fontWeight: 700, letterSpacing: '-0.03em' }}>
                {fields.service3Title}
              </h3>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
