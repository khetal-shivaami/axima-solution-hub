import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const productDetails: Record<string, {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}> = {
  "word": {
    title: "Microsoft Word",
    description: "Create and edit professional documents with advanced formatting tools.",
    features: [
      "Real-time collaboration",
      "Advanced formatting tools",
      "Document tracking",
      "Template library"
    ],
    benefits: [
      "Increased productivity",
      "Professional document creation",
      "Easy sharing and collaboration",
      "Cross-platform compatibility"
    ]
  },
  // Add other products similarly
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productId ? productDetails[productId.toLowerCase()] : null;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">{product.title}</h1>
        <p className="text-gray-300 mb-12">{product.description}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/40 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="mr-2 text-axima-blue">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-black/40 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Benefits</h2>
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="mr-2 text-axima-blue">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;