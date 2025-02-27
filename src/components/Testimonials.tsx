
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";

// Sample testimonials data
const testimonials = [
  {
    name: "Rajesh Sharma",
    position: "IT Director",
    company: "Tech Solutions India",
    content: "Axima's Microsoft 365 implementation was seamless. Their team's technical expertise and responsive support have helped us transform our workflow efficiency. Highly recommended!",
    image: "/lovable-uploads/975d52b5-3179-48b2-9089-8d510673df4a.png" // Using a placeholder image
  },
  {
    name: "Priya Mehta",
    position: "CTO",
    company: "Innovative Systems",
    content: "The Microsoft Azure solutions provided by Axima Corporation have given us the scalability and security we needed for our growing business. Their support team is exceptional.",
    image: "/lovable-uploads/975d52b5-3179-48b2-9089-8d510673df4a.png" // Using a placeholder image
  },
  {
    name: "Vikram Patel",
    position: "Operations Manager",
    company: "Global Logistics Ltd",
    content: "We've been using Axima's managed IT services for over two years now. The proactive approach to maintenance and security has reduced our downtime significantly.",
    image: "/lovable-uploads/975d52b5-3179-48b2-9089-8d510673df4a.png" // Using a placeholder image
  },
  {
    name: "Ananya Singh",
    position: "CEO",
    company: "Digital First Solutions",
    content: "The training sessions conducted by Axima for our team on Microsoft 365 were comprehensive and well-structured. They tailored the content to our specific business needs.",
    image: "/lovable-uploads/975d52b5-3179-48b2-9089-8d510673df4a.png" // Using a placeholder image
  },
  {
    name: "Sunil Kapoor",
    position: "Finance Director",
    company: "Investment Partners",
    content: "Axima's security assessment revealed critical vulnerabilities in our system that we weren't aware of. Their remediation plan was thorough and effectively implemented.",
    image: "/lovable-uploads/975d52b5-3179-48b2-9089-8d510673df4a.png" // Using a placeholder image
  }
];

export const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/40 backdrop-blur-sm py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          What Our Clients Say
        </h2>
        
        <motion.div 
          className="overflow-hidden"
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            className="flex"
            animate={{
              x: -currentPage * (window.innerWidth > 768 ? 600 : window.innerWidth - 80)
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 w-full md:w-[600px] p-6 md:mx-4 my-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-axima-blue/20`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute -top-12 left-0 w-12 h-12 bg-axima-blue/20 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-axima-blue" />
                  </div>
                  
                  <div className="pl-16">
                    <p className="text-gray-300 mb-6 italic relative">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-axima-blue/30">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://via.placeholder.com/100";
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index ? "bg-axima-blue w-6" : "bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
