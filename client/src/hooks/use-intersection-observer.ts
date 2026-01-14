import { useState, useEffect, useRef } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {},
) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!options.triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
      },
    );

    // Manual initial visibility check
    const checkInitialVisibility = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const threshold = options.threshold || 0.1;
      const visiblePercentage = Math.min(
        1,
        Math.max(
          0,
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0),
        ) / rect.height,
      );
      if (visiblePercentage >= threshold && !isVisible) {
        setIsVisible(true);
        if (options.triggerOnce) {
          observer.unobserve(element);
        }
      }
    };

    // Run initial check after a brief delay to ensure DOM is ready
    setTimeout(checkInitialVisibility, 0);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce, isVisible]); // Add isVisible to prevent infinite loops

  return [elementRef, isVisible] as const;
}
