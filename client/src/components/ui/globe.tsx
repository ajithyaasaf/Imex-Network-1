import createGlobe, { COBEOptions } from "cobe";
import React, { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

// IMEX office locations with accurate coordinates - Optimized for performance
const GLOBE_CONFIG: COBEOptions = {
  width: 600,
  height: 600,
  onRender: () => {},
  devicePixelRatio: 2, // Default value, will be set properly in component
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 8000, // Reduced from 16000 for better performance
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255], // IMEX red color
  glowColor: [1, 1, 1],
  opacity: 1,
  scale: 1, // Ensure full globe is visible
  offset: [0, 0], // Center the globe
  markers: [
    // Chennai, India (Headquarters) - 18 C, Rayala Towers - III, 158, Anna Salai
    { location: [13.0488, 80.2497], size: 0.15 },
    // Madurai, India (Regional Office) - No. 82, Pandiya Vellalar Street
    { location: [9.939, 78.122], size: 0.12 },
    // Foshan, China (China Operations) - DeYi Commercial Building, Lecong Town, Shunde
    { location: [22.8364, 113.2526], size: 0.12 },
  ],
};

export const Globe = React.memo(function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const rRef = useRef(0);
  const phiRef = useRef(0);
  const lastUpdateRef = useRef(0);

  const updatePointerInteraction = useCallback((value: number | null) => {
    if (value !== null) {
      // On start, capture initial position
      pointerInteracting.current = value;
      rRef.current = 0; // Reset rotation offset at start of new drag
    } else {
      // On end, bake the rotation into base phi and reset
      if (pointerInteracting.current !== null) {
        phiRef.current += rRef.current;
        rRef.current = 0;
      }
      pointerInteracting.current = null;
    }

    if (canvasRef.current) {
      canvasRef.current.style.cursor =
        pointerInteracting.current !== null ? "grabbing" : "grab";
    }
  }, []);

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const now = Date.now();
      // Throttle updates to prevent overwhelming the renderer
      if (now - lastUpdateRef.current < 16) return; // ~60fps
      lastUpdateRef.current = now;

      const delta = clientX - pointerInteracting.current;
      // Smooth the rotation and clamp extreme values
      const smoothedDelta = Math.max(-300, Math.min(300, delta));
      rRef.current = smoothedDelta / 200;
    }
  };

  const onRender = useCallback((state: Record<string, any>) => {
    if (pointerInteracting.current === null) {
      phiRef.current += 0.005;
    }
    state.phi = phiRef.current + rRef.current;
    state.width = width;
    state.height = width;
  }, []);

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    let globe: any = null;

    const initGlobe = () => {
      if (!canvasRef.current) return;

      try {
        window.addEventListener("resize", onResize);
        onResize();

        globe = createGlobe(canvasRef.current, {
          ...config,
          width: width,
          height: width,
          devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2), // Cap device pixel ratio for performance
          onRender,
        });

        // Make visible immediately without delay and ensure it stays visible
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
          canvasRef.current.style.visibility = "visible";
        }
      } catch (error) {
        console.warn("Failed to initialize globe:", error);
      }
    };

    // Delay initialization to ensure canvas is ready
    const timer = setTimeout(initGlobe, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      if (globe && typeof globe.destroy === "function") {
        try {
          globe.destroy();
        } catch (error) {
          console.warn("Error destroying globe:", error);
        }
      }
    };
  }, [config, onRender]);

  // Removed unnecessary interval for better performance

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn("size-full [contain:layout_paint_size]")}
        ref={canvasRef}
        style={{
          touchAction: "none",
          opacity: 1,
          visibility: "visible",
          pointerEvents: "auto",
        }}
        onPointerDown={(e) => {
          e.preventDefault();
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={(e) => {
          e.preventDefault();
          updatePointerInteraction(null);
        }}
        onPointerOut={(e) => {
          e.preventDefault();
          updatePointerInteraction(null);
        }}
        onPointerMove={(e) => {
          e.preventDefault();
          if (pointerInteracting.current !== null) {
            updateMovement(e.clientX);
          }
        }}
        onMouseMove={(e) => {
          e.preventDefault();
          if (pointerInteracting.current !== null) {
            updateMovement(e.clientX);
          }
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          if (e.touches[0]) {
            updatePointerInteraction(e.touches[0].clientX);
          }
        }}
        onTouchMove={(e) => {
          e.preventDefault();
          if (e.touches[0] && pointerInteracting.current !== null) {
            updateMovement(e.touches[0].clientX);
          }
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          updatePointerInteraction(null);
        }}
      />
    </div>
  );
});
