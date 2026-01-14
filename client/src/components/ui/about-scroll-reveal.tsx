import { useSpring, animated } from "@react-spring/web";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import React, { ReactNode, useEffect, useMemo } from "react";

interface AboutScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AboutScrollReveal({
  children,
  delay = 0,
  className = "",
}: AboutScrollRevealProps) {
  // Optimized intersection observer settings
  const observerConfig = useMemo(() => ({
    threshold: 0.05,
    rootMargin: "100px 0px",
    triggerOnce: true,
  }), []);

  const [ref, isVisible] = useIntersectionObserver(observerConfig);

  // Optimized spring config
  const springConfig = useMemo(() => ({
    tension: 280,
    friction: 35,
    precision: 0.01,
  }), []);

  const [styles, api] = useSpring(() => ({
    opacity: 0.9, // Slightly higher initial opacity for about section
    transform: "translate3d(0, 15px, 0)", // Smaller transform distance
    config: springConfig,
  }));

  useEffect(() => {
    if (isVisible) {
      if (delay === 0) {
        api.start({
          opacity: 1,
          transform: "translate3d(0, 0px, 0)",
        });
      } else {
        const timer = setTimeout(() => {
          api.start({
            opacity: 1,
            transform: "translate3d(0, 0px, 0)",
          });
        }, delay);
        return () => clearTimeout(timer);
      }
    }
  }, [isVisible, api, delay]);

  return (
    <animated.div 
      ref={ref} 
      style={styles} 
      className={`will-change-transform ${className}`}
    >
      {children}
    </animated.div>
  );
}