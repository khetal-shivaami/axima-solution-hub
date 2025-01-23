import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Products = () => {
  const microsoftSolutions = [
    {
      name: "Microsoft 365",
      description: "Microsoft 365 is a cloud-based service that is designed to help meet your organization's needs for robust security, reliability, and user productivity.",
      image: "/lovable-uploads/photo-1486312338219-ce68d2c6f44d"
    },
    {
      name: "MS Azure",
      description: "A comprehensive cloud platform that provides scalable, on-demand computing resources and services, enabling businesses to build, deploy, and manage applications efficiently.",
      image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      name: "MS Azure from Jio Region",
      description: "Provides Azure services with data centers located within India, ensuring enhanced security compliance and data residency.",
      image: "/lovable-uploads/photo-1498050108023-c5249f4df085"
    }
  ];

  const innovativeSolutions = [
    {
      name: "Jumpcloud",
      description: "A directory-as-a-service platform that simplifies user management, authentication, and device control across diverse IT environments.",
      image: "/lovable-uploads/photo-1485827404703-89b55fcc595e"
    },
    {
      name: "Atera",
      description: "An all-in-one remote monitoring and management (RMM) platform designed for IT professionals to streamline patch management, automate tasks, and manage clients efficiently.",
      image: "/lovable-uploads/photo-1486312338219-ce68d2c6f44d"
    },
    {
      name: "Spin AI",
      description: "Enhances cyber resilience, security operations, and cost efficiency with an all-in-one SaaS security platform that protects your SaaS data from loss, ransomware, risky apps, misconfigurations, and non-compliance.",
      image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      name: "Fireflies",
      description: "A conversational AI platform that automatically transcribes, summarizes, and organizes meeting discussions.",
      image: "/lovable-uploads/photo-1498050108023-c5249f4df085"
    },
    {
      name: "Scaledino",
      description: "Provides a scalable cloud infrastructure platform designed to optimize and automate Email signatures.",
      image: "/lovable-uploads/photo-1485827404703-89b55fcc595e"
    },
    {
      name: "HYCU",
      description: "Delivers data protection and backup-as-a-service, tailored for multi-cloud and hybrid environments.",
      image: "/lovable-uploads/photo-1486312338219-ce68d2c6f44d"
    },
    {
      name: "ZOOM",
      description: "A leading video communication platform that facilitates seamless virtual meetings, webinars, and collaboration.",
      image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      name: "1Password",
      description: "A secure password manager that helps users store, manage, and share passwords.",
      image: "/lovable-uploads/photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Our Products</h1>
          
          <div className="text-center text-white mb-8">
            <h2 className="text-2xl font-semibold mb-2">We Provide Complete Cloud Solutions to Meet All Your Needs under one roof</h2>
            <h3 className="text-xl">Explore Our Microsoft Solutions</h3>
          </div>

          {/* Microsoft Solutions */}
          <div className="grid md:grid-cols-3 gap-8">
            {microsoftSolutions.map((solution, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <Card className="bg-black/40 border-none text-white transform transition-all duration-300 hover:scale-105 hover:bg-black/60">
                    <CardHeader>
                      <CardTitle>{solution.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src={solution.image} 
                        alt={solution.name} 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <p className="text-gray-300 line-clamp-3">{solution.description}</p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-black/90 text-white border-none">
                  <h4 className="font-semibold mb-2">{solution.name}</h4>
                  <p className="text-sm text-gray-300">{solution.description}</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Other Innovative Solutions */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Other Innovative Solutions in Shiviom</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {innovativeSolutions.map((solution, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger>
                    <div className="p-6 rounded-lg bg-black/40 hover:bg-black/60 transition-all duration-300 transform hover:scale-105">
                      <div className="flex flex-col items-center gap-4">
                        <img 
                          src={solution.image} 
                          alt={solution.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{solution.name}</h3>
                          <p className="text-gray-300 text-sm line-clamp-2">{solution.description}</p>
                        </div>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-black/90 text-white border-none">
                    <h4 className="font-semibold mb-2">{solution.name}</h4>
                    <p className="text-sm text-gray-300">{solution.description}</p>
                  </HoverCardContent>
                </HoverCard>
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
