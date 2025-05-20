
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart, CartProduct } from "@/contexts/CartContext";
import { toast } from "sonner";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
  };
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [licenseType, setLicenseType] = useState<"monthly" | "yearly">("monthly");
  const { addToCart } = useCart();

  const price = licenseType === "monthly" ? product.monthlyPrice : product.yearlyPrice;
  const priceDisplay = licenseType === "monthly" 
    ? `₹${product.monthlyPrice}/month` 
    : `₹${product.yearlyPrice}/year`;

  const handleAddToCart = () => {
    const cartProduct: Omit<CartProduct, "quantity"> = {
      id: product.id,
      name: product.name,
      price,
      image: product.image,
      licenseType
    };

    addToCart(cartProduct, quantity);
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  return (
    <Card className="h-full bg-black/40 border border-axima-blue/20 hover:border-axima-blue transition-all duration-300 flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-xl">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <div className="aspect-square w-full relative mb-4 bg-gray-800 rounded-md overflow-hidden flex items-center justify-center p-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-[100px] max-w-[100px] object-contain"
          />
        </div>
        
        <p className="text-gray-300 text-sm mb-4">{product.description}</p>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white font-semibold text-lg">{priceDisplay}</span>
            <div className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className={licenseType === "monthly" ? "bg-axima-blue text-white" : ""}
                onClick={() => setLicenseType("monthly")}
              >
                Monthly
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className={licenseType === "yearly" ? "bg-axima-blue text-white" : ""}
                onClick={() => setLicenseType("yearly")}
              >
                Yearly
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Quantity:</span>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-2 text-white w-8 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(q => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-axima-blue hover:bg-axima-blue/80 text-white"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
