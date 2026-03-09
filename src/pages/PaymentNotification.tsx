
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const PaymentNotification = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(true);
  
  useEffect(() => {
    async function handlePaymentCallback() {
      try {
        // Get payment status from URL parameters
        const status = searchParams.get("status");
        const orderId = searchParams.get("order_id");
        const paymentId = searchParams.get("payment_id");
        
        if (!status) {
          throw new Error("Missing payment status");
        }
        
        if (status === "success") {
          // Optional: Verify payment on your server
          // const verification = await verifyPayment(orderId, paymentId);
          // if (verification.success) {
          //   toast.success("Payment successful!");
          //   navigate("/order-confirmation");
          // } else {
          //   throw new Error(verification.message || "Payment verification failed");
          // }
          
          // For now, we'll just navigate to the success page
          toast.success("Payment successful!");
          setTimeout(() => {
            navigate("/order-confirmation");
          }, 1500);
        } else {
          throw new Error("Payment failed or was cancelled");
        }
      } catch (error) {
        console.error("Payment callback error:", error);
        toast.error(error.message || "Payment processing failed. Please try again.");
        setTimeout(() => {
          navigate("/checkout");
        }, 2000);
      } finally {
        setProcessing(false);
      }
    }
    
    handlePaymentCallback();
  }, [searchParams, navigate]);
  
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-black/40 border border-axima-blue/20 rounded-lg p-8 max-w-md w-full">
        {processing ? (
          <div className="text-center">
            <Loader className="h-12 w-12 animate-spin text-axima-blue mx-auto mb-6" />
            <h2 className="text-xl font-semibold text-white mb-3">Processing Your Payment</h2>
            <p className="text-gray-300">Please wait while we confirm your payment...</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-300">Redirecting you to the appropriate page...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentNotification;
