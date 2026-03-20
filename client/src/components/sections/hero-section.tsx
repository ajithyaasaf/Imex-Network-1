import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";

import heroImage1 from "@assets/1_1765189672715.png";
import heroImage2 from "@assets/hero_3.png";
import heroImage3 from "@assets/generated_images/luxury_hotel_lobby_interior.png";

const slides = [
  {
    id: 1,
    image: heroImage1,
    subtitle: "Global Import & Export Solutions",
    title: "Transforming Spaces",
    highlight: "Worldwide",
    description: "Complete sourcing solutions from China to destinations across the globe. Premium quality, competitive pricing.",
  },
  {
    id: 2,
    image: heroImage2,
    subtitle: "End-to-End Project Management",
    title: "Your Vision,",
    highlight: "Our Expertise",
    description: "From concept to installation, we handle every aspect of your sourcing project with precision and care.",
  },
  {
    id: 3,
    image: heroImage3,
    subtitle: "Global Sourcing & Logistics",
    title: "Materials for Every",
    highlight: "Industry",
    description: "We source and deliver high-quality materials and equipment for hotels, villas, apartments, and industrial projects worldwide.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid="hero-section"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
            ? "opacity-100 scale-100"
            : "opacity-0 scale-105"
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute pointer-events-none"
                  }`}
              >
                {/* Subtitle Badge */}
                <div
                  className={`inline-flex items-center gap-2 bg-imex-red/20 backdrop-blur-sm border border-imex-red/30 text-white px-5 py-2 rounded-full mb-6 transition-all duration-700 delay-100 ${index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                >
                  <div className="w-2 h-2 bg-imex-red rounded-full animate-pulse" />
                  <span className="text-sm font-medium tracking-wide uppercase">
                    {slide.subtitle}
                  </span>
                </div>

                {/* Main Title */}
                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-200 ${index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                >
                  {slide.title}
                  <br />
                  <span className="text-imex-red">{slide.highlight}</span>
                </h1>

                {/* Description */}
                <p
                  className={`text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                >
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-imex-red hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 group"
                      data-testid="button-start-project"
                    >
                      <span>Start Your Project</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                      data-testid="button-view-portfolio"
                    >
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 group"
        aria-label="Previous slide"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 group"
        aria-label="Next slide"
        data-testid="button-next-slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-3 rounded-full transition-all duration-500 overflow-hidden ${index === currentSlide ? "w-12 bg-imex-red" : "w-3 bg-white/40 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`indicator-slide-${index}`}
          >
            {index === currentSlide && (
              <div
                className="absolute inset-0 bg-white/30 origin-left animate-progress"
                style={{ animationDuration: '6s' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-20 hidden lg:flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-white/50 animate-pulse" />
        <span className="text-white/60 text-xs uppercase tracking-widest rotate-0 whitespace-nowrap">
          Scroll
        </span>
      </div>
    </section>
  );
}
