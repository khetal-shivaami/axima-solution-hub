
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle, Building2 } from "lucide-react";
import { Stats } from "@/components/Stats";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrustedBy } from "@/components/TrustedBy";

// Define form schema with validation
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  licenses: z.string()
    .refine((val) => !isNaN(Number(val)), "Must be a number")
    .refine((val) => Number(val) > 0, "Must be greater than 0")
});

type FormValues = z.infer<typeof formSchema>;

const LandingPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      licenses: ""
    }
  });

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

  const address = "1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080";

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
      <div className="py-6 border-b border-white/10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Microsoft Logo on Left (Mobile: Top) */}
            <div className="mb-4 md:mb-0 order-1 md:order-1 flex items-center justify-center md:justify-start w-full md:w-1/3">
              <img 
                src="/lovable-uploads/logos/Microsoft_365.webp" 
                alt="Microsoft 365" 
                className="h-12 object-contain"
              />
            </div>
            
            {/* Axima Logo in Center */}
            <div className="mb-4 md:mb-0 order-2 md:order-2 flex items-center justify-center w-full md:w-1/3">
              <img 
                src="/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png" 
                alt="Axima Corporation" 
                className="h-16 object-contain"
              />
            </div>
            
            {/* Contact Info on Right (Mobile: Bottom) */}
            <div className="order-3 md:order-3 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-4 w-full md:w-1/3">
              <a 
                href="mailto:info@axima.in" 
                className="flex items-center text-gray-300 hover:text-axima-blue transition-colors"
              >
                <Mail className="w-5 h-5 mr-2 text-axima-blue" />
                info@axima.in
              </a>
              <a 
                href="tel:+9177578 41333" 
                className="flex items-center text-gray-300 hover:text-axima-blue transition-colors"
              >
                <Phone className="w-5 h-5 mr-2 text-axima-blue" />
                +91 77578 41333
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
              
              <p className="text-gray-300 text-lg mb-8">
                Empower your organization with Microsoft's comprehensive suite of productivity tools. As a trusted Microsoft Cloud Solution Provider, Axima delivers seamless integration, enhanced productivity, and robust security for businesses of all sizes.
              </p>
              
              <div className="bg-black/40 p-6 rounded-lg border border-white/10 mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Microsoft 365 Applications
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {microsoft365Products.map((product, index) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex flex-col items-center group"
                    >
                      <div className="p-4 rounded-lg bg-black/60 border border-white/10 hover:border-axima-blue/40 transition-all duration-300 w-full flex items-center justify-center">
                        <img
                          src={product.logo}
                          alt={product.name}
                          className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="mt-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                        {product.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Key Benefits
                </h2>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-axima-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Anywhere, anytime access to Office applications and email</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-axima-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Enhanced security and compliance features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-axima-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Real-time collaboration across devices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-axima-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Streamlined communication with Microsoft Teams</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-axima-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Simplified IT management and reduced costs</span>
                  </li>
                </ul>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">First Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your first name" 
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Last Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your last name" 
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
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
                              className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Contact No</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your phone number" 
                              className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
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
                              className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
                              {...field} 
                            />
                          </FormControl>
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
                              className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
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

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-axima-blue mt-1" />
                    <div>
                      <p className="text-gray-300">
                        {address}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-axima-blue mt-1" />
                    <div>
                      <a 
                        href="mailto:info@axima.in" 
                        className="text-gray-300 hover:text-axima-blue transition-colors"
                      >
                        info@axima.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-axima-blue mt-1" />
                    <div>
                      <a 
                        href="tel:+9177578 41333" 
                        className="text-gray-300 hover:text-axima-blue transition-colors"
                      >
                        +91 77578 41333
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
      
      {/* Horizontal Enquiry Form at Bottom */}
      <div className="py-16 bg-black/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Get Started Today</h2>
            <div className="w-24 h-1 bg-axima-blue mx-auto mb-12"></div>
            
            <div className="bg-black/40 p-8 rounded-lg border border-white/10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">First Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your first name" 
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Last Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your last name" 
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-6">
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
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Contact No</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your phone number" 
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Company Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your company name" 
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
                                {...field} 
                              />
                            </FormControl>
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
                                className="bg-black/60 border-white/20 text-white focus:border-axima-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      type="submit" 
                      className="px-8 bg-axima-blue hover:bg-blue-600 text-white" 
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
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer with Partnership Badges */}
      <div className="py-12 bg-black/40 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-6">Official Microsoft Partner</h3>
            
            <div className="flex flex-row flex-wrap gap-8 justify-center items-center">
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
            
            <p className="text-gray-400 text-center mt-8">
              © {new Date().getFullYear()} Axima Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
