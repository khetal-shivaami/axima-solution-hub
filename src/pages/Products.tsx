
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { lazy, Suspense, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Microsoft365ProductsModal } from "@/components/Microsoft365ProductsModal";

// Import products data separately to improve code splitting
import { microsoftSolutions, innovativeSolutions } from "@/data/productsData";

const ProductCardSkeleton = () => (
  <div className="p-4 rounded-lg bg-black/40 border border-axima-blue/20">
    <div className="flex flex-col items-center gap-4">
      <Skeleton className="w-20 h-16 rounded-lg" />
      <div className="w-full">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  </div>
);

const Products = () => {
  const navigate = useNavigate();
  const [showM365Modal, setShowM365Modal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMicrosoft365Click = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowM365Modal(true);
  };

  // Lazy load cards to improve initial load time
  const renderMicrosoftSolutions = () => {
    if (isLoading) {
      return (
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-3 gap-6">
        {microsoftSolutions.map((solution, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger>
              <Card 
                className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue text-white transform transition-all duration-300 hover:scale-102 hover:bg-black/60 cursor-pointer"
                onClick={(e) => solution.name === "Microsoft 365" ? handleMicrosoft365Click(e) : navigate(solution.route)}
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">{solution.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <img 
                    src={solution.image} 
                    alt={solution.name} 
                    className="w-full h-40 object-contain rounded-lg mb-4"
                    loading="lazy"
                    decoding="async"
                    width="160"
                    height="160"
                  />
                  <p className="text-gray-300 text-sm">{solution.description}</p>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-black/90 text-white border border-axima-blue">
              <h4 className="font-semibold mb-2">{solution.name}</h4>
              <p className="text-sm text-gray-300">{solution.description}</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    );
  };

  const renderInnovativeSolutions = () => {
    if (isLoading) {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {innovativeSolutions.map((solution, index) => (
          <Suspense key={index} fallback={<ProductCardSkeleton />}>
            <HoverCard>
              <HoverCardTrigger>
                <div 
                  className="p-4 rounded-lg bg-black/40 border border-axima-blue/20 hover:border-axima-blue hover:bg-black/60 transition-all duration-300 transform hover:scale-102 cursor-pointer"
                  onClick={() => navigate(solution.route)}
                >
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src={solution.image} 
                      alt={solution.name}
                      className="w-20 h-16 object-contain rounded-lg"
                      loading="lazy"
                      decoding="async"
                      width="80"
                      height="64"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{solution.name}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2">{solution.description}</p>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-black/90 text-white border border-axima-blue">
                <h4 className="font-semibold mb-2">{solution.name}</h4>
                <p className="text-sm text-gray-300">{solution.description}</p>
              </HoverCardContent>
            </HoverCard>
          </Suspense>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Our Products</h1>
          
          <div className="text-center text-white mb-8">
            <h2 className="text-2xl font-semibold mb-2">We Provide Complete Cloud Solutions to Meet All Your Needs under one roof</h2>
            <h3 className="text-xl">Explore Our Microsoft Solutions</h3>
          </div>

          {renderMicrosoftSolutions()}

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Other Innovative Solutions</h2>
            {renderInnovativeSolutions()}
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
