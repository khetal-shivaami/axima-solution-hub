import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Delivering Cloud Solutions for Your Success
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Axima Corporation is one of Microsoft's Trusted Cloud Solution Providers in India, dedicated to helping businesses leverage the benefits of cloud solutions.
          </p>
          <Button
            className="bg-axima-blue hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full"
            onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Our Solutions <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};