import React from "react";
import { motion } from "framer-motion";
import { Brain, Building2, Cloud, MessageCircle } from "lucide-react";  // Icons for projects (install lucide-react if needed)

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

// Reusable Link Button (Styled for Resources)
const LinkButton: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium text-sm"
  >
    {children}
  </a>
);

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  // Dynamic Icon (Logo) based on project ID
  const getProjectIcon = () => {
    switch (project.id) {
      case "ai-study-buddy": return <Brain className="w-12 h-12 text-blue-400" />;
      case "school-portal": return <Building2 className="w-12 h-12 text-blue-400" />;
      case "weather-dashboard": return <Cloud className="w-12 h-12 text-blue-400" />;
      case "chatbot-assistant": return <MessageCircle className="w-12 h-12 text-blue-400" />;
      default:
        return (
          <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-300 font-bold text-lg">
            {project.title.charAt(0)}
          </div>
        );
    }
  };

  return (
    <div className="text-white">
      {/* Logo/Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-6"
      >
        {getProjectIcon()}
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl md:text-4xl font-bold mb-6 text-blue-400 text-center"
      >
        {project.title}
      </motion.h1>

      {/* Bigger/Better Image */}
      <motion.img 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }}
        src={project.image || "https://via.placeholder.com/800x400?text=No+Image"} 
        alt={project.title} 
        className="w-full h-64 object-center object-cover rounded-2xl mb-8 shadow-lg border border-white/10" 
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/800x400?text=No+Image";
        }}
      />

      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-3 text-white">Overview</h2>
        <p className="text-gray-300 leading-7">{project.shortDesc}</p>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-3 text-white">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-3 text-white">How It Works</h2>
        <ol className="text-gray-300 space-y-3 list-decimal pl-6 leading-7">
          {project.details.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ol>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-3 text-white">Resources</h2>
        <ul className="text-gray-300 space-y-3 flex flex-col gap-3">
          <li>
            <LinkButton href={`https://github.com/${project.id}`}>
              View GitHub Repo
            </LinkButton>
          </li>
          <li>
            <LinkButton href={`https://demo.${project.id}.com`}>
              Launch Live Demo
            </LinkButton>
          </li>
          <li>Built for student-led innovation at InnovateX—contact for collaboration.</li>
        </ul>
      </motion.section>
    </div>
  );
};