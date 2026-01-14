import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Package, Ship, Plane, Truck, CheckCircle } from "lucide-react";

export default function JourneyVisualizationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const journeySteps = [
    {
      icon: Package,
      title: "Manufacturing",
      location: "Foshan, China",
      description: "Premium goods crafted with precision",
      color: "bg-blue-500"
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      location: "Factory Inspection",
      description: "Rigorous testing and verification",
      color: "bg-green-500"
    },
    {
      icon: Ship,
      title: "Shipping",
      location: "Ocean/Air Freight",
      description: "Secure international logistics",
      color: "bg-cyan-500"
    },
    {
      icon: Plane,
      title: "Customs",
      location: "Port Clearance",
      description: "Swift documentation processing",
      color: "bg-purple-500"
    },
    {
      icon: Truck,
      title: "Delivery",
      location: "Your Doorstep",
      description: "Final mile to your project",
      color: "bg-imex-red"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-imex-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Project's Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Chinese craftsmanship to your dream project – every step managed with care
          </p>
        </motion.div>

        {/* Journey Timeline - Desktop */}
        <div className="hidden md:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-imex-red"></div>

          <div className="grid grid-cols-5 gap-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Icon Circle */}
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-imex-red font-semibold mb-3">{step.location}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Connector Dot */}
                <div className={`absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 ${step.color} rounded-full border-4 border-white z-20`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Timeline - Mobile */}
        <div className="md:hidden space-y-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-imex-red font-semibold mb-2">{step.location}</p>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-imex-red to-red-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let us handle the complexity while you focus on creating amazing spaces
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-imex-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
              data-testid="link-start-project"
            >
              Start Your Journey
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
