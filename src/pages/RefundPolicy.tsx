
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Receipt } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-20 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-axima-blue/20">
              <Receipt className="w-8 h-8 text-axima-blue" />
            </div>
          </div>
          <Card className="bg-black/40 border-white/10">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Refund Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <h2>1. Refund Eligibility</h2>
              <p>We offer refunds under the following conditions:</p>
              <ul>
                <li>Service unavailability not caused by the customer</li>
                <li>Technical issues preventing service delivery</li>
                <li>Duplicate charges or billing errors</li>
              </ul>

              <h2>2. Refund Process</h2>
              <p>To request a refund:</p>
              <ul>
                <li>Contact our support team within 30 days of purchase</li>
                <li>Provide order details and reason for refund</li>
                <li>Allow 5-7 business days for processing</li>
              </ul>

              <h2>3. Non-Refundable Items</h2>
              <ul>
                <li>Customized solutions</li>
                <li>Used license keys</li>
                <li>Services already rendered</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
