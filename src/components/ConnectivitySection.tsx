import { motion } from "framer-motion";
import { WorldMap } from "./ui/world-map";

export function ConnectivitySection() {
  const mapDots = [
    {
      start: { lat: 25.5941, lng: 85.1376 }, // Patna
      end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    },
    {
      start: { lat: 25.5941, lng: 85.1376 }, // Patna
      end: { lat: 51.5074, lng: -0.1278 }, // London
    },
    {
      start: { lat: 25.5941, lng: 85.1376 }, // Patna
      end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
    },
    {
      start: { lat: 25.5941, lng: 85.1376 }, // Patna
      end: { lat: -33.8688, lng: 151.2093 }, // Sydney
    },
    {
      start: { lat: 25.5941, lng: 85.1376 }, // Patna
      end: { lat: 28.6139, lng: 77.2090 }, // Delhi
    },
  ];

  const stats = [
    { title: "Global Network", count: "50+", desc: "Partner Institutions" },
    { title: "Live Projects", count: "100+", desc: "Collaborative Works" },
    { title: "Countries", count: "25+", desc: "International Reach" }
  ];

  return (
    <section className="py-40 bg-black w-full">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p className="font-bold text-xl md:text-4xl text-white">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((letter, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Connect with students and educators 
          worldwide through our state-of-the-art computer science lab.
        </p>
      </div>
      
      <WorldMap dots={mapDots} lineColor="#0ea5e9" />

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
              <p className="text-4xl font-bold text-blue-500 mb-2">{stat.count}</p>
              <p className="text-gray-400">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}