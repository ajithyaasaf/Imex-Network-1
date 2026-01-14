import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PortfolioSection from "@/components/sections/portfolio-section";
import bannerImage from "@assets/1_1765189672715.png";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
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
                  Portfolio
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  Showcasing success stories from around the globe
                </p>
              </div>
            </div>
          </div>
        </section>

        <PortfolioSection />

        {/* Interactive Case Studies Timeline */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Success Timeline
                </h2>
                <p className="text-lg text-gray-600">
                  Explore our journey of delivering exceptional results across
                  different industries
                </p>
              </div>

              {/* Radial Timeline */}
              <div className="relative flex flex-col items-center">
                {/* Central Circular Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-imex-red rounded-full border-8 border-white shadow-2xl flex items-center justify-center z-0">
                  <span className="text-white font-bold text-sm">
                    Our Journey
                  </span>
                </div>

                <div className="relative space-y-16 w-full">
                  {/* Timeline Item 1 */}
                  <div className="relative flex justify-center">
                    <div className="w-full md:w-2/5 relative group">
                      <div className="bg-gradient-to-r from-imex-red to-red-600 text-white rounded-3xl p-8 shadow-xl transform transition-all duration-500 group-hover:rotate-3 group-hover:shadow-2xl">
                        <h3 className="text-xl font-semibold mb-3">
                          Luxury Hotel Furnishing
                        </h3>
                        <p className="mb-4 opacity-90">
                          Complete sourcing for 150-room beach resort including guest rooms, restaurants, and banquet facilities
                        </p>
                        <div className="text-sm font-semibold">
                          2024 • Hospitality
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-full w-16 h-2 bg-imex-red transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 left-full w-6 h-6 bg-white rounded-full border-4 border-imex-red shadow-lg transform translate-x-16 -translate-y-1/2"></div>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative flex justify-center">
                    <div className="w-full md:w-2/5 relative group">
                      <div className="bg-gradient-to-r from-imex-red to-red-600 text-white rounded-3xl p-8 shadow-xl transform transition-all duration-500 group-hover:-rotate-3 group-hover:shadow-2xl">
                        <h3 className="text-xl font-semibold mb-3">
                          Multi-Specialty Hospital Equipment
                        </h3>
                        <p className="mb-4 opacity-90">
                          Sourced hospital beds and medical equipment for 200-bed facility within 3-month deadline
                        </p>
                        <div className="text-sm font-semibold">
                          2023 • Healthcare
                        </div>
                      </div>
                      <div className="absolute top-1/2 right-full w-16 h-2 bg-imex-red transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 right-full w-6 h-6 bg-white rounded-full border-4 border-imex-red shadow-lg transform -translate-x-16 -translate-y-1/2"></div>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative flex justify-center">
                    <div className="w-full md:w-2/5 relative group">
                      <div className="bg-gradient-to-r from-imex-red to-red-600 text-white rounded-3xl p-8 shadow-xl transform transition-all duration-500 group-hover:rotate-3 group-hover:shadow-2xl">
                        <h3 className="text-xl font-semibold mb-3">
                          Premium Villa Project
                        </h3>
                        <p className="mb-4 opacity-90">
                          Complete home furnishing from living room to garden including smart home systems and custom fixtures
                        </p>
                        <div className="text-sm font-semibold">
                          2023 • Residential
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-full w-16 h-2 bg-imex-red transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 left-full w-6 h-6 bg-white rounded-full border-4 border-imex-red shadow-lg transform translate-x-16 -translate-y-1/2"></div>
                    </div>
                  </div>
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


