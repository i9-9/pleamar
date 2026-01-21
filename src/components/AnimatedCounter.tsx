'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({ 
  end, 
  suffix = '', 
  prefix = '',
  duration = 2000,
  label 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, end, duration]);

  const animateCount = () => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 'clamp(12px, 3vw, 20px) clamp(16px, 4vw, 24px)',
        borderRadius: '4px',
        borderTop: '3px solid #A83B17',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div
        style={{
          fontFamily: 'din-2014, sans-serif',
          fontSize: 'clamp(28px, 6vw, 40px)',
          fontWeight: 700,
          color: 'white',
          lineHeight: 1
        }}
      >
        {prefix}{count}{suffix}
      </div>
      <div
        style={{
          fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: 'clamp(11px, 2.5vw, 13px)',
          color: 'rgba(255,255,255,0.8)',
          marginTop: '4px'
        }}
      >
        {label}
      </div>
    </div>
  );
}
