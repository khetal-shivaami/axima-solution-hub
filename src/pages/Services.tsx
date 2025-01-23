import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div 
        className="pt-20 p-8 bg-cover bg-center bg-fixed" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80")', 
          backgroundBlendMode: 'overlay', 
          backgroundColor: 'rgba(0,0,0,0.7)' 
        }}
      >
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <motion.h1 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cloud Migration",
                description: "Seamless transition to cloud infrastructure with minimal disruption to your business operations.",
                image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80"
              },
              {
                title: "Microsoft 365 Implementation",
                description: "Expert deployment and configuration of Microsoft 365 suite for your organization.",
                image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80"
              },
              {
                title: "IT Consulting",
                description: "Strategic technology consulting to align your IT infrastructure with business goals.",
                image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80"
              },
              {
                title: "Technical Support",
                description: "24/7 technical support and maintenance for all your cloud solutions.",
                image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/40 border-none text-white backdrop-blur-sm hover:bg-black/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
                      style={{ backgroundImage: `url("${service.image}")` }}
                    />
                    <p className="text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;