import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Vision } from "@/components/Vision";
import { ManagementTeam } from "@/components/ManagementTeam";
import { WhyChooseAxima } from "@/components/WhyChooseAxima";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: "10+", label: "Years" },
  { icon: Users, value: "2,000+", label: "Customers" },
  { icon: MapPin, value: "4", label: "Cities" },
  { icon: Award, value: "10+", label: "Partners" },
];

const partners = [
  "Microsoft", "Check Point", "Zoom", "JumpCloud",
  "Scalefusion", "Spin.AI", "HYCU", "Atera", "1Password", "FlexiSign",
];

const locations = ["Mumbai", "Bangalore", "Chennai", "Delhi"];

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-black relative snap-y snap-mandatory">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <Navbar />

      {/* Hero / About */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-4 py-8 snap-start">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-axima-blue border border-axima-blue/30 rounded-full mb-3">
              About Axima
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
                We Help Indian Businesses
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-axima-blue via-blue-400 to-blue-600">
                Work Smarter and Stay Secure.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="space-y-3 text-gray-300 leading-relaxed text-base text-center max-w-5xl mx-auto">
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
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mt-6 max-w-4xl mx-auto">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="bg-white/[0.03] border border-white/10 rounded-lg p-4 backdrop-blur-sm hover:border-axima-blue/40 transition-all text-center"
                  >
                    <Icon className="w-5 h-5 text-axima-blue mx-auto mb-1" />
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Vision />

      <section className="min-h-[75vh] flex items-center justify-center relative snap-start py-8">
        <WhyChooseAxima />
      </section>

      {/* Locations & Partners */}
      <section className="min-h-[75vh] flex items-center justify-center relative snap-start px-4 py-8">
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

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-axima-blue/10 to-transparent border border-axima-blue/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-axima-blue" />
                <span className="text-xs uppercase tracking-widest text-axima-blue font-medium">Locations</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <span key={loc} className="text-sm px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {loc}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-axima-blue" />
                <span className="text-xs uppercase tracking-widest text-axima-blue font-medium">Technology Partners</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-axima-blue/40 hover:text-white transition-colors"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="min-h-[75vh] flex items-center justify-center relative snap-start px-4 py-8">
        <ManagementTeam />
      </section>

      <Footer />

    </div>
  );
};

export default About;