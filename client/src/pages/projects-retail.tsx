import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@assets/12_1758018043762.jpeg";
import caseStudyImage from "@assets/13_1758018043763.jpeg";

export default function ProjectsRetail() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="hero-title-retail">
              Bespoke Retail Environments<br />that Embody Brand Identity
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Creating retail spaces that captivate customers and elevate your brand
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
                    alt="Retail project case study"
                    className="rounded-2xl shadow-2xl w-full"
                    data-testid="case-study-image"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Fashion Retail Chain - 15 Outlets
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">The Challenge</h4>
                      <p className="text-gray-600">
                        A luxury fashion brand needed to launch 15 retail outlets simultaneously across major cities with consistent branding, custom fixtures, and premium finishes while meeting tight opening deadlines.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">Our Solution</h4>
                      <p className="text-gray-600">
                        We designed a standardized sourcing package with custom display units, lighting systems, and branded fixtures. Coordinated parallel execution across all locations with local installation teams.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">The Result</h4>
                      <p className="text-gray-600">
                        All 15 outlets launched on schedule with perfect brand consistency. Achieved 25% cost savings through bulk procurement. Customer foot traffic exceeded projections by 35% in first quarter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h4>
                <blockquote className="text-lg text-gray-600 italic">
                  "IMEX transformed our retail expansion from a daunting challenge into a seamless success. Their ability to deliver consistent quality across multiple locations simultaneously was truly remarkable."
                </blockquote>
                <p className="text-imex-red font-semibold mt-4">- Priya Sharma, Retail Director</p>
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
                Complete retail outlet solutions from store fixtures to branded elements
              </p>

              <Tabs defaultValue="common" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8" data-testid="retail-tabs">
                  <TabsTrigger value="common">Common Items</TabsTrigger>
                  <TabsTrigger value="furnishings">Furnishings</TabsTrigger>
                  <TabsTrigger value="washroom">Washroom</TabsTrigger>
                </TabsList>

                <TabsContent value="common" className="space-y-3">
                  {['Lighting', 'Carpets', 'Decorative Items', 'Floating Fixtures', 'Wallpapers', 'Curtains'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="furnishings" className="space-y-3">
                  {['Reception Table', 'Counter Table', 'Chairs', 'Wall Panelling', 'Modular Fixtures'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="washroom" className="space-y-3">
                  {['Wash Basin', 'Taps', 'Shower Panel', 'Toilet / Commode', 'Mirror', 'Bladeless Fans', 'Jacuzzi', 'Soap Dispenser & Accessories'].map((item, index) => (
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
                Ready to Create a Captivating Retail Experience?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can bring your retail vision to life with precision and style
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-imex-red hover:bg-gray-100 text-lg px-8 py-6"
                  data-testid="button-contact-retail"
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
