import React from "react";
import { motion } from "framer-motion";

// Project Data (for grid box)
export const projectData = {
  id: "ai-study-buddy",
  slug: "ai-study-buddy",
  title: "AI Study Buddy",
  shortDesc: "Personalized AI tutor that adapts to your learning style with quizzes and explanations.",
  tech: ["React", "TensorFlow.js", "Node.js", "Python"],
  date: "2025-03-15",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
};

// Separate Full Page (renders in modal - blue theme, sections)
export const ProjectDetails = () => {
  return (
    <div className="text-white">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl font-bold mb-6 text-blue-400"
      >
        AI Study Buddy
      </motion.h1>
      <img 
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80" 
        alt="AI Study Buddy" 
        className="w-full h-48 object-cover rounded-xl mb-6" 
        loading="lazy"
      />
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          AI Study Buddy uses machine learning to create custom study plans. It analyzes your quiz performance and suggests resources, making learning interactive and fun. Built for students at Gyan Niketan.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "TensorFlow.js", "Node.js", "Python"].map((t) => (
            <span key={t} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">How It Works</h2>
        <ol className="text-gray-300 space-y-2 list-decimal pl-6">
          <li>Sign up and take a diagnostic quiz.</li>
          <li>AI generates personalized flashcards and videos.</li>
          <li>Track progress with real-time analytics.</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3 text-white">Resources</h2>
        <ul className="text-gray-300 space-y-2">
          <li><a href="https://github.com/ai-study-buddy" className="text-blue-400 hover:underline">GitHub Repo</a></li>
          <li><a href="https://aistudybuddy.demo" className="text-blue-400 hover:underline">Live Demo</a></li>
          <li>Tech: TensorFlow.js for browser-based ML.</li>
        </ul>
      </section>
    </div>
  );
};