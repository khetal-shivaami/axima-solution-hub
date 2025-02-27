
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { PricingToggle } from "@/components/pricing/PricingToggle";
import { PlanComparison } from "@/components/pricing/PlanComparison";
import { ContactForm } from "@/components/pricing/ContactForm";
import { PlanCard } from "@/components/pricing/PlanCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useCSVData } from "@/hooks/useCSVData";
import { productDescriptions } from "@/utils/csvUtils";

const PlansAndPricing = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [showComparison, setShowComparison] = useState(true);
  
  // Use our custom hook to load plans from CSV
  const { plans, isLoading, error } = useCSVData('/data/plans.csv');

  // Fallback data in case CSV loading fails
  const fallbackPlans = [
    {
      name: "Microsoft 365 Business Basic",
      monthlyPrice: "₹145",
      yearlyPrice: "₹1,740",
      features: [
        "Chat, call, meet up to 300 attendees",
        "Web and mobile versions of Office apps",
        "1 TB of cloud storage",
        "Business-class email",
        "Standard security",
        "Anytime phone and web support"
      ],
      products: [
        { name: "Microsoft Word", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png" },
        { name: "Microsoft Excel", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png" },
        { name: "Microsoft PowerPoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png" },
        { name: "Microsoft Outlook", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png" },
        { name: "Microsoft Teams", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png" },
        { name: "Microsoft Exchange", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_exchange.png" },
        { name: "SharePoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_sharepoint.png" },
        { name: "Microsoft OneDrive", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png" },
      ],
      licenceDescription: "Min 300 licence"
    },
    {
      name: "Microsoft 365 Business Standard",
      monthlyPrice: "₹770",
      yearlyPrice: "₹9,240",
      features: [
        "Everything in Business Basic, plus:",
        "Desktop versions of Office apps with premium features",
        "Easily host webinars",
        "Attendee registration and reporting tools",
        "Manage customer appointments"
      ],
      products: [
        { name: "Microsoft Word", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png" },
        { name: "Microsoft Excel", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png" },
        { name: "Microsoft PowerPoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png" },
        { name: "Microsoft Outlook", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png" },
        { name: "Microsoft Teams", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png" },
        { name: "Microsoft Exchange", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_exchange.png" },
        { name: "Microsoft OneDrive", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png" },
        { name: "SharePoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_sharepoint.png" },
        { name: "Microsoft Loop", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_loop.png" },
        { name: "Clipchamp", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_clipchamp.png" },
      ],
      licenceDescription: "Min 300 licence"
    },
    {
      name: "Microsoft 365 Business Premium",
      monthlyPrice: "₹1,830",
      yearlyPrice: "₹21,960",
      features: [
        "Everything in Business Standard, plus:",
        "Advanced security",
        "Access and data control",
        "Cyberthreat protection"
      ],
      products: [
        { name: "Microsoft Word", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png" },
        { name: "Microsoft Excel", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png" },
        { name: "Microsoft PowerPoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png" },
        { name: "Microsoft Outlook", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png" },
        { name: "Microsoft Teams", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png" },
        { name: "Microsoft Exchange", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_exchange.png" },
        { name: "Microsoft OneDrive", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png" },
        { name: "Microsoft Intune", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_intune.png" },
        { name: "SharePoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_sharepoint.png" },
        { name: "Microsoft Loop", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_loop.png" },
        { name: "Clipchamp", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_clipchamp.png" },
        { name: "Microsoft Defender", icon: "/lovable-uploads/logos/microsoft_logos/windows_defender.png" },
        { name: "Microsoft Pureview", icon: "/lovable-uploads/logos/microsoft_logos/azure_information_prot.png" },
      ],
      licenceDescription: "Min 300 licence"
    },
    {
      name: "Microsoft 365 Apps for business",
      monthlyPrice: "₹685",
      yearlyPrice: "₹8,220",
      features: [
        "Everything in Business Standard, plus:",
        "Advanced security",
        "Access and data control",
        "Cyberthreat protection"
      ],
      products: [
        { name: "Microsoft Word", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png" },
        { name: "Microsoft Excel", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png" },
        { name: "Microsoft PowerPoint", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png" },
        { name: "Microsoft Outlook", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png" },
        { name: "Microsoft OneDrive", icon: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png" },
      ],
      licenceDescription: "---"
    }
  ];

  // Decide which plans to use
  const displayPlans = isLoading ? [] : (plans.length > 0 ? plans : fallbackPlans);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const toggleComparison = () => {
    setShowComparison(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="pt-20 p-8">
        <motion.div variants={itemVariants} className="max-w-7xl mx-auto space-y-8">
          <div className="bg-axima-blue py-8 rounded-lg relative z-10">
            <h1 className="text-4xl font-bold text-white text-center mb-2">Microsoft 365 Plans</h1>
            <p className="text-white/80 text-center">Choose the perfect plan for your business</p>
          </div>

          <PricingToggle billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />

          {isLoading ? (
            <div className="flex justify-center items-center py-24">
              <Loader2 className="h-10 w-10 text-axima-blue animate-spin" />
              <p className="ml-3 text-white">Loading plans...</p>
            </div>
          ) : error ? (
            <div className="p-6 bg-red-900/30 border border-red-500/50 rounded-lg text-center">
              <p className="text-red-200">There was an error loading the plans: {error}</p>
              <p className="text-white mt-2">Showing fallback data instead.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-4 gap-6">
              {displayPlans.map((plan, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <PlanCard
                    {...plan}
                    billingPeriod={billingPeriod}
                    productDescriptions={productDescriptions}
                  />
                </motion.div>
              ))}
            </div>
          )}

          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={toggleComparison}
              className="text-white hover:text-white hover:bg-axima-blue/20 border-axima-blue cursor-pointer"
            >
              {showComparison ? (
                <>
                  Hide Compare Plans Features <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show Compare Plans Features <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {showComparison && <PlanComparison />}
          <ContactForm />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default PlansAndPricing;
