import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Minus } from 'lucide-react';

export const PlanComparison = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-axima-blue hover:text-blue-400 transition-colors mx-auto"
      >
        {isExpanded ? (
          <>
            <span>Collapse all features</span>
            <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            <span>Compare all features</span>
            <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>

      {isExpanded && (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4">Features</th>
                <th className="p-4 text-center">Basic</th>
                <th className="p-4 text-center">Standard</th>
                <th className="p-4 text-center">Premium</th>
                <th className="p-4 text-center">Apps</th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, index) => (
                <>
                  <tr key={`category-${index}`} className="bg-black/20">
                    <td colSpan={5} className="p-4 font-semibold">{category.category}</td>
                  </tr>
                  {category.items.map((item, itemIndex) => (
                    <tr key={`item-${itemIndex}`} className="border-b border-white/10">
                      <td className="p-4">{item.name}</td>
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
      )}
    </div>
  );
};