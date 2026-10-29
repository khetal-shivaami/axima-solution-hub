import { Helmet } from "react-helmet-async";
import { FaqSchema } from "@/components/FaqSchema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoStrap from "@/components/BookDemoStrap";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";

const features = [
  "Remote monitoring and management with real-time alerts and automated remediation scripts",
  "AI-powered helpdesk with ticket management, SLA tracking, and canned response suggestions",
  "Patch management for Windows, macOS, and third-party applications with scheduling controls",
  "Remote access with integrated Splashtop and AnyDesk for secure technician sessions",
  "Network discovery and asset inventory with hardware and software tracking",
  "Billing and contract management for MSPs with time tracking and invoice generation",
];

const benefits = [
  "Manage unlimited devices at a fixed monthly cost without scaling fees eating into margins",
  "Resolve issues faster with AI-assisted ticketing that suggests solutions from your knowledge base",
  "Reduce client downtime with proactive monitoring and automated alerts before problems escalate",
  "Simplify IT operations by replacing multiple tools with one integrated RMM and PSA platform",
  "Improve team productivity with automation scripts that handle routine maintenance tasks hands-free",
];

const faqs = [
  {
    "question": "Why choose an Atera partner?",
    "answer": "An Atera partner can help businesses evaluate IT management requirements, understand subscription options, and coordinate platform setup."
  },
  {
    "question": "How does Atera support patch management?",
    "answer": "Atera provides patch management capabilities to help IT teams identify and deploy supported software and operating system updates. Automation and reporting features can help streamline routine maintenance."
  },
  {
    "question": "What is the difference between patch management tools and patch management software?",
    "answer": "Patch management tools and patch management software help IT teams identify missing updates, deploy patches, and monitor update status. Atera combines patch management with broader IT monitoring and remote management features."
  },
  {
    "question": "Can Atera help manage multiple devices remotely?",
    "answer": "Yes, Atera enables IT teams to monitor and manage supported endpoints remotely. Features such as remote access, alerts, and automation help simplify routine IT operations."
  },
  {
    "question": "How can I purchase Atera in India?",
    "answer": "Businesses can explore Atera subscription options through Axima - Atera reseller in India. Confirm plan availability and included features based on your IT team's requirements."
  }
];

const Atera = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Helmet>
        <title>{"Atera RMM & PSA Platform in India | IT Management | Axima"}</title>
        <meta name="description" content={"Run remote monitoring, helpdesk, patching and remote access from one AI-powered platform. Atera offers pay-per-technician pricing for unlimited endpoints."} />
        <meta property="og:title" content={"Atera RMM & PSA Platform in India | IT Management | Axima"} />
        <meta property="og:description" content={"Run remote monitoring, helpdesk, patching and remote access from one AI-powered platform. Atera offers pay-per-technician pricing for unlimited endpoints."} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Atera RMM & PSA Platform in India | IT Management | Axima"} />
        <meta name="twitter:description" content={"Run remote monitoring, helpdesk, patching and remote access from one AI-powered platform. Atera offers pay-per-technician pricing for unlimited endpoints."} />
      </Helmet>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <Navbar />
      <FaqSchema faqs={faqs} />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Hero */}
          <div className="text-left w-full pt-8">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-axima-blue border border-axima-blue/30 rounded-full mb-4">
              ITSM
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Atera</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Atera is an autonomous IT management platform with built-in AI agents, designed for managed service providers (MSPs), internal IT departments and IT consultants. It combines remote monitoring and management (RMM), professional services automation (PSA), helpdesk ticketing, patch management and remote access in one tool, with pay-per-technician pricing for unlimited endpoints, so your costs don't grow with every new device."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Atera RMM monitors servers, workstations and networks in real time and runs scripts to fix common issues automatically. Patch management keeps Windows, macOS and Linux devices and third-party applications up to date on your schedule. AI Copilot, included in every plan, summarises tickets, writes scripts from plain-English prompts, troubleshoots devices in real time and turns resolved tickets into knowledge base articles. Robin, Atera's autonomous IT service agent, takes user requests from Microsoft Teams, Slack, email and the customer portal. Remote access works with AnyDesk, Splashtop, TeamViewer or ScreenConnect, and the PSA covers contracts, SLAs, time tracking and billing with QuickBooks and Xero."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Axima helps MSPs and in-house IT teams move to Atera with a clean setup: agent rollout, monitoring thresholds, alert rules, patch policies and automation scripts that suit your environment. Less firefighting, more planned work, and a partner in India who answers when you call, 24/7."}
            </p>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-axima-blue hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Start Building Today
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue transition-all duration-300 group h-full">
                    <div className="p-4 flex items-start space-x-3">
                      <div className="p-2 rounded-full bg-axima-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-5 w-5 text-axima-blue" />
                      </div>
                      <p className="text-gray-300 group-hover:text-axima-blue transition-colors duration-300">
                        {feature}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/40 border border-white/10 hover:border-axima-blue transition-all duration-300 group h-full">
                    <div className="p-4 flex items-start space-x-3">
                      <div className="p-2 rounded-full bg-axima-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-5 w-5 text-axima-blue" />
                      </div>
                      <p className="text-gray-300 group-hover:text-axima-blue transition-colors duration-300">
                        {benefit}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <BookDemoStrap />


          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-black/40 border border-white/10 hover:border-axima-blue/40 transition-all duration-300 overflow-hidden">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-5 text-left flex items-start justify-between gap-3"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start gap-3">
                          <HelpCircle className="h-5 w-5 text-axima-blue flex-shrink-0 mt-0.5" />
                          <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-300 pl-12 pr-5 pb-5 leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Atera;
