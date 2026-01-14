import { useState } from "react";
import { clients, clientLogos } from "@shared/clients";
import { Building2, MapPin, Star } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function TrustedBySection() {
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-imex-red/10 text-imex-red px-6 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold text-sm uppercase tracking-wide">
                Trusted Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Leading Brands
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From premium hotels to world-class hospitals, we've partnered with
              industry leaders across Tamil Nadu to deliver exceptional results
              solutions
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {clients.map((client, index) => (
              <div
                key={client.id}
                data-testid={`client-card-${client.id}`}
                className="group relative bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-imex-red/30 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredClient(client.id)}
                onMouseLeave={() => setHoveredClient(null)}
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <div className="aspect-[16/9] flex items-center justify-center mb-4">
                  <img
                    src={clientLogos[client.id]}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                    data-testid={`logo-${client.id}`}
                  />
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center text-white transition-all duration-500 ${hoveredClient === client.id
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
                >
                  <h3 className="font-bold text-xl mb-4 text-center">
                    {client.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-imex-red" />
                    <span>{client.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-8 md:gap-12 text-gray-600">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-imex-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-imex-red">50+</span>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900">Clients</div>
                  <div className="text-base text-gray-500">Trusted Partners</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-imex-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-imex-red">7</span>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900">Cities</div>
                  <div className="text-base text-gray-500">Across Tamil Nadu</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-imex-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-imex-red tracking-tighter">100%</span>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900">Satisfaction</div>
                  <div className="text-base text-gray-500">Client Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
