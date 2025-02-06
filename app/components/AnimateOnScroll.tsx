"use client";
import { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: string; // Optional animation type
  delay?: number; // Optional delay in milliseconds
}

const AnimateOnScroll = ({ children, animation = 'translateY(-80px)', delay = 0 }: AnimateOnScrollProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (entry.boundingClientRect.top > 0) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      {children}

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: ${animation};
          transition: opacity 500ms ${delay}ms ease, transform 500ms ease;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translate(0);        
        }
      `}</style>
      <p className='hidden'>{delay}</p>
    </div>
  );
};

export default AnimateOnScroll;