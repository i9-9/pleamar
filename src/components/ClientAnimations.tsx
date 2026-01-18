'use client';

import { useInView } from 'react-intersection-observer';

// Animated text component - letter by letter reveal
export default function ClientAnimations({
  text,
  delay = 0,
  triggerOnce = true
}: {
  text: string;
  delay?: number;
  triggerOnce?: boolean;
}) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold: 0.1,
  });

  return (
    <span ref={ref}>
      {text.split('').map((char, index) => (
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
      ))}
    </span>
  );
}
