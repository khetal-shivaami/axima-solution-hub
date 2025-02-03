import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Microsoft 365?",
      answer: "Microsoft 365 is a cloud-based service that brings together the best tools for the way people work today. By combining best-in-class apps like Excel and Outlook with powerful cloud services like OneDrive and Microsoft Teams, Microsoft 365 lets anyone create and share anywhere on any device."
    },
    {
      question: "What is the difference between Microsoft 365 and Office 365?",
      answer: "Microsoft 365 includes everything you know in Office 365. Microsoft 365 is designed to help people and businesses achieve more with innovative Office apps, intelligent cloud services, and world-class security."
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: "If you cancel your subscription, your data will still be accessible for 90 days. This gives you time to export and save your information. After 90 days, Microsoft will delete all your data."
    },
    {
      question: "Can I mix and match Microsoft 365 plans?",
      answer: "Yes, you can mix and match Microsoft 365 plans. For example, you can combine Microsoft 365 Business Basic with Microsoft 365 Business Standard licenses."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and net banking options. For enterprise customers, we also provide options for purchase orders and wire transfers."
    },
    {
      question: "Do you provide technical support?",
      answer: "Yes, we provide 24/7 technical support through phone, email, and chat. Our dedicated support team is always ready to help you with any issues or questions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-axima-blue/20">
              <HelpCircle className="w-8 h-8 text-axima-blue" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our Microsoft solutions and services
          </p>
          <div className="w-24 h-1 bg-axima-blue mx-auto mt-6"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 group hover:border-axima-blue/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-white px-4 group-hover:text-axima-blue">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-4 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;