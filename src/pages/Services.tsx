import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Our Services</h1>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-none text-white">
              <CardHeader>
                <CardTitle>Change Management</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/lovable-uploads/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Change Management" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="p-3 rounded-lg bg-gray-800/50">
                      <p className="text-sm">Service Feature {item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-none text-white">
              <CardHeader>
                <CardTitle>Managed Services</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/lovable-uploads/photo-1519389950473-47ba0277781c" 
                  alt="Managed Services" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="p-3 rounded-lg bg-gray-800/50">
                      <p className="text-sm">Managed Service {item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-none text-white">
              <CardHeader>
                <CardTitle>Support Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition cursor-pointer">
                      <h3 className="text-lg font-semibold mb-2">Package {item}</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Feature 1</li>
                        <li>• Feature 2</li>
                        <li>• Feature 3</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
