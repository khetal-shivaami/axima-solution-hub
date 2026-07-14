
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

import { ScrollIndicator } from "./components/ScrollIndicator";
import { CartProvider } from "./contexts/CartContext";
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
import GoogleCloud from "./pages/GoogleCloud";
import SupportPackages from "./pages/SupportPackages";
import CaseStudies from "./pages/CaseStudies";
import ContactThankYou from "./pages/ContactThankYou";
import PlanThankYou from "./pages/PlanThankYou";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import BuyProducts from "./pages/BuyProducts";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import PaymentNotification from "./pages/PaymentNotification";
import EntityForm from "./pages/EntityForm";
import UpcomingEvents from "./pages/UpcomingEvents";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ProductPage from "./pages/ProductPage";
import CyberSecurity from "./pages/CyberSecurity";
import JumpCloud from "./pages/JumpCloud";
import MiniOrange from "./pages/MiniOrange";
import OnePassword from "./pages/OnePassword";
import Scalefusion from "./pages/Scalefusion";
import FlexiSign from "./pages/FlexiSign";

// Create QueryClient outside of the component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />
          <TooltipProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/buy-products" element={<BuyProducts />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/payment-notification" element={<PaymentNotification />} />
                <Route path="/entity-form" element={<EntityForm />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact-thank-you" element={<ContactThankYou />} />
                <Route path="/plan-thank-you" element={<PlanThankYou />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/plans" element={<PlansAndPricing />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/copilot" element={<Copilot />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/microsoft-365" element={<Microsoft365 />} />
                <Route path="/microsoft-azure" element={<MSAzure />} />
                <Route path="/microsoft-jioazure" element={<JioAzure />} />
                <Route path="/google-cloud" element={<GoogleCloud />} />
                <Route path="/cyber-security" element={<CyberSecurity />} />
                <Route path="/jumpcloud" element={<JumpCloud />} />
                <Route path="/miniorange" element={<MiniOrange />} />
                <Route path="/onepassword" element={<OnePassword />} />
                <Route path="/scalefusion" element={<Scalefusion />} />
                <Route path="/flexisign" element={<FlexiSign />} />
                <Route path="/support-packages" element={<SupportPackages />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/upcoming-events" element={<UpcomingEvents />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/products/:slug" element={<ProductPage />} />
                {/* Catch-all route for 404 - must be the last route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            <ScrollIndicator />
          </TooltipProvider>
          <Toaster />
          <Sonner />
        </CartProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
