
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader } from "lucide-react";

interface PaymentModalProps {
  paymentLink: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onFailure: (message: string) => void;
}

export function PaymentModal({
  paymentLink,
  isOpen,
  onClose,
  onSuccess,
  onFailure,
}: PaymentModalProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "success" | "failed">("pending");

  useEffect(() => {
    if (!isOpen || !paymentLink) return;

    // Reset states when modal opens
    setLoading(true);
    setPaymentStatus("pending");

    // Create a message listener to handle postMessages from the payment iframe
    const handleMessage = (event: MessageEvent) => {
      // Verify origin - replace with your payment gateway's origin
      // if (event.origin !== 'https://your-payment-gateway.com') return;

      try {
        const data = event.data;
        if (data.paymentStatus === 'success') {
          setPaymentStatus("success");
          setTimeout(() => {
            onSuccess();
            navigate('/order-confirmation');
          }, 1000);
        } else if (data.paymentStatus === 'failed') {
          setPaymentStatus("failed");
          onFailure(data.message || 'Payment failed');
        }
      } catch (error) {
        console.error('Error processing payment message:', error);
      }
    };

    // Add event listener
    window.addEventListener('message', handleMessage);

    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isOpen, paymentLink, navigate, onSuccess, onFailure]);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleClose = () => {
    if (paymentStatus === "pending") {
      const confirmExit = window.confirm(
        "Are you sure you want to cancel your payment? Your order will not be processed."
      );
      if (confirmExit) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] bg-gray-900 text-white border border-axima-blue/20">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">Secure Payment</DialogTitle>
        </DialogHeader>

        <div className="relative min-h-[400px]">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-md">
              <div className="text-center">
                <Loader className="h-8 w-8 animate-spin text-axima-blue mx-auto mb-4" />
                <p className="text-white">Loading payment gateway...</p>
              </div>
            </div>
          )}

          {paymentStatus === "success" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/90 rounded-md z-10">
              <div className="text-center p-6">
                <div className="bg-green-500/20 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Payment Successful!</h3>
                <p className="text-gray-300 mb-4">Your order has been confirmed.</p>
                <Button
                  onClick={() => navigate('/order-confirmation')}
                  className="bg-axima-blue hover:bg-axima-blue/80"
                >
                  View Order Details
                </Button>
              </div>
            </div>
          )}

          {paymentStatus === "failed" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/90 rounded-md z-10">
              <div className="text-center p-6">
                <div className="bg-red-500/20 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Payment Failed</h3>
                <p className="text-gray-300 mb-4">There was an issue processing your payment.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={handleClose}
                    variant="outline"
                    className="border-gray-700"
                  >
                    Try Again
                  </Button>
                  <Button
                    onClick={() => {
                      handleClose();
                      navigate('/checkout');
                    }}
                    className="bg-axima-blue hover:bg-axima-blue/80"
                  >
                    Return to Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}

          <iframe
            src={paymentLink}
            title="Payment Gateway"
            className="w-full h-[500px] border-0 rounded-md"
            onLoad={handleIframeLoad}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
