import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@assets/1_1758018043752.jpeg";
import caseStudyImage from "@assets/2_1758018043753.jpeg";

export default function ProjectsHotels() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="hero-title-hotels">
              End-to-End Sourcing for<br />Unforgettable Hospitality Experiences
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Creating luxury hotels and resorts that leave lasting impressions on your guests
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
                <blockquote className="relative z-10 text-2xl md:text-3xl font-bold text-white leading-relaxed">
                  A ROOM SHOULD NEVER ALLOW THE EYE TO SETTLE IN ONE PLACE
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
                    alt="Hotel project case study"
                    className="rounded-2xl shadow-2xl w-full"
                    data-testid="case-study-image"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    5-Star Beach Resort - Maldives
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">The Challenge</h4>
                      <p className="text-gray-600">
                        A luxury beach resort needed complete furnishing for 150 rooms, restaurants, spa, and common areas while maintaining a cohesive tropical luxury aesthetic within a 4-month timeline.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">Our Solution</h4>
                      <p className="text-gray-600">
                        We curated a custom collection of weather-resistant outdoor seating, luxury bedding, and bespoke interior pieces. Our logistics team coordinated sea freight and on-site installation across the island location.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">The Result</h4>
                      <p className="text-gray-600">
                        Resort opened on schedule to rave reviews. Achieved 95% occupancy in first month with guests praising the exceptional design and comfort. Client awarded us their second property project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h4>
                <blockquote className="text-lg text-gray-600 italic">
                  "IMEX understood our vision for a tropical paradise and delivered beyond expectations. Their attention to detail and ability to source unique, high-quality pieces made all the difference."
                </blockquote>
                <p className="text-imex-red font-semibold mt-4">- Ahmed Hassan, Resort Owner</p>
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
                Complete hotel and resort outfitting solutions from guest rooms to public spaces
              </p>

              <Tabs defaultValue="rooms" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8" data-testid="hotel-tabs">
                  <TabsTrigger value="rooms">Hotel Room</TabsTrigger>
                  <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
                  <TabsTrigger value="banquet">Banquet Hall</TabsTrigger>
                  <TabsTrigger value="common">Common Items</TabsTrigger>
                </TabsList>

                <TabsContent value="rooms" className="space-y-3">
                  {['Bed, Mattress, Side Table', 'Dressing Stool, Mirror, Hand Stand', 'Wardrobe, Cloth Hanger', 'Lighting Unit, Reading Chair', 'Rust Chair, Carpet', 'TV Unit, Door Card Lock'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="restaurants" className="space-y-3">
                  {['Wash & Iron, Table, Chair', 'Curtain, LED TV, Tissue Box', 'Steam Iron, Water Dispenser', 'Hot Plate Lamp, Hot Dryer', 'Water Heater, Soaps', 'Shampoo, etc'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="banquet" className="space-y-3">
                  {['Table & Chair, Dance Floor', 'Buffet Table, VIP Seating', 'King Chair, Lighting Systems', 'Water Stand, Chandelier (Premium)', 'Stage, Projector'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="common" className="space-y-3">
                  {['Reception Table', 'Digital Controller', 'Key & Identity Card', 'Help Desk Table', 'Travel Desk Table', 'Swimming Pool Accessories', 'Air Humidifier', 'Wooden Flooring', 'Waiting Sofa', 'Carpet', 'Signage', 'WPC Flooring / Lam Flooring'].map((item, index) => (
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
                Ready to Build Your Next Landmark Hotel?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can create an unforgettable hospitality experience together
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-imex-red hover:bg-gray-100 text-lg px-8 py-6"
                  data-testid="button-contact-hotels"
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
