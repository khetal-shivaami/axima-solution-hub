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
  "Unified PSA and RMM in a single platform with no module switching",
  "AI-powered ticket triaging, summarisation, and resolution suggestions",
  "Remote monitoring with customisable alert policies and automated runbooks",
  "Project management with task dependencies, time tracking, and milestone tracking",
  "Client portal for transparent ticket visibility and communication with end users",
  "Integrated invoicing, contracts, and billing with time log automation",
];

const benefits = [
  "Eliminate tool sprawl by running PSA and RMM from a single, connected interface",
  "Handle more clients with the same team using AI that automates routine triage and responses",
  "Deliver faster resolutions with contextual ticket intelligence and automated escalation rules",
  "Improve client satisfaction with a branded portal that keeps communication transparent",
  "Grow revenue predictably with integrated billing that captures every billable minute automatically",
];

const faqs = [
  {
    "question": "What is SuperOps, and how does it help IT teams?",
    "answer": "SuperOps is an IT management platform that helps organisations and managed service providers monitor endpoints, automate IT tasks, manage patches, and streamline support operations."
  },
  {
    "question": "What are the benefits of using an RMM platform?",
    "answer": "A Remote Monitoring and Management (RMM) platform helps IT teams monitor device health, detect issues, deploy updates, and troubleshoot systems remotely. It supports proactive IT maintenance and reduces manual work."
  },
  {
    "question": "Why choose a SuperOps reseller in India?",
    "answer": "A SuperOps reseller in India can help businesses evaluate subscription options, understand platform capabilities, and coordinate onboarding based on their IT management requirements."
  },
  {
    "question": "Is SuperOps suitable for Managed Service Providers (MSPs)?",
    "answer": "Yes, SuperOps offers MSP-focused capabilities that combine remote monitoring and management with service desk, ticketing, and professional services automation features, depending on the selected solution."
  },
  {
    "question": "How does SuperOps support patch management?",
    "answer": "SuperOps helps IT teams automate supported operating system and third-party software updates, configure patch policies, and monitor deployment status to improve endpoint maintenance."
  },
  {
    "question": "Can SuperOps manage IT operations from one platform?",
    "answer": "SuperOps brings together capabilities such as endpoint monitoring, remote access, patch management, and service management. Available features depend on the selected product and subscription."
  }
];

const SuperOps = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Helmet>
        <title>{"SuperOps PSA & RMM for MSPs and IT Teams | Axima"}</title>
        <meta name="description" content={"Run your MSP or IT team on SuperOps. Unified PSA and RMM, Monica AI, patching, ticketing, projects and billing, set up and supported by Axima."} />
        <meta property="og:title" content={"SuperOps PSA & RMM for MSPs and IT Teams | Axima"} />
        <meta property="og:description" content={"Run your MSP or IT team on SuperOps. Unified PSA and RMM, Monica AI, patching, ticketing, projects and billing, set up and supported by Axima."} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"SuperOps PSA & RMM for MSPs and IT Teams | Axima"} />
        <meta name="twitter:description" content={"Run your MSP or IT team on SuperOps. Unified PSA and RMM, Monica AI, patching, ticketing, projects and billing, set up and supported by Axima."} />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">SuperOps</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"SuperOps is an AI-native IT management platform with two products. MSPSuite is a unified PSA and RMM platform built for managed service providers (MSPs), and ITSuite is an agentic IT management platform for internal IT teams. Founded in 2020 with an office in Chennai, SuperOps now has customers in more than 104 countries."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Monica, SuperOps' built-in agentic AI assistant, summarises tickets, writes worklogs, generates scripts, recommends solutions from similar past tickets and deflects routine requests before they reach a technician. AI Patch Manager and AI Dispatcher automate patching and ticket assignment. MSPSuite combines professional services automation with remote monitoring and management, network monitoring, project and contract management, quotes, and billing that integrates with QuickBooks, Xero and Stripe, while a client portal lets customers raise tickets and track status, assets and invoices. ITSuite brings endpoint management, service desk, asset management, patching, MDM and IT documentation together across Windows, Mac, Linux, Android and iOS."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Axima helps MSPs and IT teams move to SuperOps from legacy tools with minimal disruption. We migrate client and asset data, configure SLAs, alerts and billing rules, and train your technicians so the platform is working for you from week one. It is MSP software that grows with your client base, backed by our 24/7 support."}
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

export default SuperOps;
