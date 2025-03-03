
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lazy, Suspense, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Microsoft365ProductsModal } from "@/components/Microsoft365ProductsModal";

// Import products data separately to improve code splitting
import { microsoftSolutions, innovativeSolutions } from "@/data/productsData";

// Simple loading placeholder - much lighter than previous skeleton
const LoadingPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-axima-blue/30 border-t-axima-blue rounded-full animate-spin"></div>
  </div>
);

// Simplified solution card with minimal animations and effects
const SolutionCard = ({ 
  name, 
  description, 
  image, 
  onClick 
}: { 
  name: string; 
  description: string; 
  image: string; 
  onClick: () => void;
}) => {
  return (
    <div 
      onClick={onClick}
      className="p-4 bg-black/20 border border-axima-blue/20 rounded-lg cursor-pointer hover:border-axima-blue"
    >
      <div className="flex items-center gap-4">
        <img 
          src={image} 
          alt={name}
          className="w-16 h-16 object-contain"
          loading="lazy"
          width="64" 
          height="64"
        />
        <div>
          <h3 className="text-lg font-medium text-white">{name}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const navigate = useNavigate();
  const [showM365Modal, setShowM365Modal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Load content with a minimal delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handlers using useCallback to prevent unnecessary re-renders
  const handleMicrosoft365Click = useCallback((name: string) => {
    if (name === "Microsoft 365") {
      setShowM365Modal(true);
    } else {
      const solution = microsoftSolutions.find(s => s.name === name);
      if (solution) {
        navigate(solution.route);
      }
    }
  }, [navigate]);

  const handleInnovativeSolutionClick = useCallback((route: string) => {
    navigate(route);
  }, [navigate]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <LoadingPlaceholder />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="py-12">
          <h1 className="text-3xl font-bold text-white text-center mb-8">Our Products</h1>
          
          <div className="text-center text-white mb-8">
            <h2 className="text-xl font-medium mb-2">Complete Cloud Solutions Under One Roof</h2>
            <h3 className="text-lg">Explore Our Microsoft Solutions</h3>
          </div>

          {/* Microsoft Solutions - horizontal layout for better performance */}
          <div className="grid gap-4 mb-12">
            {microsoftSolutions.map((solution, index) => (
              <SolutionCard
                key={index}
                name={solution.name}
                description={solution.description}
                image={solution.image}
                onClick={() => handleMicrosoft365Click(solution.name)}
              />
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-white text-center mb-6">Other Innovative Solutions</h2>
            
            {/* Innovative Solutions - grid layout with minimal styling */}
            <div className="grid sm:grid-cols-2 gap-4">
              {innovativeSolutions.map((solution, index) => (
                <SolutionCard
                  key={index}
                  name={solution.name}
                  description={solution.description}
                  image={solution.image}
                  onClick={() => handleInnovativeSolutionClick(solution.route)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Microsoft365ProductsModal 
        open={showM365Modal} 
        onOpenChange={setShowM365Modal}
      />
      <Footer />
    </div>
  );
};

export default Products;
