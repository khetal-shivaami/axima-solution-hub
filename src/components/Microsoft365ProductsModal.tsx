
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Microsoft365ProductsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const features = [
  { 
    name: "Word", 
    description: "Create and edit professional documents",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png",
    color: "from-blue-500/20 to-blue-600/20"
  },
  { 
    name: "Excel", 
    description: "Powerful spreadsheet and data analysis",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png",
    color: "from-green-500/20 to-green-600/20"
  },
  { 
    name: "PowerPoint", 
    description: "Create impactful presentations",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png",
    color: "from-orange-500/20 to-orange-600/20"
  },
  { 
    name: "Teams", 
    description: "Collaborate and communicate in real-time",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png",
    color: "from-purple-500/20 to-purple-600/20"
  },
  { 
    name: "Outlook", 
    description: "Professional email and calendar management",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png",
    color: "from-blue-400/20 to-blue-500/20"
  },
  { 
    name: "OneDrive", 
    description: "Secure cloud storage and file sharing",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png",
    color: "from-sky-400/20 to-sky-500/20"
  }
];

export function Microsoft365ProductsModal({
  open,
  onOpenChange,
}: Microsoft365ProductsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto bg-black/90 border-axima-blue">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white mb-4">
            Microsoft 365 Products
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`relative group cursor-pointer border-0 bg-gradient-to-br ${feature.color} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
            >
              <div className="p-6 flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img 
                    src={feature.logo} 
                    alt={feature.name}
                    className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-axima-blue transition-colors">
                    {feature.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-center text-sm mb-4">
                  {feature.description}
                </p>
                <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-axima
-blue group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
