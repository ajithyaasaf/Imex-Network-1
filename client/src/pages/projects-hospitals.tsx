import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@assets/4_1758018043755.jpeg";
import caseStudyImage from "@assets/5_1758018043756.jpeg";

export default function ProjectsHospitals() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="hero-title-hospitals">
              End-to-End Sourcing for<br />Advanced Healthcare Facilities
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              From medical equipment to patient comfort solutions, we source everything your hospital needs
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
                    alt="Hospital project case study"
                    className="rounded-2xl shadow-2xl w-full"
                    data-testid="case-study-image"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Multi-Specialty Hospital - Chennai
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">The Challenge</h4>
                      <p className="text-gray-600">
                        A 200-bed multi-specialty hospital needed complete furnishing and medical equipment within a tight 3-month deadline, with strict quality and compliance requirements.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">Our Solution</h4>
                      <p className="text-gray-600">
                        We deployed our comprehensive sourcing network to procure hospital beds, surgical equipment, and furnishings from certified manufacturers. Our team managed quality checks and coordinated delivery in phases.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-imex-red mb-2">The Result</h4>
                      <p className="text-gray-600">
                        Hospital opened on schedule with 100% compliance to medical standards. Client saved 30% on procurement costs while receiving premium quality equipment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h4>
                <blockquote className="text-lg text-gray-600 italic">
                  "IMEX transformed what could have been a logistical nightmare into a seamless experience. Their expertise in healthcare sourcing and attention to detail ensured we had everything we needed to open our doors on time."
                </blockquote>
                <p className="text-imex-red font-semibold mt-4">- Dr. Rajesh Kumar, Medical Director</p>
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
                Our comprehensive sourcing capabilities cover every aspect of hospital outfitting and equipment
              </p>

              <Tabs defaultValue="equipment" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8" data-testid="hospital-tabs">
                  <TabsTrigger value="equipment">Hospital Equipments</TabsTrigger>
                  <TabsTrigger value="canteen">Canteen</TabsTrigger>
                  <TabsTrigger value="office">Office</TabsTrigger>
                  <TabsTrigger value="garden">Garden</TabsTrigger>
                  <TabsTrigger value="washroom">Wash Room</TabsTrigger>
                  <TabsTrigger value="other">Other Items</TabsTrigger>
                </TabsList>

                <TabsContent value="equipment" className="space-y-3">
                  {['Motorised Beds', 'Surgeon Cap', 'Medicine Trolley', 'Surgical Lights', 'Anatomic Trolley', 'Ventilators', 'ECG Machines', 'Stretchers', 'Audiometer', 'Autoclave', 'ECO Machines', 'Defibrillators'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="canteen" className="space-y-3">
                  {['Tables', 'Chairs', 'Kitchen Setup', 'Service Trolley', 'Crockery', 'Decorative Items', 'Tea & Coffee Machine'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="office" className="space-y-3">
                  {['Doctor Consulting Table / Chairs', 'Patient Reception Table / Chairs', 'Office Chair', 'Lightings', 'Office Stationery', 'Wall Curtains'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="garden" className="space-y-3">
                  {['Outdoor Playground Equipment', 'Landscaping Materials', 'Artificial Plant / Grass', 'Gardening Tools', 'Bulk Lights & Bollards', 'Outdoor Hanging Lights', 'Dust Bins', 'Solar Lights'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="washroom" className="space-y-3">
                  {['Tiles', 'Mirror Glass', 'Wash Basin', 'Taps', 'Bathtub-Panel', 'Aesthetic-Commode', 'Shower-Enclosure', 'Waterproof Curtains', 'Soap Dispenser & Accessories'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-imex-red flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="other" className="space-y-3">
                  {['CCTV Cameras', 'Fire & Safety Equipments', 'Video Door Phones', 'Intercom', 'Building Management System', 'Boom Barriers', 'Led Video Walls', 'Lab & Library Equipment', 'Hardwares'].map((item, index) => (
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
                Ready to Build Your Healthcare Facility?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can help you source world-class medical equipment and furnishings
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-imex-red hover:bg-gray-100 text-lg px-8 py-6"
                  data-testid="button-contact-hospitals"
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
