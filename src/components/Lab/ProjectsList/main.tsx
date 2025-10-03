import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../../ui/navbar"; // Adjust path if ui folder differs
import { Monitor } from "lucide-react";

// Reusable Project Card (uses thumbnail from projectData in own file)
export const ProjectCard = ({
  project,
}: {
  project: {
    id: string;
    slug: string;
    title: string;
    shortDesc: string;
    tech: string[];
    date: string;
    image?: string;
  };
}) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group"
  >
    <img
      src={project.image || "https://via.placeholder.com/400x300?text=No+Image"}
      alt={project.title}
      className="w-full h-48 object-cover rounded-xl mb-4 group-hover:opacity-90 transition-opacity"
      onError={(e) => {
        e.currentTarget.src = "https://via.placeholder.com/400x300?text=No+Image";
      }}
    />
    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
    <p className="text-gray-300 mb-4 line-clamp-2">{project.shortDesc}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((t) => (
        <span
          key={t}
          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
        >
          {t}
        </span>
      ))}
    </div>
    <span className="text-xs text-gray-500 block">Date: {project.date}</span>
  </motion.div>
);

// Import project data from each self-contained file (add more as you create TSX)
import { projectData as aiData } from "../Projects/AiStudyBuddy";
import { projectData as portalData } from "../Projects/SchoolPortal";
// Add more: import { projectData as cyberData } from "./Projects/CyberGame";

// Collect all project data for list (array for mapping)
const allProjectsData = [aiData, portalData]; // Add more here (e.g., cyberData)

// Main Lab Page (List All Projects)
const Lab = () => {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar /> {/* Navbar on list page */}
      <main className="pt-20 md:pt-24">
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="absolute inset-0 opacity-20">
            {/* Changed to blue theme (matching other pages) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full filter blur-[200px]"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent tracking-wide">
                Our CS Lab Projects
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

            {/* Projects Grid */}
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