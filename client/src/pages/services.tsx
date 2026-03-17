import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import {
  Search,
  Building,
  ShoppingCart,
  Ship,
  FileCheck,
  Truck,
  Warehouse,
  Wrench,
  ArrowRight,
  Hotel,
  Home,
  Building2,
  CheckCircle,
  Clock,
  TrendingDown,
  Lightbulb,
  Plane,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import bannerImage from "@assets/1_1765189672715.png";

const services = [
  {
    id: 1,
    icon: Search,
    title: "Discuss Your Project",
    shortTitle: "Discuss",
    description:
      "Our expert team will discuss your requirements & budget",
    color: "from-imex-red to-red-600",
    step: "01",
  },
  {
    id: 2,
    icon: Building,
    title: "Our Service Offering",
    shortTitle: "Services",
    description:
      "We'll provide services and product list tailored to your needs",
    color: "from-imex-red to-red-600",
    step: "02",
  },
  {
    id: 3,
    icon: Plane,
    title: "China Visit",
    shortTitle: "Visit",
    description:
      "We plan your trip to China & provide you total assistance",
    color: "from-imex-red to-red-600",
    step: "03",
  },
  {
    id: 4,
    icon: ShoppingCart,
    title: "Purchasing",
    shortTitle: "Purchasing",
    description:
      "Our Experts Guide you and help to choose best products in the Wholesale Markets",
    color: "from-imex-red to-red-600",
    step: "04",
  },
  {
    id: 5,
    icon: CheckCircle,
    title: "Quality Check",
    shortTitle: "Quality",
    description:
      "Before make shipment we will conduct an A-Level Quality Check of all your Goods",
    color: "from-imex-red to-red-600",
    step: "05",
  },
  {
    id: 6,
    icon: Warehouse,
    title: "Consolidation Loading",
    shortTitle: "Loading",
    description:
      "After purchasing, we will collect & store your goods securely in our warehouse",
    color: "from-imex-red to-red-600",
    step: "06",
  },
  {
    id: 7,
    icon: Ship,
    title: "Shipping & Customs Clearance",
    shortTitle: "Shipping",
    description:
      "We provide affordable shipping and customs clearing process at destination port",
    color: "from-imex-red to-red-600",
    step: "07",
  },
  {
    id: 8,
    icon: Wrench,
    title: "Installation & Maintenance",
    shortTitle: "Installation",
    description:
      "Once the goods reach to you we can also offer complete installation",
    color: "from-imex-red to-red-600",
    step: "08",
  },
];

const projectTypes = [
  {
    id: "hotel",
    name: "Hotels & Hospitality",
    icon: Hotel,
    color: "bg-imex-red",
  },
  {
    id: "hospital",
    name: "Healthcare Facilities",
    icon: Building2,
    color: "bg-imex-red",
  },
  {
    id: "villa",
    name: "Villas & Residential",
    icon: Home,
    color: "bg-imex-red",
  },
];

export default function Services() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        {/* Professional Banner */}
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bannerImage})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10">
            <div className="container mx-auto px-6 py-24">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Our Process
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  Complete end-to-end sourcing and project solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Fulfillment Journey Ribbon */}
        <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  The IMEX-Process Chart
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Follow the path from sourcing to installation—every checkpoint
                  is a milestone in your success story
                </p>
              </div>
            </ScrollReveal>

            {/* Flowing Journey Path */}
            <div className="relative">
              {/* Curved SVG Path - Responsive across all breakpoints */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1200 2800"
                preserveAspectRatio="xMidYMin slice"
                style={{ minHeight: "100%" }}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#DC2626" />
                    <stop offset="50%" stopColor="#EF4444" />
                    <stop offset="100%" stopColor="#B91C1C" />
                  </linearGradient>
                </defs>
                <path
                  d="M 600 80 Q 650 160 700 200 C 750 320 800 420 850 536 C 900 652 700 760 600 872 C 500 984 550 1120 850 1208 C 1150 1296 700 1420 600 1544 C 500 1668 550 1804 850 1880 C 1150 1956 700 2080 600 2216 C 500 2352 550 2476 850 2552"
                  stroke="url(#gradient)"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="10 5"
                  opacity="0.3"
                  vectorEffect="non-scaling-stroke"
                  className="hidden md:block"
                />
                <path
                  d="M 600 80 L 600 2700"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="10 5"
                  opacity="0.3"
                  vectorEffect="non-scaling-stroke"
                  className="md:hidden"
                />
              </svg>

              {/* Journey Checkpoints */}
              <div className="relative space-y-8 md:space-y-16 lg:space-y-24">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  const isEven = index % 2 === 0;
                  const isHovered = hoveredService === service.id;

                  return (
                    <ScrollReveal key={service.id} delay={index * 100}>
                      <div
                        className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                        onMouseEnter={() => setHoveredService(service.id)}
                        onMouseLeave={() => setHoveredService(null)}
                        data-testid={`journey-checkpoint-${service.id}`}
                      >
                        {/* Content Side */}
                        <div
                          className={`w-full md:flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-left`}
                        >
                          <div
                            className={`inline-block w-full md:w-auto bg-gradient-to-br ${service.color} rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform ${isHovered ? "md:scale-105" : "scale-100"} backdrop-blur-sm`}
                          >
                            <div
                              className="flex items-start gap-3 md:gap-4"
                              style={{ flexDirection: isEven ? "row" : "row" }}
                            >
                              <div className="flex-1">
                                <div className="text-white/70 text-xs md:text-sm font-bold mb-1 md:mb-2">
                                  STEP {service.step}
                                </div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3">
                                  {service.title}
                                </h3>
                                <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                              <div className="bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 flex-shrink-0">
                                <IconComponent className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Center Checkpoint Circle */}
                        <div className="relative flex-shrink-0 order-first md:order-none">
                          <div
                            className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform transition-all duration-300 ${isHovered ? "md:scale-125 shadow-2xl" : "scale-100"}`}
                          >
                            <div className="text-white font-bold text-sm md:text-base lg:text-lg">
                              {service.step}
                            </div>
                          </div>
                          {isHovered && (
                            <div
                              className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.color} animate-ping opacity-75`}
                            />
                          )}
                        </div>

                        {/* Empty Side for Balance - Hidden on mobile */}
                        <div className="hidden md:block md:flex-1" />
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Cargo Console */}
        <section className="relative py-32 bg-gradient-to-br from-imex-gray via-gray-900 to-black dark:from-black dark:via-imex-gray dark:to-gray-900">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  “Your Goals – Our Mission”
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Select your project type to see how we tailor our services
                  specifically for you
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-6xl mx-auto">
              {/* Project Type Selector */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {projectTypes.map((project) => {
                  const ProjectIcon = project.icon;
                  const isSelected = selectedProject === project.id;

                  return (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className={`p-8 rounded-3xl border-2 transition-all duration-300 ${
                        isSelected
                          ? "border-imex-red bg-imex-red/10 scale-105 shadow-2xl"
                          : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                      }`}
                      data-testid={`project-type-${project.id}`}
                    >
                      <div
                        className={`w-16 h-16 ${project.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}
                      >
                        <ProjectIcon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg">
                        {project.name}
                      </h3>
                    </button>
                  );
                })}
              </div>

              {/* Tailored Service Sequence */}
              {selectedProject && (
                <ScrollReveal>
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                      Recommended Service Sequence for{" "}
                      {projectTypes.find((p) => p.id === selectedProject)?.name}
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      {services.slice(0, 6).map((service, idx) => {
                        const ServiceIcon = service.icon;
                        return (
                          <div
                            key={service.id}
                            className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/10 hover:border-imex-red/50 transition-all"
                          >
                            <div className="w-12 h-12 bg-gradient-to-br from-imex-red to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                              <ServiceIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-white/60 text-xs mb-1">
                              Step {idx + 1}
                            </div>
                            <div className="text-white font-semibold text-sm">
                              {service.shortTitle}
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-imex-red mx-auto mt-2" />
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-center mt-8">
                      <Button
                        variant="imex"
                        size="lg"
                        data-testid="button-get-custom-quote"
                      >
                        Get Custom Quote
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>

        {/* IMEX Impact Studio */}
        <section className="relative py-32 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  The IMEX Impact
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  See how we transform businesses globally with our
                  comprehensive solutions
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Time Saved",
                  icon: Clock,
                  desc: "Faster project completion",
                  color: "from-imex-red to-red-600",
                },
                {
                  title: "Cost Reduction",
                  icon: TrendingDown,
                  desc: "Lower procurement costs",
                  color: "from-imex-red to-red-600",
                },
                {
                  title: "Quality Assurance",
                  icon: Lightbulb,
                  desc: "Guaranteed satisfaction",
                  color: "from-imex-red to-red-600",
                },
              ].map((impact, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-inner group">
                    <impact.icon className={`w-10 h-10 text-imex-red transform transition-transform group-hover:scale-110 duration-300`} />
                  </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {impact.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {impact.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
