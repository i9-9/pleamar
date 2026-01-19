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

  // Renderizar texto animado palabra por palabra para evitar word-wrap
  const renderAnimatedText = (textContent: string, keyPrefix: string) => {
    const lines = textContent.split('\n');

    return lines.map((line, lineIdx) => (
      <span key={`${keyPrefix}-line-${lineIdx}`} style={{ display: 'block' }}>
        {line.split(' ').map((word, wordIdx) => (
          <span key={`${keyPrefix}-word-${lineIdx}-${wordIdx}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, charIdx) => (
              <span
                key={`${keyPrefix}-char-${lineIdx}-${wordIdx}-${charIdx}`}
                style={{
                  display: 'inline-block',
                  opacity: inView ? 1 : 0,
                  filter: inView ? 'blur(0px)' : 'blur(4px)',
                  transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay + ((lineIdx * 100) + (wordIdx * 50) + (charIdx * 25))}ms, filter 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay + ((lineIdx * 100) + (wordIdx * 50) + (charIdx * 25))}ms`,
                }}
              >
                {char}
              </span>
            ))}
            {wordIdx < line.split(' ').length - 1 && <span style={{ display: 'inline-block', width: '0.25em' }}> </span>}
          </span>
        ))}
      </span>
    ));
  };

  // Si hay mobileText, usar ese en pantallas pequeñas
  const displayText = mobileText ? (
    <>
      <span className="md:!hidden">
        {renderAnimatedText(mobileText, 'mobile')}
      </span>
      <span className="!hidden md:!inline">
        {renderAnimatedText(text, 'desktop')}
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
