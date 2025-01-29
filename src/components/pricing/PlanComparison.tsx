import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PlanComparison = () => {
  const [activeCategory, setActiveCategory] = useState("essentials");

  const categories = [
    { id: "essentials", name: "Essential Features" },
    { id: "collaboration", name: "Collaboration Tools" },
    { id: "security", name: "Security & Compliance" },
    { id: "support", name: "Support & Services" }
  ];

  const features = {
    essentials: [
      {
        name: "Business-class email",
        basic: true,
        standard: true,
        premium: true,
        apps: true,
        description: "Professional email with 50GB mailbox"
      },
      {
        name: "Web versions of Office apps",
        basic: true,
        standard: true,
        premium: true,
        apps: true,
        description: "Create and edit via browser"
      },
      {
        name: "Desktop versions of Office apps",
        basic: false,
        standard: true,
        premium: true,
        apps: true,
        description: "Full desktop applications"
      }
    ],
    collaboration: [
      {
        name: "Microsoft Teams",
        basic: true,
        standard: true,
        premium: true,
        apps: false,
        description: "Chat, call, and video meetings"
      },
      {
        name: "SharePoint",
        basic: true,
        standard: true,
        premium: true,
        apps: false,
        description: "Intranet and team sites"
      },
      {
        name: "OneDrive for Business",
        basic: true,
        standard: true,
        premium: true,
        apps: true,
        description: "1 TB cloud storage per user"
      }
    ],
    security: [
      {
        name: "Advanced Threat Protection",
        basic: false,
        standard: false,
        premium: true,
        apps: false,
        description: "Protection against cyberthreats"
      },
      {
        name: "Information Protection",
        basic: false,
        standard: false,
        premium: true,
        apps: false,
        description: "Data loss prevention"
      },
      {
        name: "Mobile Device Management",
        basic: false,
        standard: false,
        premium: true,
        apps: false,
        description: "Secure device management"
      }
    ],
    support: [
      {
        name: "24/7 Phone Support",
        basic: false,
        standard: true,
        premium: true,
        apps: false,
        description: "Round-the-clock assistance"
      },
      {
        name: "FastTrack Deployment Support",
        basic: false,
        standard: false,
        premium: true,
        apps: false,
        description: "Deployment assistance"
      },
      {
        name: "99.9% Uptime Guarantee",
        basic: true,
        standard: true,
        premium: true,
        apps: true,
        description: "Service reliability"
      }
    ]
  };

  return (
    <Card className="p-6 bg-black/40 border border-axima-blue/20">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Compare Plans Features</h2>
      
      <Tabs defaultValue="essentials" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-axima-blue data-[state=active]:text-white"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="space-y-4">
              {features[category.id].map((feature, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 gap-4 p-4 rounded-lg hover:bg-axima-blue/10 transition-colors"
                >
                  <div className="col-span-2">
                    <p className="text-white font-medium">{feature.name}</p>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                  <div className="text-center">
                    {feature.basic ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {feature.standard ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {feature.premium ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {feature.apps ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-500 mx-auto" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
};