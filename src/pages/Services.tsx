import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Change Management",
    description: "We help organizations effectively implement and adapt to technological changes, ensuring smooth transitions and minimal disruption to business operations.",
    features: [
      "Change impact assessment",
      "Stakeholder management",
      "Training and development",
      "Process optimization"
    ]
  },
  {
    title: "Managed Services",
    description: "Comprehensive IT management solutions that allow you to focus on your core business while we handle your technology infrastructure.",
    features: [
      "24/7 monitoring",
      "Proactive maintenance",
      "Security management",
      "Performance optimization"
    ]
  },
  {
    title: "Support Packages",
    description: "Flexible support solutions tailored to your business needs, ensuring reliable assistance whenever you need it.",
    features: [
      "Technical support",
      "System maintenance",
      "Regular updates",
      "Priority response"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <motion.h1 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/40 border-none text-white backdrop-blur-sm hover:bg-black/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
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
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;