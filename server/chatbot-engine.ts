import { type ChatMessage } from "@shared/schema";
import { randomUUID } from "crypto";

// Knowledge base for IMEX company
interface FAQItem {
  keywords: string[];
  response: string;
  quickReplies?: string[];
}

const knowledgeBase: FAQItem[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! Welcome to IMEX - your trusted partner in global sourcing! 👋 I'm here to help you with any questions about our services, projects, or how we can transform your space. How can I assist you today?",
    quickReplies: ['Tell me about IMEX', 'What services do you offer?', 'Show me your projects', 'How do I get started?']
  },
  {
    keywords: ['about', 'who is imex', 'what is imex', 'company profile'],
    response: "IMEX is a premium import/export and sourcing company that specializes in delivering complete turnkey project solutions across multiple industries. 🏢\n\n**What We Do:**\nWe serve as a strategic bridge between world-class Chinese manufacturers and global clients, providing comprehensive end-to-end services including:\n\n• **Sourcing & Procurement** from verified manufacturers in Foshan, China - the sourcing capital of the world\n• **Complete Project Solutions** for hotels, hospitals, villas, institutes, and commercial spaces\n• **Global Logistics** with seamless coordination from factory to final installation\n• **Quality Assurance** at every step with our on-ground teams\n\n**Our Reach:**\n📍 China (Foshan) - Direct manufacturer relationships\n📍 India (Chennai & Madurai) - Regional hubs for delivery and support\n\nWe handle everything from initial consultation to final installation, ensuring your project is completed on time, within budget, and exceeding expectations!",
    quickReplies: ['What services do you offer?', 'Show me your projects', 'Contact sales']
  },
  {
    keywords: ['services', 'what do you do', 'offerings'],
    response: "We provide a complete suite of import/export and sourcing services designed to make your project seamless and successful! 🌟\n\n**Our Core Services:**\n\n✨ **Sourcing & Procurement**\n   • Direct access to 500+ verified manufacturers in Foshan\n   • Custom design and manufacturing support\n   • Material selection and specification support\n   • Competitive pricing with volume discounts\n\n🚢 **Global Logistics & Shipping**\n   • Air and sea freight options\n   • Complete customs clearance handling\n   • Door-to-door delivery across India and beyond\n   • Real-time shipment tracking\n\n🔧 **Quality Assurance**\n   • Pre-shipment factory inspections\n   • Quality control at every production stage\n   • Compliance with international standards\n   • 99.8% quality assurance rate\n\n📋 **Project Management**\n   • Dedicated project coordinators\n   • Timeline planning and monitoring\n   • Budget management and optimization\n   • Regular progress updates\n\n🛠️ **Installation & After-Sales**\n   • Professional on-site installation teams\n   • Post-installation support\n   • Warranty management\n   • Maintenance guidance\n\n**Our Impact:**\n✅ 40% cost savings compared to traditional sourcing\n✅ 60% faster project completion\n✅ 99.8% quality assurance guarantee",
    quickReplies: ['Tell me about Sourcing', 'Tell me about Logistics', 'Show me your projects']
  },
  {
    keywords: ['projects', 'portfolio', 'work'],
    response: "We've successfully completed amazing projects across multiple sectors! 🌟\n\n🏥 **Hospitals** - Medical equipment and furnishing\n🏨 **Hotels** - Luxury hospitality outfitting\n🏡 **Villas** - Premium residential solutions\n🎓 **Institutes** - Educational facility equipment\n🏪 **Retail** - Commercial space solutions\n\nEach project showcases our commitment to quality, timely delivery, and client satisfaction!",
    quickReplies: ['Show me Hospital projects', 'Show me Hotel projects', 'Show me Villa projects']
  },
  {
    keywords: ['hospital', 'healthcare', 'medical'],
    response: "Our **Hospital & Healthcare Projects** deliver world-class medical equipment solutions that combine functionality, durability, and patient comfort! 🏥\n\n**Specialized Healthcare Sourcing:**\n\n🛏️ **Patient Care Areas:**\n   • Hospital beds with adjustable features\n   • Patient room fixtures (bedside tables, over-bed tables)\n   • ICU and critical care equipment\n   • Pediatric ward specialized items\n\n👥 **Waiting & Reception Areas:**\n   • Comfortable, durable seating solutions\n   • Reception desks and counters\n   • Queue management systems\n\n🔬 **Medical Facilities:**\n   • Laboratory workstations\n   • Examination room equipment\n   • Medical storage cabinets\n   • Sterilization area setups\n\n**Key Features:**\n✅ **Medical-Grade Materials** - Easy to clean and disinfect\n✅ **Durability** - Built to withstand 24/7 healthcare environments\n✅ **Compliance** - Meets international healthcare standards\n✅ **Ergonomic Design** - Comfort for patients and staff\n\nWe've successfully outfitted 50+ healthcare facilities, from small clinics to multi-specialty hospitals!",
    quickReplies: ['Contact for Hospital Project', 'Back to Projects']
  },
  {
    keywords: ['hotel', 'hospitality', 'resort'],
    response: "Our **Hotel & Hospitality Projects** create luxurious, comfortable spaces that leave lasting impressions on your guests! 🏨✨\n\n**Complete Hotel Outfitting Solutions:**\n\n🛌 **Guest Rooms:**\n   • Premium beds and mattresses\n   • Bedroom suites (wardrobes, dressers, nightstands)\n   • Work desks and chairs\n   • Luggage racks and mirrors\n   • Blackout curtains and soft furnishings\n\n🏛️ **Public Areas:**\n   • Grand lobby seating\n   • Reception desks and back-office setups\n   • Concierge stations\n   • Elevator lobbies and corridor fixtures\n\n🍽️ **Dining & Entertainment:**\n   • Restaurant tables, chairs, and booths\n   • Bar counters and bar stools\n   • Buffet stations and serving areas\n   • Banquet hall equipment\n\n🌳 **Outdoor Spaces:**\n   • Pool-side loungers and umbrellas\n   • Garden seating and patio sets\n   • Rooftop lounge setups\n   • Weather-resistant materials\n\n**Our Expertise:**\n✨ Custom design integration matching your brand identity\n🎨 Premium materials and finishes\n⚡ Fast-track delivery for hotel openings\n🏆 Experience with 100+ hospitality projects\n\nFrom boutique hotels to 5-star resorts, we deliver excellence at every scale!",
    quickReplies: ['Contact for Hotel Project', 'Back to Projects']
  },
  {
    keywords: ['villa', 'residential', 'home', 'house', 'apartment'],
    response: "Our **Villa Projects** bring elegance to residential spaces! 🏡\n\nWe offer:\n• Living room premium collections\n• Bedroom suites\n• Dining sets & kitchen setups\n• Outdoor garden seating\n• Custom design solutions\n\nTransform your villa into a masterpiece with our curated selections!",
    quickReplies: ['Contact for Villa Project', 'Back to Projects']
  },
  {
    keywords: ['retail', 'commercial', 'shop', 'store', 'office'],
    response: "Our **Retail & Commercial Solutions** create stunning business spaces! 🏪\n\nWe provide:\n• Store fixtures & displays\n• Office desks & seating\n• Reception & waiting areas\n• Custom branding integration\n• Durable commercial-grade materials\n\nMake your business space stand out with our professional solutions!",
    quickReplies: ['Contact for Retail Project', 'Back to Projects']
  },
  {
    keywords: ['institute', 'school', 'education', 'university', 'college', 'library'],
    response: "Our **Institute Projects** create inspiring learning environments! 🎓\n\nWe supply:\n• Classroom desks & seating\n• Library solutions\n• Auditorium seating\n• Laboratory equipment\n• Administrative office setups\n\nQuality equipment that enhances the educational experience!",
    quickReplies: ['Contact for Institute Project', 'Back to Projects']
  },
  {
    keywords: ['process', 'how it works', 'steps', 'procedure', 'journey', 'workflow'],
    response: "The **IMEX Journey** is simple and efficient! 🚀\n\n1️⃣ **Consultation** - We understand your needs\n2️⃣ **Sourcing** - Find perfect manufacturers in China\n3️⃣ **Quality Check** - Rigorous inspection\n4️⃣ **Logistics** - Seamless shipping & customs\n5️⃣ **Delivery** - Timely arrival to your location\n6️⃣ **Installation** - Professional setup\n\n✅ 60% faster than traditional methods\n✅ 40% cost savings\n✅ 99.8% quality assurance",
    quickReplies: ['Get started now', 'View services', 'See projects', 'Contact us']
  },
  {
    keywords: ['price', 'cost', 'quote', 'pricing', 'budget', 'expensive', 'affordable'],
    response: "Great question about pricing! 💰\n\nWe offer **competitive rates** with significant value:\n• **40% cost reduction** compared to traditional sourcing\n• Transparent pricing with no hidden fees\n• Flexible payment terms\n• Volume discounts available\n\nFor a detailed quote tailored to your specific project, I'd recommend connecting with our team. Would you like to request a custom quote?",
    quickReplies: ['Request a quote', 'View services', 'See portfolio', 'Contact information']
  },
  {
    keywords: ['location', 'where', 'office', 'address', 'based', 'operate'],
    response: "We operate globally with strategic locations! 🌍\n\n📍 **China Office**: Foshan - Direct access to manufacturers\n📍 **India Offices**: \n   • Chennai - Southern regional hub\n   • Madurai - Project coordination center\n\nOur strategic presence ensures seamless coordination from sourcing in China to delivery across India and beyond!",
    quickReplies: ['Contact information', 'Services', 'How to get started', 'View projects']
  },
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'call', 'message', 'touch'],
    response: "I'd love to connect you with our expert team! We're here to help bring your project to life. 📞\n\n**How to Reach Us:**\n\n📧 **Email & Contact Form**\n   • Visit our Contact page to send us a detailed inquiry\n   • We respond within 24 hours (business days)\n   • Attach project specifications or drawings if available\n\n📱 **Phone & WhatsApp**\n   • Find our contact numbers on the website\n   • Available during business hours (9 AM - 6 PM IST)\n   • Direct line to our project consultants\n\n🌍 **Office Locations:**\n   • **China Office (Foshan)** - Manufacturing coordination\n   • **Chennai Hub** - Main operations & logistics\n   • **Madurai Center** - Regional support\n\n💼 **What to Include in Your Inquiry:**\n   ✓ Project type and scope\n   ✓ Timeline requirements\n   ✓ Approximate budget range\n   ✓ Any specific requirements or preferences\n\nOur team will get back to you with a customized solution proposal!",
    quickReplies: ['Go to contact page', 'Tell me about services', 'View projects', 'Request a quote']
  },
  {
    keywords: ['start', 'begin', 'get started', 'first step', 'initiate', 'how to'],
    response: "Excited to get started with IMEX? Here's how! 🎯\n\n**Step 1**: Share your project requirements\n**Step 2**: We'll provide a customized proposal\n**Step 3**: Review and approve the plan\n**Step 4**: We handle everything else!\n\nReady to transform your space? Let's connect you with our team!",
    quickReplies: ['Contact us now', 'View services', 'See our process', 'Request a quote']
  },
  {
    keywords: ['quality', 'assurance', 'guarantee', 'reliable', 'trust', 'certification'],
    response: "Quality is our top priority! ✅\n\n🔍 **Rigorous Inspection** - Multi-point quality checks\n📋 **Certification** - ISO & international standards\n🎯 **99.8% Quality Assurance** - Proven track record\n🛡️ **Warranty Support** - Protection for your investment\n🏆 **Trusted Manufacturers** - Only work with verified partners\n\nYour satisfaction and quality are guaranteed!",
    quickReplies: ['View our process', 'See projects', 'Request a quote', 'Services']
  },
  {
    keywords: ['time', 'delivery', 'timeline', 'duration', 'how long', 'fast', 'quick'],
    response: "We pride ourselves on efficient delivery! ⚡\n\n⏱️ **60% time savings** compared to traditional methods\n📦 **Standard Timeline**: 4-8 weeks (depends on project scope)\n🚀 **Express Options** available for urgent needs\n📊 **Real-time Tracking** throughout the process\n\nOur streamlined process ensures your project stays on schedule!",
    quickReplies: ['How does it work?', 'Get a quote', 'View services', 'Contact us']
  },
  {
    keywords: ['china', 'chinese', 'manufacturer', 'foshan', 'factory', 'sourcing', 'procurement'],
    response: "Our China operations are our strength! 🇨🇳\n\n🏭 **Based in Foshan** - The sourcing capital\n🤝 **Direct Manufacturer Access** - No middlemen\n🔍 **Verified Partners** - Only trusted factories\n💼 **On-ground Team** - Quality control experts in China\n\nWe leverage China's manufacturing excellence to bring you the best quality at competitive prices!",
    quickReplies: ['How does sourcing work?', 'Quality assurance', 'View services', 'Get started']
  },
  {
    keywords: ['india', 'chennai', 'madurai', 'indian', 'deliver'],
    response: "Our India presence ensures seamless local service! 🇮🇳\n\n📍 **Chennai Hub** - Main operations & logistics\n📍 **Madurai Center** - Regional project coordination\n🚚 **Pan-India Delivery** - We deliver anywhere in India\n👥 **Local Support** - Team available for on-site assistance\n\nFrom customs clearance to final installation, we've got you covered!",
    quickReplies: ['View locations', 'Services', 'Projects', 'Contact us']

  },
  {
    keywords: ['custom', 'customize', 'bespoke', 'personalized', 'design', 'tailor'],
    response: "We love creating custom solutions! 🎨\n\n✨ **Bespoke Design** - Tailored to your vision\n📐 **Custom Dimensions** - Perfect fit for your space\n🎨 **Material Selection** - Choose from premium options\n🔄 **Modifications** - Adapt existing designs\n👨‍🎨 **Design Consultation** - Expert guidance\n\nYour unique vision, our expert execution!",
    quickReplies: ['Start a custom project', 'View portfolio', 'Get a quote', 'Contact designer']
  },
  {
    keywords: ['shipping', 'logistics', 'freight', 'transport', 'customs'],
    response: "Our logistics expertise ensures smooth delivery! 🚢\n\n📦 **Complete Logistics Management**\n✈️ **Air & Sea Freight** options\n📋 **Customs Clearance** - We handle all paperwork\n🚛 **Last-mile Delivery** - To your doorstep\n📍 **Real-time Tracking** - Know where your order is\n\nGlobal shipping made simple and reliable!",
    quickReplies: ['How does it work?', 'Delivery timeline', 'Services', 'Get started']
  },
  {
    keywords: ['thanks', 'thank you', 'appreciate', 'grateful'],
    response: "You're very welcome! 😊 It's my pleasure to help you learn more about IMEX. If you have any more questions or would like to start a project, feel free to ask or connect with our team!",
    quickReplies: ['Contact us', 'View services', 'See projects', 'Request a quote']
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'talk later'],
    response: "Thank you for chatting with me! 👋 I hope I've been helpful. Feel free to return anytime you have questions about IMEX's services. Have a wonderful day!",
    quickReplies: ['Contact us', 'Visit our website', 'View portfolio']
  }
];

