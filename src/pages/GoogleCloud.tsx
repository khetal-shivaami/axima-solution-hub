import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoStrap from "@/components/BookDemoStrap";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";

const features = [
  "Global network spanning 40+ regions with low-latency connectivity",
  "Compute Engine and GKE for flexible VM and container workloads",
  "BigQuery for serverless, petabyte-scale data analytics",
  "Vertex AI for building, deploying, and managing ML models",
  "Cloud Storage with multi-region redundancy and fine-grained access controls",
  "Integrated security with Chronicle SIEM, Security Command Center, and zero-trust architecture",
];

const benefits = [
  "Reduce infrastructure overhead with fully managed services that scale automatically",
  "Cut the total cost of ownership with sustained use discounts and committed use contracts",
  "Accelerate AI adoption with pre-trained Google models and Gemini integration",
  "Meet compliance requirements across ISO, SOC 2, GDPR, and India-specific frameworks",
  "Get faster time-to-market with CI/CD pipelines and DevOps-ready tooling",
];

const faqs = [
  {
    question: "What is Google Cloud Platform (GCP), and how can it benefit my business?",
    answer:
      "Google Cloud Platform (GCP) is a suite of cloud computing services that helps businesses build, deploy, manage, and scale applications and workloads securely. It offers solutions for computing, storage, databases, networking, data analytics, artificial intelligence (AI), and cloud security. By adopting Google Cloud, businesses can improve operational efficiency, support digital transformation, and scale their IT infrastructure based on changing business needs.",
  },
  {
    question: "Why choose Axima as your Google Cloud Platform reseller in India?",
    answer:
      "Axima helps businesses explore and adopt Google Cloud solutions based on their technical requirements and business objectives. As a Google Cloud Platform reseller, Axima can assist with cloud solution selection, subscription and billing guidance, deployment coordination, and ongoing cloud requirements, depending on the services engaged. Businesses looking for a Google Cloud partner in India can work with Axima to identify suitable GCP solutions for infrastructure modernisation, application development, data management, and business growth.",
  },
  {
    question: "What services does a Google Cloud Platform service provider offer?",
    answer:
      "A Google Cloud Platform service provider helps businesses plan, implement, manage, and optimise their cloud environments. Services may include cloud infrastructure setup, virtual machine deployment, storage and database configuration, cloud migration, networking, security implementation, backup planning, performance monitoring, and cost optimisation. The scope depends on the provider's expertise and service portfolio. Working with the right GCP service provider helps businesses align their cloud infrastructure with performance, security, scalability, and budget requirements.",
  },
  {
    question: "How can Axima help with Google Cloud migration?",
    answer:
      "Axima can help businesses evaluate their existing IT infrastructure and identify suitable workloads for migration to Google Cloud. A cloud migration project may involve workload assessment, migration planning, data transfer, application deployment, testing, and post-migration optimisation, depending on the agreed scope. Moving workloads to GCP can help organisations improve scalability, modernise applications, and reduce the burden of managing on-premises infrastructure. A structured migration approach also helps minimise disruption and support business continuity.",
  },
  {
    question: "Is Google Cloud Platform secure for business applications and data?",
    answer:
      "Google Cloud Platform provides a range of security capabilities, including identity and access management, data encryption, network security controls, monitoring, and threat detection tools. Businesses can use these capabilities to establish security controls that align with their operational and compliance requirements. A qualified Google Cloud partner in India can help assess security needs, configure appropriate controls, and develop cloud security practices. However, security responsibilities are shared between Google Cloud and the customer, depending on the services and deployment model used.",
  },
  {
    question: "How much does Google Cloud Platform cost, and how can businesses optimise their cloud spending?",
    answer:
      "Google Cloud Platform pricing depends on the services used, computing resources, storage capacity, network traffic, region, and usage duration. Businesses can manage costs by selecting appropriate machine types, monitoring resource consumption, identifying idle resources, and using suitable pricing options. A Google Cloud Platform reseller or GCP service provider can help businesses understand their estimated cloud expenditure, review resource requirements, and identify potential cost optimisation opportunities. Contact Axima to discuss your business requirements and explore suitable Google Cloud solutions.",
  },
];

const GoogleCloud = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Helmet>
        <title>Google Cloud Partner in India | GCP Services | Axima</title>
        <meta name="description" content="Run and scale on Google Cloud Platform with Axima. Mumbai and Delhi regions, BigQuery, Gemini AI, Google Cloud migration and 24/7 support in India." />
        <meta property="og:title" content="Google Cloud Partner in India | GCP Services | Axima" />
        <meta property="og:description" content="Run and scale on Google Cloud Platform with Axima. Mumbai and Delhi regions, BigQuery, Gemini AI, Google Cloud migration and 24/7 support in India." />
        <meta property="og:url" content="https://axima-solution-hub.lovable.app/google-cloud" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Cloud Partner in India | GCP Services | Axima" />
        <meta name="twitter:description" content="Run and scale on Google Cloud Platform with Axima. Mumbai and Delhi regions, BigQuery, Gemini AI, Google Cloud migration and 24/7 support in India." />
      </Helmet>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <Navbar />
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
              Cloud Infrastructure
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Google Cloud</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              Google Cloud is a secure, AI-ready cloud platform that lets businesses run workloads, build applications and scale without limits. Google Cloud Platform (GCP) covers everything from Compute Engine virtual machines and Google Kubernetes Engine (GKE) for containers to BigQuery, Google's autonomous data to AI platform, and Gemini Enterprise Agent Platform (formerly Vertex AI) for building and deploying AI models and agents.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              For businesses running Google Cloud in India, there are two local regions, Mumbai and Delhi, so you can keep data close to your customers and plan disaster recovery without data leaving the country. Services in both regions are MeitY-empanelled, and Google Cloud publishes compliance guidance for RBI, SEBI and IRDAI requirements. Customer data is encrypted at rest by default, and pay-as-you-go pricing means no upfront costs and no termination fees, with committed use discounts for steady workloads.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              Axima makes Google Cloud simple to adopt. As your Google Cloud partner in India, we help you design the right architecture, plan your Google Cloud migration with minimal disruption, keep spending under control through cost optimisation, and support you 24/7 once you are live. From your first workload to your hundredth, you deal with one partner who knows your setup.
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

export default GoogleCloud;
