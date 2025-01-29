import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type CategoryFeature = {
  name: string;
  description: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
  apps: boolean;
};

type Category = {
  name: string;
  features: CategoryFeature[];
  isExpanded: boolean;
};

export const PlanComparison = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Essential Features",
      isExpanded: true,
      features: [
        {
          name: "Business-class email",
          description: "Professional email with 50GB mailbox",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "Web versions of Office apps",
          description: "Create and edit via browser",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "Desktop versions of Office apps",
          description: "Full desktop applications",
          basic: false,
          standard: true,
          premium: true,
          apps: true,
        }
      ]
    },
    {
      name: "Collaboration Tools",
      isExpanded: false,
      features: [
        {
          name: "Microsoft Teams",
          description: "Chat, call, and video meetings",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "SharePoint",
          description: "Intranet and team sites",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "OneDrive for Business",
          description: "1 TB cloud storage per user",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        }
      ]
    },
    {
      name: "Security & Compliance",
      isExpanded: false,
      features: [
        {
          name: "Advanced Threat Protection",
          description: "Protection against cyberthreats",
          basic: false,
          standard: false,
          premium: true,
          apps: false,
        },
        {
          name: "Information Protection",
          description: "Data loss prevention",
          basic: false,
          standard: false,
          premium: true,
          apps: false,
        },
        {
          name: "Mobile Device Management",
          description: "Secure device management",
          basic: false,
          standard: false,
          premium: true,
          apps: false,
        }
      ]
    },
    {
      name: "Support & Services",
      isExpanded: false,
      features: [
        {
          name: "24/7 Phone Support",
          description: "Round-the-clock assistance",
          basic: false,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "FastTrack Deployment Support",
          description: "Deployment assistance",
          basic: false,
          standard: false,
          premium: true,
          apps: false,
        },
        {
          name: "99.9% Uptime Guarantee",
          description: "Service reliability",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        }
      ]
    }
  ]);

  const toggleCategory = (categoryIndex: number) => {
    setCategories(prevCategories => 
      prevCategories.map((category, index) => 
        index === categoryIndex 
          ? { ...category, isExpanded: !category.isExpanded }
          : category
      )
    );
  };

  return (
    <Card className="p-6 bg-black/40 border border-axima-blue/20">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Compare Plans Features</h2>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3 text-white">Features</TableHead>
              <TableHead className="text-center text-white">Business Basic</TableHead>
              <TableHead className="text-center text-white">Business Standard</TableHead>
              <TableHead className="text-center text-white">Business Premium</TableHead>
              <TableHead className="text-center text-white">Apps for Business</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category, categoryIndex) => (
              <>
                <TableRow 
                  key={`category-${categoryIndex}`}
                  className="hover:bg-axima-blue/10 cursor-pointer"
                  onClick={() => toggleCategory(categoryIndex)}
                >
                  <TableCell colSpan={5} className="font-medium text-white">
                    <div className="flex items-center gap-2">
                      {category.isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                      {category.name}
                    </div>
                  </TableCell>
                </TableRow>
                {category.isExpanded && category.features.map((feature, featureIndex) => (
                  <TableRow 
                    key={`feature-${categoryIndex}-${featureIndex}`}
                    className="hover:bg-axima-blue/10"
                  >
                    <TableCell className="pl-8">
                      <div>
                        <p className="text-white">{feature.name}</p>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.basic ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.standard ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.premium ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.apps ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 mx-auto" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};