// Context-aware response system
export class ChatbotEngine {
  private conversationHistory: Map<string, ChatMessage[]> = new Map();

  findBestMatch(message: string): FAQItem | null {
    const lowerMessage = message.toLowerCase().trim();

    // Find all matching FAQs and score them
    const matches = knowledgeBase
      .map(faq => {
        let score = 0;
        faq.keywords.forEach(keyword => {
          if (lowerMessage.includes(keyword.toLowerCase())) {
            // Give higher score for exact matches
            if (lowerMessage === keyword.toLowerCase()) {
              score += 10;
            } else if (lowerMessage.startsWith(keyword.toLowerCase())) {
              score += 5;
            } else {
              score += 1;
            }
          }
        });
        return { faq, score };
      })
      .filter(match => match.score > 0)
      .sort((a, b) => b.score - a.score);

    return matches.length > 0 ? matches[0].faq : null;
  }

  getBusinessHoursMessage(): string {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();

    // Weekend check
    if (day === 0 || day === 6) {
      return "\n\n*Note: Our team is currently enjoying the weekend but will respond to your inquiry first thing Monday morning!* 🌟";
    }

    // Business hours: 9 AM - 6 PM
    if (hour < 9 || hour >= 18) {
      return "\n\n*Note: Our team has stepped out for the day but will get back to you during business hours (9 AM - 6 PM IST)!* 🌙";
    }

    return "";
  }

