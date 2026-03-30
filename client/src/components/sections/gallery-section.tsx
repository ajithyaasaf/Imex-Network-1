import { Component } from "@/components/ui/masonry";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import img3 from "@assets/WhatsApp Image 2025-09-11 at 1.38.49 PM_1759733497302.jpeg";

import img8 from "@assets/WhatsApp Image 2025-09-11 at 1.38.51 PM (2)_1759733497308.jpeg";
import img9 from "@assets/WhatsApp Image 2025-09-11 at 1.38.51 PM_1759733497309.jpeg";
import img10 from "@assets/WhatsApp Image 2025-09-11 at 1.38.52 PM (1)_1759733497310.jpeg";
import img12 from "@assets/WhatsApp Image 2025-09-11 at 1.38.53 PM (1)_1759733497312.jpeg";
import img13 from "@assets/WhatsApp Image 2025-09-11 at 1.38.53 PM (2)_1759733497313.jpeg";
import img15 from "@assets/WhatsApp Image 2025-09-11 at 1.38.54 PM (1)_1759733497315.jpeg";
import img16 from "@assets/WhatsApp Image 2025-09-11 at 1.38.54 PM (2)_1759733497316.jpeg";
import img17 from "@assets/WhatsApp Image 2025-09-11 at 1.38.54 PM_1759739312049.jpeg";
import img18 from "@assets/WhatsApp Image 2025-09-11 at 1.38.55 PM (1)_1759739312051.jpeg";
import img20 from "@assets/WhatsApp Image 2025-09-11 at 1.38.55 PM_1759739312053.jpeg";
import img21 from "@assets/WhatsApp Image 2025-09-11 at 1.38.56 PM (1)_1759739312054.jpeg";
import img22 from "@assets/WhatsApp Image 2025-09-11 at 1.38.56 PM (2)_1759739312056.jpeg";
import img23 from "@assets/WhatsApp Image 2025-09-11 at 1.38.56 PM_1759739312056.jpeg";
import img24 from "@assets/WhatsApp Image 2025-09-11 at 1.38.57 PM (1)_1759739312057.jpeg";
import img25 from "@assets/WhatsApp Image 2025-09-11 at 1.38.57 PM (2)_1759739312058.jpeg";
import img26 from "@assets/WhatsApp Image 2025-09-11 at 1.38.57 PM_1759739312059.jpeg";
import img27 from "@assets/WhatsApp Image 2025-09-11 at 1.38.58 PM (1)_1759739312059.jpeg";
import img28 from "@assets/WhatsApp Image 2025-09-11 at 1.38.58 PM (2)_1759739312060.jpeg";
import img29 from "@assets/WhatsApp Image 2025-09-11 at 1.38.58 PM_1759739312061.jpeg";
import img31 from "@assets/WhatsApp Image 2025-09-11 at 1.38.59 PM (2)_1759739312062.jpeg";
import img32 from "@assets/WhatsApp Image 2025-09-11 at 1.38.59 PM_1759739312062.jpeg";
import img33 from "@assets/WhatsApp Image 2025-09-11 at 1.39.00 PM (1)_1759739312063.jpeg";
import img34 from "@assets/WhatsApp Image 2025-09-11 at 1.39.00 PM (2)_1759739312064.jpeg";
import img35 from "@assets/WhatsApp Image 2025-09-11 at 1.39.00 PM_1759739312065.jpeg";
import img36 from "@assets/WhatsApp Image 2025-09-11 at 1.39.01 PM (1)_1759743431563.jpeg";
import img37 from "@assets/WhatsApp Image 2025-09-11 at 1.39.01 PM (2)_1759743431566.jpeg";
import img38 from "@assets/WhatsApp Image 2025-09-11 at 1.39.01 PM_1759743431567.jpeg";
import img39 from "@assets/WhatsApp Image 2025-09-11 at 1.39.02 PM (1)_1759743431568.jpeg";
import img40 from "@assets/WhatsApp Image 2025-09-11 at 1.39.02 PM_1759743431569.jpeg";
import img41 from "@assets/WhatsApp Image 2025-09-11 at 1.39.03 PM (1)_1759743431569.jpeg";
import img42 from "@assets/WhatsApp Image 2025-09-11 at 1.39.03 PM (2)_1759743431570.jpeg";
import img43 from "@assets/WhatsApp Image 2025-09-11 at 1.39.03 PM_1759743431571.jpeg";
import img44 from "@assets/WhatsApp Image 2025-09-11 at 1.39.04 PM (1)_1759743431571.jpeg";
import img45 from "@assets/WhatsApp Image 2025-09-11 at 1.39.04 PM (2)_1759743431572.jpeg";
import img46 from "@assets/WhatsApp Image 2025-09-11 at 1.39.04 PM_1759743431573.jpeg";
import img47 from "@assets/WhatsApp Image 2025-09-11 at 1.39.05 PM (1)_1759743431574.jpeg";
import img48 from "@assets/WhatsApp Image 2025-09-11 at 1.39.05 PM (2)_1759743431575.jpeg";
import img49 from "@assets/WhatsApp Image 2025-09-11 at 1.39.05 PM_1759743431576.jpeg";
import img50 from "@assets/WhatsApp Image 2025-09-11 at 1.39.06 PM_1759743431576.jpeg";

