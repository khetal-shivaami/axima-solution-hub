import { Facebook, Twitter, Linkedin, ChevronDown } from "lucide-react";
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
  { label: "Microsoft 365 Landing", href: "/landing" },
];

const m365Products = [
  { name: "Word", route: "/product/word" },
  { name: "Excel", route: "/product/excel" },
  { name: "PowerPoint", route: "/product/powerpoint" },
  { name: "Teams", route: "/product/teams" },
  { name: "Outlook", route: "/product/outlook" },
  { name: "OneDrive", route: "/product/onedrive" },
  { name: "SharePoint", route: "/product/sharepoint" },
  { name: "Exchange", route: "/product/exchange" },
  { name: "Intune", route: "/product/intune" }
];

const solutionColumns = {
  cloud: [
    { name: "Microsoft Azure", route: "/microsoft-azure" },
    { name: "Jio Azure", route: "/microsoft-jioazure" },
    { name: "Google Cloud", route: "/google-cloud" },
    { name: "Amazon Web Services", route: "/products/amazon-web-services" },
    { name: "HYCU", route: "/products/hycu" },
    { name: "Spin.AI", route: "/products/spin-ai" },
    { name: "Digiboxx", route: "/products/digiboxx" },
  ],
  productivity: [
    { name: "Microsoft 365", route: "/microsoft-365" },
    { name: "Microsoft Copilot", route: "/copilot" },
    { name: "Google Workspace", route: "/products/google-workspace" },
    { name: "Zoho", route: "/products/zoho-mail" },
    { name: "Zoom", route: "/products/zoom" },
    { name: "Microsoft Teams", route: "/products/microsoft-teams" },
    { name: "Superworks", route: "/superworks" },
    { name: "FlexiSign", route: "/flexisign" },
    { name: "RecurPost", route: "/recurpost" },
  ],
  securityIt: [
    { name: "Check Point", route: "/check-point" },
    { name: "JumpCloud", route: "/jumpcloud" },
    { name: "miniOrange", route: "/miniorange" },
    { name: "1Password", route: "/onepassword" },
    { name: "Scalefusion", route: "/scalefusion" },
    { name: "Atera", route: "/atera" },
    { name: "SuperOps", route: "/superops" },
    { name: "Viami", route: "/viami" },
    { name: "Chrome OS", route: "/chrome-os" },
  ],
};

const Footer = () => {
  const [expandedM365, setExpandedM365] = useState(false);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/axima-corporation/posts/?feedView=all", label: "LinkedIn" },
  ];

  const address = "1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const toggleM365 = () => setExpandedM365(!expandedM365);

  const renderLink = (product: { name: string; route: string }) => (
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
  );

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
                  href="tel:+917757841333"
                  className="hover:text-axima-blue transition-colors cursor-pointer"
                >
                  +91 77578 41333
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
            <h3 className="text-xl font-bold text-white mb-4">Cloud Solutions</h3>
            <ul className="space-y-2">
              {solutionColumns.cloud.map(renderLink)}
            </ul>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">Productivity & Collaboration</h3>
            <ul className="space-y-2">
              <li>
                <div className="relative">
                  <button
                    onClick={toggleM365}
                    className="text-gray-300 hover:text-axima-blue transition-colors flex items-center cursor-pointer group relative w-full text-left"
                  >
                    <span className="mr-2 group-hover:text-axima-blue transition-colors">›</span>
                    <span className="group-hover:translate-x-1 transition-transform flex-1">
                      Microsoft 365
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 ml-2 transition-transform duration-300 ${expandedM365 ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedM365 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden ml-5 mt-2"
                      >
                        <ul className="space-y-1 border-l border-gray-700 pl-3">
                          {m365Products.map((product) => (
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
              {solutionColumns.productivity.slice(1).map(renderLink)}
            </ul>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">Security & IT Management</h3>
            <ul className="space-y-2">
              {solutionColumns.securityIt.map(renderLink)}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center mb-4 md:mb-0">
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
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Axima Corporation. All rights reserved.
            </p>

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
                Refund/Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
