import React, { useState, useRef, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  "data-testid"?: string;
}

const LazyImage = React.memo(function LazyImage({
  src,
  alt,
  className = "",
  placeholder,
  "data-testid": testId,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Use intersection observer to detect when image enters viewport
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px 0px", // Start loading 50px before entering viewport
    triggerOnce: true,
  });

  useEffect(() => {
    if (isVisible && !isInView) {
      setIsInView(true);
    }
  }, [isVisible, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsLoaded(true); // Still set loaded to prevent infinite loading state
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={{ backgroundColor: placeholder || "#f3f4f6" }}
        />
      )}
      
      {/* Actual image - only render when in view */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy" // Native lazy loading as fallback
          data-testid={testId}
        />
      )}
    </div>
  );
});

export default LazyImage;