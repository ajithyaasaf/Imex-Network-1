import React from "react";
import { Quote, User } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

// A placeholder image is used here. You can swap this with the actual photo of Mr. Ayas.
import mdImage from "@/assets/Profile.png";

export default function MdProfileSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Visual Side (Left) */}
            <div className="w-full lg:w-1/2 relative">
              <ScrollReveal>
                {/* Accent Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-imex-red/10 to-purple-100 rounded-3xl transform -rotate-3 scale-105 z-0"></div>

                {/* Image Container */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white">
                  <img
                    src={mdImage}
                    alt="Ayas - Managing Director, IMEX"
                    className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[4/5]"
                  />
                  {/* Overlay Gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg">
                    <div className="w-10 h-10 bg-imex-red/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-imex-red" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Ayas</div>
                      <div className="text-xs text-gray-600">Managing Director</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Content Side (Right) */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal delay={0.2}>

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 bg-imex-red/10 text-imex-red px-4 py-1.5 rounded-full mb-6">
                  <User className="w-4 h-4 fill-current" />
                  <span className="font-bold text-xs uppercase tracking-wider">Leadership</span>
                </div>

                {/* The Hook (Quote) */}
                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-gray-100 rotate-180 z-0" />
                  <h3 className="relative z-10 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    "Delivering high-quality results and building strong partnerships."
                  </h3>
                </div>

                {/* The Story */}
                <div className="space-y-4 text-gray-600 text-lg mb-10">
                  <p>
                    At IMEX, we believe that real success comes from trust, top-quality work, and always finding better ways to do things. From day one, our goal has been to give businesses the best solutions to help them grow and succeed.
                  </p>
                  <p>
                    We care deeply about your vision in every project we take on. We don't just supply materials; we work closely with you to bring your big ideas to life. By combining our worldwide experience with local knowledge, we make sure everything we do meets the highest standards.
                  </p>
                </div>

                {/* Closing Thought / Signature Quote */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-xl font-medium text-gray-800 italic">
                    "Your vision, built with the best materials from around the world."
                  </p>
                </div>

              </ScrollReveal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
