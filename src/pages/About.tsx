import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Vision } from "@/components/Vision";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div 
        className="pt-20 p-8 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0,0,0,0.7)' }}
      >
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
              <div 
                className="w-full h-64 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80")' }}
              />
              <p className="text-gray-300">
                Axima Corporation is a certified Microsoft 365 partner, dedicated to helping businesses leverage the benefits of cloud solutions. In today's competitive landscape, companies seek collaborative tools that provide a strategic advantage. Microsoft 365 delivers exactly that. With Axima's expertise in integrating Microsoft 365, your business gains enhanced flexibility and agility, empowering you to stay ahead in the market.
              </p>
            </CardContent>
          </Card>

          <Vision />

          <Card className="bg-black/40 border-none text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Management Team</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-center">Team Member {item}</h3>
                  <p className="text-gray-400 text-center">Position</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-none text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Our Office Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="w-full h-64 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80")' }}
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: item * 0.1 }}
                    className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gray-700 mx-auto" />
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