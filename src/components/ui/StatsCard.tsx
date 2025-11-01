import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

interface StatsCardProps {
  title: string;
  count: string;
  desc: string;
  colors?: number[][];
  animationSpeed?: number;
}

export const StatsCard = ({
  title,
  count,
  desc,
  colors = [[59, 130, 246]], // Blue color
  animationSpeed = 3,
}: StatsCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-white/10 group/canvas-card w-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20"
    >
      {/* Canvas Reveal Effect - Only appears on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 z-0"
          >
            <CanvasRevealEffect
              animationSpeed={animationSpeed}
              containerClassName="bg-black"
              colors={colors}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/40" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content - Always visible, subtle color changes on hover */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover/canvas-card:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-4xl font-bold text-blue-500 mb-2 group-hover/canvas-card:text-white transition-colors duration-300">
          {count}
        </p>
        <p className="text-gray-400 group-hover/canvas-card:text-gray-300 transition-colors duration-300">
          {desc}
        </p>
      </div>
    </div>
  );
};

