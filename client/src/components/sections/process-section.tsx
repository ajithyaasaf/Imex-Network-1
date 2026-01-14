import { Timeline } from "@/components/ui/timeline";
import { MessageSquare, FileText, Plane, ShoppingCart, CheckCircle, Package, Ship, Wrench } from "lucide-react";

const processSteps = [
  {
    title: "Discuss Your Project",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-imex-red/10 dark:bg-imex-red/20 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-imex-red" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Project Discussion
          </h4>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Our expert team will discuss your requirements & budget to create a customized sourcing plan.
        </p>
        <div className="bg-imex-red/5 dark:bg-imex-red/10 border-l-4 border-imex-red rounded-lg p-4">
          <h5 className="font-semibold text-imex-red mb-2">✨ Your Advantage:</h5>
          <p className="text-gray-700 dark:text-gray-300">
            Expert guidance ensures your project starts right with optimized budgets.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Our Service Offering",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-imex-red/10 dark:bg-imex-red/20 flex items-center justify-center">
            <FileText className="w-6 h-6 text-imex-red" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Tailored Service & Product List
          </h4>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          We'll provide services and product list tailored to your needs with transparent pricing.
        </p>
        <div className="bg-imex-red/5 dark:bg-imex-red/10 border-l-4 border-imex-red rounded-lg p-4">
          <h5 className="font-semibold text-imex-red mb-2">✨ Your Advantage:</h5>
          <p className="text-gray-700 dark:text-gray-300">
            Complete transparency for informed decision-making.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "China Visit",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-imex-red/10 dark:bg-imex-red/20 flex items-center justify-center">
            <Plane className="w-6 h-6 text-imex-red" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            China Trip Planning & Assistance
          </h4>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          We plan your trip to China & provide you total assistance including factory tours, translation, and logistics.
        </p>
        <div className="bg-imex-red/5 dark:bg-imex-red/10 border-l-4 border-imex-red rounded-lg p-4">
          <h5 className="font-semibold text-imex-red mb-2">✨ Your Advantage:</h5>
          <p className="text-gray-700 dark:text-gray-300">
            See products firsthand with zero logistical stress.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Purchasing",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-imex-red/10 dark:bg-imex-red/20 flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-imex-red" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Expert Guidance in Wholesale Markets
          </h4>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Our Experts Guide you and help to choose best products in the Wholesale Markets with quality assurance.
        </p>
        <div className="bg-imex-red/5 dark:bg-imex-red/10 border-l-4 border-imex-red rounded-lg p-4">
          <h5 className="font-semibold text-imex-red mb-2">✨ Your Advantage:</h5>
          <p className="text-gray-700 dark:text-gray-300">
            Wholesale pricing saves costs without compromising quality.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Quality Check",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-imex-red/10 dark:bg-imex-red/20 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-imex-red" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            A-Level Quality Inspection
          </h4>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Before make shipment we will conduct an A-Level Quality Check of all your Goods to ensure international standards.
        </p>
        <div className="bg-imex-red/5 dark:bg-imex-red/10 border-l-4 border-imex-red rounded-lg p-4">
          <h5 className="font-semibold text-imex-red mb-2">✨ Your Advantage:</h5>
          <p className="text-gray-700 dark:text-gray-300">
            Only products meeting strict standards reach you.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Consolidation Loading",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-imex-red/10 dark:bg-imex-red/20 flex items-center justify-center">
            <Package className="w-6 h-6 text-imex-red" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Secure Warehouse Storage
          </h4>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          After purchasing, we will collect & store your goods securely in our warehouse with optimized container loading.
        </p>
        <div className="bg-imex-red/5 dark:bg-imex-red/10 border-l-4 border-imex-red rounded-lg p-4">
          <h5 className="font-semibold text-imex-red mb-2">✨ Your Advantage:</h5>
          <p className="text-gray-700 dark:text-gray-300">
            Products arrive in perfect condition.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Shipping & Customs Clearance",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-imex-red/10 dark:bg-imex-red/20 flex items-center justify-center">
            <Ship className="w-6 h-6 text-imex-red" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Affordable Shipping & Customs
          </h4>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          We provide affordable shipping and customs clearing process at destination port with complete documentation.
        </p>
        <div className="bg-imex-red/5 dark:bg-imex-red/10 border-l-4 border-imex-red rounded-lg p-4">
          <h5 className="font-semibold text-imex-red mb-2">✨ Your Advantage:</h5>
          <p className="text-gray-700 dark:text-gray-300">
            No customs headaches—we handle all regulations.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Installation & Maintenance",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-imex-red/10 dark:bg-imex-red/20 flex items-center justify-center">
            <Wrench className="w-6 h-6 text-imex-red" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Complete Installation Support
          </h4>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Once the goods reach to you we can also offer complete installation along with ongoing maintenance support.
        </p>
        <div className="bg-imex-red/5 dark:bg-imex-red/10 border-l-4 border-imex-red rounded-lg p-4">
          <h5 className="font-semibold text-imex-red mb-2">✨ Your Advantage:</h5>
          <p className="text-gray-700 dark:text-gray-300">
            Lifelong partnership beyond just the sale.
          </p>
        </div>
      </div>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950" id="process" data-testid="section-process">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6" data-testid="text-process-title">
            The IMEX Blueprint: Your 8-Step Journey from Vision to Reality
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed" data-testid="text-process-description">
            Our proven process is designed to ensure quality, transparency, and on-time delivery for every client. 
            Experience seamless execution from concept to completion.
          </p>
        </div>
        <Timeline data={processSteps} />
      </div>
    </section>
  );
}
