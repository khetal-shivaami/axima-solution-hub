
import { FC } from "react";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  HelpCircle,
  Cloud,
  Mail,
  Video,
  DatabaseBackup,
  ShieldCheck,
  KeyRound,
  FileSignature,
  UsersRound,
  Wrench,
  MonitorCog,
  Share2,
  Layers3,
  BookOpen,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";
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
  singleColumn?: boolean;
};


export const navItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  {
    label: "Products & Services",
    mega: [
      {
        title: "Cloud Infrastructure",
        items: [
          { label: "Microsoft Azure", href: "/microsoft-azure", description: "Scalable cloud infrastructure" },
          { label: "Jio Azure", href: "/microsoft-jioazure", description: "Azure hosted in India" },
          { label: "Google Cloud", href: "/google-cloud", description: "AI-ready cloud platform" },
          { label: "Amazon Web Services", href: "/products/amazon-web-services", description: "Flexible global cloud services" },
        ],
      },
      {
        title: "Email Collaboration",
        items: [
          { label: "Microsoft 365", href: "/microsoft-365", description: "Workplace productivity suite" },
          { label: "Microsoft Copilot", href: "/copilot", description: "AI-powered work assistant" },
          { label: "Google Workspace", href: "/products/google-workspace", description: "Cloud collaboration tools" },
          { label: "Zoho", href: "/products/zoho-mail", description: "Secure business email" },
        ],
      },
      {
        title: "Video Conferencing",
        items: [
          { label: "Zoom", href: "/products/zoom", description: "Meetings and webinars" },
          { label: "Microsoft Teams", href: "/products/microsoft-teams", description: "Chat, calls and teamwork" },
        ],
      },
      {
        title: "Backup Solutions",
        items: [
          { label: "HYCU", href: "/products/hycu", description: "Multi-cloud data protection" },
          { label: "Spin.AI", href: "/products/spin-ai", description: "SaaS security and backup" },
          { label: "Digiboxx", href: "/products/digiboxx", description: "Made-in-India cloud storage" },
        ],
      },
      {
        title: "Cyber Security",
        items: [
          { label: "Checkpoint", href: "/check-point", description: "Unified cyber threat prevention" },
        ],
      },
      {
        title: "IAM & MDM",
        items: [
          { label: "JumpCloud", href: "/jumpcloud", description: "Cloud directory and access" },
          { label: "miniOrange", href: "/miniorange", description: "Identity and access security" },
          { label: "1Password", href: "/onepassword", description: "Secure password management" },
          { label: "Scalefusion", href: "/scalefusion", description: "Unified endpoint management" },
        ],
      },
      {
        title: "E-Signature",
        items: [{ label: "FlexiSign", href: "/flexisign", description: "Digital signatures made simple" }],
      },
      {
        title: "HRMS",
        items: [{ label: "Superworks", href: "/superworks", description: "Complete HR management" }],
      },
      {
        title: "ITSM",
        items: [
          { label: "Atera", href: "/atera", description: "All-in-one IT management" },
          { label: "SuperOps", href: "/superops", description: "Modern IT service management" },
          { label: "Viami", href: "/viami", description: "Smart business automation" },
        ],
      },
      {
        title: "Operating Systems",
        items: [{ label: "Chrome OS", href: "/chrome-os", description: "Secure cloud-first operating system" }],
      },
      {
        title: "Social Media Management",
        items: [{ label: "RecurPost", href: "/recurpost", description: "Social media scheduling" }],
      },
      {
        title: "Services",
        items: [
          { label: "All Services", href: "/services", description: "Explore our IT services" },
          { label: "Support Packages", href: "/support-packages", description: "Expert support for your business" },
          { label: "Plans & Pricing", href: "/plans", description: "Compare available plans" },
          { label: "All Products", href: "/products", description: "Browse every solution" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    singleColumn: true,
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
          { label: "Support Matrix", href: "/support", description: "Help desk and escalation" },
        ],
      },
    ],
  },
  { label: "Shop", href: "https://bv158t-1z.myshopify.com/", external: true },
  { label: "Contact Us", href: "/contact" },
  { label: "Upcoming Events", href: "/upcoming-events", blink: true },
];

