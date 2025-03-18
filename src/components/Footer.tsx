import { Facebook, Twitter, Linkedin, Instagram, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const usefulLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Plans & Pricing", href: "/plans" },
  { label: "Microsoft Copilot", href: "/copilot" },
  { label: "Contact Us", href: "/contact" },
];

const productCategories = {
  microsoft: [
    { name: "Microsoft 365", route: "/microsoft-365" }
  ],
  microsoftProducts: [
    { name: "Word", route: "/product/word" },
    { name: "Excel", route: "/product/excel" },
    { name: "PowerPoint", route: "/product/powerpoint" },
    { name: "Teams", route: "/product/teams" },
    { name: "Outlook", route: "/product/outlook" },
    { name: "OneDrive", route: "/product/onedrive" },
    { name: "SharePoint", route: "/product/sharepoint" },
    { name: "Exchange", route: "/product/exchange" },
    { name: "Intune", route: "/product/intune" }
  ],
  other: [
    { name: "MS Azure", route: "/microsoft-azure" },
    { name: "MS Azure from Jio Region", route: "/microsoft-jioazure" },
    { name: "Jumpcloud", route: "/product/jumpcloud" },
    { name: "Atera", route: "/product/atera" },
    { name: "Spin AI", route: "/product/spin-ai" },
    { name: "HYCU", route: "/product/hycu" },
    { name: "ZOOM", route: "/product/zoom" },
    { name: "1Password", route: "/product/onepassword" },
    { name: "Scaledino", route: "/product/scaledino" },
    { name: "Scalefusion", route: "/product/scalefusion" },
    { name: "FlexiSign", route: "/product/flexisign" }
  ]
};

const Footer = () => {
  const [expandedMicrosoft365, setExpandedMicrosoft365] = useState(false);
  
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/axima-corporation/posts/?feedView=all", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/axima.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  ];

  const address = "1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const toggleMicrosoft365 = () => {
    setExpandedMicrosoft365(!expandedMicrosoft365);
  };

  const partnerBadges = [
    { src: "/lovable-uploads/5cf95f28-273b-49de-ba24-1a982f1a2739.png", alt: "Microsoft Partner" },
    { src: "/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png", alt: "Microsoft Cloud Solution Provider" },
  ];

  return (
    <footer className="relative w-full bg-black/40 border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">AXIMA CORPORATION</h3>
            <address className="text-gray-300 not-italic">
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-axima-blue transition-colors cursor-pointer block"
              >
                1001, 10th Floor, Runwal R Square,<br />
                LBS Road, Mulund West, Mumbai - 400080
              </a>
            </address>
            <div className="mt-4 space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span>{" "}
                <a 
                  href="tel:+917758741333" 
                  className="hover:text-axima-blue transition-colors cursor-pointer"
                >
                  +91 775 874 1333
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span>{" "}
                <div className="space-y-1">
                  <a 
                    href="mailto:info@axima.in" 
                    className="hover:text-axima-blue transition-colors cursor-pointer block"
                  >
                    info@axima.in
                  </a>
                  <a 
                    href="mailto:support@axima.in" 
                    className="hover:text-axima-blue transition-colors cursor-pointer block"
                  >
                    support@axima.in
                  </a>
                </div>
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">Microsoft Solutions</h3>
            <ul className="space-y-2">
              <li>
                <div className="relative">
                  <button
                    onClick={toggleMicrosoft365}
                    className="text-gray-300 hover:text-axima-blue transition-colors flex items-center cursor-pointer group relative w-full text-left"
                  >
                    <span className="mr-2 group-hover:text-axima-blue transition-colors">›</span>
                    <span className="group-hover:translate-x-1 transition-transform flex-1">
                      Microsoft 365
                    </span>
                    <ChevronDown 
                      className={`h-4 w-4 ml-2 transition-transform duration-300 ${expandedMicrosoft365 ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedMicrosoft365 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden ml-5 mt-2"
                      >
                        <ul className="space-y-1 border-l border-gray-700 pl-3">
                          {productCategories.microsoftProducts.map((product) => (
                            <li key={product.name}>
                              <Link
                                to={product.route}
                                className="text-gray-400 hover:text-axima-blue transition-colors flex items-center cursor-pointer group relative text-sm py-1"
                              >
                                <span className="mr-1 text-xs group-hover:text-axima-blue transition-colors">•</span>
                                <span className="group-hover:translate-x-0.5 transition-transform">
                                  {product.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
              
              {productCategories.microsoft.slice(1).map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.route}
                    className="text-gray-300 hover:text-axima-blue transition-colors flex items-center cursor-pointer group relative"
                  >
                    <span className="mr-2 group-hover:text-axima-blue transition-colors">›</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {product.name}
                    </span>
                  </Link>
                </li>
              ))}
              
              {productCategories.other.slice(0, 2).map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.route}
                    className="text-gray-300 hover:text-axima-blue transition-colors flex items-center cursor-pointer group relative"
                  >
                    <span className="mr-2 group-hover:text-axima-blue transition-colors">›</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {product.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">Other Solutions</h3>
            <ul className="space-y-2">
              {productCategories.other.slice(2).map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.route}
                    className="text-gray-300 hover:text-axima-blue transition-colors flex items-center cursor-pointer group relative"
                  >
                    <span className="mr-2 group-hover:text-axima-blue transition-colors">›</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {product.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-axima-blue transition-colors flex items-center cursor-pointer group relative"
                    >
                      <span className="mr-2 group-hover:text-axima-blue transition-colors">›</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-axima-blue transition-colors flex items-center cursor-pointer group relative"
                    >
                      <span className="mr-2 group-hover:text-axima-blue transition-colors">›</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center mb-8">
            <h3 className="text-xl font-bold text-white mr-4">Our Social Networks</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-axima-blue transition-colors cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Axima Corporation. All rights reserved.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-4 mb-4 md:mb-0 justify-center order-first md:order-first">
                <div className="flex items-center gap-4">
                  <img 
                    src="/lovable-uploads/5cf95f28-273b-49de-ba24-1a982f1a2739.png" 
                    alt="Microsoft Partner" 
                    className="h-12 object-contain" 
                  />
                  <img 
                    src="/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png" 
                    alt="Microsoft Cloud Solution Provider" 
                    className="h-12 object-contain" 
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Link to="/privacy-policy" className="text-gray-300 hover:text-axima-blue transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-axima-blue transition-colors">
                  Terms & Conditions
                </Link>
                <span className="text-gray-600">|</span>
                <Link to="/refund-policy" className="text-gray-300 hover:text-axima-blue transition-colors">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
