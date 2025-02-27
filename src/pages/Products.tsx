import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

const microsoftSolutions = [
  {
    name: "Microsoft 365",
    description: "Microsoft 365 is a cloud-based service that is designed to help meet your organization's needs for robust security, reliability, and user productivity.",
    image: "/lovable-uploads/logos/Microsoft_365.webp",
    route: "/microsoft-365"
  },
  {
    name: "MS Azure",
    description: "MS Azure is a comprehensive cloud platform that provides scalable, on-demand computing resources and services, enabling businesses to build, deploy, and manage applications efficiently.",
    image: "/lovable-uploads/logos/Azure.webp",
    route: "/microsoft-azure"
  },
  {
    name: "MS Azure from Jio Region",
    description: "MS Azure from Jio Region provides Azure services with data centers located within India, ensuring enhanced security compliance and data residency.",
    image: "/lovable-uploads/logos/Azure.webp",
    route: "/microsoft-jioazure"
  }
];

const innovativeSolutions = [
  {
    name: "Jumpcloud",
    description: "A directory-as-a-service platform that simplifies user management, authentication, and device control across diverse IT environments.",
    image: "/lovable-uploads/logos/Jumpcloud-01.webp",
    route: "/product/jumpcloud"
  },
  {
    name: "Atera",
    description: "An all-in-one remote monitoring and management (RMM) platform designed for IT professionals to streamline patch management, automate tasks, and manage clients efficiently.",
    image: "/lovable-uploads/logos/Atera-01.webp",
    route: "/product/atera"
  },
  {
    name: "Spin AI",
    description: "Enhances cyber resilience, security operations, and cost efficiency with an all-in-one SaaS security platform that protects your SaaS data from loss, ransomware, risky apps, misconfigurations, and non-compliance.",
    image: "/lovable-uploads/logos/Spin.ai.webp",
    route: "/product/spin-ai"
  },
  {
    name: "HYCU",
    description: "Delivers data protection and backup-as-a-service, tailored for multi-cloud and hybrid environments.",
    image: "/lovable-uploads/logos/Hycu-2-01.webp",
    route: "/product/hycu"
  },
  {
    name: "ZOOM",
    description: "A leading video communication platform that facilitates seamless virtual meetings, webinars, and collaboration.",
    image: "/lovable-uploads/logos/Zoom-01.webp",
    route: "/product/zoom"
  },
  {
    name: "1Password",
    description: "A secure password manager that helps users store, manage, and share passwords.",
    image: "/lovable-uploads/logos/OnePassword-01.webp",
    route: "/product/onepassword"
  },
  {
    name: "Scaledino",
    description: "It provides a scalable cloud infrastructure platform designed to optimize and automate Email signatures",
    image: "/lovable-uploads/logos/ScaleDino.webp",
    route: "/product/scaledino"
  },
  {
    name: "Scalefusion",
    description: "SpinOne provides SaaS security posture management (SSPM), SaaS data loss protection and data leak prevention (DLP),SaaS ransomware detection and response,and SaaS backup and recovery to enhance cyber resilience, streamline security operations, and reduce security costs.",
    image: "/lovable-uploads/logos/Scalefusion-01.webp",
    route: "/product/scalefusion"
  },
  {
    name: "FlexiSign",
    description: "FlexiSign is a digital signature and document management solution that streamlines the signing process for businesses of all sizes.",
    image: "/lovable-uploads/logos/Flexisign-logo-02.webp",
    route: "/product/flexisign"
  }
];

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

          {/* Microsoft Solutions */}
          <div className="grid md:grid-cols-3 gap-6">
            {microsoftSolutions.map((solution, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <Card 
                    className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue text-white transform transition-all duration-300 hover:scale-102 hover:bg-black/60 cursor-pointer"
                    onClick={() => solution.route && navigate(solution.route)}
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

          {/* Other Innovative Solutions */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Other Innovative Solutions</h2>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
