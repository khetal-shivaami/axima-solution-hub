import { motion } from "framer-motion";

// India boundary from Natural Earth public-domain geographic data.
const indiaOutline = "M 115.5 26.6 L 125.4 40.0 L 124.5 49.4 L 128.1 55.3 L 127.8 61.2 L 121.2 59.6 L 123.8 72.3 L 132.8 79.6 L 145.6 87.6 L 139.8 92.9 L 136.2 103.6 L 145.1 108.0 L 153.8 113.6 L 165.8 120.1 L 178.4 121.5 L 183.7 127.4 L 190.8 128.5 L 201.9 131.2 L 209.6 131.0 L 210.6 126.4 L 209.4 119.1 L 210.1 114.2 L 215.7 111.8 L 216.5 120.8 L 216.7 123.1 L 225.0 127.5 L 230.8 125.7 L 238.6 126.5 L 246.1 126.1 L 246.8 119.0 L 243.0 115.4 L 250.4 113.9 L 258.8 105.4 L 269.4 98.1 L 277.1 100.9 L 283.7 96.0 L 288.0 103.2 L 284.9 108.0 L 294.8 109.7 L 295.5 114.1 L 292.3 116.2 L 293.0 123.3 L 286.5 121.2 L 274.5 129.2 L 274.8 135.7 L 269.7 145.4 L 269.3 151.0 L 265.2 160.5 L 258.0 157.8 L 257.6 169.7 L 255.6 173.7 L 256.5 178.5 L 252.0 181.3 L 247.1 163.0 L 244.6 163.1 L 243.1 170.4 L 238.1 164.5 L 240.9 157.9 L 245.0 157.3 L 249.3 147.5 L 244.0 145.6 L 235.4 145.7 L 226.7 144.1 L 225.9 136.2 L 221.5 135.6 L 214.2 130.6 L 210.9 138.4 L 217.6 144.5 L 211.8 148.8 L 209.8 153.0 L 215.4 156.1 L 213.9 163.0 L 217.1 171.6 L 218.5 181.1 L 217.2 185.3 L 210.9 185.2 L 199.6 187.6 L 200.1 196.2 L 195.2 203.0 L 182.0 210.7 L 171.7 224.3 L 164.7 231.5 L 155.6 239.1 L 155.6 244.3 L 151.0 247.2 L 142.7 251.3 L 138.4 251.9 L 135.6 260.7 L 137.5 275.6 L 138.0 285.2 L 134.1 296.1 L 134.1 315.6 L 129.3 316.2 L 125.1 325.0 L 127.9 328.8 L 119.6 332.0 L 116.5 339.8 L 112.8 343.1 L 104.1 332.4 L 99.8 316.3 L 96.3 304.7 L 93.0 299.3 L 88.2 288.2 L 85.9 273.8 L 84.3 266.7 L 75.9 250.9 L 72.1 228.6 L 69.4 213.9 L 69.4 199.9 L 67.6 189.2 L 54.2 196.0 L 47.7 194.7 L 35.7 180.7 L 40.1 176.6 L 37.4 172.1 L 26.6 162.3 L 32.8 154.6 L 53.0 154.6 L 51.2 144.8 L 46.0 138.9 L 45.0 130.1 L 38.9 124.9 L 49.1 112.9 L 59.8 113.7 L 69.4 101.7 L 75.1 90.0 L 84.1 78.5 L 83.9 70.3 L 91.8 63.6 L 84.4 58.0 L 81.2 50.2 L 77.9 40.1 L 82.4 35.1 L 96.4 37.9 L 106.6 36.2 L 115.5 26.6 Z";

const cities = [
  { name: "Delhi", x: 108.7, y: 104.6, labelX: 121, labelY: 102, anchor: "start" as const },
  { name: "Mumbai", x: 69.9, y: 215.4, labelX: 58, labelY: 219, anchor: "end" as const },
  { name: "Bangalore", x: 113.3, y: 285.6, labelX: 106, labelY: 309, anchor: "end" as const },
  { name: "Chennai", x: 137.9, y: 284.3, labelX: 151, labelY: 288, anchor: "start" as const },
];

const IndiaLocationsMap = () => {
  const mumbai = cities[1];

  return (
    <svg
      viewBox="0 0 330 365"
      role="img"
      aria-label="Map of India showing Axima locations in Mumbai, Delhi, Bangalore and Chennai, connected by dotted lines"
      className="w-full max-w-[440px] mx-auto h-auto"
    >
      <path d={indiaOutline} className="fill-axima-blue/10 stroke-axima-blue/50" strokeWidth="1.5" strokeLinejoin="round" />
      {cities.filter((city) => city.name !== "Mumbai").map((city, index) => (
        <motion.path
          key={city.name}
          d={`M ${mumbai.x} ${mumbai.y} L ${city.x} ${city.y}`}
          fill="none"
          className="stroke-axima-blue/80"
          strokeWidth="1.7"
          strokeDasharray="2 5"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 + index * 0.15 }}
        />
      ))}
      {cities.map((city) => (
        <g key={city.name}>
          <circle cx={city.x} cy={city.y} r="8" className="fill-axima-blue/20" />
          <circle cx={city.x} cy={city.y} r="3.5" className="fill-axima-blue stroke-foreground" strokeWidth="1.2" />
          <text
            x={city.labelX}
            y={city.labelY}
            textAnchor={city.anchor}
            dominantBaseline="middle"
            className="fill-foreground text-[11px] font-semibold"
          >
            {city.name}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default IndiaLocationsMap;