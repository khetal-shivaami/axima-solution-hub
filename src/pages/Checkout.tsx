
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { Check, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getPaymentLink } from "@/services/paymentService";
import { PaymentModal } from "@/components/payment/PaymentModal";

const Checkout = () => {
  const { cart, clearCart, subtotal } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orderNotes, setOrderNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentLink, setPaymentLink] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    domainName: "",
    streetAddress: "",
    apartmentSuiteUnit: "",
    city: "",
    state: "",
    country: "",
    postcode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.companyName) {
      toast.error("Please fill in all required fields");
      return false;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return false;
    }

    return true;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      if (paymentMethod === "online") {
        // Prepare order data for the payment API
        const orderData = {
          ...formData,
          orderTotal: total,
          orderItems: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            licenseType: item.licenseType
          }))
        };

        // Get payment link from the API
        const response = await getPaymentLink(orderData);

        if (response.success && response.paymentLink) {
          setPaymentLink(response.paymentLink);
          setPaymentModalOpen(true);
        } else {
          toast.error(response.error || "Failed to generate payment link");
        }
      } else {
        // Handle offline/bank transfer payment
        toast.success("Order placed successfully!");
        clearCart();
        navigate("/order-confirmation");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("An error occurred during checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    clearCart();
    setPaymentModalOpen(false);
  };

  const handlePaymentFailure = (message: string) => {
    toast.error(message || "Payment failed. Please try again.");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Your cart is empty</h1>
          <p className="text-gray-400 mb-8">Add some products to your cart before checkout.</p>
          <Button
            onClick={() => navigate("/buy-products")}
            className="bg-axima-blue hover:bg-axima-blue/80 text-white"
          >
            Browse Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <div className="bg-black/40 border border-axima-blue/20 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Billing Information</h2>

                <form onSubmit={handleSubmit} className="space-y-4 relative">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="domainName" className="text-white">Domain Name (Optional)</Label>
                      <Input
                        id="domainName"
                        name="domainName"
                        value={formData.domainName}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-white">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                        required
                      />
                    </div>
                  </div>

                  <Separator className="bg-gray-600 my-4" />

                  <h3 className="text-lg font-medium text-white">Address</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="streetAddress" className="text-white">Street Address</Label>
                      <Input
                        id="streetAddress"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="apartmentSuiteUnit" className="text-white">Apt, Suite, Unit (Optional)</Label>
                      <Input
                        id="apartmentSuiteUnit"
                        name="apartmentSuiteUnit"
                        value={formData.apartmentSuiteUnit}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-white">Town / City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-white">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-white">Country / Region</Label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postcode" className="text-white">Postcode</Label>
                      <Input
                        id="postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Label htmlFor="orderNotes" className="text-white">Order Notes (Optional)</Label>
                    <Textarea
                      id="orderNotes"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      className="bg-gray-800/50 border-gray-700 text-white h-24"
                      placeholder="Any special instructions or requirements"
                    />
                  </div>

                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-medium text-white">Payment Method</h3>

                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2 bg-gray-800/30 p-3 rounded-md">
                        <RadioGroupItem value="online" id="online" />
                        <label htmlFor="online" className="text-white flex-grow cursor-pointer">
                          Online Payment
                        </label>
                      </div>

                      <div className="flex items-center space-x-2 bg-gray-800/30 p-3 rounded-md">
                        <RadioGroupItem value="bank" id="bank" />
                        <label htmlFor="bank" className="text-white flex-grow cursor-pointer">
                          Bank Transfer
                        </label>
                      </div>

                      <div className="flex items-center space-x-2 bg-gray-800/30 p-3 rounded-md">
                        <RadioGroupItem value="invoice" id="invoice" />
                        <label htmlFor="invoice" className="text-white flex-grow cursor-pointer">
                          Invoice Payment
                        </label>
                      </div>
                    </RadioGroup>

                    <div className="bg-blue-900/20 border border-blue-500/30 rounded p-4 flex gap-3">
                      <Info className="text-blue-400 h-5 w-5 mt-1" />
                      <p className="text-blue-300 text-sm">
                        {paymentMethod === "online" 
                          ? "You will be redirected to our secure payment gateway to complete your purchase."
                          : "Our team will contact you shortly after order placement to provide payment instructions and complete your Microsoft 365 subscription setup."}
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-axima-blue hover:bg-axima-blue/80 text-white mt-6"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : paymentMethod === "online" ? "Proceed to Payment" : "Place Order"}
                  </Button>
                </form>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-black/40 border border-axima-blue/20 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.licenseType}`} className="flex gap-3 pb-3 border-b border-gray-800">
                      <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                      </div>

                      <div className="flex-grow">
                        <h4 className="font-medium text-white">
                          {item.name}{item.includeTeams && " (with Teams)"}
                        </h4>
                        <p className="text-sm text-gray-400 flex items-center justify-between">
                          <span>
                            {item.licenseType === "monthly" ? "Monthly" : "Yearly"} License
                            <span className="mx-2">×</span>
                            {item.quantity}
                          </span>
                          <span className="font-medium text-white">₹{(item.price * item.quantity).toLocaleString()}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Subtotal</span>
                    <span className="text-white">₹{subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-300">Tax (18% GST)</span>
                    <span className="text-white">₹{tax.toLocaleString()}</span>
                  </div>

                  <Separator className="my-2 bg-gray-700" />

                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-white">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-6 bg-green-900/20 border border-green-500/30 rounded p-3 flex gap-2">
                  <Check className="text-green-400 h-5 w-5 flex-shrink-0" />
                  <p className="text-green-300 text-sm">
                    Your order includes free setup and 24/7 technical support
                  </p>
                </div>

                <Button
                  onClick={() => navigate("/buy-products")}
                  variant="outline"
                  className="mt-4 w-full"
                >
                  Back to Shop
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        paymentLink={paymentLink}
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        onSuccess={handlePaymentSuccess}
        onFailure={handlePaymentFailure}
      />

      <Footer />
    </div>
  );
};

export default Checkout;
