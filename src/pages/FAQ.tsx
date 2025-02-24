
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Microsoft 365?",
      answer: "Microsoft 365 is a subscription-based service that provides access to various Microsoft applications and services. It includes popular apps like Word, Excel, PowerPoint, and Teams, along with cloud storage and advanced security features."
    },
    {
      question: "How does Azure cloud benefit businesses?",
      answer: "Azure cloud provides scalable, secure, and cost-effective cloud computing solutions. It enables businesses to build, deploy, and manage applications and services through Microsoft's global network of data centers."
    },
    {
      question: "What support services do you offer?",
      answer: "We offer comprehensive support services including 24/7 technical support, implementation assistance, training, and ongoing maintenance for all our products and solutions."
    },
    {
      question: "How can I get started with your services?",
      answer: "Getting started is easy! Simply contact our sales team through the contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business."
    },
    {
      question: "What security measures are in place?",
      answer: "We implement industry-leading security measures including encryption, multi-factor authentication, regular security audits, and compliance with international security standards to protect your data."
    },
    {
      question: "Do you offer training for the products?",
      answer: "Yes, we provide comprehensive training programs for all our products. This includes both online and in-person training sessions, documentation, and ongoing support to ensure your team can effectively use our solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Accordion type="single" collapsible className="bg-black/40 rounded-lg" key={index}>
                <AccordionItem value={`item-${index}`} className="border-b border-white/10 last:border-0">
                  <AccordionTrigger className="text-white hover:text-axima-blue px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-4 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
