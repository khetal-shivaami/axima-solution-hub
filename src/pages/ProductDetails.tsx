import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Star, Trophy, Settings, Users, Rocket, CheckCircle } from "lucide-react";

const productDetails: Record<string, {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
}> = {
  "word": {
    title: "Microsoft Word",
    description: "Create and edit professional documents with advanced formatting tools.",
    image: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png",
    features: [
      "Real-time collaboration",
      "Advanced formatting tools",
      "Document tracking",
      "Template library",
      "Smart lookup",
      "Translation tools",
      "Accessibility checker"
    ],
    benefits: [
      "Increased productivity",
      "Professional document creation",
      "Easy sharing and collaboration",
      "Cross-platform compatibility",
      "Enhanced document security",
      "Improved accessibility",
      "Time-saving templates"
    ]
  },
  "excel": {
    title: "Microsoft Excel",
    description: "Powerful spreadsheet software for data analysis and visualization.",
    image: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png",
    features: [
      "Advanced formulas and functions",
      "Data visualization tools",
      "Pivot tables",
      "Data analysis tools",
      "Collaboration features",
      "Mobile access"
    ],
    benefits: [
      "Enhanced data analysis",
      "Better decision making",
      "Improved productivity",
      "Real-time collaboration",
      "Automated calculations",
      "Professional reporting"
    ]
  },
  // Add more products as needed
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productId ? productDetails[productId.toLowerCase()] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 tech-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white">Product not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-6 bg-black/40 p-6 rounded-lg">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-24 h-24 object-contain"
            />
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{product.title}</h1>
              <p className="text-gray-300 text-lg">{product.description}</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                   <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue transition-all duration-300 group cursor-pointer h-full">
                    <div className="p-4 flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-axima-blue/10 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-axima-blue" />
                      </div>
                      <p className="text-gray-300 group-hover:text-axima-blue transition-colors duration-300">
                        {feature}
                      </p>
                    </div>
                  </Card>

                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue transition-all duration-300 group cursor-pointer h-full">
                      <div className="p-4 flex items-center space-x-3">
                        <div className="p-2 rounded-full bg-axima-blue/10 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-axima-blue" />
                        </div>
                        <p className="text-gray-300 group-hover:text-axima-blue transition-colors duration-300">
                          {benefit}
                        </p>
                      </div>
                    </Card>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
