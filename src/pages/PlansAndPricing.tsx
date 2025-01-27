import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const PlansAndPricing = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

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
      products: [
        { name: "Microsoft Word", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png" },
        { name: "Microsoft Excel", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png" },
        { name: "Microsoft PowerPoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png" },
        { name: "Microsoft Outlook", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png" },
        { name: "Microsoft Teams", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png" },
      ],
      licenceDescription:"Min 100 licence"
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
      products: [
        { name: "Microsoft Word", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png" },
        { name: "Microsoft Excel", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png" },
        { name: "Microsoft PowerPoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png" },
        { name: "Microsoft Outlook", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png" },
        { name: "Microsoft Teams", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png" },
        { name: "Microsoft Exchange", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_exchange.png" },
        { name: "Microsoft OneDrive", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png" },
      ],
      licenceDescription:"Min 10 licence"
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
      products: [
        { name: "Microsoft Word", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png" },
        { name: "Microsoft Excel", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png" },
        { name: "Microsoft PowerPoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png" },
        { name: "Microsoft Outlook", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png" },
        { name: "Microsoft Teams", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png" },
        { name: "Microsoft Exchange", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_exchange.png" },
        { name: "Microsoft OneDrive", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png" },
        { name: "Microsoft Access", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_access.png" },
        { name: "Microsoft Intune", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_intune.png" },
        { name: "Azure Information Protection", icon: "/lovable-uploads/logos/microsoft_logos/azure_information_prot.png" },
        { name: "SharePoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_sharepoint.png" },
        { name: "Publisher", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_publisher.png" },
        
      ],
      licenceDescription:"Min 10 licence"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-20 p-8"
      >
        <motion.div 
          variants={itemVariants}
          className="max-w-7xl mx-auto space-y-8"
        >
          <div className="bg-axima-blue py-8 rounded-lg">
            <h1 className="text-4xl font-bold text-white text-center mb-2">Microsoft 365 Plans</h1>
            <p className="text-white/80 text-center">Choose the perfect plan for your business</p>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Tabs defaultValue="monthly" className="w-[300px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid md:grid-cols-3 gap-6">
                  {plans.map((plan, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="h-full"
                    >
                      <HoverCard>
                        <HoverCardTrigger className="h-full">
                          <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue text-white transform transition-all duration-300 hover:scale-102 hover:bg-black/60 h-full">
                            <CardHeader className="bg-axima-blue p-4 rounded-t-lg">
                              <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4">
                              <center>
                                <p className="text-axima-blue font-semibold text-2xl mb-4">
                                  {plan.monthlyPrice}
                                  <span className="text-sm text-gray-400">/user/month</span>
                                </p>
                                
                                <p className="text-sm text-gray-400 mb-1">(Advance yearly billing)</p>
                                <p className="text-sm text-gray-400 mb-1">GST extras as applicable</p>
                                <p className="text-sm text-gray-400 mb-1">{plan.licenceDescription}</p>
                              </center>
                              <br />
                              <div className="space-y-2 mb-6">
                                {plan.features.map((feature, idx) => (
                                  <p key={idx} className="text-gray-300 text-sm">• {feature}</p>
                                ))}
                              </div>
                              
                              <div className="border-t border-white/10 pt-4">
                                <h4 className="text-sm font-semibold mb-3">Included Products:</h4>
                                <div className="grid grid-cols-3 gap-2">
                                  {plan.products.map((product, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                      <img 
                                        src={product.icon} 
                                        alt={product.name} 
                                        className="w-8 h-8 object-contain mb-1"
                                      />
                                      <span className="text-xs text-center text-gray-400">{product.name}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-black/90 text-white border border-axima-blue">
                          <h4 className="font-semibold mb-2">{plan.name}</h4>
                          <p className="text-sm text-gray-300 mb-2">
                            Get started with our {plan.name.split(" ").pop()} plan
                          </p>
                          <ul className="text-sm space-y-1">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="text-gray-300">• {feature}</li>
                            ))}
                          </ul>
                        </HoverCardContent>
                      </HoverCard>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className="grid md:grid-cols-3 gap-6">
                  {plans.map((plan, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="h-full"
                    >
                      <HoverCard>
                        <HoverCardTrigger className="h-full">
                          <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue text-white transform transition-all duration-300 hover:scale-102 hover:bg-black/60 h-full">
                            <CardHeader className="bg-axima-blue p-4 rounded-t-lg">
                              <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4">
                              <center>
                                <p className="text-axima-blue font-semibold text-2xl mb-4">
                                  {plan.yearlyPrice}
                                  <span className="text-sm text-gray-400">/user/year</span>
                                </p>
                                
                                <p className="text-sm text-gray-400 mb-1">(Advance yearly billing)</p>
                                <p className="text-sm text-gray-400 mb-1">GST extras as applicable</p>
                                <p className="text-sm text-gray-400 mb-1">{plan.licenceDescription}</p>
                              </center>
                              <br />
                              <div className="space-y-2 mb-6">
                                {plan.features.map((feature, idx) => (
                                  <p key={idx} className="text-gray-300 text-sm">• {feature}</p>
                                ))}
                              </div>
                              
                              <div className="border-t border-white/10 pt-4">
                                <h4 className="text-sm font-semibold mb-3">Included Products:</h4>
                                <div className="grid grid-cols-3 gap-2">
                                  {plan.products.map((product, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                      <img 
                                        src={product.icon} 
                                        alt={product.name} 
                                        className="w-8 h-8 object-contain mb-1"
                                      />
                                      <span className="text-xs text-center text-gray-400">{product.name}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-black/90 text-white border border-axima-blue">
                          <h4 className="font-semibold mb-2">{plan.name}</h4>
                          <p className="text-sm text-gray-300 mb-2">
                            Get started with our {plan.name.split(" ").pop()} plan
                          </p>
                          <ul className="text-sm space-y-1">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="text-gray-300">• {feature}</li>
                            ))}
                          </ul>
                        </HoverCardContent>
                      </HoverCard>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default PlansAndPricing;