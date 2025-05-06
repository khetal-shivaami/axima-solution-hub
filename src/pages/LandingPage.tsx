
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle, Building2, ArrowUp, Star } from "lucide-react";
import { Stats } from "@/components/Stats";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define form schema with validation
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  licenses: z.string()
    .refine((val) => !isNaN(Number(val)), "Must be a number")
    .refine((val) => Number(val) > 0, "Must be greater than 0"),
  emailSolution: z.string().min(1, "Please select your existing email solution")
});

type FormValues = z.infer<typeof formSchema>;

const LandingPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const topRef = useRef<HTMLDivElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      licenses: "",
      emailSolution: ""
    }
  });

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      
      // Show success message
      setIsSuccess(true);
      toast({
        title: "Enquiry Submitted!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form
      form.reset();
      
      // Redirect after a short delay
      setTimeout(() => {
        navigate("/contact-thank-you");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your enquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Array of Microsoft 365 products with logos
  const microsoft365Products = [
    { name: "Word", logo: "/lovable-uploads/logos/microsoft_logos/microsoft_word.webp" },
    { name: "Excel", logo: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.webp" },
    { name: "PowerPoint", logo: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.webp" },
    { name: "Outlook", logo: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.webp" },
    { name: "Teams", logo: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.webp" },
    { name: "OneDrive", logo: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.webp" },
    { name: "SharePoint", logo: "/lovable-uploads/logos/microsoft_logos/microsoft_sharepoint.webp" },
    { name: "Exchange", logo: "/lovable-uploads/logos/microsoft_logos/microsoft_exchange.webp" },
  ];

  // Microsoft Partner Badges
  const partnerBadges = [
    {
      name: "Microsoft Cloud Solution Provider",
      image: "https://storage.googleapis.com/axima-website-content/badges/AXIMA%20Corporation.webp"
    },
    {
      name: "Trusted Microsoft Partner for 10+ years",
      image: "https://storage.googleapis.com/axima-website-content/badges/MSFT_50AnniversaryBadge_10Years_-fotor-20250321163921.png"
    }
  ];

  // Benefits from About page (Why Choose Axima)
  const benefits = [
    "Take advantage of competitive pricing with our wholesale price list",
    "Access a range of value-added tools, products, and services through a unified approach",
    "Enhance customer satisfaction with multiple touchpoints",
    "Benefit from our experienced technical support team dedicated to meeting your needs",
    "Have a dedicated representative as your primary contact to ensure customer satisfaction",
    "Join over 2,000 satisfied customers across India",
    "Leverage our decade-long experience of expertise in Cloud Technology",
    "Our strong understanding of Cloud security",
    "Enjoy prompt and reliable customer support"
  ];

  // Microsoft 365 plans
  const m365Plans = [
    {
      name: "Microsoft 365 Business Basic",
      features: [
        "Business email and calendaring",
        "Web and mobile versions of Word, Excel, PowerPoint",
        "1 TB cloud storage per user",
        "Microsoft Teams for online meetings and chat"
      ]
    },
    {
      name: "Microsoft 365 Business Standard",
      features: [
        "Everything in Business Basic plus:",
        "Desktop versions of Office apps",
        "Easy webinar hosting",
        "Attendee registration and reporting tools",
        "Customer appointment management"
      ]
    },
    {
      name: "Microsoft 365 Business Premium",
      features: [
        "Everything in Business Standard plus:",
        "Advanced security features",
        "Access and data control",
        "Cyberthreat protection",
        "Device management"
      ]
    },
    {
      name: "Microsoft 365 Apps for Business",
      features: [
        "Desktop Office apps for PC and Mac",
        "Office mobile apps",
        "1 TB cloud storage per user",
        "Always up-to-date apps"
      ]
    }
  ];

  const emailSolutions = [
    "Google Workspace (Formerly G Suite)",
    "Exchange Server",
    "Lotus Notes",
    "Rediffmail",
    "Yahoo Mail",
    "Zoho Mail",
    "Microsoft 365 (Office 365)",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-x-hidden">
      {/* Enhanced Grid Background and Particles Effect - both are visible now */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-30">
          <div className="tech-background h-full w-full"></div>
        </div>
      </div>
      
      {/* Header Section without Navigation */}
      <div ref={topRef} className="py-6 border-b border-white/10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Microsoft Logo on Left (Mobile: Top) */}
            <div className="mb-4 md:mb-0 order-2 md:order-2 flex items-center justify-center md:justify-start w-full md:w-1/3">
              <img 
                src="/lovable-uploads/Microsoft_365_logo.png" 
                alt="Microsoft 365" 
                className="h-12 object-contain ml-14"
              />
            </div>
            
            {/* Axima Logo in Center */}
            <div className="mb-4 md:mb-0 order-1 md:order-1 flex items-center justify w-full md:w-1/3">
              <img 
                src="/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png" 
                alt="Axima Corporation" 
                className="h-16 object-contain"
              />
            </div>
            
            {/* Contact Info on Right (Mobile: Bottom) */}
            <div className="order-3 md:order-3 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-4 w-full md:w-1/3">
              <a 
                href="tel:+91 83695 60989" 
                className="flex items-center text-gray-300 hover:text-axima-blue transition-colors"
              >
                <Phone className="w-5 h-5 mr-2 text-axima-blue" />
                +91 83695 60989
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Microsoft 365 Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Transform Your Business with <span className="text-axima-blue">Microsoft 365</span>
              </h1>
              
              <p className="text-gray-300 text-lg mb-8 text-justify">
              Unlock the full potential of your team with Microsoft 365 - the ultimate productivity suite for businesses of all sizes. Whether you're working from the office, remotely, or on the move, M365 offers powerful tools like Word, Excel, Teams, Outlook, and more, combined with cloud storage, real-time collaboration, and enterprise-grade security.
              </p>
              
              <div className="bg-black/40 p-6 rounded-lg border border-white/10 mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Microsoft 365 Applications
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-8 gap-8">
                  {microsoft365Products.map((product, index) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex flex-col items-center group"
                    >
                      <div className="p-2 rounded-lg bg-black/60 border border-white/10 hover:border-axima-blue/40 transition-all duration-300 w-19 flex items-center justify-center">
                        <img
                          src={product.logo}
                          alt={product.name}
                          className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="mt-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                        {product.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: Enquiry Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/40 p-8 rounded-lg border border-white/10"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">
                Enquiry Form
              </h2>
              
              {isSuccess ? (
                <div className="py-8">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300">
                      Your enquiry has been submitted successfully. We'll get back to you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue focus-visible:ring-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Work Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your work email" 
                                type="email"
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue focus-visible:ring-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Contact No</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your phone number" 
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue focus-visible:ring-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Company Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your company name" 
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue focus-visible:ring-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="emailSolution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Existing Email Solution</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-black/60 border-white/20 text-white focus:border-axima-blue focus-visible:ring-axima-blue">
                                  <SelectValue placeholder="Select your current email solution" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-gray-900 border-white/10 text-white">
                                {emailSolutions.map((solution) => (
                                  <SelectItem key={solution} value={solution} className="focus:bg-gray-800 focus:text-white hover:bg-gray-800">
                                    {solution}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="licenses"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">No. of Licenses Required</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter the number of licenses" 
                                type="number"
                                min="1"
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue focus-visible:ring-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-axima-blue hover:bg-blue-600 text-white" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Submit Enquiry 
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Microsoft 365 Plans Section */}
      <div className="py-16 bg-black/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find the Best Microsoft 365 Plan for Your Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from a range of Microsoft 365 plans tailored to meet your team's needs, size, and budget:
            </p>
            <div className="w-24 h-1 bg-axima-blue mx-auto mt-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {m365Plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/40 border border-axima-blue/20 hover:border-axima-blue text-white transform transition-all duration-300 hover:scale-102 hover:bg-black/60">
                  <CardHeader className="bg-axima-blue rounded-t-lg">
                    <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-axima-blue mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              Not just these! We offer a wide variety of Microsoft 365 and enterprise plans. 
              Our experts will help you choose the perfect fit for your business.
            </p>
          </div>
        </div>
      </div>
      
      {/* Microsoft Copilot Section */}
      <div className="py-16 bg-black/40 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">
                Enhance your Microsoft 365 experience with Copilot, your AI-powered assistant that transforms how you work.
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-axima-blue mr-2">🔹</span>
                  <span className="text-gray-300">Write better emails & reports in Outlook and Word</span>
                </li>
                <li className="flex items-start">
                  <span className="text-axima-blue mr-2">🔹</span>
                  <span className="text-gray-300">Generate summaries, to-do lists, and insights in Teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-axima-blue mr-2">🔹</span>
                  <span className="text-gray-300">Automate repetitive tasks in Excel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-axima-blue mr-2">🔹</span>
                  <span className="text-gray-300">Draft presentations instantly in PowerPoint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-axima-blue mr-2">🔹</span>
                  <span className="text-gray-300">Get intelligent suggestions across all apps</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img 
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/featurednews-card1-388388?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3360&hei=2245&qlt=100&fit=constrain" 
                alt="Microsoft Copilot" 
                className="rounded-lg shadow-lg max-w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Stats Section with Title */}
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-4 mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Growth & Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A decade of excellence in delivering Microsoft solutions across India
            </p>
            <div className="w-24 h-1 bg-axima-blue mx-auto mt-6 mb-8"></div>
          </motion.div>
        </div>
        <Stats />
      </div>
      
      {/* About Axima Section */}
      <div className="py-16 bg-black/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-axima-blue/20">
                <Building2 className="w-8 h-8 text-axima-blue" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">About Axima Corporation</h2>
            <div className="w-24 h-1 bg-axima-blue mx-auto mb-8"></div>
            
            <div className="bg-black/40 border border-white/10 text-white backdrop-blur-sm hover:bg-black/50 transition-all duration-300 rounded-lg p-8 mb-12">
              <p className="text-xl text-gray-300 leading-relaxed">
                Axima Corporation is a certified Microsoft 365 partner, dedicated to helping businesses leverage the benefits of cloud solutions. In today's competitive landscape, companies seek collaborative tools that provide a strategic advantage. Microsoft 365 delivers exactly that. With Axima's expertise in integrating Microsoft 365, your business gains enhanced flexibility and agility, empowering you to stay ahead in the market.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Why Choose Axima Section */}
      <div className="py-16 bg-black/50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Axima</h2>
            <div className="w-24 h-1 bg-axima-blue mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/40 border border-gray-800 hover:border-axima-blue/40 rounded-lg backdrop-blur-sm p-6 h-full group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-axima-blue flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-300 group-hover:text-white transition-colors">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Get Started Button */}
      <div className="py-16 bg-black/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Get Started Today</h2>
            <div className="w-24 h-1 bg-axima-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business with Microsoft 365? Contact us now to get started.
            </p>
            
            <Button 
              onClick={scrollToTop}
              className="px-8 py-6 text-lg bg-axima-blue hover:bg-blue-600 text-white group transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowUp className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Footer with Partnership Badges and Contact Information */}
      <div className="py-12 bg-black/40 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-6">Official Microsoft Partner</h3>
            
            <div className="flex flex-row flex-wrap gap-8 justify-center items-center mb-12">
              <div className="relative glass-card rounded-lg p-4 hover-lift flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-axima-blue/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src="https://storage.googleapis.com/axima-website-content/badges/AXIMA%20Corporation.webp" 
                    alt="Microsoft Cloud Solution Provider"
                    className="w-40 h-32 object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="relative glass-card rounded-lg p-4 hover-lift flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-axima-blue/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src="https://storage.googleapis.com/axima-website-content/badges/MSFT_50AnniversaryBadge_10Years_-fotor-20250321163921.png" 
                    alt="Trusted Microsoft Partner for 10+ years"
                    className="w-40 h-32 object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            {/* Contact Information (moved from form) */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-axima-blue/20 rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-axima-blue" />
                </div>
                <h4 className="font-medium text-white mb-2">Our Location</h4>
                <p className="text-gray-300 text-sm">
                  1001, 10th Floor, Runwal R Square,<br />LBS Road, Mulund West,<br />Mumbai - 400080
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-axima-blue/20 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-axima-blue" />
                </div>
                <h4 className="font-medium text-white mb-2">Email Us</h4>
                <a href="mailto:info@axima.in" className="text-gray-300 text-sm hover:text-axima-blue transition-colors">
                  info@axima.in
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-axima-blue/20 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-axima-blue" />
                </div>
                <h4 className="font-medium text-white mb-2">Call Us</h4>
                <a href="tel:+918369560989" className="text-gray-300 text-sm hover:text-axima-blue transition-colors">
                  +91 83695 60989
                </a>
              </div>
            </div>
            
            <p className="text-gray-400 text-center mt-12">
              © {new Date().getFullYear()} Axima Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
