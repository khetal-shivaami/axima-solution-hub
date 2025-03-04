
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';
import { Loader2 } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    selectedPlan: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You'll need to replace these IDs with your actual EmailJS IDs
      const templateParams = {
        name: formData.name,
        email: formData.email,
        contact: formData.contactNumber,
        plans: formData.selectedPlan,
        message: formData.message,
        url: window.location.href,
        title: "Plan Inquiry Form Submission from Axima Website"
      };

      // Replace with your actual EmailJS service ID, template ID, and user ID
      await emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        templateParams, 
        'YOUR_USER_ID'
      );

      toast({
        title: "Success!",
        description: "Your inquiry has been sent. We'll contact you soon.",
        variant: "default"
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        selectedPlan: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error!",
        description: "There was a problem sending your inquiry. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-0 bg-black/40">
      <motion.form
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handleSubmit}
        className="space-y-6 bg-white/5 p-8 rounded-lg backdrop-blur-sm"
      >
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-white/10 border-white/10 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Your Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white/10 border-white/10 text-white"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-300 mb-1">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <Input
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="bg-white/10 border-white/10 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="selectedPlan" className="block text-sm font-medium text-gray-300 mb-1">
              Select Plan <span className="text-red-500">*</span>
            </label>
            <select
              id="selectedPlan"
              name="selectedPlan"
              value={formData.selectedPlan}
              onChange={handleInputChange}
              className="w-full bg-gray-700 text-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-axima-blue focus:border-transparent cursor-pointer"
              required
            >
              <option value="">Select Plan</option>
              <option value="basic">Microsoft 365 Business Basic</option>
              <option value="standard">Microsoft 365 Business Standard</option>
              <option value="premium">Microsoft 365 Business Premium</option>
              <option value="apps">Microsoft 365 Apps for business</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="bg-white/10 border-white/10 text-white min-h-[120px]"
            required
          />
        </div>

        <div className="flex">
          <Button
            type="submit"
            className="w-100px bg-axima-blue hover:bg-blue-600 text-white transition-all duration-300 ml-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </motion.form>
    </section>
  );
};
