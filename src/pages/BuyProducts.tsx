
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/shop/ProductCard";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

type Product = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  image: string;
  licenceDescription: string;
  features: string[];
  productsList: Array<{ name: string, icon: string }>;
};

// Statically defined products from CSV data
const products: Product[] = [
  {
    id: "product-1",
    name: "Microsoft 365 Business Basic",
    description: "Min 300 licence",
    monthlyPrice: 145,
    yearlyPrice: 1740,
    image: "/lovable-uploads/logos/microsoft_logos/microsoft_word.webp",
    licenceDescription: "Min 300 licence",
    features: [
      "Chat, call, meet up to 300 attendees",
      "Web and mobile versions of Office apps",
      "1 TB of cloud storage",
      "Business-class email",
      "Standard security",
      "Anytime phone and web support"
    ],
    productsList: [
      { name: "Microsoft Word", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png" },
      { name: "Microsoft Excel", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png" },
      { name: "Microsoft PowerPoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png" },
      { name: "Microsoft Outlook", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png" },
      { name: "Microsoft Teams", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png" },
      { name: "Microsoft Exchange", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_exchange.png" },
      { name: "SharePoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_sharepoint.png" },
      { name: "Microsoft OneDrive", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png" }
    ]
  },
  {
    id: "product-2",
    name: "Microsoft 365 Business Standard",
    description: "Min 300 licence",
    monthlyPrice: 770,
    yearlyPrice: 9240,
    image: "/lovable-uploads/logos/microsoft_logos/microsoft_word.webp",
    licenceDescription: "Min 300 licence",
    features: [
      "Everything in Business Basic, plus:",
      "Desktop versions of Office apps with premium features",
      "Easily host webinars",
      "Attendee registration and reporting tools",
      "Manage customer appointments"
    ],
    productsList: [
      { name: "Microsoft Word", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png" },
      { name: "Microsoft Excel", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png" },
      { name: "Microsoft PowerPoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png" },
      { name: "Microsoft Outlook", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png" },
      { name: "Microsoft Teams", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png" },
      { name: "Microsoft Exchange", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_exchange.png" },
      { name: "Microsoft OneDrive", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png" },
      { name: "SharePoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_sharepoint.png" },
      { name: "Microsoft Loop", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_loop.png" },
      { name: "Clipchamp", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_clipchamp.png" }
    ]
  },
  {
    id: "product-3",
    name: "Microsoft 365 Business Premium",
    description: "Min 300 licence",
    monthlyPrice: 1830,
    yearlyPrice: 21960,
    image: "/lovable-uploads/logos/microsoft_logos/microsoft_word.webp",
    licenceDescription: "Min 300 licence",
    features: [
      "Everything in Business Standard, plus:",
      "Advanced security",
      "Access and data control",
      "Cyberthreat protection"
    ],
    productsList: [
      { name: "Microsoft Word", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png" },
      { name: "Microsoft Excel", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png" },
      { name: "Microsoft PowerPoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png" },
      { name: "Microsoft Outlook", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png" },
      { name: "Microsoft Teams", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png" },
      { name: "Microsoft Exchange", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_exchange.png" },
      { name: "Microsoft OneDrive", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png" },
      { name: "Microsoft Intune", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_intune.png" },
      { name: "SharePoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_sharepoint.png" },
      { name: "Microsoft Loop", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_loop.png" },
      { name: "Clipchamp", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_clipchamp.png" },
      { name: "Microsoft Defender", icon: "/lovable-uploads/logos/microsoft_logos/windows_defender.png" },
      { name: "Microsoft Pureview", icon: "/lovable-uploads/logos/microsoft_logos/azure_information_prot.png" }
    ]
  },
  {
    id: "product-4",
    name: "Microsoft 365 Apps for business",
    description: "Min 300 licence",
    monthlyPrice: 685,
    yearlyPrice: 8220,
    image: "/lovable-uploads/logos/microsoft_logos/microsoft_word.webp",
    licenceDescription: "Min 300 licence",
    features: [
      "Desktop versions of Office apps",
      "Web and mobile versions of Office apps",
      "1 TB of cloud storage per user",
      "Standard security",
      "Anytime phone and web support"
    ],
    productsList: [
      { name: "Microsoft Word", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png" },
      { name: "Microsoft Excel", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png" },
      { name: "Microsoft PowerPoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png" },
      { name: "Microsoft Outlook", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png" },
      { name: "Microsoft OneDrive", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png" }
    ]
  }
];

const BuyProducts = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white">Microsoft 365 Shop</h1>
            <Button 
              onClick={() => setCartOpen(true)}
              className="bg-axima-blue hover:bg-axima-blue/80 text-white relative"
            >
              <ShoppingCart className="mr-2" />
              View Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <Footer />
    </div>
  );
};

export default BuyProducts;