  generateResponse(message: string, conversationId?: string): ChatMessage {
    const match = this.findBestMatch(message);

    if (match) {
      const response: ChatMessage = {
        id: randomUUID(),
        role: 'bot',
        content: match.response + this.getBusinessHoursMessage(),
        timestamp: Date.now(),
        quickReplies: match.quickReplies
      };

      if (conversationId) {
        this.addToHistory(conversationId, response);
      }

      return response;
    }

    // Default fallback response with helpful suggestions
    const fallbackResponse: ChatMessage = {
      id: randomUUID(),
      role: 'bot',
      content: "I'd love to help you with that! While I didn't quite catch your specific question, I'm here to assist with:\n\n🏢 Information about IMEX\n📦 Our services and solutions\n🎯 Our project portfolio\n💬 Getting started with a project\n📍 Contact information\n\nCould you please rephrase your question or choose one of the topics above?",
      timestamp: Date.now(),
      quickReplies: ['About IMEX', 'Services', 'Projects', 'Get started', 'Contact us']
    };

    if (conversationId) {
      this.addToHistory(conversationId, fallbackResponse);
    }

    return fallbackResponse;
  }

  addToHistory(conversationId: string, message: ChatMessage): void {
    if (!this.conversationHistory.has(conversationId)) {
      this.conversationHistory.set(conversationId, []);
    }
    this.conversationHistory.get(conversationId)!.push(message);
  }

  getHistory(conversationId: string): ChatMessage[] {
    return this.conversationHistory.get(conversationId) || [];
  }

  clearHistory(conversationId: string): void {
    this.conversationHistory.delete(conversationId);
  }
}

export const chatbotEngine = new ChatbotEngine();
