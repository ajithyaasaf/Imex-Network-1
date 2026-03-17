import { Mail, Phone, Globe } from "lucide-react";
import logoPath from "@assets/Logo_1755174068526.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-imex-gray text-white py-16" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src={logoPath}
                alt="IMEX - A Division of IMEXAO - Connecting Globally"
                className="h-20 w-auto object-contain mb-4 filter brightness-150 contrast-200"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Premium sourcing and import/export solutions for global projects.
            </p>
            <p className="text-imex-yellow font-semibold">
              "WE MAKE YOUR PLACE BETTER THAN OTHERS"
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-sourcing"
                >
                  Product Sourcing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-factory"
                >
                  Factory Assistance
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-shipping"
                >
                  Shipping Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-installation"
                >
                  Installation & Maintenance
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-imex-red mr-3" />
                <a
                  href="mailto:skyimex1@gmail.com"
                  className="hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  skyimex1@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-imex-red mr-3" />
                <a
                  href="tel:+919842110585"
                  className="hover:text-white transition-colors"
                  data-testid="footer-phone"
                >
                  +91 98421 10585
                </a>
              </div>
              <div className="flex items-start">
                <Globe className="w-5 h-5 text-imex-red mr-3 mt-1" />
                <div className="space-y-1" data-testid="footer-locations">
                  <p>India - Chennai/Madurai</p>
                  <p>China - Foshan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <p className="text-gray-400 text-center mb-3" data-testid="footer-copyright">
            &copy; 2025 IMEX - Division of IMEXAO (利华盛贸易有限公司). All
            rights reserved.
          </p>
          <p className="text-gray-500 text-center text-sm">
            Designed and developed by{" "}
            <a
              href="https://www.godivatech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-imex-red hover:text-red-400 transition-colors underline"
              data-testid="link-godivatech"
            >
              GodivaTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
