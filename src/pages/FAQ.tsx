import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h1>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-black/40 rounded-lg border border-white/10"
                >
                  <AccordionTrigger className="text-white px-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-4 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;