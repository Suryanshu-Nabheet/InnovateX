import { motion } from "framer-motion";
import { WorldMap } from "./ui/world-map";
import { MAP_DOTS, CONNECTIVITY_STATS } from "@/data/connectivity";
import { StatsCard } from "./ui/StatsCard";

export function ConnectivitySection() {
  // Different colors for each stat card
  const statColors = [
    [[59, 130, 246]], // Blue for Global Network
    [[236, 72, 153], [232, 121, 249]], // Pink to Purple for Live Projects
    [[125, 211, 252]], // Sky blue for Countries
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
      
      <WorldMap dots={MAP_DOTS} lineColor="#0ea5e9" />

      {/* Stats Section with Canvas Reveal Effect */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONNECTIVITY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <StatsCard
                title={stat.title}
                count={stat.count}
                desc={stat.desc}
                colors={statColors[idx] || statColors[0]}
                animationSpeed={3 + idx * 0.5}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}