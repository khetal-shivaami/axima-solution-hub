import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Minus } from 'lucide-react';

export const PlanComparison = () => {
  const features = [
    {
      category: "Email and calendar",
      items: [
        {
          name: "Business-class email",
          basic: true,
          standard: true,
          premium: true,
          apps: false
        },
        {
          name: "Calendar sharing",
          basic: true,
          standard: true,
          premium: true,
          apps: false
        }
      ]
    },
    {
      category: "File storage and sharing",
      items: [
        {
          name: "1 TB of OneDrive storage",
          basic: true,
          standard: true,
          premium: true,
          apps: true
        },
        {
          name: "File sharing and real-time collaboration",
          basic: true,
          standard: true,
          premium: true,
          apps: true
        }
      ]
    },
    {
      category: "Security and Compliance",
      items: [
        {
          name: "Advanced threat protection",
          basic: false,
          standard: false,
          premium: true,
          apps: false
        },
        {
          name: "Data loss prevention",
          basic: false,
          standard: false,
          premium: true,
          apps: false
        }
      ]
    }
  ];

  return (
    <div className="mt-12">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-black/40">
          <TabsTrigger 
            value="overview" 
            className="data-[state=active]:bg-axima-blue data-[state=active]:text-white"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="features"
            className="data-[state=active]:bg-axima-blue data-[state=active]:text-white"
          >
            Compare Features
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="p-4 bg-black/40 rounded-lg mt-2">
            <h3 className="text-lg font-semibold text-white mb-2">Plan Overview</h3>
            <p className="text-gray-300">
              Compare our different plans to find the best fit for your business needs.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="features">
          <div className="overflow-x-auto bg-black/40 rounded-lg mt-2">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white">Features</th>
                  <th className="p-4 text-center text-white">Basic</th>
                  <th className="p-4 text-center text-white">Standard</th>
                  <th className="p-4 text-center text-white">Premium</th>
                  <th className="p-4 text-center text-white">Apps</th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, index) => (
                  <>
                    <tr key={`category-${index}`} className="bg-black/20">
                      <td colSpan={5} className="p-4 font-semibold text-axima-blue">{category.category}</td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={`item-${itemIndex}`} className="border-b border-white/10">
                        <td className="p-4 text-white">{item.name}</td>
                        <td className="p-4 text-center">
                          {item.basic ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <Minus className="w-5 h-5 text-gray-500 mx-auto" />}
                        </td>
                        <td className="p-4 text-center">
                          {item.standard ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <Minus className="w-5 h-5 text-gray-500 mx-auto" />}
                        </td>
                        <td className="p-4 text-center">
                          {item.premium ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <Minus className="w-5 h-5 text-gray-500 mx-auto" />}
                        </td>
                        <td className="p-4 text-center">
                          {item.apps ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <Minus className="w-5 h-5 text-gray-500 mx-auto" />}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};