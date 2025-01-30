import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Copilot = () => {
  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      
      {/* Hero Section with Banner */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90 z-10" />
        <img 
          src="/lovable-uploads/banner/ai_copilot.png"
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
            Your everyday AI companion for enhanced productivity
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* Market Demand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/40 p-8 rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Market Demand & Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-300">
                Microsoft Copilot has emerged as a game-changing AI solution in the enterprise market, with:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Over 40% of Fortune 100 companies participating in early access program</li>
                <li>Reported 29% increase in productivity among early adopters</li>
                <li>Potential to save up to 2-3 hours daily in routine tasks</li>
                <li>Growing demand across various industries for AI-powered productivity tools</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Business Impact</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Streamlined workflow automation</li>
                <li>Enhanced decision-making capabilities</li>
                <li>Improved team collaboration</li>
                <li>Reduced time spent on repetitive tasks</li>
              </ul>
            </div>
          </div>
        </motion.div>

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
              src="/lovable-uploads/banner/copilotbackgrp.png"
              alt="Copilot AI Assistant"
              className="w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Enhanced Productivity",
              description: "Get more done faster with AI-powered assistance in all your favorite Microsoft 365 apps, including Word, Excel, PowerPoint, and Outlook."
            },
            {
              title: "Creative Assistance",
              description: "Generate content, analyze data, and create presentations with intelligent suggestions. Transform ideas into polished content quickly."
            },
            {
              title: "Seamless Integration",
              description: "Works naturally within your existing workflow in Microsoft 365 applications, providing contextual assistance when you need it."
            },
            {
              title: "Data Analysis",
              description: "Quickly analyze complex datasets, create visualizations, and extract meaningful insights from your business data."
            },
            {
              title: "Natural Language Processing",
              description: "Communicate with Copilot using natural language to accomplish tasks, get answers, and receive recommendations."
            },
            {
              title: "Security & Compliance",
              description: "Enterprise-grade security features ensure your data remains protected while leveraging AI capabilities."
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

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/40 p-8 rounded-lg backdrop-blur-sm mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Microsoft Copilot?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">For Businesses</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Increased operational efficiency</li>
                <li>Reduced training time for new employees</li>
                <li>Enhanced team collaboration</li>
                <li>Cost savings through automation</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">For Individuals</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Personalized assistance</li>
                <li>Improved work-life balance</li>
                <li>Faster task completion</li>
                <li>Enhanced creativity and innovation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Copilot;