import { motion } from "framer-motion";

export const Stats = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Customers Stat */}
          <div className="text-center space-y-4">
            <h2 className="text-6xl font-bold text-white">20000+</h2>
            <h3 className="text-2xl font-semibold mb-2">Satisfied Customers</h3>
            <p className="text-gray-400 text-sm">
              Thousands of customers have relied on us for all their cloud-related requirements for decades.
            </p>
          </div>

          {/* Offices Stat */}
          <div className="text-center space-y-4">
            <h2 className="text-6xl font-bold text-white">7</h2>
            <h3 className="text-2xl font-semibold mb-2">
              Offices in Key Cities
            </h3>
            <p className="text-gray-400 text-sm">
              5 Offices in Key Indian Cities + 2 US Cities, leaving our footprint in multiple geographies to ease the way businesses do their business.
            </p>
          </div>

          {/* Support Stat */}
          <div className="text-center space-y-4">
            <h2 className="text-6xl font-bold text-white">24 hrs</h2>
            <h3 className="text-2xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-400 text-sm">
              Highly qualified executives are available to solve your queries and fix your issues round the clock.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};