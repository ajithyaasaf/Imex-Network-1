import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import ProcessSection from "@/components/sections/process-section";
import MarketsSection from "@/components/sections/markets-section";
import CulturalBridgeSection from "@/components/sections/cultural-bridge-section";
import AchievementsSection from "@/components/sections/achievements-section";
import bannerImage from "@assets/1_1765189672715.png";

export default function WhoWeAre() {
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
                  Who We Are
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  Discover the passion, expertise, and global vision that drives IMEX forward
                </p>
              </div>
            </div>
          </div>
        </section>


        <AchievementsSection />
        <CulturalBridgeSection />
        <ProcessSection />
        <MarketsSection />
      </main>
      <Footer />
    </div>
  );
}
