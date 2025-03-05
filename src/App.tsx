
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { PageTransition } from "./components/PageTransition";
import { ScrollIndicator } from "./components/ScrollIndicator";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PlansAndPricing from "./pages/PlansAndPricing";
import ProductDetails from "./pages/ProductDetails";
import Copilot from "./pages/Copilot";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import Microsoft365 from "./pages/Microsoft365";
import MSAzure from "./pages/MSAzure";
import JioAzure from "./pages/JioAzure";
import SupportPackages from "./pages/SupportPackages";
import CaseStudies from "./pages/CaseStudies";
import ContactThankYou from "./pages/ContactThankYou";
import PlanThankYou from "./pages/PlanThankYou";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <PageTransition>
        <ScrollIndicator />
        <Routes>
          <Route path="/" element={
            <TooltipProvider>
              <Index />
            </TooltipProvider>
          } />
          <Route path="/about" element={
            <TooltipProvider>
              <About />
            </TooltipProvider>
          } />
          <Route path="/products" element={
            <TooltipProvider>
              <Products />
            </TooltipProvider>
          } />
          <Route path="/services" element={
            <TooltipProvider>
              <Services />
            </TooltipProvider>
          } />
          <Route path="/contact" element={
            <TooltipProvider>
              <Contact />
            </TooltipProvider>
          } />
          <Route path="/contact-thank-you" element={
            <TooltipProvider>
              <ContactThankYou />
            </TooltipProvider>
          } />
          <Route path="/plan-thank-you" element={
            <TooltipProvider>
              <PlanThankYou />
            </TooltipProvider>
          } />
          <Route path="/faq" element={
            <TooltipProvider>
              <FAQ />
            </TooltipProvider>
          } />
          <Route path="/plans" element={
            <TooltipProvider>
              <PlansAndPricing />
            </TooltipProvider>
          } />
          <Route path="/product/:productId" element={
            <TooltipProvider>
              <ProductDetails />
            </TooltipProvider>
          } />
          <Route path="/copilot" element={
            <TooltipProvider>
              <Copilot />
            </TooltipProvider>
          } />
          <Route path="/privacy-policy" element={
            <TooltipProvider>
              <PrivacyPolicy />
            </TooltipProvider>
          } />
          <Route path="/terms-conditions" element={
            <TooltipProvider>
              <TermsConditions />
            </TooltipProvider>
          } />
          <Route path="/refund-policy" element={
            <TooltipProvider>
              <RefundPolicy />
            </TooltipProvider>
          } />
          <Route path="/microsoft-365" element={
            <TooltipProvider>
              <Microsoft365 />
            </TooltipProvider>
          } />
          <Route path="/microsoft-azure" element={
            <TooltipProvider>
              <MSAzure />
            </TooltipProvider>
          } />
          <Route path="/microsoft-jioazure" element={
            <TooltipProvider>
              <JioAzure />
            </TooltipProvider>
          } />
          <Route path="/support-packages" element={
            <TooltipProvider>
              <SupportPackages />
            </TooltipProvider>
          } />
          <Route path="/case-studies" element={
            <TooltipProvider>
              <CaseStudies />
            </TooltipProvider>
          } />
        </Routes>
      </PageTransition>
      <Toaster />
      <Sonner />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
