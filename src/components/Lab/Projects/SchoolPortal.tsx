import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../../ui/navbar";
import { ArrowLeft, Code, FileText, Link as LinkIcon } from "lucide-react";

// Self-Contained Data
export const projectData = {
  id: "2",
  slug: "school-portal",
  title: "School Portal Web App",
  shortDesc: "A secure web dashboard for students to access grades, assignments, and announcements.",
  tech: ["React", "Node.js", "MongoDB"],
  date: "2025-02-20",
  image: "/lab/school-portal.jpg",
  // Optional for details
  desc: "Built with modern web tech, this portal integrates with school databases for real-time updates. Features user auth, responsive design, and admin panels for teachers.",
  team: ["Student Team A"],
  codeLink: "https://github.com/InnovateX/school-portal",
  reportLink: "/lab/reports/school-portal.pdf",
  demoLink: "https://school-portal-demo.vercel.app"
} as const;

// Details Component
const SchoolPortalDetails = () => {
  const navigate = useNavigate();
  const project = projectData;

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="absolute inset-0 opacity-20">
            {/* Changed to blue theme (matching other pages) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full filter blur-[200px]"></div>
          </div>

          <div className="relative z-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate("/lab")} className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors">
                  <ArrowLeft size={20} /> Back to Projects
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-4">{project.title}</h1>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-600/20 text-gray-300 rounded-full text-sm">
                      Team: {project.team.join(", ")}
                    </span>
                    <span className="px-3 py-1 bg-gray-600/20 text-gray-300 rounded-full text-sm">
                      Date: {project.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Tech Stack</span>
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-gray-600/20 text-gray-300 rounded-full text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* Custom Section */}
                  <div className="mt-6 p-4 bg-white/5 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Key Features</h3>
                    <ul className="text-gray-300 space-y-1 list-disc list-inside">
                      <li>Secure user authentication for students and teachers</li>
                      <li>Real-time grade and assignment updates</li>
                      <li>Responsive dashboard with admin panels</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">Resources</h2>
                  <div className="space-y-3">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                      <Code size={20} className="text-blue-400" />
                      <span>View Code (GitHub)</span>
                    </a>
                    <a href={project.reportLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                      <FileText size={20} className="text-green-400" />
                      <span>Download Report (PDF)</span>
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                      <LinkIcon size={20} className="text-purple-400" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchoolPortalDetails;