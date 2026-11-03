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
  "Check Point Infinity platform for consolidated security across all attack surfaces",
  "Next-generation firewall with intrusion prevention, application control, and URL filtering",
  "CloudGuard for cloud-native security across AWS, Azure, and Google Cloud workloads",
  "Harmony Endpoint for advanced threat protection on desktops, laptops, and mobile devices",
  "ThreatCloud AI with real-time threat intelligence from 150,000+ connected networks globally",
  "Zero-day threat prevention with sandboxing, anti-ransomware, and credential theft protection",
];

const benefits = [
  "Reduce security complexity by consolidating multiple point solutions into one unified platform",
  "Prevent attacks in real time rather than detecting and responding after the damage is done",
  "Gain full visibility across network, cloud, and endpoint from a single management console",
  "Stay ahead of emerging threats with continuously updated AI-driven threat intelligence",
  "Simplify compliance with built-in reporting for GDPR, PCI DSS, HIPAA, and ISO 27001",
];

const faqs = [
  {
    "question": "What are Check Point security solutions?",
    "answer": "Check Point security solutions help protect networks, cloud environments, email systems, endpoints, and users against cyber threats. Businesses can select solutions based on their security architecture and risk requirements."
  },
  {
    "question": "Why choose a Check Point Partner for cybersecurity?",
    "answer": "A Check Point Partner can help organisations evaluate security requirements, identify suitable products, and coordinate implementation. The available deployment and support services depend on the partner's authorisations and expertise."
  },
  {
    "question": "What is the Check Point cyber security platform used for?",
    "answer": "The Check Point cyber security platform offers security capabilities for network protection, cloud workloads, email, and user access. It helps organisations strengthen threat prevention and security management across their IT environments."
  },
  {
    "question": "How does a Check Point firewall protect business networks?",
    "answer": "A Check Point firewall controls network traffic according to configured security policies. Depending on the model and subscription, it can provide capabilities such as intrusion prevention, application control, and threat protection."
  },
  {
    "question": "How does Check Point Email Security protect business email?",
    "answer": "Check Point Email Security helps detect and prevent threats such as phishing, malicious attachments, and harmful links. It supports protection for business email environments, including Microsoft 365 and Google Workspace."
  },
  {
    "question": "Can Check Point security solutions protect cloud and on-premises environments?",
    "answer": "Yes, Check Point offers security solutions for cloud and on-premises environments. The appropriate deployment depends on your infrastructure, workloads, network design, and security objectives."
  }
];

const CheckPoint = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Helmet>
        <title>{"Check Point Cyber Security Solutions in India | Axima"}</title>
        <meta name="description" content={"Stop attacks before they reach your business with Check Point. Firewalls, email security, cloud and endpoint protection powered by ThreatCloud AI, via Axima."} />
        <meta property="og:title" content={"Check Point Cyber Security Solutions in India | Axima"} />
        <meta property="og:description" content={"Stop attacks before they reach your business with Check Point. Firewalls, email security, cloud and endpoint protection powered by ThreatCloud AI, via Axima."} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Check Point Cyber Security Solutions in India | Axima"} />
        <meta name="twitter:description" content={"Stop attacks before they reach your business with Check Point. Firewalls, email security, cloud and endpoint protection powered by ThreatCloud AI, via Axima."} />
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
          <div className="text-left w-full pt-20">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-axima-blue border border-axima-blue/30 rounded-full mb-4">
              Cyber Security
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Check Point</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Check Point is a leading provider of AI-powered, cloud-delivered cybersecurity solutions designed to protect organizations against phishing, ransomware, malware, zero-day attacks, and other advanced cyber threats. As a Check Point partner, we provide security solutions that help businesses safeguard their digital environments. Check Point Email Security protects Microsoft 365 and Google Workspace against email-borne threats through advanced inline and API-based protection, leveraging its patented security architecture to detect phishing, business email compromise (BEC), malicious attachments, and sensitive-data leakage. Powered by ThreatCloud AI, it strengthens email security through intelligent threat detection, malware prevention, and Data Loss Prevention (DLP) capabilities."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Check Point's comprehensive portfolio also includes Endpoint Security, offering EPP, EDR, and XDR capabilities to prevent, detect, investigate, and respond to endpoint threats; Quantum Network Security, providing next-generation firewall protection, intrusion prevention, application control, and secure connectivity; and CloudGuard, helping protect cloud workloads, applications, and infrastructure across AWS, Microsoft Azure, and Google Cloud. Powered by advanced threat intelligence and centralized security management, Check Point solutions help organizations improve visibility, simplify security operations, and build a stronger defense against evolving cyber threats."}
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

export default CheckPoint;
