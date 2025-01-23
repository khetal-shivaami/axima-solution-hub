import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { TrustedBy } from "@/components/TrustedBy";
import { Vision } from "@/components/Vision";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <Hero />
      <Stats />
      <Vision />
      <TrustedBy />
      <Footer />
    </div>
  );
};

export default Index;