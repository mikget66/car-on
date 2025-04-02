"use client";
import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  threshold?: number;
}

const AnimateOnScroll = ({
  children,
  animation = "translateY(-80px)",
  delay = 300,
  threshold = 0.0,
}: AnimateOnScrollProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
          }
        });
      },
      { threshold }
    );
  
    const element = elementRef.current;
    if (element) observer.observe(element);
  
    return () => observer.disconnect();
  }, [delay, threshold]); // 

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${isVisible ? "visible" : ""}`}
    >
      {children}

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: ${animation};
          transition: opacity 500ms ease, transform 500ms ease;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translate(0);
        }
      `}</style>
    </div>
  );
};

export default AnimateOnScroll;
