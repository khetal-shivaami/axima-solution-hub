import { motion } from "framer-motion";

const companies = [
  {
    name: "Goldiee Group",
    image: "/lovable-uploads/6c3cda8d-517f-41ba-9cdb-ad94518d2120.png"
  },
  {
    name: "Blue Dart",
    image: "/lovable-uploads/accb3a4e-5dbf-4fb2-8c76-5e48e1b46999.png"
  },
  {
    name: "Morde",
    image: "/lovable-uploads/7e90294d-d89d-4e0d-ba80-c5dd0d981cf8.png"
  },
  {
    name: "Saint-Gobain",
    image: "/lovable-uploads/925c820c-4967-4cdc-9b5b-40b348aff929.png"
  },
  {
    name: "JVM Spaces",
    image: "/lovable-uploads/2bf1599b-73be-4276-90f3-6310c532b9a1.png"
  },
  {
    name: "Gangar Eyenation",
    image: "/lovable-uploads/5cf95f28-273b-49de-ba24-1a982f1a2739.png"
  },
  {
    name: "Shriram Finance",
    image: "/lovable-uploads/8769d21b-ef35-4f66-b33c-895afed0bff1.png"
  },
  {
    name: "Sheth",
    image: "/lovable-uploads/183a3e7c-73db-448e-a7f3-b5008eab91cc.png"
  }
];

export const TrustedBy = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Delivering Excellence and Reliability
          </h2>
          <div className="w-24 h-1 bg-axima-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-[200px] h-24 flex items-center justify-center p-4"
            >
              <img
                src={company.image}
                alt={company.name}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};