import { motion } from "framer-motion";
import { Target, Rocket } from "lucide-react";

export const Vision = () => {
  return (
    <section className="min-h-[65vh] flex items-center justify-center relative overflow-hidden px-4 py-6 snap-start">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-axima-blue/10 to-transparent p-8 rounded-2xl border border-axima-blue/20 hover:border-axima-blue/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-axima-blue/10 rounded-full blur-3xl" />
            <div className="flex items-center gap-4 mb-4 relative">
              <div className="p-3 bg-axima-blue/15 rounded-xl">
                <Target className="h-6 w-6 text-axima-blue" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-base text-gray-300 leading-relaxed relative">
              To be India's most trusted technology partner for businesses that want to work smarter, stay secure, and grow without limits.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-axima-blue/10 to-transparent p-8 rounded-2xl border border-axima-blue/20 hover:border-axima-blue/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-axima-blue/10 rounded-full blur-3xl" />
            <div className="flex items-center gap-4 mb-4 relative">
              <div className="p-3 bg-axima-blue/15 rounded-xl">
                <Rocket className="h-6 w-6 text-axima-blue" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-base text-gray-300 leading-relaxed relative">
              To simplify technology for Indian businesses by bringing the right tools, the right expertise, and the right support together. We listen first, recommend honestly, and stay with you long after the deal is done.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
