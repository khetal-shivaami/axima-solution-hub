import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ManagementTeam } from "@/components/ManagementTeam";
import { WhyChooseAxima } from "@/components/WhyChooseAxima";
import IndiaLocationsMap from "@/components/IndiaLocationsMap";
import TechPartnersRibbon from "@/components/TechPartnersRibbon";
import { motion } from "framer-motion";
import { MapPin, Target, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-black relative snap-y snap-mandatory">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <Navbar />

      {/* Hero / About */}
      <section className="relative min-h-[65vh] flex items-center justify-center px-4 pt-24 pb-6 snap-start">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-axima-blue border border-axima-blue/30 rounded-full mb-3">
              About Axima
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
                Empowering Businesses with
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-axima-blue via-blue-400 to-blue-600">
                Smarter IT Solutions.
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="space-y-3 text-gray-300 leading-relaxed text-base text-left"
            >
              <p>
                Axima Corporation is a Mumbai-based IT solutions and technology provider helping businesses across India simplify operations, strengthen security, and accelerate digital transformation. We work closely with organisations to understand their technology requirements and deliver solutions that improve productivity, enhance collaboration, and support business growth.
              </p>
              <p>
                Founded in 2014, Axima Corporation is a sister company of Shivaami, one of India's recognised cloud technology companies. Backed by this association and a strong understanding of the evolving IT landscape, we bring together technology expertise, industry knowledge, and a customer-centric approach to business problem-solving.
              </p>
              <p>
                Our expertise spans cloud computing, business productivity, cybersecurity, identity and access management, endpoint management, and digital workplace solutions. We offer a comprehensive portfolio of solutions, including Microsoft Azure, Jio Azure, Google Cloud Platform, Amazon Web Services, Microsoft 365, Microsoft Copilot, Google Workspace, Zoho Mail, Zoom Workplace, Microsoft Teams, Spin.AI, Check Point, JumpCloud, miniOrange, 1Password, Microsoft Intune & EMS, Hexnode, FlexiSign, Atera, SuperOps, Viami, and ChromeOS Enterprise. As an authorised partner for these technology solutions, we work closely with leading global technology providers to help businesses select, implement, and manage the right technologies based on their unique requirements.
              </p>
              <p>
                At Axima, we believe technology should solve real business challenges, not add complexity. From technology consulting and solution selection to deployment, integration, and ongoing support, we help organisations build secure, connected, and future-ready IT environments.
              </p>
              <p>
                Our focus is simple: the right technology, thoughtfully implemented, to deliver measurable business value.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:max-w-md md:ml-auto w-full"
          >
            <div className="relative bg-gradient-to-br from-axima-blue/10 to-transparent p-6 rounded-2xl border border-axima-blue/20 hover:border-axima-blue/50 transition-all duration-300 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-axima-blue/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 mb-3 relative">
                <div className="p-2.5 bg-axima-blue/15 rounded-xl">
                  <Target className="h-5 w-5 text-axima-blue" />
                </div>
                <h2 className="text-xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed relative">
                To be India's most trusted technology partner for businesses that want to work smarter, stay secure, and grow without limits.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-axima-blue/10 to-transparent p-6 rounded-2xl border border-axima-blue/20 hover:border-axima-blue/50 transition-all duration-300 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-axima-blue/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 mb-3 relative">
                <div className="p-2.5 bg-axima-blue/15 rounded-xl">
                  <Rocket className="h-5 w-5 text-axima-blue" />
                </div>
                <h2 className="text-xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed relative">
                To simplify technology for Indian businesses by bringing the right tools, the right expertise, and the right support together. We listen first, recommend honestly, and stay with you long after the deal is done.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="min-h-[65vh] flex items-center justify-center relative snap-start py-6">
        <WhyChooseAxima />
      </section>

      {/* Locations & Partners */}
      <section className="min-h-[65vh] flex items-center justify-center relative snap-start px-4 py-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-axima-blue border border-axima-blue/30 rounded-full mb-3">
              Our Reach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Across India, Backed by Global Technology</h2>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="min-w-0"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-axima-blue" />
                <span className="text-xs uppercase tracking-widest text-axima-blue font-medium">Locations</span>
              </div>
              <div className="h-[420px] md:h-[480px] w-full">
                <IndiaLocationsMap />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="min-w-0"
            >
              <TechPartnersRibbon />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="min-h-[65vh] flex items-center justify-center relative snap-start px-4 py-6">
        <ManagementTeam />
      </section>

      <Footer />

    </div>
  );
};

export default About;