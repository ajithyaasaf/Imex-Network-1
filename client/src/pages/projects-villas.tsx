import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@assets/7_1758018043757.jpeg";
import caseStudyImage from "@assets/8_1758018043758.jpeg";

export default function ProjectsVillas() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="hero-title-villas">
              Personal Flat / Bungalow /<br />Villa Project
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Outfitting villas and apartments with world-class fixtures and high-end amenities
            </p>
          </div>
        </section>

        {/* Signature Quote */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-r from-imex-red to-red-600 rounded-3xl p-12 text-center shadow-2xl">
                <div className="absolute top-0 left-0 text-white/20 text-8xl font-serif -mt-4 ml-4">"</div>
                <div className="absolute bottom-0 right-0 text-white/20 text-8xl font-serif -mb-4 mr-4">"</div>
                <blockquote className="relative z-10 text-xl md:text-2xl font-bold text-white leading-relaxed">
                  Planning to decorate your home from China? You're in the best hands. We provide all your needed items in one place, saving you valuable time while a villa or flat options under one roof.
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Case Study</h2>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <img
                    src={caseStudyImage}
                    alt="Villa project case study"
                    className="rounded-2xl shadow-2xl w-full"
                    data-testid="case-study-image"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Luxury Villa Development - Dubai
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">The Challenge</h4>
                      <p className="text-gray-600">
                        A developer needed to furnish 25 luxury villas with high-end interiors, smart home systems, outdoor amenities, and premium fixtures while maintaining consistent quality across all units.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">Our Solution</h4>
                      <p className="text-gray-600">
                        We created a comprehensive sourcing plan covering interiors, smart home technology, pool equipment, and security systems. Coordinated bulk procurement with volume discounts and phased delivery.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">The Result</h4>
                      <p className="text-gray-600">
                        All 25 villas completed within budget and ahead of schedule. Properties sold 40% faster than market average due to premium finishes. Developer secured repeat business for their next project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h4>
                <blockquote className="text-lg text-gray-600 italic">
                  "IMEX's ability to source premium products at competitive prices while maintaining impeccable quality standards helped us achieve exceptional profit margins. They're now our go-to partner for all developments."
                </blockquote>
                <p className="text-imex-red font-semibold mt-4">- Sarah Al-Rashid, Property Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Sourcing Capabilities */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Everything You Need, Sourced with Precision
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Complete residential development solutions from interiors to outdoor amenities
              </p>

              <Tabs defaultValue="living" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8" data-testid="villa-tabs">
                  <TabsTrigger value="living">Living Room</TabsTrigger>
                  <TabsTrigger value="bedroom">Bed Room</TabsTrigger>
                  <TabsTrigger value="garden">Garden</TabsTrigger>
                  <TabsTrigger value="bathroom">Bathroom</TabsTrigger>
                  <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
                  <TabsTrigger value="clubhouse">Club House</TabsTrigger>
                </TabsList>

                <TabsContent value="living" className="space-y-3">
                  {['Sofa, Pop Lights', 'Coffee Table, Couch/Outdoor Lights', 'TV Unit, Carpet', 'Shoe Rack, Wallpapers', 'Bean Bags, Blinds/Curtains', 'Wallpapers'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="bedroom" className="space-y-3">
                  {['King/Queen/Kids Size Beds', 'Bed Front Tables', 'Wardrobes', 'Mirror', 'Reading Chair', 'Side Table/Chandelier', 'Doors/Windows'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="garden" className="space-y-3">
                  {['Swimming Pool Crate', 'Sun & Benches', 'Pole Lights & Bollards', 'Landscaping Materials', 'Artificial Plant / Grass', 'Pool Lighting, Boom Barriers', 'Led Lights', 'Barbecue Machine', 'Outdoor Coffee Table/Chairs', 'Swings', 'Gazebo'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="bathroom" className="space-y-3">
                  {['Wash Basin', 'Taps', 'Shower Panel', 'Bathtub', 'Toilet / Commode', 'Mirror', 'Bladeless Fans', 'Jacuzzi'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="kitchen" className="space-y-3">
                  {['Dining Table', 'Chairs', 'Serving Table', 'Kitchen Cup & Board', 'Sink', 'Barbeque Machine', 'Fridge', 'Hardwares'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="clubhouse" className="space-y-3">
                  {['Entrance Decoration', 'Fountains', 'Reception Chair', 'Mini Reception', 'Towels', 'Sauna Room', 'Jacuzzi', 'Acoustic Walls'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-imex-red to-red-700 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Create Luxury Living Spaces?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can furnish your residential development with premium quality
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-imex-red hover:bg-gray-100 text-lg px-8 py-6"
                  data-testid="button-contact-villas"
                >
                  Let's Talk
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
