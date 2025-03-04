import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
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
            Full Name <span style={{ color: 'red' }}>*</span>
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/10 border-white/10 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Your Email <span style={{ color: 'red' }}>*</span>
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white/10 border-white/10 text-white"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-300 mb-1">
          Contact Number <span style={{ color: 'red' }}>*</span>
        </label>
        <Input
          id="contactNumber"
          value={formData.contactNumber}
          onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
          className="bg-white/10 border-white/10 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message <span style={{ color: 'red' }}>*</span>
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-white/10 border-white/10 text-white min-h-[120px]"
          required
        />
      </div>

      <div className="flex">
        <Button
          type="submit"
          className="w-100px bg-axima-blue hover:bg-blue-600 text-white transition-all duration-300 ml-auto"
        >
          Send Message
        </Button>
      </div>
    </motion.form>
  );
};

export default ContactForm;