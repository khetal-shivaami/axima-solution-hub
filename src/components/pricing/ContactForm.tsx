import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react"

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    selectedPlan:"",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
                  Your Name
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
                  Your Email
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
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-300 mb-1">
                  Contact Number
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
                <label htmlFor="selectedPlan" className="block text-sm font-medium text-gray-300 mb-1">
                  Select Plan
                </label>
                <select
                  id="selectedPlan"
                  name="selectedPlan"
                  value={formData.selectedPlan}
                  onChange={handleInputChange}
                   className="w-full bg-gray-700 text-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-axima-blue focus:border-transparent cursor-pointer"
                  required
                >
                  <option value="basic">Microsoft 365 Business Basic</option>
                  <option value="standard">Microsoft 365 Business Standard</option>
                  <option value="premium">Microsoft 365 Business Premium</option>
                  <option value="apps">Microsoft 365 Apps for business</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
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
    </section>
  );
};