import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Vision } from "@/components/Vision";
import { ManagementTeam } from "@/components/ManagementTeam";
import { motion } from "framer-motion";

const locations = [
  { city: "Mumbai", address: "1001, 10th Floor, Runwal R Square, LBS Road, Mulund West" },
  { city: "Bangalore", address: "Brigade Road, Central Business District" },
  { city: "Delhi", address: "Connaught Place, New Delhi" },
  { city: "Surat", address: "Ring Road, Surat" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <motion.h1 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          
          <Card className="bg-black/40 border-none text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Company Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Axima Corporation is a certified Microsoft 365 partner, dedicated to helping businesses leverage the benefits of cloud solutions. In today's competitive landscape, companies seek collaborative tools that provide a strategic advantage. Microsoft 365 delivers exactly that. With Axima's expertise in integrating Microsoft 365, your business gains enhanced flexibility and agility, empowering you to stay ahead in the market.
              </p>
            </CardContent>
          </Card>

          <Vision />

          <ManagementTeam />

          <Card className="bg-black/40 border-none text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Our Office Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {locations.map((location, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-black/40 hover:bg-black/60 transition-all duration-300 group cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-axima-blue transition-colors">
                      {location.city}
                    </h3>
                    {/* <p className="text-sm text-gray-400">{location.address}</p> */}
                  </motion.div>
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

export default About;
