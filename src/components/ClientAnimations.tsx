'use client';

import { useInView } from 'react-intersection-observer';

// Animated text component - letter by letter reveal
export default function ClientAnimations({
  text,
  delay = 0,
  triggerOnce = true,
  mobileText,
}: {
  text: string;
  delay?: number;
  triggerOnce?: boolean;
  mobileText?: string; // Texto alternativo para mobile
}) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold: 0.1,
  });

  // Si hay mobileText, usar ese en pantallas pequeñas
  const displayText = mobileText ? (
    <>
      <span className="md:hidden">
        {mobileText.split('').map((char, index) => {
          if (char === '\n') {
            return <br key={`mobile-${index}`} />;
          }
          return (
            <span
              key={`mobile-${index}`}
              style={{
                display: 'inline-block',
                opacity: inView ? 1 : 0,
                filter: inView ? 'blur(0px)' : 'blur(4px)',
                transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay + (index * 25)}ms, filter 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay + (index * 25)}ms`,
                whiteSpace: char === ' ' ? 'pre' : 'normal',
              }}
            >
              {char}
            </span>
          );
        })}
      </span>
      <span className="hidden md:inline">
        {text.split('').map((char, index) => {
          if (char === '\n') {
            return <br key={`desktop-${index}`} />;
          }
          return (
            <span
              key={`desktop-${index}`}
              style={{
                display: 'inline-block',
                opacity: inView ? 1 : 0,
                filter: inView ? 'blur(0px)' : 'blur(4px)',
                transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay + (index * 25)}ms, filter 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay + (index * 25)}ms`,
                whiteSpace: char === ' ' ? 'pre' : 'normal',
              }}
            >
              {char}
            </span>
          );
        })}
      </span>
    </>
  ) : (
    // Si no hay mobileText, usar el comportamiento original
    text.split('').map((char, index) => {
      if (char === '\n') {
        return <br key={index} />;
      }
      return (
        <span
          key={index}
          style={{
            display: 'inline-block',
            opacity: inView ? 1 : 0,
            filter: inView ? 'blur(0px)' : 'blur(4px)',
            transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay + (index * 25)}ms, filter 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay + (index * 25)}ms`,
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </span>
      );
    })
  );

  return (
    <span ref={ref}>
      {displayText}
    </span>
  );
}
