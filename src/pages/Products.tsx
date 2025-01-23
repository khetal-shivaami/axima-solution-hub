import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-none text-white">
              <CardHeader>
                <CardTitle>Microsoft 365</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/lovable-uploads/photo-1486312338219-ce68d2c6f44d" 
                  alt="Microsoft 365" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300">
                  Microsoft 365 is a cloud-based service that is designed to help meet your organization's needs for robust security, reliability, and user productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-none text-white">
              <CardHeader>
                <CardTitle>MS Azure</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/lovable-uploads/photo-1487058792275-0ad4aaf24ca7" 
                  alt="MS Azure" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300">
                  A comprehensive cloud platform that provides scalable, on-demand computing resources and services, enabling businesses to build, deploy, and manage applications efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-none text-white">
              <CardHeader>
                <CardTitle>MS Azure from Jio Region</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/lovable-uploads/photo-1498050108023-c5249f4df085" 
                  alt="MS Azure Jio" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300">
                  Provides Azure services with data centers located within India, ensuring enhanced security compliance and data residency.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black/40 border-none text-white mt-12">
            <CardHeader>
              <CardTitle>Other Innovative Solutions in Shiviom</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
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
                ].map((product, index) => (
                  <div key={index} className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition">
                    <div className="flex items-center gap-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-300">{product.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;