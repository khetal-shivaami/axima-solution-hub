import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Copilot = () => {
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
            Microsoft Copilot
          </motion.h1>

          <Card className="bg-black/40 border-none text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Transform Your Work with AI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Microsoft Copilot combines the power of large language models with your organization's data to transform your work. It's integrated into the Microsoft 365 apps you use every day, helping you be more creative, productive, and collaborative.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Productivity",
                description: "Get more done faster with AI-powered assistance in all your favorite Microsoft 365 apps."
              },
              {
                title: "Creative Assistance",
                description: "Generate content, analyze data, and create presentations with intelligent suggestions."
              },
              {
                title: "Seamless Integration",
                description: "Works naturally within your existing workflow in Microsoft 365 applications."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/40 border-none text-white backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
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

export default Copilot;