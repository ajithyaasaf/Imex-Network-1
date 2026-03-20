import { MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

import louvreImage from "@assets/image_1758018958649.png";
import sunlinkImage from "@assets/sunlink_foshan.jpg";
import lightingMallImage from "@assets/image_1758019255009.png";
import ceramicMarketImage from "@assets/image_1758019628663.png";
import householdMallImage from "@assets/image_1758020801859.png";
import marbleMarketImage from "@assets/image_1758020899691.png";
import futianMarketImage from "@assets/image_1758021069443.png";
import medicalEquipmentImage from "@assets/image_1758021212121.png";

const chinaMarkets = [
  {
    id: 1,
    name: "Louvre Sourcing Hub",
    location: "Foshan Shunde",
    description:
      "A world-renowned hub for high-end and luxury items, offering a vast selection from top-tier brands.",
    specialty: "Premium products and luxury home furnishings",
    advantage: "Access to exclusive designer collections and wholesale pricing on luxury items",
    image: louvreImage,
  },
  {
    id: 2,
    name: "Sunlink Furniture Market",
    location: "Lecong Foshan",
    description:
      "A major furniture sourcing hub in Foshan, known for its extensive range of mid-to-high-end furniture and sofa bases.",
    specialty: "Mid-to-high-end residential and office furniture sourcing",
    advantage: "Foshan's largest sofa procurement base and reasonable pricing for premium designs",
    image: sunlinkImage,
  },
  {
    id: 3,
    name: "Guzhen - Zhongshan Lighting Mall",
    location: "Guzhen - Zhongshan",
    description:
      "Located in the 'Lighting Capital of China', this is the premier destination for all types of lighting fixtures.",
    specialty: "Comprehensive lighting solutions and fixtures",
    advantage: "Direct access to manufacturers with latest lighting innovations",
    image: lightingMallImage,
  },
  {
    id: 4,
    name: "Foshan Ceramic and Sanitary Market",
    location: "Foshan City",
    description:
      "The leading market for tiles, ceramics, and sanitary ware, showcasing the latest trends and innovations.",
    specialty: "Premium tiles, ceramics, and sanitary ware",
    advantage: "First access to new designs and competitive bulk pricing",
    image: ceramicMarketImage,
  },
  {
    id: 5,
    name: "House Keeping & Household Shanxi Mall",
    location: "Shanxi",
    description:
      "A comprehensive market for all household goods, from kitchenware and decor to cleaning supplies.",
    specialty: "Complete household and hospitality supplies",
    advantage: "One-stop sourcing for all housekeeping requirements",
    image: householdMallImage,
  },
  {
    id: 6,
    name: "Marble Market Yunfu",
    location: "Yunfu",
    description:
      "Known as the 'Stone Capital', Yunfu offers an unparalleled selection of natural and engineered stone.",
    specialty: "Natural and engineered stone products",
    advantage: "Direct factory pricing on premium stone materials",
    image: marbleMarketImage,
  },
  {
    id: 7,
    name: "Futian Market Yiwu",
    location: "Yiwu City",
    description:
      "A massive wholesale market for small commodities, accessories, toys, and a wide array of consumer goods.",
    specialty: "Small commodities and consumer goods",
    advantage: "Unbeatable variety at wholesale prices for accessories and decor",
    image: futianMarketImage,
  },
  {
    id: 8,
    name: "Medical Equipment Market",
    location: "Guangzhou",
    description:
      "A specialized hub for sourcing a broad range of medical devices, supplies, and healthcare equipment.",
    specialty: "Medical equipment and healthcare supplies",
    advantage: "Certified suppliers with international standard compliance",
    image: medicalEquipmentImage,
  },
];

export default function MarketsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white" id="markets">
      <div className="container mx-auto px-6">
        {/* Section 1: Gateway to Premier Markets */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Expert Team on the Ground in China
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We have a local team in China that knows the best markets and has strong relationships with top manufacturers.
            Because we are physically there, we can find you the best products at the lowest prices something other companies
            can't do from far away.
          </p>
        </div>

        {/* Section 2: Our Network of Premier Markets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chinaMarkets.map((market, index) => (
            <motion.div
              key={market.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`market-${market.id}`}
            >
              {/* Image */}
              <div className="relative h-[450px] overflow-hidden">
                <img
                  src={market.image}
                  alt={market.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm font-semibold">{market.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{market.name}</h3>
                </div>
              </div>

              {/* Content */}
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-imex-red flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {market.specialty}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 shadow-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Our Local Team Matters
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Having our team living and working in China means we can check the quality of your products in person
            and get you the best deals. We work directly at the source to make sure everything is perfect for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
