import {
  Search,
  Building,
  ShoppingCart,
  Ship,
  FileCheck,
  Truck,
  Warehouse,
  Wrench,
  Leaf,
} from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const services = [
  {
    id: 1,
    icon: Search,
    title: "PRODUCT SOURCING",
    description: "Expert identification and sourcing of quality products from trusted Chinese manufacturers",
  },
  {
    id: 2,
    icon: Building,
    title: "FACTORY / WHOLESALE MARKET ASSISTANCE",
    description: "Complete guidance and support for factory visits and wholesale market connections",
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "PRODUCT PURCHASING",
    description: "Professional procurement services with expert negotiation and quality assurance",
  },
  {
    id: 4,
    icon: Warehouse,
    title: "WAREHOUSING & CONSOLIDATION SERVICES",
    description: "Secure storage and consolidation services for optimal shipping efficiency",
  },
  {
    id: 5,
    icon: Ship,
    title: "SHIPPING TO YOUR DESTINATION",
    description: "Reliable and efficient shipping services to deliver your goods safely worldwide",
  },
  {
    id: 6,
    icon: FileCheck,
    title: "IMPORT & CLEARING",
    description: "Complete customs clearance and import documentation handling at destination",
  },
  {
    id: 7,
    icon: Truck,
    title: "DOOR STEP DELIVERY",
    description: "Final mile delivery directly to your project location with care and precision",
  },
  {
    id: 8,
    icon: Wrench,
    title: "INSTALLATION & MAINTENANCE",
    description: "Professional installation services and ongoing maintenance support for your peace of mind",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative min-h-screen">
      {/* Top Wave SVG */}
      <div className="absolute top-0 left-0 w-full z-20">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C400,120 800,120 1200,60 L1200,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Main IMEX Red Background with Content */}
      <div className="bg-imex-red relative pt-16 pb-24 min-h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M0 100 Q50 50 100 100 T200 100" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            {/* Header Section */}
            <div className="text-center mb-16">
              {/* Small Leaf Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-white bg-opacity-20 rounded-full p-3">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-our-services-title">
                Our Services
              </h2>

              {/* Description */}
              <p className="text-white text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                Complete end-to-end solutions for your global sourcing and project needs
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-center">
              {services.map((service, index) => {
                const IconComponent = service.icon;

                return (
                  <ScrollReveal key={service.id} delay={index * 100}>
                    <div
                      className="bg-white text-gray-800 rounded-2xl overflow-hidden hover-lift transition-all duration-300 w-full max-w-sm mx-auto relative border border-gray-100 shadow-lg hover:shadow-xl h-[280px] flex flex-col transform hover:scale-[1.02]"
                      data-testid={`service-card-${service.id}`}
                    >
                      {/* White Circle with Icon */}
                      <div className="flex justify-center pt-6 pb-4">
                        <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg ring-4 ring-gray-50">
                          <IconComponent
                            className="w-10 h-10 text-imex-red"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="px-4 pb-6 flex-1 flex flex-col justify-center">
                        <div className="text-center">
                          <h3 className="text-xs md:text-base font-bold mb-3 tracking-wide uppercase leading-tight break-words">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C400,0 800,0 1200,60 L1200,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
