import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const usefulLinks = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Plans & Pricing", href: "#pricing" },
    { label: "Case Study", href: "#case-study" },
    { label: "Support", href: "#support" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const handleAddressClick = () => {
    const address = "1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <footer className="w-full bg-black/40 border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AXIMA CORPORATION</h3>
            <address 
              className="text-gray-300 not-italic flex items-start gap-2 cursor-pointer hover:text-axima-blue transition-colors"
              onClick={handleAddressClick}
            >
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              1001, 10th Floor, Runwal R Square,<br />
              LBS Road, Mulund West, Mumbai - 400080
            </address>
            <div className="mt-4 space-y-2">
              <p className="text-gray-300 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a 
                  href="tel:+917758741333" 
                  className="hover:text-axima-blue transition-colors"
                >
                  +91 775 874 1333
                </a>
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a 
                  href="mailto:info@axima.com" 
                  className="hover:text-axima-blue transition-colors"
                >
                  info@axima.com
                </a>
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-axima-blue transition-colors flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-axima-blue transition-colors flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Networks */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Social Networks</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-axima-blue transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Axima Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;