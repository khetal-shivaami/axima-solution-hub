import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Plans & Pricing", href: "#pricing" },
  { label: "Case Study", href: "#case-study" },
  { label: "Support", href: "#support" },
  { label: "Contact Us", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black shadow-lg" : "bg-white shadow-md"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png" alt="Axima Corporation" className="h-12" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 ${
                  scrolled 
                    ? "text-axima-blue hover:text-axima-blue/80" 
                    : "text-gray-600 hover:text-axima-blue"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className={scrolled ? "text-axima-blue" : "text-gray-600"} />
            ) : (
              <Menu size={24} className={scrolled ? "text-axima-blue" : "text-gray-600"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block py-2 transition-colors duration-200 ${
                  scrolled 
                    ? "text-axima-blue hover:text-axima-blue/80" 
                    : "text-gray-600 hover:text-axima-blue"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};