import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Clock } from "lucide-react";

const services = [
  {
    title: "Change Management",
    description: "We help organizations effectively implement and adapt to technological changes, ensuring smooth transitions and minimal disruption to business operations.",
    features: [
      "Change impact assessment",
      "Stakeholder management",
      "Training and development",
      "Process optimization"
    ],
    icon: Users
  },
  {
    title: "Managed Services",
    description: "Comprehensive IT management solutions that allow you to focus on your core business while we handle your technology infrastructure.",
    features: [
      "24/7 monitoring",
      "Proactive maintenance",
      "Security management",
      "Performance optimization"
    ],
    icon: Shield
  },
  {
    title: "Support Packages",
    description: "Flexible support solutions tailored to your business needs, ensuring reliable assistance whenever you need it.",
    features: [
      "Technical support",
      "System maintenance",
      "Regular updates",
      "Priority response"
    ],
    icon: Clock
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-12 animate-fade-in relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive Microsoft solutions tailored to your business needs
            </p>
            <div className="w-24 h-1 bg-axima-blue mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-black/40 border-white/10 text-white backdrop-blur-sm hover:bg-black/50 transition-all duration-300 h-full group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-axima-blue/0 via-axima-blue/5 to-axima-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-axima-blue/20 text-axima-blue">
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 flex items-center">
                            <span className="mr-2 text-axima-blue">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;