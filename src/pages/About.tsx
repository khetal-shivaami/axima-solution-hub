import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white text-center mb-12">About Us</h1>
          
        <Card className="bg-black/40 border-none text-white">
          <CardHeader>
            <CardTitle>Company Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <img 
              src="/lovable-uploads/photo-1581092795360-fd1ca04f0952" 
              alt="Company Profile" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300">
              [Your company profile content will go here]
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-none text-white">
          <CardHeader>
            <CardTitle>Management Team</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition">
                <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center">Team Member {item}</h3>
                <p className="text-gray-400 text-center">Position</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-none text-white">
          <CardHeader>
            <CardTitle>Our Partnerships</CardTitle>
          </CardHeader>
          <CardContent>
            <img 
              src="/lovable-uploads/photo-1605810230434-7631ac76ec81" 
              alt="Partnerships" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition">
                  <div className="w-16 h-16 rounded-lg bg-gray-700 mx-auto" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-none text-white">
          <CardHeader>
            <CardTitle>Careers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition cursor-pointer">
                <h3 className="text-lg font-semibold">Position {item}</h3>
                <p className="text-gray-400">Location • Full Time</p>
              </div>
            ))}
          </CardContent>
        </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
