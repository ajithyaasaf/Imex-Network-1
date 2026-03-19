import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { clients, cities, clientLogos } from "@shared/clients";
import { MapPin, Building2, Quote, Filter, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import bannerImage from "@assets/1_1765189672715.png";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Madurai': { lat: 9.9252, lng: 78.1198 },
  'Coimbatore': { lat: 11.004556, lng: 76.961632 },
  'Tirunelveli': { lat: 8.741222, lng: 77.694626 },
  'Nagerkoil': { lat: 8.1744, lng: 77.4322 },
  'Kanyakumari': { lat: 8.088306, lng: 77.538452 },
  'Kodaikanal': { lat: 10.239250, lng: 77.489320 },
  'Rameshwaram': { lat: 9.2876, lng: 79.3129 },
  'Theni': { lat: 10.0104, lng: 77.4768 },
  'Tiruchirappalli': { lat: 10.7905, lng: 78.7047 },
  'Pudukkotai': { lat: 10.3833, lng: 78.8001 },
  'Karur': { lat: 10.9601, lng: 78.0766 },
  'Ottanchathiram': { lat: 10.4980, lng: 77.7673 },
};

function MapUpdater({ selectedCity }: { selectedCity: string }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedCity !== 'All' && cityCoordinates[selectedCity]) {
      map.flyTo([cityCoordinates[selectedCity].lat, cityCoordinates[selectedCity].lng], 10, {
        duration: 1
      });
    } else {
      map.flyTo([9.5, 78.0], 7, {
        duration: 1
      });
    }
  }, [selectedCity, map]);
  
  return null;
}

export default function Clients() {
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const filteredClients = clients.filter((client) => {
    const cityMatch = selectedCity === 'All' || client.city === selectedCity;
    return cityMatch;
  });

  const clientsByCity = clients.reduce((acc, client) => {
    if (!acc[client.city]) {
      acc[client.city] = [];
    }
    acc[client.city].push(client);
    return acc;
  }, {} as Record<string, typeof clients>);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bannerImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          <div className="relative z-10">
            <div className="container mx-auto px-6 py-24">
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold text-sm uppercase tracking-wide">
                    Our Clients
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Trusted by Industry Leaders
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  Delivering excellence across Tamil Nadu's premier hospitality
                  and healthcare establishments
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Presence Across Tamil Nadu
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  From bustling cities to serene hill stations, we've
                  transformed spaces across the state
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-6xl mx-auto mb-16">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <div className="w-full h-[600px] rounded-2xl overflow-hidden" data-testid="tamil-nadu-map">
                  <MapContainer
                    center={[9.5, 78.0]}
                    zoom={7}
                    style={{ height: '100%', width: '100%' }}
                    scrollWheelZoom={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapUpdater selectedCity={selectedCity} />
                    {Object.entries(cityCoordinates).map(([city, coords]) => {
                      const cityClients = clientsByCity[city] || [];
                      const isSelected = selectedCity === city;
                      
                      const customIcon = L.divIcon({
                        className: 'custom-marker',
                        html: `
                          <div class="relative" data-testid="map-pin-${city}">
                            <div class="absolute -translate-x-1/2 -translate-y-full">
                              <div class="flex flex-col items-center">
                                <div class="relative">
                                  <svg width="32" height="40" viewBox="0 0 32 40" class="drop-shadow-lg ${isSelected ? 'scale-125' : 'scale-100'} transition-transform">
                                    <path d="M16 0C7.2 0 0 7.2 0 16c0 8.8 16 24 16 24s16-15.2 16-24c0-8.8-7.2-16-16-16z" fill="#dc2626"/>
                                    <circle cx="16" cy="16" r="8" fill="white"/>
                                    ${cityClients.length > 0 ? `<circle cx="16" cy="16" r="6" fill="#16a34a"/>` : `<circle cx="16" cy="16" r="6" fill="#dc2626"/>`}
                                  </svg>
                                  ${cityClients.length > 0 ? `
                                    <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                                      ${cityClients.length}
                                    </div>
                                  ` : ''}
                                </div>
                                <div class="bg-white px-2 py-1 rounded shadow-md mt-1 whitespace-nowrap text-sm font-semibold text-gray-900">
                                  ${city}
                                </div>
                              </div>
                            </div>
                          </div>
                        `,
                        iconSize: [32, 40],
                        iconAnchor: [16, 40],
                      });

                      return (
                        <Marker
                          key={city}
                          position={[coords.lat, coords.lng]}
                          icon={customIcon}
                          eventHandlers={{
                            click: () => setSelectedCity(city),
                          }}
                        >
                          <Popup>
                            <div className="text-center p-2">
                              <h3 className="font-bold text-lg text-gray-900 mb-2">{city}</h3>
                              {cityClients.length > 0 ? (
                                <div>

                                  <div className="space-y-1">
                                    {cityClients.map((client) => (
                                      <div key={client.id} className="text-xs text-gray-700">
                                        • {client.name}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <p className="text-sm text-gray-500">No clients in this location</p>
                              )}
                            </div>
                          </Popup>
                        </Marker>
                      );
                    })}
                  </MapContainer>
                </div>

                <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-imex-red rounded-full"></div>
                    <span>City Location</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span>Active Clients</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Filter className="w-5 h-5" />
                  <span className="font-semibold">Filter by City:</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <Button
                      key={city}
                      data-testid={`filter-city-${city}`}
                      onClick={() => setSelectedCity(city)}
                      variant={selectedCity === city ? "default" : "outline"}
                      className={`rounded-full ${
                        selectedCity === city
                          ? "bg-imex-red hover:bg-red-700 text-white"
                          : "border-gray-300 hover:border-imex-red hover:text-imex-red"
                      }`}
                    >
                      {city}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredClients.map((client) => (
                  <div
                    key={client.id}
                    data-testid={`client-detail-${client.id}`}
                    className="group bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-imex-red/30 hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 border-b border-gray-100">
                      <div className="aspect-[16/9] flex items-center justify-center mb-4">
                        <img
                          src={clientLogos[client.id]}
                          alt={`${client.name} logo`}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                        {client.name}
                      </h3>
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-imex-red" />
                          <span>{client.city}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4 text-imex-red" />
                          <span>{client.type}</span>
                        </div>
                      </div>
                    </div>

                    {client.testimonial && (
                      <div className="p-6">
                        <Quote className="w-8 h-8 text-imex-red/20 mb-3" />
                        <p className="text-gray-600 text-sm leading-relaxed italic">
                          "{client.testimonial.quote}"
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {filteredClients.length === 0 && (
              <div className="text-center py-16">
                <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-500">
                  No clients found with the selected filters
                </p>
                <Button
                  onClick={() => setSelectedCity('All')}
                  className="mt-6 bg-imex-red hover:bg-red-700"
                  data-testid="button-reset-filters"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
