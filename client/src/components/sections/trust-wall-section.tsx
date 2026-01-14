import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Award, Shield, Star, CheckCircle2, Users, Clock } from "lucide-react";

export default function TrustWallSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Award,
      number: "15+",
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
      icon: Star,
      number: "100%",
      label: "Client Satisfaction",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Shield,
      number: "ISO",
      label: "Certified Quality",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const certifications = [
    "Quality Management ISO 9001",
    "Environmental ISO 14001",
    "Export Excellence Award",
    "Trusted Import Partner",
    "Green Business Certified",
    "Customer Service Excellence"
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built on Trust, Delivered with Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our reputation speaks through numbers, certifications, and countless successful partnerships
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, rotate: -10 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${item.color} p-8 rounded-3xl text-white shadow-2xl transform group-hover:scale-105 transition-all duration-300`}>
                <item.icon className="w-12 h-12 mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">{item.number}</div>
                <div className="text-sm font-medium opacity-90">{item.label}</div>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-900 to-imex-red rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Certifications & Recognition
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 flex items-center gap-4 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <Clock className="w-12 h-12 text-imex-red mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 italic">
              "In 15 years, we've learned that trust isn't given – it's earned with every shipment, every relationship, and every promise kept."
            </blockquote>
            <p className="mt-6 text-lg text-gray-600 font-semibold">— IMEX Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
