import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../ui/navbar"; // Adjust path if ui folder differs
import { Monitor } from "lucide-react";
import { ProjectCard } from "./ProjectsList/main"; // Shared card structure

// Import project data from each self-contained file (add more as you create TSX)
import { projectData as aiData } from "./Projects/AiStudyBuddy";
import { projectData as portalData } from "./Projects/SchoolPortal";
// Add more: import { projectData as cyberData } from "./Projects/CyberGame";

// Collect all project data for list (array for mapping)
const allProjectsData = [aiData, portalData]; // Add more here (e.g., cyberData)

// Main Lab Page (List All Projects)
const Lab = () => {
  return (
    <div className="min-h-screen bg-black text-white antialiased" role="main">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600 rounded-full filter blur-[200px]"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
              role="banner"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-green-400 bg-clip-text text-transparent tracking-wide"
                aria-label="Our CS Lab Projects"
              >
                Our CS Lab Projects
              </motion.h1>
              <motion.p
                className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light mb-8"
                aria-describedby="projects-desc"
              >
                Discover innovative student-led creations from InnovateX.
              </motion.p>
              <motion.div
                id="projects-desc"
                className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>

            {/* Projects Grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              role="list"
            >
              {allProjectsData.map((project) => (
                <Link
                  key={project.id}
                  to={`/lab/projects/${project.slug}`}
                  className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label={`View details for ${project.title}`}
                >
                  <ProjectCard project={project} />
                </Link>
              ))}
            </div>
            {allProjectsData.length === 0 && (
              <div
                className="text-center text-gray-400 mt-12"
                role="alert"
              >
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