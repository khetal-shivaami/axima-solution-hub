
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

type CartDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal, totalItems } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    onOpenChange(false);
    navigate("/checkout");
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-gray-900 border-t border-axima-blue/30 text-white">
        <div className="max-w-3xl mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle className="text-white flex items-center">
              <ShoppingCart className="mr-2" /> Shopping Cart ({totalItems} items)
            </DrawerTitle>
          </DrawerHeader>
          
          {cart.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-gray-400">Your cart is empty</p>
              <DrawerClose asChild>
                <Button 
                  variant="outline" 
                  className="mt-4"
                >
                  Continue Shopping
                </Button>
              </DrawerClose>
            </div>
          ) : (
            <div className="p-4">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.licenseType}`} className="flex items-center gap-4 bg-gray-800/50 p-3 rounded-md">
                    <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center overflow-hidden">
                      <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="font-medium">
                        {item.name}{item.includeTeams && " (with Teams)"}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {item.licenseType === "monthly" ? "Monthly" : "Yearly"} License
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <div className="text-right w-24">
                      <div className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</div>
                      <button 
                        className="text-red-400 hover:text-red-300 text-sm flex items-center mt-1"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash className="h-3 w-3 mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4 bg-gray-700" />
              
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Subtotal</span>
                <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between mb-4">
                <span className="text-gray-300">Tax</span>
                <span className="font-semibold">₹{(subtotal * 0.18).toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-lg">
                <span>Total</span>
                <span className="font-bold">₹{(subtotal * 1.18).toLocaleString()}</span>
              </div>
              
              <DrawerFooter className="px-0">
                <Button 
                  className="bg-axima-blue hover:bg-axima-blue/80 text-white w-full"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                
                <div className="flex justify-between gap-2">
                  <DrawerClose asChild>
                    <Button variant="outline" className="flex-1">
                      Continue Shopping
                    </Button>
                  </DrawerClose>
                  
                  <Button 
                    variant="outline" 
                    className="flex-1 text-red-400 hover:text-red-300"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </DrawerFooter>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
