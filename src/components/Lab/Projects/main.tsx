import React from "react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  tech: string[];
  date: string;
  image?: string;
  details: string[];
}

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className="text-white">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl font-bold mb-6 text-blue-400"
      >
        {project.title}
      </motion.h1>
      <img 
        src={project.image || "https://via.placeholder.com/800x400?text=No+Image"} 
        alt={project.title} 
        className="w-full h-48 object-cover rounded-xl mb-6" 
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/800x400?text=No+Image";
        }}
      />
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">Overview</h2>
        <p className="text-gray-300 leading-relaxed">{project.shortDesc}</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">How It Works</h2>
        <ol className="text-gray-300 space-y-2 list-decimal pl-6">
          {project.details.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3 text-white">Resources</h2>
        <ul className="text-gray-300 space-y-2">
          <li><a href={`https://github.com/${project.id}`} className="text-blue-400 hover:underline">GitHub Repo</a></li>
          <li><a href={`https://demo.${project.id}.com`} className="text-blue-400 hover:underline">Live Demo</a></li>
          <li>Built for student-led innovation at InnovateX.</li>
        </ul>
      </section>
    </div>
  );
};