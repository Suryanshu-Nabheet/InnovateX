import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../ui/navbar";
import { Monitor, X } from "lucide-react";
import projectsData from "./projects.json";  // All data (short + details)
import { ProjectDetails } from "./Projects/main";  // Universal details structure

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
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalContentVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 50 },
  visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { scale: 0.8, opacity: 0, y: 50 }
};

const ProjectCard = ({
  project,
  onClick,
}: {
  project: {
    id: string;
    title: string;
    shortDesc: string;
    tech: string[];
    date: string;
    image?: string;
  };
  onClick: () => void;
}) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.05, y: -5 }}
    onClick={onClick}
    className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group h-[520px] flex flex-col"
  >
    <img
      src={project.image || "https://via.placeholder.com/400x300?text=No+Image"}
      alt={project.title}
      className="w-full h-48 object-cover rounded-xl mb-4 group-hover:opacity-90 transition-opacity flex-shrink-0"
      loading="lazy"
      onError={(e) => {
        e.currentTarget.src = "https://via.placeholder.com/400x300?text=No+Image";
      }}
    />
    <h3 className="text-xl font-bold text-white mb-2 flex-shrink-0">{project.title}</h3>
    <p className="text-gray-300 mb-4 line-clamp-2 flex-1">{project.shortDesc}</p>
    <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
      {project.tech.map((t) => (
        <span key={t} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
          {t}
        </span>
      ))}
    </div>
    <span className="text-xs text-gray-500 block mt-auto flex-shrink-0">Date: {project.date}</span>
  </motion.div>
);

const Lab = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main className="pt-20 md:pt-24">
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
              {allProjectsData.map((project) => (
                <div key={project.id} className="h-full">
                  <ProjectCard project={project} onClick={() => openModal(project)} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

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
    </div>
  );
};

export default Lab;