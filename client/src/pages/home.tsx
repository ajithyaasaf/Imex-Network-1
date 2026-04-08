import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import StatsSection from "@/components/sections/stats-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import MarketsSection from "@/components/sections/markets-section";
import GallerySection from "@/components/sections/gallery-section";
import MdProfileSection from "@/components/sections/md-profile-section";
import TrustedBySection from "@/components/sections/trusted-by-section";
import FAQSection from "@/components/sections/faq-section";
import { Link } from "wouter";
import { Users, Rocket, Trophy, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <GallerySection />
        <MdProfileSection />
        <TrustedBySection />

        {/* Quick Access Section */}
        <section className="py-20 bg-gradient-to-br from-blue-100/40 via-purple-50/30 to-pink-50/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                Explore Our World
              </h2>
              <p className="text-lg text-gray-600 mb-16 max-w-4xl mx-auto">
                Discover how IMEX can transform your business with our
                comprehensive suite of global solutions
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                <Link href="/who-we-are">
                  <div className="group bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl p-8 hover:bg-white/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col h-full">
                    <div className="flex-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-imex-red to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg">
                        <Users className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                        Who We Are
                      </h3>
                    </div>

                    <div className="flex-1 text-center">
                      <p className="text-gray-700 text-lg mb-6">
                        Discover our story, values, and the passion that drives
                        us forward
                      </p>
                    </div>

                    <div className="mt-6 text-imex-red font-semibold group-hover:translate-x-2 transition-transform inline-block self-center">
                      Learn More →
                    </div>
                  </div>
                </Link>

                <Link href="/services">
                  <div className="group bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl p-8 hover:bg-white/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col h-full">
                    <div className="flex-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-imex-red to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg">
                        <Rocket className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                        Services
                      </h3>
                    </div>

                    <div className="flex-1 text-center">
                      <p className="text-gray-700 text-lg mb-6">
                        Comprehensive solutions that transform businesses
                        globally
                      </p>
                    </div>

                    <div className="mt-6 text-imex-red font-semibold group-hover:translate-x-2 transition-transform inline-block self-center">
                      Explore Services →
                    </div>
                  </div>
                </Link>

                <Link href="/portfolio">
                  <div className="group bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl p-8 hover:bg-white/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col h-full">
                    <div className="flex-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-imex-red to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg">
                        <Trophy className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                        Portfolio
                      </h3>
                    </div>

                    <div className="flex-1 text-center">
                      <p className="text-gray-700 text-lg mb-6">
                        Success stories and case studies from around the world
                      </p>
                    </div>

                    <div className="mt-6 text-imex-red font-semibold group-hover:translate-x-2 transition-transform inline-block self-center">
                      View Projects →
                    </div>
                  </div>
                </Link>

                <Link href="/contact">
                  <div className="group bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl p-8 hover:bg-white/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col h-full">
                    <div className="flex-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-imex-red to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg">
                        <MessageCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                        Contact
                      </h3>
                    </div>

                    <div className="flex-1 text-center">
                      <p className="text-gray-700 text-lg mb-6">
                        Ready to start your project? Let's connect and make it
                        happen
                      </p>
                    </div>

                    <div className="mt-6 text-imex-red font-semibold group-hover:translate-x-2 transition-transform inline-block self-center">
                      Get Started →
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        <MarketsSection />
        <FAQSection />

        {/* Call-to-Action Section */}
        <section className="py-20 bg-gradient-to-r from-imex-red via-red-600 to-red-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-12 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                  Ready to Go Global?
                </h2>
                <p className="text-xl opacity-90 mb-12 leading-relaxed text-white">
                  Join hundreds of successful businesses that trust IMEX for
                  their international expansion
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-imex-red font-semibold rounded-2xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/30">
                      Start Your Journey
                    </button>
                  </Link>
                  <Link href="/portfolio">
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300">
                      See Success Stories
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
