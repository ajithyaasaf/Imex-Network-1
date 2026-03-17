import { animated, useSpring } from "@react-spring/web";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function StatsSection() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px 0px 0px',
    triggerOnce: true
  });

  const statsAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(30px)",
    config: { tension: 250, friction: 40 },
  });

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 bg-gradient-to-br from-blue-50/30 via-white/50 to-purple-50/30 backdrop-blur-sm border-t border-white/20"
      data-testid="stats-section"
    >
      <animated.div
        style={statsAnimation}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center max-w-6xl mx-auto">
          <div
            className="bg-white/40 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/30 shadow-lg hover:bg-white/60 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            data-testid="stat-projects"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-imex-red mb-2">500+</h4>
            <p className="text-sm md:text-base text-gray-600">Projects Completed</p>
          </div>
          <div
            className="bg-white/40 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/30 shadow-lg hover:bg-white/60 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            data-testid="stat-shipments"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-imex-red mb-2">1500+</h4>
            <p className="text-sm md:text-base text-gray-600">Shipments Delivered Worldwide</p>
          </div>
          <div
            className="bg-white/40 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/30 shadow-lg hover:bg-white/60 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            data-testid="stat-ongoing"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-imex-red mb-2">10+</h4>
            <p className="text-sm md:text-base text-gray-600">Ongoing Projects</p>
          </div>
          <div
            className="bg-white/40 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/30 shadow-lg hover:bg-white/60 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            data-testid="stat-countries"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-imex-red mb-2">15+</h4>
            <p className="text-sm md:text-base text-gray-600">Countries Served</p>
          </div>

        </div>
      </animated.div>
    </section>
  );
}