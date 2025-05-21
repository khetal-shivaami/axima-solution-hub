
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const PaymentNotification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle payment callback
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const orderId = urlParams.get('orderId');
    
    if (status === 'SUCCESS') {
      toast.success("Payment successful!");
      navigate("/order-confirmation");
    } else {
      toast.error("Payment failed. Please try again.");
      navigate("/checkout");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-black/40 border border-axima-blue/20 rounded-lg p-8 text-center">
        <h2 className="text-xl font-semibold text-white mb-4">Processing Payment</h2>
        <p className="text-gray-300">Please wait while we process your payment...</p>
      </div>
    </div>
  );
};

export default PaymentNotification;
