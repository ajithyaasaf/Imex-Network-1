import marriottLogo from "@assets/Mariat Madurai_1761895099081.png";
import amikaLogo from "@assets/Amika madurai_1761895099073.png";
import royalCourtLogo from "@assets/Royal court madurai_1761895099082.png";
import heritageLogo from "@assets/Heritage residency madurai_1761895099078.png";
import bharathiLogo from "@assets/Bharathi Hospital Madurai_1761895099075.png";
import princeGardenLogo from "@assets/Prince Garden Coimbatore_1761895099082.png";
import copperLeafLogo from "@assets/Copper Leaf Tirunelveli_1761895099076.png";
import appletreeLogo from "@assets/Applettree Tirunelveli_1762149184092.png";
import lanceLogo from "@assets/Hotel Lance Nagerkoil_1762149184094.png";
import seaviewLogo from "@assets/Hotel sea view kanyakumari_1761895099080.jpg";
import seashoreLogo from "@assets/Sea Shore kanyakumari_1762149184095.png";
import hamuseLogo from "@assets/Hotel Hamus Kodaikanal_1761895099079.png";
import arjunaLogo from "@assets/Hotel Arjuna Rameshwaram_1761895099078.png";
import abmGrandeLogo from "@assets/ABM_hotel_theni_1765125618362.png";
import marriottTrichyLogo from "@assets/Hotel_marriot_Trichy_1765125624528.png";
import saradhaGrandeLogo from "@assets/Hotel_saradha_grand_pudukottai_1765125636658.png";
import royalGrandKarurLogo from "@assets/Royal_grand_karur_1765125644382.png";
import krvMeridianLogo from "@assets/KRV_Meridian_karur_1765125652982.png";
import brindhvanPalaceLogo from "@assets/brindhvan_palace_1765125665541.png";
import guruHospitalLogo from "@assets/Guru_hospital_madurai_1765125672011.png";

export interface Client {
  id: string;
  name: string;
  logo: string;
  city: string;
  type: 'Hotel' | 'Hospital' | 'Resort';
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
};

export const clients: Client[] = [
  {
    id: 'marriott-madurai',
    name: 'Courtyard by Marriott',
    logo: '@assets/Mariat Madurai_1761895099081.png',
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
    logo: '@assets/Amika madurai_1761895099073.png',
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
    logo: '@assets/Royal court madurai_1761895099082.png',
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
    logo: '@assets/Heritage residency madurai_1761895099078.png',
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
    logo: '@assets/Bharathi Hospital Madurai_1761895099075.png',
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
    logo: '@assets/Prince Garden Coimbatore_1761895099082.png',
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
    logo: '@assets/Copper Leaf Tirunelveli_1761895099076.png',
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
    logo: '@assets/Applettree Tirunelveli_1762149184092.png',
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
    logo: '@assets/Hotel Lance Nagerkoil_1762149184094.png',
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
    logo: '@assets/Hotel sea view kanyakumari_1761895099080.jpg',
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
    logo: '@assets/Sea Shore kanyakumari_1762149184095.png',
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
    logo: '@assets/Hotel Hamus Kodaikanal_1761895099079.png',
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
    logo: '@assets/Hotel Arjuna Rameshwaram_1761895099078.png',
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
    logo: '@assets/ABM_hotel_theni_1765125618362.png',
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
    logo: '@assets/Hotel_marriot_Trichy_1765125624528.png',
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
    logo: '@assets/Hotel_saradha_grand_pudukottai_1765125636658.png',
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
    logo: '@assets/Royal_grand_karur_1765125644382.png',
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
    logo: '@assets/KRV_Meridian_karur_1765125652982.png',
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
    logo: '@assets/brindhvan_palace_1765125665541.png',
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
    logo: '@assets/Guru_hospital_madurai_1765125672011.png',
    city: 'Madurai',
    type: 'Hospital',
    testimonial: {
      quote: 'IMEX understood our healthcare requirements perfectly. Durable, comfortable, and hygienic equipment that serves our patients well.',
      author: 'Hospital Administration',
      position: 'Guru Multispeciality Hospital, Madurai'
    }
  }
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
  'Ottanchathiram'
] as const;

export const clientTypes = ['All', 'Hotel', 'Hospital', 'Resort'] as const;
