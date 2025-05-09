
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/shop/ProductCard";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Papa from "papaparse";
import { useQuery } from "@tanstack/react-query";

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

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("/data/plans.csv");
  const csvText = await response.text();
  
  const { data } = await new Promise<Papa.ParseResult<any>>((resolve) => {
    Papa.parse(csvText, {
      header: true,
      complete: resolve
    });
  });
  
  return data.map((item: any, index: number) => {
    const features = item.features ? item.features.split('|') : [];
    
    const productsList = item.products ? item.products.split('|').map((productStr: string) => {
      const [name, icon] = productStr.split(':');
      return { name, icon };
    }) : [];
    
    return {
      id: `product-${index + 1}`,
      name: item.name || `Product ${index + 1}`,
      description: item.licenceDescription || "",
      monthlyPrice: parseFloat(item.monthlyPrice.replace(/[^\d.]/g, '')) || 0,
      yearlyPrice: parseFloat(item.yearlyPrice.replace(/[^\d.]/g, '')) || 0,
      image: productsList[0]?.icon || "https://storage.googleapis.com/axima-website-content/logos/Microsoft_365.webp",
      licenceDescription: item.licenceDescription || "",
      features,
      productsList
    };
  });
};

const BuyProducts = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();
  
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

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
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-[500px] bg-black/40 animate-pulse rounded-lg"></div>
              ))}
            </div>
          ) : error ? (
            <div className="bg-red-900/20 p-4 rounded-md border border-red-500/50 text-center">
              <p className="text-red-200">Failed to load products. Please try again later.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <Footer />
    </div>
  );
};

export default BuyProducts;