const galleryData = [
  // Page 1 Curated Mix (Items 1-15)
  // Page 1 — Beds first
  { id: 1, image: img3, height: 380 },    // Room (Two beds)
  { id: 2, image: img15, height: 360 },   // Room
  { id: 3, image: img8, height: 420 },    // Dining
  { id: 4, image: img10, height: 480 },   // Public
  { id: 5, image: img9, height: 260 },    // Dining
  { id: 6, image: img13, height: 440 },   // Dining
  { id: 7, image: img17, height: 470 },   // Public
  { id: 8, image: img12, height: 390 },   // Public
  { id: 9, image: img18, height: 300 },   // Dining
  { id: 10, image: img20, height: 340 },  // Dining
  { id: 11, image: img16, height: 330 },  // Room
  { id: 12, image: img36, height: 450 },  // Public
  { id: 13, image: img21, height: 290 },
  { id: 14, image: img22, height: 460 },
  { id: 15, image: img23, height: 370 },

  // Remaining Images Sequential
  { id: 16, image: img24, height: 320 },
  { id: 17, image: img25, height: 400 },
  { id: 18, image: img26, height: 310 },
  { id: 19, image: img27, height: 430 },
  { id: 20, image: img28, height: 280 },
  { id: 21, image: img29, height: 350 },
  { id: 22, image: img31, height: 270 },
  { id: 23, image: img32, height: 420 },
  { id: 24, image: img33, height: 450 },
  { id: 25, image: img34, height: 300 },
  { id: 26, image: img35, height: 360 },
  { id: 27, image: img37, height: 320 },
  { id: 28, image: img38, height: 340 },
  { id: 29, image: img39, height: 290 },
  { id: 30, image: img40, height: 370 },
  { id: 31, image: img41, height: 450 },
  { id: 32, image: img42, height: 390 },
  { id: 33, image: img43, height: 410 },
  { id: 34, image: img44, height: 330 },
  { id: 35, image: img45, height: 400 },
  { id: 36, image: img46, height: 420 },
  { id: 37, image: img47, height: 350 },
  { id: 38, image: img48, height: 380 },
  { id: 39, image: img49, height: 340 },
  { id: 40, image: img50, height: 480 },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 15;
  const totalPages = Math.ceil(galleryData.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = galleryData.slice(startIndex, endIndex);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(startIndex + index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryData.length - 1));
  };

  const goToNext = () => {
    setLightboxIndex((prev) => (prev < galleryData.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  const setRefs = (node: HTMLElement | null) => {
    sectionRef.current = node;
    ref(node);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      if (sectionRef.current) {
        const yOffset = -100;
        const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        
        setTimeout(() => {
          setCurrentPage(page);
        }, 300);
      } else {
        setCurrentPage(page);
      }
    }
  };

  return (
    <section ref={setRefs} className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our collection of moments, projects, and achievements that showcase our journey and commitment to excellence
          </p>
        </div>
        
        <div className="w-full max-w-7xl mx-auto overflow-x-hidden">
          <Component key={currentPage} data={currentImages} inView={inView} onImageClick={openLightbox} />
        </div>

        <div className="flex items-center justify-center gap-2 mt-12">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-8 w-8 p-0"
            data-testid="button-prev-page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(page)}
              className="h-8 w-8 p-0 text-xs"
              data-testid={`button-page-${page}`}
            >
              {page}
            </Button>
          ))}
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-8 w-8 p-0"
            data-testid="button-next-page"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            data-testid="button-close-lightbox"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 rounded-full p-3 hover:bg-black/70"
            data-testid="button-lightbox-prev"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 rounded-full p-3 hover:bg-black/70"
            data-testid="button-lightbox-next"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="relative w-full h-full flex items-center justify-center px-20 py-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryData[lightboxIndex].image}
              alt={`Gallery image ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              data-testid="lightbox-image"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm bg-black/70 px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {galleryData.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
