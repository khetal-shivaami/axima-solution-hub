import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohit G",
    position: "IT Manager",
    company: "Ercode - A Global eTailer",
    content: "We are pleased to share that our department's operations have been running smoothly, which has made it easy for clients to access all our services. This efficiency has been highly praised and is commendable.",
    image: "/lovable-uploads/erode.png",
  },
  {
    name: "Abhilash K",
    position: "IT Manager",
    company: "Clardentity Learning And Development International",
    content: "We would like to extend our heartfelt thanks for the exceptional service and cooperation provided by you and your team.",
    image: "/lovable-uploads/clar.png",
  },
  // {
  //   name: "Vikram Patel",
  //   position: "Operations Manager",
  //   company: "Global Logistics Ltd",
  //   content: "We've been using Axima's managed IT services for over two years now. The proactive approach to maintenance and security has reduced our downtime significantly.",
  //   image: "/lovable-uploads/975d52b5-3179-48b2-9089-8d510673df4a.png",
  // },
  // {
  //   name: "Ananya Singh",
  //   position: "CEO",
  //   company: "Digital First Solutions",
  //   content: "The training sessions conducted by Axima for our team on Microsoft 365 were comprehensive and well-structured.",
  //   image: "/lovable-uploads/975d52b5-3179-48b2-9089-8d510673df4a.png",
  // },
  // {
  //   name: "Sunil Kapoor",
  //   position: "Finance Director",
  //   company: "Investment Partners",
  //   content: "Axima's security assessment revealed critical vulnerabilities in our system that we weren't aware of. Their remediation plan was thorough and effectively implemented.",
  //   image: "/lovable-uploads/975d52b5-3179-48b2-9089-8d510673df4a.png",
  // },
];

export const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="bg-black/40 backdrop-blur-sm py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          What Our Clients Say
        </h2>

        <div className="overflow-hidden">
          <motion.div
            ref={carousel}
            className="flex"
            animate={{ x: [-width, 0] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-[500px] p-6 mx-4 my-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-axima-blue/20"
              >
                <div className="relative">
                  <div className="absolute -top-12 left-0 w-12 h-12 bg-axima-blue/20 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-axima-blue" />
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-30 h-14 object-contain border border-white/20 mb-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/100";
                      }}
                    />

                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>

                    <div>
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
