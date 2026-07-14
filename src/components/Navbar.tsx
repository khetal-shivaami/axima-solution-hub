
import { FC } from "react";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Searchbar } from "./Searchbar";

type SubItem = { label: string; href: string; description?: string };
type MegaColumn = { title: string; items: SubItem[] };
type NavItem = {
  label: string;
  href?: string;
  blink?: boolean;
  external?: boolean;
  mega?: MegaColumn[];
};

const navItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  {
    label: "Products & Services",
    mega: [
      {
        title: "Cloud Infrastructure",
        items: [
          { label: "Microsoft Azure", href: "/microsoft-azure" },
          { label: "Jio Azure", href: "/microsoft-jioazure" },
          { label: "Google Cloud", href: "/google-cloud" },
          { label: "Amazon Web Services", href: "/products/amazon-web-services" },
        ],
      },
      {
        title: "Email Collaboration",
        items: [
          { label: "Microsoft 365", href: "/microsoft-365" },
          { label: "Microsoft Copilot", href: "/copilot" },
          { label: "Google Workspace", href: "/products/google-workspace" },
          { label: "Zoho", href: "/products/zoho-mail" },
        ],
      },
      {
        title: "Video Conferencing",
        items: [
          { label: "Zoom", href: "/products/zoom" },
          { label: "Microsoft Teams", href: "/products/microsoft-teams" },
        ],
      },
      {
        title: "Backup Solutions",
        items: [
          { label: "HYCU", href: "/products/hycu" },
          { label: "Spin.AI", href: "/products/spin-ai" },
          { label: "Digiboxx", href: "/products/digiboxx" },
        ],
      },
      {
        title: "Cyber Security",
        items: [
          { label: "Checkpoint", href: "/cyber-security" },
        ],
      },
      {
        title: "IAM & MDM",
        items: [
          { label: "JumpCloud", href: "/jumpcloud" },
          { label: "miniOrange", href: "/miniorange" },
          { label: "1Password", href: "/onepassword" },
          { label: "Scalefusion", href: "/scalefusion" },
        ],
      },
      {
        title: "E-Signature",
        items: [{ label: "FlexiSign", href: "/flexisign" }],
      },
      {
        title: "HRMS",
        items: [{ label: "Superworks", href: "/superworks" }],
      },
      {
        title: "ITSM",
        items: [
          { label: "Atera", href: "/atera" },
          { label: "SuperOps", href: "/superops" },
          { label: "Viami", href: "/viami" },
        ],
      },
      {
        title: "Operating Systems",
        items: [{ label: "Chrome OS", href: "/chrome-os" }],
      },
      {
        title: "Social Media Management",
        items: [{ label: "RecurPost", href: "/recurpost" }],
      },
      {
        title: "Services",
        items: [
          { label: "All Services", href: "/services" },
          { label: "Support Packages", href: "/support-packages" },
          { label: "Plans & Pricing", href: "/plans" },
          { label: "All Products", href: "/products" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    mega: [
      {
        title: "Learn",
        items: [
          { label: "Blog", href: "/blog", description: "Insights and how-tos" },
          { label: "Case Studies", href: "/case-studies", description: "Customer success stories" },
          { label: "FAQ", href: "/faq", description: "Frequently asked questions" },
        ],
      },
      {
        title: "Engage",
        items: [
          { label: "Upcoming Events", href: "/upcoming-events", description: "Webinars and live sessions" },
          { label: "Contact Sales", href: "/contact", description: "Talk to our experts" },
        ],
      },
    ],
  },
  { label: "Shop", href: "https://bv158t-1z.myshopify.com/", external: true },
  { label: "Upcoming Events", href: "/upcoming-events", blink: true },
  { label: "Contact Us", href: "/contact" },
];

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isExternalLink = (href: string) => href.startsWith("#") || href.startsWith("http");
  const isCurrentPage = (href: string) => location.pathname === href;

  const handleMegaEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMega(label);
  };
  const handleMegaLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMega(null), 120);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col items-center">
            <img
              src="/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png"
              alt="Axima Corporation"
              className="h-12"
            />
            <span className="text-white mt" style={{ fontSize: "8px" }}>
              Microsoft Cloud Solution Providers
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              if (item.mega) {
                const isOpenMenu = openMega === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMegaEnter(item.label)}
                    onMouseLeave={handleMegaLeave}
                  >
                    <button
                      className="flex items-center gap-1 py-2 text-white hover:text-axima-blue transition-colors duration-200"
                      aria-expanded={isOpenMenu}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isOpenMenu ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpenMenu && (
                      <div
                        className="fixed left-1/2 -translate-x-1/2 top-20 w-[min(1300px,96vw)] bg-black/95 backdrop-blur-md border border-axima-blue/30 rounded-xl shadow-2xl p-6 animate-fade-in"
                        onMouseEnter={() => handleMegaEnter(item.label)}
                        onMouseLeave={handleMegaLeave}
                      >
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-6">
                          {item.mega.map((col) => (
                            <div key={col.title}>
                              <h4 className="text-axima-blue text-xs font-semibold uppercase tracking-wider mb-3">
                                {col.title}
                              </h4>
                              <ul className="space-y-1">
                                {col.items.map((sub) => (
                                  <li key={sub.label}>
                                    {isExternalLink(sub.href) ? (
                                      <a
                                        href={sub.href}
                                        className="block p-2 rounded-lg hover:bg-white/5 transition-colors group"
                                        onClick={() => setOpenMega(null)}
                                      >
                                        <div className="text-white group-hover:text-axima-blue font-medium text-sm">
                                          {sub.label}
                                        </div>
                                        {sub.description && (
                                          <div className="text-gray-400 text-xs mt-0.5">{sub.description}</div>
                                        )}
                                      </a>
                                    ) : (
                                      <Link
                                        to={sub.href}
                                        className="block p-2 rounded-lg hover:bg-white/5 transition-colors group"
                                        onClick={() => setOpenMega(null)}
                                      >
                                        <div className="text-white group-hover:text-axima-blue font-medium text-sm">
                                          {sub.label}
                                        </div>
                                        {sub.description && (
                                          <div className="text-gray-400 text-xs mt-0.5">{sub.description}</div>
                                        )}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const href = item.href!;
              return isExternalLink(href) || item.external ? (
                <a
                  key={item.label}
                  href={href}
                  className="transition-colors duration-200 text-white hover:text-axima-blue relative py-2"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={href}
                  className={`transition-colors duration-200 text-white hover:text-axima-blue relative py-2 ${
                    isCurrentPage(href) ? "font-semibold text-axima-blue" : ""
                  } ${item.blink ? "animate-pulse text-yellow-400 hover:text-yellow-300 font-semibold" : ""}`}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    {isCurrentPage(href) && <ChevronDown className="w-4 h-4 animate-bounce" />}
                  </span>
                  {isCurrentPage(href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-axima-blue transform origin-left transition-transform duration-300"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <Searchbar />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in bg-black/95 rounded-lg mt-2">
            <div className="p-4">
              <Searchbar />
            </div>
            {navItems.map((item) => {
              if (item.mega) {
                const expanded = mobileExpanded === item.label;
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileExpanded(expanded ? null : item.label)}
                      className="w-full flex items-center justify-between py-2 px-4 text-white hover:text-axima-blue"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded && (
                      <div className="pl-4 pb-2">
                        {item.mega.map((col) => (
                          <div key={col.title} className="mb-2">
                            <div className="px-4 py-1 text-xs uppercase tracking-wider text-axima-blue/80">
                              {col.title}
                            </div>
                            {col.items.map((sub) =>
                              isExternalLink(sub.href) ? (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  className="block py-1.5 px-4 text-sm text-white/90 hover:text-axima-blue"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {sub.label}
                                </a>
                              ) : (
                                <Link
                                  key={sub.label}
                                  to={sub.href}
                                  className="block py-1.5 px-4 text-sm text-white/90 hover:text-axima-blue"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              )
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              const href = item.href!;
              return isExternalLink(href) || item.external ? (
                <a
                  key={item.label}
                  href={href}
                  className="block py-2 px-4 text-white hover:text-axima-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={href}
                  className={`block py-2 px-4 text-white hover:text-axima-blue ${
                    isCurrentPage(href) ? "font-semibold text-axima-blue bg-white/5" : ""
                  } ${item.blink ? "animate-pulse text-yellow-400 font-semibold" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};
