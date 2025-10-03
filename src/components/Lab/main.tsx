import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../ui/navbar"; // Correct path from Lab/
import { ProjectCard } from "./ProjectsList/main"; // Import card

// Import project data (thumbnails in own files)
import { projectData as aiData } from "./Projects/AiStudyBuddy";
import { projectData as portalData } from "./Projects/SchoolPortal";

// Collect data for list
const allProjectsData = [aiData, portalData];

// Main Lab Page
const Lab = () => {
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
              <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                <span className="text-white">Our CS</span>{" "}
                <span className="text-blue-400">Lab Projects</span>
              </motion.h1>
              <motion.p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light mb-8">
                Discover innovative student-led creations from InnovateX.
              </motion.p>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjectsData.map((project) => (
                <Link
                  key={project.id}
                  to={`/lab/projects/${project.slug}`}
                  className="block"
                >
                  <ProjectCard project={project} />
                </Link>
              ))}
            </div>
            {allProjectsData.length === 0 && (
              <div className="text-center text-gray-400 mt-12">
                <p>No projects available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lab;