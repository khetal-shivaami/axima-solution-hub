import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BookDemoStrap = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-axima-blue/30 bg-gradient-to-br from-axima-blue/20 to-black/40 px-6 py-10 md:px-12 md:py-12"
    >
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Ready to Transform the Way Your Business Works?
        </h2>
        <Button
          onClick={() => navigate("/contact")}
          className="bg-axima-blue hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex-shrink-0"
        >
          Book a Demo
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </motion.div>
  );
};

export default BookDemoStrap;
