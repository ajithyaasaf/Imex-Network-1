import marriottLogo from "@/assets/client_logos/marriott-madurai.png";
import amikaLogo from "@/assets/client_logos/amika-madurai.png";
import royalCourtLogo from "@/assets/client_logos/royal-court-madurai.png";
import heritageLogo from "@/assets/client_logos/heritage-residency-madurai.png";
import bharathiLogo from "@/assets/client_logos/bharathi-hospital-madurai.png";
import princeGardenLogo from "@/assets/client_logos/prince-garden-coimbatore.png";
import copperLeafLogo from "@/assets/client_logos/copper-leaf-tirunelveli.png";
import appletreeLogo from "@/assets/client_logos/appletree-tirunelveli.png";
import lanceLogo from "@/assets/client_logos/hotel-lance-nagerkoil.png";
import seaviewLogo from "@/assets/client_logos/hotel-seaview-kanyakumari.jpg";
import seashoreLogo from "@/assets/client_logos/seashore-kanyakumari.png";
import hamuseLogo from "@/assets/client_logos/hotel-hamus-kodaikanal.png";
import arjunaLogo from "@/assets/client_logos/hotel-arjuna-rameshwaram.png";
import abmGrandeLogo from "@/assets/client_logos/abm-grande-theni.png";
import marriottTrichyLogo from "@/assets/client_logos/marriott-tiruchirappalli.png";
import saradhaGrandeLogo from "@/assets/client_logos/saradha-grande-pudukkotai.png";
import royalGrandKarurLogo from "@/assets/client_logos/royal-grand-karur.png";
import krvMeridianLogo from "@/assets/client_logos/krv-meridian-karur.png";
import brindhvanPalaceLogo from "@/assets/client_logos/brindhvan-palace-ottanchathiram.png";
import guruHospitalLogo from "@/assets/client_logos/guru-hospital-madurai.png";
import amaariLogo from "@/assets/client_logos/amaari-kanyakumari.png";
import ananyasLogo from "@/assets/client_logos/ananyas-coimbatore.png";
import crGrandeLogo from "@/assets/client_logos/cr-grande-madurai.png";
import orbisLogo from "@/assets/client_logos/orbis-coimbatore.png";
import bhbLogo from "@/assets/client_logos/BHB mahal, Theni.png";
import kodaiIntlLogo from "@/assets/client_logos/Hotel Kodai international, Kodaikanal.png";
import sahanaLogo from "@/assets/client_logos/Hotel sahana castle, nagercoil.png";
import muruganLogo from "@/assets/client_logos/sri murugan residency, karur.jpg";
import starPalaceLogo from "@/assets/client_logos/star palace, rameshwaram.png";
import afnaParkLogo from "@/assets/client_logos/Afna park, tirunelveli.jpg";
import chettinadSchoolLogo from "@/assets/client_logos/Chettinad Public school, karaikudi.png";
import hotelAmilLogo from "@/assets/client_logos/Hotel amil, Rajapalayam.png";
import palmyraLogo from "@/assets/client_logos/Hotel palmyra grand suite, tirunelveli.png";
import scadLogo from "@/assets/client_logos/SCAD group of instituition, tirunelveli.png";
import hamshaveniLogo from "@/assets/client_logos/hamshaveni heritage, sankarankovil.png";
import svsGrandeLogo from "@/assets/client_logos/svs grande, pudukottai.png";

