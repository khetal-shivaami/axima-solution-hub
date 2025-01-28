import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedPlan: 'basic',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto mt-16 p-8 bg-black/40 rounded-lg">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Your Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-white/10 border-white/10 text-white focus:ring-2 focus:ring-axima-blue focus:border-transparent"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white/10 border-white/10 text-white focus:ring-2 focus:ring-axima-blue focus:border-transparent"
              placeholder="Enter your email"
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
              className="w-full bg-white/10 border border-white/10 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-axima-blue focus:border-transparent cursor-pointer"
              required
            >
              <option value="basic">Microsoft 365 Business Basic</option>
              <option value="standard">Microsoft 365 Business Standard</option>
              <option value="premium">Microsoft 365 Business Premium</option>
              <option value="apps">Microsoft 365 Apps for business</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-white/10 border-white/10 text-white min-h-[208px] focus:outline-none focus:ring-2 focus:ring-axima-blue focus:border-transparent"
              placeholder="Enter your message"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-axima-blue hover:bg-blue-600 text-white transition-all duration-300"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};