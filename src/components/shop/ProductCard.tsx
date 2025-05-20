
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart, CartProduct } from "@/contexts/CartContext";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";

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
  const [includeTeams, setIncludeTeams] = useState(false);
  const { addToCart } = useCart();

  // Only use yearly price now
  const basePrice = product.yearlyPrice;
  const teamsAdditionalCost = 1200; // ₹1200 additional for Teams
  
  const price = includeTeams ? basePrice + teamsAdditionalCost : basePrice;
  const priceDisplay = `₹${price}/year`;

  const handleAddToCart = () => {
    const cartProduct: Omit<CartProduct, "quantity"> = {
      id: product.id,
      name: product.name,
      price,
      image: product.image,
      licenseType: includeTeams ? "yearly-with-teams" : "yearly",
      includeTeams: includeTeams // Add this field to track if Teams is included
    };

    addToCart(cartProduct, quantity);
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  // Determine if we should show the Teams option
  const showTeamsOption = true; // Show for all products now

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
            <div className="bg-black/30 px-2 py-1 rounded text-xs text-axima-blue">
              Yearly
            </div>
          </div>
          
          <div className="flex items-center justify-between relative z-10">
            <span className="text-gray-300">Quantity:</span>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                type="button"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-2 text-white w-8 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(q => q + 1)}
                type="button"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          
          {showTeamsOption && product.id !== "product-1" && (
            <div className="flex items-center justify-between mt-3 relative z-10">
              <span className="text-gray-300">Include Teams:</span>
              <Switch 
                checked={includeTeams}
                onCheckedChange={setIncludeTeams}
              />
            </div>
          )}


          
          {includeTeams && (
            <div className="text-xs text-axima-blue">
              +₹{teamsAdditionalCost} for Microsoft Teams
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="z-10 relative">
        <Button 
          className="w-full bg-axima-blue hover:bg-axima-blue/80 text-white"
          onClick={handleAddToCart}
          type="button"
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
