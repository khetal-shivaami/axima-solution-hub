import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
      // image: "/lovable-uploads/logos/Microsoft_365.png"
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
      // image: "/lovable-uploads/logos/Microsoft_365.png"
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
      // image: "/lovable-uploads/logos/Microsoft_365.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Plans & Pricing</h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-white">Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            {/* <span className="text-white">Yearly (Save 20%)</span> */}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue text-white transform transition-all duration-300 hover:scale-102 hover:bg-black/60">
                    <CardHeader className="p-4">
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                     
                      <p className="text-axima-blue font-semibold text-2xl mb-4">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        <span className="text-sm text-gray-400">/user/{isYearly ? 'year' : 'month'}</span>
                      </p>
                      <div className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <p key={idx} className="text-gray-300 text-sm">• {feature}</p>
                        ))}
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
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlansAndPricing;