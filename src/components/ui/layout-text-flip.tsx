"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-lg text-white"
      >
        {text}
      </motion.span>
      <motion.span
        layout
        className="relative w-fit overflow-hidden px-2 font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-lg"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex] === 'InnovateX' ? (
              <>
                <span className="text-white">Innovate</span>
                <span style={{ color: '#0000FF' }}>X</span>
              </>
            ) : (
              <span className="text-white">{words[currentIndex]}</span>
            )}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};

