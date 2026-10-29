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
  "Aadhaar eSign and DSC-based signing compliant with Indian IT Act and CCA guidelines",
  "Multi-party signing workflows with sequential and parallel signing order configuration",
  "Document templates for frequently used agreements to eliminate repetitive setup",
  "Audit trail with timestamped signer activity, IP logging, and tamper-evident records",
  "API integration for embedding signing workflows into existing business applications",
  "Mobile-friendly signing interface for signatories on any device",
];

const benefits = [
  "Close deals and approvals faster by eliminating print, scan, and courier delays",
  "Stay legally compliant with signatures valid under Indian law and recognised by courts",
  "Reduce paper and printing costs with a fully digital document workflow",
  "Protect document integrity with cryptographic sealing and end-to-end audit logs",
  "Scale signing workflows across departments without adding administrative overhead",
];

const faqs = [
  {
    "question": "What is FlexiSign Digital Signature in India?",
    "answer": "FlexiSign is positioned as a digital signing solution for businesses that want to manage document signing electronically. Evaluate its available signing methods and features against your organisation's document workflows."
  },
  {
    "question": "How does an electronic signature platform help businesses?",
    "answer": "An electronic signature platform helps businesses send documents for signing, track signing progress, and manage completed agreements digitally. It can reduce manual paperwork and streamline approval workflows."
  },
  {
    "question": "Why choose an e-signatures provider for business documents?",
    "answer": "An e-signatures provider can help organisations simplify document execution, reduce printing and scanning, and improve signing workflow visibility. The right solution depends on document types, verification needs, and compliance requirements."
  },
  {
    "question": "Are electronic signatures legally valid in India?",
    "answer": "Electronic signatures may be legally recognised in India, subject to applicable laws, document types, and signing methods. Businesses should verify whether the chosen platform supports the required signature type and legal requirements."
  },
  {
    "question": "Can FlexiSign support remote document signing?",
    "answer": "Digital signing platforms can enable participants to review and sign documents remotely, depending on the product's capabilities. Confirm FlexiSign's supported workflows, signer verification methods, and audit trail features before deployment."
  },
  {
    "question": "How can businesses choose the right electronic signature solution?",
    "answer": "Businesses should evaluate signer authentication, document tracking, integration options, audit trails, security, and applicable legal requirements. Contact Axima to discuss your document signing needs and confirm FlexiSign's available capabilities."
  }
];

const FFlexiSign = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Helmet>
        <title>{"FlexiSign Digital Signature in India | Aadhaar eSign | Axima"}</title>
        <meta name="description" content={"Sign contracts online with FlexiSign. Aadhaar eSign, IT Act compliance, signing order, reminders and court-admissible audit trails, set up by Axima."} />
        <meta property="og:title" content={"FlexiSign Digital Signature in India | Aadhaar eSign | Axima"} />
        <meta property="og:description" content={"Sign contracts online with FlexiSign. Aadhaar eSign, IT Act compliance, signing order, reminders and court-admissible audit trails, set up by Axima."} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"FlexiSign Digital Signature in India | Aadhaar eSign | Axima"} />
        <meta name="twitter:description" content={"Sign contracts online with FlexiSign. Aadhaar eSign, IT Act compliance, signing order, reminders and court-admissible audit trails, set up by Axima."} />
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
              E-Signature
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">FlexiSign</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"FlexiSign is an electronic signature platform that lets you sign documents online, send them for signature and manage every agreement securely, without the delays of printing, scanning and couriering. It is built for contracts, offer letters, vendor agreements and approvals that need to move fast, and its registered office is in Thane, Maharashtra."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"For Indian businesses, FlexiSign supports Aadhaar eSign, where each signer is verified with an OTP sent to their Aadhaar-registered mobile number, and it states full compliance with the Information Technology Act, 2000. Every document carries an audit trail and timestamp that FlexiSign describes as court-admissible, along with document fingerprinting and OTP-based signer authentication. You can set a signing order or let everyone sign at once, send automatic reminders, reuse templates for common agreements, bundle documents and collect in-person signatures, across more than 25 file types. FlexiSign connects with Google Drive, OneDrive and Dropbox, and offers an API, webhooks, Zapier and Pabbly to embed e-signatures in your CRM, ERP or HR system. It lists ISO 27001 and SOC 2 Type II among its certifications."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Axima helps you set up FlexiSign for your teams, build templates for your most-used documents and connect it to the tools you already use. Close deals faster, cut paper costs and keep every signature legally sound, with our 24/7 support behind you."}
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

export default FFlexiSign;
