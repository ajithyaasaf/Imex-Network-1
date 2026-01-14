import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Building2, Globe2, Handshake, TrendingUp } from "lucide-react";

export default function CulturalBridgeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const bridgeVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, delay: 0.5 }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-imex-red to-slate-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Building Bridges Across Continents
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            IMEX doesn't just import products – we connect cultures, craft relationships, and create possibilities
          </motion.p>
        </div>

        {/* The Bridge Visual */}
        <div className="max-w-6xl mx-auto">
          <div className="relative h-64 flex items-center justify-between">
            {/* China Side */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center z-20"
            >
              <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border-4 border-white/40">
                <Building2 className="w-16 h-16 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">China</h3>
                <p className="text-white/80 text-sm">Manufacturing<br />Excellence</p>
              </div>
            </motion.div>

            {/* The Bridge */}
            <div className="absolute left-32 right-32 top-1/2 -translate-y-1/2 h-1 flex items-center">
              <motion.div
                variants={bridgeVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full h-2 bg-gradient-to-r from-white via-amber-300 to-white rounded-full origin-left"
              />

              {/* IMEX Logo in the middle */}
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-20 h-20 bg-imex-red rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              {/* Flowing particles */}
              <motion.div
                animate={{ x: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute w-4 h-4 bg-white rounded-full blur-sm"
              />
            </div>

            {/* Global Clients Side */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center z-20"
            >
              <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border-4 border-white/40">
                <Globe2 className="w-16 h-16 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Global</h3>
                <p className="text-white/80 text-sm">Premium<br />Projects</p>
              </div>
            </motion.div>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: TrendingUp,
                title: "Quality Assurance",
                description: "Rigorous inspection at every manufacturing stage"
              },
              {
                icon: Handshake,
                title: "Trust & Transparency",
                description: "Building lasting partnerships through honesty"
              },
              {
                icon: Globe2,
                title: "Global Reach",
                description: "Seamless delivery from Foshan to your doorstep"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
