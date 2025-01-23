import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-16 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Do you want to know more about Microsoft Office 365 and its plans? Our experts would love to talk with you. Just fill out the form below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-axima-blue mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Location:</h3>
                <p className="text-gray-300">
                  1001, 10th Floor, Runwal R Square, LBS Road, Mulund West,<br />
                  Mumbai - 400080
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-axima-blue mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Email:</h3>
                <a href="mailto:info@axima.com" className="text-gray-300 hover:text-axima-blue transition-colors">
                  info@axima.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-axima-blue mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Call:</h3>
                <a href="tel:+917758741333" className="text-gray-300 hover:text-axima-blue transition-colors">
                  +91 775 784 1333
                </a>
              </div>
            </div>

            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1123850825173!2d72.94661491490255!3d19.17165698703431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8de0198c8b9%3A0x3fee6e7dd005e548!2sEcstasy%20Business%20Park!5e0!3m2!1sen!2sin!4v1647940434368!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 p-8 rounded-lg backdrop-blur-sm"
          >
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

            <Button
              type="submit"
              className="w-full bg-axima-blue hover:bg-blue-600 text-white transition-all duration-300"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};