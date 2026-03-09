
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-2xl mx-auto bg-black/40 border border-axima-blue/20 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500/20 p-4 rounded-full">
              <CheckCircle className="h-16 w-16 text-green-400" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">Thank You for Your Order!</h1>
          <p className="text-gray-300 mb-6">
            Your order has been received and is being processed. A confirmation email will be sent to your email address shortly.
          </p>
          
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 gap-4 text-left">
              {/* <div>
                <p className="text-gray-400 text-sm">Order Number:</p>
                <p className="text-white font-medium">{orderId}</p>
              </div> */}
              <div>
                <p className="text-gray-400 text-sm">Date:</p>
                <p className="text-white font-medium">{orderDate}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Payment Method:</p>
                <p className="text-white font-medium">Bank Transfer</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Status:</p>
                <p className="text-white font-medium">Processing</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 mb-8">
            Our team will contact you shortly with payment instructions and to help set up your Microsoft 365 subscription.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-axima-blue hover:bg-axima-blue/80 text-white"
            >
              <Link to="/">Return to Home</Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
            >
              <Link to="/buy-products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
