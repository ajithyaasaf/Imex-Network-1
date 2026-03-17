import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Award, Star, Users, Globe2 } from "lucide-react";
import { animated, useSpring } from "@react-spring/web";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AchievementsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, isStatsVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px 0px 0px',
    triggerOnce: true
  });

  const statsAnimation = useSpring({
    opacity: isStatsVisible ? 1 : 0,
    transform: isStatsVisible ? "translateY(0px)" : "translateY(30px)",
    config: { tension: 250, friction: 40 },
  });

  const achievements = [
    {
      icon: Award,
      number: "19",
      label: "Years of Excellence",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: Users,
      number: "500+",
      label: "Projects Delivered",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Globe2,
      number: "15+",
      label: "Countries Served",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Star,
      number: "100%",
      label: "Client Satisfaction",
      color: "from-imex-red to-red-600"
    },
  ];



  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-50/50 to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-imex-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built on Trust, Proven by Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our reputation speaks through achievements, certifications, and countless successful partnerships across the globe
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {achievements.map((item, index) => (
            <animated.div
              key={index}
              style={statsAnimation}
              className="relative group"
            >
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 h-full flex flex-col items-center justify-center"
                data-testid={`achievement-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">{item.number}</h4>
                <p className="text-sm text-gray-600 font-medium text-center">{item.label}</p>
              </motion.div>
            </animated.div>
          ))}
        </div>


      </div>
    </section>
  );
}
