
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

const TermsConditions = () => {
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
              <ScrollText className="w-8 h-8 text-axima-blue" />
            </div>
          </div>
          <Card className="bg-black/40 border-white/10">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using our services, you agree to be bound by these Terms and Conditions.</p>

              <h2>2. Use of Services</h2>
              <p>Our services are provided "as is" and "as available." You agree to use our services only for lawful purposes and in accordance with these Terms.</p>

              <h2>3. Account Responsibilities</h2>
              <ul>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You must notify us immediately of any unauthorized access</li>
                <li>You agree to provide accurate and complete information</li>
              </ul>

              <h2>4. Payment Terms</h2>
              <p>All payments are processed securely through our authorized payment processors. Prices are subject to change with notice.</p>

              <h2>5. Termination</h2>
              <p>We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
