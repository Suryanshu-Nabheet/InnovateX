import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/layouts/PageLayout";
import { Monitor, X } from "lucide-react";
import projectsData from "./projects.json";
import { ProjectDetails } from "./Projects/main";
import { Project } from "@/types";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { TechIcon } from "@/components/ui/TechIcon";

const allProjectsData = projectsData;  // Direct array from JSON (add here if needed)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalContentVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 50 },
  visible: { scale: 1, opacity: 1, y: 0 },
  exit: { scale: 0.8, opacity: 0, y: 50 }
};

const ProjectCard = ({
  project,
  onClick,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  index,
}: {
  project: Project;
  onClick: () => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  index: number;
}) => {
  // Define colors for each project based on index for variety
  const colors = [
    [[59, 130, 246]], // Blue
    [[34, 197, 94], [59, 130, 246]], // Green to Blue
    [[168, 85, 247]], // Purple
    [[236, 72, 153], [232, 121, 249]], // Pink to Purple
    [[251, 146, 60], [239, 68, 68]], // Orange to Red
    [[59, 130, 246], [168, 85, 247]], // Blue to Purple
    [[34, 197, 94], [168, 85, 247]], // Green to Purple
  ];

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative border border-white/10 group/canvas-card w-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20 cursor-pointer h-[520px] flex flex-col"
    >
      {/* Canvas Reveal Effect - Only appears on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 z-0"
          >
            <CanvasRevealEffect
              animationSpeed={3 + (index % 3) * 0.5}
              containerClassName="bg-black"
              colors={colors[index % colors.length]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(300px_at_center,white,transparent)] bg-black/40" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content - Always visible */}
      <div className="relative z-10 flex flex-col h-full">
        <img
          src={project.image || "https://via.placeholder.com/400x300?text=No+Image"}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl mb-4 group-hover/canvas-card:opacity-90 transition-opacity flex-shrink-0"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/400x300?text=No+Image";
          }}
        />
        <h3 className="text-xl font-bold text-white mb-2 flex-shrink-0 group-hover/canvas-card:text-white transition-colors duration-300">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2 flex-1 group-hover/canvas-card:text-gray-200 transition-colors duration-300">{project.shortDesc}</p>
        <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1.5 bg-blue-600/20 text-blue-300 rounded-full text-sm group-hover/canvas-card:bg-blue-600/30 group-hover/canvas-card:text-white transition-all duration-300 flex items-center gap-1.5">
              <TechIcon tech={t} size={16} />
              {t}
            </span>
          ))}
        </div>
        <span className="text-xs text-gray-500 block mt-auto flex-shrink-0 group-hover/canvas-card:text-gray-400 transition-colors duration-300">Date: {project.date}</span>
      </div>
    </motion.div>
  );
};

const Lab = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <PageLayout>
      <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full filter blur-[200px]"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent tracking-wide">
                Our CS Lab <span className="text-blue-400">Projects</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light mb-8"
              >
                Discover innovative student-led creations from InnovateX.
              </motion.p>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
              <Monitor className="mx-auto text-blue-400" size={48} />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
            >
              {allProjectsData.map((project, index) => (
                <div key={project.id} className="h-full">
                  <ProjectCard
                    project={project}
                    onClick={() => openModal(project)}
                    isHovered={hoveredProject === index}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                    index={index}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-black/90 border border-white/10 rounded-2xl p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-blue-400 p-2 rounded-full bg-black/50"
              >
                <X size={24} />
              </button>
              <ProjectDetails project={selectedProject} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Lab;