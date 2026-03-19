import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import logoPath from "@assets/Logo_1755174068526.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { scrollY } = useScroll();
  const isScrolled = scrollY > 50;

  const isActive = (path: string) => location === path;

  const darkHeroPages = ["/services", "/who-we-are", "/clients", "/contact"];
  const needsWhiteText = darkHeroPages.includes(location);

  const getTextColor = () => {
    return "text-white";
  };

  const getIconColor = () => {
    return "text-white";
  };

  // Prevent body scroll when menu is open, preserving scroll position
  useEffect(() => {
    if (isMenuOpen) {
      const currentScrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%"; // Prevent width changes
      return () => {
        // Cleanup not needed here as it's handled on close
      };
    } else {
      const savedScrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(savedScrollY || "0", 10) * -1);
    }
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 40,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  const navItems = [
    { href: "/", label: "Home", testId: "mobile-nav-home" },
    { href: "/who-we-are", label: "Who We Are", testId: "mobile-nav-about" },
    { href: "/services", label: "Services", testId: "mobile-nav-services" },
    // { href: "/portfolio", label: "Portfolio", testId: "mobile-nav-portfolio" },
    { href: "/clients", label: "Clients", testId: "mobile-nav-clients" },
    { href: "/contact", label: "Contact", testId: "mobile-nav-contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0d1215]/95 backdrop-blur-md shadow-lg" : "bg-[#0d1215]"
        }`}
      data-testid="header-navigation"
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center" data-testid="logo-imex">
            <img
              src={logoPath}
              alt="IMEX - A Division of IMEXAO - Connecting Globally"
              className={`w-auto object-contain transition-all duration-300 ${isScrolled
                ? "h-12 sm:h-14 md:h-16"
                : "h-16 sm:h-20 md:h-24"
                }`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <Link
              href="/"
              className={`text-sm lg:text-base transition-colors hover:text-imex-red ${isActive("/") ? "font-semibold !text-imex-red" : getTextColor()}`}
              data-testid="nav-home"
            >
              Home
            </Link>
            <Link
              href="/who-we-are"
              className={`text-sm lg:text-base transition-colors hover:text-imex-red ${isActive("/who-we-are") ? "font-semibold !text-imex-red" : getTextColor()}`}
              data-testid="nav-about"
            >
              Who We Are
            </Link>
            <Link
              href="/services"
              className={`text-sm lg:text-base transition-colors hover:text-imex-red ${isActive("/services") ? "font-semibold !text-imex-red" : getTextColor()}`}
              data-testid="nav-services"
            >
              Process
            </Link>
            {/* <Link
              href="/portfolio"
              className={`text-sm lg:text-base transition-colors hover:text-imex-red ${isActive("/portfolio") ? "font-semibold !text-imex-red" : getTextColor()}`}
              data-testid="nav-portfolio"
            >
              Portfolio
            </Link> */}
            <Link
              href="/clients"
              className={`text-sm lg:text-base transition-colors hover:text-imex-red ${isActive("/clients") ? "font-semibold !text-imex-red" : getTextColor()}`}
              data-testid="nav-clients"
            >
              Clients
            </Link>
            <Link
              href="/contact"
              className={`text-sm lg:text-base transition-colors hover:text-imex-red ${isActive("/contact") ? "font-semibold !text-imex-red" : getTextColor()}`}
              data-testid="nav-contact"
            >
              Contact
            </Link>
            <Link href="/contact">
              <Button
                variant="imex"
                size="lg"
                data-testid="button-start-project"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden z-[60] relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className={`w-6 h-6 ${getIconColor()}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-imex-gray via-gray-900 to-black z-50 md:hidden shadow-2xl"
              data-testid="mobile-menu"
            >
              <div className="flex flex-col h-full p-8 pt-24">
                {/* Menu Items */}
                <nav className="flex-1 flex flex-col justify-center space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div key={item.href} variants={menuItemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-4 px-6 text-2xl font-bold transition-all duration-300 rounded-xl ${isActive(item.href)
                          ? "text-white bg-imex-red shadow-lg shadow-imex-red/50"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                          }`}
                        data-testid={item.testId}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Button */}
                <motion.div
                  variants={menuItemVariants}
                  className="pt-8 border-t border-white/20"
                >
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="imex"
                      size="lg"
                      className="w-full text-lg py-6 shadow-lg shadow-imex-red/30 hover:shadow-imex-red/50 transition-all"
                      data-testid="mobile-button-start-project"
                    >
                      Start Your Project
                    </Button>
                  </Link>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  variants={menuItemVariants}
                  className="pt-6 text-center"
                >
                  <p className="text-gray-500 text-sm">Connecting Globally</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
