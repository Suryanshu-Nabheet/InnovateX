import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { TEAM_MEMBERS } from "@/data/team";
import { TeamMember } from "@/types";
import { SITE_CONFIG } from "@/config";

// Animated Tooltip Component
function AnimatedTooltip({ items }: { items: TeamMember[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const target = event.currentTarget;
      const halfWidth = target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="absolute -top-16 z-50 flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                style={{
                  rotate: rotate,
                  whiteSpace: "nowrap",
                  left: '50%',
                  translateX: '-50%',
                }}
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-white">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
}

// Dot Background Component (updated version)
function DotBackgroundDemo() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: '20px 20px',
          backgroundImage: 'radial-gradient(#404040 1px, transparent 1px)'
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"></div>
    </>
  );
}


export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black w-full">
      <DotBackgroundDemo />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center -mt-32">
        <div className="inline-block mb-4 px-6 py-3 border border-blue-500/20 rounded-full bg-blue-500/5 backdrop-blur-sm w-fit mx-auto">
          <span className="text-blue-300 text-sm font-medium">Gyan Niketan School CS Lab</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight tracking-tight w-full mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <LayoutTextFlip
            text="Welcome to "
            words={["InnovateX", "CS Lab", "Innovation Hub", "Future Tech"]}
            duration={3000}
          />
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed w-full">
          {SITE_CONFIG.tagline}. Our state-of-the-art computer science lab empowers students to create, learn, and shape the future of technology.
        </p>

        {/* Animated Tooltip Section */}
        <div className="flex flex-row items-center justify-center mb-8 w-full">
          <AnimatedTooltip items={TEAM_MEMBERS} />
        </div>

        <div className="flex justify-center w-full">
          <motion.a
            href="/lab"
            className="group relative px-8 py-4 bg-transparent border-2 border-[#0000FF] text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 overflow-hidden mx-auto"
            aria-label="Explore Our Lab"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#0000FF]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Explore Our Lab</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight size={20} />
            </motion.div>
            
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(circle at center, rgba(0,0,255,0.3) 0%, transparent 70%)'
              }}
              initial={{ scale: 0 }}
              whileHover={{ scale: 2 }}
              transition={{ duration: 0.4 }}
            />
          </motion.a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <style>{``}</style>
    </section>
  );
}