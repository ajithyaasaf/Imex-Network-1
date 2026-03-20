import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProcessSection from "@/components/sections/process-section";
import CulturalBridgeSection from "@/components/sections/cultural-bridge-section";
import AchievementsSection from "@/components/sections/achievements-section";
import bannerImage from "@assets/1_1765189672715.png";
import { 
  Search, 
  Handshake, 
  CircleDollarSign, 
  FileText, 
  Landmark, 
  ShieldCheck, 
  Truck 
} from "lucide-react";

// Import Framer Motion for modern animations
import { motion } from "framer-motion";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
};

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <Header />
      <main>

        {/* Parallax-style Banner */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bannerImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

          <div className="relative z-10 container mx-auto px-6 py-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                Who We Are
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl opacity-90 leading-relaxed font-light">
                Built on 19 years of expertise, IMEX bridges global supply gaps with comprehensive sourcing, quality-driven procurement, and end-to-end trade solutions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Animated Value Proposition */}
        <section className="py-24 bg-white relative">
          {/* Decorative Background Blob */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />

          <div className="container mx-auto px-6 relative z-10">

            {/* Intro Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto text-center mb-24"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Your Global Import, Export & Sourcing Partner
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                IMEX provides comprehensive, end-to-end solutions for importing goods from China's thriving markets to businesses worldwide. We offer A-to-Z services, ensuring smooth and efficient product sourcing and delivery to any destination.
              </p>
            </motion.div>

            {/* Staggered Grid for Services */}
            <div className="mb-32">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h3 className="text-4xl font-bold text-gray-900 inline-block relative">
                  A True One-Stop Solution
                  <span className="absolute -bottom-4 left-1/2 w-12 h-1 bg-red-600 rounded-full -translate-x-1/2"></span>
                </h3>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
              >
                {[
                  { title: "Sourcing", desc: "Finding the right suppliers and products", icon: Search },
                  { title: "Trade Leads", desc: "Connecting you with quality markets", icon: Handshake },
                  { title: "Pricing", desc: "Competitive wholesale rates", icon: CircleDollarSign },
                  { title: "Legal Formalities", desc: "Complete documentation support", icon: FileText },
                  { title: "Taxes & Customs", desc: "Hassle-free clearance duties", icon: Landmark },
                  { title: "Quality Assurance", desc: "Rigorous product inspection", icon: ShieldCheck },
                  { title: "Logistics & Delivery", desc: "Reliable door-to-door solutions", icon: Truck },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    variants={popIn}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.1)] border border-gray-100 transition-all duration-300"
                  >
                    <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={44} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-500 text-base leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Global Reach Animated Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-6xl mx-auto bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Side (Dark) */}
                <div className="md:w-5/12 p-12 md:p-16 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
                  <h3 className="text-4xl font-bold text-white mb-6 relative z-10">Our Global Reach</h3>
                  <p className="text-gray-400 leading-relaxed text-lg relative z-10">
                    With a strong global presence, we ensure personalized service, uncompromised quality, and efficient execution no matter where you are.
                  </p>
                </div>

                {/* Right Side (Light) */}
                <div className="md:w-7/12 p-12 md:p-16 flex flex-col justify-center bg-white">
                  <p className="text-gray-400 font-bold mb-8 uppercase tracking-widest text-sm">
                    Proudly Serving Clients Across
                  </p>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-4"
                  >
                    {[
                      "India", "USA", "Canada", "Middle East",
                      "Maldives", "South Pacific Islands", "Europe"
                    ].map((region, index) => (
                      <motion.span
                        key={index}
                        variants={popIn}
                        whileHover={{ scale: 1.05, backgroundColor: "#fee2e2", color: "#dc2626" }}
                        className="px-6 py-3 bg-gray-50 border border-gray-100 text-gray-700 rounded-2xl text-sm font-bold transition-colors cursor-default shadow-sm"
                      >
                        {region}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        <AchievementsSection />
        <CulturalBridgeSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}