'use client';

import { useInView } from 'react-intersection-observer';

// Animated text component - word by word reveal
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

  // Renderizar texto animado palabra por palabra
  const renderAnimatedText = (textContent: string, keyPrefix: string) => {
    const lines = textContent.split('\n');

    return lines.map((line, lineIdx) => (
      <span key={`${keyPrefix}-line-${lineIdx}`} style={{ display: 'block' }}>
        {line.split(' ').map((word, wordIdx) => {
          const totalWordsBefore = lines.slice(0, lineIdx).reduce((acc, l) => acc + l.split(' ').length, 0);
          const globalWordIdx = totalWordsBefore + wordIdx;

          return (
            <span
              key={`${keyPrefix}-word-${lineIdx}-${wordIdx}`}
              style={{
                display: 'inline-block',
                marginRight: wordIdx < line.split(' ').length - 1 ? '0.25em' : '0',
                opacity: inView ? 1 : 0,
                filter: inView ? 'blur(0px)' : 'blur(4px)',
                transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay + (globalWordIdx * 50)}ms, filter 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay + (globalWordIdx * 50)}ms`,
              }}
            >
              {word}
            </span>
          );
        })}
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
    renderAnimatedText(text, 'default')
  );

  return (
    <span ref={ref}>
      {displayText}
    </span>
  );
}
