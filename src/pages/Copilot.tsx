import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Copilot = () => {
  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      
      {/* Hero Section with New Banner */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90 z-10" />
        <img 
          src="/lovable-uploads/975d52b5-3179-48b2-9089-8d510673df4a.png"
          alt="Microsoft Copilot Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white max-w-7xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Microsoft Copilot
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your everyday AI companion
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* Feature Section with Robot Image */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Transform Your Work with AI</h2>
            <p className="text-gray-300 text-lg">
              Microsoft Copilot combines the power of large language models with your organization's data to transform your work. It's integrated into the Microsoft 365 apps you use every day.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img 
              src="/lovable-uploads/ee71e868-a232-4f3f-b701-8c777808107d.png"
              alt="Copilot AI Assistant"
              className="w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
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
              <Card className="bg-black/40 border-none text-white backdrop-blur-sm h-full hover:bg-black/50 transition-colors">
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
      <Footer />
    </div>
  );
};

export default Copilot;