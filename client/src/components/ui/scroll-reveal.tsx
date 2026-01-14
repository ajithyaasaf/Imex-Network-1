import React, { useEffect, useMemo } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const ScrollReveal = React.memo(function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  // Optimized intersection observer settings
  const observerConfig = useMemo(() => ({
    threshold: 0.01, // Lower threshold for earlier trigger
    rootMargin: "150px 0px", // Larger margin to trigger animations sooner
    triggerOnce: true,
  }), []);

  const [ref, isVisible] = useIntersectionObserver(observerConfig);

  // Optimized spring config for better performance
  const springConfig = useMemo(() => ({
    tension: 280, // Increased for snappier animations
    friction: 35, // Adjusted for smoother motion
    precision: 0.01, // Reduced precision for better performance
  }), []);

  const [styles, api] = useSpring(() => ({
    opacity: 1,
    transform: "translate3d(0, 10px, 0)", // More subtle movement
    config: springConfig,
  }));

  useEffect(() => {
    if (isVisible) {
      if (delay === 0) {
        // Immediate start for better performance when no delay
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
  }, [isVisible, delay, api]);

  return (
    <animated.div 
      ref={ref} 
      style={styles} 
      className={`will-change-transform ${className}`}
    >
      {children}
    </animated.div>
  );
});

export default ScrollReveal;
