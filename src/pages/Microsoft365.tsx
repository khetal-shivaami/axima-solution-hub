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
  "Outlook for intelligent email management with focused inbox and calendar integration",
  "Microsoft Teams is built in for chat, calls, and file sharing without switching apps",
  "Word, Excel, PowerPoint, and OneNote with real-time co-authoring across devices",
  "OneDrive for cloud storage with granular sharing controls and offline access",
  "Microsoft Copilot across apps for AI-assisted writing, summarisation, and data analysis",
  "Advanced threat protection with Defender for Office 365 and anti-phishing policies",
];

const benefits = [
  "Consolidate your productivity stack into a single licensed, managed environment",
  "Enable hybrid work with seamless access across desktop, browser, and mobile",
  "Protect sensitive communications with built-in compliance, DLP, and eDiscovery tools",
  "Reduce IT overhead with centralised admin controls and automated update management",
  "Scale from small teams to enterprise organisations without changing platforms",
];

const faqs = [
  {
    "question": "What is Microsoft 365, and what does it include?",
    "answer": "Microsoft 365 combines productivity applications such as Word, Excel, PowerPoint, and Outlook with cloud storage and collaboration tools. Business plans offer features based on your organisation's requirements."
  },
  {
    "question": "Why choose a Microsoft 365 Partner in India?",
    "answer": "A Microsoft 365 Partner in India can help businesses select suitable licences, understand plan options, and coordinate deployment and migration services according to their requirements."
  },
  {
    "question": "Which Microsoft 365 plan is right for my business?",
    "answer": "Microsoft 365 offers different plans with web and desktop applications, business email, cloud storage, and security features. The right plan depends on your team's workflow, application needs, and security requirements."
  },
  {
    "question": "How much does Microsoft 365 cost?",
    "answer": "Microsoft 365 pricing depends on the selected plan, number of users, and subscription terms. Contact Axima to compare available plans and get pricing based on your business requirements."
  },
  {
    "question": "Can I buy Microsoft 365 with a custom business email?",
    "answer": "Yes, eligible Microsoft 365 business plans include professional business email using your company's domain, such as name@yourcompany.com. You can choose a plan based on your email, storage, and productivity requirements."
  },
  {
    "question": "Can I migrate my existing business email to Microsoft 365?",
    "answer": "Yes, email migration can transfer existing mailboxes, messages, and other supported data to Microsoft 365. Migration planning depends on your current email platform, data volume, and business continuity requirements."
  }
];

const Microsoft365 = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Helmet>
        <title>{"Microsoft 365 Partner in India | Buy Microsoft 365 | Axima"}</title>
        <meta name="description" content={"Buy Microsoft 365 business plans from a Microsoft Solutions Partner. Outlook, Teams, OneDrive and Copilot, with setup, migration and 24/7 support in India."} />
        <meta property="og:title" content={"Microsoft 365 Partner in India | Buy Microsoft 365 | Axima"} />
        <meta property="og:description" content={"Buy Microsoft 365 business plans from a Microsoft Solutions Partner. Outlook, Teams, OneDrive and Copilot, with setup, migration and 24/7 support in India."} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Microsoft 365 Partner in India | Buy Microsoft 365 | Axima"} />
        <meta name="twitter:description" content={"Buy Microsoft 365 business plans from a Microsoft Solutions Partner. Outlook, Teams, OneDrive and Copilot, with setup, migration and 24/7 support in India."} />
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
              Email Collaboration
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Microsoft 365</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Microsoft 365 brings business email, documents and team collaboration together in one productivity suite built for the modern workplace. It combines the Microsoft 365 apps your team already knows (Word, Excel, PowerPoint and Outlook) with cloud services such as Exchange Online, SharePoint and 1 TB of OneDrive storage per user, plus professional business email on your own domain."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Microsoft 365 for business comes in three core plans. Microsoft 365 Business Basic and Business Standard, include Copilot Chat for secure AI assistance, while Microsoft 365 Business Premium adds advanced security with Microsoft Defender, Intune, Entra ID and Purview. Each plan is also available with Microsoft 365 Copilot built into Word, Excel, PowerPoint and Teams, and with or without Teams, so you pay only for what your people use. Business plans suit teams of up to 300 users, and for organisations provisioned in India, core data such as email, files and Teams chats is stored at rest in India."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Axima started with Microsoft 365, and it is still at the heart of what we do. As a Microsoft Solutions Partner and Microsoft 365 partner in India, we help you choose the right plan, buy Microsoft 365 at honest prices, handle your Microsoft 365 migration from Google Workspace, Zoho or on-premise Exchange, and secure your tenant from day one. Our certified team supports you 24/7, long after the sale."}
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

export default Microsoft365;