export interface Client {
  id: string;
  name: string;
  logo: string;
  city: string;
  type: 'Hotel' | 'Hospital' | 'Resort' | 'Education';
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const clientLogos: Record<string, string> = {
  'marriott-madurai': marriottLogo,
  'amika-madurai': amikaLogo,
  'royal-court-madurai': royalCourtLogo,
  'heritage-residency-madurai': heritageLogo,
  'bharathi-hospital-madurai': bharathiLogo,
  'prince-garden-coimbatore': princeGardenLogo,
  'copper-leaf-tirunelveli': copperLeafLogo,
  'appletree-tirunelveli': appletreeLogo,
  'hotel-lance-nagerkoil': lanceLogo,
  'hotel-seaview-kanyakumari': seaviewLogo,
  'seashore-kanyakumari': seashoreLogo,
  'hotel-hamus-kodaikanal': hamuseLogo,
  'hotel-arjuna-rameshwaram': arjunaLogo,
  'abm-grande-theni': abmGrandeLogo,
  'marriott-tiruchirappalli': marriottTrichyLogo,
  'saradha-grande-pudukkotai': saradhaGrandeLogo,
  'royal-grand-karur': royalGrandKarurLogo,
  'krv-meridian-karur': krvMeridianLogo,
  'brindhvan-palace-ottanchathiram': brindhvanPalaceLogo,
  'guru-hospital-madurai': guruHospitalLogo,
  'amaari-kanyakumari': amaariLogo,
  'ananyas-coimbatore': ananyasLogo,
  'cr-grande-madurai': crGrandeLogo,
  'orbis-coimbatore': orbisLogo,
  'bhb-mahal-theni': bhbLogo,
  'hotel-kodai-intl': kodaiIntlLogo,
  'hotel-sahana-castle': sahanaLogo,
  'sri-murugan-residency': muruganLogo,
  'star-palace-rameshwaram': starPalaceLogo,
  'afna-park-tirunelveli': afnaParkLogo,
  'chettinad-school-karaikudi': chettinadSchoolLogo,
  'hotel-amil-rajapalayam': hotelAmilLogo,
  'hotel-palmyra-tirunelveli': palmyraLogo,
  'scad-institution-tirunelveli': scadLogo,
  'hamshaveni-heritage-sankarankovil': hamshaveniLogo,
  'svs-grande-pudukkottai': svsGrandeLogo,
};

export const clients: Client[] = [
  {
    id: 'marriott-madurai',
    name: 'Courtyard by Marriott',
    logo: '@/assets/client_logos/marriott-madurai.png',
    city: 'Madurai',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX transformed our vision into reality with impeccable attention to detail. Their end-to-end sourcing solutions exceeded our expectations for quality and timelines.',
      author: 'Rajesh Kumar',
      position: 'General Manager, Courtyard by Marriott Madurai'
    }
  },
  {
    id: 'amika-madurai',
    name: 'Amika Hotel',
    logo: '@/assets/client_logos/amika-madurai.png',
    city: 'Madurai',
    type: 'Hotel',
    testimonial: {
      quote: 'Working with IMEX was seamless. Their expertise in sourcing premium goods from China and managing the entire logistics made our hotel launch stress-free.',
      author: 'Priya Sharma',
      position: 'Director, Amika Hotel Madurai'
    }
  },
  {
    id: 'royal-court-madurai',
    name: 'Royal Court',
    logo: '@/assets/client_logos/royal-court-madurai.png',
    city: 'Madurai',
    type: 'Hotel',
    testimonial: {
      quote: 'The craftsmanship and quality of items sourced by IMEX perfectly matched our luxury standards. Their professional approach is commendable.',
      author: 'Venkatesh Iyer',
      position: 'Owner, Royal Court Madurai'
    }
  },
  {
    id: 'heritage-residency-madurai',
    name: 'Heritage Residency',
    logo: '@/assets/client_logos/heritage-residency-madurai.png',
    city: 'Madurai',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX delivered exceptional value without compromising on quality. Their understanding of hospitality requirements is outstanding.',
      author: 'Suresh Reddy',
      position: 'Managing Director, Heritage Residency'
    }
  },
  {
    id: 'bharathi-hospital-madurai',
    name: 'Bharathi Infinity Hospital',
    logo: '@/assets/client_logos/bharathi-hospital-madurai.png',
    city: 'Madurai',
    type: 'Hospital',
    testimonial: {
      quote: 'For our 200-bed facility, IMEX provided durable, comfortable, and aesthetically pleasing equipment. Their healthcare expertise made all the difference.',
      author: 'Dr. Anand Krishnan',
      position: 'Director, Bharathi Infinity Hospital'
    }
  },
  {
    id: 'prince-garden-coimbatore',
    name: 'Prince Gardens Hotel',
    logo: '@/assets/client_logos/prince-garden-coimbatore.png',
    city: 'Coimbatore',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX handled our complete furnishing project with professionalism. From design consultation to final installation, everything was perfect.',
      author: 'Mahesh Patel',
      position: 'General Manager, Prince Gardens Hotel'
    }
  },
  {
    id: 'copper-leaf-tirunelveli',
    name: 'Copper Leaf Hotel',
    logo: '@/assets/client_logos/copper-leaf-tirunelveli.png',
    city: 'Tirunelveli',
    type: 'Hotel',
    testimonial: {
      quote: 'The contemporary collection sourced by IMEX perfectly complemented our boutique hotel concept. Highly recommended!',
      author: 'Arun Vijay',
      position: 'Owner, Copper Leaf Hotel'
    }
  },
  {
    id: 'appletree-tirunelveli',
    name: 'Hotel Appletree',
    logo: '@/assets/client_logos/appletree-tirunelveli.png',
    city: 'Tirunelveli',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX offered competitive pricing with superior quality. Their China sourcing expertise gave us access to premium products within our budget.',
      author: 'Karthik Ramesh',
      position: 'Director, Hotel Appletree'
    }
  },
  {
    id: 'hotel-lance-nagerkoil',
    name: 'Hotel Lance',
    logo: '@/assets/client_logos/hotel-lance-nagerkoil.png',
    city: 'Nagerkoil',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX provided us with stylish, durable fixtures that perfectly suited our modern hotel aesthetic. Their professionalism throughout the project was exceptional.',
      author: 'Mohan Das',
      position: 'Owner, Hotel Lance'
    }
  },
  {
    id: 'hotel-seaview-kanyakumari',
    name: 'Hotel Sea View',
    logo: '@/assets/client_logos/hotel-seaview-kanyakumari.jpg',
    city: 'Kanyakumari',
    type: 'Hotel',
    testimonial: {
      quote: 'For our coastal property, IMEX sourced weather-resistant yet elegant outdoor seating. Their attention to our specific needs was remarkable.',
      author: 'Lakshmi Menon',
      position: 'Owner, Hotel Sea View'
    }
  },
  {
    id: 'seashore-kanyakumari',
    name: 'The Seashore Hotel',
    logo: '@/assets/client_logos/seashore-kanyakumari.png',
    city: 'Kanyakumari',
    type: 'Hotel',
    testimonial: {
      quote: 'Our beachfront property needed outfitting that could withstand coastal conditions while maintaining elegance. IMEX delivered exactly what we needed.',
      author: 'Vijay Kumar',
      position: 'General Manager, The Seashore Hotel'
    }
  },
  {
    id: 'hotel-hamus-kodaikanal',
    name: 'The Hamuse',
    logo: '@/assets/client_logos/hotel-hamus-kodaikanal.png',
    city: 'Kodaikanal',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX transformed our hill station resort with stunning pieces. Their project management was flawless from start to finish.',
      author: 'Ravi Chandran',
      position: 'General Manager, The Hamuse'
    }
  },
  {
    id: 'hotel-arjuna-rameshwaram',
    name: 'Hotel Arjunaa',
    logo: '@/assets/client_logos/hotel-arjuna-rameshwaram.png',
    city: 'Rameshwaram',
    type: 'Hotel',
    testimonial: {
      quote: 'Excellent service and beautiful interiors that our guests love. IMEX made our renovation project smooth and successful.',
      author: 'Balaji Subramanian',
      position: 'Owner, Hotel Arjunaa'
    }
  },
  {
    id: 'abm-grande-theni',
    name: 'ABM Grande',
    logo: '@/assets/client_logos/abm-grande-theni.png',
    city: 'Theni',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX provided us with premium quality furnishings that perfectly matched our business class hotel standards. Their service was exceptional.',
      author: 'Management Team',
      position: 'ABM Hotels & Resorts, Theni'
    }
  },
  {
    id: 'marriott-tiruchirappalli',
    name: 'Courtyard by Marriott',
    logo: '@/assets/client_logos/marriott-tiruchirappalli.png',
    city: 'Tiruchirappalli',
    type: 'Hotel',
    testimonial: {
      quote: 'Working with IMEX for our Tiruchirappalli property was a great experience. Their sourcing solutions met our global brand standards.',
      author: 'Hotel Management',
      position: 'Courtyard by Marriott Tiruchirappalli'
    }
  },
  {
    id: 'saradha-grande-pudukkotai',
    name: 'Saradha Grande',
    logo: '@/assets/client_logos/saradha-grande-pudukkotai.png',
    city: 'Pudukkotai',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX delivered elegant and durable interiors for our hotel. Their attention to detail and quality is commendable.',
      author: 'Management Team',
      position: 'Hotel Saradha Grande, Pudukkotai'
    }
  },
  {
    id: 'royal-grand-karur',
    name: 'The Royal Grand',
    logo: '@/assets/client_logos/royal-grand-karur.png',
    city: 'Karur',
    type: 'Hotel',
    testimonial: {
      quote: 'The collection sourced by IMEX added a royal touch to our hotel interiors. Excellent craftsmanship and timely delivery.',
      author: 'Hotel Management',
      position: 'Hotel The Royal Grand, Karur'
    }
  },
  {
    id: 'krv-meridian-karur',
    name: 'KRV Meridian Hotel',
    logo: '@/assets/client_logos/krv-meridian-karur.png',
    city: 'Karur',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX provided contemporary designs that enhanced our hotel ambiance. Their professional approach made the project seamless.',
      author: 'Hotel Management',
      position: 'KRV Meridian Hotel, Karur'
    }
  },
  {
    id: 'brindhvan-palace-ottanchathiram',
    name: 'Brindhavan Palace',
    logo: '@/assets/client_logos/brindhvan-palace-ottanchathiram.png',
    city: 'Ottanchathiram',
    type: 'Hotel',
    testimonial: {
      quote: 'Elegant and sophisticated interiors from IMEX transformed our palace hotel. Their expertise in luxury sourcing is remarkable.',
      author: 'Palace Management',
      position: 'Brindhavan Palace, Ottanchathiram'
    }
  },
  {
    id: 'guru-hospital-madurai',
    name: 'Guru Multispeciality Hospital',
    logo: '@/assets/client_logos/guru-hospital-madurai.png',
    city: 'Madurai',
    type: 'Hospital',
    testimonial: {
      quote: 'IMEX understood our healthcare requirements perfectly. Durable, comfortable, and hygienic equipment that serves our patients well.',
      author: 'Hospital Administration',
      position: 'Guru Multispeciality Hospital, Madurai'
    }
  },
  {
    id: 'amaari-kanyakumari',
    name: 'Amaari Beach Resort',
    logo: '@/assets/client_logos/amaari-kanyakumari.png',
    city: 'Kanyakumari',
    type: 'Resort',
    testimonial: {
      quote: 'IMEX provided us with premium quality furnishings that perfectly matched our luxury coastal resort standards. Their service and sourcing capabilities are truly exceptional.',
      author: 'Management Team',
      position: 'Amaari Beach Resort, Kanyakumari'
    }
  },
  {
    id: 'ananyas-coimbatore',
    name: "Ananya's Nana Nani",
    logo: "@/assets/client_logos/ananyas-coimbatore.png",
    city: 'Coimbatore',
    type: 'Resort',
    testimonial: {
      quote: 'The craftsmanship and quality of items sourced by IMEX perfectly matched our luxury lifestyle community standards. Highly professional and reliable.',
      author: 'Management',
      position: "Ananya's Nana Nani Homes"
    }
  },
  {
    id: 'cr-grande-madurai',
    name: 'CR Grande',
    logo: '@/assets/client_logos/cr-grande-madurai.png',
    city: 'Madurai',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX delivered exceptional value without compromising on quality for our hotel interiors. Their understanding of the hospitality sector is outstanding.',
      author: 'Management Team',
      position: 'CR Grande, Madurai'
    }
  },
  {
    id: 'orbis-coimbatore',
    name: 'The Orbis Hotel',
    logo: '@/assets/client_logos/orbis-coimbatore.png',
    city: 'Coimbatore',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX offered competitive pricing with superior quality for our business hotel. Their project management from sourcing to delivery was flawless.',
      author: 'Management',
      position: 'The Orbis Hotel, Coimbatore'
    }
  },
  {
    id: 'bhb-mahal-theni',
    name: 'BHB Mahal',
    logo: '@/assets/client_logos/BHB mahal, Theni.png',
    city: 'Theni',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX provided high-quality furnishing and decor for our event space. Their attention to detail helped us create a grand experience for our guests.',
      author: 'Management Team',
      position: 'BHB Mahal, Theni'
    }
  },
  {
    id: 'hotel-kodai-intl',
    name: 'Hotel Kodai International',
    logo: '@/assets/client_logos/Hotel Kodai international, Kodaikanal.png',
    city: 'Kodaikanal',
    type: 'Hotel',
    testimonial: {
      quote: 'The premium furniture and amenities sourced by IMEX perfectly complement our hill station luxury. Their logistical support was impressive.',
      author: 'General Manager',
      position: 'Hotel Kodai International'
    }
  },
  {
    id: 'hotel-sahana-castle',
    name: 'Hotel Sahana Castle',
    logo: '@/assets/client_logos/Hotel sahana castle, nagercoil.png',
    city: 'Nagerkoil',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX delivered exceptionally elegant interiors that our guests admire. Their ability to source unique products is a huge plus.',
      author: 'Owner',
      position: 'Hotel Sahana Castle'
    }
  },
  {
    id: 'sri-murugan-residency',
    name: 'Sri Murugan Residency',
    logo: '@/assets/client_logos/sri murugan residency, karur.jpg',
    city: 'Karur',
    type: 'Hotel',
    testimonial: {
      quote: 'Durable and stylish furnishings at a competitive price. IMEX is our trusted partner for all sourcing needs.',
      author: 'Management',
      position: 'Sri Murugan Residency, Karur'
    }
  },
  {
    id: 'star-palace-rameshwaram',
    name: 'Star Palace',
    logo: '@/assets/client_logos/star palace, rameshwaram.png',
    city: 'Rameshwaram',
    type: 'Hotel',
    testimonial: {
      quote: 'The quality of materials and the service from IMEX exceeded our expectations. They made our outfitting project very successful.',
      author: 'Director',
      position: 'Star Palace, Rameshwaram'
    }
  },
  {
    id: 'afna-park-tirunelveli',
    name: 'Afna Park',
    logo: '@/assets/client_logos/Afna park, tirunelveli.jpg',
    city: 'Tirunelveli',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX delivered exceptional quality for our hotel project in Tirunelveli. Their professional approach made the entire process seamless.',
      author: 'Management',
      position: 'Afna Park, Tirunelveli'
    }
  },
  {
    id: 'chettinad-school-karaikudi',
    name: 'Chettinad Public School',
    logo: '@/assets/client_logos/Chettinad Public school, karaikudi.png',
    city: 'Karaikudi',
    type: 'Education',
    testimonial: {
      quote: 'The furniture and outfitting provided by IMEX created a vibrant and conducive learning environment for our students.',
      author: 'Director',
      position: 'Chettinad Public School'
    }
  },
  {
    id: 'hotel-amil-rajapalayam',
    name: 'Hotel Amil',
    logo: '@/assets/client_logos/Hotel amil, Rajapalayam.png',
    city: 'Rajapalayam',
    type: 'Hotel',
    testimonial: {
      quote: 'IMEX is our go-to partner for premium furnishings. Their expertise in sourcing from global markets is unmatched.',
      author: 'Owner',
      position: 'Hotel Amil, Rajapalayam'
    }
  },
  {
    id: 'hotel-palmyra-tirunelveli',
    name: 'Hotel Palmyra Grand Suite',
    logo: '@/assets/client_logos/Hotel palmyra grand suite, tirunelveli.png',
    city: 'Tirunelveli',
    type: 'Hotel',
    testimonial: {
      quote: 'Highly satisfied with the quality and aesthetics of the items delivered by IMEX. They truly understand hospitality standards.',
      author: 'General Manager',
      position: 'Hotel Palmyra Grand Suite'
    }
  },
  {
    id: 'scad-institution-tirunelveli',
    name: 'SCAD Group of Institutions',
    logo: '@/assets/client_logos/SCAD group of instituition, tirunelveli.png',
    city: 'Tirunelveli',
    type: 'Education',
    testimonial: {
      quote: 'IMEX provided robust and ergonomic solutions for our educational complex. Their service is reliable and efficient.',
      author: 'Administrative Head',
      position: 'SCAD Group of Institutions'
    }
  },
  {
    id: 'hamshaveni-heritage-sankarankovil',
    name: 'Hamshaveni Heritage',
    logo: '@/assets/client_logos/hamshaveni heritage, sankarankovil.png',
    city: 'Sankarankovil',
    type: 'Hotel',
    testimonial: {
      quote: 'The traditional yet elegant furnishings from IMEX perfectly complement our heritage theme. Their sourcing is top-notch.',
      author: 'Management',
      position: 'Hamshaveni Heritage'
    }
  },
  {
    id: 'svs-grande-pudukkottai',
    name: 'SVS Grande',
    logo: '@/assets/client_logos/svs grande, pudukottai.png',
    city: 'Pudukkotai',
    type: 'Hotel',
    testimonial: {
      quote: 'Durable products and great service. IMEX helped us achieve a premium look for our guest rooms within budget.',
      author: 'Director',
      position: 'SVS Grande, Pudukkotai'
    }
  },
];

export const cities = [
  'All',
  'Madurai',
  'Coimbatore',
  'Tirunelveli',
  'Nagerkoil',
  'Kanyakumari',
  'Kodaikanal',
  'Rameshwaram',
  'Theni',
  'Tiruchirappalli',
  'Pudukkotai',
  'Karur',
  'Ottanchathiram',
  'Karaikudi',
  'Rajapalayam',
  'Sankarankovil'
] as const;

export const clientTypes = ['All', 'Hotel', 'Hospital', 'Resort', 'Education'] as const;


