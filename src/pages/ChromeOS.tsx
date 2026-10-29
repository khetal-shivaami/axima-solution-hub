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
  "Cloud-native architecture with Google Workspace and web apps as the primary work environment",
  "Built-in Google Play Store access for Android app support on Chromebooks",
  "Automatic OS and security updates with no user action or downtime required",
  "Chrome Enterprise Upgrade for centralised device management via Google Admin Console",
  "Verified Boot and sandboxing to prevent malware from persisting across sessions",
  "Linux development environment support for technical and developer use cases",
];

const benefits = [
  "Reduce IT management overhead with devices that update and secure themselves automatically",
  "Lower hardware costs with affordable Chromebook devices designed for cloud workloads",
  "Improve security posture with an OS built from the ground up with zero-trust principles",
  "Enable faster employee onboarding with devices that are ready to use in under a minute",
  "Extend device lifespan with lightweight OS requirements that run well on modest hardware",
];

const faqs = [
  {
    "question": "What is ChromeOS Enterprise?",
    "answer": "ChromeOS Enterprise provides enterprise management and security capabilities for organisations using ChromeOS devices. It helps IT teams manage devices, apply policies, and control access to corporate resources."
  },
  {
    "question": "What is ChromeOS Enterprise Upgrade?",
    "answer": "ChromeOS Enterprise Upgrade is a paid upgrade that enables additional enterprise management, security, and administration capabilities on eligible ChromeOS devices. Features depend on the applicable upgrade and device configuration."
  },
  {
    "question": "What is zero-touch enrolment in ChromeOS?",
    "answer": "Zero-touch enrolment allows eligible, pre-provisioned ChromeOS devices to enrol automatically into an organisation's management environment during initial setup. This reduces the need for manual IT configuration for each device."
  },
  {
    "question": "How does zero-touch enrolment benefit enterprise IT teams?",
    "answer": "Zero-touch enrolment simplifies device deployment by applying organisational enrolment settings when compatible, pre-provisioned devices are first set up. It can help IT teams scale device rollouts across offices and distributed workforces."
  },
  {
    "question": "Can ChromeOS Enterprise manage devices across multiple locations?",
    "answer": "Yes, administrators can use centralised management to configure policies and manage enrolled ChromeOS devices across different locations. Available controls depend on the licence, device eligibility, and administration setup."
  },
  {
    "question": "What should businesses consider before purchasing ChromeOS Enterprise Upgrade?",
    "answer": "Businesses should check device compatibility, required management features, licence availability, and enrolment requirements. For zero-touch enrolment, eligible devices must also be pre-provisioned through an authorised partner."
  }
];

const ChromeOS = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Helmet>
        <title>{"ChromeOS Enterprise Upgrade & Chromebooks for Business in India | Axima"}</title>
        <meta name="description" content={"Give your team fast, secure ChromeOS devices. Chromebooks for business with ChromeOS Enterprise Upgrade, zero-touch enrolment and 24/7 support from Axima."} />
        <meta property="og:title" content={"ChromeOS Enterprise Upgrade & Chromebooks for Business in India | Axima"} />
        <meta property="og:description" content={"Give your team fast, secure ChromeOS devices. Chromebooks for business with ChromeOS Enterprise Upgrade, zero-touch enrolment and 24/7 support from Axima."} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"ChromeOS Enterprise Upgrade & Chromebooks for Business in India | Axima"} />
        <meta name="twitter:description" content={"Give your team fast, secure ChromeOS devices. Chromebooks for business with ChromeOS Enterprise Upgrade, zero-touch enrolment and 24/7 support from Axima."} />
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
              Operating Systems
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Chrome OS</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"ChromeOS Enterprise (also written Chrome OS) is Google's secure, cloud-first operating system for business. Chromebooks start up in seconds, update themselves in the background and keep work in the cloud, so employees can sign in on any device and pick up where they left off. ChromeOS runs Google Workspace, the Microsoft 365 app with Word, Excel and PowerPoint, and Android apps from Google Play, with Linux support for developers."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Security is built into the operating system. Verified Boot checks the system every time it starts, a read-only OS blocks executable files, and sandboxing keeps threats contained. Google states that as of 2026 there has been no documented, successful ransomware attack on ChromeOS. Full updates arrive every four weeks, and Chromebooks released from 2021 onwards get 10 years of automatic updates. With ChromeOS Enterprise Upgrade, IT teams manage every device from the Google Admin console, and zero-touch enrolment means devices can ship straight to employees already configured. ChromeOS Flex can refresh the devices you already own at no cost, and Chromebook Plus devices come with Gemini built in."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Axima helps you choose the right Chromebooks for business, from affordable models for frontline staff to premium Chromebook Plus devices for leaders, and handles enrolment, policy setup and rollout. Lower hardware costs, fewer IT tickets and devices that are ready to use from day one, with our 24/7 support behind you."}
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

export default ChromeOS;
