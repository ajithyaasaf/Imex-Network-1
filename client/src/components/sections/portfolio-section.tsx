import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import project1 from "@assets/1_1758018043752.jpeg";
import project2 from "@assets/2_1758018043753.jpeg";
import project3 from "@assets/3_1758018043754.jpeg";
import project4 from "@assets/4_1758018043755.jpeg";
import project5 from "@assets/5_1758018043756.jpeg";
import project7 from "@assets/7_1758018043757.jpeg";
import project10 from "@assets/10_1758018043760.jpeg";
import project12 from "@assets/12_1758018043762.jpeg";

const portfolioCategories = [
  {
    id: "hospitals",
    title: "Hospital Projects",
    description: "End-to-End Sourcing for Advanced Healthcare Facilities",
    image: project4,
    route: "/projects/hospitals",
  },
  {
    id: "hotels",
    title: "Hotel & Resort Projects",
    description: "Creating Unforgettable Hospitality Experiences",
    image: project1,
    route: "/projects/hotels",
  },
  {
    id: "villas",
    title: "Villa & Apartment Developments",
    description: "Luxury Living Spaces with Premium Furnishings",
    image: project7,
    route: "/projects/villas",
  },
  {
    id: "institutes",
    title: "Institutes & Corporate Spaces",
    description: "Modern Solutions for Education and Business",
    image: project10,
    route: "/projects/institutes",
  },
  {
    id: "retail",
    title: "Branded Retail Outlets",
    description: "Bespoke Retail Environments that Embody Brand Identity",
    image: project12,
    route: "/projects/retail",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Section 1: Portfolio Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Portfolio of Executed Visions
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            IMEX has the expertise to deliver projects of any scale, across multiple industries.
            From hospitals to hotels, villas to retail outlets—we transform visions into reality
            with precision, quality, and unwavering commitment.
          </p>
        </div>

        {/* Section 2: The Project Showcase Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCategories.map((category, index) => (
            <Link key={category.id} href={category.route} data-testid={`link-project-${category.id}`}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer h-96"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                data-testid={`project-card-${category.id}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform transition-all duration-300 group-hover:translate-y-[-10px]">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Case Studies</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 border-4 border-imex-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
