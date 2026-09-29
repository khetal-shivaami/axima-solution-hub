import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ManagementTeam } from "@/components/ManagementTeam";
import { WhyChooseAxima } from "@/components/WhyChooseAxima";
import IndiaLocationsMap from "@/components/IndiaLocationsMap";
import checkPointLogo from "@/assets/check-point-logo.asset.json";
import { motion } from "framer-motion";
import { MapPin, Award, Target, Rocket } from "lucide-react";

const partners = [
  { name: "Microsoft", logo: "/lovable-uploads/logos/Microsoft_365.webp" },
  { name: "Check Point", logo: `https://axima-solution-hub.lovable.app${checkPointLogo.url}` },
  { name: "Zoom", logo: "/lovable-uploads/logos/Zoom-01.webp" },
  { name: "JumpCloud", logo: "/lovable-uploads/logos/Jumpcloud-01.webp" },
  { name: "Scalefusion", logo: "/lovable-uploads/logos/Scalefusion-01.webp" },
  { name: "Spin.AI", logo: "/lovable-uploads/logos/Spin.ai.webp" },
  { name: "HYCU", logo: "/lovable-uploads/logos/Hycu-2-01.webp" },
  { name: "Atera", logo: "/lovable-uploads/logos/Atera-01.webp" },
  { name: "1Password", logo: "/lovable-uploads/logos/OnePassword-01.webp" },
  { name: "FlexiSign", logo: "/lovable-uploads/logos/Flexisign-logo-02.webp" },
];

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
                We Help Indian Businesses
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-axima-blue via-blue-400 to-blue-600">
                Work Smarter and Stay Secure.
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
                Axima Corporation is a Mumbai-based technology partner helping businesses across India adopt the right tools for productivity, collaboration, and security.
              </p>
              <p>
                A sister company of Shivaami, one of India's most recognised cloud technology companies, Axima brings the same depth of expertise to the Microsoft ecosystem and beyond.
              </p>
              <p>
                We have been in the business for over a decade. We started with Microsoft 365 and have since grown into a multi-product partner working with global technology leaders including Check Point, Microsoft, Zoom, JumpCloud, Scalefusion, Spin.AI, HYCU, Atera, 1Password, and FlexiSign.
              </p>
              <p>
                As a Microsoft Solutions Partner, we deliver, implement, and support solutions for businesses of every size. Our certified team is available around the clock to help you evaluate, implement, and get the most from every solution. We don't just sell software. We make sure it works for your business.
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

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="min-w-0 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-axima-blue" />
                <span className="text-xs uppercase tracking-widest text-axima-blue font-medium">Locations</span>
              </div>
              <div className="flex-1 min-h-0 flex w-full">
                <IndiaLocationsMap />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="min-w-0 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-axima-blue" />
                <span className="text-xs uppercase tracking-widest text-axima-blue font-medium">Technology Partners</span>
              </div>
              <div className="flex-1 flex flex-col bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-3 flex-1 auto-rows-fr">
                  {partners.map((p) => (
                    <div
                      key={p.name}
                      className="min-w-0 min-h-24 flex flex-col items-center justify-center gap-1 rounded-lg bg-white/5 border border-white/10 hover:border-axima-blue/40 transition-colors"
                    >
                      <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="w-full h-14 object-contain px-4" />
                      <span className="text-xs text-gray-300 text-center">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
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