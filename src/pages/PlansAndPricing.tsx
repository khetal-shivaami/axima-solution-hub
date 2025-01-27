import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PlansAndPricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Microsoft 365 Business Basic",
      monthlyPrice: "₹250",
      yearlyPrice: "₹2,500",
      features: [
        "Chat, call, meet up to 300 attendees",
        "Web and mobile versions of Office apps",
        "1 TB of cloud storage",
        "Business-class email",
        "Standard security",
        "Anytime phone and web support"
      ],
      apps: [
        "/lovable-uploads/logos/microsoft_logos/microsoft_word.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png"
      ]
    },
    {
      name: "Microsoft 365 Business Standard",
      monthlyPrice: "₹650",
      yearlyPrice: "₹6,500",
      features: [
        "Everything in Business Basic, plus:",
        "Desktop versions of Office apps with premium features",
        "Easily host webinars",
        "Attendee registration and reporting tools",
        "Manage customer appointments"
      ],
      apps: [
        "/lovable-uploads/logos/microsoft_logos/microsoft_word.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png"
      ]
    },
    {
      name: "Microsoft 365 Business Premium",
      monthlyPrice: "₹1,320",
      yearlyPrice: "₹13,200",
      features: [
        "Everything in Business Standard, plus:",
        "Advanced security",
        "Access and data control",
        "Cyberthreat protection"
      ],
      apps: [
        "/lovable-uploads/logos/microsoft_logos/microsoft_word.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png",
        "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Plans & Pricing</h1>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-axima-blue"
            />
            <span className={`text-lg ${isYearly ? 'text-white' : 'text-gray-400'}`}>Yearly</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue transition-all duration-300 text-white h-full">
                <CardHeader className="text-center border-b border-axima-blue/20">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-axima-blue mt-4">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-sm font-normal text-gray-400">/User/{isYearly ? 'Year' : 'Month'}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-axima-blue">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-axima-blue/20 pt-4">
                    <p className="text-sm text-center mb-3">Apps and services included:</p>
                    <div className="flex justify-center gap-2">
                      {plan.apps.map((app, idx) => (
                        <img
                          key={idx}
                          src={app}
                          alt="App icon"
                          className="w-8 h-8 object-contain"
                        />
                      ))}
                    </div>
                  </div>
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

export default PlansAndPricing;