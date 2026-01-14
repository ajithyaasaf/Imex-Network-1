import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@assets/10_1758018043760.jpeg";
import caseStudyImage from "@assets/11_1758018043761.jpeg";

export default function ProjectsInstitutes() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="hero-title-institutes">
              Modern Solutions for<br />Education and Business Excellence
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Creating productive environments for learning and professional growth
            </p>
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
                    alt="Institute project case study"
                    className="rounded-2xl shadow-2xl w-full"
                    data-testid="case-study-image"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    International School Campus - Singapore
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">The Challenge</h4>
                      <p className="text-gray-600">
                        A new international school needed complete outfitting for 50 smart classrooms, libraries, labs, cafeteria, and outdoor play areas with modern, durable, and child-safe equipment.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">Our Solution</h4>
                      <p className="text-gray-600">
                        We sourced ergonomic student desks and seating, interactive digital boards, laboratory equipment, and safety-certified playground equipment. Our team ensured all items met international education standards.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">The Result</h4>
                      <p className="text-gray-600">
                        School opened to full enrollment with parents praising the modern facilities. All equipment passed safety inspections with flying colors. Client expanded partnership to their other campuses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h4>
                <blockquote className="text-lg text-gray-600 italic">
                  "IMEX delivered a world-class learning environment that sets us apart. Their understanding of educational needs and ability to source quality products within our budget was exceptional."
                </blockquote>
                <p className="text-imex-red font-semibold mt-4">- Margaret Chen, School Principal</p>
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
                Comprehensive solutions for educational institutions and corporate offices
              </p>

              <Tabs defaultValue="classroom" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8" data-testid="institute-tabs">
                  <TabsTrigger value="classroom">Class Room</TabsTrigger>
                  <TabsTrigger value="washroom">Washroom</TabsTrigger>
                  <TabsTrigger value="office">Office</TabsTrigger>
                  <TabsTrigger value="garden">Garden</TabsTrigger>
                  <TabsTrigger value="other">Other Items</TabsTrigger>
                </TabsList>

                <TabsContent value="classroom" className="space-y-3">
                  {['Smart Class Room', 'Digital Board', 'Black Display Stand', 'Bin Storage', 'Projector & Speaker', 'Projector', 'Lockers', 'Wi-fi', 'Mic & Speakers', 'Smart Equipment', 'Chair & Table', 'Smart Class'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="washroom" className="space-y-3">
                  {['Tiles', 'Mirror Glass', 'Wash Basin', 'Taps', 'Bathtub-Panel', 'Aesthetic-Commode', 'Bladeless Fans', 'Soap Dispenser & Accessories'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="office" className="space-y-3">
                  {['Office & Reception Tables', 'Office Chair', 'Lightings', 'Office Stationery', 'Wall Curtains', 'Sofas'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="garden" className="space-y-3">
                  {['Outdoor Playground Equipment', 'Landscaping Materials', 'Artificial Plant/Grass', 'Gardening Tools', 'Sandstone/PARICRC', 'Bulk Lights & Bollards', 'Outdoor Hanging Lights', 'Dust Bins', 'Swings', 'Led Lights'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="other" className="space-y-3">
                  {['CCTV Cameras', 'Fire & Safety Equipments', 'Video Door Phones', 'Intercom', 'Building Management System', 'Boom Barriers', 'Led Video Walls', 'Lab & Library Setup', 'Hardwares'].map((item, index) => (
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
                Ready to Create Inspiring Learning Environments?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can equip your institution or office for success
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-imex-red hover:bg-gray-100 text-lg px-8 py-6"
                  data-testid="button-contact-institutes"
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
