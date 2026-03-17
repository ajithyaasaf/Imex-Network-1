import { Shield, Truck, Heart, Play, Pause, Target, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import brandVideo from "@assets/A_cinematic_corporate_202510071258_skmyi_1759822210231.mp4";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface AboutSectionProps {
  hideVideoSection?: boolean;
}

export default function AboutSection({ hideVideoSection = false }: AboutSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-white scroll-mt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-imex-red/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-imex-red/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section 1: The Founder's Vision */}
        {!hideVideoSection && (
          <motion.div
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                More Than a Sourcing Company
                <br />
                We're Your Partners in Creation
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  We started <span className="text-imex-red font-semibold">IMEX</span> with one goal: to make international sourcing easy for everyone.
                </p>
                <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                  We know how difficult it can be to find reliable partners and keep quality high. That’s why we handle all the hard parts of importing—so you can focus on growing your business with confidence.
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div
                className="relative group rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                onClick={togglePlay}
              >
                <video
                  ref={videoRef}
                  src={brandVideo}
                  className="w-full h-[500px] object-cover"
                  loop
                  playsInline
                  data-testid="founder-vision-video"
                />

                {/* Custom Centered Play Button */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"} bg-black/30 group-hover:bg-black/40`}
                >
                  <button
                    className="w-20 h-20 rounded-full bg-imex-red/90 hover:bg-imex-red flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl"
                    data-testid="button-play-brand-film"
                    aria-label="Play brand film"
                  >
                    <Play className="w-10 h-10 text-white ml-1" />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                  <p className="text-white text-lg font-semibold">
                    Watch Our Brand Film: The IMEX Story
                  </p>
                  <p className="text-white/80 text-sm">
                    Our journey of excellence and partnership
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Vision, Mission, and Team Pride */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="vision-card"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-imex-red to-red-600 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted global sourcing partner, known for delivering exceptional value, reliability, and innovation to clients worldwide.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="mission-card"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-imex-red to-red-600 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To simplify international sourcing by providing seamless, transparent, and high-quality procurement solutions that empower our clients to succeed.
              </p>
            </motion.div>

            {/* Team Pride */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="team-pride-card"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-imex-red to-red-600 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Team Pride
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We take pride in our dedicated team of sourcing experts who combine local knowledge with global expertise to exceed client expectations every time.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Section 2: The IMEX Commitment */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The IMEX Commitment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our promises to you, designed to ensure your success at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Commitment 1 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col items-center justify-center text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="commitment-quality"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-imex-red to-red-600 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                A Commitment to Timeless Quality
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                We provide high-quality items that are built to last.
                Every product we source is chosen to help your business
                succeed and provide the best value for your money.
              </p>
            </motion.div>

            {/* Commitment 2 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col items-center justify-center text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="commitment-execution"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-imex-red to-red-600 flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                A Commitment to Seamless Execution
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                Buying from overseas is often hard, but we make it easy.
                Our team handles everything from finding products to final
                delivery, so you have a stress-free experience.
              </p>
            </motion.div>

            {/* Commitment 3 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col items-center justify-center text-center"
              whileHover={{ scale: 1.05 }}
              data-testid="commitment-partnership"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-imex-red to-red-600 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                A Commitment to Unwavering Partnership
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                Your success is our priority. We offer honest advice
                and keep you updated every step of the way. We are
                your trusted partner from start to finish.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