const megaColumnIcons: Record<string, LucideIcon> = {
  "Cloud Infrastructure": Cloud,
  "Email Collaboration": Mail,
  "Video Conferencing": Video,
  "Backup Solutions": DatabaseBackup,
  "Cyber Security": ShieldCheck,
  "IAM & MDM": KeyRound,
  "E-Signature": FileSignature,
  HRMS: UsersRound,
  ITSM: Wrench,
  "Operating Systems": MonitorCog,
  "Social Media Management": Share2,
  Services: Layers3,
  Learn: BookOpen,
  Engage: MessagesSquare,
};

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const catTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
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
    closeTimer.current = setTimeout(() => {
      setOpenMega(null);
      setOpenCategory(null);
    }, 120);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-transparent backdrop-blur-sm shadow-lg" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      {/* Top utility strip */}
      <div className="hidden md:block border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex h-9 items-center justify-end gap-6 text-xs text-gray-300">
            <div className="w-56">
              <Searchbar />
            </div>
            <a href="tel:+919833929393" className="flex items-center gap-1.5 hover:text-axima-blue transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +91 98339 29393
            </a>
            <Link to="/support" className="flex items-center gap-1.5 hover:text-axima-blue transition-colors">
              <HelpCircle className="w-3.5 h-3.5" />
              Support
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col items-center">
            <img
              src="/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png"
              alt="Axima Corporation"
              className="h-9"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-7 text-[15px]">
            {navItems.map((item) => {
              if (item.mega) {
                const isOpenMenu = openMega === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      handleMegaEnter(item.label);
                      setOpenCategory(null);
                    }}
                    onMouseLeave={handleMegaLeave}
                  >
                    <Link
                      to={item.label === "Products & Services" ? "/solutions" : "#"}
                      onClick={(e) => {
                        if (item.label !== "Products & Services") e.preventDefault();
                        else setOpenMega(null);
                      }}
                      className="flex items-center gap-1 py-2 text-white hover:text-axima-blue transition-colors duration-200"
                      aria-expanded={isOpenMenu}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isOpenMenu ? "rotate-180" : ""}`}
                      />
                    </Link>

                    {isOpenMenu && (
                      <div
                        className={`fixed left-1/2 -translate-x-1/2 top-[116px] bg-black/95 backdrop-blur-md border border-axima-blue/30 rounded-xl shadow-2xl p-5 animate-fade-in ${
                          item.singleColumn ? "w-[min(300px,92vw)]" : "w-[min(880px,92vw)]"
                        }`}
                        onMouseEnter={() => handleMegaEnter(item.label)}
                        onMouseLeave={handleMegaLeave}
                      >
                        <div className={item.singleColumn ? "grid grid-cols-1 gap-y-6" : "grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6"}>
                          {item.mega.map((col, colIndex) => {
                            const ColumnIcon = megaColumnIcons[col.title];
                            const isLastInRow = item.singleColumn
                              ? colIndex === item.mega.length - 1
                              : colIndex % 3 === 2;
                            return (
                              <div
                                key={col.title}
                                className="relative"
                                onMouseEnter={() => {
                                  if (catTimer.current) clearTimeout(catTimer.current);
                                  setOpenCategory(col.title);
                                }}
                                onMouseLeave={() => {
                                  if (catTimer.current) clearTimeout(catTimer.current);
                                  catTimer.current = setTimeout(() => setOpenCategory(null), 150);
                                }}
                              >
                                <button
                                  type="button"
                                  onClick={() => setOpenCategory(openCategory === col.title ? null : col.title)}
                                  aria-expanded={openCategory === col.title}
                                  className={`mb-3 flex w-full cursor-pointer items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                                    openCategory === col.title ? "text-white" : "text-axima-blue hover:text-white"
                                  }`}
                                >
                                  {ColumnIcon && <ColumnIcon className="h-4 w-4 shrink-0" aria-hidden="true" />}
                                  <span>{col.title}</span>
                                  <ChevronRight
                                    className={`ml-auto h-3.5 w-3.5 transition-transform ${openCategory === col.title ? "translate-x-0.5 text-white" : ""}`}
                                  />
                                </button>
                                {openCategory === col.title && (
                                  <div
                                    className={`absolute top-0 z-50 min-w-[260px] animate-fade-in rounded-xl border border-axima-blue/30 bg-black/95 p-3 shadow-2xl backdrop-blur-md ${
                                      isLastInRow ? "right-full mr-3" : "left-full ml-3"
                                    }`}
                                  >
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
                                )}
                              </div>
                            );
                          })}
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
                  } ${item.blink ? "animate-glow-ring rounded-full border border-axima-blue/50 bg-axima-blue/10 px-3 font-semibold text-axima-blue hover:bg-axima-blue/20 hover:text-axima-blue" : ""}`}
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

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-axima-blue px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Let's Connect
            </Link>
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
                      onClick={() => {
                        setMobileExpanded(expanded ? null : item.label);
                        setOpenCategory(null);
                      }}
                      className="w-full flex items-center justify-between py-2 px-4 text-white hover:text-axima-blue"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded && (
                      <div className="pl-4 pb-2">
                        {item.mega.map((col) => {
                          const ColumnIcon = megaColumnIcons[col.title];
                          return (
                            <div key={col.title} className="mb-2">
                              <button
                                type="button"
                                onClick={() => setOpenCategory(openCategory === col.title ? null : col.title)}
                                aria-expanded={openCategory === col.title}
                                className="flex w-full items-center gap-2 px-4 py-1 text-xs uppercase tracking-wider text-axima-blue/80"
                              >
                                {ColumnIcon && <ColumnIcon className="h-4 w-4 shrink-0" aria-hidden="true" />}
                                <span>{col.title}</span>
                                <ChevronDown
                                  className={`ml-auto h-3.5 w-3.5 transition-transform ${openCategory === col.title ? "rotate-180" : ""}`}
                                />
                              </button>
                              {openCategory === col.title && (
                              <>
                              {col.items.map((sub) =>
                              isExternalLink(sub.href) ? (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  className="block py-1.5 px-4 text-sm text-white/90 hover:text-axima-blue"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span className="block">{sub.label}</span>
                                  {sub.description && (
                                    <span className="mt-0.5 block text-xs text-gray-400">{sub.description}</span>
                                  )}
                                </a>
                              ) : (
                                <Link
                                  key={sub.label}
                                  to={sub.href}
                                  className="block py-1.5 px-4 text-sm text-white/90 hover:text-axima-blue"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span className="block">{sub.label}</span>
                                  {sub.description && (
                                    <span className="mt-0.5 block text-xs text-gray-400">{sub.description}</span>
                                  )}
                                </Link>
                              )
                              )}
                              </>
                              )}
                            </div>
                          );
                        })}
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
                  } ${item.blink ? "mx-4 my-1 animate-glow-ring rounded border border-axima-blue/50 bg-axima-blue/10 font-semibold text-axima-blue" : ""}`}
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
