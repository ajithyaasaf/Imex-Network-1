import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const faqs = [
  {
    id: "faq-1",
    question: "Why should I source goods from China when I have local options?",
    answer:
      "China is currently the world's leading international supplier, exporting a vast range of products globally. The variety and range of goods available in China are unparalleled, attracting buyers from around the world. You can expect uncompromising quality, excellent craftsmanship, and competitive pricing. Plus, with our expertise, timely delivery is a standard commitment.",
  },
  {
    id: "faq-2",
    question: "Can I get tailored or customized solutions according to my requirements?",
    answer:
      "Absolutely! We specialize in customized goods that meet your specific requirements, sizes, and design preferences. Whether you need custom items for a hotel, specialized equipment for a hospital, or unique fixtures for a retail outlet, we can provide a solution that's perfectly tailored to your needs.",
  },
  {
    id: "faq-3",
    question: "Will we face language barriers in China?",
    answer:
      "No, language won't be an issue. Our trained staff speaks multiple languages including Hindi, English, and Chinese. We will assist you in all communications and coordinate with manufacturers on your behalf, ensuring smooth negotiations and clear understanding throughout the sourcing process.",
  },
  {
    id: "faq-4",
    question: "How do you ensure product quality?",
    answer:
      "Quality is our top priority. We conduct rigorous factory audits, perform multiple quality inspections during production, and do final quality checks before shipping. Our team is present on the ground in China to monitor every stage of production, ensuring that what you receive meets your exact specifications.",
  },
  {
    id: "faq-5",
    question: "What is the typical timeline for an order from start to delivery?",
    answer:
      "The timeline varies depending on the complexity and size of your order. Generally, production takes 30-60 days after order confirmation. Shipping by sea typically adds 3-4 weeks. We provide detailed timelines upfront and keep you updated throughout the process so you can plan accordingly.",
  },
  {
    id: "faq-6",
    question: "Do you handle all customs and import documentation?",
    answer:
      "Yes, we provide end-to-end service including all customs clearance and import documentation. Our team handles everything from export documentation in China to import clearance at your destination, making the entire process hassle-free for you.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
      data-testid="faq-section"
    >
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-imex-red/10 text-imex-red px-6 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="font-semibold text-sm uppercase tracking-wide">
                Got Questions?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about sourcing from China and how IMEX can help your business
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 px-6"
                  data-testid={faq.id}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-imex-red transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
